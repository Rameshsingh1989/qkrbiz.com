// QkrSales routes. Node-safe: no static imports — see src/routes/routeManifest.js.
export default {
  basePath: "/qkrsales",
  layout: "module",
  routes: [
    { index: true,                  page: () => import("@/module/Sales/SalesHome/SalesHome.jsx") },
    { path: "sales-management",     page: () => import("@/module/Sales/Feauters/SalesManagement/SalesManagement.jsx") },
    { path: "accounts-receivable",  page: () => import("@/module/Sales/Feauters/AccountsReceivable/AccountsReceivable.jsx") },
    { path: "billing-payment",      page: () => import("@/module/Sales/Feauters/BillingPayment/BillingPayment.jsx") },
    { path: "order-execution",      page: () => import("@/module/Sales/Feauters/OrderExecution/OrderExecution.jsx") },
    { path: "invoicing",            page: () => import("@/module/Sales/Feauters/Invoicving/Invoicving.jsx") },
    { path: "tender-deposit",       page: () => import("@/module/Sales/Feauters/TenderDeposit/TenderDeposit.jsx") },
    { path: "sales-performance",    page: () => import("@/module/Sales/Feauters/SalesPerformance/SalesPerformance.jsx") },
    { path: "document-management",  page: () => import("@/module/Sales/Feauters/DocumentManagement/DocumentManagement.jsx") },
    { path: "business-managements", page: () => import("@/module/Sales/Feauters/BusinessManagements/BusinessManagements.jsx") },
  ],
};
