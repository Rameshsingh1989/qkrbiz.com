import { video as ImagesUrl_video, workflow as ImagesUrl_workflow } from "../../assets/images";

export const WorkflowMeta = {
  title: "No-Code Workflow Automation Engine | Qkrbiz",
  description: "Automate repetitive HR and business workflows with Qkrbiz's powerful workflow automation engine. Save time and reduce errors.",
};

export const WorkflowsHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: ImagesUrl_video.AutomateWorkflowHeaderVideo,
    imgUrl: ImagesUrl_workflow.AutomateWorkflowHeader,
    alt: "Qkrbiz workflow automation for approvals across apps",
    title: "Workflow Automation",
    subTitle: "One approval engine for every app you run.",
    desc: "Leave, expense claims, sales orders, tender deposits and new projects all follow rules you set once: who decides, in what order, and what happens when nobody does.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── Across qkrbiz ─────────────────────────────────────────────────────
export const WorkflowAppsData = {
  eyebrow: "Across qkrbiz",
  title: "Every request that needs a yes.",
  lead: "<span>The same stages, emails, reminders and history, whichever app the request starts in.</span>",
  apps: [
    {
      id: 1,
      product: "QkrHR",
      title: "People requests",
      chips: ["Leave", "Attendance regularisation", "Comp-off", "Work from home", "On duty", "Overtime", "Shift change", "Exits", "Probation", "Job changes", "Letters", "Loans", "Tax declarations", "Goals"],
      link: { to: "/hrms-software/hr-workflow-management", text: "HR workflows in detail →" },
    },
    { id: 2, product: "QkrExpense", title: "Money out", chips: ["Expense claims", "Advances", "Travel bookings", "Ticket cancellations", "Trips"] },
    { id: 3, product: "QkrTenders", title: "Deposits and orders", chips: ["Deposit requests", "Cancel a deposit", "Write-off", "Invoke", "Forfeit", "Sales orders", "Order amendments"] },
    { id: 4, product: "QkrSales", title: "Billing exceptions", chips: ["Invoice write-off", "Liquidated damages"] },
    { id: 5, product: "QkrProjects", title: "Project start and stop", chips: ["New project", "Project without an order", "Verify project", "Cancel project"] },
    { id: 6, product: "Your own forms", title: "Custom forms", desc: "A form you build can go for approval through the same engine.", highlight: true },
  ],
};

// ── Question-led sections ─────────────────────────────────────────────
export const WorkflowSections = [
  {
    id: "conditions",
    eyebrow: "Conditions",
    title: "“Large orders need the Finance Head. Small ones don't.”",
    imgUrl: ImagesUrl_workflow.workflowConditions,
    imgWidth: 1152,
    imgHeight: 704,
    alt: "Three sales order workflows chosen by their conditions, and an order of ₹72,400 matched to the one for orders above ₹25,000",
    points: [
      "Give one request type <strong>several workflows</strong>. The request's own amount, department, location or type picks which one it follows.",
      "Each stage says <strong>how many must agree</strong>: the first to respond, everyone, or a set number.",
      "<strong>Copy people on the final approval</strong>, such as accounts on a large order.",
    ],
  },
  {
    id: "roles",
    eyebrow: "Functional roles",
    title: "“Our Finance Head changed. Do we edit every workflow?”",
    imgUrl: ImagesUrl_workflow.functionalRoles,
    imgWidth: 1152,
    imgHeight: 730,
    alt: "Functional roles mapped to employees, with a change of Finance Head waiting to be saved",
    points: [
      "Map a <strong>key position</strong>, like Finance Head or Bid Manager, to whoever holds it today.",
      "Workflows route to the position, so <strong>one change moves every approval</strong> to the new person, in every app.",
      "Each role keeps a <strong>history</strong> of who held it and when.",
    ],
  },
  {
    id: "emails",
    eyebrow: "Emails people act on",
    title: "“I approve from my inbox. Don't make me log in.”",
    imgUrl: ImagesUrl_workflow.approvalEmails,
    imgWidth: 1152,
    imgHeight: 996,
    alt: "An approval email for a tender deposit with the tender, amount, due date and requester, and an Open the request button",
    points: [
      "Each stage sends an email with the details that matter and a button that <strong>opens the request directly</strong>.",
      "Separate emails for <strong>assigned, reminder, approved, sent back and rejected</strong>, each one a template you can edit.",
      "One footer for every legal entity, set once.",
    ],
  },
  {
    id: "time",
    eyebrow: "Turnaround time",
    title: "“The advance has been waiting three days.”",
    imgUrl: ImagesUrl_workflow.turnaroundTime,
    imgWidth: 1152,
    imgHeight: 688,
    alt: "Stage settings for an advance workflow: two days to act, then a reminder, then the request moves to the approver's manager",
    points: [
      "Each stage has <strong>its own clock</strong>. When it runs out, the approver is reminded, and after that the request goes to their manager.",
      "Nothing is approved just because time passed, <strong>unless you choose that</strong> for a stage.",
      "The request keeps the trail: <strong>who held it, for how long</strong>, and what they said.",
    ],
  },
  {
    id: "exits",
    eyebrow: "When an approver leaves",
    title: "“Neha leaves on Friday. What's waiting on her?”",
    imgUrl: ImagesUrl_workflow.approverExit,
    imgWidth: 1152,
    imgHeight: 986,
    alt: "Exit checklist for an approver: requests waiting on their approval, the functional role they hold, and workflows that name them",
    points: [
      "Her exit shows <strong>every request waiting on her approval</strong>, with one button to move them all to a new manager.",
      "It also lists the <strong>functional roles she holds</strong> and the <strong>workflows that name her</strong>, so you hand them over before her last day.",
      "Anything not handed over is <strong>refused with a clear message</strong>, never sent to someone who has gone.",
    ],
  },
];

// ── Built in ──────────────────────────────────────────────────────────
export const WorkflowSafeData = {
  eyebrow: "Built in",
  title: "Rules the engine keeps for you.",
  items: [
    { id: 1, title: "No orphan requests", desc: "A request with no matching workflow tells the person which type needs one and who can set it up." },
    { id: 2, title: "No self-approval", desc: "The person who raised a request never decides it, whichever stage they sit on." },
    { id: 3, title: "No double asks", desc: "Someone who appears at two stages decides once, at the later stage." },
    { id: 4, title: "No silent auto-approval", desc: "Deciding on inaction stays off until you switch it on for a stage." },
    { id: 5, title: "No moving goalposts", desc: "Edit a workflow and requests already under way keep the rules they started with." },
    { id: 6, title: "No decisions in your name", desc: "When the system closes a request, the history says the system did it." },
  ],
  band: {
    text: "Workflows ask people to decide. To tell people what happened, or remind them on a schedule, use alerts and notifications.",
    link: { to: "/alert-notification", text: "Alerts & Notifications →" },
  },
};

export const WorkflowFAQ = [
  {
    id: 1,
    Title: "Which apps use workflows?",
    Content: "QkrHR, QkrExpense, QkrTenders, QkrSales and QkrProjects share one engine, and custom forms can use it too.",
  },
  {
    id: 2,
    Title: "Is each app set up differently?",
    Content: "No. Every request type gets a workflow built the same way, with the same stages, conditions, turnaround times and emails.",
  },
  {
    id: 3,
    Title: "What is a functional role?",
    Content: "A named position, like Finance Head, that points to whoever holds it today. Approvals go to the position, so a change of person is one edit.",
  },
  {
    id: 4,
    Title: "What happens to approvals when someone leaves?",
    Content: "Their exit lists the requests waiting on them, the roles they hold and the workflows that name them, with a button to hand over each one.",
  },
  {
    id: 5,
    Title: "Can we copy someone on the final approval?",
    Content: "Yes. Add the people to copy on the final approval email of any workflow.",
  },
  {
    id: 6,
    Title: "Can we change the email wording?",
    Content: "Yes. The assigned, reminder, approved, sent back and rejected emails are templates you can edit, with one footer for every legal entity.",
  },
  {
    id: 7,
    Title: "Do approvers need to log in first?",
    Content: "The button in the email opens the request directly, with every detail in front of them before they decide.",
  },
  {
    id: 8,
    Title: "Can we test a workflow first?",
    Content: "Yes. A test run shows which workflow a sample request would follow and who would be asked at each stage.",
  },
];

export const WorkflowCtaData = [
  {
    id: 1,
    title: "Bring the approval you chase most.",
    description: "We'll set it up with you in the demo, whichever app it belongs to.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
