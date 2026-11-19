import { logistics as ImagesUrl_logistics} from "../../../../assets/images";

export const LogisticsMeta = {
  title: "HRMS for Logistics & Field Operations | QkrHR",
  description: "HR and payroll for logistics, delivery and field teams: shift rosters, geo-tagged mobile attendance, trip and mileage claims, overtime and payroll.",
};

export const LogisticsHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_logistics.logisticsHeading,
    alt: "HRMS for Logistics and Field Operations",
    title: "HRMS for Logistics and Field Operations",
    subTitle: "Hub, Delivery and <br/><span class='text-gradient'>Field Staff in One Payroll</span>",
    desc: "Hub staff punch in on biometrics, delivery staff on mobile and field staff at customer sites. Every shift, kilometre and claim is approved before payroll locks.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── The problem ───────────────────────────────────────────────────────
export const ProblemData = [
  {
    badge: "The Problem",
    title: "Where Logistics HR <span class='text-gradient'>Loses Track</span>",
    desc: "",
    List: [
      {
        id: "1",
        icon: ImagesUrl_logistics.threeGroups,
        head: "Three Groups, Three Records",
        desc: "Hub attendance is on a device, drivers report by phone, and technicians fill in a sheet at month-end.",
      },
      {
        id: "2",
        icon: ImagesUrl_logistics.claimsWithoutContext,
        head: "Claims Without Context",
        desc: "Toll, parking and mileage claims arrive with no link to the trip or visit they belong to.",
      },
      {
        id: "3",
        icon: ImagesUrl_logistics.overtime,
        head: "Overtime From Long Shifts",
        desc: "Peak days run long at the hub, and overtime is worked out from memory after payroll closes.",
      },
    ],
  },
];

// ── How it works ──────────────────────────────────────────────────────
export const HowItWorksData = [
  {
    badge: "How It Works",
    title: "How a Logistics Month <span class='text-gradient'>Runs on QkrHR</span>",
    desc: "Each group captures its day its own way; approvals and payroll are shared.",
    steps: [
      { id: "1", step: "Step 01", head: "Each Group Starts Its Day", desc: "Corrections, <a href='/hrms-software/leave-management-system'>leave</a>, and claims arrive in each manager's Pending Actions inbox.", tag: "06:01 · Hub A · biometric ✓ · 07:40 · Rider 12 · geo-tagged ✓" },
      { id: "2", step: "Step 02", head: "Work Is Recorded Where It Happens", desc: "Shift rules apply at the hub; expenses and visits are recorded in the field.", tag: "Rider 12 · toll ₹85 · receipt ✓" },
      { id: "3", step: "Step 03", head: "Managers Approve Before the Cut-off", desc: "Corrections, leave and claims arrive in each manager's Pending Actions inbox.", tag: "Pending: 2 corrections · 5 claims" },
      { id: "4", step: "Step 04", head: "One Locked Payroll", desc: "Attendance locks, then payroll runs with LOP, overtime and approved reimbursements.", tag: "Attendance ✓ → Finalised ✓ → Locked ✓" },
    ],
  },
];

// ── Workflows table ───────────────────────────────────────────────────
export const WorkflowsData = [
  {
    badge: "Specific Workflows",
    title: "Three Logistics <span class='text-gradient'>Workflows, Step by Step</span>",
    desc: "Logistics teams mix hub staff on shifts, delivery staff on the road and technicians at customer sites. Each group needs its own workflow, and all three end in the same payroll.",
    headers: ["Step", "Hub or warehouse shift", "Delivery or driver day", "Field service visit"],
    columns: ["step", "hub", "delivery", "field"],
    rows: [
      { id: "1", step: "Start", hub: "Biometric punch at the hub (all plans)", delivery: "Geo-tagged mobile punch at the hub or first stop (Foundation)", field: "Task assigned with a deadline and priority in QkrVisit" },
      { id: "2", step: "During", hub: "Shift rules apply; rosters and shift swap on Growth", delivery: "Expenses such as tolls and parking submitted with receipts (Foundation)", field: "Check-in and check-out at the customer's site, with distance for each journey" },
      { id: "3", step: "Exceptions", hub: "Missed punches corrected; bulk regularisation on Foundation", delivery: "Claims checked against policy limits at approval", field: "Mileage claim worked out from recorded distance at your per-km rate" },
      { id: "4", step: "Approval", hub: "Shift supervisor, from the Pending Actions inbox", delivery: "Route manager approves claims before the cut-off", field: "Service manager reviews visits and claims together" },
      { id: "5", step: "Payroll", hub: "LOP and overtime at twice the ordinary rate", delivery: "LOP plus approved reimbursements", field: "Approved reimbursements" },
    ],
    note: "Plan contents from QkrHR's published pricing, 9 October 2026; QkrVisit features from its app listing. This page covers people, not vehicles: it doesn't cover fleet tracking or route optimisation. How visit data from QkrVisit reaches <a href='/hrms-software'>QkrHR</a> depends on your setup, so we confirm it in the demo.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const LogisticsFaqData = [
  {
    id: 1,
    Title: "Can delivery staff mark attendance without coming to the hub?",
    Content: "Yes. Geo-tagged mobile punch, with a geofence where staff report to a fixed point, is on the Foundation plan.",
  },
  {
    id: 2,
    Title: "Can hub shift workers and drivers be in the same payroll?",
    Content: "Yes. Everyone has one employee record and one payroll; only the punch method and shift rules differ by group.",
  },
  {
    id: 3,
    Title: "How are trip and visit expenses handled?",
    Content: "<a href='/hrms-software/employee-expense-management'>Expense claims with policy limits</a> are on Foundation. For field visits, QkrVisit records the distance of each journey and the mileage claim is worked out at your per-km rate.",
  },
  {
    id: 4,
    Title: "Does QkrHR track vehicles or routes?",
    Content: "This page covers people: attendance, approvals, expenses and payroll. <a href='/field-force-management-software/employee-tracking-app'>Field tracking</a> and route optimisation aren't covered here; ask in the demo if you need them.",
  },
];

// ── Related Industries (above the final CTA) ─────────────────────────
export const RelatedIndustriesData = [
  {
    title: "Supplying stores across cities?",
    link: "/hrms-software/retail",
    linkText: "Retail HRMS",
  },
  {
    title: "Running a warehouse or plant?",
    link: "/hrms-software/hr-payroll-software-manufacturing-companies",
    linkText: "HRMS for manufacturing plants",
  },
  {
    title: "Deploying staff at client sites?",
    link: "/hrms-software/security-services",
    linkText: "HRMS for security and facility management",
  },
];

// ── Final CTA ─────────────────────────────────────────────────────────
export const FinalCtaData = [
  {
    id: 1,
    title: "See a Logistics Month <span class='text-gradient'>on Test Data</span>",
    description: "We'll set up a hub shift, a delivery team and a field technician, approve their claims and run one payroll.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Pricing", url: "/hrms-software/qkrhr-pricing", type: "cta-btn-outline" },
    ],
  },
];
