import QkrhrVsGrethr from "@/assets/images/hrms/comparisonHr/qkrhr-vs-grethr-header.webp";
import QkrhrLogo from "@/assets/images/hrms/comparisonHr/qkrhr-logo.png";
import GrethrLogo from "@/assets/images/hrms/comparisonHr/gret-hr.png";
import VsImg from "@/assets/images/hrms/comparisonHr/greythr-vs.png";

export const ComparisonHeroData = [
  {
    badge: "HRMS Comparison",
    title: `greytHR Gets the Basics Right.<br /> QkrHR Gets the Rest Right Too.`,
    description: "greytHR has earned its place in India's HR software market — 25 years, solid compliance, reliable payroll. But if you've hit the wall on UI rigidity, zero customisation depth, basic mobile, month-end lag, or support that disappears when it matters — QkrHR is where businesses go next.",
    image: QkrhrVsGrethr,
    primaryBtnText: "Book a Demo",
    primaryBtnLink: "/signup",
    secondaryBtnText: "See How It Works",
    secondaryBtnLink: "#comparison",
    videoIdCode: "bf3U8zW1dxc"
  }
];

export const alternativeSectionData = {
  title: "The greytHR Alternative Indian Businesses Actually Switch To",
  subtitle: "In Short Answer",
  description: "greytHR is a well-established HRMS with genuinely strong payroll compliance, 150+ MIS reports, and solid statutory automation — these are real strengths. But its documented weaknesses — rigid UI, heavily restricted deep customisation, a basic mobile app, month-end performance lag, and no dedicated support contact — are structural, not cosmetic.",
  highlightText: "QkrHR matches every greytHR strength and fixes every one of those gaps. That's why businesses switch",
};

export const comparisonRowsData = [
  {
    title: `greytHR or QkrHR <br/><span class="text-gradient text-underline">Who Saves You More?</span>`,
    description: `QkrHR is 40% more affordable than greytHR with all key features included.`,
    QkrhrLogo: QkrhrLogo,
    Alt1:"QkrHR Logo",
    KekaLogo: GrethrLogo,
    Alt2:"GreytHR Logo",
    comparisonRows:[
      {
        feature: "Statutory Compliance",
        qkr: "PF, ESI, PT, TDS automated inside a locked, auditable payroll cycle.",
        comare: "Genuinely strong — auto-updates for federal and state changes, audit-ready returns. A proven strength."
      },
      {
        feature: "Payroll Structure",
        qkr: "3-stage locked cycle: attendance lock → finalization → payroll lock. Errors structurally prevented.",
        comare: "Robust engine. No formal locking protocol — payroll accuracy depends on clean master data at run time."
      },
      {
        feature: "Month-End Performance",
        qkr: "Consistent performance — no reported lag during peak payroll processing.",
        comare: "Notable system lag during high-traffic month-end periods — documented across multiple independent reviews."
      },
      {
        feature: "UI & Navigation",
        qkr: "Navigation-free, role-aware, modern. Designed for speed.",
        comare: "Documented as dated and non-intuitive. Basic tasks take unnecessary clicks. New user adoption is slower."
      },
      {
        feature: "Mobile App",
        qkr: "Full HRMS on mobile — every module with no feature gap vs desktop.",
        comare: "Basic mobile experience. Manager tasks require admin intervention. Lacks desktop portal depth."
      },
      {
        feature: "Deep Customisation",
        qkr: "Unlimited workflow configs, custom approval chains, 6 data view types — no vendor required.",
        comare: "Heavily restricted. Unique dashboards, complex rules, and niche metrics require vendor assistance."
      },
      {
        feature: "Field Force Management",
        qkr: "Fully integrated — live tracking, field tasks, geo-attendance, field expenses → payroll.",
        comare: "GeoMark+ for geo-fenced attendance only. No dedicated field task management or operations tools."
      },
      {
        feature: "Expense Management",
        qkr: "Integrated directly into payroll — no separate module, no manual reconciliation.",
        comare: "Available; handled separately from the payroll flow."
      },
      {
        feature: "Multi-Entity Support",
        qkr: "Multiple legal entities, pay groups, shift types — all in one platform.",
        comare: "Limited multi-entity configuration. More complex structures require workarounds."
      },
      {
        feature: "Workflow Configuration",
        qkr: "Unlimited workflow and approval configurations — self-serve, no vendor dependency.",
        comare: "Standard templates only. Custom workflows require vendor assistance."
      },
      {
        feature: "Customer Support",
        qkr: "Dedicated WhatsApp group + named POC per client. Real-time resolution.",
        comare: "Shared email desk with rotating agents. No SPOC. Tickets reported taking months to resolve."
      },
      {
        feature: "Platform Update Transparency",
        qkr: "Proactive client communication before changes are pushed",
        comare: "Updates pushed without client notification. Reported as a consistent operational disruption."
      },
      {
        feature: "Implementation Speed",
        qkr: "Employees live in 7 days · Full setup in 15 days.",
        comare: "No published implementation timeline commitment."
      },
      {
        feature: "Reporting",
        qkr: "Real-time dashboards across all modules; 6 flexible view types including pivot and kanban.",
        comare: "150+ pre-built MIS reports — a genuine strength for standard reporting needs."
      },
      {
        feature: "Market Experience",
        qkr: "Modern platform purpose-built for today's Indian businesses.",
        comare: "25+ years, 27,000+ organisations — deep India market knowledge."
      }
    ]
  }
];

export const KekaOrqkrhrData = [
  {
    badge: "Pricing Comparison",
    title: `greytHR or QkrHR <br/> <span class="text-gradient text-underline">Who Saves You More?</span>`,
    description: `QkrHR is 40% more affordable than greytHR with all key features included.`,
    pricingCards: [
      {
        title: "QkrHR Pricing",
        headerClass: "bg-magenta",
        theme: "theme-magenta",
        price: "₹80 <span class=\"text-muted fn-2\">per employee/month</span> <span class=\"text-gradient fn-2\">+annual payment discount</span>",
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
        title: "greytHR Pricing",
        headerClass: "electric-purple",
        theme: "theme-electric-purple",
        price: "₹110 <span class=\"text-muted fn-2\">per employee/month</span> <span class=\"text-danger-dark fn-2\">+add-ons</span>",
        note: "Pricing may increase with additional modules",
        btnClass: "btn-electric-purple",
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
  description: `Both platforms produce compliant payroll. The question is whether you can prove it's right — or whether you find out it's wrong after the bank transfer has gone.`,
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
    title: "greytHR Payroll",
    description: `Gartner Peer Insights reviewers note that greytHR payroll is "dependent on correct master data — small errors in attendance or leave can create payroll issues." This isn't a bug. It's a structural consequence of running payroll on unvalidated, unlocked data. QkrHR's locking stages make this class of error structurally impossible — and also eliminate the month-end system lag greytHR experiences during high-volume processing.`
  }
};

export const QkrHRSupportData = {
  title: `The Interface Your Team Uses <br/><span class="text-gradient text-underline">Every Single Day</span>`,
  description: `A dated, rigid UI isn't just an aesthetic problem. It's slower onboarding, more support calls, and HR teams spending time navigating instead of working. greytHR's UI is its most consistently reported weakness — and QkrHR's is built differently by design.`,
  vs:VsImg,
  leftCard: {
    cardClass:"",
    bgClass:"",
    title: "How QkrHR's Interface Works",
    items: [
      {
        title: "Navigation-free access from any screen",
        description: ""
      },
      {
        title: "Role-aware, personalised menus",
        description: ""
      },
      {
        title: "Full functionality on mobile — no gaps",
        description: ""
      },
      {
        title: "Smart one-screen approval pages",
        description: ""
      },
      {
        title: "6 data view types including pivot & kanban",
        description: ""
      },
    ]
  },
  rightCard: {
    cardClass:"",
    bgClass:"",
    title: "greytHR Interface",
    leadIn: "",
    description: "",
     items: [
      {
        title: "Dated, non-intuitive UI — multiple clicks for basics",
        description: ""
      },
      {
        title: "Cluttered layout frustrates new users",
        description: ""
      },
      {
        title: "Mobile lacks desktop portal depth",
        description: ""
      },
      {
        title: "Admin intervention needed for manager tasks on mobile",
        description: ""
      },
      {
        title: "Silent updates change behaviour without warning",
        description: ""
      },
    ]
  }
};

export const ImplementationSupportData = {
  title: `Your Business Has Unique Processes. <br/><span class="text-gradient text-underline">Your HRMS Should Too.</span>`,
  description: `greytHR covers most standard HR processes well out of the box. The problem starts when your processes aren't standard — which, for most growing businesses, they aren't.`,
  cardTitle: "QkrHR: Unlimited Configuration — No Vendor Dependency",
  cardDesc:"Build your workflows, approval chains, and data views — yourself, without raising a ticket",
  qkrCard: {
    logo: QkrhrLogo,
    logoAlt: "QkrHR",
    items: [
      {
        title: "Unlimited Workflow Configurations",
        description: "Build any approval chain, escalation path, or HR workflow your organisation needs — no vendor call, no customisation fee, no waiting."
      },
      {
        title: "6 Dashboard & Data View Types",
        description: "The unique dashboards that greytHR makes difficult? Table, card, kanban, hierarchy, pivot, and standard dashboard views — all available and configurable in QkrHR."
      },
      {
        title: "Multiple Entities, Pay Groups & Shifts",
        description: "Manage separate companies, divisions, or business units — each with distinct payroll, compliance, and policy — in a single platform without workarounds."
      },
      {
        title: "Flexible HR Policy Configuration",
        description: "Whether your organisation runs a tightly controlled environment or flexible policies, QkrHR adapts to your structure — not the other way around."
      },
      {
        title: "Dedicated Pending Task Inbox",
        description: "All pending approvals and daily actions in one place — nothing forgotten, nothing chased, no approval bottlenecks."
      }
     
    ]
  },
  kekaCard: {
    cardBg:"bg-purple-electric",
    logoText: GrethrLogo,
    logoTextAlt: "greytHR",
    logoTitle:"The greytHR customisation ceiling — in their users' own words",
    description: `HR.Software's independent assessment states that greytHR customisation "beyond built templates is difficult without vendor assistance" and that "tailoring unique dashboards, complex approval rules, or niche data metrics is heavily restricted." For a growing business, that means paying for every adjustment to your own processes — or living with the limitation.`
  }
};

export const FieldForceExpenseData = {
  title: `Field, Task & Expense Management: <span class="text-gradient text-underline">QkrHR Covers It.</span> <span class="text-muted">greytHR Doesn't.</span> `,
  description: `greytHR's GeoMark+ handles geo-fenced attendance for multi-location employees — that's useful. But if you have on-ground staff that need task management, real-time visibility, and integrated expense flows, you need more than attendance tracking.`,
  qkrSection: {
    title: "QkrHR Field Force — Built Into the Core Platform",
    subtitle: `Not an add-on. Complete field operations management standard.`,
    features: [
      {
        title: "Real-Time Location Tracking",
        description: "Live visibility of your entire field team. Know who's where, what they're doing, and when they arrive — without a separate GPS tool."
      },
      {
        title: "Geo-Tagged Attendance",
        description: "Field staff check in with GPS-verified location stamps and selfie verification. Covers everything greytHR's GeoMark+ does — and adds task context alongside it."
      },
      {
        title: "Field Task Management",
        description: "Assign tasks to field staff, track completion in real time, get updates without calls or manual check-ins. greytHR has no equivalent."
      },
      {
        title: "Field Expenses → Payroll Direct",
        description: "Field expense claims submitted on mobile flow directly into the payroll cycle. Reimbursements settled with salary — no separate tracking, no month-end spreadsheets."
      }
    ]
  },
  kekaSection: {
    title: "",
    description: ""
  }
};

export const GreytHRSupportData = {
  title: `<span class="text-gradient">QkrHR Support</span> vs greytHR Support`,
  description: `For routine queries, greytHR's support is adequate. For complex payroll issues at month-end when you need an answer in hours — the shared email desk with rotating agents isn't built for that.`,
  vs: VsImg,
  leftCard: {
    cardClass:"",
    bgClass:"",
    title: "QkrHR Support",
    items: [
      {
        title: "Dedicated WhatsApp group for every client",
        description: ""
      },
      {
        title: "Named POC who knows your account and config",
        description: ""
      },
      {
        title: "Real-time response — not a queue",
        description: ""
      },
      {
        title: "In-app feature guides reduce support dependency",
        description: ""
      },
      {
        title: "Active from Day 1 of implementation",
        description: ""
      },
    ]
  },
  rightCard: {
    cardClass:"",
    bgClass:"",
    title: "greytHR Support",
    leadIn: "",
    description: "",
     items: [
      {
        title: "Shared email desk — different agent every time",
        description: ""
      },
      {
        title: "No single point of contact (SPOC)",
        description: ""
      },
      {
        title: "Complex tickets reported taking 4–6 month",
        description: ""
      },
      {
        title: "Payroll support agents unfamiliar with payroll rules",
        description: ""
      },
      {
        title: "Updates pushed without client notification",
        description: ""
      },
    ]
  }
};

export const WhatYouGetData = {
  title: `<span class="text-gradient text-underline">What You Get With QkrHR</span><br/>that greytHR Doesn't Provide`,
  description: `None of these are add-ons or premium tier features. They're standard in QkrHR..`,
  items: [
    "3-Stage Payroll Locking — errors prevented structurally",
    "Integrated Field Force Management & Task Tracking",
    "Dedicated WhatsApp POC — not a shared email desk",
    "Unlimited Workflow & Approval Configuration",
    "Multiple Legal Entities & Pay Groups",
    "Field Expenses integrated directly into payroll",
    "6 data view types including pivot & kanban",
    "Full HRMS on mobile — every module, no gaps",
    "Proactive update communication — no surprise changes"
  ]
};

export const MovingGreythrData = {
  title: `<span class="text-gradient text-underline">Moving from greytHR to QkrHR —</span> Here's Exactly What It Looks Like `,
  description: `The fear of migration is what keeps most businesses on a platform past its usefulness. QkrHR's implementation is built to remove that fear with specific, committed timelines.`,
  qkrSection: {
    title: "The 15-Day Migration Process",
    subtitle: `Your team won't re-enter data manually or run parallel systems for months. QkrHR's implementation team handles the full migration — employee records, salary structures, attendance history, leave balances, policy configurations — as standard.`,
    features: [
      {
        title: "<span class='text-black d-block mb-2'>Day 1-3</span><span>Migration Planning</span>",
        description: "Employee records, salary structures, leave data mapped and validated"
      },
      {
        title: "<span class='text-black d-block mb-2'>Day 7</span><span>Employees Go Live</span>",
        description: "Login credentials active. Attendance, leave, ESS — live and usable"
      },
      {
        title: "<span class='text-black d-block mb-2'>Day 10-12</span><span>Policy & Workflow Setup</span>",
        description: "Approval chains, shifts, HR policies configured to your exact structure"
      },
      {
        title: "<span class='text-black d-block mb-2'>Day 15</span><span>Full Go-Live</span>",
        description: "Complete platform live. First payroll cycle ready to run on QkrHR."
      },
      {
        title: "<span class='text-black'>Your dedicated</span> POC is active from Day 1 <span class='text-black'>of migration</span>",
        description: "Migration questions get answered in real time via WhatsApp — not in a ticket queue. This is the support experience that continues for the life of your account."
      }
      
    ]
  },
  kekaSection: {
    title: "",
    description: ""
  }
};


export const WhoShouldChooseData = {
  title: `<span class="text-gradient">Who Should Choose QkrHR & </span><br/>When greytHR Makes Sense`,
  description: `An honest breakdown. Different businesses have different priorities.`,
  qkrCard: {
    brandClass: "qkrh-bg",
    title: "Choose QkrHR if you need",
    items: [
      "Structured payroll with attendance locking and payroll locking",
      "A dedicated support contact — not a rotating shared desk",
      "Deep, self-serve workflow and approval customisation",
      "Field force management — tracking, tasks, geo-attendance, expenses",
      "A mobile app that works fully for managers without admin help",
      "Consistent performance — even at month-end peak volume",
      "Multiple legal entities, pay groups, or shift types",
      "Proactive communication on platform changes",
      "Employees live in 7 days, full setup in 15",
      "6 flexible data view types for different reporting needs"
    ]
  },
  kekaCard: {
    brandClass: "greythr",
    title: "greytHR may still work if",
    items: [
      "Your HR needs fit greytHR's standard templates exactly",
      "You primarily need 150+ pre-built MIS reports",
      "You have no field workforce needing operational tracking",
      "You're a small team with basic, stable payrol",
      "The 25-year market presence provides reassurance you need"
    ]
  },
  shortNote: {
    title: "In short",
    description: "greytHR built its reputation on payroll reliability and compliance in an era when few credible alternatives existed for Indian SMBs. For straightforward, stable HR needs, it still works. But if your business has grown beyond straightforward — field teams, complex approvals, multi-entity structures, or genuine frustration with the UI and support — QkrHR is the natural next step."
  }
};

export const researchTransparencyData = {
  title: `<span class="text-gradient text-underline">Research transparency:</span>`,
  description: `The greytHR strengths and weaknesses on this page are sourced from <span class="fn-sb"> G2, Gartner Peer Insights, Capterra, and SoftwareAdvice verified user reviews</span>— not our marketing department. We've analysed what greytHR users praise and what they report as pain points, so this comparison reflects reality, not spin.`
};
export const QkrhrVsgretHrFaqData = [
  {
    "id": 1,
    "Title": "What is the best alternative to greytHR in India?",
    "Content": "QkrHR is the strongest alternative to greytHR for Indian businesses. It preserves greytHR's core strength — statutory compliance — while directly fixing its documented weaknesses: rigid UI, limited deep customisation, basic mobile experience, month-end performance lag, and no dedicated support contact. QkrHR adds structured payroll locking, unlimited workflow configuration, integrated field force management, and a named WhatsApp POC for every client. Employees go live in 7 days."
  },
  {
    "id": 2,
    "Title": "Why do businesses switch from greytHR to QkrHR?",
    "Content": "The five most common reasons: the UI feels dated and navigation takes unnecessary clicks; deep workflow and dashboard customisation is heavily restricted and requires vendor help; the mobile app is too basic for managers; month-end payroll processing causes system slowdowns exactly when performance matters most; and there is no dedicated support contact — queries go to a rotating shared desk with no single point of contact."
  },
  {
    "id": 3,
    "Title": "Does QkrHR have better payroll than greytHR?",
    "Content": "QkrHR matches greytHR on compliance automation — PF, ESI, TDS, PT all handled — and adds a structural advantage greytHR lacks: a three-stage locked payroll cycle. Attendance locking seals data before processing begins, payroll finalization locks computed salaries for review, and payroll locking seals the final output. This eliminates mid-cycle data errors and removes the performance lag greytHR experiences during high-volume month-end processing."
  },
  {
    "id": 4,
    "Title": "Is QkrHR's mobile app better than greytHR's?",
    "Content": "Yes. greytHR's mobile app is independently documented as lacking the depth of the desktop portal, requiring admin intervention for tasks managers should be able to complete themselves. QkrHR's mobile app covers the full HRMS — every module including payroll access, approvals, field tracking, ESS, expenses, and HR workflows — with no feature gap between mobile and desktop."
  },
  {
    "id": 5,
    "Title": "Can QkrHR be customised more deeply than greytHR?",
    "Content": "Yes. greytHR's deep customisation is heavily restricted — unique dashboards, complex approval rules, and niche data metrics require vendor assistance or simply cannot be done. QkrHR offers unlimited workflow and approval configuration, 6 flexible data view types, and highly flexible HR policy configuration — all managed by the client independently, without raising a support request."
  },
  {
    "id": 6,
    "Title": "Does QkrHR support field force management that greytHR lacks?",
    "Content": "Yes. QkrHR includes real-time location tracking, geo-tagged attendance, field task management, and field expense claims integrated directly into payroll — all as core platform features. greytHR offers GeoMark+ for geo-fenced attendance at multi-location sites, but does not offer dedicated field task management, real-time field team visibility, or integrated field operations tools."
  },
  {
    "id": 7,
    "Title": "Does greytHR have a dedicated support contact?",
    "Content": "No. greytHR routes all support through a shared email desk where a different agent handles each query — with no history of your account or configuration. Multiple verified reviews report resolution times of 4–6 months for complex payroll issues, with agents who don't understand the payroll rules involved. QkrHR gives every client a dedicated WhatsApp group with a named POC who knows your account from day one of implementation."
  },
  {
    "id": 8,
    "Title": "How quickly can I migrate from greytHR to QkrHR?",
    "Content": "QkrHR's implementation team handles the full migration from greytHR — employee records, salary structures, attendance history, leave balances, and policy configurations — as part of the standard 15-day onboarding. Employees receive login access within 7 days. Your dedicated WhatsApp POC handles migration questions in real time throughout the process, so there's no waiting in a support queue during your most critical transition period."
  }
]
