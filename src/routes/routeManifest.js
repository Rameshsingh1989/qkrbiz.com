// Single source of truth for every route.
//
// Each module owns a `<name>.routes.js` next to its pages; this file only lists
// them. The list is consumed twice:
//   - src/routes/AppRoutes.jsx      → builds the <Route> tree (client + SSR render)
//   - src/utility/routeModuleMap.js → maps URLs to source files so server.js
//                                     can inject each page's CSS <link>s
//
// routeModuleMap is imported by server.js in plain Node (not through Vite), so
// this file and every *.routes.js must stay Node-safe: relative static imports
// with explicit .js extensions, and pages referenced ONLY through
// `page: () => import("@/...jsx")` (Node never runs those; it just reads the path).
//
// Route group shape:
//   {
//     basePath: "/qkrsales",
//     layout?:  "module" | "webstories",   // key into LAYOUTS; omit for none
//     routes: [{
//       index?: true, path?: "invoicing" | ":param",
//       page:   () => import("@/module/.../Page.jsx"),
//       ssrProps?: ["initialBlogs"],       // AppRoutes props forwarded to the page
//       css?:      ["@/.../shared.scss"],  // extra stylesheets to preload via SSR
//     }]
//   }
import pagesRoutes from "../pages/pages.routes.js";
import hrmsRoutes, { webStoriesRoutes } from "../module/Hrms/hrms.routes.js";
import payrollRoutes from "../module/QkrPayroll/payroll.routes.js";
import visitRoutes from "../module/Qkrvisit/visit.routes.js";
import expenseRoutes from "../module/Expense/expense.routes.js";
import deskRoutes from "../module/Desk/desk.routes.js";
import salesRoutes from "../module/Sales/sales.routes.js";
import tendersRoutes from "../module/Tenders/tenders.routes.js";
import tasksRoutes from "../module/Qkrtask/tasks.routes.js";
import projectsRoutes from "../module/Project/projects.routes.js";
// import toolsRoutes from "../module/Tools/tools.routes.js";

export const LAYOUTS = {
  module: () => import("@/layouts/ModuleLayout/ModuleLayout.jsx"),
  webstories: () => import("@/module/Hrms/webstories/WebstoriesLayout/WebstoriesLayout.jsx"),
};

// To add a module: create src/module/<Name>/<name>.routes.js and list it here.
export const ROUTE_GROUPS = [
  pagesRoutes,
  hrmsRoutes,
  webStoriesRoutes,
  payrollRoutes,
  visitRoutes,
  expenseRoutes,
  deskRoutes,
  salesRoutes,
  tendersRoutes,
  tasksRoutes,
  projectsRoutes,
  // toolsRoutes,
];
