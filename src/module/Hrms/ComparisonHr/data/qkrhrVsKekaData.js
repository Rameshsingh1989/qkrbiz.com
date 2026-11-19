import QkrhrVsKeka from "@/assets/images/hrms/comparisonHr/qkrhr-vs-keka-header.webp";
import QkrhrLogo from "@/assets/images/hrms/comparisonHr/qkrhr-logo.png";
import KeakLogo from "@/assets/images/hrms/comparisonHr/keka.png";
import VsImg from "@/assets/images/hrms/comparisonHr/vs.png";

export const ComparisonHeroData = [
  {
    badge: "HRMS Comparison",
    title: `QkrHR vs Keka:
            <br /> Which HRMS Truly Wins for Businesses in India?`,
    description: "Stop guessing. See the clear difference in speed, savings and satisfaction.",
    image: QkrhrVsKeka,
    primaryBtnText: "Book a Demo",
    primaryBtnLink: "/signup",
    secondaryBtnText: "See How It Works",
    secondaryBtnLink: "#comparison",
    videoIdCode: "PXqWLIPgqi0"
  }
];

export const alternativeSectionData = {
  title: "The Keka HR Alternative Indian Businesses Actually Switch To",
  subtitle: "In Short Answer",
  description: "Keka HR is a well-known HRMS with a polished interface — it works well for companies focused on employee engagement and performance management. But for Indian businesses that need payroll accuracy, statutory compliance, field workforce management, and support that actually picks up —",
  highlightText: "QkrHR is the stronger, more complete alternative. It covers everything Keka covers, and then goes further.",
};

export const FeaturesCoveredSectionData = {
  badge: "",
  title: `What Keka Misses, <br/><span class="text-gradient text-underline">QkrHR Covers For an Even Better User Experience.</span>`,
  description: `Where Keka Stops at Employee Experience, QkrHR Elevates the Entire Workplace Experience — for Employees, Managers, HR and Admin Teams.`,
  subTitle:"",
  suDesc:"",
  features: [
    {
      title: "One Platform, Every Role",
      desc:"",
      bgColor: "bg-pinks",
    },
    {
      title: "Truly Mobile-Ready",
      desc:"",
      bgColor: "bg-blue",
    },
    {
      title: "Workflows without limits",
      desc:"",
      bgColor: "bg-green",
    },
    {
      title: "Zero Navigation, Zero Hassle",
      desc:"",
      bgColor: "bg-orange",
    },
    {
      title: "Manage Straight from Dashboard",
      desc:"",
      bgColor: "bg-purple",
    },
    {
      title: "Customizable Views",
      desc:"",
      bgColor: "bg-cyan",
    },
    {
      title: "Field Teams, Expenses & Tasks Fully Connected",
      desc:"",
      bgColor: "bg-red",
    },
  ],
};

export const comparisonRowsData = [
  {
    title: `QkrHR vs Keka HR:<br/><span class="text-gradient text-underline">Full Feature Comparison</span>`,
    description: `Stop guessing. See the clear difference in speed, savings and satisfaction.`,
    QkrhrLogo: QkrhrLogo,
    Alt1:"QkrHR Logo",
    KekaLogo: KeakLogo,
    Alt2:"Keka Logo",
    comparisonRows:[
      {
        feature: "Payroll Automation",
        qkr: "3-stage locked cycle: attendance lock → finalization → payroll lock. Expenses, OT, and claims flow in automatically.",
        comare: "Automates salary and TDS. No formal locking workflow."
      },
      {
        feature: "Statutory Compliance",
        qkr: "PF, ESI, PT, and TDS embedded inside a locked payroll cycle.",
        comare: "Compliance handled; less integrated into a locked structure."
      },
      {
        feature: "Field Force Management",
        qkr: "Fully integrated — live tracking, field tasks, geo-attendance, and field expenses linked to payroll.",
        comare: "Geo-tagged attendance only. No field task or operations tools."
      },
      {
        feature: "Multi-Entity & Multi-Shift",
        qkr: "Multiple legal entities, pay groups, and shift types managed from one platform.",
        comare: "Multi-location support; entity-level management is more limited."
      },
      {
        feature: "Expense Management",
        qkr: "Integrated directly into payroll with no separate module or reconciliation.",
        comare: "Available but managed separately from the payroll workflow."
      },
      {
        feature: "Workflow Configuration",
        qkr: "Unlimited workflow and approval configurations with a dedicated pending task inbox.",
        comare: "Workflow automation with standard configuration options."
      },
      {
        feature: "Attendance & Leave",
        qkr: "Attendance locking, real-time visibility, and advanced shift management.",
        comare: "Robust attendance and leave management."
      },
      {
        feature: "Employee Self-Service",
        qkr: "Full ESS — payslips, leave requests, approvals, company policies, and expense claims in one portal.",
        comare: "Strong ESS portal with comprehensive employee-facing tools."
      },
      {
        feature: "Mobile App",
        qkr: "Complete HRMS on mobile including payroll, attendance, field force, ESS, and approvals.",
        comare: "Feature-rich mobile app covering attendance, leave, payslips, and approvals."
      },
      {
        feature: "Data View Flexibility",
        qkr: "Multiple viewing options including table, card, kanban, hierarchy, dashboard, and pivot views.",
        comare: "Standard dashboards and report views."
      },
      {
        feature: "Analytics & Reporting",
        qkr: "Real-time dashboards across HR, payroll, attendance, and field operations with six reporting views.",
        comare: "Strong analytics with predictive workforce insights and reporting."
      },
      {
        feature: "Performance Management",
        qkr: "Performance management available within the platform alongside core HR and payroll.",
        comare: "Advanced performance suite with OKRs, 360° feedback, and goal tracking."
      },
      {
        feature: "Implementation Speed",
        qkr: "Employees go live within 7 days and complete implementation is finished within 15 days.",
        comare: "Implementation timeline varies based on company size, requirements, and complexity."
      },
      {
        feature: "Customer Support",
        qkr: "Dedicated WhatsApp group, named point of contact, and in-app guidance for every client.",
        comare: "Ticket-based support system with escalation workflows."
      },
      {
        feature: "UI & Navigation",
        qkr: "Navigation-free workflows, role-based menus, and smart approval pages for faster adoption.",
        comare: "Modern consumer-grade interface with polished visual design."
      }
    ]
  }
];

export const KekaOrqkrhrData = [
  {
    badge: "Pricing Comparison",
    title: `Keka or QkrHR <br/> <span class="text-gradient text-underline">Who Saves You More?</span>`,
    description: `QkrHR is 40% more affordable than keka with all key features included.`,
    pricingCards: [
      {
        title: "QkrHR Pricing",
        headerClass: "bg-magenta",
        theme: "theme-magenta",
        price: "₹80 <span class=\"text-muted fn-2\">per employee/month </span><span class=\"text-gradient fn-2\">+annual payment discount</span>",
        note: "No Add-ons. No Hidden Costs.",
        btnClass: "btn-magenta",
        buttonText: "Start Saving with QkrHR",
        features: [
          { label: "Core HR (Employee Data, Documents, Policies)", included: true },
          { label: "Attendance & Leave Management", included: true },
          { label: "Payroll & Compliance Automation", included: true },
          { label: "ESS Portal (Payslips, Leave, Shifts, Documents)", included: true },
          { label: "Shift & Roster Scheduling", included: true },
          { label: "Multiple Legal Entities (Pay Groups)", included: true },
          { label: "Mobile App Integration", included: true },
          { label: "GPS Attendance, Selfie Punch-in, Geo-fencing", included: true }
        ]
      },
      {
        title: "Keka Pricing",
        headerClass: "bg-purple",
        theme: "theme-purple",
        price: "₹130 <span class=\"text-muted fn-2\">per employee/month </span><span class=\"text-danger-dark fn-2\">+add-ons</span>",
        note: "Pricing may increase with additional modules",
        btnClass: "btn-violet",
        buttonText: "Why Pay More? Compare Instead",
        features: [
          { label: "Core HR (Employee Data, Documents, Policies)", included: true },
          { label: "Attendance & Leave Management", included: true },
          { label: "Payroll & Compliance Automation", included: true },
          { label: "ESS Portal (Payslips, Leave, Shifts, Documents)", included: true },
          { label: "Shift & Roster Scheduling", included: false, badge: "(+add-ons)" },
          { label: "Multiple Legal Entities/Pay Groups", included: false, badge: "(+add-ons)" },
          { label: "Mobile App Integration", included: true },
          { label: "Selfie Punch-in, Geo-fencing", included: true }
        ]
      }
    ]
  }
];
export const PayrollComplianceData = {
  title: `Payroll & Compliance: <br/><span class="text-gradient text-underline">Where the Real Difference Shows</span>`,
  description: `Payroll is where errors are most costly. A single wrong number means reprocessing, employee complaints, and compliance exposure. This is where QkrHR's structure matters most.`,
  vs:VsImg,
  qkrCard: {
    title: "QkrHR's 3 Step Payroll",
    steps: [
      {
        num: "1",
        title: "Attendance Locking",
        description: "HR locks attendance data before payroll begins. No further changes are possible — eliminating last-minute edits that corrupt salary calculations"
      },
      {
        num: "2",
        title: "Payroll Finalization",
        description: "Salaries are computed. Expenses, reimbursements, incentives, deductions, and claims flow in automatically — no manual reconciliation. PF, ESI, PT, TDS calculated on verified, locked data."
      },
      {
        num: "3",
        title: "Payroll Locking",
        description: "HR locks attendance data before payroll begins. No further changes are possible — eliminating last-minute edits that corrupt salary calculations"
      }
    ]
  },
  kekaCard: {
    title: "Keka HR Payroll",
    description: "Keka automates salary processing well — but without a formal locking protocol, data can change mid-cycle. QkrHR's stage-gated structure means compliance always runs on verified data. That's the difference between payroll that's probably right and payroll you can prove is right."
  }
};

export const UserExperienceData = {
  title: `User Experience: <span class="text-gradient text-underline">Both Are Easy.</span><br/><span class="text-gradient text-underline">QkrHR Adds Operational Depth.</span>`,
  description: `Keka HR has a well-earned reputation for clean design. QkrHR is built for what happens after day one — fewer clicks to complete daily tasks, more visibility, and data in the format your team actually thinks in.`,
  leftCard: {
    bgClass:"",
    title: "How QkrHR's Interface Works",
    items: [
      {
        title: "Navigation-free, role-aware, and built for speed",
        description: "Users reach what they need from anywhere in the app — no menu drilling, no section switching, no wasted clicks."
      },
      {
        title: "Role-Aware Menus",
        description: "Menus and data automatically adjust by role and permission — every user sees only what's relevant to their job."
      },
      {
        title: "Smart Approval Pages",
        description: "Every approval surfaces all relevant context on one screen — approvers decide without chasing additional information."
      },
      {
        title: "Dedicated Pending Task Inbox",
        description: "A single inbox tracks every pending approval and daily action — nothing falls through the cracks."
      },
      {
        title: "6 Ways to View Data",
        description: "Table, card, kanban, hierarchy, dashboard, and pivot — different roles, different thinking styles, same data."
      },
      {
        title: "Real-Time Alerts & Escalations",
        description: "Intelligent notifications keep every process on track without manual follow-up or status-chasing."
      }
    ]
  },
  rightCard: {
    bgClass:"",
    title: "Keka's User Interface",
    leadIn: "Keka's UI",
    description: "works well for its primary audience employees doing self-service tasks on a clean, well-designed dashboard. Where it begins to strain is with the people who live in the system all day: HR administrators running complex approval chains, managers needing full mobile access, and teams that need the software to match their workflows rather than the reverse.",
    items: []
  }
};

export const FieldForceExpenseData = {
  title: `Field Force, Expense & Task Management : <span class="text-gradient text-underline">QkrHR's Clearest Advantage Over Keka HR</span>`,
  description: `If your business has sales reps, service engineers, delivery staff, or any on-ground workforce — this matters more than any other section on this page.`,
  qkrSection: {
    title: "Complete Field Workforce, Expenses & Task Management — Built In",
    subtitle: `Not an add-on. Part of the core <span class="text-gradient">QkrHR platform.</span>`,
    features: [
      {
        title: "Real-Time Location Tracking",
        description: "Not an add-on. Part of the core QkrHR platform."
      },
      {
        title: "Field Task Management",
        description: "Assign tasks to field staff, track completion in real time, get updates without calls or manual check-ins."
      },
      {
        title: "Geo-Tagged Attendance",
        description: "Field staff mark attendance with verified location stamps — no buddy punching, no location spoofing."
      },
      {
        title: "Field Expenses <span class=\"arrow\">&rarr;</span> Payroll Direct",
        description: "Field staff mark attendance with verified location stamps — no buddy punching, no location spoofing."
      }
    ]
  },
  kekaSection: {
    title: "Keka HR",
    description: "Keka HR offers geo-tagged attendance through its mobile app. QkrHR gives you a complete field operations system — live tracking, task management, geo-attendance, and expenses integrated into payroll. For any business with on-ground staff, this isn't a minor difference."
  }
};

export const ImplementationSupportData = {
  title: `<span class="text-gradient text-underline">Live in 7 Days.</span><br/>A Real Person to Call. Every Client.`,
  description: `The best HRMS is the one your team is actually using — not still being configured three months after purchase.`,
  cardTitle: "Implementation & Support",
  cardDesc:"",
  qkrCard: {
    logo: QkrhrLogo,
    logoAlt: "QkrHR",
    items: [
      {
        title: "Employees Live in 7 Days",
        description: "Login credentials issued, attendance active, ESS accessible your team is using QkrHR within one week of sign-up."
      },
      {
        title: "Full Setup in 15 Days",
        description: "Data migration, policy configuration, workflow setup, approval chains — complete in two weeks, not two months."
      },
      {
        title: "Dedicated WhatsApp Group + Named POC",
        description: "Every client gets a dedicated WhatsApp group with a named contact — not a ticket number. Issues resolved in real time."
      },
      {
        title: "In-App Feature Guides",
        description: "Step-by-step usage instructions built into the application — employees and HR teams learn features without waiting for external training."
      }
    ]
  },
  kekaCard: {
    cardBg:"bg-purple-violet",
    logoText: KeakLogo,
    logoTextAlt: "Keka HR",
    logoTitle:"",
    description: "Keka uses ticket-based support — standard for SaaS, fine for non-urgent queries. But payroll doesn't run on a ticket timeline. When something is wrong the day before salaries process, QkrHR clients have a named person on WhatsApp who picks it up immediately. That's a partner, not a helpdesk."
  }
};

export const WhoShouldChooseData = {
  title: `<span class="text-gradient">Who Should Choose QkrHR &</span><br/>When Keka HR Makes Sense`,
  description: `An honest breakdown. Different businesses have different priorities.`,
  qkrCard: {
    brandClass: "qkrh-bg",
    title: "Choose QkrHR if you need",
    items: [
      "Structured payroll with attendance locking and payroll locking",
      "End-to-end statutory compliance built into the cycle",
      "Field force management — tracking, tasks, geo-attendance, expenses",
      "Multiple legal entities, pay groups, or shift configurations",
      "Go-live in 7 days, full setup in 15",
      "A named support contact, not a ticket queue",
      "Unlimited workflow and approval configurations",
      "Expenses integrated directly into payroll",
      "Complete HRMS accessible on mobile — all modules",
      "Hire-to-retire coverage in one connected platform"
    ]
  },
  kekaCard: {
    brandClass: "compare-bg",
    title: "Consider Keka HR if",
    items: [
      "QKR-based performance management is your top priority",
      "You need a built-in Learning Management System",
      "Visual interface aesthetics matter most to stakeholders",
      "Predictive workforce analytics is a primary requirement"
    ]
  },
  shortNote: {
    title: "In short",
    description: "Payroll accuracy, compliance control, and field workforce visibility matter to day-to-day operations for most Indian businesses. OKRs and an LMS are useful — but they're not what keeps HR teams up at night. QkrHR solves the problems that do."
  }
};

export const WhatYouGetData = {
  title: `<span class="text-gradient text-underline">What You Get With QkrHR</span><br/>that Keka HR Doesn't Include`,
  description: `These aren't add-ons or premium upgrades. They're part of every QkrHR plan.`,
  items: [
    "Attendance & Payroll Locking for error-free cycles",
    "Integrated Field Force & Geo-Tracking",
    "Multiple Legal Entities in one platform",
    "Unlimited Workflow & Approval Configurations",
    "Dedicated WhatsApp POC - not a helpdesk",
    "Expenses integrated directly into payroll",
    "6 data view types including pivot & kanban",
    "Full HRMS on mobile - every module",
    "Multiple Shift Types & Pay Groups"
  ]
};
export const researchTransparencyData = {
  title: `<span class="text-gradient text-underline">Research transparency:</span>`,
  description: `Every Keka weakness on this page is sourced from verified reviews on <span class="fn-sb">Gartner Peer Insights, Capterra (January 2026), Techjockey (May 2025), HRSuggest pricing research (March 2026)</span>, and Research.com. Exact user quotes are used where available. QkrHR's capabilities are documented from the platform itself.`
};
export const QkrhrVsKekaFaqData = [
  {
      id: 1,
      Title: "What is the best alternative to Keka HR in India?",
      Content: "QkrHR is the strongest alternative to Keka HR for Indian businesses. It matches Keka on ease of use while going deeper on payroll control, statutory compliance, field force management, and multi-entity HR. Employees go live within 7 days and every client gets a dedicated WhatsApp support contact — not a generic helpdesk."
    },
    {
      id: 2,
      Title: "How is QkrHR different from Keka HR payroll software?",
      Content: "Both automate payroll, but QkrHR adds a structured three-stage locking workflow. Attendance locking freezes data before payroll begins. Payroll finalization locks computed salaries for review. Payroll locking seals the output before bank transfer. Compliance always runs on verified, finalized data — eliminating the most common source of payroll errors."
    },
    {
      id: 3,
      Title: "Why do businesses switch from Keka HR to QkrHR?",
      Content: "The most common reasons are tighter payroll controls with structured locking, integrated field force management for on-ground teams, faster implementation with dedicated WhatsApp support, and multi-entity or multi-shift payroll that's more configurable. QkrHR covers all of these without separate add-ons."
    },
    {
      id: 4,
      Title: "Does QkrHR have better compliance than Keka HR?",
      Content: "Yes. QkrHR embeds PF, ESI, PT, and TDS compliance inside a locked payroll cycle. The attendance-locking step ensures compliance calculations never run on unverified data — the most common source of statutory filing errors. Keka processes compliance but without the same formal pre-run validation structure."
    },
    {
      id: 5,
      Title : "Does QkrHR support field force management that Keka HR lacks?",
      Content: "Yes. QkrHR includes fully integrated field force automation as core functionality: real-time location tracking, geo-tagged attendance, task management for field staff, and field expense claims that flow directly into payroll. Keka HR offers geo-tagged attendance only and does not include field task management or operations tools."
    },
    {
      id: 6,
      Title: "How quickly can QkrHR be implemented compared to Keka HR?",
      Content: "QkrHR commits to employees going live within 7 days, with complete implementation—including data migration, policy configuration, and workflow setup—completed within 15 days. Every client receives a dedicated WhatsApp group and a named point of contact for real-time support during and after go-live."
    },
    {
      id: 7,
      Title: "Can I migrate from Keka HR to QkrHR without disrupting operations?",
      Content: "Yes. QkrHR's implementation team manages migration from existing HR and payroll systems, including employee records, salary structures, attendance history, and policy configurations as part of the 15-day setup. The migration process runs alongside existing operations to ensure business continuity."
    },
    {
      id: 8,
      Title: "Is QkrHR suitable for small businesses looking for a Keka HR alternative?",
      Content: "Yes. QkrHR is designed for businesses of all sizes—from small companies setting up HR processes for the first time to growing organizations managing complex payroll and distributed workforces. The 7-day go-live commitment is especially valuable for businesses that need a quick and hassle-free transition."
    }
]