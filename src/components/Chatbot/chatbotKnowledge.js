// FAQ sources the chatbot searches. Each entry lazy-loads the same FAQ array the
// page's FaqComponent renders, so the bot's answers never drift from the site.
// `scope: "page"` sources are only searched while the visitor is on that page
// (city pages repeat each other's generic questions with a city name swapped in).

const HRMS = "/hrms-software";
const PAYROLL = "/payroll-software";
const FIELD = "/field-force-management-software";

export const faqSources = [
  // Qkrbiz platform
  { url: "/data-security", label: "Data Security", load: () => import("@/pages/DataSecurity/SecurityData").then((m) => m.DataSecurityFAQ) },
  { url: "/documents", label: "Documents", load: () => import("@/pages/Documents/DocumentsData").then((m) => m.DocumentsFAQ) },
  { url: "/workflow", label: "Workflows", load: () => import("@/pages/Workflow/WorkflowData").then((m) => m.WorkflowFAQ) },
  { url: "/alert-notification", label: "Alerts & Notifications", load: () => import("@/pages/Alertnotification/AlertnotificationData").then((m) => m.AlertFAQ) },
  { url: "/board-view", label: "Boards", load: () => import("@/pages/BoardView/BoardViewData").then((m) => m.BoardFAQ) },
  { url: "/customizations", label: "Customizations", load: () => import("@/pages/Customizations/CustomizationsData").then((m) => m.CustomizationsFAQ) },

  // QkrHR — HRMS
  { url: HRMS, label: "QkrHR HRMS", load: () => import("@/module/Hrms/QkrhrHome/QkrhrHomeData").then((m) => m.HrmsFAQ) },
  { url: `${HRMS}/qkrhr-pricing`, label: "Pricing", load: () => import("@/module/Hrms/HrmsPricing/HrmsPrice/HrmsPriceData").then((m) => m.HrmsCompareFAQ) },
  { url: `${HRMS}/core-hr`, label: "Core HR", load: () => import("@/module/Hrms/CoreHr/CoreHrHome/CoreHrHomeData").then((m) => m.CoreHRFAQ) },
  { url: `${HRMS}/employee-management`, label: "Employee Management", load: () => import("@/module/Hrms/CoreHr/EmployeeDatabase/EmployeeData").then((m) => m.EmployeeDataFAQ) },
  { url: `${HRMS}/employee-self-service-portal`, label: "Employee Self-Service", load: () => import("@/module/Hrms/CoreHr/EssPortal/EssPortalData").then((m) => m.ESSFAQ) },
  { url: `${HRMS}/hr-document-management-system`, label: "HR Documents", load: () => import("@/module/Hrms/CoreHr/Document/DocumentsData").then((m) => m.DocumentFAQ) },
  { url: `${HRMS}/hr-workflow-management`, label: "HR Workflows", load: () => import("@/module/Hrms/CoreHr/Workflows/WorkflowsData").then((m) => m.WorkflowsFAQ) },
  { url: `${HRMS}/leave-and-attendance-management`, label: "Leave & Attendance", load: () => import("@/module/Hrms/Attendance/AttendanceHome/AttendanceData").then((m) => m.AttendanceFAQ) },
  { url: `${HRMS}/time-and-attendance-system`, label: "Time & Attendance", load: () => import("@/module/Hrms/Attendance/AttendanceManagement/AttendanceManagementData").then((m) => m.AttendanceManagementFAQ) },
  { url: `${HRMS}/leave-management-system`, label: "Leave Management", load: () => import("@/module/Hrms/Attendance/LeaveManagement/LeaveManagementData").then((m) => m.LeaveManagementFAQ) },
  { url: `${HRMS}/shift-management-system`, label: "Shift Management", load: () => import("@/module/Hrms/Attendance/ShiftManagement/ShiftManagementData").then((m) => m.ShiftManagementFAQ) },
  { url: `${HRMS}/hr-payroll-software`, label: "HR & Payroll", load: () => import("@/module/Hrms/HrPayroll/HrPayroll/HrPayrollData").then((m) => m.HrPayrollFaq) },
  { url: `${HRMS}/employee-expense-management`, label: "Expense Management", load: () => import("@/module/Hrms/HrmsExpense/HrmsExpenseHome/HrExpenseData").then((m) => m.EmployeExpenseFaq) },
  { url: `${HRMS}/employee-engagement`, label: "Employee Engagement", load: () => import("@/module/Hrms/HrmsEngagement/HrmsEngagementHome/EngagementData").then((m) => m.EngagementFaqData) },
  { url: `${HRMS}/employee-onboarding-software`, label: "Onboarding", load: () => import("@/module/Hrms/HrmsOnboarding/HrmsOnboardingHome/HrmsOnboardingData").then((m) => m.OnboardingFaqData) },
  { url: `${HRMS}/employee-offboarding-software`, label: "Offboarding", load: () => import("@/module/Hrms/EmployeeOffboarding/EmployeeOffboardingHome/EmployeeOffboardingData").then((m) => m.OffboardingFaq) },

  // Industry / size solutions
  { url: `${HRMS}/hr-software-small-business`, label: "Small & Medium Business", load: () => import("@/module/Hrms/Solutions/SmallMediumSized/SmallMediumSizedData").then((m) => m.SmeFaqData) },
  { url: `${HRMS}/hr-payroll-software-manufacturing-companies`, label: "Manufacturing", load: () => import("@/module/Hrms/Solutions/ManufacturingCompanies/ManufacturingCompaniesData").then((m) => m.ManufacturingFaqData) },
  { url: `${HRMS}/startups`, label: "Startups", load: () => import("@/module/Hrms/Solutions/Startups/StartupsData").then((m) => m.StartupsFaqData) },
  { url: `${HRMS}/education`, label: "Education", load: () => import("@/module/Hrms/Solutions/Education/EducationData").then((m) => m.EducationFaqData) },
  { url: `${HRMS}/logistics`, label: "Logistics", load: () => import("@/module/Hrms/Solutions/Logistics/LogisticsData").then((m) => m.LogisticsFaqData) },
  { url: `${HRMS}/healthcare`, label: "Healthcare", load: () => import("@/module/Hrms/Solutions/Healthcare/HealthcareData").then((m) => m.HealthcareFaqData) },
  { url: `${HRMS}/retail`, label: "Retail", load: () => import("@/module/Hrms/Solutions/Retail/RetailData").then((m) => m.RetailFaqData) },
  { url: `${HRMS}/security-services`, label: "Security Services", load: () => import("@/module/Hrms/Solutions/SecurityServices/SecurityServicesData").then((m) => m.SecurityServicesFaqData) },
  { url: `${HRMS}/it-services`, label: "IT Services", load: () => import("@/module/Hrms/Solutions/ItServices/ItServicesData").then((m) => m.ItServicesFaqData) },
  { url: `${HRMS}/financial-services`, label: "Financial Services", load: () => import("@/module/Hrms/Solutions/FinancialServices/FinancialServicesData").then((m) => m.FinancialFaqData) },
  { url: `${HRMS}/construction`, label: "Construction", load: () => import("@/module/Hrms/Solutions/Construction/ConstructionData").then((m) => m.ConstructionFaqData) },

  // Comparisons
  { url: `${HRMS}/qkrhr-vs-keka-hr`, label: "QkrHR vs Keka", load: () => import("@/module/Hrms/ComparisonHr/data/qkrhrVsKekaData").then((m) => m.QkrhrVsKekaFaqData) },
  { url: `${HRMS}/qkrhr-vs-greythr`, label: "QkrHR vs greytHR", load: () => import("@/module/Hrms/ComparisonHr/data/qkrhrVsGrethrData").then((m) => m.QkrhrVsgretHrFaqData) },
  { url: `${HRMS}/qkrhr-vs-hrone`, label: "QkrHR vs HROne", load: () => import("@/module/Hrms/ComparisonHr/data/qkrhrVsHroneData").then((m) => m.QkrhrVsgretHrFaqData) },

  // QkrPayroll
  { url: PAYROLL, label: "QkrPayroll", load: () => import("@/module/QkrPayroll/QkrPayrollHome/QkrPayrollHomeData").then((m) => m.PayrollFAQ) },
  { url: `${PAYROLL}/management`, label: "Payroll Management", load: () => import("@/module/QkrPayroll/PayrollManagements/PayrollManagementsData").then((m) => m.PayrollManagementFaq) },
  { url: `${PAYROLL}/statutory-compliance`, label: "Statutory Compliance", load: () => import("@/module/QkrPayroll/StatutoryCompliances/StatutoryCompliancesData").then((m) => m.StatutoryCompliancesFaq) },
  { url: `${PAYROLL}/loans-advances`, label: "Loans & Advances", load: () => import("@/module/QkrPayroll/PayrollLoansAdvance/PayrollLoansAdvanceData").then((m) => m.PayrollLoansAdvanceFaq) },

  // Qkrvisit — field force
  { url: FIELD, label: "Field Force Management", load: () => import("@/module/Qkrvisit/QkrvisitHome/QkrvisitHomeData").then((m) => m.FieldForceManagementFaq) },
  { url: `${FIELD}/employee-tracking-app`, label: "Employee Tracking", load: () => import("@/module/Qkrvisit/AttendanceTracking/AttendanceTrackingData").then((m) => m.AttendancTrakingFaq) },
  { url: `${FIELD}/service-management`, label: "Service Management", load: () => import("@/module/Qkrvisit/GeoFenced/GeoFencedData").then((m) => m.GeoFencedFaq) },
  { url: `${FIELD}/real-time-location-tracking`, label: "Real-Time Location Tracking", load: () => import("@/module/Qkrvisit/ConfigurableAccurate/ConfigurableAccurateData").then((m) => m.ConfigurableAccurateFaq) },
  { url: `${FIELD}/reports-analytics`, label: "Field Reports & Analytics", load: () => import("@/module/Qkrvisit/RepotsAnalytics/RepotsAnalyticsData").then((m) => m.ReportsAnalyticsFaq) },

  // City pages — only while on that page
  ...[
    ["in-delhi", "Delhi NCR", () => import("@/module/Hrms/HrmsLocation/DelhiHrms/DelhiHrmsData").then((m) => m.DelhiHrmsFAQ)],
    ["mumbai", "Mumbai", () => import("@/module/Hrms/HrmsLocation/MaharashtraHrms/MaharashtraHrmsData").then((m) => m.MaharashtraHrmsFAQ)],
    ["hyderabad", "Hyderabad", () => import("@/module/Hrms/HrmsLocation/HyderabadHrms/HyderabadHrmsData").then((m) => m.HyderabadHrmsFAQ)],
    ["bengaluru", "Bangalore", () => import("@/module/Hrms/HrmsLocation/BangaloreHrms/BangaloreHrmsData").then((m) => m.BangaloreHrmsFAQ)],
    ["chennai", "Chennai", () => import("@/module/Hrms/HrmsLocation/ChennaiHrms/ChennaiHrmsData").then((m) => m.ChennaiHrmsFAQ)],
    ["pune", "Pune", () => import("@/module/Hrms/HrmsLocation/PuneHrms/PuneHrmsData").then((m) => m.PuneHrmsFAQ)],
    ["ahmedabad", "Ahmedabad", () => import("@/module/Hrms/HrmsLocation/AhmedabadHrms/AhmedabadHrmsData").then((m) => m.AhmedabadHrmsFAQ)],
    ["kolkata", "Kolkata", () => import("@/module/Hrms/HrmsLocation/kolkataHrms/KolkataHrmsData").then((m) => m.KolkataHrmsFAQ)],
    ["jaipur", "Jaipur", () => import("@/module/Hrms/HrmsLocation/JaipurHrms/JaipurHrmsData").then((m) => m.JaipurHrmsFAQ)],
  ].map(([slug, city, load]) => ({ url: `${HRMS}/hr-payroll-software-${slug}`, label: `HRMS in ${city}`, scope: "page", load })),
];

let knowledgePromise = null;

// Loads every source once (in parallel) and flattens it into searchable entries.
// A source that fails to load is skipped rather than breaking the bot.
export const loadKnowledge = () => {
  if (!knowledgePromise) {
    knowledgePromise = Promise.all(
      faqSources.map((source) =>
        source.load().then(
          (faqs) => (Array.isArray(faqs) ? faqs : []).map((faq) => ({
            title: String(faq.Title || "").trim(),
            html: String(faq.Content || ""),
            url: source.url,
            label: source.label,
            scope: source.scope || "global",
          })),
          () => []
        )
      )
    ).then((lists) => lists.flat().filter((entry) => entry.title && entry.html));
  }
  return knowledgePromise;
};
