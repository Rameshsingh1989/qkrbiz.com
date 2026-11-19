import { leaveAttendance as ImagesUrl_leaveAttendance } from "../../../../assets/images";

export const AttendanceHomeMeta = {
  title: "HR Attendance Software with Leave Management | All-in-One",
  description: "Manage attendance and leave in one employee attendance management system. Real-time tracking, auto leave balances and payroll-ready reports. Book a demo.",
};

// ----------------------- HERO -----------------------
export const AttendanceHeadData = [
    {
      id: 1,
      // videoUrl: ImagesUrl_video.TimeAttendanceHeaders,
      videoUrl:"",
      youTubeVideoUrl: "bf3U8zW1dxc",
      imgUrl: ImagesUrl_leaveAttendance.leaveAndAttendanceHeader,
      alt: "leave and attendance management system",
      title: "Leave &amp; Attendance Management",
      subTitle: "The attendance management system that ends the <span class='text-gradient text-line'>manual register</span><span class='text-gradient'> for good.</span>",
      desc: "Punches from every source, leave and shifts in one place, and a guided close that checks everything before attendance goes to payroll.",
      subDesc: "",
      link: "/signup",
      HeadList: [
        "Biometric-ready",
        "Mobile &amp; GPS",
        "Payroll-connected",
        "Built in India"
      ]
    }
];

// ----------------------- STATS ROW -----------------------
export const AttendanceStats = [
  { id: 1, value: "500+", label: "Companies on QkrHR" },
  { id: 2, value: "7 Days", label: "Employee Go-Live" },
  { id: 3, value: "15 Days", label: "Full Implementation" },
  { id: 4, value: "0", label: "Manual Data Exports Needed" },
  { id: 5, value: "1", label: "Login for HR + Payroll" }
];

// ----------------------- WHY TEAMS SWITCH (OLD WAY vs QkrHR WAY) -----------------------
export const WhySwitchData = [
  {
    id: 1,
    subTitle: "Why teams switch",
    title: "Attendance shouldn't cost you <span class='text-gradient'>the last week of every month.</span>",
    description: "Most attendance pain isn't about clocking in. It's about what happens after — chasing registers, fixing punches, and reconciling leave before payroll runs.",
    columns: [
      {
        id: 1,
        // variant: "old",
        variant: "old",
        title: "<span class='old-text'>The Old way</span>",
        points: [
          "A muster register, a biometric dump, and three WhatsApp groups that never agree",
          "Leave applied on paper or email, balances tracked in someone's head",
          "Shift rosters drawn in Excel, re-drawn every time someone swaps",
          "Two days of reconciliation before every payroll run",
          "No way to know who's actually in, right now"
        ]
      },
      {
        id: 2,
        variant: "new",
        title: "<span class='new-text'>The QkrHR Way</span>",
        points: [
          "One attendance log — biometric, mobile and web punches in the same place",
          "Self-service leave with live balances and one-tap approvals",
          "Drag-and-drop shift rosters with weekly offs and overtime built in",
          "Attendance flows into payroll automatically — no re-keying",
          "A live board that shows present, late, absent and on-leave in real time"
        ]
      }
    ]
  }
];

// ----------------------- ONE MODULE, THREE JOBS -----------------------
export const ThreeJobsData = [
  {
    id: 1,
    subTitle: "One module, three jobs",
    title: "Everything that runs your workforce day <span class='text-gradient'>in one place.</span>",
    description: "Attendance, leave and shifts share the same data. Change a shift, and leave and payroll already know.",
    jobs: [
      {
        id: 1,
        icon: ImagesUrl_leaveAttendance.attendanceManagement,
        title: "Attendance Management",
        description: "Capture and verify every punch, from any source, with full audit trail.",
        features: [
          "Biometric & access-device sync",
          "GPS-tagged mobile check-in",
          "Regularization & missed-punch fixes",
          "Live attendance board"
        ],
        link: "/hrms-software/time-and-attendance-system",
        linkText: "Explore attendance system →"
      },
      {
        id: 2,
        icon: ImagesUrl_leaveAttendance.leaveManagement,
        title: "Leave Management",
        description: "Configure any leave policy, automate accruals, and approve in one tap.",
        features: [
          "Custom leave types & accruals",
          "Live balances before applying",
          "Multi-level approval flows",
          "Holidays & comp-off handling"
        ],
        link: "/hrms-software/leave-management-system",
        linkText: "Explore leave management →"
      },
      {
        id: 3,
        icon: ImagesUrl_leaveAttendance.shiftManagement,
        title: "Shift Management",
        description: "Plan rotating and fixed shifts, weekly offs and overtime for any size team.",
        features: [
          "Drag-and-drop roster grid",
          "Rotating & night shifts",
          "Overtime & shift allowances",
          "Plant- and site-level rosters"
        ],
        link: "/hrms-software/shift-management-system",
        linkText: "Explore shift management →"
      }
    ]
  }
];

// ----------------------- DEPTH & ACCURACY (alternating image + text) -----------------------
export const DepthHeadData = {
  subTitle: "Depth & accuracy",
  title: "The detail that makes attendance data <span class='text-gradient'>you can actually pay on.</span>",
  description: "Accurate payroll starts with accurate attendance. QkrHR captures the edge cases most tools ignore — and lets you fix them without breaking the trail."
};

export const DepthData = [
  {
    id: 1,
    subTitle: "Capture",
    title: "Every punch, from every source, <span class='text-gradient'>in one log.</span>",
    description: "Your floor staff use a fingerprint machine. Your field team is on a phone. Your office signs in on a browser. QkrHR pulls all of it into a single, time-stamped attendance record.",
    imgUrl: ImagesUrl_leaveAttendance.everyPunch,
    alt: "Capture every punch from biometric, mobile and web in one attendance log",
    features: [
      "<span class='fn-sb'>Biometric & face devices</span> sync automatically — keep the hardware you already bought",
      "<span class='fn-sb'>GPS-tagged mobile check-in</span> with geofencing for field, site and remote staff",
      "<span class='fn-sb'>Web punch-in </span>from any browser, plus bulk import for legacy data"
    ]
  },
  {
    id: 2,
    subTitle: "Automate",
    title: "Leave that <span class='text-gradient'>calculates itself.</span>",
    description: "Set your policy once — accrual rate, carry-forward, encashment, sandwich rules — and QkrHR applies it to every request. Employees see their real balance before they apply.",
    imgUrl: ImagesUrl_leaveAttendance.leaveCalculates,
    alt: "Automated leave accruals and balances with QkrHR leave management",
    features: [
      "<span class='fn-sb'>Any leave type:</span> casual, sick, earned, comp-off, maternity, custom",
      "<span class='fn-sb'>Auto-accruals & carry-forward</span> so balances are always current",
      "<span class='fn-sb'>Multi-level approvals</span> with delegation when a manager is away"
    ]
  },
  {
    id: 3,
    subTitle: "Run the floor",
    title: "Shifts and rosters built for <span class='text-gradient'>real factory rhythms.</span>",
    description: "Morning, evening, night, rotating, split — assign shifts to a person, a team or a whole plant, and QkrHR handles the weekly offs, overtime and allowances that follow.",
    imgUrl: ImagesUrl_leaveAttendance.ShiftsRosters,
    alt: "Shift rosters, rotating and night shifts with overtime rules in QkrHR",
    features: [
      "<span class='fn-sb'>Drag-and-drop roster grid</span> for fast weekly planning and swaps",
      "<span class='fn-sb'>Rotating & night shifts</span> with allowance and overtime rules",
      "<span class='fn-sb'>Site- and plant-level rosters</span> for multi-location teams"
    ]
  }
];

// ----------------------- FLEXIBILITY (Your policies, not ours) -----------------------
export const FlexibilityData = [
  {
    id: 1,
    subTitle: "policies",
    title: "<span class='text-gradient'>Your policies,</span> not ours.",
    description: "No two Indian companies run leave and attendance the same way. QkrHR bends to how you already work — by team, location, grade or contract type.",
    cards: [
      {
        id: 1,
        cardBg:"policies-steg-1",
        icon: ImagesUrl_leaveAttendance.policyLyGroup,
        title: "Policy by group",
        description: "Different leave rules, work weeks and shift patterns for office, plant, field and contract staff running side by side."
      },
      {
        id: 2,
         cardBg:"policies-steg-2",
        icon: ImagesUrl_leaveAttendance.multiLocationReady,
        title: "Multi-location ready",
        description: "Branch, plant and site-level holidays, geofences and rosters with state-specific rules where they apply."
      },
      {
        id: 3,
        cardBg:"policies-steg-3",
        icon: ImagesUrl_leaveAttendance.wiredIntoPayroll,
        title: "Wired into payroll",
        description: "Loss-of-pay, overtime, late marks and leave deductions calculate automatically and land in payroll, accurate to the day."
      }
    ]
  }
];

// ----------------------- QkrHR GLIDE -----------------------
export const GlideData = [
  {
    id: 1,
    subTitle: "Flexibility",
    title: "Now running on <span class='text-gradient'>QkrHR Glide.</span>",
    description: "Glide is the new version of QkrHR — the same leave and attendance you know, with a powerful data grid on every list, a live approvals inbox, and policy sandboxes. The people who run HR get more depth; everyone else just gets the answer.",
    cards: [
      {
        id: 1,
        icon: ImagesUrl_leaveAttendance.PowerfulData,
        title: "Powerful data grid",
        description: "Sort, filter, pin, group and save your own views on any attendance list."
      },
      {
        id: 2,
        icon: ImagesUrl_leaveAttendance.liveApprovals,
        title: "Live approvals inbox",
        description: "Approve & Next through leave and regularization, with a double-approval guard."
      },
      {
        id: 3,
        icon: ImagesUrl_leaveAttendance.policyWhatIfs,
        title: "Policy what-ifs",
        description: "Test a leave or shift policy change in a sandbox before it goes live."
      },
      {
        id: 4,
        icon: ImagesUrl_leaveAttendance.fullDarkMode,
        title: "Full dark mode",
        description: "One design system, regional date and number formats, comfortable on night shift."
      }
    ]
  }
];

// ----------------------- HOW IT COMPARES (table) -----------------------
export const ComparisonData = [
  {
    id: 1,
    subTitle: "How it compares",
    title: "Spreadsheets, biometric dumps, or <span class='text-gradient'>QkrHR.</span>",
    description: "Most teams cobble attendance together from tools that were never meant to talk to each other.",
    columns: ["Capability", "Manual register / Excel", "Standalone biometric tool", "QkrHR Leave & Attendance"],
    rows: [
      { feature: "Biometric + mobile + web in one log", manual: "—", biometric: "Biometric only", qkrhr: "All sources" },
      { feature: "GPS-tagged field attendance", manual: "—", biometric: "—", qkrhr: "Geofenced" },
      { feature: "Leave policies & auto-accruals", manual: "Manual", biometric: "—", qkrhr: "Automated" },
      { feature: "Shift rosters & overtime", manual: "Manual", biometric: "Basic", qkrhr: "Full" },
      { feature: "Flows into payroll", manual: "Re-keyed", biometric: "Export file", qkrhr: "Direct" },
      { feature: "Live, real-time visibility", manual: "—", biometric: "End-of-day", qkrhr: "Real time" }
    ]
  }
];

// ----------------------- BUILT FOR INDIA (shown under the steps) -----------------------
export const BuiltForIndiaData = {
  subTitle: "Built for India",
  title: "Rules that match Indian workplaces.",
  tags: [
    "State-wise leave minimums",
    "National & festival holidays",
    "Half-day holidays",
    "Pay cycles like 26th to 25th",
    "Multiple legal entities",
    "Plants, sites and field teams",
  ],
};

// ----------------------- HOW IT WORKS (steps) -----------------------
export const HowItWorksData = [
  {
    id: 1,
    subTitle: "How it works",
    title: "<span class='text-gradient'>From first punch to payslip</span> <span class='text-black '>in four steps.</span>",
    description: "",
    steps: [
      {
        id: 1,
        number: "1",
        icon:"",
        title: "Connect",
        description: "Link your biometric machines, switch on mobile and web punch, and import existing balances."
      },
      {
        id: 2,
        number: "2",
        icon:"",
        title: "Set your rules",
        description: "Leave, shift, weekly-off and attendance rules by location, grade or team. Start from ready-made templates."
      },
      {
        id: 3,
        number: "3",
        icon:"",
        title: "Run the month",
        description: "Employees punch, and apply for leave and regularisation. Managers approve with the full picture."
      },
      {
        id: 4,
        number: "4",
        icon:"",
        title: "Close and pay",
        description: "Run the guided checks, lock, and payroll picks it up."
      }
    ]
  }
];

// ----------------------- FAQ -----------------------
export const AttendanceFAQ = [
  {
    id: 1,
    Title: "What is a leave and attendance management system?",
    Content: "It records when people work and when they're away, applies your leave, shift and attendance rules, and hands payroll a verified count of paid days. QkrHR does all three in one place, with a guided month-end close."
  },
  {
    id: 2,
    Title: "Does QkrHR work with biometric machines?",
    Content: "Yes. Punches from connected biometric machines land in the same log as mobile and web punches."
  },
  {
    id: 3,
    Title: "Does it work for factories with several shifts?",
    Content: "Yes. Define day, evening and night shifts, assign them on a shift calendar or by recurring rotation, and set weekly offs by location or roster."
  },
  {
    id: 4,
    Title: "Can employees apply for leave and regularise missed punches from their phone?",
    Content: "Yes. They see their balance and calendar in the app, apply for leave and regularisation, and managers approve from the app too."
  },
  {
    id: 5,
    Title: "How does attendance reach payroll?",
    Content: "When HR locks attendance for a pay group, paid days, LOP, overtime and allowances flow into payroll. Nothing is re-typed."
  },
  {
    id: 6,
    Title: "What if we find a mistake after locking?",
    Content: "Unlock the employee, fix the day in Correct Attendance, and QkrHR shows what will change before you lock again."
  },
  {
    id: 7,
    Title: "Is there a free attendance management option?",
    Content: "QkrHR offers a free demo of its full leave and attendance management system, including biometric sync, mobile check-in, leave automation and shift rosters. You can experience how real-time attendance tracking and payroll integration work for your team before you decide."
  }
];

// ----------------------- FINAL CTA -----------------------
export const AttendanceCta = [
  {
    id: 1,
    title: "Bring last month's <span class='text-gradient'>attendance register.</span>",
    description: "We'll show you how the same month closes in qkrHR.",
    buttons: [
      { id: 1, label: "Book Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" }
    ]
  }
];


