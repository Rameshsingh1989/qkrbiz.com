// QkrTasks routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/qkrtasks",
  layout: "module",
  routes: [
    { index: true, page: () => import("@/module/Qkrtask/TaskHome/TaskHome.jsx") },
  ],
};
