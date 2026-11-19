import { Alertnotification as ImagesUrl_Alertnotification, video as ImagesUrl_video } from "../../assets/images";

/*
 * Mobile push is new: show its section, chip and FAQ only once push is live for
 * clients (it needs Workflow v2 / Notifications v2; existing workflows start
 * with Send push off). Set to true to publish them.
 */
export const SHOW_MOBILE_PUSH = true;

const released = (list) => list.filter((item) => SHOW_MOBILE_PUSH || !item.isPush);

export const AlertnotificationMeta = {
  title: "Alerts & Notifications — Smart Business Alerts | Qkrbiz",
  description: "Stay on top of your business with real-time alerts and notifications from Qkrbiz for HR, Payroll, and Sales events.",
};

export const AlertnotifiHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: ImagesUrl_video.AlertNotificationRepeat,
    imgUrl: ImagesUrl_Alertnotification.AlertsNotificationHeader,
    alt: "Qkrbiz alerts and notifications",
    title: "Alerts &amp; Notifications",
    subTitle: "The right people hear about it, and nobody has to send the email.",
    desc: "Notifications go out the moment something happens. Alerts check your records on a schedule, then remind, report and escalate until someone acts.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── Which one to use ──────────────────────────────────────────────────
export const AlertTypesData = {
  eyebrow: "Which one to use",
  title: "Something happened, or something is due?",
  lead: "<span>Three kinds of message, each set up once and sent on its own.</span>",
  types: [
    {
      id: 1,
      label: "Something just happened",
      title: "Notification",
      desc: "Sent the moment a system event happens: attendance is locked, salaries are published, a document is acknowledged.",
      chips: released([{ text: "Email" }, { text: "SMS" }, { text: "Mobile push · new", isPush: true }]).map((c) => c.text),
    },
    {
      id: 2,
      label: "A record needs attention",
      title: "Record reminder",
      desc: "One email for each record that matches, such as each deposit nearing its end date or each overdue task.",
      chips: ["On a schedule", "Escalates"],
    },
    {
      id: 3,
      label: "Everyone needs the list",
      title: "Scheduled report",
      desc: "One email with a table of every record that matches, such as this week's new joiners or unbilled orders.",
      chips: ["On a schedule", "Per person"],
    },
  ],
  band: {
    text: "Asking someone to approve, and telling them the decision, are the workflow's own emails.",
    link: { to: "/workflow", text: "Workflow Automation →" },
  },
};

// ── Question-led sections ─────────────────────────────────────────────
const AllAlertSections = [
  {
    id: "notifications",
    eyebrow: "Notifications",
    title: "“The month is locked. Who needs to know?”",
    imgUrl: ImagesUrl_Alertnotification.eventNotifications,
    imgWidth: 1152,
    imgHeight: 608,
    alt: "Two notifications for the attendance locked event: a standard email to every employee, and a customised SMS for workers only",
    points: [
      "Send on <strong>system events</strong>: check-in and check-out, attendance lock, publishing, acknowledgements, automatic rejections.",
      "Give one event <strong>several notifications</strong>, each with its own criteria, so field staff and office staff hear different things.",
      "Pick recipients from the record, such as the employee or their manager, from <strong>email groups</strong>, or with <strong>rule-based recipients</strong> that change with the record's values.",
      "Send an <strong>SMS</strong> alongside the email where it helps.",
    ],
  },
  {
    id: "mobile",
    isPush: true,
    eyebrow: "Mobile notifications",
    badge: "New",
    title: "“I'm on site all day. I don't open email.”",
    imgUrl: ImagesUrl_Alertnotification.mobilePush,
    imgWidth: 1152,
    imgHeight: 1312,
    alt: "Push notifications on a phone for a leave request, an expense correction and locked attendance, with the workflow's Send push settings",
    points: [
      "Workflow and notification emails can also arrive as a <strong>push on the qkrbiz mobile app</strong>, on Android and iPhone.",
      "A push follows an email that is already set up, so there is <strong>nothing new to build</strong>: tick Send push and the same event reaches the phone.",
      "For workflows, pick <strong>which events push</strong>: a new approver, final approval, rejection, correction, reminder, escalation and more.",
      "It goes only to the <strong>phone registered to that person</strong>, once per event, and switching it off takes effect straight away.",
    ],
  },
  {
    id: "reminders",
    eyebrow: "Record reminders",
    title: "“This deposit's validity ends in 15 days. Who's on it?”",
    imgUrl: ImagesUrl_Alertnotification.recordReminders,
    imgWidth: 1152,
    imgHeight: 734,
    alt: "An escalated reminder email to the Finance Head, tagged level 2 and urgent, with the deposit details",
    points: [
      "Conditions on the record's own fields, including dates <strong>before, after or between</strong> so many days from today.",
      "<strong>Escalation levels</strong>, each with a label, a delay and its own recipients.",
      "<strong>One message</strong> serves every level. Escalated copies carry the level in the subject and a line saying it was escalated.",
      "Every alert carries a <strong>purpose</strong>, so whoever opens it later knows why it exists.",
    ],
  },
  {
    id: "reports",
    eyebrow: "Scheduled reports",
    title: "“Every Monday, each manager gets their own team's list.”",
    imgUrl: ImagesUrl_Alertnotification.scheduledReports,
    imgWidth: 1152,
    imgHeight: 660,
    alt: "A weekly report email to a manager listing birthdays and work anniversaries in their team this week",
    points: [
      "One email with a <strong>table of every matching record</strong>, in the columns you choose.",
      "<strong>Group by a person</strong>, such as the reporting manager, and each one gets only their own rows.",
      "Copy each person's own manager <strong>if you want to</strong>. New reports start without it.",
    ],
  },
  {
    id: "library",
    eyebrow: "Ready-made library",
    title: "“We don't want to write fifty emails from scratch.”",
    imgUrl: ImagesUrl_Alertnotification.alertLibrary,
    imgWidth: 1152,
    imgHeight: 688,
    alt: "The alert library with ready-made alerts to add, one marked update available",
    points: [
      "Add <strong>ready-made alerts and notifications</strong> for HR, tenders, sales billing, tasks and field visits.",
      "Library alerts arrive <strong>switched off</strong>. Nothing sends until you choose who gets it.",
      "Each one shows whether it is <strong>Standard, Customised</strong> or has an <strong>update available</strong>.",
      "Take newer standard wording and <strong>keep your recipients and criteria</strong>.",
    ],
  },
  {
    id: "extra",
    eyebrow: "Additional recipients",
    title: "“Our auditor needs every exit notification until March.”",
    imgUrl: ImagesUrl_Alertnotification.additionalRecipients,
    imgWidth: 1152,
    imgHeight: 646,
    alt: "Additional notification recipients: an auditor added to exit notifications, a manager removed during leave, and an expired rule",
    points: [
      "<strong>Add or remove</strong> a person across all notifications, one application, one form, or the notifications you choose.",
      "Give the rule <strong>From and To dates</strong> and a reason, and it starts and stops on its own.",
      "Each rule shows whether it is <strong>Active, Scheduled, Expired</strong> or switched off.",
    ],
  },
];

export const AlertSections = released(AllAlertSections);

// ── Before anything is sent ───────────────────────────────────────────
export const AlertChecksData = {
  eyebrow: "Before anything is sent",
  title: "Every notification goes through the same checks, in this order.",
  steps: [
    { id: 1, title: "Match", desc: "Find the notifications set up for this event." },
    { id: 2, title: "Criteria", desc: "Keep only those whose criteria the record meets." },
    { id: 3, title: "Recipients", desc: "Work out the people from the record, groups and rules." },
    { id: 4, title: "Additional recipients", desc: "Apply the rules in date. A removal beats an addition." },
    { id: 5, title: "Clean-up", desc: "Drop people who have left, and anyone listed twice." },
    { id: 6, title: "Send once", desc: "A double click inside a minute doesn't send it twice." },
  ],
};

// ── Across qkrbiz ─────────────────────────────────────────────────────
export const AlertAppsData = {
  eyebrow: "Across qkrbiz",
  title: "Reminders for every app, not just HR.",
  apps: [
    { id: 1, product: "QkrHR", desc: "Probation ending, new joiners, missing time-out, birthdays" },
    { id: 2, product: "QkrTenders", desc: "Deposit validity, deposit documents" },
    { id: 3, product: "QkrSales", desc: "Billing due on period-based and milestone orders" },
    { id: 4, product: "QkrTasks", desc: "Recurring tasks not done" },
    { id: 5, product: "QkrVisit", desc: "Check-ins far from the customer's location" },
    { id: 6, product: "QkrProjects", desc: "Work milestones coming due" },
  ],
};

const AllAlertFAQ = [
  {
    id: 1,
    Title: "Where do approval emails come from?",
    Content: "From the <a href='/workflow'>workflow</a>. Asking someone to approve, reminding them and telling the requester the outcome are workflow emails, set up with the workflow.",
  },
  {
    id: 2,
    Title: "Can one event send different emails to different people?",
    Content: "Yes. Add several notifications to the event and give each its own criteria and recipients.",
  },
  {
    id: 3,
    Title: "Can each manager get only their own team's list?",
    Content: "Yes. Group a scheduled report by the reporting manager and each manager gets only their rows.",
  },
  {
    id: 4,
    Title: "Can we send SMS?",
    Content: "Yes. A notification can send an SMS as well as an email.",
  },
  {
    id: 5,
    isPush: true,
    Title: "Do notifications reach the phone?",
    Content: "Yes, as a push on the qkrbiz mobile app. Tick Send push on a notification or workflow, and the person gets it on the phone registered to them.",
  },
  {
    id: 6,
    Title: "Will library alerts start sending on their own?",
    Content: "No. They arrive switched off, and you choose the recipients before turning them on.",
  },
  {
    id: 7,
    Title: "Can we add someone for a few months only?",
    Content: "Yes. An additional-recipient rule takes From and To dates, and starts and stops on its own.",
  },
  {
    id: 8,
    Title: "What if a recipient has left the company?",
    Content: "People who have left are dropped from the recipients before anything is sent.",
  },
  {
    id: 9,
    Title: "What happens when we edit a standard notification?",
    Content: "It is marked Customised. When a newer standard version comes, you can compare and take its wording, and your recipients and criteria stay.",
  },
];

export const AlertFAQ = released(AllAlertFAQ);

export const AlertCtaData = [
  {
    id: 1,
    title: "Bring the email you send by hand every week.",
    description: "We'll turn it into an alert in the demo, with your own records.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
