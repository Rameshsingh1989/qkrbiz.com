import fs from "node:fs";
import path from "node:path";
import { Writable } from "node:stream";
import express from "express";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import { getModulesForUrl } from "../src/utility/routeModuleMap.js";
import { createHtmlCache } from "../src/utility/htmlCache.js";
import { sendMailViaQkrBiz } from './qkrbizMail.js'
import { renderSitemapHtml } from './sitemapHtml.js';

// This file lives in server/ — resolve everything (dist, public, index.html,
// .env files, Vite root) against the project root, not this folder or the cwd.
const __dirname = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const distExists = fs.existsSync(path.resolve(__dirname, "dist/client/index.html"));
const NODE_ENV   = process.env.NODE_ENV || (distExists ? "production" : "development");
const isProd     = NODE_ENV === "production";

dotenv.config({ path: path.resolve(__dirname, isProd ? ".env.production" : ".env") });

const SITE_URL = isProd ? process.env.VITE_SITE_URL || "https://www.qkrbiz.com" : `http://localhost:${process.env.PORT || 3000}`;

/* ─── SSR HTML cache config ────────────────────────────────
   Rendered HTML is cached in-memory per pathname (prod only) so warm
   requests skip the buffered React render entirely — the main lever on
   TTFB. TTL is short (few minutes) so published blog/glossary edits go
   live quickly. Tune or disable via env:
     HTML_CACHE=off            → disable entirely
     HTML_CACHE_TTL_MS=300000  → per-entry TTL (default 5 min)
     HTML_CACHE_MAX=300        → max entries before LRU eviction
   s-maxage is emitted on responses so an Nginx proxy_cache (or any CDN
   added later) can also cache HTML at the edge — that fixes the mobile
   TTFB gap that an app-level cache alone can't (geographic latency).
─────────────────────────────────────────────────────────── */
const HTML_CACHE_ENABLED = isProd && process.env.HTML_CACHE !== "off";
const HTML_CACHE_TTL_MS  = Number(process.env.HTML_CACHE_TTL_MS) || 5 * 60 * 1000;
const HTML_CACHE_MAX     = Number(process.env.HTML_CACHE_MAX) || 300;
const HTML_SMAXAGE       = Math.floor(HTML_CACHE_TTL_MS / 1000);
// Browsers revalidate every navigation (max-age=0) — no stale content in the
// user's own cache; shared caches (Nginx/CDN) may hold it for s-maxage seconds.
const HTML_CACHE_CONTROL = `public, max-age=0, s-maxage=${HTML_SMAXAGE}, stale-while-revalidate=60`;
const htmlCache = createHtmlCache({ max: HTML_CACHE_MAX, ttlMs: HTML_CACHE_TTL_MS });

console.log("\n" + "=".repeat(60));
console.log("🚀 Starting SSR Server");
console.log("=".repeat(60));
console.log(`   Environment : ${NODE_ENV}`);
console.log(`   Working Dir : ${__dirname}`);
console.log(`   Site URL    : ${SITE_URL}`);
console.log(`   Dist Exists : ${distExists}`);
console.log("=".repeat(60) + "\n");

if (isProd && !distExists) {
  console.error("❌ ERROR: Production mode but dist folder not found!");
  console.error("   Run 'npm run build' first");
  process.exit(1);
}

// JS files index.html already modulepreloads: the entry and its static imports.
const entryJsFiles = new Set();
function getEntryJsFiles(clientManifest) {
  if (!entryJsFiles.size && clientManifest) {
    const walk = (key) => {
      const chunk = clientManifest[key];
      if (!chunk || entryJsFiles.has(chunk.file)) return;
      entryJsFiles.add(chunk.file);
      for (const dep of chunk.imports || []) walk(dep);
    };
    Object.keys(clientManifest).filter((k) => clientManifest[k].isEntry).forEach(walk);
  }
  return entryJsFiles;
}

/**
 * Returns the <link> tags the matched route needs in the SSR head:
 *  - <link rel="stylesheet"> for the page chunk's CSS AND the CSS of the shared
 *    chunks it statically imports, so the page is styled before its JS runs;
 *  - <link rel="modulepreload"> for those same JS chunks, so the browser
 *    downloads the page's code in parallel with the entry instead of only
 *    after the entry has run and lazy-loaded the route (one round trip saved).
 * Walks Vite's client manifest in dependency order (imports first), the same
 * order Vite loads them; falls back to the SSR manifest for modules that aren't
 * chunks (e.g. a route's extra `css` entries). Entry CSS/JS are skipped —
 * index.html already links them.
 * Returns "" in dev mode (manifests are null) or if nothing is found.
 */
function getRouteAssetLinks(cleanUrl, ssrManifest, clientManifest) {
  if (!ssrManifest && !clientManifest) return "";
  const modules = getModulesForUrl(cleanUrl);
  if (!modules.length) return "";

  const entryJs = getEntryJsFiles(clientManifest);
  const cssFiles = new Set();
  const jsFiles = new Set();
  const visited = new Set();
  const walk = (key) => {
    const chunk = clientManifest[key];
    if (!chunk || visited.has(key) || chunk.isEntry) return;
    visited.add(key);
    for (const dep of chunk.imports || []) walk(dep);
    for (const css of chunk.css || []) cssFiles.add("/" + css);
    if (chunk.file?.endsWith(".js") && !entryJs.has(chunk.file)) jsFiles.add("/" + chunk.file);
  };

  for (const mod of modules) {
    if (clientManifest?.[mod]) {
      walk(mod);
    } else if (Array.isArray(ssrManifest?.[mod])) {
      for (const asset of ssrManifest[mod]) {
        if (typeof asset === "string" && asset.endsWith(".css")) cssFiles.add(asset);
      }
    }
  }
  return [
    ...[...cssFiles].map((f) => `<link rel="stylesheet" href="${f}">`),
    ...[...jsFiles].map((f) => `<link rel="modulepreload" crossorigin href="${f}">`),
  ].join("\n    ");
}

async function createServer() {
  const app = express();
   /* IMPORTANT */
  app.set("trust proxy", true);

  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );

  app.use(compression());

  /* ─── Canonical 301 redirects (all envs) ─────────────── */
  const STATIC_REDIRECTS = {
    "/hrms-software/top-10-best-hrms-software-in-india":"/hrms-software/top-10-hrms-software-in-india",
    "/hrms-software/qkrhr-blogs/rss":"/hrms-software/qkrhr-blogs/rss.xml",
    "/hrms-software/hrms-software-in-mumbai":"/hrms-software/hr-payroll-software-mumbai",
    "/hrms-software/hrms-software-in-hyderabad":"/hrms-software/hr-payroll-software-hyderabad",
    "/hrms-software/hrms-software-in-bengaluru":"/hrms-software/hr-payroll-software-bengaluru",
    "/hrms-software/hr-payroll-software-in-chennai":"/hrms-software/hr-payroll-software-chennai",
    //QkrPayroll
    "/hrms-software/payroll-software":"/payroll-software",
    "/hrms-software/payroll-management-system":"/payroll-software/management",
    "/hrms-software/statutory-compliance":"/payroll-software/statutory-compliance",
    "/hrms-software/loans-advances":"/payroll-software/loans-advances",
  };

  /* ─── SEO redirects (all envs) ─────────────────────────
     Trailing slash, double slash, force www, force https,
     and legacy-URL 301s. Idempotent if Nginx already did it.
  ────────────────────────────────────────────────────── */
  app.use((req, res, next) => {
    try {
      let host = req.headers.host || "";
      const originalUrl = req.originalUrl;
      const qIndex = originalUrl.indexOf("?");
      let pathname = qIndex === -1 ? originalUrl : originalUrl.slice(0, qIndex);
      const search = qIndex === -1 ? "" : originalUrl.slice(qIndex);

      // ── Protocol detection (loop-safe) ────────────────────────
      // Behind Nginx (or any TLS-terminating proxy), the TCP connection
      // to Node is plain HTTP — so `req.secure` is always false even
      // when the original client request was HTTPS. We rely on the
      // `X-Forwarded-Proto` header for the truth.
      //
      // If that header is MISSING entirely, we DO NOT redirect. Two
      // reasons:
      //   1. We can't tell whether the client connected via http or
      //      https without it, and guessing wrong creates an infinite
      //      loop (Nginx terminates https → forwards as http → we 301
      //      to https → Nginx terminates again → forever).
      //   2. If Nginx isn't sending the header, it's almost certainly
      //      because TLS is already required by the listener config —
      //      so the client must be on https already.
      // The proper fix is to add `proxy_set_header X-Forwarded-Proto
      // $scheme;` in Nginx, but this middleware now stays safe either
      // way.
      const forwardedProto = req.headers["x-forwarded-proto"];
      const clientIsHttp =
        forwardedProto === "http" ||
        (forwardedProto === undefined && !req.secure && !req.headers["x-forwarded-for"]);
        // ↑ no proxy at all AND direct connection is plain http

      const isLocal =
        host.includes("localhost") ||
        host.startsWith("127.") ||
        host.startsWith("192.");

      let redirectNeeded = false;

      /* Static 301 mapping */
      if (STATIC_REDIRECTS[pathname]) {
        pathname = STATIC_REDIRECTS[pathname];
        redirectNeeded = true;
      }

      /* Trailing slash */
      if (pathname.length > 1 && pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
        redirectNeeded = true;
      }

      /* Double slashes */
      const normalizedPath = pathname.replace(/\/{2,}/g, "/");
      if (normalizedPath !== pathname) {
        pathname = normalizedPath;
        redirectNeeded = true;
      }

      /* Force HTTPS — only when we can prove the client is on http */
      if (!isLocal && clientIsHttp) {
        redirectNeeded = true;
      }

      if (redirectNeeded) {
        // Final scheme: https in prod, http locally. Never downgrade
        // a request that came in via https (which we know from
        // `forwardedProto === "https"` or "no header → trust proxy").
        const finalProto = isLocal ? "http" : "https";
        const redirectUrl = `${finalProto}://${host}${pathname}${search}`;
        console.log(`🔀 SEO Redirect: ${req.url} → ${redirectUrl}`);
        return res.redirect(301, redirectUrl);
      }

      next();
    } catch (err) {
      console.error("❌ SEO Redirect Middleware Error:", err);
      next();
    }
  });

  /* ─── Dynamic sitemap origin rewrite (all envs) ───────────
     The sitemap .xml files hardcode the production origin
     (https://www.qkrbiz.com). Serve them through this handler so
     every <loc> reflects the CURRENT
     origin: http://localhost:3000 in dev, the canonical
     https://www.qkrbiz.com in prod. This keeps local previews
     clickable and guarantees a dev crawl never emits localhost
     URLs to production. Runs before Vite (dev) and static (prod).
  ────────────────────────────────────────────────────── */
  const SITEMAP_SRC_DIR   = isProd ? path.resolve(__dirname, "dist/client") : path.resolve(__dirname, "public");
  const SITEMAP_PROD_ORIGIN = "https://www.qkrbiz.com";

  // A sitemap file's XML with <loc>s rewritten to the current origin, or null
  // if `name` isn't a sitemap file (sitemap.xml, <section>-sitemap.xml) or is missing.
  const readSitemap = (name) => {
    if (!/^[a-z0-9-]*sitemap[a-z0-9-]*\.xml$/i.test(name)) return null;
    const file = path.join(SITEMAP_SRC_DIR, name);
    if (!fs.existsSync(file)) return null;
    const body = fs.readFileSync(file, "utf-8");
    return SITE_URL === SITEMAP_PROD_ORIGIN ? body : body.split(SITEMAP_PROD_ORIGIN).join(SITE_URL);
  };

  app.use((req, res, next) => {
    try {
      const name = path.basename(req.path);
      const body = readSitemap(name);
      if (body === null) return next();
      res.set("Cache-Control", "public, max-age=3600");
      // Same URL, two representations — tell caches (Nginx) to key on it.
      res.set("Vary", "Sec-Fetch-Dest");

      // A person opening the sitemap in a browser (top-level navigation)
      // gets server-rendered HTML (browsers are removing XSLT, which the old
      // sitemap.xsl view relied on). Crawlers never send Sec-Fetch-Dest and
      // keep receiving the raw XML.
      if (req.get("Sec-Fetch-Dest") === "document") {
        const html = renderSitemapHtml(body, SITE_URL, name);
        if (html) {
          res.set("Content-Type", "text/html; charset=utf-8");
          res.set("X-Robots-Tag", "noindex, follow");
          return res.send(html);
        }
      }

      res.set("Content-Type", "application/xml; charset=utf-8");
      return res.send(body);
    } catch (err) {
      console.error("❌ Sitemap rewrite error:", err);
      return next();
    }
  });

  let vite;
  let prodRender;
  let prodTemplate;
  let ssrManifest = null;
  let clientManifest = null;

  /* ─── DEV MODE ─────────────────────────────────────── */
  if (!isProd) {
    console.log("🔧 Loading Vite middleware...");
    vite = await createViteServer({
      root: __dirname,
      server: {
        middlewareMode: true,
        host: true,
        allowedHosts: ["qkrbiz.com", "www.qkrbiz.com", "localhost", "127.0.0.1"],
      },
      appType: "custom",
    });

    app.use(vite.middlewares);
    console.log("✅ Vite middleware ready\n");
  }

  /* ─── PROD: cache render + template at startup ─── */
  if (isProd) {
    console.log("📦 Loading server entry & caching template...");

    const serverEntry = path.resolve(__dirname, "dist/server/entry-server.js");
    if (!fs.existsSync(serverEntry)) {
      console.error("❌ Missing server build: dist/server/entry-server.js");
      process.exit(1);
    }

    const clientIndex = path.resolve(__dirname, "dist/client/index.html");
    if (!fs.existsSync(clientIndex)) {
      console.error("❌ Missing client build: dist/client/index.html");
      process.exit(1);
    }

    const serverEntryUrl =
      process.platform === "win32"
        ? `file:///${serverEntry.replace(/\\/g, "/")}`
        : `file://${serverEntry}`;

    const mod = await import(serverEntryUrl);
    if (!mod.render) {
      console.error("❌ entry-server.js must export 'render'");
      process.exit(1);
    }
    prodRender   = mod.render;
    prodTemplate = fs.readFileSync(clientIndex, "utf-8");

    const manifestPath = path.resolve(__dirname, "dist/client/.vite/ssr-manifest.json");
    if (fs.existsSync(manifestPath)) {
      try {
        ssrManifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
        console.log("✅ SSR manifest loaded:", Object.keys(ssrManifest).length, "entries");
      } catch (e) {
        console.warn("⚠️  SSR manifest parse failed:", e.message);
      }
    } else {
      console.warn("⚠️  No ssr-manifest.json — per-route CSS preloads disabled");
    }

    // Client manifest: chunk → imports + css, used to also link the CSS of
    // shared chunks a page imports (see getRouteAssetLinks).
    const clientManifestPath = path.resolve(__dirname, "dist/client/.vite/manifest.json");
    if (fs.existsSync(clientManifestPath)) {
      try {
        clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, "utf-8"));
      } catch (e) {
        console.warn("⚠️  Client manifest parse failed:", e.message);
      }
    }

    console.log("✅ Server entry & template loaded\n");
  }

  /* ─── PROD: Static Files ────────────────────────────── */
  if (isProd) {
    const clientPath = path.resolve(__dirname, "dist/client");
    const assetsPath = path.resolve(__dirname, "dist/client/assets");

    app.use(
      "/assets",
      express.static(assetsPath, {
        immutable: true,
        maxAge: "1y",
        setHeaders: (res) =>
          res.set("Cache-Control", "public, max-age=31536000, immutable"),
      })
    );

    // Fonts are static and rarely change — cache them for a year instead of
    // letting the catch-all handler below give them only 1h (which forces the
    // ~400 KiB of woff2 to re-download hourly / on every fresh navigation).
    // If a font file is ever updated, change its filename to bust the cache.
    const fontsPath = path.resolve(__dirname, "dist/client/fonts");
    app.use(
      "/fonts",
      express.static(fontsPath, {
        immutable: true,
        maxAge: "1y",
        setHeaders: (res) =>
          res.set(
            "Cache-Control", 
            "public, max-age=31536000, immutable"
          ),
      })
    );

    app.use(express.static(clientPath, { index: false, maxAge: "1h" }));
    console.log("✅ Static serving configured\n");
  }

  /*
|--------------------------------------------------------------------------
| API routes (must be registered before the SSR catch-all below)
|--------------------------------------------------------------------------
*/

app.post('/api/send-mail', express.json({ limit: '256kb' }), async (req, res) => {
  const body = req.body || {}

  // Accept the CEmail-shaped payload the client already builds.
  const sendTo = body.SendTo || body.sendTo
  const message = body.Message || body.message

  if (!sendTo || !message) {
    return res.status(400).json({ error: 'SendTo and Message are required' })
  }

  try {
    const result = await sendMailViaQkrBiz(body)

    if (!result.ok) {
      console.error('Mail relay upstream error:', result.status, result.text)
      return res
        .status(502)
        .json({ error: `Mail API ${result.status}`, detail: result.text })
    }

    // Upstream returns a bare string like "Sent" — normalise it.
    return res.json({ result: result.text.replace(/^"|"$/g, '') })
  } catch (error) {
    console.error('Mail relay failed:', error)
    return res.status(500).json({ error: error.message })
  }
})

  /* ─── SSR Handler (pipe-based, buffered) ──────────────
     Splits the index.html template at <!--ssr-outlet--> into
     a "head" half (with <!--head-outlet--> placeholder) and a
     "tail" half (with <!--ssr-data--> placeholder). For every
     request:
       1. Write status + Content-Type
       2. Write the head half with headTags injected
       3. Pipe React's stream directly into res
       4. After React finishes, write the tail with ssrDataScript

     NOTE: despite using renderToPipeableStream, this does NOT
     stream progressively. entry-server.jsx resolves render() on
     `onAllReady` (not onShellReady), so `await render()` above
     blocks until the whole tree is done before we write the first
     byte — TTFB is that of a buffered render. This is required and
     cannot be changed here:
       • SEO: the top-level <Suspense> in App.jsx would otherwise
         flush the <PageLoader/> shell as the body.
       • Head: headTags come from renderSSRHead() AFTER the tree
         renders, so a correct per-page <head> can't be flushed
         early anyway.
     The pipe() architecture is kept so the response body is
     identical to the streaming shape and easy to switch later.
  ────────────────────────────────────────────────────── */
  app.use(async (req, res) => {
    const start = Date.now();
    const url   = req.originalUrl;

    // Cache key is the pathname (query stripped) — the rendered HTML is
    const cacheKey = HTML_CACHE_ENABLED && req.method === "GET" ? url : null;

    if (cacheKey) {
      const cached = htmlCache.get(cacheKey);
      if (cached) {
        console.log(`⚡ Cache HIT: ${cacheKey} (${Date.now() - start}ms)`);
        return res
          .status(200)
          .set("Content-Type", "text/html; charset=utf-8")
          .set("Cache-Control", HTML_CACHE_CONTROL)
          .set("X-HTML-Cache", "HIT")
          .send(cached);
      }
    }

    try {
      let template, render;

      if (!isProd) {
        const indexPath = path.resolve(__dirname, "index.html");
        if (!fs.existsSync(indexPath)) throw new Error("index.html not found");

        template = fs.readFileSync(indexPath, "utf-8");
        template = await vite.transformIndexHtml(url, template);

        const mod = await vite.ssrLoadModule("/src/entry-server.jsx");
        if (!mod.render) throw new Error("entry-server.jsx must export 'render'");
        render = mod.render;
      } else {
        template = prodTemplate;
        render   = prodRender;
      }

      // Split the template at the outlet marker. Both halves still
      // contain their respective placeholders (<!--head-outlet--> and
      // <!--ssr-data-->) which we replace per-request.
      const outletIdx = template.indexOf("<!--ssr-outlet-->");
      if (outletIdx === -1) throw new Error("Template missing <!--ssr-outlet--> placeholder");
      const templateHead = template.slice(0, outletIdx);
      const templateTail = template.slice(outletIdx + "<!--ssr-outlet-->".length);

      console.log(`📥 Rendering SSR for: ${url}`);

      const rendered = await render(url, { origin: SITE_URL, req });
      if (!rendered) throw new Error("render() returned null/undefined");

      /* ===========================
        RSS XML HANDLER (CRITICAL)
      =========================== */
      if (rendered.contentType === "application/rss+xml") {
        console.log("📡 Serving RSS XML");
        return res
          .status(200)
          .set("Content-Type", "application/rss+xml")
          .send(rendered.appHtml);
      }

      // Streaming branch — rendered.type === "stream"
      if (rendered.type === "stream") {
        const { headTags, ssrDataScript, statusCode, pipe, abort } = rendered;

        // If the client disconnects mid-render, stop React from doing
        // more work and free the Suspense buffers.
        const onClientClose = () => abort();
        res.once("close", onClientClose);

        // Assemble the head + tail halves. Inject unhead tags at
        // <!--head-outlet-->, followed by any per-route CSS <link> tags from
        // the SSR manifest so the browser starts fetching lazy-chunk CSS
        // before JS executes.
        const assetLinks = getRouteAssetLinks(url.split("?")[0], ssrManifest, clientManifest);
        const headInsert = [(headTags || "").trim(), assetLinks].filter(Boolean).join("\n    ");
        const headHtml = templateHead.replace("<!--head-outlet-->", headInsert);
        const tailHtml = templateTail.replace("<!--ssr-data-->", (ssrDataScript || "").trim());

        // Collect React's stream into a buffer rather than piping straight to
        // res. The render is already buffered (onAllReady), so there is no
        // progressive-streaming benefit to lose — and buffering lets us both
        // cache the complete HTML and emit Cache-Control for edge caches.
        const chunks = [];
        const collector = new Writable({
          write(chunk, _enc, cb) { chunks.push(Buffer.from(chunk)); cb(); },
        });

        collector.on("finish", () => {
          res.removeListener("close", onClientClose);

          // Client already gone (aborted) — nothing to send, don't cache partial.
          if (res.writableEnded || res.destroyed) return;

          const bodyHtml    = Buffer.concat(chunks).toString("utf-8");
          const fullHtml    = headHtml + bodyHtml + tailHtml;
          const finalStatus = statusCode || 200;

          // Only cache clean 200 responses (skip 404/500 and per-boundary errors).
          if (cacheKey && finalStatus === 200) htmlCache.set(cacheKey, fullHtml);

          res
            .status(finalStatus)
            .set("Content-Type", "text/html; charset=utf-8")
            .set("Cache-Control", cacheKey ? HTML_CACHE_CONTROL : "no-cache")
            .set("X-HTML-Cache", "MISS")
            .send(fullHtml);

          const duration = Date.now() - start;
          console.log(`✅ SSR Complete (${duration}ms, MISS${cacheKey ? ", cached" : ""})`);
        });

        pipe(collector);
        return;
      }

      // Fallback path — should never hit unless entry-server.jsx
      // returns a non-streaming non-RSS response (legacy shape).
      throw new Error("Unexpected render() result: " + JSON.stringify(Object.keys(rendered)));

    } catch (err) {
      if (!isProd && vite) vite.ssrFixStacktrace(err);
      console.error("\n❌ SSR ERROR", err.stack || err);

      if (!isProd) {
        res.status(500).send(`
          <html>
            <head><title>SSR Error</title></head>
            <body style="font-family:monospace;background:#111;color:#fff;padding:20px;">
              <h1>⚠️ SSR Error</h1>
              <pre>${err.stack}</pre>
            </body>
          </html>
        `);
      } else {
        res.status(500).end("Internal Server Error");
      }
    }
  });

  /* ─── Start ──────────────────────────────────────────── */
  const port = process.env.PORT || 3000;
  const host = isProd ? "127.0.0.1" : "0.0.0.0";

  const server = app.listen(port, host, () => {
    console.log("\n" + "=".repeat(60));
    console.log("✅ Server running!");
    console.log(`   Mode : ${NODE_ENV}`);
    console.log(`   Bind : ${host}:${port}`);
    console.log(`   URL  : ${SITE_URL}`);
    console.log("=".repeat(60) + "\n");
  });

  const shutdown = (signal) => {
    console.log(`\n🛑 ${signal} received — shutting down gracefully...`);
    server.close(() => {
      console.log("✅ HTTP server closed");
      process.exit(0);
    });
    setTimeout(() => {
      console.error("⚠️  Forced exit after timeout");
      process.exit(1);
    }, 10_000).unref();
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT",  () => shutdown("SIGINT"));
}

createServer().catch((err) => {
  console.error("❌ FATAL ERROR: Failed to start server", err);
  process.exit(1);
});

