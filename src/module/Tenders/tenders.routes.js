// QkrTenders routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/qkrtenders",
  layout: "module",
  routes: [
    { index: true, page: () => import("@/module/Tenders/TendersHome/TendersHome.jsx") },
  ],
};
