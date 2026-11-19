// PostCSS config — PurgeCSS strips unused CSS (mainly the ~90% of Bootstrap
// utility/component rules this site never uses) from the production build.
//
// It runs ONLY in production (`npm run build` → Vite sets NODE_ENV=production).
// `npm run dev` (cross-env NODE_ENV=development) leaves CSS untouched so HMR and
// dynamic classes are never stripped while developing.
//
// ⚠️  PurgeCSS only sees classes that appear literally in the scanned source.
// Anything added at RUNTIME must be safelisted or it gets deleted:
//   • Swiper injects swiper-* classes via JS after mount.
//   • Bootstrap JS / react-bootstrap toggle .show .fade .collapsing .active …
//     and mount .modal-backdrop / .offcanvas-backdrop / .tooltip / .popover
//     into the DOM — none of which exist in JSX.
//   • Blog / glossary bodies come from the API as HTML strings rendered with
//     dangerouslySetInnerHTML — their wrapper classes live in JSX (kept), but
//     any inline utility class inside that HTML is invisible to PurgeCSS, so we
//     safelist the common content utilities below.
// If you add a new class-driven library, extend the safelist before shipping.

import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

const isProd = process.env.NODE_ENV === "production";

export default {
  plugins: [
    isProd &&
      purgeCSSPlugin({
        content: [
          "./index.html",
          "./src/**/*.{js,jsx}",
        ],
        // Default extractor that also keeps classes containing `/` `:` `.` etc.
        defaultExtractor: (content) => content.match(/[\w-/:%.]+(?<!:)/g) || [],
        safelist: {
          standard: [
            "html",
            "body",
            // Bootstrap runtime state classes (toggled by JS)
            "breadcrumb",
            "breadcrumb-item",
            "breadcrumb-item-active",
            "show",
            "showing",
            "hide",
            "hiding",
            "fade",
            "collapse",
            "collapsing",
            "collapsed",
            "active",
            "disabled",
            "open",
            "modal-open",
            "modal-static",
            "modal-backdrop",
            "offcanvas-backdrop",
            "fade",
            // react-bootstrap a11y label spans (Pagination, Spinner, CloseButton…)
            "visually-hidden",
            "visually-hidden-focusable",
          ],
          // greedy: keep the whole rule if ANY selector part matches — covers
          // compound selectors like `.swiper-slide-active .foo`.
          greedy: [
            // Swiper (all runtime classes)
            /swiper/,
             // Qkr chatbot — dynamically generated message classes
             /^qkr-chat-msg/,
             // Bootstrap components mounted / toggled at runtime
             /^breadcrumb/,
            /^modal/,
            /^offcanvas/,
            /^dropdown/,
            /^tooltip/,
            /^bs-tooltip/,
            /^popover/,
            /^bs-popover/,
            /^carousel/,
            /^accordion/,
            // react-bootstrap Pagination — page-item / page-link built at runtime
            /^pagination/,
            /^page-/,
            /^collaps/,
            /^fade/,
            /^show$/,
            /^nav/,
            /^tab-/,
            /^bs-/,
            /backdrop/,
            // react-phone-number-input
            /^react-phone/,
            // react-insta-stories
            /^story/,
            // QkrvisitHome "How it works" steps — class built dynamically as
            // `step${step.id}` in JSX, so step1–step4 never appear as literals
            /^step[0-9]+$/,
            // Common utilities that may appear inside API-driven blog/glossary
            // HTML (invisible to the source scan above)
            /^text-/,
            /^bg-/,
            /^btn/,
            /^table/,
            /^list-/,
            /^blockquote/,
            /^figure/,
            /^img-/,
            /^fw-/,
            /^fs-/,
            /^fst-/,
            /^lh-/,
            /^border/,
            /^rounded/,
            /^d-/,
          ],
        },
      }),
  ].filter(Boolean),
};
