// QkrVisit routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/field-force-management-software",
  layout: "module",
  routes: [
    { index: true,                        page: () => import("@/module/Qkrvisit/QkrvisitHome/QkrvisitHome.jsx") },
    { path: "employee-tracking-app",       page: () => import("@/module/Qkrvisit/AttendanceTracking/AttendanceTracking.jsx") },
    { path: "service-management",          page: () => import("@/module/Qkrvisit/GeoFenced/GeoFenced.jsx") },
    { path: "real-time-location-tracking", page: () => import("@/module/Qkrvisit/ConfigurableAccurate/ConfigurableAccurate.jsx") },
    { path: "reports-analytics",           page: () => import("@/module/Qkrvisit/RepotsAnalytics/RepotsAnalytics.jsx") },
  ],
};
