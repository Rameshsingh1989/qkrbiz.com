// ⚠️ UNTRUSTED HTML — full DOMPurify sanitization.
// Use this hook for ANY HTML that comes from the CMS / API / users at runtime
// (blogs, glossary, their FAQs). DOMPurify (~11 KB gzip) is only bundled into
// the routes that import this file. For developer-authored static *Data.js
// markup use the lightweight `useSanitizeHtml` instead.
import DOMPurify from "isomorphic-dompurify";
import { decodeEntities } from "../utility/decodeEntities";
import { useCallback } from "react";

// Module-level cache shared across all hook instances (and, on the server,
// across requests). Sanitization is a pure function of the input string, so
// caching by raw HTML is safe. Most content is small, static CMS markup that
// repeats across renders/requests (headings, feature cards, list items),
// giving a near-100% hit rate and turning the DOMPurify cost (~0.23 ms/call)
// into a Map lookup.
//
// Large bodies (e.g. full blog posts) are NOT cached: they render once per
// page, so caching them buys little but would pin tens of KB each in the
// long-lived server process. Skipping them keeps memory bounded and avoids
// hashing huge strings on every lookup.
const cache = new Map();
const MAX_ENTRIES = 300;
const MAX_CACHE_LEN = 20_000; // only cache inputs below ~20 KB

// DOMPurify strips `target` by default, which silently turned every CMS
// "open in new tab" link into a same-tab link. Allow it, but only as
// target="_blank" on <a>, and force rel="noopener noreferrer" (tabnabbing).
const PURIFY_CONFIG = { USE_PROFILES: { html: true }, ADD_ATTR: ["target"] };

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (!node.hasAttribute?.("target")) return;
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
    // Merge, don't overwrite — keep author values like "nofollow"/"sponsored".
    const rel = new Set((node.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener").add("noreferrer");
    node.setAttribute("rel", [...rel].join(" "));
  } else {
    node.removeAttribute("target");
  }
});

const purify = (html) => {
  // 1️⃣ Normalize React attributes → plain HTML attributes.
  //    Stored content sometimes uses className/htmlFor, which browsers
  //    ignore (they only honor class/for), so map them before sanitizing.
  let clean = html
    .replace(/className=/gi, "class=")
    .replace(/htmlFor=/gi,   "for=");

  // 2️⃣ Decode entities (multi-pass until stable) so DOMPurify sees the real
  //    markup and can't be fooled by nested/encoded payloads. decodeEntities
  //    covers all numeric + the 5 tag-delimiter named entities — the only
  //    smuggling vectors — replacing `he` (~32 KB gzip). See decodeEntities.js.
  let prev;
  do {
    prev  = clean;
    clean = decodeEntities(clean);
  } while (clean !== prev);

  // 3️⃣ Sanitize with DOMPurify — an allowlist parser that handles the
  //    obfuscation/mutation vectors a regex pass cannot.
  return DOMPurify.sanitize(clean, PURIFY_CONFIG);
};

const sanitize = (html) => {
  if (html.length > MAX_CACHE_LEN) return purify(html); // don't cache large bodies

  const cached = cache.get(html);
  if (cached !== undefined) return cached;

  const clean = purify(html);

  // Evict oldest entry (insertion order) when the cache is full.
  if (cache.size >= MAX_ENTRIES) cache.delete(cache.keys().next().value);
  cache.set(html, clean);

  return clean;
};

const useSanitizeHtmlSafe = () => {
  return useCallback((html = "") => {
    if (!html || typeof html !== "string") {
      return { __html: "" };
    }
    return { __html: sanitize(html) };
  }, []);
};

export default useSanitizeHtmlSafe;
