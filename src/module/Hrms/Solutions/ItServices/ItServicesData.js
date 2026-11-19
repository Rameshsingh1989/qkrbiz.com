// Content for /hrms-software/it-services.
import { itServices as ImagesUrl_itServices } from "../../../../assets/images";

export const ItServicesMeta = {
  title: "HRMS Software for IT Companies in India | QkrHR",
  description: "HRMS software for IT services companies in India. Hybrid attendance, leave, shifts, onboarding and exits in one HR system. Live in 7 days.",
};

export const ItServicesHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_itServices.attendanceHero,
    alt: "IT office with QkrHR cards: a cloud engineer joining today with onboarding steps, a leave request with no project clash, and office occupancy across four cities",
    title: "HRMS for IT Services Firms",
    subTitle: "HRMS software for IT teams <span class='text-gradient'>in every city.</span>",
    desc: "Hybrid attendance, leave, shifts, onboarding and exits. One HR system. Live in 7 days.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── Overview ─────────────────────────────────────────────────────────
export const ItOverviewData = {
  badge: "Overview",
  title: "What is HRMS software for IT companies?",
  paragraphs: [
    "HRMS software for IT companies is an HR system that manages employee records, attendance, leave, shifts, onboarding and exits for teams spread across offices, homes and client sites.",
    "QkrHR is built for IT services firms in India. It records hybrid and client-site attendance, applies leave rules by office, plans shifts for support teams and sends clean attendance data to payroll every month.",
  ],
  builtFor: [
    { id: 1, title: "IT services & consulting", desc: "Teams split across offices and client sites." },
    { id: 2, title: "SaaS & product companies", desc: "Fast hiring, hybrid work, lean HR teams." },
    { id: 3, title: "BPO, KPO & support centres", desc: "Rotational and night shifts at scale." },
    { id: 4, title: "Global capability centres", desc: "Multiple offices and entities in India." },
  ],
  builtForImg: ImagesUrl_itServices.builtForCard,
};

// ── The problem ──────────────────────────────────────────────────────
export const ItProblemData = [
  {
    badge: "The Problem",
    title: "IT teams move fast. <span class='text-gradient'>Spreadsheets don't.</span>",
    desc: "",
    List: [
      { id: "1", head: "Offices in many cities", desc: "Different holiday lists and leave rules for each office. HR tracks them by hand." },
      { id: "2", head: "Hybrid attendance", desc: "Office, home, client site. Nobody knows who worked where." },
      { id: "3", head: "Joiners and exits every month", desc: "Documents, approvals and handovers get lost between emails." },
    ],
  },
];

// ── How QkrHR fits (feature cards, each links to its module page) ────
export const ItFeaturesData = {
  badge: "How QkrHR fits",
  title: "HRMS built for how <span class='text-gradient'>IT services firms work</span>",
  desc: "Attendance, leave, shifts and the full employee lifecycle in one place.",
  items: [
    { id: 1, icon: ImagesUrl_itServices.attendance, title: "Hybrid & client-site attendance", desc: "Office, remote and client-site check-ins in one log. GPS-tagged when needed.", link: "/hrms-software/time-and-attendance-system" },
    { id: 2, icon: ImagesUrl_itServices.leave, title: "Leave by location", desc: "Separate leave policies and holiday lists for each office.", link: "/hrms-software/leave-management-system" },
    { id: 3, icon: ImagesUrl_itServices.shift, title: "Shift management", desc: "Rosters for support and night-shift teams, without spreadsheets.", link: "/hrms-software/shift-management-system" },
    { id: 4, icon: ImagesUrl_itServices.lifecycle, title: "Onboarding & exits", desc: "Onboard new joiners quickly and close exits without loose ends.", link: "/hrms-software/employee-onboarding-software" },
    { id: 5, icon: ImagesUrl_itServices.inbox, title: "Pending Inbox", desc: "Leave and attendance requests in one live queue for every manager.", link: "/hrms-software/hr-workflow-management" },
    { id: 6, icon: ImagesUrl_itServices.selfService, title: "Employee self-service", desc: "Employees check leave, attendance and payslips themselves.", link: "/hrms-software/employee-self-service-portal" },
  ],
};

// ── In detail (alternating text + drawn card) ───────────────────────
export const ItDetailHead = {
  badge: "In detail",
  title: "A closer look at QkrHR for <span class='text-gradient'>IT services firms</span>",
};

export const ItDetailData = [
  {
    id: "attendance",
    badge: "Attendance",
    title: "Hybrid attendance that shows who worked where",
    desc: "Employees check in from the office, from home or from a client site. Every check-in lands in one log, with GPS location where you need proof.",
    points: [
      "Office, remote and client-site attendance in one view",
      "GPS-tagged check-ins for client-site staff",
      "Managers see their team's attendance live",
      "Attendance locked each month before payroll",
    ],
    card: { title: "Today · Bengaluru", rows: [["In office", "142"], ["Remote", "38"], ["Client site", "12"], ["On leave", "6"]] },
    imgUrl: ImagesUrl_itServices.attendanceCard,
    link: { to: "/hrms-software/time-and-attendance-system", text: "Explore attendance management" },
  },
  {
    id: "leave-shifts",
    badge: "Leave & shifts",
    title: "Leave rules and shifts for every office",
    desc: "Each office runs its own leave policy and holiday list. Support teams get shift rosters that managers can change without spreadsheets.",
    points: [
      "Leave policies and holiday lists per location",
      "Shift rosters for support and night teams",
      "Leave balances visible to employees in the app",
      "Requests approved from the Pending Inbox",
    ],
    card: { title: "Policy · Pune office", rows: [["Holiday list", "Maharashtra"], ["Shift", "Night · 9 PM–6 AM"], ["Leave approver", "Reporting manager"], ["Status", "Active"]] },
    imgUrl: ImagesUrl_itServices.leaveShiftsCard,
    link: { to: "/hrms-software/leave-and-attendance-management", text: "Explore leave & attendance" },
  },
  {
    id: "lifecycle",
    badge: "Lifecycle",
    title: "Joiners and exits without loose ends",
    desc: "New joiners are added with their documents before day one. When someone leaves, the exit is tracked step by step and handed to payroll.",
    points: [
      "Joiner details and documents collected upfront",
      "Exit steps tracked to closure",
      "Every employee record in one place",
      "Exit data sent straight to QkrPayroll",
    ],
    card: { title: "This month", rows: [["Joiners", "18"], ["Exits", "11"], ["Documents pending", "3"], ["Sent to payroll", "9"]] },
    imgUrl: ImagesUrl_itServices.lifecycleCard,
    link: { to: "/hrms-software/employee-offboarding-software", text: "Explore Employee Offboarding Software" },
  },
];

// ── Employee lifecycle (dark band) ───────────────────────────────────
export const ItLifecycleData = {
  badge: "Employee lifecycle",
  title: "From offer letter to last day",
  desc: "Every step of the employee journey, in one HR system.",
  steps: [
    { id: "01", title: "Hire & onboard", desc: "New joiners added, documents collected, ready on day one." },
    { id: "02", title: "Manage every day", desc: "Hybrid attendance, leave and shifts tracked in one place." },
    { id: "03", title: "Exit cleanly", desc: "Exits closed, assets returned, data handed to payroll." },
  ],
};

// ── Before and after (CompareTable: the `qkrhr` column is highlighted) ─
export const ItCompareData = [
  {
    badge: "Before and after",
    title: "What changes <span class='text-gradient'>with QkrHR</span>",
    desc: "",
    headers: ["Task", "Without QkrHR", "With QkrHR"],
    columns: ["task", "without", "qkrhr"],
    rows: [
      { id: "1", task: "Attendance", without: "Separate sheets for office, home and client sites", qkrhr: "One log with GPS-tagged check-ins" },
      { id: "2", task: "Leave rules", without: "One policy forced on every office", qkrhr: "Leave policy and holidays per location" },
      { id: "3", task: "Shift planning", without: "Rosters in spreadsheets and chats", qkrhr: "Shift rosters managed in QkrHR" },
      { id: "4", task: "Approvals", without: "Emails and chat messages", qkrhr: "Pending Inbox with a clear record" },
      { id: "5", task: "Exits", without: "Checklists lost in email threads", qkrhr: "Tracked to closure, sent to payroll" },
    ],
  },
];

// ── Implementation (SetupSteps) ──────────────────────────────────────
export const ItSetupData = [
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
export const ItStatsData = [
  { id: 1, value: "7 days", label: "Employees live" },
  { id: 2, value: "15 days", label: "Full go-live" },
  { id: 3, value: "85,000+", label: "Users across India" },
  { id: 4, value: "₹40–80", label: "Per employee / month" },
];

// ── FAQ (also read by the page schema and the chatbot) ───────────────
export const ItServicesFaqData = [
  {
    id: 1,
    Title: "Does QkrHR support hybrid and remote attendance?",
    Content: "Yes. Employees check in from the office, from home or from a client site, and every check-in lands in one log. Client-site and mobile check-ins can be GPS-tagged, and work-from-home attendance has its own rules. See <a href='/hrms-software/time-and-attendance-system'>attendance management</a>.",
  },
  {
    id: 2,
    Title: "Can we set different leave policies for each office?",
    Content: "Yes. Each office or location gets its own leave policy and holiday list, so a Bengaluru team and a Pune team follow their own rules. Employees see their balance in the app before they apply.",
  },
  {
    id: 3,
    Title: "Can managers approve leave in one place?",
    Content: "Yes. Leave and attendance requests arrive in each manager's Pending Inbox, one live queue with a clear record of every decision. Managers can approve on the web or the mobile app.",
  },
  {
    id: 4,
    Title: "Does QkrHR connect with payroll?",
    Content: "Yes. Attendance is locked each month, and paid days, loss of pay and approved leave flow into <a href='/payroll-software'>QkrPayroll</a>. Exit data is handed to payroll for the final settlement.",
  },
  {
    id: 5,
    Title: "How fast can we go live?",
    Content: "Employees are typically live in 7 days, and the full go-live, with approvals, reports and the payroll link, takes about 15 days. Your team is supported on WhatsApp throughout.",
  },
  {
    id: 6,
    Title: "Can employees use QkrHR on their phones?",
    Content: "Yes. The QkrHR mobile app lets employees check in, apply for leave, check balances and view payslips. Managers approve requests from the same app.",
  },
  {
    id: 7,
    Title: "Does QkrHR support multiple legal entities?",
    Content: "Yes. Global capability centres and groups with more than one entity in India can run each entity, office and location in one QkrHR account, with its own policies.",
  },
  {
    id: 8,
    Title: "Can we move our data from our current system?",
    Content: "Yes. Employee records, documents and reporting lines are imported from your spreadsheets or old HR system in the first two days of setup.",
  },
];

// ── Related industries ───────────────────────────────────────────────
export const ItRelatedIndustriesData = [
  { title: "Growing a startup team?", link: "/hrms-software/startups", linkText: "HRMS for startups" },
  { title: "A small or mid-sized business?", link: "/hrms-software/hr-software-small-business", linkText: "HRMS for SMEs" },
  { title: "Running field teams?", link: "/hrms-software/logistics", linkText: "HRMS for logistics" },
];

// ── Final CTA ────────────────────────────────────────────────────────
export const ItFinalCtaData = [
  {
    id: 1,
    title: "See QkrHR on an <span class='text-gradient'>IT services setup.</span>",
    description: "30-minute demo on test data.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "WhatsApp Us", url: "https://wa.me/917428174445", type: "cta-btn-outline" },
    ],
  },
];
