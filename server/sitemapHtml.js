// Human-readable view of the XML sitemaps, rendered on the server.
//
// Replaces the former public/sitemap.xsl: browsers are dropping XSLT, so when
// a person opens a sitemap the server renders this HTML instead. Crawlers keep
// receiving the raw XML — see the sitemap middleware in server.js.
//
// The sitemap files are our own static XML with a fixed shape, so a small
// regex reader is enough — no XML parser dependency.

const escapeHtml = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// XML entities in <loc> (e.g. &amp;) back to text before re-escaping for HTML.
const decodeXml = (s = "") =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");

const tag = (block, name) => {
  const m = block.match(new RegExp(`<${name}>\\s*([\\s\\S]*?)\\s*</${name}>`));
  return m ? decodeXml(m[1]) : "";
};

// Commented-out entries (<!-- <url>…</url> -->) aren't part of the sitemap.
const stripComments = (xml) => xml.replace(/<!--[\s\S]*?-->/g, "");

const entries = (xml, name) =>
  [...stripComments(xml).matchAll(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`, "g"))].map(([, block]) => ({
    loc: tag(block, "loc"),
    lastmod: tag(block, "lastmod"),
  }));

// "2026-07-16T12:00+05:30" → "2026-07-16 12:00 +05:30"; "2025-04-10" → "2025-04-10 00:00 +05:30".
function formatDate(d) {
  if (d.includes("T")) {
    const [date, time] = d.split("T");
    const offset = time.match(/[+-]\d{2}:\d{2}$/)?.[0] || "+00:00";
    return `${date} ${time.slice(0, 5)} ${offset}`;
  }
  return d.length >= 10 ? `${d.slice(0, 10)} 00:00 +05:30` : "—";
}

const STYLES = `
  :root { --brand:#96006B; --ancher:#0236c6; --brand-dark:#6d004f; --ink:#1f2430; --muted:#6b7280; --line:#e5e7eb; --row:#f7f7fb; }
  * { box-sizing:border-box; }
  body { margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; color:var(--ink); background:#fff; }
  a { color:var(--ancher); text-decoration:none; word-break:break-all; }
  a:hover { text-decoration:underline; }
  header { background:linear-gradient(135deg,var(--brand),var(--brand-dark)); color:#fff; padding:32px 24px; }
  header .wrap { max-width:1100px; margin:0 auto; }
  header h1 { margin:0 0 8px; font-size:28px; font-weight:700; }
  header p { margin:2px 0; font-size:14px; line-height:1.5; color:rgba(255,255,255,.9); }
  header a { color:#fff; text-decoration:underline; }
  main { max-width:1100px; margin:0 auto; padding:24px; }
  .back { margin:4px 2px 10px 2px; font-size:14px; }
  .back a { color:var(--ancher); font-weight:600; }
  .count { color:var(--muted); font-size:14px; margin:8px 2px 16px; }
  .count strong { color:var(--ink); }
  .card { border:1px solid var(--line); border-radius:10px; overflow:hidden; }
  .scroll { overflow-x:auto; }
  table { width:100%; border-collapse:collapse; font-size:14px; min-width:520px; }
  thead th { background:var(--brand); color:#fff; text-align:left; font-weight:600; padding:12px 16px; white-space:nowrap; }
  tbody td { padding:11px 16px; border-top:1px solid var(--line); vertical-align:top; }
  tbody tr:nth-child(even) { background:var(--row); }
  tbody tr:hover { background:#fdeef8; }
  td.num { color:var(--muted); width:44px; text-align:right; }
  td.date { color:var(--muted); white-space:nowrap; }
  footer { max-width:1100px; margin:0 auto; padding:16px 24px 40px; color:var(--muted); font-size:12px; }
  @media (max-width:640px){ header{padding:24px 16px;} header h1{font-size:22px;} main{padding:16px;} }`;

const link = (url) => `<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>`;

const table = (headers, rows) => `
    <div class="card">
      <div class="scroll">
        <table>
          <thead><tr>${headers}</tr></thead>
          <tbody>
          ${rows.join("\n          ")}
          </tbody>
        </table>
      </div>
    </div>`;

const URL_HEAD = `<th class="num">#</th><th>URL</th><th>Last Modified</th>`;
const urlRows = (urls) =>
  urls.map((r, i) => `<tr><td class="num">${i + 1}</td><td>${link(r.loc)}</td><td class="date">${escapeHtml(formatDate(r.lastmod))}</td></tr>`);

/**
 * Render a sitemap index or URL-set XML document as the human-readable page.
 * `siteUrl` is the origin shown in the header (already rewritten per env).
 * `fileName` is the sitemap being shown; every view except sitemap.xml itself
 * links back to it (sitemap.xml is the flat list of all pages).
 * Returns null if the XML is neither shape, so the caller can fall back to XML.
 */
export function renderSitemapHtml(xml, siteUrl, fileName = "") {
  const isIndex = /<sitemapindex[\s>]/.test(xml);
  if (!isIndex && !/<urlset[\s>]/.test(xml)) return null;

  const rows = entries(xml, isIndex ? "sitemap" : "url");
  const host = escapeHtml(siteUrl.replace(/^https?:\/\/(www\.)?/, ""));
  const home = `<a href="${escapeHtml(siteUrl)}">${host}</a>`;
  const showBack = fileName !== "sitemap.xml";

  const intro = isIndex
    ? `This is the XML Sitemap Index for ${home}. It lists the sitemaps that search engines like Google use to crawl and index the site.`
    : `This XML Sitemap lists the pages of ${home} submitted for crawling and indexing.`;

  const count = isIndex
    ? `This index contains <strong>${rows.length}</strong> sitemaps.`
    : `This sitemap contains <strong>${rows.length}</strong> URLs.`;

  const content = isIndex
    ? table(`<th class="num">#</th><th>URL</th>`, rows.map((r, i) => `<tr><td class="num">${i + 1}</td><td>${link(r.loc)}</td></tr>`))
    : table(URL_HEAD, urlRows(rows));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,follow" />
  <title>Qkrbiz XML Sitemap</title>
  <style>${STYLES}
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <h1>XML Sitemap</h1>
      <p>${intro}</p>
      <p>Learn more about <a href="https://www.sitemaps.org/">XML Sitemaps</a>.</p>
    </div>
  </header>
  <main>
    <p class="count">${count}</p>${showBack ? `
    <p class="back"><a href="/sitemap.xml">&#8592; All pages</a></p>` : ""}${content}
  </main>
  <footer>Qkrbiz — XML Sitemap</footer>
</body>
</html>`;
}
