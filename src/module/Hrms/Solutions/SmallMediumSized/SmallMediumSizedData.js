import { sme as ImagesUrl_sme } from "../../../../assets/images";

export const SmallMediumSizedMeta = {
  title: "HRMS Software for Small Business in India | QkrHR",
  description: "QkrHR is HRMS software built for small businesses in India. Manage attendance, payroll and compliance in one place and save hours every month.",
};

export const SmallMediumSizedData = [
  {
    "id": 1,
    "youTubeVideoUrl": "bf3U8zW1dxc",
    "videoUrl": "",
    "imgUrl": ImagesUrl_sme.smallBusinessHead,
    "alt": "HR Software for Small Businesses",
    "title": "HR Software for Small Businesses",
    "subTitle": "Run HR, Payroll and Compliance <br/><span class='text-gradient'>Without an HR Department</span>",
    "desc": "Attendance, payroll and PF, ESI, PT and TDS filings in one place for teams of 10 to 200. Set up in a few days, with local support that knows Indian labour law.",
    "subDesc":"",
    "link": "/signup",
    "HeadList": [],
  }
];

// ── Stats under the logos ────────────────────────────────────────────
export const SmeStatsData = [
  { id: 1, value: "500+", label: "Users across Qkrbiz products" },
  { id: 2, value: "10–200", label: "Employees, the team size we're built for" },
  { id: 3, value: "PF · ESI · PT · TDS", label: "Calculated on every payroll run" },
  { id: 4, value: "Days", label: "To go live, not months" },
];

// ── Why small businesses switch (ProblemCards) ───────────────────────
export const SmeProblemData = [
  {
    badge: "Why small businesses switch",
    title: "Spreadsheets work, <span class='text-gradient'>until payroll day</span>",
    desc: "Manual HR rarely breaks all at once. It slips a little more every month, until a missed filing or a wrong salary makes the cost obvious.",
    List: [
      { id: "1", icon: ImagesUrl_sme.manualErrors, head: "Salary mistakes", desc: "A missed LOP day or a wrong arrear means a payroll rerun, and an employee who stops trusting their payslip." },
      { id: "2", icon: ImagesUrl_sme.complianceRisks, head: "Missed compliance dates", desc: "PF and ESI are due by the 15th of every month. Late deposits attract interest and damages, and no spreadsheet reminds you." },
      { id: "3", icon: ImagesUrl_sme.wastedTime, head: "Days lost every month", desc: "Matching biometric logs, leave balances and salary sheets by hand eats time your team could spend on the business." },
      { id: "4", icon: ImagesUrl_sme.disconnectedTools, head: "Data in five places", desc: "Attendance in one tool, payroll in Excel, documents on WhatsApp. Nobody sees the full picture." },
    ],
  },
];

// ── Features ─────────────────────────────────────────────────────────
export const SmeFeaturesData = {
  badge: "Features",
  title: "Everything a small HR team needs, <span class='text-gradient'>in one app</span>",
  desc: "Attendance feeds leave, leave feeds payroll, payroll feeds compliance. Because it is all one system, nothing has to be copied across.",
  items: [
    { id: 1, icon: ImagesUrl_sme.payrollClicks, title: "Payroll in a few clicks", desc: "Salaries, LOP, overtime, arrears and reimbursements calculated straight from attendance.", points: ["Bank transfer file ready to upload", "Payslips on every employee's phone", "Errors flagged before you run"] },
    { id: 2, icon: ImagesUrl_sme.statutoryReadyPayroll, title: "Statutory compliance, built in", desc: "PF, ESI, Professional Tax, TDS and LWF worked out on every run, for each state you operate in.", points: ["Statutory reports ready for filing", "Rule changes applied for you", "Audit trail on every change"] },
    { id: 3, icon: ImagesUrl_sme.attendanceReality, title: "Attendance that matches reality", desc: "Sync biometric devices, or let staff punch in from their phone with GPS and geo-fencing.", points: ["Shifts, late marks and comp-offs", "Custom leave policies, sandwich rules included", "One-tap approvals for managers"] },
    { id: 4, icon: ImagesUrl_sme.fieldForceManagement, title: "Built for teams on the move", desc: "Field force tools for sales, service and delivery staff who are rarely at a desk.", points: ["Geo-tagged attendance on the road", "Live location and visit logs", "Travel and expense claims from the field"] },
    { id: 5, icon: ImagesUrl_sme.employeeFirstInterface, title: "An app your employees will use", desc: "Self-service on Android and iOS cuts the “what's my leave balance?” messages to zero.", points: ["Apply for leave and claims in seconds", "Download payslips any time", "Announcements and policies in one place"] },
    { id: 6, icon: ImagesUrl_sme.offerToExit, title: "From offer letter to full & final", desc: "Onboard new joiners and close exits cleanly, without chasing paper.", points: ["Document upload and verification", "Onboarding and exit checklists", "One-click full & final settlement"] },
  ],
  alsoIncluded: ["Expense management", "Task management", "HR dashboard", "Role-based access", "Custom reports & alerts", "Accounting integration", "Employee engagement"],
};

// ── How it works (NumberedSteps) ─────────────────────────────────────
export const SmeStepsData = {
  badge: "How it works",
  title: "Live in <span class='text-gradient'>days, not months</span>",
  desc: "You don't need an implementation team. We do the setup with you.",
  steps: [
    { id: "01", title: "Show us how you run HR today", desc: "A short call to understand your salary structures, leave policies and the states you pay in." },
    { id: "02", title: "We set it up and move your data", desc: "Our team imports employee records, salary structures and leave balances from Excel or your old system." },
    { id: "03", title: "Run your first payroll with support", desc: "Local support that understands Indian labour law walks you through your first run and filings." },
  ],
};

// ── Buyer's guide (CompareTable: the `qkrhr` column is highlighted) ──
export const SmeGuideData = [
  {
    badge: "Buyer's guide",
    title: "How to choose HR software for <span class='text-gradient'>your small business</span>",
    desc: "Six questions worth asking any HRMS vendor, and how QkrHR answers them.",
    headers: ["What to check", "Why it matters", "With QkrHR"],
    columns: ["check", "why", "qkrhr"],
    rows: [
      { id: "1", check: "Indian statutory compliance", why: "PF, ESI, PT, TDS and LWF rules differ by state and change often. Your software should keep up, not you.", qkrhr: "Calculated on every payroll run, with statutory reports ready to file." },
      { id: "2", check: "Setup time", why: "A long rollout means months of running two systems side by side.", qkrhr: "Live in a few days, with data migration and configuration support." },
      { id: "3", check: "Total cost", why: "Low headline prices can hide paid add-ons for modules, users or support.", qkrhr: "Clear per-employee pricing and no hidden charges." },
      { id: "4", check: "Mobile and field staff", why: "Many small-business teams work on shop floors, sites or the road, not at a desk.", qkrhr: "GPS and geo-fenced attendance, field force tracking and a self-service app." },
      { id: "5", check: "Support", why: "Without an HR department, you need answers from someone who knows Indian payroll.", qkrhr: "A dedicated local support team, reachable by phone, email and WhatsApp." },
      { id: "6", check: "Room to grow", why: "Switching HRMS at 150 people is far harder than at 20.", qkrhr: "Add expenses, tasks, onboarding and exit modules as you grow." },
    ],
    note: "Comparing vendors? <a href='/hrms-software/qkrhr-vs-keka-hr'>QkrHR vs Keka</a> · <a href='/hrms-software/qkrhr-vs-greythr'>QkrHR vs greytHR</a> · <a href='/hrms-software/qkrhr-vs-hrone'>QkrHR vs HROne</a>",
  },
];

// ── Industries ───────────────────────────────────────────────────────
export const SmeIndustriesData = {
  title: "Set up for how your industry works",
  desc: "Shift rosters for factories, field tracking for logistics, multi-location attendance for retail, configured during setup.",
  items: [
    { id: 1, label: "Startups", link: "/hrms-software/startups" },
    { id: 2, label: "Manufacturing", link: "/hrms-software/hr-payroll-software-manufacturing-companies" },
    { id: 3, label: "Retail", link: "/hrms-software/retail" },
    { id: 4, label: "Logistics", link: "/hrms-software/logistics" },
    { id: 5, label: "Healthcare", link: "/hrms-software/healthcare" },
    { id: 6, label: "Education", link: "/hrms-software/education" },
    { id: 7, label: "IT services", link: "/hrms-software/it-services" },
    { id: 8, label: "Financial services", link: "/hrms-software/financial-services" },
    { id: 9, label: "Security services", link: "/hrms-software/security-services" },
    { id: 10, label: "Construction", link: "/hrms-software/construction" },
  ],
};

// ── Pricing ──────────────────────────────────────────────────────────
export const SmePricingData = {
  badge: "Pricing",
  title: "Simple pricing. <span class='text-gradient'>No hidden charges.</span>",
  desc: "Pay per employee, per month, and only for what you use. Setup help and data migration are part of getting started.",
  points: ["Payroll, attendance, leave and compliance", "Employee mobile app on Android and iOS", "Onboarding, migration and local support"],
  price: "₹40–80",
  priceUnit: "per employee / month",
  buttons: [
    { id: 1, label: "See plans & pricing", url: "/hrms-software/qkrhr-pricing", cls: "btn btn-gradient rounded-pill" },
    { id: 2, label: "Get a quote", url: "/signup", cls: "btn btn-outline-magenta rounded-pill" },
  ],
};

// ── FAQ (also read by the page schema and the chatbot) ───────────────
export const SmeFaqData = [
  {
    id: 1,
    Title: "What is the best HR software for a small business in India?",
    Content: "Look for software that handles Indian statutory compliance (PF, ESI, PT and TDS) out of the box, can be set up in days, works on mobile and comes with local support. QkrHR is built for exactly this, for businesses with 10 to 200 employees.",
  },
  {
    id: 2,
    Title: "Does QkrHR handle PF, ESI, Professional Tax and TDS?",
    Content: "Yes. QkrHR calculates EPF, ESI, Professional Tax and TDS on every payroll run and generates the statutory reports you need for filing.",
  },
  {
    id: 3,
    Title: "How long does it take to set up?",
    Content: "Most small businesses go live within a few days. Our team helps with onboarding, data migration and configuration, so you don't need in-house IT.",
  },
  {
    id: 4,
    Title: "Can I move my data from Excel or another HRMS?",
    Content: "Yes. We import employee records, salary structures and leave balances from spreadsheets or your current system as part of setup.",
  },
  {
    id: 5,
    Title: "What size of business is QkrHR for?",
    Content: "QkrHR works best for teams of 10 to 200 employees, such as startups, D2C brands, agencies, clinics, factories and service companies, and adds modules as you grow.",
  },
  {
    id: 6,
    Title: "Does it work for remote, hybrid and field teams?",
    Content: "Yes. Employees mark attendance from the mobile app with geo-tagging, and managers approve leave and claims from anywhere. Field staff can be tracked with visit logs and live location.",
  },
  {
    id: 7,
    Title: "Is my employee data secure?",
    Content: "Data is encrypted in transit with SSL/TLS, and role-based access means each person sees only what their role allows.",
  },
  {
    id: 8,
    Title: "How much does QkrHR cost?",
    Content: "Pricing is per employee, per month, from ₹40 to ₹80 depending on the plan. There are no hidden charges. See <a href='/hrms-software/qkrhr-pricing'>QkrHR pricing</a> or book a demo for a quote.",
  },
];

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const SmeCtaData = [
  {
    id: 1,
    title: "Make next month's payroll your last one <span class='text-gradient'>on spreadsheets</span>",
    description: "See QkrHR set up with your own salary structures in a free, no-obligation demo.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Chat with us on WhatsApp", url: "https://wa.me/917428174445", type: "cta-btn-outline" },
    ],
  },
];
