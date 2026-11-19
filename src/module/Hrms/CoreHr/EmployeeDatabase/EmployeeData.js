import { employeeDb as ImagesUrl_employeeDb } from "../../../../assets/images";

export const EmployeeMeta = {
  title: "Employee Database & Staff Records Management System | QkrHR",
  description: "Unify staff records with QkrHR employee database management system. Centralize personal data, documents, job history, and assets in one secure HR platform.",
};

export const EmployeeHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_employeeDb.employeeHeader,
    alt: "QkrHR employee profile on the Timeline tab: an upcoming promotion, then salary revision, manager change, confirmation and joining",
    title: "Employee Management System",
    subTitle: "One profile for every employee, and the story of every change",
    desc: "An employee database with personal and job details, documents, assets, letters and a dated timeline from joining to exit, with promotions, transfers and contract renewals approved and recorded.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// Bento tiles under the logos. The first tile is the large one with the drawn custom-field list.
export const EmployeeTiles = [
  {
    id: 1,
    tag: "Employee record",
    title: "The fields your company needs, not just the ones we thought of.",
    desc: "Add your own fields to the employee record. They appear on forms, imports, reports and letters, with the history of every change.",
  },
  { id: 2, title: "Promotions & transfers", desc: "Raised, approved and applied on the effective date, with the letter generated." },
  { id: 3, title: "Contract staff", desc: "Terms, extensions and renewals, with alerts before a contract ends.", note: "3 contracts end in 60 days" },
  { id: 4, title: "Org chart & directory", desc: "Find anyone by manager, department or location, and see the structure at a glance." },
  { id: 5, title: "Import from Excel", desc: "Bring everyone in at once. Later updates change only the cells you fill." },
  { id: 6, title: "Roles you can preview", desc: "See exactly what a role can open and whose records it can see, before you assign it." },
];

export const EmployeeCustomFields = [
  { name: "Blood group", type: "Your field · list" },
  { name: "Uniform size", type: "Your field · list" },
  { name: "Driving licence valid till", type: "Your field · date" },
  { name: "Cost centre", type: "Your field · master" },
];

/*
 * One section per question an HR team asks. The visual is a .webp image
 * (imgUrl + alt), drawn with the section art family backdrop.
 * `afterLifecycle` sections render after the join-to-exit strip.
 */
export const EmployeeSections = [
  {
    id: "profile",
    eyebrow: "Employee profile",
    title: "“Everything about this person, on one screen.”",
    points: [
      { text: "A profile with a <strong>configurable top card</strong> and tabs for job, salary, <a href='/hrms-software/hr-document-management-system'>documents</a>, assets, letters and timeline." },
      { text: "<strong>Linked records</strong> for family, education, certifications and past employment. Employees request changes with proof, and HR approves them." },
      { text: "Employees can request a <strong>bank account change</strong> with proof." },
      { text: "Hover over any name for a quick card, and keep leadership profiles <strong>private</strong>." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeProfileRequests,
    imgWidth: 1190,
    imgHeight: 598,
    alt: "Three employee change requests waiting for HR review: a bank account, a family member and a certification, each with proof attached",
    link: { to: "/hrms-software/employee-self-service-portal", text: "See the self-service portal" },
  },
  {
    id: "timeline",
    eyebrow: "History & effective dating",
    title: "“When did his designation change, and who changed it?”",
    points: [
      { text: "A <strong>timeline</strong> of every dated change: salary revisions, designation, grade, department, location, manager, letters and exit." },
      { text: "<strong>Schedule changes</strong> for a future date. They show under Upcoming changes and apply on the day." },
      { text: "<strong>Field history</strong> on every field, plus a delete history and a login trail." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeFieldHistory,
    imgWidth: 1104,
    imgHeight: 582,
    alt: "Designation field history for an employee: three changes with effective dates and who made them, plus an upcoming grade change",
  },
  {
    id: "job-changes",
    eyebrow: "Job changes",
    title: "“She's being promoted from 1 December.”",
    points: [
      { text: "Raise a <strong>promotion, transfer, role change or manager change</strong>. It goes for <a href='/hrms-software/hr-workflow-management'>approval</a> and applies on the effective date." },
      { text: "Generate the promotion or transfer <a href='/hrms-software/hr-document-management-system'>letter</a> from the same screen." },
      { text: "Link a salary revision so pay and designation move together." },
      { text: "Corrections stay separate from job changes, and each needs a reason." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeJobChange,
    imgWidth: 1182,
    imgHeight: 798,
    alt: "An approved promotion from Senior Analyst to Lead Analyst, effective 1 December 2026, with a draft salary revision",
  },
  {
    id: "contracts",
    eyebrow: "Contract register",
    title: "“Whose contract ends next month?”",
    points: [
      { text: "Terms, extensions and renewals for <strong>fixed-term staff and directors</strong>, with approval if you want it." },
      { text: "Overlapping terms are refused, and gaps get a warning." },
      { text: "Alerts for contracts ending soon, and for contracts that ended while the person is still working." },
      { text: "Ending a contract opens the exit form, already filled in." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeContracts,
    imgWidth: 1182,
    imgHeight: 660,
    alt: "Three contracts ending in the next 60 days, two counting down and one renewal in approval",
  },
  {
    id: "org",
    eyebrow: "Organisation",
    title: "“How is the company organised?”",
    points: [
      { text: "Legal entities, departments, sub-departments, business units, locations, sales territories and teams, flat or hierarchical." },
      { text: "An interactive <strong>org chart</strong> and a <strong>directory</strong> you can filter by manager, department or location." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeOrgChart,
    imgWidth: 1250,
    imgHeight: 780,
    alt: "Org hierarchy by reporting in tree view, with a directory filter for Operations in Pune and this week's onboarding progress",
    afterLifecycle: true,
  },
  {
    id: "boards",
    eyebrow: "Boards",
    title: "“Who is joining this week, and what is still pending?”",
    points: [
      { text: "<strong>Boards and list views</strong> for onboarding, transitions and F&amp;F." },
      { text: "Start from <strong>ready-made boards</strong> and change the steps to fit your process." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeBoards,
    imgWidth: 1176,
    imgHeight: 642,
    alt: "An onboarding board for November with joiners under To start, In progress and Done, and ready-made boards for onboarding, transfer and F&F",
    afterLifecycle: true,
  },
  {
    id: "access",
    eyebrow: "Roles & permissions",
    title: "“Who can see salaries?”",
    points: [
      { text: "<strong>Roles</strong> by feature, each with a data scope: own records, team or whole company." },
      { text: "Start from <strong>role templates</strong>, and preview <strong>what this role sees</strong> before you assign it." },
      { text: "A separate permission controls who can <strong>export</strong> data." },
    ],
    imgUrl: ImagesUrl_employeeDb.employeeRoleAccess,
    imgWidth: 1182,
    imgHeight: 768,
    alt: "Preview of what the Manager role sees: own, team and company access for five features",
    afterLifecycle: true,
  },
];

export const EmployeeLifecycle = [
  { id: 1, step: "1 · Join", title: "Add or import", desc: "Step-by-step entry with save-as-draft, or bulk import from Excel.", link: { to: "/hrms-software/employee-onboarding-software", text: "Onboarding →" } },
  { id: 2, step: "2 · Grow", title: "Change and record", desc: "Job changes, salary revisions and confirmations, each dated and approved." },
  { id: 3, step: "3 · Leave", title: "Exit cleanly", desc: "Clearance, full and final settlement and the relieving letter.", link: { to: "/hrms-software/employee-offboarding-software", text: "Offboarding →" } },
  { id: 4, step: "4 · Return", title: "Rehire", desc: "Bring former employees back with approval and their history intact." },
];

export const EmployeeExtras = [
  { id: 1, tag: "Assets", title: "Know who has what", desc: "Assign laptops, phones and vehicles to employees or projects. Employees acknowledge receipt, and the history stays on record." },
  { id: 2, tag: "Engage", title: "Keep people connected", desc: "Noticeboard, polls, birthdays, work anniversaries and special days, and in-app chat.", link: { to: "/hrms-software/employee-engagement", text: "Employee engagement →" } },
];

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const EmployeeCtaData = [
  {
    id: 1,
    title: "Send us your employee Excel.",
    description: "We'll show it to you as QkrHR profiles in the demo, with dummy names if you prefer.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];

// Also read by the page's FAQ schema (EmployeeEchemaData) and the chatbot.
export const EmployeeDataFAQ = [
  {
    id: 1,
    Title: "What can we store in an employee record?",
    Content: "<p>Personal and contact details, job and reporting details, salary history, family, education, past employment, bank accounts, documents, assets and your own custom fields.</p>",
  },
  {
    id: 2,
    Title: "Can we add fields specific to our company?",
    Content: "<p>Yes. Add fields to the employee record yourself. They appear on forms, imports, reports and letters.</p>",
  },
  {
    id: 3,
    Title: "Can managers see their team's records?",
    Content: "<p>Yes, within the scope you give them. Managers see their reportees' profiles, pending requests and team dashboard on web and mobile.</p>",
  },
  {
    id: 4,
    Title: "Can we set different access for HR, managers and employees?",
    Content: "<p>Yes. Roles control what each person can do, and data permissions control whose records they can see: own, team or company. You can preview a role before you assign it.</p>",
  },
  {
    id: 5,
    Title: "How do we move existing data in?",
    Content: "<p>Download the Excel template, fill it in and upload it. The import checks every row before saving. Later updates from Excel change only the cells you fill.</p>",
  },
  {
    id: 6,
    Title: "Is there a history of changes?",
    Content: "<p>Yes. Every field change is recorded with the old value, new value, date and person, and the employee timeline shows the whole story.</p>",
  },
  {
    id: 7,
    Title: "Can we schedule a promotion or transfer for a future date?",
    Content: "<p>Yes. Raise it as a job change, get it approved, and it applies on the effective date.</p>",
  },
];
