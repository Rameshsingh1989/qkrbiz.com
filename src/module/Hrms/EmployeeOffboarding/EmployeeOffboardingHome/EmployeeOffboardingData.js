import { employeeOffboarding as ImagesUrl_offboarding } from "../../../../assets/images";

export const EmployeeOffboardingHomeMeta = {
  title: "Employee Offboarding Software | Exit to F&F Settlement | QkrHR",
  description: "From resignation to F&F settlement, QkrHR automates clearances, asset recovery, exit interviews and relieving letters, so every exit is smooth and compliant.",
};

export const OffboardingHeadData = [
    {   
      id:1,
      videoUrl:"",
      youTubeVideoUrl: "bf3U8zW1dxc",
      imgUrl:ImagesUrl_offboarding.offboardingHeader,
      alt:"Employee offboarding software",
      title:"Employee offboarding software",
      subTitle:"<span>From Resignation to </span><br/><span class='text-gradient'>Full & Final Settlement — In One Flow</span>",
      desc:"QkrHR runs every exit end to end: approvals, notice tracking, IT/Finance/Admin clearances, asset recovery and F&F settlement. Each step has an owner, a due date and an audit trail, so nothing gets missed.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
    }
];

export const OffboardingCoversData = {
  subTitle: "The Problem",
  title: "What Employee Offboarding<br/><span class='text-gradient'>Software Covers in QkrHR</span>",
  description: "Employee offboarding software manages everything that happens when someone leaves: the exit record, approvals, notice, feedback, clearance and the final settlement. In QkrHR these six parts are one flow, not six trackers.",
  items: [
    { 
      id: 1, 
      icon: ImagesUrl_offboarding.exitApplicationIcon, 
      title: "Exit applications", 
      description: "Raised by the employee, the manager or HR, with the reason and intended last working day." },
    { 
      id: 2, 
      icon: ImagesUrl_offboarding.approvalsWithdrawalsIcon, 
      title: "Approvals and withdrawals", 
      description: "Your approval chain runs on every resignation. Employees can withdraw where policy allows." },
    { 
      id: 3, 
      icon: ImagesUrl_offboarding.noticePeriodIcon, 
      title: "Notice period tracking", 
      description: "Everyone serving notice on one dashboard, with leave rules applied automatically." },
    { 
      id: 4, 
      icon: ImagesUrl_offboarding.exitInterviewIcon, 
      title: "Exit interviews", 
      description: "Sent on time, kept confidential, and grouped into attrition trends." },
    { 
      id: 5, 
      icon: ImagesUrl_offboarding.clearanceChecklistIcon, 
      title: "Clearance checklist", 
      description: "IT, Finance, Admin and managers each get their tasks, owners and due dates." },
    { 
      id: 6, 
      icon: ImagesUrl_offboarding.fullFinalSettlementIcon, 
      title: "Full &amp; final settlement", 
      description: "Everything owed both ways, netted to one figure and paid on the legal clock." },
  ],
};

export const ExitTypesData = {
  subTitle: "Payroll & Compliance",
  title: "Two Ways an Employee Leaves.<br/><span class='text-gradient'>QkrHR Handles Both.</span>",
  description: "Not every exit comes with a resignation letter. QkrHR gives HR one flow for planned exits with notice and another for people who have already gone, so the record is never forced into the wrong shape.",
  types: [
    {
      id: "immediate",
      title: "Immediate exit",
      badge: "No approval needed",
      description: "The employee has already left, absconded or was let go on the spot. HR records the exit directly.",
      steps: [
        { id: 1, title: "Employee leaves", text: "No notice in the system" },
        { id: 2, title: "HR processes exit", text: "One stop, no workflow" },
        { id: 3, title: "LWD captured", text: "As part of the exit" },
      ],
    },
    {
      id: "notice",
      title: "Notice Period Exit",
      badge: "Approval workflow",
      description: "The employee resigns and serves notice. QkrHR runs your approval chain, tracks the notice and HR confirms the last working day.",
      steps: [
        { id: 1, title: "Exit application", text: "By employee, manager or HR" },
        { id: 2, title: "Approved & notice served", text: "Leave rules applied automatically" },
        { id: 3, title: "LWD confirmed", text: "HR confirms the actual last day" },
      ],
    },
  ],
};

// Alternating text + screenshot rows. `id` doubles as the in-page anchor.
export const OffboardingFeatureData = [
  {
    id: "exit-applications",
    title: "Exit Applications From the Employee, the Manager or HR",
    description: "A resignation usually starts in a conversation, not a form. QkrHR gives you three ways to put it on record, so the exit begins the same way whoever raises it.",
    points: [
      "<span class='fn-sb'>Self-resignation</span> from the employee's own portal or mobile app.",
      "<span class='fn-sb'>Manager-initiated</span> when the employee has resigned verbally but not logged it.",
      "<span class='fn-sb'>HR-initiated</span> for terminations, role eliminations and contract ends.",
      "The intended last working day is checked against the notice period set for the legal entity, such as 30, 60 or 90 days.",
      "A categorised reason for leaving, notes and attachments like a resignation letter are captured on the same form.",
    ],
    imgUrl: ImagesUrl_offboarding.exitApplications,
    alt: "Exit application form raised by employee, manager or HR in QkrHR",
  },
  {
    id: "resignation-approvals",
    title: "Resignation Approvals That Keep Moving",
    description: "Every exit application runs through the approval chain you set up, typically reporting manager, then department head, then HR. Each approver can approve, ask for changes or reject, and the employee can see exactly who has it.",
    points: [
      "Live status for the employee: Pending, Under Review, Approved, On Hold or Rejected.",
      "Withdrawal before approval or before notice begins, where your policy allows it.",
      "Leave and work-from-home requests dated after the planned exit date are rejected automatically, with a system remark on each.",
      "Leave types you mark as not allowed during notice are blocked from the day notice starts.",
    ],
    imgUrl: ImagesUrl_offboarding.resignationApprovals,
    alt: "Employee exits list and exit application approval status in QkrHR",
  },
  {
    id: "notice-period",
    title: "Everyone Serving Notice, on One Dashboard",
    description: "The Team Dashboard shows two queues HR and managers need during any exit: resignations waiting for a decision, and people already serving notice with their last working day. Replacement hiring and handovers can start from the same screen.",
    points: [
      "<span class='fn-sb'>Pending Exit Approvals</span> lists each application with the intended last day and where it sits in approval.",
      "<span class='fn-sb'>In Notice Period</span> lists everyone serving notice, their last working day and acceptance status.",
      "Notices to approvers go out at each stage, and employee notifications follow the templates you configure.",
    ],
    imgUrl: ImagesUrl_offboarding.noticePeriodDashboard,
    alt: "Exit dashboard with pending exit approvals and employees in notice period",
  },
  {
    id: "exit-interviews",
    title: "Exit Interviews That Reach the Right People",
    description: "People leaving are often the most candid voices in the company. QkrHR sends the exit interview automatically, for example 15 days before the planned exit date, and keeps the answers where only HR can read them unless you decide otherwise.",
    points: [
      "<span class='fn-sb'>Submit-only form</span> when exit interviews are for trend data.",
      "<span class='fn-sb'>Review form</span> that routes each response to reviewers, such as the reporting manager and HR head, who can approve or ask for clarification but cannot edit answers.",
      "Build your own questions: reason for leaving, manager, growth, pay, work environment, suggestions.",
      "Responses stay on the employee record after the profile is archived and roll up into exit-reason trends by department.",
    ],
    imgUrl: ImagesUrl_offboarding.exitInterviews,
    alt: "Exit interview form with reasons for leaving and rating questions",
  },
  {
    id: "clearance",
    title: "Exit Clearance Checklist Across Every Department",
    description: "A clean exit needs IT, Finance, Admin and the manager to each finish their part. QkrHR applies a clearance checklist to every approved exit, gives each task an owner and a due date, and puts one process owner in charge of chasing it.",
    points: [
      "Due dates anchor to the day the exit was notified, the planned exit date or the last working day, task by task.",
      "Task status at a glance: Not Due, Due, Overdue or Completed.",
      "Assignees attach proof: signed handovers, asset receipts, no-dues certificates.",
      "Unreturned assets and open advances flow into the full &amp; final settlement as deductions.",
    ],
    imgUrl: ImagesUrl_offboarding.settlementDeadlineTracker,
    alt: "Settlement and wage deadline tracker with gratuity and recoverable settlements",
  },
  {
    id: "last-working-day",
    title: "Confirm the Last Working Day Once, and Everything Follows",
    description: "When the notice is served and the date has passed, HR confirms the actual last working day. It defaults to the planned date and can be adjusted if the final day moved. That single confirmation is what closes the employment record.",
    points: [
      "The employee's status moves to Exited and drops out of active lists and assignment dropdowns.",
      "Clearance can be signed off, with open tasks still visible until resolved.",
      "The full &amp; final settlement opens for processing.",
      "Exit notifications go to the manager, HR, IT and any followers you set.",
    ],
    imgUrl: ImagesUrl_offboarding.confirmLastWorkingDay,
    alt: "Full and final settlement list with F&F status history and actions",
  },
  {
    id: "full-final-settlement",
    title: "Hand Over to Full and Final Settlement Automatically",
    description: "Offboarding doesn't end at the last working day. In QkrHR the full &amp; final settlement opens on its own the moment the exit is confirmed, already carrying what offboarding found: notice served, leave left, assets not returned and advances still open.",
    points: [
      "Notice shortfall comes straight from the exit record.",
      "Unreturned assets from clearance become asset deductions.",
      "Open expense reports and advances are flagged before the settlement can be processed.",
      "The two-working-day wage due date is shown from the first day.",
    ],
    imgUrl: ImagesUrl_offboarding.fullFinalStatus,
    alt: "Settlement and wage deadline tracker showing due and overdue F&F settlements",
    linkText: "Explore full & final settlement software",
    linkUrl: "/payroll-software",
  },
];

export const WageDeadlineData = {
  stat: "2 days",
  title: "Why the Exit Flow Has to Finish on Time",
  description: "Under Section 17(2) of the Code on Wages, 2019, in force since 21 November 2025, wages due to a leaving employee are payable within two working days. Clearance and approvals that drag on past the last day now put that deadline at risk. This is a summary, not legal advice.",
  linkText: "See the F&F rules under the Labour Codes",
  linkUrl: "/hrms-software/indias-labour-code-2025-salary-impact",
};

export const WhyQkrhrData = {
  title: "Why HR Teams <span class='text-gradient'>Run Exits on QkrHR</span>",
  items: [
    { 
      id: 1, 
      icon: ImagesUrl_offboarding.oneFlowStartFinish, 
      title: "One flow, start to finish", 
      description: "Application, approval, notice, clearance, last day and settlement share one record. No step starts from a spreadsheet." },
    { 
      id: 2, 
      icon: ImagesUrl_offboarding.builtForRealExits, 
      title: "Built for real exits", 
      description: "Planned resignations and sudden departures each have a flow that fits, and both end the same way." },
    { 
      id: 3, 
      icon: ImagesUrl_offboarding.leaveRulesApplied, 
      title: "Leave rules applied for you", 
      description: "Requests beyond the exit date and leave not allowed during notice are rejected without HR checking each one." },
    { 
      id: 4, 
      icon: ImagesUrl_offboarding.deadlinesScreen, 
      title: "Deadlines on the screen", 
      description: "Wage and gratuity due dates show on every settlement and in Pending Actions." },
    { 
      id: 5, 
      icon: ImagesUrl_offboarding.connectedPayrollExpenses, 
      title: "Connected to payroll and expenses", 
      description: "Salary, loans, advances, claims and assets come into the settlement from their own modules, not retyped." },
    { 
      id: 6, 
      icon: ImagesUrl_offboarding.anAuditTrail, 
      title: "An audit trail for every exit", 
      description: "Who approved, who cleared what, who waived notice and why, and every status change on the settlement." },
  ],
};

export const OffboardingCtaData = [
  {
    id: 1,
    title: "See an Employee Exit <span class='text-gradient'>Run End to End</span>",
    description: "Bring one of your recent exits. We'll walk it through QkrHR, from the resignation to the final settlement, on your own policies.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Compare the Options", url: "/hrms-software/qkrhr-pricing", type: "cta-btn-outline" },
    ],
  },
];

export const OffboardingFaq = [
  {
    Title: "What is employee offboarding software?",
    Content: "Employee offboarding software manages everything that happens when someone leaves a company: the resignation or termination record, approvals, the notice period, the exit interview, clearance from each department, the last working day and the full and final settlement. In QkrHR these steps run as one connected flow, so each step starts from the data the previous one recorded.",
  },
  {
    Title: "Can HR process an exit when the employee has already left?",
    Content: "Yes. QkrHR has an Immediate Exit flow for abrupt departures. HR processes the exit directly, with no exit application and no approval workflow, and the last working day is captured as part of the exit itself. Clearance and full and final settlement then follow exactly as they do for a planned exit.",
  },
  {
    Title: "Can an employee withdraw a resignation in QkrHR?",
    Content: "Yes, where your policy allows it. An employee can withdraw the exit application before approval is complete or before the notice period begins. After that point, changes go through HR. Once HR confirms the last working day, the exit is final and reversing it needs a re-hire or reinstatement.",
  },
  {
    Title: "How does QkrHR handle leave during the notice period?",
    Content: "When an exit is recorded, QkrHR rejects the employee's pending and approved leave and work-from-home requests dated after the planned exit date. From the start of the notice period, leave types you have marked as not allowed during notice are rejected as well. Each affected request carries a system remark so HR can see why it changed.",
  },
  {
    Title: "What does the clearance checklist cover?",
    Content: "The clearance checklist assigns tasks to each department involved in an exit: IT for email, VPN and laptop return, Finance for advances, loans and no-dues, Admin for ID and access cards, the reporting manager for knowledge transfer, and HR for documents. Each task has an owner, a due date tied to an exit date, a status, and can carry proof such as a signed handover.",
  },
  {
    Title: "How does offboarding connect to the full and final settlement?",
    Content: "When HR confirms the last working day, QkrHR opens the full and final settlement for that employee automatically. It starts from what offboarding recorded: the notice days served, unreturned assets from clearance, and open expense reports or advances. The settlement then nets salary, leave, gratuity and recoveries into one figure, with the wage due date shown. <a href='/payroll-software'>See how QkrHR handles full and final settlement</a>.",
  },
  {
    Title: "Who can see exit interview responses?",
    Content: "By default, exit interview responses are visible to HR only. Managers do not see their direct reports' feedback unless you grant that access through roles and permissions. Responses stay on the employee record after the profile is archived, and can be grouped by department or reason to show attrition trends.",
  },
];
