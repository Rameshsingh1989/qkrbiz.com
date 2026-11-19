import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { createHead, UnheadProvider, renderSSRHead } from "@unhead/react/server";
import App from "./App";
import { getBlogs, getBlogBySlug } from "./services/blogService";
import { getGlossary, getGlossaryBySlug } from "./services/GlossaryService";
import { generateRssXml } from "./utility/RSS/generateRssXml";
import { SsrStatusContext, createSsrStatusHolder } from "./utility/ssrStatus";

const fetchAllBlogs = async () => {
  try { return await getBlogs(); }
  catch (err) { console.error("❌ SSR getBlogs failed:", err.message); return []; }
};

const fetchBlogBySlug = async (slug) => {
  try { return await getBlogBySlug(slug); }
  catch (err) { console.error("❌ SSR getBlogBySlug failed:", err.message); return null; }
};

const fetchAllGlossary = async () => {
  try { return await getGlossary(); }
  catch (err) { console.error("❌ SSR getGlossary failed:", err.message); return []; }
};

const fetchGlossaryBySlug = async (slug) => {
  try { return await getGlossaryBySlug(slug); }
  catch (err) { console.error("❌ SSR getGlossaryBySlug failed:", err.message); return null; }
};

const NON_BLOG_SLUGS = ["qkrhr-blogs"];

/* List pages only render cards, but the API returns every post's full body,
   schema and FAQs — embedding that as window.__SSR_* made /qkrhr-blogs ~1 MB
   and /hr-glossary ~1.8 MB of HTML (96–98% unused JSON). Trim to the fields
   the list components read, BEFORE rendering, so server HTML and client
   hydration use identical data. Keep in sync with HrBlog.jsx / GlossarySection.jsx. */
const BLOG_CARD_FIELDS = [
  "RId", "Title", "BlogURL", "BlogDescription", "BlogImagePath", "AltImage",
  "BlogCatName", "BlogCateIcon", "BlogCatColor", "Author", "PublishDate",
];
const toBlogCards = (blogs) =>
  blogs.map((b) =>
    Object.fromEntries(BLOG_CARD_FIELDS.filter((k) => k in b).map((k) => [k, b[k]]))
  );

const toGlossaryIndex = (items) =>
  items.map((g) => ({
    GlossaryTitle: g.GlossaryTitle,
    GlossaryUrl:   g.GlossaryUrl,
    HasContent:    g.GlossaryContent?.length > 0,
  }));

const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);

const safeJson = (data) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .split(LS).join("\\u2028")
    .split(PS).join("\\u2029");

export async function render(url, context = {}) {
  const head = createHead();

  const origin =
    context.origin ||
    (context.req
      ? `${context.req.headers["x-forwarded-proto"] || "https"}://${context.req.headers.host}`
      : `http://localhost:${process.env.PORT || 3000}`);

  const cleanUrl = url.split("?")[0];

  let initialBlogs        = [];
  let initialBlog         = null;
  let initialGlossaryData = [];
  let initialGlossary     = null;
  let initialRssXml       = "";

  try {
    /* ===========================
       RSS XML ROUTE (CRITICAL)
    =========================== */
    if (cleanUrl === "/hrms-software/qkrhr-blogs/rss.xml") {
      const blogs = await getBlogs();
      initialRssXml = generateRssXml(origin, blogs);
      console.log("✅ RSS Generated:", blogs.length, "blogs");
      return {
        head: "",
        appHtml: initialRssXml,
        ssrDataScript: "",
        statusCode: 200,
        contentType: "application/rss+xml",
      };
    }

    /* ===========================
       NORMAL PAGES
    =========================== */
    // if (cleanUrl === "/hrms-software" || cleanUrl === "/hrms-software/qkrhr-blogs") {
    //   initialBlogs = await fetchAllBlogs();
    //   console.log(`✅ [${cleanUrl}] blogs:`, initialBlogs.length);
    // }
    if (cleanUrl === "/hrms-software/qkrhr-blogs") {
      initialBlogs = toBlogCards(await fetchAllBlogs());
      console.log(`✅ [${cleanUrl}] blogs:`, initialBlogs.length);
    }
    else if (cleanUrl === "/hrms-software/hr-glossary") {
      initialGlossaryData = toGlossaryIndex(await fetchAllGlossary());
      console.log("✅ [/hrms-software/hr-glossary] glossary:", initialGlossaryData.length);
    }
    else if (cleanUrl.startsWith("/hrms-software/hr-glossary/")) {
      const slug = cleanUrl.split("/").pop();
      initialGlossary = await fetchGlossaryBySlug(slug);
    }
    // else if (cleanUrl.startsWith("/hrms-software/hr-glossary/")) {
    //   const slug = cleanUrl.split("/").pop();
    //   [initialGlossaryData, initialGlossary] = await Promise.all([
    //     //fetchAllGlossary(),
    //     fetchGlossaryBySlug(slug),
    //   ]);
    // }
    else {
      const match = cleanUrl.match(/^\/hrms-software\/([^/]+)$/);
      const slug  = match?.[1];

      if (slug && !NON_BLOG_SLUGS.includes(slug)) {
        [initialBlog] = await Promise.all([
         // fetchAllBlogs(),
          fetchBlogBySlug(slug),
        ]);
      }
    }
  } catch (err) {
    console.error("❌ SSR prefetch error:", err.message);
    initialBlogs        = [];
    initialBlog         = null;
    initialGlossaryData = [];
    initialGlossary     = null;
    initialRssXml       = "";
  }

  // Only emit globals that actually have data. Client-side fallbacks
  // ([], null, "") in entry-client.jsx handle anything missing, so
  // pages don't ship noise like `__SSR_BLOGS__ = []` when blogs aren't
  // relevant to the route.
  const ssrPayload = {};
  if (Array.isArray(initialBlogs) && initialBlogs.length)               ssrPayload.__SSR_BLOGS__         = initialBlogs;
  if (initialBlog)                                                       ssrPayload.__SSR_BLOG__          = initialBlog;
  if (Array.isArray(initialGlossaryData) && initialGlossaryData.length) ssrPayload.__SSR_GLOSSARY__      = initialGlossaryData;
  if (initialGlossary)                                                   ssrPayload.__SSR_GLOSSARY_ITEM__ = initialGlossary;
  if (initialRssXml)                                                     ssrPayload.__SSR_RSS_XML__       = initialRssXml;

  const ssrDataLines = Object.entries(ssrPayload)
    .map(([key, value]) => `      window.${key} = ${safeJson(value)};`)
    .join("\n");

  const ssrDataScript = ssrDataLines
    ? `<script>\n${ssrDataLines}\n    </script>`
    : "";

  const statusHolder = createSsrStatusHolder();

  // ── SSR render via renderToPipeableStream + onAllReady ───────
  // Resolves on `onAllReady` (not onShellReady) so every lazy()
  // route chunk and every Suspense boundary fully resolves before
  // we hand the pipe to server.js. The response HTML always
  // contains the real page content, never a <PageLoader /> shell.
  // This is mandatory now that AppRoutes wraps <Routes> in a
  // Suspense boundary — onShellReady would otherwise ship that
  // Suspense fallback as the body and crawlers without JS
  // execution would index the loader instead of the page.
  //
  // We still pipe into res (server.js shim handles head + tail),
  // so the architecture stays streaming-ready; TTFB is the same
  // as a buffered render but the response body is identical to
  // what the user / crawler would see post-hydration.
  // ─────────────────────────────────────────────────────────────
  return new Promise((resolve, reject) => {
    let didError = false;
    let settled  = false;

    const safeResolve = (payload) => {
      if (settled) return;
      settled = true;
      resolve(payload);
    };

    const safeReject = (err) => {
      if (settled) return;
      settled = true;
      reject(err);
    };

    const { pipe, abort } = renderToPipeableStream(
      <SsrStatusContext.Provider value={statusHolder}>
        <UnheadProvider value={head}>
          <StaticRouter location={url}>
            <App
              origin={origin}
              initialBlogs={initialBlogs}
              initialBlog={initialBlog}
              initialGlossaryData={initialGlossaryData}
              initialGlossary={initialGlossary}
              initialRssXml={initialRssXml}
            />
          </StaticRouter>
        </UnheadProvider>
      </SsrStatusContext.Provider>,
      {
        async onAllReady() {
          // Every lazy chunk + Suspense boundary resolved. Head context
          // now has every useHead() call from the fully-rendered tree.
          try {
            const { headTags } = await renderSSRHead(head);
            safeResolve({
              type:          "stream",
              headTags,
              ssrDataScript,
              statusCode:    didError ? 500 : statusHolder.statusCode,
              pipe,          // server.js pipes this into res
              abort,
            });
          } catch (err) {
            console.error("❌ SSR head render error:", err);
            safeReject(err);
          }
        },
        onShellError(err) {
          console.error("❌ SSR shell error:", err);
          safeReject(err);
        },
        onError(err) {
          // Per-boundary error. React substitutes the failed subtree
          // with the nearest error boundary or empty markup. We flag
          // 500 on the final response to surface the problem.
          didError = true;
          console.error("❌ SSR stream error:", err);
        },
      }
    );

    // Safety net — abort if React can't complete in 10s
    // (slow lazy chunk imports + Suspense waterfalls).
    setTimeout(() => {
      if (!settled) {
        console.error("⏱️  SSR render timeout (10s) — aborting");
        abort();
        safeReject(new Error("SSR render timeout"));
      }
    }, 10_000).unref();
  });
}
