// Content for /hrms-software/construction.
import {
  construction as ImagesUrl_construction,
  itServices as ImagesUrl_itServices,
  financialServices as ImagesUrl_financial,
} from "../../../../assets/images";

export const ConstructionMeta = {
  title: "HRMS Software for Construction Companies | QkrHR",
  description: "HRMS software for construction companies in India. GPS site attendance, shift rosters, leave and worker records for every site. Live in 7 days.",
};

export const ConstructionHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_construction.attendanceHero,
    alt: "Construction site crew with QkrHR cards: a mason checked in at the gate with face match and PPE check, 468 of 490 rostered workers on site, and a weekly wage slip paid to bank",
    title: "HRMS for Construction Companies",
    subTitle: "HRMS software for <span class='text-gradient'>every site.</span>",
    desc: "GPS site attendance, shift rosters, leave and worker records. Every project, in one HR system.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── Overview ─────────────────────────────────────────────────────────
export const ConstructionOverviewData = {
  badge: "Overview",
  title: "What is HRMS software for construction companies?",
  paragraphs: [
    "HRMS software for construction companies is an HR system that tracks site attendance, shifts, leave and worker records across multiple project sites.",
    "QkrHR gives construction firms GPS-tagged site attendance, site-wise shift rosters and one place for every worker's records, so head office can see what's happening on every site.",
  ],
  builtFor: [
    { id: 1, title: "Building contractors", desc: "Crews moving between sites." },
    { id: 2, title: "Real estate developers", desc: "Projects run under separate entities." },
    { id: 3, title: "Infrastructure companies", desc: "Large sites across states." },
    { id: 4, title: "Interior & fit-out firms", desc: "Small teams at many client sites." },
  ],
  builtForImg: ImagesUrl_construction.builtForCard,
};

// ── The problem ──────────────────────────────────────────────────────
export const ConstructionProblemData = [
  {
    badge: "The Problem",
    title: "Sites are spread out. <span class='text-gradient'>HR can't be.</span>",
    desc: "",
    List: [
      { id: "1", head: "Attendance from far-off sites", desc: "Registers, phone calls and proxy marking. No proof of who was on site." },
      { id: "2", head: "Worker records everywhere", desc: "IDs and documents sit in files at different sites." },
      { id: "3", head: "Shifts across projects", desc: "Each site runs its own roster. Head office can't see any of them." },
    ],
  },
];

// ── How QkrHR fits (feature cards, each links to its module page) ────
export const ConstructionFeaturesData = {
  badge: "How QkrHR fits",
  title: "HRMS built for <span class='text-gradient'>site-based teams</span>",
  desc: "From site check-in to worker records, every project in one view.",
  items: [
    { id: 1, icon: ImagesUrl_construction.gpsSite, title: "GPS site attendance", desc: "Workers and supervisors check in from the site, tagged with GPS location.", link: "/field-force-management-software/employee-tracking-app" },
    { id: 2, icon: ImagesUrl_itServices.shift, title: "Shift rosters per site", desc: "Plan and change shifts for each site from one screen.", link: "/hrms-software/shift-management-system" },
    { id: 3, icon: ImagesUrl_construction.workerRecords, title: "Worker records", desc: "Every worker's details and documents in one place, not in site files.", link: "/hrms-software/employee-management" },
    { id: 4, icon: ImagesUrl_financial.entities, title: "Sites, projects & entities", desc: "See your people by site, project or legal entity.", link: "/hrms-software/employee-management" },
    { id: 5, icon: ImagesUrl_construction.siteEngineer, title: "Site engineer tracking", desc: "Live location and visits for engineers moving between sites.", link: "/field-force-management-software/real-time-location-tracking" },
    { id: 6, icon: ImagesUrl_itServices.inbox, title: "Pending Inbox", desc: "Leave, shift and attendance requests in one queue.", link: "/hrms-software/hr-workflow-management" },
  ],
};

// ── In detail (alternating text + drawn card) ───────────────────────
export const ConstructionDetailHead = {
  badge: "In detail",
  title: "A closer look at QkrHR for <span class='text-gradient'>construction companies</span>",
};

export const ConstructionDetailData = [
  {
    id: "attendance",
    badge: "Attendance",
    title: "Site attendance you can trust",
    desc: "Workers and supervisors check in from the site. Each check-in carries a GPS location, so proxy marking stops and disputes end.",
    points: [
      "GPS-tagged check-in at every site",
      "Site-wise attendance in one live view",
      "Supervisors see their crew in real time",
      "Attendance locked before payroll",
    ],
    card: { title: "Noida · Tower B", rows: [["Checked in", "118"], ["Absent", "5"], ["On leave", "3"], ["Location", "GPS verified"]] },
    imgUrl: ImagesUrl_construction.attendanceCard,
    link: { to: "/hrms-software/time-and-attendance-system", text: "Explore attendance management" },
  },
  {
    id: "shifts",
    badge: "Shifts",
    title: "Rosters for every site",
    desc: "Plan shifts for each site and move people between projects without phone calls.",
    points: [
      "Shift rosters set per site",
      "Shift changes requested and approved in the app",
      "Overtime recorded from attendance",
      "Head office sees every roster",
    ],
    card: { title: "Shifts · This week", rows: [["Day shift", "8 AM–5 PM"], ["Night shift", "8 PM–5 AM"], ["Sites", "3"], ["Changes pending", "4"]] },
    imgUrl: ImagesUrl_construction.shiftsCard,
    link: { to: "/hrms-software/shift-management-system", text: "Explore shift management" },
  },
  {
    id: "records",
    badge: "Records",
    title: "Every worker on record",
    desc: "Worker details and documents are stored in QkrHR, not in files at the site office.",
    points: [
      "Worker details and documents in one place",
      "View people by site, project or entity",
      "Site engineers tracked live with QkrVisit",
      "Exit data sent to payroll",
    ],
    card: { title: "Workforce", rows: [["Sites", "3"], ["Workers", "266"], ["Site engineers", "14"], ["Entities", "2"]] },
    imgUrl: ImagesUrl_construction.recordsCard,
    link: { to: "/hrms-software/employee-management", text: "Explore employee management" },
  },
];

// ── Employee lifecycle ───────────────────────────────────────────────
export const ConstructionLifecycleData = {
  badge: "Employee lifecycle",
  title: "Every worker, from <span class='text-gradient'>first day to last</span>",
  desc: "Every step of the employee journey, in one HR system.",
  steps: [
    { id: "01", title: "Hire & onboard", desc: "Add workers at the site with their details and documents." },
    { id: "02", title: "Manage every day", desc: "GPS attendance, shifts and leave tracked for every site." },
    { id: "03", title: "Exit cleanly", desc: "Exits closed cleanly, with data handed to payroll." },
  ],
};

// ── Before and after (CompareTable: the `qkrhr` column is highlighted) ─
export const ConstructionCompareData = [
  {
    badge: "Before and after",
    title: "What changes <span class='text-gradient'>with QkrHR</span>",
    desc: "",
    headers: ["Task", "Without QkrHR", "With QkrHR"],
    columns: ["task", "without", "qkrhr"],
    rows: [
      { id: "1", task: "Attendance", without: "Paper registers and phone calls", qkrhr: "GPS-tagged check-ins from site" },
      { id: "2", task: "Proxy marking", without: "Hard to catch", qkrhr: "Location on every check-in" },
      { id: "3", task: "Shifts", without: "Each site keeps its own roster", qkrhr: "All rosters in one system" },
      { id: "4", task: "Worker records", without: "Files at different sites", qkrhr: "One record per worker" },
      { id: "5", task: "Head office view", without: "Weekly calls with each site", qkrhr: "Live view of every site" },
    ],
  },
];

// ── Implementation (SetupSteps) ──────────────────────────────────────
export const ConstructionSetupData = [
  {
    badge: "Implementation",
    title: "Live in <span class='text-gradient'>15 days</span>",
    desc: "Your team gets set up step by step, with support on WhatsApp throughout.",
    steps: [
      { id: "1", step: "Day 1–2", head: "Data import", desc: "Employee records, documents and reporting lines moved from your sheets or old system." },
      { id: "2", step: "Day 3–5", head: "Policies set up", desc: "Attendance, leave, shift and holiday rules configured for each location." },
      { id: "3", step: "Day 6–7", head: "Employees live", desc: "Everyone gets app access. Attendance and leave start." },
      { id: "4", step: "Day 8–15", head: "Full go-live", desc: "Approvals, reports and the payroll link checked with your team." },
    ],
  },
];

// ── Stats ────────────────────────────────────────────────────────────
export const ConstructionStatsData = [
  { id: 1, value: "7 days", label: "Employees live" },
  { id: 2, value: "15 days", label: "Full go-live" },
  { id: 3, value: "85,000+", label: "Users across India" },
  { id: 4, value: "₹40–80", label: "Per employee / month" },
];

// ── FAQ (also read by the page schema and the chatbot) ───────────────
export const ConstructionFaqData = [
  {
    id: 1,
    Title: "Can we track attendance across multiple sites?",
    Content: "Yes. Workers and supervisors check in from each site with a GPS-tagged location, and head office sees site-wise attendance in one live view. See <a href='/hrms-software/time-and-attendance-system'>attendance management</a>.",
  },
  {
    id: 2,
    Title: "Can each site have its own shifts?",
    Content: "Yes. Shift rosters are set per site, shift changes are requested and approved in the app, and head office sees every roster. See <a href='/hrms-software/shift-management-system'>shift management</a>.",
  },
  {
    id: 3,
    Title: "Can we manage separate project entities?",
    Content: "Yes. View and manage your people by site, project or legal entity, so projects run under separate entities stay separate.",
  },
  {
    id: 4,
    Title: "Does QkrHR connect with payroll?",
    Content: "Yes. Attendance is locked before payroll, overtime is recorded from attendance, and exit data is handed to <a href='/payroll-software'>QkrPayroll</a>.",
  },
  {
    id: 5,
    Title: "How fast can we go live?",
    Content: "Employees are typically live in 7 days, and the full go-live, with approvals, reports and the payroll link, takes about 15 days. Your team is supported on WhatsApp throughout.",
  },
  {
    id: 6,
    Title: "Can site engineers be tracked between sites?",
    Content: "Yes. With QkrVisit, engineers moving between sites are tracked with live location and visits. See <a href='/field-force-management-software/real-time-location-tracking'>real-time location tracking</a>.",
  },
  {
    id: 7,
    Title: "Can workers move between sites?",
    Content: "Yes. Move people between projects and sites in QkrHR without phone calls. Their records, attendance and shifts follow them.",
  },
  {
    id: 8,
    Title: "What does it cost?",
    Content: "Pricing is ₹40–80 per employee per month, depending on the plan. See <a href='/hrms-software/qkrhr-pricing'>QkrHR pricing</a> for plan details.",
  },
];

// ── Related industries ───────────────────────────────────────────────
export const ConstructionRelatedIndustriesData = [
  { title: "Running a factory or plant?", link: "/hrms-software/hr-payroll-software-manufacturing-companies", linkText: "HRMS for manufacturing" },
  { title: "Deploying staff at client sites?", link: "/hrms-software/security-services", linkText: "HRMS for security services" },
  { title: "Running field teams?", link: "/hrms-software/logistics", linkText: "HRMS for logistics" },
];

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const ConstructionFinalCtaData = [
  {
    id: 1,
    title: "See QkrHR on a <span class='text-gradient'>multi-site setup.</span>",
    description: "30-minute demo on test data.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "WhatsApp Us", url: "https://wa.me/917428174445", type: "cta-btn-outline" },
    ],
  },
];
