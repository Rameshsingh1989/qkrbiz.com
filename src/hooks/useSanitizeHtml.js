// ⚠️ TRUSTED HTML ONLY — this hook does NOT sanitize.
// It is for developer-authored static markup in the repo's *Data.js files,
// rendered on nearly every page. It only maps React-style attributes
// (className/htmlFor) to plain HTML so the browser honours them.
//
// Any HTML that comes from the CMS / API / users at runtime MUST go through
// `useSanitizeHtmlSafe` (DOMPurify) instead, or it is an XSS hole. Keeping
// DOMPurify out of this hook keeps it (~11 KB gzip) off every page's
// critical path. Shared leaf components (e.g. FaqComponent) use this hook, so
// callers passing them CMS data must pre-sanitize it with the Safe hook.
import { useCallback } from "react";

const normalize = (html) =>
  html.replace(/className=/gi, "class=").replace(/htmlFor=/gi, "for=");

const useSanitizeHtml = () => {
  return useCallback((html = "") => {
    if (!html || typeof html !== "string") {
      return { __html: "" };
    }
    return { __html: normalize(html) };
  }, []);
};

export default useSanitizeHtml;
