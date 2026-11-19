// Content for /hrms-software/financial-services.
import { financialServices as ImagesUrl_financial } from "../../../../assets/images";

export const FinancialMeta = {
  title: "HRMS Software for NBFCs & Financial Services | QkrHR",
  description: "HRMS software for NBFCs, brokers and insurers. Field team tracking, branch",
};

export const FinancialHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_financial.payrollHero,
    alt: "Branch office staff with QkrHR cards: today's staffing across six Mumbai West branches, and 38 of 46 staff in sensitive roles through mandatory leave this year",
    title: "Payroll for NBFCs, Brokers & Insurers",
    subTitle: "Payroll with the <span class='text-gradient'>controls finance expects.</span>",
    desc: "Branch-wide compliance, incentives and staff loans. Payroll locked at every stage.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── Overview ─────────────────────────────────────────────────────────
export const FinancialOverviewData = {
  badge: "Overview",
  title: "What is payroll software for NBFCs and financial services?",
  paragraphs: [
    "Payroll software for NBFCs and financial services calculates salaries, incentives, loan recoveries and tax for staff across branches, and applies PF, ESI, TDS, PT and LWF by branch location.",
    "QkrPayroll runs every payroll in three locked stages, so changes can't slip in after sign-off. Finance and audit teams get a payroll they can stand behind.",
  ],
  builtFor: [
    { id: 1, title: "NBFCs & lenders", desc: "Branches plus collection teams." },
    { id: 2, title: "Microfinance institutions", desc: "Large field teams across districts." },
    { id: 3, title: "Broking firms", desc: "Branch and sales teams across cities." },
    { id: 4, title: "Insurance distributors", desc: "Advisors and sales teams on the move." },
  ],
  builtForImg: ImagesUrl_financial.builtForCard,
};

// ── The problem ──────────────────────────────────────────────────────
export const FinancialProblemData = [
  {
    badge: "The Problem",
    title: "Tight controls. <span class='text-gradient'>Many branches.</span>",
    desc: "",
    List: [
      { id: "1", head: "Branches across states", desc: "Each branch brings its own PT and LWF rules. Compliance can't slip anywhere." },
      { id: "2", head: "Incentives in spreadsheets", desc: "Field payouts worked out by hand, then copied into payroll." },
      { id: "3", head: "Payroll needs control", desc: "Late changes, unclear approvals and errors don't pass an audit." },
    ],
  },
];

// ── How QkrPayroll fits (feature cards, each links to its module page) ─
export const FinancialFeaturesData = {
  badge: "How QkrPayroll fits",
  title: "Payroll built for <span class='text-gradient'>regulated, branch-led businesses</span>",
  desc: "Control and compliance in every payroll run.",
  items: [
    { id: 1, icon: ImagesUrl_financial.payrollLock, title: "3-stage payroll lock", desc: "Attendance, processing and disbursement each locked before the next stage begins.", link: "/payroll-software/management" },
    { id: 2, icon: ImagesUrl_financial.incentives, title: "Incentives & variable pay", desc: "Configurable pay components for incentives, paid with the monthly salary.", link: "/payroll-software/management" },
    { id: 3, icon: ImagesUrl_financial.loans, title: "Staff loans & advances", desc: "Loans recovered from salary automatically, in the instalments you set.", link: "/payroll-software/loans-advances" },
    { id: 4, icon: ImagesUrl_financial.compliance, title: "Branch-wide compliance", desc: "PF, ESI, TDS, PT and LWF applied by branch location.", link: "/payroll-software/statutory-compliance" },
    { id: 5, icon: ImagesUrl_financial.tdsForm, title: "TDS & Form 16", desc: "TDS on approved declarations. Form 16 and 24Q from payroll data.", link: "/payroll-software/statutory-compliance" },
    { id: 6, icon: ImagesUrl_financial.entities, title: "Multiple entities", desc: "Run payroll for every group entity from one login.", link: "/payroll-software" },
  ],
};

// ── In detail (alternating text + drawn card) ───────────────────────
// Card rows are [label, value, done]; `done` shows the tick icon before the value.
export const FinancialDetailHead = {
  badge: "In detail",
  title: "A closer look at QkrPayroll for <span class='text-gradient'>financial services firms</span>",
};

export const FinancialDetailData = [
  {
    id: "control",
    badge: "Control",
    title: "A payroll that can't change after sign-off",
    desc: "Attendance is locked first. Salaries are processed on locked data. Disbursement is approved last. Each stage closes before the next opens.",
    points: [
      "Three locked stages every month",
      "No edits after sign-off",
      "Each stage signed off before the next",
      "A clear trail for audit",
    ],
    card: { title: "Payroll · November", rows: [["Attendance Lock", "Done", true], ["Processing", "Done", true], ["Disbursement", "Awaiting approval"], ["Edits after lock", "Blocked"]] },
    imgUrl: ImagesUrl_financial.controlCard,
    link: { to: "/payroll-software/management", text: "Explore payroll management" },
  },
  {
    id: "incentives-loans",
    badge: "Incentives & loans",
    title: "Incentives and loans in the same run",
    desc: "Field incentives are set up as pay components and paid with salary. Staff loans and advances are recovered automatically.",
    points: [
      "Incentives as configurable pay components",
      "Paid with the monthly salary",
      "Staff loans recovered in instalments",
      "Outstanding balances tracked",
    ],
    card: { title: "November run", rows: [["Incentives", "214 staff"], ["Loans recovering", "38"], ["Advances", "12"], ["Status", "Processing"]] },
    imgUrl: ImagesUrl_financial.incentivesLoansCard,
    link: { to: "/payroll-software/loans-advances", text: "Explore loans & advances" },
  },
  {
    id: "compliance",
    badge: "Compliance",
    title: "Branch-wise compliance",
    desc: "Every branch follows its state's rules. TDS is worked out on approved declarations, with Form 16 and 24Q from payroll.",
    points: [
      "PF, ESI, TDS, PT and LWF by branch",
      "PT covered across 18 states",
      "TDS on approved declarations",
      "Form 16 and 24Q generated",
    ],
    card: { title: "Branches · November", rows: [["Delhi", "PF · ESI · LWF", true], ["Uttar Pradesh", "PF · ESI", true], ["Maharashtra", "PF · ESI · PT · LWF", true], ["TDS", "Done", true]] },
    imgUrl: ImagesUrl_financial.complianceCard,
    link: { to: "/payroll-software/statutory-compliance", text: "Explore statutory compliance" },
  },
];

// ── 3-stage payroll lock ─────────────────────────────────────────────
export const FinancialStagesData = {
  badge: "3-stage payroll lock",
  title: "Every payroll run, <span class='text-gradient'>signed off in stages</span>",
  desc: "Each stage is locked before the next one starts. Nothing gets changed after sign-off.",
  steps: [
    { id: "01", title: "Attendance Lock", desc: "Branch and field attendance verified and locked." },
    { id: "02", title: "Processing", desc: "Salaries, incentives and TDS calculated on locked data." },
    { id: "03", title: "Disbursement", desc: "Final approval, then disbursement. Changes after sign-off are blocked." },
  ],
};

// ── Before and after (CompareTable: the `qkrhr` column is highlighted) ─
export const FinancialCompareData = [
  {
    badge: "Before and after",
    title: "What changes <span class='text-gradient'>with QkrPayroll</span>",
    desc: "",
    headers: ["Task", "Without QkrPayroll", "With QkrPayroll"],
    columns: ["task", "without", "qkrhr"],
    rows: [
      { id: "1", task: "Payroll changes", without: "Edits possible until the last minute", qkrhr: "Blocked once each stage locks" },
      { id: "2", task: "Incentives", without: "Worked out in spreadsheets", qkrhr: "Paid as pay components" },
      { id: "3", task: "Staff loans", without: "Tracked separately", qkrhr: "Recovered from salary automatically" },
      { id: "4", task: "Compliance", without: "State rules checked by hand", qkrhr: "Applied by branch location" },
      { id: "5", task: "Audit", without: "Hard to show who signed off", qkrhr: "Each stage signed off in order" },
    ],
  },
];

// ── Implementation (SetupSteps) ──────────────────────────────────────
export const FinancialSetupData = [
  {
    badge: "Implementation",
    title: "Live in <span class='text-gradient'>15 days</span>",
    desc: "Your team gets set up step by step, with support on WhatsApp throughout.",
    steps: [
      { id: "1", step: "Day 1–2", head: "Data import", desc: "Employee, salary structure and statutory details imported." },
      { id: "2", step: "Day 3–5", head: "Payroll setup", desc: "Pay components, PF, ESI, PT and LWF rules and entities configured." },
      { id: "3", step: "Day 6–7", head: "Employees live", desc: "Self-service opens for payslips and tax declarations." },
      { id: "4", step: "Day 8–15", head: "First payroll", desc: "A test run compared with your previous payroll, then live." },
    ],
  },
];

// ── Stats ────────────────────────────────────────────────────────────
export const FinancialStatsData = [
  { id: 1, value: "7 days", label: "Employees live" },
  { id: 2, value: "15 days", label: "Full go-live" },
  { id: 3, value: "18 states", label: "Professional Tax covered" },
  { id: 4, value: "₹40–80", label: "Per employee / month" },
];

// ── FAQ (also read by the page schema and the chatbot) ───────────────
export const FinancialFaqData = [
  {
    id: 1,
    Title: "How does QkrPayroll control payroll changes?",
    Content: "Every payroll runs in three locked stages: attendance lock, processing and disbursement. Each stage is signed off before the next one opens, and once a stage is locked, edits are blocked. Who signed off, and when, stays on record for audit.",
  },
  {
    id: 2,
    Title: "We have branches in many states. Is that covered?",
    Content: "Yes. PF, ESI, TDS, PT and LWF are applied by each branch's location, and Professional Tax is covered across 18 states. See <a href='/payroll-software/statutory-compliance'>statutory compliance</a>.",
  },
  {
    id: 3,
    Title: "Can it handle incentives and variable pay?",
    Content: "Yes. Incentives are set up as configurable pay components and paid with the monthly salary, so field payouts no longer pass through spreadsheets.",
  },
  {
    id: 4,
    Title: "Can staff loans be recovered from salary?",
    Content: "Yes. Staff loans and advances are recovered from salary automatically, in the instalments you set, and outstanding balances are tracked. See <a href='/payroll-software/loans-advances'>loans and advances</a>.",
  },
  {
    id: 5,
    Title: "Do you support multiple legal entities?",
    Content: "Yes. Run payroll for every group entity from one login, with each entity's own statutory details.",
  },
  {
    id: 6,
    Title: "Does it handle TDS and Form 16?",
    Content: "Yes. TDS is worked out on approved tax declarations, and Form 16 and Form 24Q are generated from payroll data.",
  },
  {
    id: 7,
    Title: "How fast can we go live?",
    Content: "Employees are typically live in 7 days. Your first payroll runs within 15 days, after a test run compared with your previous payroll. Your team is supported on WhatsApp throughout.",
  },
  {
    id: 8,
    Title: "What does it cost?",
    Content: "Pricing is ₹40–80 per employee per month, depending on the plan. See <a href='/hrms-software/qkrhr-pricing'>QkrHR pricing</a> for plan details.",
  },
];

// ── Related industries ───────────────────────────────────────────────
export const FinancialRelatedIndustriesData = [
  { title: "Running IT or support teams?", link: "/hrms-software/it-services", linkText: "HRMS for IT services" },
  { title: "Branches and stores across states?", link: "/hrms-software/retail", linkText: "HRMS for retail" },
  { title: "A small or mid-sized business?", link: "/hrms-software/hr-software-small-business", linkText: "HRMS for SMEs" },
];

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const FinancialFinalCtaData = [
  {
    id: 1,
    title: "See QkrPayroll on a <span class='text-gradient'>branch setup.</span>",
    description: "30-minute demo on test data.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "WhatsApp Us", url: "https://wa.me/917428174445", type: "cta-btn-outline" },
    ],
  },
];
