/**
 * Minimal HTML-entity decoder — a targeted replacement for the `he` library
 * (~100 KB raw / ~32 KB gzip) in the sanitize pre-pass (see useSanitizeHtml.js).
 *
 * Security rationale: the pre-decode exists only to stop entity-encoded tag
 * smuggling (e.g. `&amp;lt;script&amp;gt;` → `<script>`) before DOMPurify runs.
 * A tag can ONLY be smuggled through the delimiter characters < > & " ' — and
 * no named HTML entity except lt/gt/amp/quot/apos maps to those. So decoding
 * ALL numeric entities plus those five named ones catches every smuggling
 * vector. Other named entities (&copy;, &mdash;, &nbsp;, …) are harmless text
 * that DOMPurify + innerHTML render identically whether pre-decoded or not, so
 * leaving them encoded changes nothing in the final output.
 *
 * Used in the same multi-pass loop as before (decode until stable), so
 * double-encoded delimiters are still fully unwound.
 */
const NAMED = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
};

// Matches &name; , &#123; , &#xAF; (case-insensitive on the hex marker/name).
const ENTITY_RE = /&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi;

export function decodeEntities(str) {
  return str.replace(ENTITY_RE, (match, body) => {
    if (body[0] === "#") {
      const code =
        body[1] === "x" || body[1] === "X"
          ? parseInt(body.slice(2), 16)
          : parseInt(body.slice(1), 10);
      if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return match;
      try {
        return String.fromCodePoint(code);
      } catch {
        return match; // invalid code point (e.g. surrogate) — leave as-is
      }
    }
    const named = NAMED[body.toLowerCase()];
    return named !== undefined ? named : match; // unknown named entity: keep as text
  });
}

export default decodeEntities;
