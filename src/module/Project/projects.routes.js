// QkrProjects routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/qkrprojects",
  layout: "module",
  routes: [
    { index: true, page: () => import("@/module/Project/ProjectHome/ProjectHome.jsx") },
  ],
};
