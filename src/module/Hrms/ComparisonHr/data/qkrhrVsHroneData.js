import QkrhrVshrone from "@/assets/images/hrms/comparisonHr/qkrhr-vs-hrone-header.webp";
import QkrhrLogo from "@/assets/images/hrms/comparisonHr/qkrhr-logo.png";
import HroneLogo from "@/assets/images/hrms/comparisonHr/hrone.png";

import Capterra from "@/assets/images/hrms/hrmsPrice/capterra.svg";
import G2 from "@/assets/images/hrms/hrmsPrice/G2.svg";
import Techjockey from "@/assets/images/hrms/comparisonHr/techjockey.png";
import VsImg from "@/assets/images/hrms/comparisonHr/hrone-vs.png";

export const ComparisonHeroData = [
  {
    badge: "HRMS Comparison",
    title: `HROne Automates HR the Way It Thinks It Should Work. <br /> QkrHR Works the Way You Do.`,
    description: "HROne comes with 127 pre-built HR workflows — and for businesses that fit that model, it works well. QkrHR takes a different position: every policy, workflow, approval chain, and attendance rule is configured to how your business actually operates. Not adapted to a template. Not worked around. Built for you — from the first login.",
    image: QkrhrVshrone,
    primaryBtnText: "Book a Demo",
    primaryBtnLink: "/signup",
    secondaryBtnText: "See How It Works",
    secondaryBtnLink: "#comparison",
    videoIdCode: "bf3U8zW1dxc"
  }
];

export const alternativeSectionData = {
  title: "The HROne Alternative Indian Businesses Actually Switch To",
  subtitle: "In Short Answer",
  description: "QkrHR is premium operational HRMS at an honest price — built for Indian businesses that have outgrown rigid, template-driven platforms. Fully configurable HR policies. Built-in field force, task, and expense management. Structured payroll locking. A Social Dashboard that gives every employee a role-aware workspace from day one. These are not add-ons. They are what QkrHR is.",
  highlightText: "",
};
export const HrmsAdaptData = [
  {
    badge: "The Fundamental Question",
    title: `<span class="text-gradient">Does Your HRMS Adapt to Your Business <br/></span> or Do You Adapt to It?`,
    description: `This is the question that separates QkrHR and HROne at a fundamental level. Both are capable HRMS platforms. But they answer this question completely differently.`,
    Cards: [
      {
        title: "QkrHR’s Philosophy",
        theme: "theme-magenta",
        price: "<span>Your business is configured into the software</span>",
        desc:`QkrHR starts with a blank slate and builds your HR system around how your organisation actually works. Your attendance rules. Your shift logic. Your leave structures. Your payroll policies. Your approval hierarchies. Your escalation paths. Your compliance configurations.
Every policy is set by your HR team, for your business — without workarounds, without calling a vendor, and without paying for a tier upgrade to access a configuration option.`,
        note: `A fully policy-configurable system — businesses customise workflows, approvals, attendance rules, leave structures, payroll policies, and processes according to their own work style and operational needs.`,
      },
      {
        title: "HROne's Philosophy",
        theme: "theme-dark-green",
        price: "<span>The software comes with HR pre-configured</span>",
        desc:`HROne is built around 127 pre-built hire-to-retire workflows. For businesses that fit the standard Indian SMB HR model, these work well out of the box. Implementation is faster when you accept the defaults.
Configuration options exist — but the depth of customisation depends on your pricing tier. Custom workflows, performance management, and employee helpdesk are Enterprise-only. The Professional plan still withholds these.`,
        note: `Source: CrazeHQ independent pricing review — "Critical features like performance management, employee helpdesk, and workflows are missing from the Professional plan.`,
      }
    ]
  }
];

export const strengthsData = [
  {
    title: "HROne Genuine Strengths",
    variant: "success",
    items: [
      {
        title: "InboxForHR™ – Smart Task Routing",
        description:
          "Auto-assigns HR tasks to the right person by role. Widely praised across G2 and Capterra as genuinely useful.",
        source: Capterra,
        quote: "The HROne Inbox feature is super amazing",
      },
      {
        title: "Clean, Intuitive Interface",
        description:
          "9.5/10 Ease of Use on G2 from 1,925 reviewers. Low training overhead. Quick first-day adoption.",
        source: G2,
        quote: "G2 2025 verified data",
      },
      {
        title: "127 Pre-Built HR Workflows",
        description:
          "Strong out-of-the-box coverage for standard hire-to-retire operations. Works for businesses with typical HR structures.",
        source: "",
        quote: "HROne product documentation",
      },
      {
        title: "Indian Statutory Compliance on All Tiers",
        description:
          "PF, ESI, TDS, PT included even in the Basic plan — a competitive advantage versus platforms that tier-gate compliance.",
        source: "",
        quote: "CheckThat.ai pricing analysis",
      },
      {
        title: "Strong G2 Support Ratings",
        description:
          "9.6/10 for Quality of Support. 9.5/10 for Ease of Setup.",
        source: G2,
        quote: "G2 2025 – 1,876 reviewers",
      },
    ],
  },
  {
    title: "HROne Documented Weaknesses",
    variant: "danger",
    items: [
      {
        title: "Critical Features Locked by Tier",
        description:"Performance management, employee helpdesk, custom workflows, and engagement portals are Enterprise-only. Not ",
        source:  G2,
        quote: "Critical features like performance management and helpdesk are missing from Professional plan",
      },
      {
        title: "Too Many Features Creates Navigation Friction",
        description:"With 127 processes and 10+ modules, multiple verified users report the interface becomes hard to navigate as complexity grows.",
        source: Capterra,
        quote: "“Sometimes hard to use — too many features, things get complicated”",
      },
      {
        title: "Mobile App Performance Issues",
        description: "Slow loading, login delays, and location accuracy gaps reported across multiple verified review platforms.",
        source: Capterra,
        quote: "“Mobile app works slow — takes a lot of loading time”",
      },
      {
        title: "No Field Force Operations Tools",
        description:"Geo-tagged attendance is available. Dedicated field task management, real-time team visibility, and integrated field expense flows are not.",
        source: "",
        quote: "Feature gap — not present in product documentation",
      },
      {
        title: "Reporting Lacks Depth",
        description: "Core reports available. Custom, merged, or complex compliance reports often require workarounds or manual external manipulation.",
        source: Techjockey,
        quote: "“G2 2025 — 1,876 reviewers”",
      },
    ],
  },
];

export const FeaturesCoveredSectionData = {
  badge: "Deep Dive Policy Configuration",
  title: `Every Indian Business Has Its Own Way of Working. <span class="text-gradient"> QkrHR Respects That.</span>`,
  description: `No two businesses share the same attendance logic, shift structures, approval hierarchies, or payroll policy nuances. A good HRMS doesn't ask you to conform to its defaults. It configures to yours.`,
  subTitle:"Why this matters vs HROne",
  suDesc:"HROne offers policy customisation within its workflow framework — and for standard businesses, that's sufficient. But when your business has non-standard attendance logic, complex shift configurations, or approval chains that don't fit predefined templates, HROne's pre-built model becomes a constraint. QkrHR starts from your policy and builds outward. There are no templates to work around.",
  features: [
    {
      title: "Approval Workflows",
      desc: "Unlimited approval chains with escalation paths, conditional routing, multi-level approvers, and time-based escalations",
      bgColor: "bg-pinks",
    },
    {
      title: "Attendance Rules",
      desc:"Define your own grace periods, late-marking logic, half-day thresholds, overtime triggers, and comp-off rules — not system defaults",
      bgColor: "bg-red",
    },
    {
      title: "Shift Structures",
      desc:"Multiple shifts, rotational rosters, flexible shifts, and split shifts — configured for your workforce, not a standard template",
      bgColor: "bg-cyan",
    },
    {
      title: "Leave Policies",
      desc: "Accrual rules, carry-forward limits, encashment logic, leave types, and eligibility criteria — all configured to your HR policy",
      bgColor: "bg-green",
    },
    {
      title: "Payroll Policy",
      desc:"Salary structure, deduction logic, allowance configurations, incentive rules, and statutory treatment — built around your pay policy",
      bgColor: "bg-purple",
    },
    {
      title: "Multiple Entities",
      desc:"Separate legal entities, pay groups, and shift structures — each with independent policy configurations — in one platform",
      bgColor: "bg-orange",
    },
  ],
};

export const comparisonRowsData = [
  {
    title: `QkrHR vs HROne: <span class="text-gradient">Full Feature Comparison</span>`,
    description: `Every major category. Honest on both sides. Sourced from verified data.`,
    QkrhrLogo: QkrhrLogo,
    Alt1:"QkrHR Logo",
    KekaLogo: HroneLogo,
    Alt2:"HROne Logo",
    comparisonRows:[
        {
          feature: "Policy Configuration",
          qkr: "Fully configurable — attendance rules, leave structures, payroll logic, workflows, and approval chains built to your policy. No templates.",
          comare: "127 pre-built workflows configurable within defined parameters. Deep custom workflows require Enterprise tier."
        },
        {
          feature: "Payroll Control",
          qkr: "3-stage locked cycle — attendance lock → payroll finalization → payroll lock. Errors prevented structurally.",
          comare: "Strong payroll automation. No formal data-locking protocol before processing. Payroll runs on live data."
        },
        {
          feature: "Statutory Compliance",
          qkr: "PF, ESI, PT, TDS inside a locked, auditable cycle.",
          comare: "PF, ESI, PT, TDS included across all tiers — a genuine strength."
        },
        {
          feature: "Field Force Management",
          qkr: "Built-in — live tracking, geo-attendance, field task management, field expenses → payroll. No add-on.",
          comare: "Geo-tagged attendance available. No field task management or integrated field expense tools."
        },
        {
          feature: "Task Management",
          qkr: "Integrated — office and field task assignment, tracking, completion visibility. Built-in.",
          comare: "InboxForHR routes HR tasks. No general task management for field or operational staff."
        },
        {
          feature: "Expense Management",
          qkr: "Integrated into payroll cycle — field and office expenses settle with salary. No separate reconciliation.",
          comare: "Expense module available. WhatsApp/Teams bot integration priced separately."
        },
        {
          feature: "Social Dashboard",
          qkr: "Two-tab role-aware workspace — Social (all employees) and Team (managers/HR) — on every login.",
          comare: "No equivalent Social Dashboard. Engagement visible through main interface."
        },
        {
          feature: "Pending Inbox",
          qkr: "Single icon — every pending approval across all modules in one real-time view.",
          comare: "InboxForHR™ — auto-routes HR tasks by role. Genuinely well-regarded feature."
        },
        {
          feature: "Performance Management",
          qkr: "Available as standard.",
          comare: "Enterprise tier only — not available on Basic or Professional."
        },
        {
          feature: "Employee Helpdesk",
          qkr: "Included as standard.",
          comare: "Enterprise tier only."
        },
        {
          feature: "Custom Workflows",
          qkr: "Unlimited — self-serve, no vendor dependency, available as standard.",
          comare: "Enterprise tier only — not on Professional plan."
        },
        {
          feature: "Mobile App",
          qkr: "Full HRMS on mobile — all modules, consistent performance, no feature gap vs desktop.",
          comare: "Feature-rich app. Slow loading and login delays reported in verified reviews."
        },
        {
          feature: "Multi-Entity Support",
          qkr: "Multiple legal entities, pay groups, shift types — one platform.",
          comare: "Multi-location support. Entity-level management configuration varies by tier."
        },
        {
          feature: "Implementation",
          qkr: "Employees live in 7 days. Full setup in 15 days. Dedicated WhatsApp POC from Day 1.",
          comare: "Implementation timeline not published. 127 pre-built workflows speed initial setup."
        },
        {
          feature: "Customer Support",
          qkr: "Dedicated WhatsApp group + named POC per client. Real-time resolution.",
          comare: "24/7 support. 9.6/10 G2 support rating. No dedicated named POC model."
        }
    ]
  }
];

export const PayrollComplianceData = {
  title: `Payroll Should Be Provably Right.<br/><span class="text-gradient">Not Just Probably Right.</span>`,
  description: `HROne processes payroll on live data. QkrHR seals it before processing begins. That structural difference matters most on the last working day of every month.`,
  vs:VsImg,
  qkrCard: {
    title: "QkrHR's 3 Step Payroll",
    steps: [
      {
        num: "1",
        title: "Attendance Locking",
        description: "HR locks attendance data before payroll begins. No further edits are possible. The most common cause of month-end salary errors — last-minute attendance changes — is eliminated by design, not by discipline."
      },
      {
        num: "2",
        title: "Payroll Finalization",
        description: "Salaries computed on verified, locked data. Expenses, reimbursements, incentives, deductions, and claims auto-flow in. PF, ESI, PT, TDS calculated without manual intervention or live data risk."
      },
      {
        num: "3",
        title: "Payroll Locking",
        description: "HR locks attendance data before payroll begins. No further changes are possible — eliminating last-minute edits that corrupt salary calculations"
      }
    ]
  },
  kekaCard: {
    title: "Payroll Locking",
    description: `HROne's payroll engine is capable — it handles salary calculation, statutory deductions, and compliance well. The gap is structural: without a formal locking step, payroll runs on live data that someone could still change. QkrHR's three-stage lock makes that impossible. For Finance teams who need a clean month-end close, this isn't a minor detail.`
  }
};

export const QkrHRSupportData = {
  title: `Your On-Ground Workforce Deserves the Same <br/><span class="text-gradient">Operational Visibility as Your Office Team.</span>`,
  description: `Most HRMS platforms were built for desk workers. Field staff — sales teams, service engineers, delivery teams, site workers — were added as an afterthought, if at all. QkrHR was built to manage both from day one.`,
  vs: VsImg,
  leftCard: {
    cardClass:"",
    bgClass:"",
    title: "QkrHR on Field Operations",
    items: [
      {
        title: "Real-time location tracking — live",
        description: ""
      },
      {
        title: "Geo-tagged attendance with task context",
        description: ""
      },
      {
        title: "Task assignment and completion tracking",
        description: ""
      },
      {
        title: "Field expenses integrated into payroll",
        description: ""
      },
      {
        title: "Full field HRMS on mobile",
        description: ""
      },
    ]
  },
  rightCard: {
    cardClass:"green-card",
    bgClass:"green-header",
    title: "HROne on Field Operations",
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

export const FieldForceExpenseData = {
  title: `The First Screen Every Employee Sees Should Actually Help Them Work.`,
  description: `HROne's InboxForHR routes tasks to HR and managers — it's genuinely useful. QkrHR goes further: a role-aware workspace for every employee, and a unified Pending Inbox that collapses every approval across every module into a single icon.`,
  qkrSection: {
    title: "Social Dashboard — Two Tabs. Every Role. One Screen.",
    subtitle: `No add-on pricing. No tier upgrades. No vendor calls. Standard in every QkrHR plan.`,
    features: [
      {
        title: "Social Tab — Every Employee",
        description: "Today's attendance, leave balances, pending tasks, team presence, announcements, birthdays, work anniversaries — personalised and role-aware. Everything an employee needs before they open a single module."
      },
      {
        title: "Team Tab — Managers & HR",
        description: "Every pending approval in one place — leaves, punch corrections, regularisations, WFH requests, comp-off credits, IT declarations, field visits, exit approvals. Browse by month. Search by employee. Action and close without navigating away."
      },
      {
        title: "Pending Inbox — One Icon. Everything Waiting.",
        description: "A single icon in the top navigation shows a live count of every pending action across all modules. Click it. See everything. Action it. Done. No module tour. No missed approvals. No Monday morning backlog hunt."
      },
      {
        title: "Flexible HR Policy Configuration",
        description: "Whether your organisation runs a tightly controlled environment or flexible policies, QkrHR adapts to your structure — not the other way around."
      }
    ]
  },
  kekaSection: {
    title: "",
    description: ""
  }
};

export const PremiumShouldData = [
  {
    badge: "Pricing Comparison",
    title: `<span class="text-gradient">Premium Should Mean Premium at Every Price Point</span><br/> Not Just at the Top. `,
    description: `HROne's headline price looks accessible. But India's most-cited independent review notes that the features growing businesses need most are withheld until the highest tier. QkrHR doesn't operate that way.`,
    pricingCards: [
      {
        title: "QkrHR Pricing",
        theme: "theme-magenta",
        headerClass: "bg-magenta", 
        price: "<span class=\"text-danger fn-6 \">₹80</span><br/><span class=\"text-muted fn-3\">per user / month at an honest price — full operational depth included as standard</span>",
        note: "No Add-ons. No Hidden Costs.",
        btnClass: "btn-magenta",
        buttonText: "Start Saving with QkrHR",
        features: [
          { label: "Full policy configuration — no tier restriction", included: true },
          { label: "Field force, task, and expense management — included", included: true },
          { label: "3-stage payroll locking — included", included: true },
          { label: "Unlimited workflow configuration — included", included: true },
          { label: "Social Dashboard and Pending Inbox — included", included: true },
          { label: "Performance management — included", included: true },
          { label: "Employee helpdesk — included", included: true },
          { label: "Multiple entities and pay groups — included", included: true },
          { label: "Dedicated WhatsApp POC — included", included: true },
          { label: "7-day employee go-live commitment — included", included: true },
        ]
      },
      {
        title: "HROne",
        theme: "theme-green",
        headerClass: "bg-green",
        price: "<span class=\"fn-6 \">₹130+</span><br/><span class=\"text-muted fn-3\">per user / month — but the plan you need may cost more than the headline</span>",
        note: "Pricing may increase with additional modules",
        btnClass: "btn-green",
        buttonText: "Why Pay More? Compare Instead",
        features: [
          { label: "Basic (₹99/user): payroll + attendance + geo only", included: false },
          { label: "Professional (₹130/user): adds onboarding + database", included: false },
          { label: "Performance management: Enterprise only", included: false },
          { label: "Employee helpdesk: Enterprise only", included: false },
          { label: "Custom workflows: Enterprise only", included: false, included: false },
          { label: "Engagement portals: Enterprise only", included: false, included: false },
          { label: "WhatsApp/Teams bots: priced separately", included: false },
          { label: "Workforce planning, BI dashboards: priced separately", included: false },
          { label: "No field task management on any tier", included: false },
          { label: "No dedicated named support contact per client", included: false }
        ]
      }
    ]
  }
];

export const WhatYouGetData = {
  title: `<span class="text-gradient">Everything QkrHR Includes That </span><br/>HROne Either Tiers or Doesn't Offer`,
  description: `No add-on pricing. No tier upgrades. No vendor calls. Standard in every QkrHR plan.`,
  items: [
    "Full policy configuration — attendance, leave, payroll, workflows",
    "Field force management, task tracking, geo attendance",
    "Expense management integrated directly into payroll",
    "3-stage payroll locking — structured, auditable cycle",
    "Social Dashboard — two-tab workspace for every employee",
    "Pending Inbox — every approval, one click, all modules",
    "Unlimited workflow and approval configuration",
    "Multiple legal entities, pay groups, shift types",
    "Dedicated WhatsApp POC — named, real-time, from Day 1"
  ]
};

export const WhoShouldChooseData = {
  title: `Which Platform <span class="text-gradient">Actually Fits Your Business?</span>`,
  description: `Both platforms serve Indian businesses well. The right one depends on whether your organisation fits a predefined model — or needs the software to fit you.`,
  qkrCard: {
    brandClass: "qkrh-bg",
    title: "QkrHR is the right choice if",
    items: [
      "Your HR policies don't fit standard templates and you need genuine configuration depth",
      "You have field staff who need task management, not just geo-attendance",
      "Your Finance team needs a clean, locked payroll handover every month-end",
      "You need multiple entities, complex shift types, or varied pay groups",
      "You want performance management and helpdesk without paying for Enterprise",
      "You want expenses settled in payroll — not tracked separately",
      "You want a named person on WhatsApp, not a 24/7 support queue",
      "You want employees live in 7 days with full setup in 15",
      "You want premium operational HRMS at a price that reflects the software",
    ]
  },
  kekaCard: {
    brandClass: "hrone-bg",
    title: "HROne works well if",
    items: [
      "Your HR processes fit standard Indian SMB templates well",
      "InboxForHR's auto-routing model is your primary requirement",
      "Quick out-of-the-box setup matters more than deep configuration",
      "Your team is primarily office-based with minimal field operations",
      "HROne's Enterprise tier is within your budget and covers your feature needs"
    ]
  },
  shortNote: {
    title: "In short",
    description: "HROne is a well-built HRMS that works for businesses with standard HR structures. If your business is non-standard — complex policies, field workforces, multi-entity structures, or tight payroll controls — QkrHR was built for exactly that operational profile. Premium depth. Honest price. No tier games."
  }
};

export const researchTransparencyData = {
  title: `<span class="text-gradient">Research transparency:</span>`,
  description: `Every HROne claim on this page is sourced from <span class="fn-sb">G2, Capterra, CrazeHQ independent review, CheckThat.ai pricing analysis, and SoftwareSuggest verified user reviews</span>. QkrHR's capabilities are documented from the platform itself.`
};

export const QkrhrVsgretHrFaqData = [
  {
    "id": 1,
    "Title": "What is the core difference between QkrHR and HROne?",
    "Content": "HROne is built around 127 pre-configured HR workflows — strong out of the box for standard business setups, with customisation available within those templates. QkrHR is a fully policy-configurable system where every attendance rule, leave structure, payroll policy, approval chain, and workflow is built to your specific business requirements from the ground up. QkrHR also includes built-in field force management, task tracking, and structured payroll locking — operational capabilities HROne does not provide at comparable depth."
  },
  {
    "id": 2,
    "Title": "Is QkrHR better than HROne for policy configuration?",
    "Content": "Yes. QkrHR's policy configuration is unlimited and available as standard — businesses define their own attendance rules, shift logic, leave accrual, payroll structures, approval hierarchies, and escalation paths without working around templates or calling a vendor. HROne offers configuration within its predefined workflow model. For businesses with non-standard HR policies, QkrHR provides significantly more operational flexibility."
  },
  {
    "id": 3,
    "Title": "Does QkrHR include field force management that HROne doesn't",
    "Content": "Yes — and this is one of QkrHR's most significant differentiators. Field force management, task management, and field expense tracking are built into QkrHR's core platform at no additional cost. Real-time location tracking, geo-tagged attendance, field task assignment and completion tracking, and field expenses that flow directly into the payroll cycle — all standard. HROne offers geo-tagged attendance but does not provide dedicated field task management or integrated field operations tools."
  },
  {
    "id": 4,
    "Title": "How does QkrHR's payroll control differ from HROne's?",
    "Content": "Both platforms automate Indian statutory compliance — PF, ESI, PT, TDS. QkrHR adds a structural control layer that HROne lacks: a three-stage locked payroll cycle. Attendance is formally locked before processing begins. Payroll is finalized and locked for review. The final output is sealed before bank transfer. This prevents mid-cycle data errors and delivers an auditable HR-to-Finance handover every month. HROne processes payroll on live data without a formal locking protocol."
  },
  {
    "id": 5,
    "Title": "Is QkrHR more affordable than HROne?",
    "Content": "QkrHR is premium HRMS at an honest price — not the cheapest and not positioned as budget software. The distinction is what you get at that price. HROne's Professional plan (₹130/user/month) still withholds performance management, employee helpdesk, engagement portals, and custom workflows — these are Enterprise-only. QkrHR includes all of these as standard. You are paying for the operational depth, not for a brand's market position."
  },
  {
    "id": 6,
    "Title": "How quickly can QkrHR be implemented?",
    "Content": "QkrHR commits to employees live within 7 days and complete implementation — data migration, policy configuration, workflow setup — within 15 days. Every client gets a dedicated WhatsApp group with a named POC active from Day 1 of implementation for real-time support throughout onboarding and beyond."
  },
  {
    "id": 7,
    "Title": "Can I switch from HROne to QkrHr without disrupting operations?",
    "Content": "Yes. QkrHR's implementation team handles migration from HROne — employee records, salary structures, attendance history, leave balances, and policy configurations — as part of the standard 15-day process. Migration runs alongside current operations so HR continues without interruption. Your dedicated WhatsApp POC handles migration questions in real time throughout."
  },

]
