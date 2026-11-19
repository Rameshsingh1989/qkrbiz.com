// see src/routes/routeManifest.js.
export default {
  basePath: "/",
  routes: [
    { index: true,       page: () => import("@/pages/Home/Home.jsx") },
    { path: "customers", page: () => import("@/pages/Customers/Customers.jsx") },
    { path: "about",     page: () => import("@/pages/About/About.jsx") },
    { path: "contact",   page: () => import("@/pages/Contact/Contact.jsx") },
    { path: "signup",    page: () => import("@/pages/Signup/Signup.jsx") },
    { path: "terms",     page: () => import("@/pages/Terms/Terms.jsx") },
    { path: "privacy",   page: () => import("@/pages/Privacy/Privacy.jsx") },
    { path: "thank-you", page: () => import("@/pages/ThankYou/ThankYou.jsx") },

    // Platform features / resources
    { path: "views",              page: () => import("@/pages/MultipleViews/MultipleViews.jsx") },
    { path: "unified-view",       page: () => import("@/pages/UnifiedView/UnifiedView.jsx") },
    { path: "alert-notification", page: () => import("@/pages/Alertnotification/Alertnotification.jsx") },
    { path: "workflow",           page: () => import("@/pages/Workflow/Workflow.jsx") },
    { path: "documents",          page: () => import("@/pages/Documents/Documents.jsx") },
    { path: "data-security",      page: () => import("@/pages/DataSecurity/DataSecurity.jsx") },
    { path: "security",           page: () => import("@/pages/Security/Security.jsx") },
    { path: "bi-analytics",       page: () => import("@/pages/Bianalytics/Bianalytics.jsx") },
    { path: "customizations",     page: () => import("@/pages/Customizations/Customizations.jsx") },
    { path: "board-view",         page: () => import("@/pages/BoardView/BoardView.jsx") },
  ],
};
