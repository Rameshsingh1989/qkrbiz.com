import { Security as ImagesUrl_Security } from "../../assets/images";

export const DataSecurityMeta = {
  title: "Enterprise Data Security & Cloud Protection | Qkrbiz",
  description: "Qkrbiz ensures enterprise-grade data security for your business data with encryption, role-based access control, and compliance.",
};

export const SecurityHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_Security.SecurityHeader,
    alt: "Qkrbiz roles and permissions",
    title: "Roles &amp; Permissions",
    subTitle: "Everyone sees their part of HR, and nothing more.",
    desc: "Start from ready-made roles, decide whose records each one covers, and check exactly what a person will see before you give them access.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── How access works ──────────────────────────────────────────────────
export const AccessModelData = {
  eyebrow: "How access works",
  title: "Every permission answers three questions.",
  lead: "<span>A role is a set of answers. Change an answer and everyone holding the role changes with it.</span>",
  cards: [
    { id: 1, label: "What can they open?", title: "Feature and level", desc: "Each feature gets a level. Each level adds to the one before.", chips: ["Employee", "Manager", "HR", "HR Admin"] },
    { id: 2, label: "Whose records?", title: "Data scope", desc: "Set once per feature. It applies to that feature's lists, reports and dashboard widgets.", chips: ["Only themself", "Direct team", "Whole hierarchy", "Whole company", "Part of company"] },
    { id: 3, label: "Can they take it out?", title: "Export to Excel", desc: "A separate permission on every list, so a role can see a list without downloading it.", chips: ["Can export", "View only"] },
    { id: 4, label: "And who approves?", title: "The workflow decides", desc: "Approvers come from the workflow, never from a role tick. A request waiting with someone always reaches them.", highlight: true, link: { to: "/hrms-software/hr-workflow-management", text: "HR workflows →" } },
  ],
};

// ── Question-led sections ─────────────────────────────────────────────
export const SecuritySections = [
  {
    id: "templates",
    eyebrow: "Ready-made roles",
    title: "“Where do we even start?”",
    imgUrl: ImagesUrl_Security.roleTemplates,
    imgWidth: 1152,
    imgHeight: 1084,
    alt: "Choosing a role template, with Manager selected and a note that permissions outside the licence were left out",
    points: [
      "<strong>Eleven role templates</strong>: Employee, Manager, HR Executive, HR Admin, Payroll Executive, Payroll Manager, Accounts, Field Coordinator and Management View, plus Recruiter and Asset Coordinator when you use them.",
      "A template brings only what is in your plan, and <strong>says what it left out</strong>.",
      "<strong>Preview what the role sees</strong> before you create it, then change anything you like.",
      "The corrections that change pay, balances or attendance come <strong>only with HR Admin and Payroll Manager</strong>.",
    ],
  },
  {
    id: "levels",
    eyebrow: "Feature levels",
    title: "“Can she approve leave without running payroll?”",
    imgUrl: ImagesUrl_Security.featureLevels,
    imgWidth: 1152,
    imgHeight: 944,
    alt: "Editing a role by feature: Leave and Attendance at Manager, Overtime custom, Payroll at Employee, and an unsaved change",
    points: [
      "Each feature gets one level: <strong>Employee, Manager, HR or HR Admin</strong>. Leave can be at Manager while Payroll stays at Employee.",
      "See <strong>what a level adds</strong> before you save.",
      "Need exactly four of five screens? Open the feature and tick them. It shows as <strong>Custom</strong>, with the nearest level.",
      "Every screen is still listed one by one under All screens.",
    ],
  },
  {
    id: "scope",
    eyebrow: "Whose records",
    title: "“Should a manager see only their own team?”",
    imgUrl: ImagesUrl_Security.dataScope,
    imgWidth: 1152,
    imgHeight: 1358,
    alt: "An org chart showing whose leave a regional manager sees with the Whole hierarchy scope: everyone below her",
    points: [
      "Pick whose records once per feature: <strong>Only themself, Direct team, Whole hierarchy, Whole company</strong> or <strong>Part of company</strong>.",
      "Part of company covers <strong>the departments you choose</strong>.",
      "Teams follow the reporting line, so a new joiner shows up for their manager <strong>without editing the role</strong>.",
      "Requests waiting for someone's approval <strong>always reach them</strong>, whatever their scope.",
    ],
  },
  {
    id: "fields",
    eyebrow: "Employee profile",
    title: "“Can his manager see his PAN number?”",
    imgUrl: ImagesUrl_Security.profileFieldAccess,
    imgWidth: 1472,
    imgHeight: 658,
    alt: "Employee profile field settings: what the employee, their manager, HR and admins, and everyone else can do for four fields",
    points: [
      "For each profile field, set what <strong>the employee, their manager, HR &amp; admins</strong> and <strong>everyone else</strong> may do: Hidden, Can view or Can update.",
      "When an employee updates a field, it can <strong>need manager or HR approval</strong> before it lands.",
      "Field-by-field settings are for the employee profile. Every other screen follows the feature level and data scope.",
    ],
    link: { to: "/hrms-software/employee-management", text: "Employee database →" },
  },
  {
    id: "check",
    eyebrow: "Check before you assign",
    title: "“Why can he see everyone's leave?”",
    imgUrl: ImagesUrl_Security.accessCheck,
    imgWidth: 1152,
    imgHeight: 734,
    alt: "Access check for one person: dashboard cards they get with the role and data scope behind each, and one they don't get",
    points: [
      "<strong>Preview a role</strong>: its menu and dashboard, before anyone holds it.",
      "<strong>Access check</strong> for one person: every menu and dashboard card they get, the role that gives it, and whose data it shows, with a headcount.",
      "When something is missing, it says what would add it.",
      "It explains access without signing in as them, and <strong>never shows you a name you couldn't already see</strong>.",
    ],
  },
  {
    id: "sensitive",
    eyebrow: "Sensitive permissions",
    title: "“Who can unlock attendance after payroll?”",
    imgUrl: ImagesUrl_Security.sensitivePermissions,
    imgWidth: 1152,
    imgHeight: 926,
    alt: "Payroll permissions colour-coded red and orange, with an Export to Excel switch on each report",
    points: [
      "Permissions that override system checks are <strong>marked red</strong>: correcting attendance, unlocking a month, publishing pay. Those that open other people's data or money are <strong>orange</strong>.",
      "In the templates, red comes only with <strong>HR Admin and Payroll Manager</strong>.",
      "<strong>One person prepares, another publishes</strong>: leave adjustments, leave grants and salaries each have their own Publish permission.",
      "<strong>Export to Excel</strong> is switched on per list.",
    ],
  },
];

// ── What happens when… ────────────────────────────────────────────────
export const AccessWhenData = {
  eyebrow: "What happens when…",
  title: "Access changes only when you change it.",
  items: [
    { id: 1, title: "Someone joins a manager's team", desc: "Direct team and Whole hierarchy follow the reporting line, so the manager sees them without a role edit." },
    { id: 2, title: "A request waits with an approver outside its scope", desc: "It still reaches them. Requests waiting with you always show in your queue." },
    { id: 3, title: "QkrHR adds a new screen", desc: "Existing roles never get it on their own. You decide which roles should have it." },
    { id: 4, title: "A feature is switched off in your plan", desc: "Its screens are hidden from every role, not deleted, and come back as they were if it is switched on again." },
    { id: 5, title: "You open a role that sits between two levels", desc: "It shows as Custom and stays exactly as it is until you pick a level." },
    { id: 6, title: "A level adds a screen that needs a scope", desc: "It takes the feature's scope, so a role saved from By feature is never left without one." },
    { id: 7, title: "HR applies leave for an employee", desc: "Only with Apply Leaves for Others, and their data scope decides whose leave they can apply for." },
    { id: 8, title: "Someone has a manager role in one app and none in another", desc: "Each app has its own role, so a person can be a Manager in QkrHR and have no access to QkrAdmin." },
  ],
};

// ── Data security ─────────────────────────────────────────────────────
export const SecurityCardsData = {
  eyebrow: "Data security",
  title: "The controls above are yours. This part we look after.",
  cards: [
    { id: 1, title: "Your own database", desc: "Each company's data is kept in a separate database, never mixed with another customer's." },
    { id: 2, title: "Support only with your token", desc: "Our support team opens your account with a one-time token you create. It expires on its own, and you never share a password." },
    { id: 3, title: "Encrypted connections", desc: "Everything between your browser or phone and our servers travels over an encrypted connection." },
    { id: 4, title: "A record of changes", desc: "Field history on every profile field, a delete history and a login trail." },
  ],
};

// ── Across qkrbiz ─────────────────────────────────────────────────────
export const AccessAppsData = {
  eyebrow: "Across qkrbiz",
  title: "One way of giving access, in every app.",
  lead: "<span>Roles and data scopes work the same way in each app. Role templates and feature levels are in QkrHR.</span>",
  apps: ["QkrHR", "QkrPayroll", "QkrVisit", "QkrExpense", "QkrDesk", "QkrSales", "QkrTenders", "QkrTasks", "QkrProjects"],
};

export const DataSecurityFAQ = [
  { id: 1, Title: "Can we create our own roles?", Content: "Yes. Start from a template or a blank role and set each feature's level. You can also copy an existing role and change the copy." },
  { id: 2, Title: "Can a manager see salaries?", Content: "Only if their role gives it. The Manager template gives managers their own payslips plus their team's leave, attendance and requests. Salary screens come with the payroll roles." },
  { id: 3, Title: "Can HR be limited to one department?", Content: "Yes. Choose Part of company for a feature and pick the departments it covers." },
  { id: 4, Title: "Who approves requests?", Content: "The <a href='/hrms-software/hr-workflow-management'>workflow</a> decides who approves, at each stage. Approvers always see what is waiting with them, whatever their role's data scope." },
  { id: 5, Title: "Can we stop people downloading data?", Content: "Yes. Export to Excel is a separate permission, so a role can see a list without being able to download it." },
  { id: 6, Title: "How do I know what someone can see?", Content: "Access check shows one person's menus and dashboard cards, the role that gives each one, and whose data each shows. Preview shows the same for a role before you assign it." },
  { id: 7, Title: "Can we control single fields?", Content: "On the employee profile, yes: each field can be hidden, viewable or editable for the employee, their manager, HR &amp; admins and everyone else. Other screens are controlled by feature, level and data scope." },
  { id: 8, Title: "What happens when we add a module?", Content: "Its screens appear in the templates, ready to use. Your existing roles stay as they are until you add them." },
  { id: 9, Title: "Can one person have different roles in different apps?", Content: "Yes. Each app has its own role, so someone can manage a team in QkrHR and have no access to admin settings." },
  { id: 10, Title: "Can qkrbiz support see our data?", Content: "Only when you let them in with a one-time token you create. The token expires, and you never share a password." },
];

export const DataSecurityCtaData = [
  {
    id: 1,
    title: "Bring your org chart.",
    description: "We'll set up your roles in the demo and show you exactly what each person sees.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
