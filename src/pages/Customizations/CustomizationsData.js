import { custom as ImagesUrl_custom } from "../../assets/images";

export const CustomizationsMeta = {
  title: "Customizable ERP & Workflow Solutions | Qkrbiz",
  description: "Customize Qkrbiz to match your unique business needs — from workflows to reports, every feature is configurable for your team.",
};

export const CustomizationsHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_custom.customHero,
    alt: "Adding a custom field called Blood donor to the employee form: field types grouped into basic and advanced, Checkbox selected, with mandatory and help text options",
    title: "Customizations",
    subTitle: "Ready on day one. Change only what's different about you.",
    desc: "Start from ready-made roles, letters, alerts and workflows. Add your own fields, views, colours and wording where your company works its own way.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── Ready-made ────────────────────────────────────────────────────────
export const CustomizationsReadyData = {
  eyebrow: "Ready-made",
  title: "Most of it is already set up.",
  lead: "<span>Start from these, then change the parts your company does differently.</span>",
  items: [
    { id: 1, label: "11 templates", title: "Roles", desc: "Employee, Manager, HR Executive, HR Admin, Payroll, Accounts and more, each with sensible access." },
    { id: 2, label: "11 letters", title: "Letters", desc: "Offer, appointment, confirmation, increment, relieving and experience letters, plus five bank letters." },
    { id: 3, label: "Library", title: "Alerts and notifications", desc: "Ready-made reminders, weekly lists and event emails in every app, switched off until you pick who gets them.", link: { to: "/alert-notification", text: "Alerts & Notifications →" } },
    { id: 4, label: "Per request type", title: "Workflow emails", desc: "An email for every step of an approval, from “waiting for you” to the final decision, already worded and laid out.", link: { to: "/workflow", text: "Workflow Automation →" } },
    { id: 5, label: "Per status", title: "Status colours", desc: "Every status already belongs to a colour group, so badges look the same in every app." },
    { id: 6, label: "What you change stays yours", title: "Never overwritten", desc: "A letter you copy is your own from then on. Alerts and notifications you edit are marked Customised, and newer standard wording is offered, never forced.", highlight: true },
  ],
};

// ── Question-led sections ─────────────────────────────────────────────
export const CustomizationsSections = [
  {
    id: "fields",
    eyebrow: "Custom fields",
    title: "“We record T-shirt size and blood donors. Nobody else does.”",
    imgUrl: ImagesUrl_custom.customFields,
    imgWidth: 1152,
    imgHeight: 670,
    alt: "The Additional details tab on an employee record showing four custom fields filled in",
    points: [
      "Add your own fields to a form: <strong>text, numbers, dates, dropdowns, checklists, radio buttons</strong>, a pick list from any master, rich text or a heading.",
      "Make a field <strong>mandatory</strong> and give it <strong>help text</strong> people see as they fill it.",
      "Group your fields on an <strong>add-on tab</strong> of their own, beside the standard ones.",
    ],
  },
  {
    id: "letters",
    eyebrow: "Letters",
    title: "“Our offer letter has a clause nobody else uses.”",
    imgUrl: ImagesUrl_custom.customLetters,
    imgWidth: 1152,
    imgHeight: 706,
    alt: "Editing an appointment letter: the text has fields for employee name, designation and date of joining that fill in from the record",
    points: [
      "Start from a <strong>ready-made letter</strong>, preview it, and copy it into your account.",
      "Fields such as name, designation and joining date <strong>fill in from the record</strong> when the letter is made.",
      "Change any wording, add your own clauses, and name <strong>who signs</strong>.",
    ],
  },
  {
    id: "views",
    eyebrow: "Views",
    title: "“HR wants columns Finance never looks at.”",
    imgUrl: ImagesUrl_custom.customViews,
    imgWidth: 1152,
    imgHeight: 788,
    alt: "The employee list with a saved view called Joined this quarter applied, its views menu open showing a public view, a private view and Save current view",
    points: [
      "Choose the <strong>columns, filters and sort</strong> on any list, then save it as a view.",
      "Keep a view <strong>private</strong>, or make it <strong>public</strong> for the whole team.",
      "Set a <strong>default view</strong> that opens every time you come back.",
      "Switch between a table and cards where a list offers both.",
    ],
  },
  {
    id: "colours",
    eyebrow: "Status colours",
    title: "“Overdue should look overdue, in every app.”",
    imgUrl: ImagesUrl_custom.customColours,
    imgWidth: 1152,
    imgHeight: 840,
    alt: "Group Colors: seven status colour groups with their badge colours, and Overdue being edited",
    points: [
      "Every status belongs to a <strong>colour group</strong>: open, due, in progress, on hold, overdue, pending, cancelled and more.",
      "Change a group's colour and <strong>every status in it follows</strong>, across apps.",
      "Move a status to another group when it means something different for you.",
    ],
  },
  {
    id: "languages",
    eyebrow: "Languages",
    title: "“Half our staff read Hindi first.”",
    imgUrl: ImagesUrl_custom.customLanguages,
    imgWidth: 1152,
    imgHeight: 794,
    alt: "Language picker listing English and nine Indian languages in their own scripts, with Hindi selected",
    points: [
      "Employees use self-service in <strong>Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Punjabi, Tamil, Telugu</strong> or English.",
      "Each person <strong>picks their own</strong>, and you set a <strong>default language per location</strong>.",
      "HR and admin screens stay in English, so setup reads the same for every admin.",
    ],
  },
];

export const CustomizationsFAQ = [
  {
    id: 1,
    Title: "Do we have to customize before we start?",
    Content: "No. Roles, letters, alerts, workflow emails and status colours come ready. Change them when you find something your company does differently.",
  },
  {
    id: 2,
    Title: "Will an update overwrite our changes?",
    Content: "No. A copied letter is yours. An alert or notification you edited stays as you left it, and a newer standard version is offered for you to compare and take, or not.",
  },
  {
    id: 3,
    Title: "Can we add our own fields?",
    Content: "Yes. Add fields of eleven types to a form, mark them mandatory, give them help text, and group them on a tab of their own.",
  },
  {
    id: 4,
    Title: "Can each team see different columns?",
    Content: "Yes. Save a view with the columns and filters you need, keep it private or share it, and set it as your default.",
  },
  {
    id: 5,
    Title: "Can employees use it in their own language?",
    Content: "Yes, employee self-service works in nine Indian languages and English. Each person picks their own, with a default per location.",
  },
  {
    id: 6,
    Title: "Can we build our own forms?",
    Content: "Yes. Design a form with your own fields and sections, and send it through a workflow for approval.",
  },
];

export const CustomizationsCtaData = [
  {
    id: 1,
    title: "Show us what's different about your company.",
    description: "We'll set that part up in the demo. Everything else is already there.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
