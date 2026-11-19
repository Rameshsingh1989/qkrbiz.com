import { leaveManagement as ImagesUrl_leaveManagement } from "../../../../assets/images";

export const LeaveManagementMeta = {
  title: "Best Leave Management Software | Apply, Approve & Track",
  description: "Leave management software that automates requests, approvals and balances. Custom policies, holiday calendars, payroll-ready LOP and a mobile app. Book a demo.",
};

export const LeaveManagementHeadData = [
    {   
      id:1,
      videoUrl:"",
      youTubeVideoUrl: "bf3U8zW1dxc",
      imgUrl:ImagesUrl_leaveManagement.leaveManagementHeader,
      alt:"employee leave management system",
      title:"Leave Management",
      subTitle:"<span>Leave Management That's Clear, </span><br/><span class='text-gradient'>Flexible & Error-Free.</span>",
      desc:"Fix leave once and for all — with a system built for real-world complexity. QkrHR handles every leave type, policy, accrual and approval automatically, so balances stay right and payroll gets clean numbers.",
      subDesc:"",
      link:"/signup",
      HeadList:[
        "Auto accrual",
        "Multi-level approvals",
        "Audit-logged",
        "Payroll-connected"
      ]
    }
];
// ----------------------- STATS ROW -----------------------
export const LeaveAttendanceStats = [
  { id: 1, value: "500+", label: "Companies on QkrHR" },
  { id: 2, value: "7 Days", label: "Employee Go-Live" },
  { id: 3, value: "15 Days", label: "Full Implementation" },
  { id: 4, value: "0", label: "Manual Data Exports Needed" },
  { id: 5, value: "1", label: "Login for HR + Payroll" }
];

// ----------------------- BUILT TO SOLVE REAL LEAVE PROBLEMS -----------------------
export const LeaveSolveData = [
  {
    id: 1,
    subTitle: "Built to solve real leave problems",
    title: "<span class='text-gradient'>QkrHR solves all of this —</span> in one flow.",
    description: "",
    cards: [
      { id: 1, icon: ImagesUrl_leaveManagement.manualbalance, problem: "Manual balance tracking", solution: "Fully automatic accrual" },
      { id: 2, icon: ImagesUrl_leaveManagement.approvaldelays, problem: "Approval delays & lost requests", solution: "Multi-level workflows + escalation" },
      { id: 3, icon: ImagesUrl_leaveManagement.balanceConfusion, problem: "Balance confusion at apply time", solution: "Live balance visible before applying" },
      { id: 4, icon: ImagesUrl_leaveManagement.sandwich, problem: "Sandwich & LOP errors", solution: "Policy-driven, automatic calculation" },
      { id: 5, icon: ImagesUrl_leaveManagement.payrolldiscrepancies, problem: "Payroll discrepancies every month", solution: "Direct payroll integration" },
      { id: 6, icon: ImagesUrl_leaveManagement.noaudit, problem: "No audit trail on adjustments", solution: "Audit-logged, irreversible records" }
    ]
  }
];

// ----------------------- DEPTH & ACCURACY (alternating image + text) -----------------------
export const LeaveDepthHeadData = {
  subTitle: "How it works",
  title: "Set up once. <span class='text-gradient'>Then let QkrHR run it.</span>",
  description: "Every leave type carries its own rules. Accrual rate, caps, carry-forward, encashment, eligibility and documentation requirements — set once at the type level, applied everywhere."
};

export const LeaveDepthData = [
  {
    id: 1,
    subTitle: "Define",
    title: "Any type your organization needs.",
    description: "From standard statutory leaves to custom types no template anticipated — QkrHR handles them all without workarounds.",
    imgUrl: ImagesUrl_leaveManagement.leaveManagementDefine,
    alt: "Any type your organization needs.",
    features: [
      "<span class='fn-sb'>Standard paid leaves -</span> Casual, Sick and Earned, each accruing on its own schedule.",
      "<span class='fn-sb'>Loss of Pay (LOP) —</span> tracked and fed into payroll deductions automatically.",
      "<span class='fn-sb'>Incident-based grants — </span> Maternity, Paternity, Bereavement, Marriage; issued as a lump on the event.",
      "<span class='fn-sb'>Custom types — </span> any name, any rule, any eligibility condition you define."
    ]
  },
  {
    id: 2,
    subTitle: "Build",
    title: "Build a policy bundle once. It covers the whole group.",
    description: "A leave policy picks which types apply, sets the year-end date, and adds cross-type rules. Per-type accrual and caps stay where they're defined — the policy just assembles them.",
    imgUrl: ImagesUrl_leaveManagement.leaveManagementBuild,
    alt: "Build a policy bundle once. It covers the whole group.",
    features: [
      "<span class='fn-sb'>Clubbing restrictions — </span> control which leave types can't be taken back-to-back or combined.",
      "<span class='fn-sb'>Sandwich policy - </span> decides whether non-working days between two absences count as leave, with detailed sub-rules for patterns, types and deduction method.",
      "<span class='fn-sb'>Year-end logic — </span> drives carry-forward, lapse and encashment automatically."
    ]
  },
  {
    id: 3,
    subTitle: "Assign & Accrue",
    title: "Assign in a click. Balances credit themselves every month.",
    description: "Map a policy to hundreds of employees by department, grade or location in one action. From that moment, accrual runs automatically — pro-rated for joiners and exits, logged line by line.",
    imgUrl: ImagesUrl_leaveManagement.leaveManagementAssignAccrue,
    alt: "Assign in a click. Balances credit themselves every month.",
    features: [
      "<span class='fn-sb'>Bulk assignment</span> by department, location, grade or legal entity in one action.",
      "<span class='fn-sb'>Effective date control — </span> past-dated assignments adjust balances retroactively.",
      "<span class='fn-sb'>Mid-year policy switch</span> transfers balances forward; accrual differences apply from the new effective date.",
      "<span class='fn-sb'>Monthly accrual runs automatically —</span> view the log, re-run a month, or catch up specific employees.",
      "<span class='fn-sb'>Pro-ration</span>  for mid-month joiners and exits, no manual maths needed.",
    ]
  },
  {
    id: 4,
    subTitle: "Approve",
    title: "Route every request to the right person — and never lose one.",
    description: "Configure 1 to N approval levels by role, manager or user. Long leaves go down a stricter path. Stale requests escalate on their own. Nothing waits on a holiday inbox.",
    imgUrl: ImagesUrl_leaveManagement.leaveManagementApprove,
    alt: "Route every request to the right person — and never lose one.",
    features: [
      "<span class='fn-sb'>Conditional routing — </span>leaves over 5 days go to HR, short leaves auto-approve.",
      "<span class='fn-sb'>Auto-escalation </span>bumps requests if an approver doesn't act within set hours.",
      "<span class='fn-sb'>Reassign approvals </span>when a manager is away — nothing gets stuck.",
      "<span class='fn-sb'>Email & in-app alerts </span>at every stage, for both requester and approver.",
    ]
  },
  {
    id: 4,
    subTitle: "Report",
    title: "Real-time leave visibility & workforce insights.",
    description: "Every leave movement is logged. Filter by team, department, date or location — and export for stakeholders who don't log in daily.",
    imgUrl: ImagesUrl_leaveManagement.leaveManagementReport,
    alt: "Route every request to the right person — and never lose one.",
    features: [
      "<span class='fn-sb'>Leave calendar — </span>team view of planned and approved leaves to plan cover in advance.",
      "<span class='fn-sb'>Leave liability — </span>the financial value of unused paid leave, critical for finance month-end.",
      "<span class='fn-sb'>Utilization report — </span>how much of each type is used vs earned, across groups.",
      "<span class='fn-sb'>Pending approvals dashboard — </span>flag stale requests before they auto-escalate.",
    ]
  }
];

// ----------------------- QkrHR GLIDE -----------------------
export const LeaveGlideData = [
  {
    id: 1,
    subTitle: "Beyond standard leave",
    title: "<span class='text-gradient'>The cases that usually end up</span> in a spreadsheet.",
    description: "",
    cards: [
      {
        id: 1,
        icon: ImagesUrl_leaveManagement.compensatoryOff,
        title: "Comp-off",
        description: "Credited from approved overtime or holiday work, in half or quarter days, with expiry."
      },
      {
        id: 2,
        icon: ImagesUrl_leaveManagement.shortsLeave,
        title: "Short leave",
        description: "A couple of hours off, capped per request and per month."
      },
      {
        id: 3,
        icon: ImagesUrl_leaveManagement.LeaveGrants,
        title: "Grants",
        description: "One-time entitlements, approved by a second person, with a reason on record."
      },
      {
        id: 4,
        icon: ImagesUrl_leaveManagement.leaveRegularization,
        title: "Balance adjustments",
        description: "Corrections go for approval and are logged with who, when and why."
      }
    ]
  }
];

// ----------------------- ONE MODULE, THREE JOBS -----------------------
export const LeaveThreeJobsData = [
  {
    id: 1,
    subTitle: "Role-based dashboards",
    title: "Everyone gets the view they need. <span class='text-gradient'>Only the view they need.</span>",
    description: "One platform, four clear lenses — employees, managers, HR and finance each see what drives their decisions.",
    jobs: [
      {
        id: 1,
        icon: ImagesUrl_leaveManagement.employee,
        title: "Employees",
        description: "Self-service, zero follow-up",
        features: [
          "See live balance before applying",
          "Track request and approval status",
          "Apply, edit or cancel in self-service",
          "No need to call HR for balance info"
        ],
        link: "/hrms-software/employee-self-service-portal",
        linkText: "Explore self-service portal →"
      },
      {
        id: 2,
        icon: ImagesUrl_leaveManagement.managers,
        title: "Managers",
        description: "Approve fast, plan cover",
        features: [
          "Approve or reject from a single inbox",
          "See team leave calendar to plan ahead",
          "No missed or stale approvals",
          "Automatic alerts on escalation"
        ],
        link: "/hrms-software/hr-workflow-management",
        linkText: "Explore approval workflows →"
      },
      {
        id: 3,
        icon: ImagesUrl_leaveManagement.hrTeams,
        title: "HR Teams",
        description: "Configure, monitor, control",
        features: [
          "Build and assign leave policies",
          "Run and review monthly accruals",
          "Issue grants and adjust balances",
          "Handle regularization exceptions"
        ],
        link: "/hrms-software/time-and-attendance-system",
        linkText: "Explore attendance system →"
      },
      {
        id: 3,
        icon: ImagesUrl_leaveManagement.financeTeams,
        title: "Finance Teams",
        description: "Payroll-ready, no re-keying",
        features: [
          "Leave and LOP flow into payroll directly",
          "Leave liability report at month-end",
          "No discrepancies, no manual entry",
          "Faster, more accurate salary processing"
        ],
        link: "/hrms-software/hr-payroll-software",
        linkText: "Explore HR & payroll →"
      }
    ]
  }
];

// ----------------------- HOW IT WORKS (steps) -----------------------
export const LeaveHowItWorksData = [
  {
    id: 1,
    subTitle: "Built for complex workforce structures",
    title: "<span class='text-gradient'>Scales as your</span> organization grows.",
    description: "No two Indian companies run leave and attendance the same way. QkrHR bends to how you already work — by team, location, grade or contract type.",
    steps: [
      {
        id: 1,
        number: "1",
        icon: ImagesUrl_leaveManagement.multiLocation,
        title: "Multi-location",
        description: "Separate policies per branch, city or country — each with its own leave types and year-end."
      },
      {
        id: 2,
        number: "2",
        icon: ImagesUrl_leaveManagement.multiEntity,
        title: "Multi-entity",
        description: "Multiple legal entities under one account, each with independent policy configuration."
      },
      {
        id: 3,
        number: "3",
        icon: ImagesUrl_leaveManagement.hybrid,
        title: "Hybrid & remote teams",
        description: "WFH and remote employees on the same policy as office staff, or a different one."
      },
      {
        id: 4,
        number: "4",
        icon: ImagesUrl_leaveManagement.fieldPlant,
        title: "Field & plant staff",
        description: "Factory, site and contract workers with shift-linked leave rules and roster-aware calculation."
      }
    ]
  }
];

// ----------------------- Advanced Leave (steps) -----------------------
export const AdvancedLeaveData = [
  {
      id: 1,
      subTitle:"Advanced leave management features",
      title:"<span class='text-gradient'>Enterprise-level complexity, handled </span> with ease.",
      desc:"",
      cardSection:[
          {
            id: 1,
            icon:ImagesUrl_leaveManagement.leaveRegularize,
            title: "Leave Regularization (LR)",
            description: "Exception handling with dedicated workflows, senior approvers, mandatory justification and monthly tracking.",
          },
          {
            id: 2,
            icon:ImagesUrl_leaveManagement.lossofPay,
            title: "Loss of Pay (LOP) Tracking",
            description: "LOP tracked, adjusted via balance adjustments, and fed directly into payroll deduction calculations.",
          },
          {
            id: 3,
            icon:ImagesUrl_leaveManagement.restrictedHoliday,
            title: "Restricted Holiday (RH/Floater)",
            description: "Optional holidays employees can choose from a pool — tracked and approved like any leave type",
          },
          {
            id: 4,
            icon:ImagesUrl_leaveManagement.makerChecker,
            title: "Maker-Checker Validation",
            description: "Dual authorization on leave grants — creator adds, a separate approver publishes. No self-approval gap.",
          },
          {
            id: 5,
            icon:ImagesUrl_leaveManagement.balanceAdjustments,
            title: "Balance Adjustments",
            description: "Manual add or deduct for any employee — every change logged with reason, user and timestamp.",
          },
          {
            id: 5,
            icon:ImagesUrl_leaveManagement.cancelEdit,
            title: "Cancel, Edit & Unlock",
            description: "Cancel pending or approved leaves, edit dates, and handle post-close corrections with full audit control.",
          }
      ]
  }
];

// ----------------------- HOW IT COMPARES (table) -----------------------
export const LeaveComparisonData = [
  {
    id: 1,
    subTitle: "How it compares",
    title: "Spreadsheets, biometric dumps, or <span class='text-gradient'>QkrHR.</span>",
    description: "Most teams cobble attendance together from tools that were never meant to talk to each other.",
    columns: ["Capability", "Manual register / Excel", "Standalone biometric tool", "QkrHR Leave & Attendance"],
    rows: [
      { feature: "Custom types, policies & eligibility", manual: "—", biometric: "Limited", qkrhr: "Full" },
      { feature: "Auto monthly accrual & pro-ration", manual: "By hand", biometric: "Basic", qkrhr: "Automatic" },
      { feature: "Sandwich & clubbing rules", manual: "—", biometric: "—", qkrhr: "Built in" },
      { feature: "Multi-level approvals & escalation", manual: "Email", biometric: "Single-level", qkrhr: "1–N levels" },
      { feature: "Grants, comp-off, LR, short leave", manual: "—", biometric: "Partial", qkrhr: "All covered" },
      { feature: "Audit trail on every adjustment", manual: "—", biometric: "Basic", qkrhr: "Full" },
      { feature: "Flows into payroll", manual: "Re-keyed", biometric: "Export file", qkrhr: "Direct" },
      { feature: "Glide data grid & approvals inbox", manual: "—", biometric: "—", qkrhr: "Exclusive" },

    ]
  }
];

export const LeaveManagementFAQ = [
     {
       id:1,
       Title:"What is a leave management system?",
       Content:"A leave management system automates how a company defines leave types, sets policies, accrues balances, routes approvals, and tracks usage. Employees apply and check balances in self-service, managers approve through a workflow, and HR configures the rules once — after which accrual, deductions, and reporting run automatically.",
     },
     {
       id:2,
       Title:"How does leave accrual work in QkrHR?",
       Content:"Leaves are credited automatically each month based on each policy's accrual rule. A scheduled job applies the rule per employee, pro-rates for mid-month joiners and exits, and posts every balance movement to a ledger. Admins can view the run log, re-run a month, or run accrual for selected employees when needed."
     },
     {
       id:3,
       Title:"What is a sandwich leave policy?",
       Content:"A sandwich leave policy decides whether non-working days between two absences count as leave. For example, if an employee is on leave Friday and Monday, the policy determines whether the intervening weekend is deducted. QkrHR lets you set detailed sub-rules for which days, leave types and attendance patterns trigger it."
     },
     {
       id:4,
       Title:"Does QkrHR support multi-level leave approvals?",
       Content:"Yes. You can configure 1 to N approval levels — by role, designation, reporting manager or specific user — with conditional routing (leaves over 5 days go to HR) and auto-escalation if an approver doesn't act within a set time window."
     },
     {
       id:5,
       Title:"What is leave regularization in QkrHR?",
       Content:"Leave regularization handles exception cases outside standard policy, including negative leave within a configured limit. It routes through a dedicated workflow with senior approvers, requires mandatory justification, and usage is tracked monthly and yearly to detect overuse patterns."
     },
     {
       id:6,
       Title:"How does leave connect to payroll?",
       Content:"Leave balances, loss of pay and deductions flow directly into QkrHR payroll. Approved leave and LOP reflect in salary automatically, and leave liability reports give finance the value of unused paid leave at month-end — no re-keying or spreadsheet hand-off.",
     },

];

// ----------------------- FINAL CTA -----------------------
export const LeaveManagmentCta = [
  {
    id: 1,
    title: "See your team's attendance <span class='text-gradient'>go live today.</span>",
    description: "Start a free demo and run real attendance, leave and shifts for your own team — before you decide anything. No credit card · Works with your biometric devices · Set up in a day.",
    buttons: [
      { id: 1, label: "Book Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" }
    ]
  }
];



