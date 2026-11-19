// QkrDesk routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/qkrdesk",
  layout: "module",
  routes: [
    { index: true, page: () => import("@/module/Desk/DeskHome/DeskHome.jsx") },
  ],
};
