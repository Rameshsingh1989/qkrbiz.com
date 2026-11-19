// QkrHR routes. Node-safe: no static imports — see src/routes/routeManifest.js.

export default {
  basePath: "/hrms-software",
  layout: "module",
  routes: [
    { index: true, page: () => import("@/module/Hrms/QkrhrHome/QkrhrHome.jsx") },

    // Core HR
    { path: "core-hr",                       page: () => import("@/module/Hrms/CoreHr/CoreHrHome/CoreHrHome.jsx") },
    { path: "employee-management",           page: () => import("@/module/Hrms/CoreHr/EmployeeDatabase/EmployeeDatabase.jsx") },
    { path: "employee-self-service-portal",  page: () => import("@/module/Hrms/CoreHr/EssPortal/EssPortal.jsx") },
    { path: "hr-document-management-system", page: () => import("@/module/Hrms/CoreHr/Document/Document.jsx") },
    { path: "hr-workflow-management",        page: () => import("@/module/Hrms/CoreHr/Workflows/Workflows.jsx") },
    { path: "hr-data-analytics",             page: () => import("@/module/Hrms/CoreHr/HrReports/HrReports.jsx") },

    // Leave & Attendance
    { path: "leave-and-attendance-management", page: () => import("@/module/Hrms/Attendance/AttendanceHome/AttendanceHome.jsx") },
    { path: "time-and-attendance-system",      page: () => import("@/module/Hrms/Attendance/AttendanceManagement/AttendanceManagement.jsx") },
    { path: "leave-management-system",         page: () => import("@/module/Hrms/Attendance/LeaveManagement/LeaveManagement.jsx") },
    { path: "shift-management-system",         page: () => import("@/module/Hrms/Attendance/ShiftManagement/ShiftManagement.jsx") },

    // Other features
    { path: "hr-payroll-software",            page: () => import("@/module/Hrms/HrPayroll/HrPayroll/HrPayroll.jsx") },
    { path: "field-force-automation",         page: () => import("@/module/Hrms/FieldForce/FieldForceHome/FieldForceHome.jsx") },
    { path: "employee-expense-management",    page: () => import("@/module/Hrms/HrmsExpense/HrmsExpenseHome/HrmsExpenseHome.jsx") },
    { path: "employee-engagement",            page: () => import("@/module/Hrms/HrmsEngagement/HrmsEngagementHome/HrmsEngagementHome.jsx") },
    { path: "employee-task-management",       page: () => import("@/module/Hrms/TaskManagement/TaskManagementHome/TaskManagementHome.jsx") },
    { path: "employee-onboarding-software",   page: () => import("@/module/Hrms/HrmsOnboarding/HrmsOnboardingHome/HrmsOnboardingHome.jsx") },
    { path: "employee-offboarding-software",  page: () => import("@/module/Hrms/EmployeeOffboarding/EmployeeOffboardingHome/EmployeeOffboardingHome.jsx") },

    // City pages
    { path: "hr-payroll-software-in-delhi",  page: () => import("@/module/Hrms/HrmsLocation/DelhiHrms/DelhiHrms.jsx") },
    { path: "hr-payroll-software-mumbai",    page: () => import("@/module/Hrms/HrmsLocation/MaharashtraHrms/MaharashtraHrms.jsx") },
    { path: "hr-payroll-software-hyderabad", page: () => import("@/module/Hrms/HrmsLocation/HyderabadHrms/HyderabadHrms.jsx") },
    { path: "hr-payroll-software-bengaluru", page: () => import("@/module/Hrms/HrmsLocation/BangaloreHrms/BangaloreHrms.jsx") },
    { path: "hr-payroll-software-chennai",   page: () => import("@/module/Hrms/HrmsLocation/ChennaiHrms/ChennaiHrms.jsx") },
    { path: "hr-payroll-software-pune",      page: () => import("@/module/Hrms/HrmsLocation/PuneHrms/PuneHrms.jsx") },
    { path: "hr-payroll-software-ahmedabad", page: () => import("@/module/Hrms/HrmsLocation/AhmedabadHrms/AhmedabadHrms.jsx") },
    { path: "hr-payroll-software-kolkata",   page: () => import("@/module/Hrms/HrmsLocation/kolkataHrms/KolkataHrms.jsx") },
    { path: "hr-payroll-software-jaipur",    page: () => import("@/module/Hrms/HrmsLocation/JaipurHrms/JaipurHrms.jsx") },

    // Pricing
    { path: "qkrhr-pricing", page: () => import("@/module/Hrms/HrmsPricing/HrmsPrice/HrmsPrice.jsx") },

    // Solutions
    { path: "hr-software-small-business",                  page: () => import("@/module/Hrms/Solutions/SmallMediumSized/SmallMediumSized.jsx") },
    { path: "hr-payroll-software-manufacturing-companies", page: () => import("@/module/Hrms/Solutions/ManufacturingCompanies/ManufacturingCompanies.jsx") },
    { path: "startups",          page: () => import("@/module/Hrms/Solutions/Startups/Startups.jsx") },
    { path: "education",         page: () => import("@/module/Hrms/Solutions/Education/Education.jsx") },
    { path: "logistics",         page: () => import("@/module/Hrms/Solutions/Logistics/Logistics.jsx") },
    { path: "healthcare",        page: () => import("@/module/Hrms/Solutions/Healthcare/Healthcare.jsx") },
    { path: "retail",            page: () => import("@/module/Hrms/Solutions/Retail/Retail.jsx") },
    { path: "security-services", page: () => import("@/module/Hrms/Solutions/SecurityServices/SecurityServices.jsx") },
    { path: "it-services",       page: () => import("@/module/Hrms/Solutions/ItServices/ItServices.jsx") },
    { path: "financial-services", page: () => import("@/module/Hrms/Solutions/FinancialServices/FinancialServices.jsx") },
    { path: "construction",      page: () => import("@/module/Hrms/Solutions/Construction/Construction.jsx") },

    // Blogs — legacy 301s and rss.xml are handled in server.js.
    // ssrProps: AppRoutes props forwarded to the page (SSR-fetched data).
    { path: "qkrhr-blogs", ssrProps: ["initialBlogs"], page: () => import("@/module/Hrms/HrmsBlogs/HrBlog/HrBlog.jsx") },
    { path: ":blogId",     ssrProps: ["initialBlog"],  page: () => import("@/module/Hrms/HrmsBlogs/BlogDetail/BlogDetail.jsx") },

    // Glossary
    { path: "hr-glossary",       ssrProps: ["initialGlossaryData"], page: () => import("@/module/Hrms/HrmsGlossary/GlossaryHome/GlossaryHome.jsx") },
    { path: "hr-glossary/:slug", ssrProps: ["initialGlossary"],     page: () => import("@/module/Hrms/HrmsGlossary/GlossaryDetails/GlossaryDetails.jsx") },

    // Comparisons
    { path: "qkrhr-vs-keka-hr", page: () => import("@/module/Hrms/ComparisonHr/QkrhrVsKeka/QkrhrVsKeka.jsx") },
    { path: "qkrhr-vs-greythr", page: () => import("@/module/Hrms/ComparisonHr/QkrHRVsGreythr/QkrHRVsGreythr.jsx") },
    { path: "qkrhr-vs-hrone",   page: () => import("@/module/Hrms/ComparisonHr/QkrHRVsHrone/QkrHRVsHrone.jsx") },
  ],
};

// Web stories live under /hrms-software but use their own full-bleed layout.
export const webStoriesRoutes = {
  basePath: "/hrms-software/web-stories",
  layout: "webstories",
  routes: [
    { index: true,      page: () => import("@/module/Hrms/webstories/ImagesStories/ImagesStories.jsx") },
    { path: ":storyUrl", page: () => import("@/module/Hrms/webstories/ImagesStoriesDetails/ImagesStoriesDetails.jsx") },
  ],
};
