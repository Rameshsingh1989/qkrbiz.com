import { manufacturing as ImagesUrl_manufacturing } from "../../../../assets/images";

export const ManufacturingCompaniesMeta = {
  title: "HR & Payroll Software for Manufacturing Industry | QkrHR",
  description: "QkrHR is HR and payroll software built for Indian manufacturers: biometric shift attendance, contract-labour compliance and automated statutory payroll.",
};

export const ManufacturingHeadData = [
  { 
    id:1,
      youTubeVideoUrl: "bf3U8zW1dxc",
      videoUrl: "",
      imgUrl:ImagesUrl_manufacturing.manufacturingHead,
      alt:"HR & Payroll Software for Manufacturing Companies",
      title:" HR & Payroll Software for Manufacturing Companies",
      subTitle:"Every Shift, Every Worker, Every Challan.<br/><span class='text-gradient'>One Platform.</span>",
      desc:"Biometric attendance, A/B/C shift rosters, contract labour and PF/ESI compliance, built for Indian plants with 50 to 5,000 workers.",
      subDesc:"",
      link:"/signup",
      HeadList:[ ]
  }
];

export const TrustedByData = {
  "title": "Trusted by manufacturers in",
  "industries": [
    "Automobile & Auto Ancillary",
    "Textiles & Apparel",
    "Pharmaceuticals",
    "FMCG & Food Processing",
    "Heavy Engineering",
    "Chemicals",
    "Steel & Metals",
    "Electronics",
  ],
};

// ── Why generic HR software fails ─────────────────────────────────────
export const WhyGenericFailsData = [
  {
    "title": "Why Generic HR Software Fails <span class='text-gradient'>Manufacturing</span>",
    "desc": "Off-the-shelf HR tools are built for desk teams. Factories run on shifts, contract labour and shop-floor realities that generic software simply can't handle.",
    "List": [
      {
        "id": "1",
        "cls":"light-green",
        "icon": ImagesUrl_manufacturing.noRealShift,
        "head": "No Real Shift Handling",
        "desc": "Rotating shifts, night allowances and weekly-offs break spreadsheet-based rosters and desk-first HR tools.",
      },
      {
        "id": "2",
        "cls":"light-magenta",
        "icon": ImagesUrl_manufacturing.weakBiometric,
        "head": "Weak Biometric Attendance",
        "desc": "Multiple gates, canteens and machine stations need device sync that generic <a href='/hrms-software'>HR software</a> rarely supports.",
      },
      {
        "id": "3",
        "cls":"light-deepsky",
        "icon": ImagesUrl_manufacturing.missedStatutory,
        "head": "Missed Statutory Compliance",
        "desc": "PF, ESI, PT, LWF, overtime and bonus rules change often — manual tracking invites penalties and notices.",
      },
      {
        "id": "4",
        "cls":"light-warning",
        "icon": ImagesUrl_manufacturing.contractLabour,
        "head": "Contract Labour Blind Spots",
        "desc": "Contractors, wage registers and CLRA compliance sit outside most HR systems, creating audit risk.",
      },
      {
        "id": "5",
        "cls":"light-periwinkle",
        "icon": ImagesUrl_manufacturing.errorProneWage,
        "head": "Error-Prone Wage Calculation",
        "desc": "Overtime, incentives and piece-rate payouts calculated by hand lead to disputes and rework every cycle.",
      },
      {
        "id": "6",
        "cls":"light-danger",
        "icon": ImagesUrl_manufacturing.noAccess,
        "head": "No Access for Workers",
        "desc": "Shop-floor staff without email or laptops are locked out of payslips, leave and self-service requests.",
      },
    ],
  }
];

// ── Biometric attendance & shift management ───────────────────────────
export const ShopFloorData = [
  {
    "title": "Biometric Attendance & Shift Management <span class='text-gradient'>Built for the Shop Floor</span>",
    "desc": "<a href='/hrms-software/leave-and-attendance-management'>Attendance software</a> for manufacturing captures worker time directly from biometric devices on the shop floor, applies Factories Act overtime and shift rules automatically, and locks verified hours into payroll — no paper registers, no manual Excel. QkrHR does this across A/B/C rotating shifts, contract labour, and multi-plant operations, even on plants with unstable internet.",
    "List": [
      {
        "id": "1",
        "cls": "light-green",
        "head": "Capture time from any device already on your floor",
        "desc": "No rip-and-replace. QkrHR reads punches natively from every Biometric device—plus supervisor attendance and geo-tagged mobile punch (via Qkrvisit) for field staff. Data flows in real time, not two days late.",
      },
      {
        "id": "2",
        "cls": "light-magenta",
        "head": "Build and rotate A/B/C shifts without a spreadsheet",
        "desc": "Drag-and-drop rosters for continuous three-shift, general-shift, and night-shift patterns. Handle shift swaps, weekly-off rotation, and week-on/week-off cycles from one screen. Night-shift allowances and differentials apply automatically — no manual add-backs.",
      },
      {
        "id": "3",
        "cls": "light-deepsky",
        "head": "Overtime calculated the way the Factories Act requires",
        "desc": "Generic tools use flat-rate OT. Manufacturing can't. QkrHR applies overtime at 2× under the Factories Act 1948, enforces the 48-hour week, tracks weekly rest days, and applies the right rule per state amendment based on each plant's location.",
      },
      {
        "id": "4",
        "cls": "light-warning",
        "head": "Attendance that doesn't break when the internet does",
        "desc": "Biometric devices store punches locally when the network drops and re-sync the moment connectivity returns — no attendance lost. Built for basement plants, remote facilities, and industrial zones where the connection is never a given.",
      },
      {
        "id": "5",
        "cls": "light-periwinkle",
        "head": "Contract labour attendance, tracked contractor-wise",
        "desc": "Map attendance to each contractor, validate it against contractor invoices, and auto-flag mismatches before you pay. The same data feeds your CLRA registers (Form XIII–XVII) and the principal-employer PF/ESI liability view.",
      },
    ],
    "lockFlow": {
      "title": "From punch to payslip — one locked chain",
      "desc": "Most tools let attendance be quietly edited after the fact. QkrHR runs a three-stage payroll lock. Once a cycle's attendance is locked, no one can silently change it — every regularisation or correction routes to the Pending Actions inbox for approval, with the evidence attached.",
      "steps": ["Attendance Lock", "Processing", "Disbursement"],
    },
  }
];

// ── Compliance laws automated ─────────────────────────────────────────
export const ComplianceLawsData = [
  {
    "badge": "Indian Labour Law Compliance",
    "title": "Every Manufacturing <span class='text-gradient'>Compliance Law. Automated.</span>",
    "desc": "Manufacturing faces stricter, more layered compliance than any other sector. One missed filing means penalties, notices, and audit exposure. Our compliance engine handles it all.",
    "columns": [
      {
        "id": "1",
        "cls": "light-periwinkle",
        "head": "PF, ESI &amp; TDS Compliance",
        "desc": "Automatic calculation, challan generation, ECR file preparation, and one-click filing integration with EPFO and ESIC portals.",
        "items": [
          "Monthly PF/ESI challan auto-generated",
          "ECR file (UAN-wise) ready for upload",
          "Form 24Q, 26Q for TDS returns",
          "Form 16 generation for all employees",
          "Annual returns: Form 3A, 6A, 5A",
        ],
      },
      {
        "id": "2",
        "cls": "light-magenta",
        "head": "Factories Act Compliance",
        "desc": "Overtime rules, working hour limits, weekly rest day tracking, and statutory leave entitlements as per the Factories Act 1948 — auto-applied per state amendment.",
        "items": [
          "48-hour week limit enforcement",
          "OT at double rate calculation",
          "Annual leave with wages tracking",
          "State-specific schedule compliance",
          "Health &amp; safety register maintenance",
        ],
      },
      {
        "id": "3",
        "cls": "light-green",
        "head": "CLRA Compliance",
        "desc": "Contract Labour (Regulation and Abolition) Act registers, contractor licence tracking, and principal employer compliance — all maintained digitally.",
        "items": [
          "Form XIII–XVII register maintenance",
          "Contractor licence verification",
          "Minimum wage compliance checks",
          "Principal employer PF liability tracking",
          "Annual CLRA returns automation",
        ],
      },
      {
        "id": "4",
        "cls": "light-deepsky",
        "head": "Professional Tax &amp; LWF",
        "desc": "PT slab rates and Labour Welfare Fund deduction rules are different in every state. We maintain and auto-update these for Maharashtra, Karnataka, Gujarat, West Bengal, AP, and 20+ states.",
        "items": [
          "PT slabs auto-applied by work state",
          "LWF deduction schedules configured",
          "PT returns filing reminders",
          "Multi-state payroll reconciliation",
          "Automatic rule updates on law change",
        ],
      },
      {
        "id": "5",
        "cls": "light-olive",
        "head": "New Labour Code Readiness",
        "desc": "The 4 Labour Codes consolidate 29 central laws. Our compliance engine is already configured for the Code on Wages, Social Security, Industrial Relations, and Occupational Safety.",
        "items": [
          "Full and Final Settlement in 2 working days",
          "Revised gratuity computation",
          "Social Security Code benefits tracking",
          "Wage definition changes applied",
          "State-by-state rollout monitoring",
        ],
      },
      {
        "id": "6",
        "cls": "light-danger",
        "head": "Inspection &amp; Audit Readiness",
        "desc": "When a labour inspector walks in, you need all records ready in minutes — not days. Our system maintains complete statutory documentation for every employee, every day.",
        "items": [
          "Muster roll maintained digitally",
          "Wage register always up to date",
          "Leave register with full history",
          "Accident register and safety logs",
          "Inspector-ready report generation",
        ],
      },
    ],
  }
];

export const FactoryFeaturesData = [
  {
    badge: "Platform Features",
    title: "<span class='text-gradient'>Every Feature Built</span> for the Factory Floor",
    description: "Not a generic HR tool adapted for manufacturing. Purpose-built features that match how Indian factories actually operate — from biometric devices to CLRA registers to multi-plant payroll.",
    stages: [
      {
        tabCls:"tab-periwinkle",
        tabName: "Attendance & Shifts",
        imgUrl: ImagesUrl_manufacturing.attendanceShifts,
        alt: "Biometric attendance and shift scheduling dashboard for factories",
        features: [
          {
            icon: ImagesUrl_manufacturing.biometricDevice,
            title: "Biometric Device Integration",
            description: "Connect fingerprint, face recognition, RFID, and iris scanners (ZKTeco, eSSL, Realand). Punches sync in real-time, eliminating buddy punching entirely.",
          },
          {
            icon: ImagesUrl_manufacturing.rotating3shift,
            title: "Rotating 3-Shift Scheduler",
            description: "Configure A/B/C shifts, night shifts, and rotating cycles. Drag-and-drop roster builder with auto-assignment based on department and skill sets.",
          },
          {
            icon: ImagesUrl_manufacturing.overtimeCalculation,
            title: "Overtime Calculation (Factories Act)",
            description: "OT computed automatically at 2x rate as per Factories Act. Flags when daily/weekly limits are breached. Supervisors resolve missed punches same-day.",
          },
          {
            icon: ImagesUrl_manufacturing.offlineSync,
            title: "Offline Sync for Low-Connectivity Plants",
            description: "Biometric data queues locally during connectivity gaps and syncs the moment network restores — no attendance loss in remote or basement shop floors.",
          },
          {
            icon: ImagesUrl_manufacturing.geoFenced,
            title: "Geo-Fenced Mobile Attendance",
            description: "Field supervisors and multi-site staff clock in via <a href='/hrms-software/time-and-attendance-system'> GPS-fenced selfie attendance</a>. Works on basic Android phones with sub-3G connectivity.",
          },
        ],
      },
      {
        tabCls:"tab-danger",
        tabName: "Payroll & Compliance",
        imgUrl: ImagesUrl_manufacturing.payrollCompliance,
        alt: "Statutory payroll and compliance automation for manufacturing",
        features: [
          {
            icon: ImagesUrl_manufacturing.attendanceLinked,
            title: "Attendance-Linked Payroll Engine",
            description: "Gross salary computed from actual punched hours — including shift allowances, OT, night pay, incentives, and attendance-linked deductions. No spreadsheet reconciliation needed.",
          },
          {
            icon: ImagesUrl_manufacturing.autoFiling,
            title: "PF, ESI, TDS, PT, LWF Auto-Filing",
            description: "Statutory deductions calculated and challans generated automatically. ECR files, Form 24Q, Form 16, PT returns, and ESIC challan — one-click compliance filing.",
          },
          {
            icon: ImagesUrl_manufacturing.configurableSalary,
            title: "Configurable Salary Structures",
            description: "Permanent, contract, daily wage, apprentice, management — each gets their own salary template. Multi-grade pay scales, allowance slabs, and bonus rules all configurable without IT help.",
          },
          {
            icon: ImagesUrl_manufacturing.directBankTransfer,
            title: "Direct Bank Transfer & Payslips",
            description: "Salary disbursed via NEFT/RTGS/UPI. Digital payslips sent via SMS, WhatsApp, or email in the worker's preferred language including regional options.",
          },
          {
            icon: ImagesUrl_manufacturing.multiState,
            title: "Multi-State Payroll Engine",
            description: "Different PT slabs for Maharashtra, Karnataka, West Bengal, Gujarat — applied automatically based on the employee's work location. Multi-entity payroll consolidation included.",
          },
        ],
      },
      {
        tabCls:"tab-warning",
        tabName: "Contract Labour",
        imgUrl: ImagesUrl_manufacturing.contractLabours,
        alt: "Contract labour and CLRA compliance management for factories",
        features: [
          {
            icon: ImagesUrl_manufacturing.clraRegister,
            title: "CLRA Register Management",
            description: "Maintain statutory Form XIII, XIV, XV, XVI, and XVII registers for contract labour. Contractor-wise segregation ensures audit-ready documentation at any time.",
          },
          {
            icon: ImagesUrl_manufacturing.contractorWage,
            title: "Contractor Wage Compliance",
            description: "Verify that contractors are paying state minimum wages to their workers. Flag violations before they become your liability under the principal employer clause.",
          },
          {
            icon: ImagesUrl_manufacturing.contractorInvoice,
            title: "Contractor Invoice Validation",
            description: "Match billed hours against biometric attendance records. Prevent overbilling automatically — no more manual cross-referencing between attendance sheets and contractor invoices.",
          },
          {
            icon: ImagesUrl_manufacturing.manpowerRequest,
            title: "Manpower Request via Mobile",
            description: "Production managers request contract workers on-demand through the app. Real-time deployment tracking ensures the right headcount is on the floor, not overstaffed.",
          },
          {
            icon: ImagesUrl_manufacturing.biometricLabour,
            title: "Biometric Labour ID Cards",
            description: "Issue digital ID cards via biometric kiosks at the gate. Workers are enrolled in seconds and tracked through their assigned production zones all shift.",
          },
        ],
      },
      {
        tabCls:"tab-deepsky",
        tabName: "HR Operations",
        imgUrl: ImagesUrl_manufacturing.hrOperations,
        alt: "HR operations and worker self-service for manufacturing",
        features: [
          {
            icon: ImagesUrl_manufacturing.digitalOnboarding,
            title: "Digital Onboarding for Blue-Collar Workers",
            description: "Paperless onboarding with Aadhaar-based KYC, digital document collection, and offer letter generation. Onboard 50 workers in the time it used to take for 5.",
          },
          {
            icon: ImagesUrl_manufacturing.multiPlant,
            title: "Multi-Plant HR Dashboard",
            description: "Consolidated view across all your plants — headcount, absenteeism rate, overtime cost, payroll liability, and compliance status on one screen for the CHRO and CFO.",
          },
          {
            icon: ImagesUrl_manufacturing.safetyTraining,
            title: "Safety Training Tracker (LMS)",
            description: "Assign mandatory safety certifications, track completion, and set renewal reminders. Ensure every worker is trained and certified before being deployed to the floor.",
          },
          {
            icon: ImagesUrl_manufacturing.leaveHoliday,
            title: "Leave & Holiday Management",
            description: "National, state, and factory-specific holiday calendars. Leave balance tracking per shift cycle. Approval workflows with automatic workforce impact analysis.",
          },
          {
            icon: ImagesUrl_manufacturing.workforceAnalytics,
            title: "Workforce Analytics & Reports",
            description: "Attrition trends, overtime patterns, cost-per-unit-of-production, absenteeism by department — data that helps plant managers make staffing decisions before a problem occurs.",
          },
        ],
      },
    ],
  },
];

// ── Self-service ──────────────────────────────────────────────────────
export const SelfServiceData = [
  {
    "badge": "Mobile-First ESS Portal",
    "title": "Give Every Worker — On the Floor or Off — <span class='text-gradient'>Self-Service Access</span>",
    "desc": "No email, no laptop, no problem. QkrHR's <a href='/hrms-software/employee-self-service-portal'>mobile app</a> puts HR in every worker's hand.",
    "stat": {
      "value": "70%",
      "label": "fewer HR queries",
      "desc": "Reduction in HR phone queries after <a href='/hrms-software/employee-self-service-portal'>ESS deployment</a> in manufacturing plants. HR teams report saving 15–20 hours per week previously spent answering basic payslip and leave queries.",
    },
    "List": [
      {
        "id": "1",
        "icon": ImagesUrl_manufacturing.instantPayslipAccess,
        "head": "Instant Payslip Access",
        "desc": "Workers download payslips and tax statements anytime, in their own language.",
      },
      {
        "id": "2",
        "icon": ImagesUrl_manufacturing.leaveApplications,
        "head": "Leave &amp; Applications",
        "desc": "Apply for leave, comp-offs and permissions with one-tap manager approvals.",
      },
      {
        "id": "3",
        "icon": ImagesUrl_manufacturing.attendanceShift,
        "head": "Attendance &amp; Shift View",
        "desc": "Check punch history, shift schedules and overtime hours on the go.",
      },
      {
        "id": "4",
        "icon": ImagesUrl_manufacturing.requestClaims,
        "head": "Requests &amp; Claims",
        "desc": "Raise reimbursement, loan and advance requests without visiting the HR office.",
      },
    ],
  }
];

// ── Best HRMS ranking table ───────────────────────────────────────────
export const BestHrmsTableData = [
  {
    "badge": "Buyer's Shortlist · 2026",
    "title": "<span class='text-gradient'>Best HR &amp; Payroll Software</span> for Manufacturing in India",
    "desc": "Most \"top HRMS\" lists rank office tools. This one ranks by what a factory actually needs: biometric integration, shift and contract-labour handling, Factories Act compliance, and multi-plant payroll.",
    "headers": ["S.No", "Software", "Best For", "Strongest in Manufacturing When…"],
    "rows": [
      { "id": "1", "software": "QkrHR", "bestFor": "Indian manufacturing operations", "when": "You run shifts, contract labour, and multiple plants and need attendance to reach payroll cleanly", "highlighted": true },
      { "id": "2", "software": "FactoHR", "bestFor": "Mobile-first field &amp; factory teams", "when": "Your priority is a strong mobile app for a distributed shop-floor workforce", "highlighted": false },
      { "id": "3", "software": "HROne", "bestFor": "Large manufacturing enterprises", "when": "You want a broad HR suite and have enterprise-scale headcount", "highlighted": false },
      { "id": "4", "software": "Keka", "bestFor": "Modern mid-market teams", "when": "UX and analytics matter more than deep factory-specific compliance", "highlighted": false },
      { "id": "5", "software": "greytHR", "bestFor": "SME statutory payroll", "when": "You're an SME whose first need is clean PF/ESI/PT payroll compliance", "highlighted": false },
      { "id": "6", "software": "Ramco HCM", "bestFor": "Global / multi-country payroll", "when": "You operate across countries and need complex enterprise payroll", "highlighted": false },
      { "id": "7", "software": "Darwinbox", "bestFor": "Large enterprise HR suites", "when": "You're a conglomerate standardising HR across many business units", "highlighted": false },
      { "id": "8", "software": "Zoho Payroll", "bestFor": "Zoho-ecosystem small business", "when": "You're small and already run your business on Zoho apps", "highlighted": false },
    ],
    "note": {
      "title": "How this list was built.",
      "desc": "This comparison is published by QkrHR. We ranked vendors on manufacturing-specific criteria — native biometric integration, rotating-shift and contract-labour (CLRA) handling, Factories Act overtime, and multi-plant payroll. Every vendor's genuine best-fit is noted. We placed QkrHR first for manufacturing because that is the segment it is purpose-built for; for other segments, the best choice may be a different tool on this list.",
    },
  }
];

// ── QkrHR vs generic comparison ───────────────────────────────────────
export const ComparisonData = [
  {
    "badge": "Comparison",
    "title": "<span class='text-gradient'>QkrHR vs Generic HR Software</span> for Manufacturing",
    "desc": "Most HR software is built for office companies and bolts on \"manufacturing features\" as an afterthought. Here's the honest difference.",
    "headers": ["Feature / Requirement", "Qkrhr (Manufacturing HRMS)", "Generic HR Software", "Spreadsheets + Manual"],
    "rows": [
      {
        "id": "1", "feature": "Biometric device integration (ZKTeco, eSSL)",
        "qkrhr": "Native, real-time sync",
        "generic": { "status": "warn", "text": "Requires custom API" },
        "manual": { "status": "bad", "text": "Manual data entry" },
      },
      {
        "id": "2", "feature": "3-shift rotating roster management",
        "qkrhr": "Built-in drag-and-drop",
        "generic": { "status": "warn", "text": "Basic shift support only" },
        "manual": { "status": "bad", "text": "Excel only" },
      },
      {
        "id": "3", "feature": "Contract labour (CLRA) register management",
        "qkrhr": "All 5 statutory forms",
        "generic": { "status": "bad", "text": "Not available" },
        "manual": { "status": "bad", "text": "Not available" },
      },
      {
        "id": "4", "feature": "Factories Act OT calculation (2x rate)",
        "qkrhr": "State-specific rules auto-applied",
        "generic": { "status": "warn", "text": "Generic OT rules only" },
        "manual": { "status": "bad", "text": "Fully manual" },
      },
      {
        "id": "5", "feature": "Multi-state PT / LWF compliance",
        "qkrhr": "25+ states configured",
        "generic": { "status": "warn", "text": "Limited state coverage" },
        "manual": { "status": "bad", "text": "Manual calculation" },
      },
      {
        "id": "6", "feature": "Shop floor kiosk-mode attendance",
        "qkrhr": "Works without personal phones",
        "generic": { "status": "bad", "text": "Not available" },
        "manual": { "status": "bad", "text": "Manual slabs" },
      },
      {
        "id": "7", "feature": "Mobile ESS in regional Indian languages",
        "qkrhr": "10+ languages including Hindi, Marathi",
        "generic": { "status": "warn", "text": "English only typically" },
        "manual": { "status": "warn", "text": "Paper registers" },
      },
      {
        "id": "8", "feature": "Offline sync for low-connectivity plants",
        "qkrhr": "Auto-resync on connection restore",
        "generic": { "status": "bad", "text": "Cloud-only, offline fails" },
        "manual": { "status": "warn", "text": "N/A" },
      },
      {
        "id": "9", "feature": "PF ECR file generation (UAN-wise)",
        "qkrhr": "One-click, auto-generated",
        "generic": { "status": "warn", "text": "Some tools, basic format" },
        "manual": { "status": "bad", "text": "Paper backups" },
      },
      {
        "id": "10", "feature": "Contractor invoice vs attendance validation",
        "qkrhr": "Auto-mismatch flagging",
        "generic": { "status": "bad", "text": "Not available" },
        "manual": { "status": "bad", "text": "Manual Excel preparation" },
      },
    ],
  }
];

// ── Setup timeline ────────────────────────────────────────────────────
export const SetupTimelineData = [
  {
    "badge": "Implementation",
    "title": "From Setup to <span class='text-gradient'>Full Payroll in 15 Days</span>",
    "desc": "We've implemented HRMS in over 200 manufacturing plants. Our methodology is built for factories — not for IT companies.",
    "steps": [
      {
        "id": "1",
        "head": "Plant Discovery &amp; Mapping",
        "desc": "Our team visits your plant(s), maps all biometric devices, shift structures, salary grades, contractor workflows, and compliance requirements before writing a single line of configuration.",
      },
      {
        "id": "2",
        "head": "Data Migration &amp; Device Integration",
        "desc": "Employee master data, existing attendance history, and all biometric devices are integrated. We connect to ZKTeco, eSSL, Matrix, and other brands already on your shop floor.",
      },
      {
        "id": "3",
        "head": "Compliance Configuration",
        "desc": "Employee master data, existing attendance history, and all biometric devices are integrated. We connect to ZKTeco, eSSL, Matrix, and other brands already on your shop floor.",
      },
      {
        "id": "4",
        "head": "Parallel Run &amp; Go-Live",
        "desc": "One full payroll cycle run in parallel with your existing system for accuracy validation. After sign-off, you go live with full support from a dedicated manufacturing HR specialist.",
      },
    ],
    "note": {
      "title": "Average implementation timeline:",
      "desc": "3–4 weeks for single plant (up to 500 employees). 6–8 weeks for multi-plant enterprise deployments. Data migration, device integration, and compliance setup all included in onboarding.",
    },
  }
];

// ── Real cost ─────────────────────────────────────────────────────────
export const RealCostData = [
  {
    "badge": "Return on Investment",
    "title": "<span class='text-gradient'>The Real Cost of Not Having</span> the Right HRMS",
    "desc": "Manufacturing companies often delay HRMS investment to save on software cost — and end up paying far more in compliance penalties, payroll errors, and HR overhead.",
    "impact": {
      "label": "Total Monthly Impact",
      "amount": "₹2.5L+",
      "sub": "Saved Every Month",
      "badge": "32% Cost Reduction",
    },
    "savingsTitle": "Monthly Savings — 500-Employee Plant",
    "savings": [
      { "id": "1", "icon": ImagesUrl_manufacturing.buddyPunching, "label": "Buddy punching / time theft eliminated", "value": "₹1.1L", "note": "Saved" },
      { "id": "2", "icon": ImagesUrl_manufacturing.hrAdminHours, "label": "HR admin hours freed (40 hrs/month)", "value": "₹40K", "note": "Saved" },
      { "id": "3", "icon": ImagesUrl_manufacturing.payrollError, "label": "Payroll error corrections eliminated", "value": "₹25K", "note": "Saved" },
      { "id": "4", "icon": ImagesUrl_manufacturing.compliancePenalties, "label": "Compliance penalties avoided", "value": "₹50K/year", "note": "Saved" },
      { "id": "5", "icon": ImagesUrl_manufacturing.contractorOverbilling, "label": "Contractor overbilling prevented", "value": "₹35K", "note": "Saved" },
    ],
    "cards": [
      {
        "id": "1",
        "label": "Payroll Processing Speed",
        "value": "5X",
        "title": "Faster Month-End Close",
        "desc": "Manufacturers using <a href='/hrms-software'>integrated HRMS</a> compress 10-day payroll cycles to under 2 days. HR teams recover 40 operations hours per month at mid-market scale.",
      },
      {
        "id": "2",
        "label": "Payroll Processing Speed",
        "value": "92%",
        "title": "vs 55% on Manual Processes",
        "desc": "Companies using <a href='/hrms-software/hr-payroll-software'>payroll software</a> report 92% compliance accuracy. Manual operations average just 55% — exposing the remaining gap as fines, notices, and worker disputes.",
      },
      {
        "id": "3",
        "label": "Worker Satisfaction",
        "value": "94%",
        "title": "Stay-on Rate with ESS Access",
        "desc": "Employees who can access payslips, leave, and career tools on their phones stay significantly longer — directly reducing your cost of attrition and rehiring in skilled trades.",
      },
    ],
  }
];

// ── How to choose ─────────────────────────────────────────────────────
export const HowToChooseData = [
  {
    "badge": "Buyer's Guide",
    "title": "<span class='text-gradient'>How to Choose HR Software</span> for Your Manufacturing Company",
    "desc": "A systematic checklist for HR Managers, CHROs, and CFOs evaluating HRMS vendors. Don't be swayed by demos — evaluate on these manufacturing-specific criteria.",
    "columns": [
      {
        "id": "1",
        "num": "1",
        "head": "Must-Have Technical Requirements",
        "items": [
          "Native biometric device integration (not just CSV import) for your brand of devices",
          "Offline attendance sync — critical for plants with patchy connectivity",
          "Support for rotating shifts (A/B/C) with state-specific OT rules",
          "CLRA register management for contract labour (Form XIII to XVII)",
          "Multi-state PT and LWF engine covering every state where you operate",
          "Kiosk-mode for shared-device punch for workers without smartphones",
          "ECR file generation and direct EPFO/ESIC portal integration",
        ],
      },
      {
        "id": "2",
        "num": "2",
        "head": "Must-Have Technical Requirements",
        "items": [
          "\"Show me live contract labour tracking — not just payroll.\" Insist on a CLRA demo.",
          "\"What happens when the biometric device goes offline for 4 hours?\"",
          "\"How are Factories Act OT rules different from standard OT?\" Can they explain it?",
          "\"Show me multi-state PT configuration for Maharashtra + Karnataka.\"",
          "\"What is the implementation timeline and what does it include?\"",
          "\"Do you have a manufacturing-specific customer support team?\"",
          "\"What is your process when a labour law changes mid-year?\"",
        ],
      },
      {
        "id": "3",
        "num": "3",
        "head": "Red Flags to Reject Immediately",
        "items": [
          "Vendor says \"biometric integration available via API\" — means you pay extra and wait months",
          "No mention of CLRA registers or contract labour module in their feature list",
          "They demo ESS on a laptop — ask to see it on a basic Android phone in Hindi",
          "Implementation timeline is \"just upload a CSV\" — manufacturing setup needs on-site work",
          "No manufacturing clients in their reference list — ask for 3 factory references specifically",
          "OT calculation uses flat rate — Factories Act requires 2x, and state amendments vary",
        ],
      },
      {
        "id": "4",
        "num": "4",
        "head": "Total Cost of Ownership Checklist",
        "items": [
          "Per-employee-per-month (PEPM) pricing — get a flat rate, not one that explodes with contract labour headcount",
          "Biometric device integration: is it included or a paid add-on?",
          "Implementation cost: on-site setup, device configuration, data migration all covered?",
          "Compliance update cost: are statutory rule updates included or billed separately?",
          "Training and change management for shop-floor HR staff and supervisors",
          "Support SLA: 4-hour response for payroll-day issues (it must be guaranteed)",
        ],
      },
    ],
  }
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const ManufacturingFaqData = [
  {
    "id": 1,
    "Title": "What is the best HR software for manufacturing companies in India?",
    "Content": "The best HRMS for manufacturing must natively handle rotating shifts, biometric device integration (not just CSV import), CLRA contract labour registers, Factories Act OT rules, and multi-state PF/ESI/PT compliance. Generic tools built for IT companies will miss most of these requirements. Qkrhr is purpose-built for Indian manufacturing operations.",
  },
  {
    "id": 2,
    "Title": "How does manufacturing payroll differ from standard payroll?",
    "Content": "Manufacturing payroll involves shift differentials, night shift allowances, overtime at 2× rate under the Factories Act, attendance-linked deductions, production incentives, and separate pay structures for permanent, contract, daily wage, and apprentice workers. Standard payroll software handles none of these correctly without significant customization.",
  },
  {
    "id": 3,
    "Title": "Which biometric devices does Qkrhr integrate with?",
    "Content": "Qkrhr integrates natively with ZKTeco, eSSL, Matrix, Realand, BioMax, and most fingerprint, face recognition, RFID, and iris scanner devices common in Indian factories. Integration is included in onboarding — no additional development fees. If you have a device not listed, our team evaluates integration within 7 business days.",
  },
  {
    "id": 4,
    "Title": "Can the HR software manage contract labour and CLRA compliance?",
    "Content": "Yes. Our contract labour module maintains all 5 statutory CLRA registers (Form XIII to XVII), tracks contractor licences, verifies minimum wage compliance, validates contractor invoices against attendance, and generates the principal employer's PF/ESI liability reports. This is one of the features most frequently missing in generic HRMS tools.",
  },
  {
    "id": 5,
    "Title": "Does the attendance software work in areas with poor connectivity?",
    "Content": "Yes. Biometric devices store attendance locally when the network is unavailable and sync automatically the moment connectivity restores. No attendance data is lost. This is specifically designed for basement plants, remote facilities, and industrial zones with unstable internet connectivity — a common challenge in Indian manufacturing.",
  },
  {
    "id": 6,
    "Title": "How does the mobile ESS portal work for shop-floor workers without smartphones?",
    "Content": "Workers without personal smartphones use the kiosk-mode terminals installed at plant entry/exit points. Workers with basic Android phones can access the mobile app in 10+ Indian languages including Hindi, Marathi, Tamil, and Kannada. A WhatsApp integration also allows payslip delivery and leave requests via WhatsApp without downloading any app.",
  },
  {
    "id": 7,
    "Title": "How long does implementation take for a manufacturing company?",
    "Content": "Typical implementation is 3–4 weeks for a single plant (up to 500 employees), including device integration, data migration, compliance configuration, and staff training. Multi-plant enterprise deployments take 6–8 weeks. We run one payroll cycle in parallel before full go-live to verify accuracy before cutting over.",
  },
  {
    "id": 8,
    "Title": "Is the software suitable for Indian manufacturing SMEs, or only large enterprises?",
    "Content": "Yes. QkrHR works for manufacturers of every size, from 50-employee job shops to multi-plant enterprises. Pricing starts with a fixed monthly base instead of a pure per-employee fee. The Essential plan costs ₹3,000 per month for up to 50 employees, plus ₹40 per month for each additional employee, and already includes biometric attendance, PF, ESI and PT compliance, and CLRA contract labour registers. The Foundation plan costs ₹5,000 per month for up to 50 users and ₹80 per additional user, and adds overtime automation plus salary advance and loan management for shop-floor workers. Multi-plant manufacturers that need auto-generated rotational rosters, multi-site shift planning, and contractor shift allocation can choose the custom-quoted Growth plan.",
  },
];

// ── Related Industries (above the final CTA) ─────────────────────────

export const RelatedIndustriesData = [
  {
    title: "Moving goods after they leave the plant?",
    link: "/hrms-software/logistics",
    linkText: "HRMS for logistics companies",
  },
  {
    title: "Hiring guards through an agency?",
    link: "/hrms-software/security-services",
    linkText: "HRMS for security agencies",
  },
  {
    title: "Running a smaller unit?",
    link: "/hrms-software/hr-software-small-business",
    linkText: "HR software for small businesses",
  },
];

// ── Final CTA ─────────────────────────────────────────────────────────

export const FinalCtaData = [
  {
    "id": 1,
    "title": "Stop Managing Your Factory Workforce <span class='text-gradient'>on Spreadsheets</span>",
    "description": "Book a 45-minute live demo with a manufacturing HR specialist. We'll show you exactly how Qkrhr handles your shift structure, biometric devices, and compliance requirements — with your own data if you'd like.",
    "buttons": [
      { "id": 1, "label": "Book a Free Demo", "url": "/signup", "type": "cta-btn-magenta" },
      { "id": 2, "label": "Compare the Options", "url": "#compare-options", "type": "cta-btn-outline" },
    ],
  }
];
