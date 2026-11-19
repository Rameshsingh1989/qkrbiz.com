import { hrWorkflow as ImagesUrl_hrWorkflow } from "../../../../assets/images";

export const WorkflowsMeta = {
  title: "HR Workflow Automation & Approval Software | QkrHR",
  description: "Automate HR approvals with QkrHR: multi-level, condition-based workflows with reminders, escalation, delegation and a full history of every decision.",
};

export const WorkflowsHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_hrWorkflow.workflowHeader,
    alt: "QkrHR leave approval for Ananya Rao with her leave balance, the team calendar, an overlap warning, and Send back, Reject and Approve buttons",
    title: "HR Workflow Management Software",
    subTitle: "Approvals that move on their own and are decided with the full picture",
    desc: "Route every request to the right people, chase the slow ones automatically, and give approvers the balance, history and attachments they need to decide in seconds.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// Bento tiles under the logos. The first tile is the large one with the drawn stage chain.
export const WorkflowsTiles = [
  {
    id: 1,
    tag: "Workflow designer",
    title: "Design a workflow in minutes, and test it before it goes live.",
    desc: "Conditions decide which workflow a request follows. Its stages and approvers sit on one screen, and the simulator shows exactly who would be asked.",
  },
  { id: 2, title: "Ready-made workflows", desc: "Start from a library covering leave, attendance, expenses, letters and forms, then edit it to fit." },
  { id: 3, title: "Chases itself", desc: "Reminders at the turnaround time, then escalation up the reporting line.", note: "Escalated to skip-level · day 4" },
  { id: 4, title: "Fast where it's safe", desc: "Clear a week of leave in one pass, or walk the queue with Approve & next. Regularisation is approved one request at a time, on purpose." },
  { id: 5, title: "Delegate while away", desc: "Hand approvals to a colleague for set dates. They're told by email, and HR can reassign stuck items." },
  { id: 6, title: "Every decision on record", desc: "Each stage, approver, remark and time in one history, and approver remarks appear in the outcome email." },
];

/*
 * One section per question an approver or HR team asks. The visual is a .webp image
 * (imgUrl + alt): the product card on a paper-cut background scene.
 */
export const WorkflowsSections = [
  {
    id: "design",
    eyebrow: "Routing",
    title: "“Who should approve this, and in what order?”",
    points: [
      { text: "Pick approvers by <strong>reporting manager, role, named employee</strong> or a person on the request, such as the project manager." },
      { text: "Several approvers on a stage: <strong>any one, all, or N of M</strong> must agree." },
      { text: "<strong>Conditions</strong> on department, location, type, amount and more decide which workflow a request follows, so a large expense can take a longer route than a small one. Renaming a department never quietly breaks a rule." },
      { text: "<strong>Same approver at more than one stage?</strong> They approve once, at the highest stage, and are skipped at the earlier ones." },
      { text: "Requesters never approve their own requests." },
    ],
    imgUrl: ImagesUrl_hrWorkflow.workflowDesignVisual,
    imgWidth: 1272,
    imgHeight: 847,
    alt: "The workflow simulator for an expense claim: the matched workflow and who would be asked at each stage, with one approver skipped at stage 1 because she approves at stage 4",
  },
  {
    id: "escalation",
    eyebrow: "Reminders & escalation",
    title: "“It's been sitting with one manager for four days.”",
    points: [
      { text: "Set a <strong>turnaround time</strong> per stage. Reminders go first, and then the request escalates up the reporting line." },
      { text: "Optional <strong>auto-decide on inaction</strong>, off by default, because consequential actions are never automatic." },
      { text: "Managers see what's pending with them and with their team, and requesters can be emailed at each decision, with a link to their request." },
    ],
    imgUrl: ImagesUrl_hrWorkflow.workflowEscalationVisual,
    imgWidth: 1272,
    imgHeight: 608,
    alt: "A regularisation request that was reminded on day 2, escalated on day 4 and then approved",
  },
  {
    id: "decide",
    eyebrow: "Informed decisions",
    title: "“I need to see the full picture before I approve.”",
    points: [
      { text: "Approval screens carry the context: balance and team coverage for <a href='/hrms-software/leave-management-system'>leave</a>, the day's punches and visits beside each <a href='/hrms-software/time-and-attendance-system'>regularisation</a>, and policy limits for <a href='/hrms-software/employee-expense-management'>expenses</a>." },
      { text: "<strong>Approve &amp; next</strong> works through a queue, and <strong>bulk approve</strong> clears leave in one go." },
      { text: "Regularisation stays <strong>one request at a time</strong>, with actual, asked-for and resulting attendance side by side, because a rubber-stamped correction credits a day nobody worked." },
      { text: "Simple requests can be approved from the email. Every link opens the right page directly." },
    ],
    imgUrl: ImagesUrl_hrWorkflow.workflowDecideVisual,
    imgWidth: 1272,
    imgHeight: 1139,
    alt: "A regularisation approval: actual attendance absent, plus the regularisation asked for, equals adjusted attendance present, with the reason and the day's logged visit",
  },
  {
    id: "correct",
    eyebrow: "Corrections, withdrawals, delegation",
    title: "“Something's wrong. Don't reject it, get it fixed.”",
    points: [
      { text: "<strong>Send back for correction</strong> with a reason. The requester's link opens their own form, and the resubmission keeps the history." },
      { text: "For regularisation, comp-off credit and expenses, the email states the <strong>date to resubmit by</strong>, worked out from your policy." },
      { text: "<strong>Withdraw</strong> a request before it's decided, where the request type allows it." },
      { text: "<strong>Delegate</strong> approvals for set dates, with the delegate told by email. HR can <strong>reassign</strong> anything stuck." },
    ],
    imgUrl: ImagesUrl_hrWorkflow.workflowCorrectVisual,
    imgWidth: 1272,
    imgHeight: 622,
    alt: "An email saying an expense report was sent back for a missing hotel bill, with a resubmit date, and an active delegation from one approver to another",
  },
];

// One request followed from submission to outcome, shown under the logos.
export const WorkflowsJourney = [
  { id: 1, who: "Employee", title: "Submits", desc: "Raises a regularisation from the app. The rules pick the right approver." },
  { id: 2, who: "Manager", title: "Decides with context", desc: "Actual and asked-for times, the day's punches and the reason on one screen, reached from a reminder email." },
  { id: 3, who: "Manager", title: "Sends it back", desc: "“Please attach the gate log.” The reason goes into the email." },
  { id: 4, who: "Employee", title: "Fixes it", desc: "The link opens their own form, already signed in, with the date to resubmit by." },
  { id: 5, who: "Everyone", title: "Approved, and told", desc: "The outcome email carries the remarks. The full history stays on the request." },
];

export const WorkflowsWhatHappens = [
  { id: 1, when: "An approver is on leave", then: "Their delegate is asked for the dates they set, and is told by email." },
  { id: 2, when: "Nobody acts for days", then: "A reminder, then escalation up the reporting line. It's decided automatically only if you switched that on." },
  { id: 3, when: "An approver leaves the company", then: "HR is shown which approver roles have no active holder, so requests aren't left waiting on someone who's gone." },
  { id: 4, when: "Attendance is locked for payroll", then: "Requests still pending for that month are closed and recorded as the system's decision, never in an approver's name." },
  { id: 5, when: "You change a workflow mid-month", then: "Requests already in flight finish on the rules they started with. New ones follow the new rules." },
  { id: 6, when: "No workflow matches a request", then: "The employee is told who can set it up, instead of the request disappearing." },
  { id: 7, when: "A setting would break a request type's rules", then: "Some rules are fixed: leave, WFH and on duty are rejected and re-applied, never sent back, and letter signatures never escalate or auto-approve." },
  { id: 8, when: "HR raises a request for an employee", then: "It runs through the same workflow, and the history shows who filed it." },
  { id: 9, when: "One person is the approver at two stages", then: "They're asked once, at the highest stage, and the earlier stage is skipped." },
];

export const WorkflowsTools = [
  { id: 1, tag: "Workflows", tone: "info", title: "Ask people to decide", desc: "Stages, conditions, turnaround time and escalation for every request type." },
  { id: 2, tag: "Notifications", tone: "ok", title: "Tell people what happened", desc: "Email and in-app messages on submit, approve, reject and other events, from templates you can edit, with extra recipients." },
  { id: 3, tag: "Alerts", tone: "warn", title: "Remind on a schedule", desc: "“3 days before contract end”, “form not submitted”, and weekly MIS reports by email at up to three levels.", link: { to: "/hrms-software/hr-data-analytics", text: "HR reports →" } },
];

// `to` links a request type to the page that covers it.
export const WorkflowsCovers = [
  { name: "Leave", to: "/hrms-software/leave-management-system" },
  { name: "Short leave" },
  { name: "Work from home" },
  { name: "On duty" },
  { name: "Comp-off" },
  { name: "Attendance regularisation", to: "/hrms-software/time-and-attendance-system" },
  { name: "Shift change", to: "/hrms-software/shift-management-system" },
  { name: "Expenses & advances", to: "/hrms-software/employee-expense-management" },
  { name: "Loans", to: "/payroll-software/loans-advances" },
  { name: "Letters", to: "/hrms-software/hr-document-management-system" },
  { name: "Custom forms", to: "/hrms-software/hr-document-management-system" },
  { name: "Contract renewals", to: "/hrms-software/employee-management" },
  { name: "Promotions & transfers", to: "/hrms-software/employee-management" },
];

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const WorkflowsCtaData = [
  {
    id: 1,
    title: "Bring your messiest approval chain.",
    description: "We'll build it live in the demo and run it through the simulator with you.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];

export const WorkflowsFAQ = [
  {
    id: 1,
    Title: "How many approval levels can we have?",
    Content: "<p>As many stages as your process needs, and each stage can have one approver or several.</p>",
  },
  {
    id: 11,
    Title: "What if the same person is an approver at more than one stage?",
    Content: "<p>They approve once, at the highest stage they appear in, and are skipped at the earlier stages. For example, if a manager is both the reporting manager at stage 1 and the department head at stage 4, the request skips them at stage 1 and asks them at stage 4.</p>",
  },
  {
    id: 2,
    Title: "Can approvals differ by department or amount?",
    Content: "<p>Yes. Each workflow carries conditions on department, location, request type, amount and other fields, and a request follows the workflow whose conditions it meets. Small expenses can take a short route and large ones a longer one.</p>",
  },
  {
    id: 3,
    Title: "What if an approver doesn't act?",
    Content: "<p>Reminders go out at the turnaround time you set, and the request then escalates up the reporting line. Auto-approval on inaction is available but switched off by default.</p>",
  },
  {
    id: 4,
    Title: "Can approvers act from email or mobile?",
    Content: "<p>Yes, from the mobile app for every request, and from email for simple ones. Detailed requests open in the app so the approver sees the full context.</p>",
  },
  {
    id: 5,
    Title: "What happens when an approver is on leave?",
    Content: "<p>They set a delegate for the dates, and the delegate is notified. HR can also reassign pending requests.</p>",
  },
  {
    id: 6,
    Title: "What if an approver leaves the company?",
    Content: "<p>HR is shown which approver roles have no active holder and can reassign them, so requests don't wait on someone who has left.</p>",
  },
  {
    id: 7,
    Title: "Can we change a workflow while requests are pending?",
    Content: "<p>Yes. Requests already in flight finish on the rules they started with, and new requests follow the changed workflow.</p>",
  },
  {
    id: 8,
    Title: "What if no workflow matches a request?",
    Content: "<p>The employee is told who can set one up, so the request never disappears silently.</p>",
  },
  {
    id: 9,
    Title: "Can I test a workflow before it goes live?",
    Content: "<p>Yes. The simulator shows exactly who would be asked for a sample request.</p>",
  },
  {
    id: 10,
    Title: "Is every decision recorded?",
    Content: "<p>Yes. The history shows each stage, approver, decision, remark and time.</p>",
  },
];
