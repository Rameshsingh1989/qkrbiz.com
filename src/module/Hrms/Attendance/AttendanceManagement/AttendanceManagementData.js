import { timeAttendance as ImagesUrl_timeAttendance } from "../../../../assets/images";

export const AttendanceManagementMeta = {
  title: "Attendance Management Software | Real-Time & Biometric",
  description: "Time and attendance software for Indian businesses with real-time tracking via biometric, mobile app & GPS, overtime rules and payroll sync. Book a demo.",
};

// ----------------------- HERO -----------------------
export const AttendanceManagementHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "bf3U8zW1dxc",
    videoUrl: "",
    imgUrl: ImagesUrl_timeAttendance.timeAndAttendanceHeader,
    alt: "QkrHR attendance management software dashboard",
    title: "Attendance Management software",
    subTitle: "<span>Attendance Management That's Clear,</span><br/><span class='text-gradient'>Flexible &amp; Error-Free </span>",
    desc: "Biometric machines, mobile, web and on-duty punches checked against your rules, regularised with approval, and locked for payroll.",
    subDesc: "",
    link: "/signup",
    HeadList: []
  }
];

// ----------------------- BUILT TO SOLVE REAL PROBLEMS -----------------------
export const AttendanceProblemsData = [
  {
    id: 1,
    subTitle: "Built to Solve Real Business Problems",
    title: "<span class='text-gradient'>Built to Solve</span> Real Business Problems",
    description: "Attendance breaks in the same three places for almost every team. QkrHR is designed to close each gap.",
    cards: [
      { 
        id: 1, 
        bgClass: "bg-primarys", 
        title: "Manual Errors ", 
        solvedTitle: "Fully Automated System", 
        description: "No spreadsheets. No human mistakes."
       },
      { 
        id: 2, 
        bgClass: "bg-periwinkle", 
        title: "Buddy Punching", 
        solvedTitle: "GPS & Smart Tracking ", 
        description: "Real attendance, real accountability." 
      },
      { 
        id: 3, 
        bgClass: "bg-greens",
        title: "Remote Tracking Issues", 
        solvedTitle: "Mobile + Location Tracking", 
        description: "Know exactly where work happens." 
      },
      { 
        id: 4, 
        bgClass: "bg-warnings",
        title: "Regularization Overload", 
        solvedTitle: "Structured Workflows", 
        description: "No HR bottlenecks." 
      },
      { 
        id: 5, 
        bgClass: "bg-dangers",
        title: "Payroll Errors", 
        solvedTitle: "Direct Integration ", 
        description: "Accurate from day one." 
      },
      { 
        id: 6, 
        bgClass: "bg-tilde-greens", 
        title: "Compliance Risks", 
        solvedTitle: "Audit-Ready Data", 
        description: "Stay protected and compliant." 
      }
    ]
  }
];

// ----------------------- YOUR COMPLETE ATTENDANCE FLOW (tabbed, on-click) -----------------------
export const AttendanceFlowData = [
  {
    subTitle: "Your Attendance, Simplified",
    title: "<span class='text-gradient'>Your Complete Attendance Flow</span> Simplified",
    description: "QkrHR solves all of this—in one structured flow. Define, capture, review, resolve, finalize and sync — every stage handled in a single system.",
    stages: [
      {
        tabName: "Define",
        icon: ImagesUrl_timeAttendance.defineTab,
        iconActive: ImagesUrl_timeAttendance.defineHighlightTab,
        bgClass: "flow-bg-mint",
        title: "Define Clear & Flexible Policies",
        imgUrl: ImagesUrl_timeAttendance.attendanceDefineTab,
        alt: "Define clear and flexible attendance policies in QkrHR",
        features: [
          { label: "Multi-layered attendance policy configuration" },
          { label: "Shift-based, WFH, mobile & field workforce policies" },
          { label: "Role-based access and control" },
          { label: "Transparent policies visible to all employees" }
        ]
      },
      {
        tabName: "Capture",
        icon: ImagesUrl_timeAttendance.captureTabl,
        iconActive: ImagesUrl_timeAttendance.captureHighlightTabl,
        bgClass: "flow-bg-lavender",
        title: "Capture Attendance from Anywhere",
        imgUrl: ImagesUrl_timeAttendance.attendanceCaptureTabl,
        alt: "Capture attendance from biometric, mobile and web in QkrHR",
        features: [
          { label: "Web-based attendance system" },
          { label: "Mobile attendance with GPS tracking" },
          { label: "Biometric device integrations" },
          { label: "Field workforce & client location tracking" },
          { label: "Manual attendance upload" },
          { label: "Supervisor attendance" }
        ]
      },
      {
        tabName: "Review",
        icon: ImagesUrl_timeAttendance.reviewTab,
        iconActive: ImagesUrl_timeAttendance.reviewHighlightTab,
        bgClass: "flow-bg-cream",
        title: "Real-Time Visibility & Workforce Insights",
        imgUrl: ImagesUrl_timeAttendance.attendanceReviewTab,
        alt: "Real-time attendance visibility and workforce insights in QkrHR",
        features: [
          { label: "Employee attendance dashboards" },
          { label: "Organization-wide attendance visibility" },
          { label: "Daily, monthly, and historical reports" },
          { label: "Attendance trends and workforce insights" }
        ]
      },
      {
        tabName: "Resolve",
        icon: ImagesUrl_timeAttendance.resolveTab,
        iconActive: ImagesUrl_timeAttendance.resolveHighlightTab,
        bgClass: "flow-bg-green",
        title: "Smart Attendance Workflow",
        imgUrl: ImagesUrl_timeAttendance.attendanceResolveTab,
        alt: "Smart attendance regularization workflow in QkrHR",
        features: [
          { label: "Automated attendance regularization workflows" },
          { label: "Configurable approval hierarchies" },
          { label: "Deadline-based request handling" },
          { label: "Dashboard-driven approvals" },
          { label: "Smart notification system" }
        ]
      },
      {
        tabName: "Finalize",
        icon: ImagesUrl_timeAttendance.finalizeTab,
        iconActive: ImagesUrl_timeAttendance.finalizeHighlightTab,
        bgClass: "flow-bg-peach",
        title: "Error-Free Finalization",
        imgUrl: ImagesUrl_timeAttendance.attendanceFinalizeTab,
        alt: "Error-Free Finalization in QkrHR",
        features: [
          { label: "HR dashboard to review everything" },
          { label: "Automated attendance" },
          { label: "No manual calculations" },
          { label: "Payroll-ready accuracy" }
        ]
      },
      {
        tabName: "Sync",
        icon: ImagesUrl_timeAttendance.syncTab,
        iconActive: ImagesUrl_timeAttendance.syncHighlightTab,
        bgClass: "flow-bg-blue",
        title: "Seamless Payroll Integration",
        imgUrl: ImagesUrl_timeAttendance.attendanceSyncTab,
        alt: "Seamless Payroll Integration in QkrHR",
        features: [
          { label: "Direct integration with payroll processing" },
          { label: "Accurate salary calculations based on attendance" },
          { label: "Elimination of duplicate data entry" },
          { label: "Faster payroll cycles" }
        ]
      }
    ]
  }
];

// ----------------------- HANDLE EXCEPTIONS (scroll-driven text + image) -----------------------
export const HandleExceptionsData = {
  subTitle: "Handle Exceptions with Ease",
  title: "<span class='text-gradient'>Handle Exceptions</span> Without Breaking the System",
  description: "Stay compliant without sacrificing flexibility. Explore the exceptions QkrHR handles gracefully—the rule stays intact while each edge case gets resolved.",
  steps: [
    {
      id: 1,
      title: "Attendance lock/unlock",
      description: "Controls",
      imgUrl: ImagesUrl_timeAttendance.attendanceUnlock,
      alt: "Attendance Lock/Unlock in QkrHR"
    },
    {
      id: 2,
      title: "Exception handling",
      description: "Workflows",
      imgUrl: ImagesUrl_timeAttendance.attendanceException,
      alt: "Exception handling in QkrHR"
    },
    {
      id: 3,
      title: "Audit-ready",
      description: "Attendance records",
      imgUrl: ImagesUrl_timeAttendance.attendanceRecords,
      alt: "Audit-ready in QkrHR"
    },
    {
      id: 4,
      title: "Compliance-ready data",
      description: "For statutory requirements",
      imgUrl: ImagesUrl_timeAttendance.attendanceCompliance,
      alt: "Compliance-ready data in QkrHR"
    }
  ]
};

// ----------------------- DASHBOARDS THAT DRIVE ACTION (role tabs) -----------------------
export const AttendanceDashboardsData = [
  {
    subTitle: "Dashboards That Drive Results",
    title: "<span class='text-gradient'>Dashboards That</span> Drive Action",
    description: "Turn workforce data into clear, actionable insights. Track attendance, payroll, and employee performance in real time to make smarter, faster HR decisions.",
    stages: [
      {
        tabName: "Employees",
        bgClass: "theme-blue",
        title: "Employees",
        imgUrl: ImagesUrl_timeAttendance.dashboardsEmployee,
        features: [
          { label: "Track attendance & requests" },
          { label: "See approval status" },
          { label: "No need to follow up" }
        ]
      },
      {
        tabName: "Managers",
        bgClass: "theme-danger",
        title: "Managers",
        imgUrl: ImagesUrl_timeAttendance.dashboardsManagers,
        features: [
          { label: "Approve requests quickly" },
          { label: "Track team attendance" },
          { label: "No missed approvals" }
        ]
      },
      {
        tabName: "HR Teams",
        bgClass: "theme-green",
        title: "HR Teams",
        imgUrl: ImagesUrl_timeAttendance.dashboardsHrTeams,
        features: [
          { label: "Monitor all attendance data" },
          { label: "Resolve pending issues" },
          { label: "Finalize without errors" }
        ]
      },
      {
        tabName: "Finance Teams",
        bgClass: "theme-orange",
        title: "Finance Teams",
        imgUrl: ImagesUrl_timeAttendance.dashboardsFinanceTeams,
        features: [
          { label: "Payroll-ready attendance" },
          { label: "No discrepancies" },
          { label: "Faster salary processing" }
        ]
      }
    ]
  }
];

// ----------------------- ADVANCED CAPABILITIES -----------------------
export const AdvancedCapabilitiesData = [
  {
    subTitle: "More Flexibility",
    title: "<span class='text-gradient'>Advanced Capabilities</span> (When You Need Them)",
    description: "Depth for the teams that need it — without adding clutter for the teams that don't.",
    cards: [
      { id: 1, icon: ImagesUrl_timeAttendance.attendanceRegularization, title: "Attendance regularization system (AR)" },
      { id: 2, icon: ImagesUrl_timeAttendance.lop, title: "Loss of Pay (LOP) tracking & adjustments" },
      { id: 3, icon: ImagesUrl_timeAttendance.restrictedHolidays, title: "Restricted holidays (RH / floater leaves)" },
      { id: 4, icon: ImagesUrl_timeAttendance.monthlyAttendance, title: "Monthly attendance input for special cases" },
      { id: 5, icon: ImagesUrl_timeAttendance.makerChecker, title: "Maker checker validation system" }
    ]
  }
];

// ----------------------- PROBLEMS IT REMOVES -----------------------
export const ProblemsRemovedData = {
  subTitle: "Problems it removes",
  title: "What changes in the first month.",
  items: [
    { id: 1, title: "Proxy punching", description: "Biometric machines at the gate, and geofence plus face check on mobile." },
    { id: 2, title: "Field staff blind spots", description: "Punches only at permitted workplaces, plus on-duty requests for client visits." },
    { id: 3, title: "Regularisation pile-up", description: "Employees raise them as gaps appear, and managers clear them in bulk." },
    { id: 4, title: "Payroll errors", description: "Paid days, LOP and overtime come from locked attendance, never re-typed." },
    { id: 5, title: "“Why was I cut?”", description: "Every LOP day is explained on the payslip, day by day." },
    { id: 6, title: "Audit questions", description: "Punches, regularisations, Correct Attendance changes and approvals are all on record." },
  ],
};

// ----------------------- FAQ -----------------------
export const AttendanceManagementFAQ = [
     {
       id:1,
       Title:"Which ways can employees mark attendance?",
       Content:"Biometric machines, the mobile app with geofence, web punch, and on-duty requests for work away from the office. All of them land in one log.",
     },
     {
       id:2,
       Title:"How do you stop proxy punching?",
       Content:"Biometric machines at the gate, geofences and permitted workplaces for mobile punches, a registered phone per employee, and a face check against approved photos."
     },
     {
       id:3,
       Title:"How are missed punches handled?",
       Content:"The employee applies for regularisation from their calendar with a reason, and their manager approves it. HR and admins can also fix days directly in Correct Attendance, for one employee or many. Every change is logged."
     },
     {
       id:4,
       Title:"Does attendance go to payroll automatically?",
       Content:"Yes, once HR locks it. Approved leave, regularisations, LOP and overtime are already applied."
     },
     {
       id:5,
       Title:"Can we change attendance after locking?",
       Content:"Yes. Unlock the employee, make the change, and QkrHR shows what will change before you lock again."
     },
     {
       id:6,
       Title:"Does it handle WFH and field staff?",
       Content:"Yes. WFH has its own policy and calendar, and field staff punch at permitted workplaces or raise on-duty requests by the day or the hour.",
     },

];

// ----------------------- FINAL CTA -----------------------
export const AttendanceManagementCta = [
  {
    id: 1,
    title: "Tell us how your people  <span class='text-gradient'>punch today.</span>",
    description: "Machines, phones or paper: we'll show the same day in qkrHR.",
    buttons: [
      { id: 1, label: "Book Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" }
    ]
  }
];