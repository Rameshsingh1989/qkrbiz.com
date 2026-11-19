// QkrPayroll routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/payroll-software",
  layout: "module",
  routes: [
    { index: true,                 page: () => import("@/module/QkrPayroll/QkrPayrollHome/QkrPayrollHome.jsx") },
    { path: "management",          page: () => import("@/module/QkrPayroll/PayrollManagements/PayrollManagements.jsx") },
    { path: "statutory-compliance", page: () => import("@/module/QkrPayroll/StatutoryCompliances/StatutoryCompliances.jsx") },
    { path: "loans-advances",      page: () => import("@/module/QkrPayroll/PayrollLoansAdvance/PayrollLoansAdvance.jsx") },
  ],
};
