// QkrExpense routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/qkrexpense",
  layout: "module",
  routes: [
    { index: true, page: () => import("@/module/Expense/ExpenseHome/ExpenseHome.jsx") },
  ],
};
