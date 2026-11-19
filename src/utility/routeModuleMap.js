// URL → the source files that page is built from, so server.js can look up
// their CSS in Vite's manifests and add <link rel="stylesheet"> tags to the
// SSR response.
//
// Built from src/routes/routeManifest.js — the same routes AppRoutes renders —
// so pages and their CSS can't drift apart. Add routes to a module's
// *.routes.js, never here.
//
// Runs in plain Node (imported by server.js), so each page/layout path is read
// from its loader's source text: `() => import("@/pages/Home/Home.jsx")`.
import { LAYOUTS, ROUTE_GROUPS } from "../routes/routeManifest.js";

// "@/pages/Home/Home.jsx" → "src/pages/Home/Home.jsx"
const toSrcPath = (aliasPath) => aliasPath.replace(/^@\//, "src/");

// () => import("@/pages/Home/Home.jsx") → "src/pages/Home/Home.jsx"
function importPath(load) {
  const aliasPath = String(load).match(/import\(\s*["'`]([^"'`]+)["'`]\s*\)/)?.[1];
  if (!aliasPath?.startsWith("@/")) {
    throw new Error(`routeModuleMap: loader must be () => import("@/..."), got: ${load}`);
  }
  return toSrcPath(aliasPath);
}

// "/hrms-software/:blogId" → /^\/hrms-software\/[^/]+\/?$/  (trailing slash optional)
function urlPattern(fullPath) {
  const segments = fullPath
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment.startsWith(":") ? "[^/]+" : segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
  return new RegExp(`^\\/${segments.join("\\/")}\\/?$`);
}

// { basePath: "/qkrsales" } + { path: "invoicing" } → "/qkrsales/invoicing"
const fullPathOf = ({ basePath }, { index, path }) =>
  index || !path ? basePath : `${basePath.replace(/\/$/, "")}/${path}`;

const ROUTES = ROUTE_GROUPS.flatMap((group) => {
  const layout = group.layout ? [importPath(LAYOUTS[group.layout])] : [];

  return group.routes.map((route) => {
    const fullPath = fullPathOf(group, route);
    return {
      pattern: urlPattern(fullPath),
      isDynamic: fullPath.includes(":"),
      modules: [...layout, ...(route.css ?? []).map(toSrcPath), importPath(route.page)],
    };
  });
})
  // Static paths win over param paths (/hrms-software/qkrhr-blogs before
  // /hrms-software/:blogId), mirroring React Router's ranking.
  .sort((a, b) => a.isDynamic - b.isDynamic);

/**
 * Source file paths for a clean URL (no query string), or [] when no route
 * matches (404 page, etc.).
 */
export function getModulesForUrl(cleanUrl) {
  return ROUTES.find(({ pattern }) => pattern.test(cleanUrl))?.modules ?? [];
}
