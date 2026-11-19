import { securityService as ImagesUrl_securityService} from "../../../../assets/images";

export const SecurityServicesMeta = {
  title: "HRMS for Security Agencies & Facility Management | QkrHR",
  description: "HR and payroll for security agencies and FM companies: geofenced site attendance, 24×7 post rosters, relievers, overtime, PF, ESI and CLRA registers.",
};

export const SecurityServicesHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_securityService.securityServiceHeading,
    alt: "HRMS for Security Agencies and Facility Management",
    title: "HRMS for Security Agencies and Facility Management",
    subTitle: "<span class='text-gradient'>Payroll That Runs</span><br/>on What Happened at Each Post",
    desc: "Guards and facility staff punch in at the client site, gaps get covered and approved, and PF, ESI and CLRA registers are included.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── The problem ───────────────────────────────────────────────────────
export const ProblemData = [
  {
    badge: "The Problem",
    title: "Where Security and FM <span class='text-gradient'>Payroll Goes Wrong</span>",
    desc: "",
    List: [
      {
        id: "1",
        icon: ImagesUrl_securityService.registers,
        head: "Registers at the Gate",
        desc: "Attendance lives in a notebook at each client site and reaches HR days late, if at all.",
      },
      {
        id: "2",
        icon: ImagesUrl_securityService.relieversArranged,
        head: "Relievers Arranged by Phone",
        desc: "A supervisor fills a gap at 2 am, and nobody records who covered the post or for how long.",
      },
      {
        id: "3",
        icon: ImagesUrl_securityService.payroll,
        head: "Payroll and Billing Disagree",
        desc: "Guards are paid from one sheet and clients billed from another, and the difference turns up in a dispute.",
      },
    ],
  },
];

// ── How it works ──────────────────────────────────────────────────────
export const HowItWorksData = [
  {
    badge: "How It Works",
    title: "How a Security or FM Month <span class='text-gradient'>Runs on QkrHR</span>",
    desc: "Sites and posts first, then attendance on the post, then approved cover, then one payroll.",
    steps: [
      { id: "1", step: "Step 01", head: "Set Up Sites and Shifts", desc: "Each client site is a location with its own geofence, shifts and supervisor.", tag: "Site C · hospital · 8 posts · 3 shifts" },
      { id: "2", step: "Step 02", head: "Staff Punch on the Post", desc: "Guards and facility staff punch on mobile inside the site's geofence.", tag: "22:02 · Site C · post 3 · geo-tagged ✓" },
      { id: "3", step: "Step 03", head: "Gaps Are Covered and Approved", desc: "Supervisors swap shifts, fix missed punches and approve requests from the Pending Actions inbox.", tag: "Site B · post 4 · cover requested" },
      { id: "4", step: "Step 04", head: "Payroll Runs From the Post", desc: "Attendance locks, then payroll runs with overtime, PF, ESI, PT and the CLRA registers clients ask for.", tag: "Attendance ✓ → Finalised ✓ → Locked ○" },
    ],
  },
];

// ── Feature fit table ─────────────────────────────────────────────────
export const FeatureFitData = [
  {
    badge: "Feature Fit",
    title: "<span class='text-gradient'>What Security and Facility Operations Need,</span><br/> and Where It Is in QkrHR",
    desc: "Guards, housekeeping and technicians work at your clients' premises, around the clock, often for more than one client in a month. These are the needs that follow from that, with the QkrHR plan that covers each.",
    headers: ["Need", "Why it matters", "In QkrHR"],
    columns: ["need", "why", "qkrhr"],
    rows: [
      { id: "1", need: "Attendance at the Client Site", why: "Paper registers at the gate can't be checked from head office", qkrhr: "Geofencing and geo-tagged mobile punch, Foundation" },
      { id: "2", need: "Rosters for 24×7 Posts", why: "Every post needs cover on every shift, including weekly offs", qkrhr: "Rotational and auto-generated rosters with shift swap, Growth" },
      { id: "3", need: "Relievers and Replacements", why: "Who covered an absent guard decides both pay and the client's bill", qkrhr: "Shift swap, Growth. Ask in the demo how reliever postings are recorded for your sites." },
      { id: "4", need: "Staff From Subcontractors", why: "Some posts are filled by another agency's people", qkrhr: "Contractor shift allocation, Growth" },
      { id: "5", need: "Fixing a Site's Missing Punches", why: "No network at a site can wipe out a whole shift's punches", qkrhr: "Bulk and backdated regularisation, Foundation" },
      { id: "6", need: "Double Shifts and Overtime", why: "Overtime is paid at twice the ordinary rate beyond 8 hours a day or 48 a week", qkrhr: "Overtime automation and slabs, Foundation" },
      { id: "7", need: "Compliance Papers Clients Ask For", why: "As principal employers, clients check that your PF and ESI are paid", qkrhr: "PF, ESI, PT for 18 states, TDS, challans, returns, statutory and CLRA registers, all plans" },
      { id: "8", need: "Several Companies or States", why: "Some agencies run a separate company per region or state", qkrhr: "Multi-entity payroll in all plans; unlimited entities on Foundation" },
      { id: "9", need: "Guards' Self-Service", why: "Staff rarely visit the office to collect payslips or apply for leave", qkrhr: "Android and iOS app, <a href='/hrms-software/employee-self-service-portal'>payslips on mobile</a>, all plans" },
      { id: "10", need: "Reports by Site", why: "Attendance by site is the basis for each client's invoice", qkrhr: "Standard report pack and data grid in all plans; custom report builder on Growth" },
    ],
    note: "This page covers <a href='/hrms-software'>HR and payroll software</a> for attendance, rosters, approvals and payroll. It doesn't cover patrol or checkpoint tracking or client invoicing; ask in the demo if you need them. Agencies also need a PSARA licence from their state's Controlling Authority, so check its conditions with that authority.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const SecurityServicesFaqData = [
  {
    id: 1,
    Title: "Can guards mark attendance at the client's site?",
    Content: "Yes. <a href='/hrms-software/leave-and-attendance-management'>Geo-tagged mobile punch</a> inside a geofence drawn around each client site is on the Foundation plan.",
  },
  {
    id: 2,
    Title: "Can QkrHR handle 24×7 rosters and relievers?",
    Content: "Rotational and auto-generated rosters with shift swap are on the Growth plan. Ask in the demo how reliever postings are recorded for your sites.",
  },
  {
    id: 3,
    Title: "Can we show clients our PF and ESI compliance?",
    Content: "PF, ESI, Professional Tax, TDS, challans, returns, <a href='/hrms-software/hr-payroll-software'>statutory registers and CLRA registers</a> are in every plan, so you can share challans and registers with clients.",
  },
  {
    id: 4,
    Title: "Does QkrHR do patrol tracking or client invoicing?",
    Content: "This page covers attendance, rosters, approvals and payroll. Patrol and checkpoint tracking and client invoicing aren't covered here, so ask in the demo if you need them.",
  },
  {
    id: 5,
    Title: "Can we run payroll for several companies or regions?",
    Content: "Yes. Multi-entity payroll is in every plan, with up to 3 legal entities on Essential and unlimited on Foundation. Professional Tax is applied for 18 states.",
  },
];

// ── Related Industries (above the final CTA) ─────────────────────────
export const RelatedIndustriesData = [
  {
    title: "Covering wards and nursing stations?",
    link: "/hrms-software/healthcare",
    linkText: "HRMS for hospitals and clinics",
  },
  {
    title: "Guarding factories and plants?",
    link: "/hrms-software/hr-payroll-software-manufacturing-companies",
    linkText: "Payroll software for factories",
  },
  {
    title: "Managing warehouses and hubs?",
    link: "/hrms-software/logistics",
    linkText: "HR software for logistics and field operations",
  },
];

// ── Final CTA ─────────────────────────────────────────────────────────
export const FinalCtaData = [
  {
    id: 1,
    title: "See a Security or FM Month <span class='text-gradient'>on Test Data</span>",
    description: "We'll set up three client sites with posts and shifts, cover a gap, and run payroll with PF, ESI and CLRA registers.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Pricing", url: "/hrms-software/qkrhr-pricing", type: "cta-btn-outline" },
    ],
  },
];
