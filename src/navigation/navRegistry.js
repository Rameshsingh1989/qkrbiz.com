// Central navigation registry — one source of truth for the layouts and the
// three nav bars (MainNav, ModuleNav, FeatureNav).
// Each module owns its menu in src/module/<Name>/<name>.nav.js (its `urls` is
// the basePath of the sibling <name>.routes.js). Listing it in
// HeaderMenuData.ProductMenuData gives it a ModuleNav; listing its routes in
// routes/routeManifest.js gives it pages under ModuleLayout.
import { HeaderMenuData } from './data/HeaderMenuData';

export const header = HeaderMenuData[0];
export const modules = header.ProductMenuData;

/* ── Path helpers ───────────────────────────────────────────── */

// buildPath('/qkrsales/', '/invoicing') → '/qkrsales/invoicing'
export const buildPath = (base, sub) =>
  `${base.replace(/\/$/, '')}/${sub.replace(/^\//, '')}`;

// isPathWithin('/qkrsales/invoicing', '/qkrsales') → true
// isPathWithin('/qkrsalesx', '/qkrsales')          → false
export const isPathWithin = (pathname, base) =>
  pathname === base || pathname.startsWith(`${base}/`);

/* ── ModuleNav options ──────────────────────────────────────── */

// A module overrides any of these with a `nav` object in its nav file
// (see module/Sales/sales.nav.js).
//   featuresMenu.variant: 'mega' = icon grid, 'list' = plain dropdown
//   mobileCta:            'signup' = Free Demo, 'login' = external Login
export const DEFAULT_MODULE_NAV = {
  featuresMenu: { title: 'Features', variant: 'mega' },
  showSolutions: true,
  showCities: true,
  showComparison: true,
  showIndustries: true,
  mobileCta: 'signup',
};

export const getModuleNav = (module) => ({
  ...DEFAULT_MODULE_NAV,
  ...module.nav,
  featuresMenu: { ...DEFAULT_MODULE_NAV.featuresMenu, ...module.nav?.featuresMenu },
});

/* ── URL → module / feature group ───────────────────────────── */

// The module (product) whose base path contains `pathname`, if any.
export const findModule = (pathname) =>
  modules.find((module) => isPathWithin(pathname, module.urls));

// Only feature groups with sub-pages (ListData) get a FeatureNav bar.
const hasSubPages = (feature) =>
  Array.isArray(feature.ListData) && feature.ListData.length > 0;

// Every URL a feature group covers: its landing page + each sub-page.
const featurePaths = (module, feature) => [
  buildPath(module.urls, feature.urls),
  ...feature.ListData.map((item) => buildPath(module.urls, item.urls)),
];

// The feature group that owns `pathname`, if any.
export const findFeatureGroup = (module, pathname) =>
  module?.ProductList?.find(
    (feature) => hasSubPages(feature) && featurePaths(module, feature).includes(pathname)
  );

// Every path that renders a FeatureNav — derived from the data, so new
// feature groups need no manual list updates.
export const FEATURE_NAV_PATHS = modules.flatMap((module) =>
  (module.ProductList || [])
    .filter(hasSubPages)
    .flatMap((feature) => featurePaths(module, feature))
);

/* ── Where the header / footer are hidden ───────────────────── */

// Full-bleed standalone pages: no MainNav and no footer.
const STANDALONE_PATHS = [
  '/hrms-software/web-stories/what-is-sandwich-leave',
  '/hrms-software/qkrhr-blogs/rss.xml',
];

// MainNav is also hidden on feature-nav pages (ModuleNav goes fixed-top there).
export const HEADER_HIDDEN_PATHS = [...FEATURE_NAV_PATHS, ...STANDALONE_PATHS];
export const FOOTER_HIDDEN_PATHS = [...STANDALONE_PATHS];

/* ── MainNav links ──────────────────────────────────────────── */

// Every module's HrDataList, flattened once.
// id 1 → top-level nav link (Pricing), id 2/3 → Resources dropdown items.
export const hrLinks = modules.flatMap((module) =>
  (module.HrDataList || []).map((link) => ({
    id: link.id,
    title: link.title,
    fullPath: buildPath(module.urls, link.urls),
  }))
);

// Module home pages — MainNav switches to its desktop-hide styling there.
export const navRouteUrls = modules.map((module) => module.urls);
