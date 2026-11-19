import { retails as ImagesUrl_retails} from "../../../../assets/images";

export const RetailMeta = {
  title: "HRMS for Retail Chains | Store Shifts & Payroll | QkrHR",
  description: "HR and payroll for retail chains and multi-branch teams: store shifts, staggered weekly offs, state holidays, store-manager approvals and PT across states.",
};

export const RetailHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_retails.retailsHeading,
    alt: "HRMS for Retail Chains and Multi-Store Teams",
    title: "HRMS for Retail Chains and Multi-Store Teams",
    subTitle: "Every Store Runs Its Own Shifts. <br/><span class='text-gradient'>You Run One Payroll.</span>",
    desc: "Shifts, weekly offs and state holidays set per store and approved by store managers, with Professional Tax applied correctly in every state.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── The problem ───────────────────────────────────────────────────────
export const ProblemData = [
  {
    badge: "The Problem",
    title: "Where Store HR <span class='text-gradient'>Breaks Down</span>",
    desc: "",
    List: [
      {
        id: "1",
        icon: ImagesUrl_retails.attendance,
        head: "Attendance in WhatsApp Groups",
        desc: "Store managers send attendance as messages or photos, and HR re-types it before payroll.",
      },
      {
        id: "2",
        icon: ImagesUrl_retails.weeklyOffs,
        head: "Weekly Offs Nobody Can Check",
        desc: "Staggered offs and swaps are agreed on the floor and never recorded, so overtime and leave are argued later.",
      },
      {
        id: "3",
        icon: ImagesUrl_retails.oneRule,
        head: "One Rule for Every State",
        desc: "Head office applies its own state's hours and holidays to every store.",
      },
    ],
  },
];

// ── How it works ──────────────────────────────────────────────────────
export const HowItWorksData = [
  {
    badge: "How It Works",
    title: "How a Retail Month <span class='text-gradient'>Runs on QkrHR</span>",
    desc: "Stores set their local rules, managers approve on the floor, head office runs one payroll.",
    steps: [
      { id: "1", step: "Step 01", head: "Set Up Each Store", desc: "Each store is a location with its state, holiday calendar, shifts and manager.", tag: "Anna Nagar · TN holidays · 3 shifts · manager + deputy" },
      { id: "2", step: "Step 02", head: "Staff Punch at the Store", desc: "Attendance locks, then <a href='/payroll-software'>payroll runs with</a> PT by each store's state.", tag: "09:58 · Andheri · opening shift ✓" },
      { id: "3", step: "Step 03", head: "Store Managers Approve", desc: "Leave, weekly-off swaps and corrections go to the store manager's Pending Actions inbox.", tag: "Pending: Andheri 1 · Anna Nagar 2" },
      { id: "4", step: "Step 04", head: "One Payroll Across States", desc: "Attendance locks, then payroll runs with PT by each store's state.", tag: "56 staff · PT (MH, KA, TN) · locked ✓" },
    ],
  },
];

// ── Feature fit table ─────────────────────────────────────────────────
export const FeatureFitData = [
  {
    badge: "Feature Fit",
    title: "<span class='text-gradient'>What Retail and Multi-Branch Teams Need,</span><br/> and Where It Is in QkrHR",
    desc: "Stores open long hours, seven days a week, across states with different rules. Store managers run attendance; head office runs payroll. These are the needs that follow, with the QkrHR plan that covers each.",
    headers: ["Need", "Why it matters", "In QkrHR"],
    columns: ["need", "why", "qkrhr"],
    rows: [
      { id: "1", need: "Store Shifts", why: "Opening, mid and closing shifts overlap, and weekend cover changes week to week", qkrhr: "Basic shifts and comp-off rules in all plans; rotational rosters with shift swap on Growth" },
      { id: "2", need: "Staggered Weekly Offs and State Holidays", why: "Stores stay open while staff take offs on different days, and holidays differ by state", qkrhr: "Holiday calendar per location" },
      { id: "3", need: "State Working-Hour Rules", why: "Daily hours for shops differ by state under each Shops and Establishments Act", qkrhr: "Set shift rules per store's state" },
      { id: "4", need: "Punching at the Store", why: "Some stores have a device, some don't", qkrhr: "Biometric and web punch in all plans; geofenced, geo-tagged mobile punch on Foundation" },
      { id: "5", need: "Attendance Exceptions", why: "Missed punches and short shifts pile up by month-end", qkrhr: "Bulk and backdated regularisation on Foundation" },
      { id: "6", need: "Store Manager Approvals", why: "Requests shouldn't wait for head office", qkrhr: "Pending Actions inbox in all plans; delegation when a manager is away on Foundation" },
      { id: "7", need: "Payroll Across States", why: "Each store's state brings its own Professional Tax", qkrhr: "Multi-entity payroll with PT for 18 states, all plans" },
      { id: "8", need: "Reports by Store", why: "Area managers compare attendance and overtime across stores", qkrhr: "Standard report pack and data grid in all plans; custom report builder on Growth" },
    ],
    note: "This page covers the <a href='/hrms-software'>HRMS</a> side of stores: shifts, attendance, approvals and payroll. It doesn't cover sales targets, incentives tied to POS data or footfall-based scheduling; ask in the demo if you need them.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const RetailFaqData = [
  {
    id: 1,
    Title: "Can each store have its own shifts and holidays?",
    Content: "Yes. Each location can have its own holiday calendar and shifts. Rotational rosters with shift swap are on the Growth plan.",
  },
  {
    id: 2,
    Title: "Can store staff punch without a biometric device?",
    Content: "Yes. Web punch is in every plan, and geo-tagged mobile punch inside a geofence around the store is on Foundation.",
  },
  {
    id: 3,
    Title: "Can store managers approve their own team's requests?",
    Content: "Yes. Requests go to the store manager's Pending Actions inbox. Delegation for when a manager is away is on Foundation.",
  },
  {
    id: 4,
    Title: "How is Professional Tax handled for stores in different states?",
    Content: "Professional Tax is applied by each employee's state for 18 states, in one <a href='/hrms-software/hr-payroll-software'>multi-entity payroll</a>, on every plan.",
  },
];

// ── Related Industries (above the final CTA) ─────────────────────────
export const RelatedIndustriesData = [
  {
    title: "Running your own delivery fleet?",
    link: "/hrms-software/logistics",
    linkText: "HRMS for logistics",
  },
  {
    title: "Running round-the-clock rosters?",
    link: "/hrms-software/healthcare",
    linkText: "Hospital HRMS",
  },
  {
    title: "Just a few stores so far?",
    link: "/hrms-software/hr-software-small-business",
    linkText: "Small business HR software",
  },
];

// ── Final CTA ─────────────────────────────────────────────────────────
export const FinalCtaData = [
  {
    id: 1,
    title: "See a Retail Chain's Month <span class='text-gradient'>on Test Data</span>",
    description: "We'll set up stores in three states with their own shifts and holidays, approve a weekly-off swap, and run one payroll.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Pricing", url: "/hrms-software/qkrhr-pricing", type: "cta-btn-outline" },
    ],
  },
];
