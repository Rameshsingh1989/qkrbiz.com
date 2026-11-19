import { healthcares as ImagesUrl_healthcares} from "../../../../assets/images";

export const HealthcareMeta = {
  title: "Hospital HRMS | 24×7 Rosters & Healthcare Payroll | QkrHR",
  description: "HR and payroll for hospitals, clinics and diagnostic chains: 24×7 unit rosters, night shifts, role-wise pay, contract staff, overtime and statutory registers.",
};

export const HealthcareHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_healthcares.healthcareHeading,
    alt: "HRMS for Hospitals and Clinics",
    title: "HRMS for Hospitals and Clinics",
    subTitle: "24×7 Rosters and Payroll <br/><span class='text-gradient'>You Can Stand Behind</span>",
    desc: "Rotational rosters for every unit, separate pay structures for nursing, technical and support staff, and statutory registers kept for five years.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── The problem ───────────────────────────────────────────────────────
export const ProblemData = [
  {
    badge: "The Problem",
    title: "Where Healthcare HR <span class='text-gradient'>Struggles</span>",
    desc: "",
    List: [
      {
        id: "1",
        icon: ImagesUrl_healthcares.coverage,
        head: "Coverage on a Whiteboard",
        desc: "Nursing rosters live on a board or a spreadsheet, and a sick call at night is fixed by phone.",
      },
      {
        id: "2",
        icon: ImagesUrl_healthcares.nightShifts,
        head: "Night Shifts on the Wrong Day",
        desc: "A shift that ends at 8 am is counted on two days, or none, and pay is argued later.",
      },
      {
        id: "3",
        icon: ImagesUrl_healthcares.contracStaff,
        head: "Contract Staff Out of Sight",
        desc: "<a href='/hrms-software/security-services'>Housekeeping and security</a> work your shifts, but their attendance sits with the contractor.",
      },
    ],
  },
];

// ── How it works ──────────────────────────────────────────────────────
export const HowItWorksData = [
  {
    badge: "How It Works",
    title: "How a Healthcare Month <span class='text-gradient'>Runs on QkrHR</span>",
    desc: "Rosters first, then attendance against them, then approved changes, then one payroll.",
    steps: [
      { id: "1", step: "Step 01", head: "Build Rosters per Unit", desc: "Each unit's roster covers every shift, with rotations and weekly offs planned ahead.", tag: "ICU · 3 shifts · 12 nurses · rotation set" },
      { id: "2", step: "Step 02", head: "Staff Punch at the Shift Start", desc: "On a <a href='/hrms-software/shift-management-system'>Shift swaps</a>, leave and corrections go to the unit head's Pending Actions inbox.", tag: "20:02 · Emergency · night shift ✓" },
      { id: "3", step: "Step 03", head: "Gaps Are Covered and Approved", desc: "Shift swaps, leave and corrections go to the unit head's Pending Actions inbox.", tag: "General ward · swap requested · approved" },
      { id: "4", step: "Step 04", head: "Payroll From the Roster and Punches", desc: "Attendance locks, then payroll runs per role with overtime and registers.", tag: "Attendance ✓ → Finalised ✓ → Locked ○" },
    ],
  },
];

// ── Feature fit table ─────────────────────────────────────────────────
export const FeatureFitData = [
  {
    badge: "Feature Fit",
    title: "<span class='text-gradient'>What Hospital and Clinic HR Needs,</span><br/> and Where It Is in QkrHR",
    desc: "Care runs around the clock, roles have different pay and shift patterns, and support services are often contracted. These are the needs that follow, with the QkrHR plan that covers each.",
    headers: ["Need", "Why it matters", "In QkrHR"],
    columns: ["need", "why", "qkrhr"],
    rows: [
      { id: "1", need: "24×7 Shift Coverage", why: "Every unit needs cover on every shift, including nights and weekly offs", qkrhr: "Rotational and auto-generated rosters with shift swap, Growth" },
      { id: "2", need: "Night Shifts", why: "Shifts that cross midnight must count on the right day", qkrhr: "Basic shifts and comp-off rules, all plans. Ask in the demo how shifts that cross midnight are counted." },
      { id: "3", need: "Different Roles, Different Pay", why: "Nurses, technicians, support staff and consultants are paid on different structures", qkrhr: "Unlimited salary structures, all plans" },
      { id: "4", need: "Attendance on the Floor", why: "Staff punch at the start of a shift, often at a shared device", qkrhr: "Biometric and web punch, all plans" },
      { id: "5", need: "Overtime and Double Shifts", why: "Overtime is paid at twice the ordinary rate beyond 8 hours a day or 48 a week", qkrhr: "Overtime automation and slabs, Foundation" },
      { id: "6", need: "Contracted Support Services", why: "Housekeeping and security are often a contractor's staff on your premises", qkrhr: "Contractor shift allocation on Growth; CLRA registers in all plans" },
      { id: "7", need: "Payroll Records", why: "Wage and attendance registers are kept for five years", qkrhr: "Statutory registers, <a href='/hrms-software/core-hr'>audit logs and role-based access</a>, all plans" },
      { id: "8", need: "Several Facilities", why: "Hospitals, clinics and labs may be separate entities", qkrhr: "Multi-entity payroll; unlimited entities on Foundation" },
    ],
    note: "This page covers <a href='/hrms-software'>HR software</a> for rosters, attendance, approvals and payroll. It doesn't cover clinical scheduling, on-call rotas for consultants or credential tracking; ask in the demo if you need them.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const HealthcareFaqData = [
  {
    id: 1,
    Title: "Can QkrHR build 24×7 nursing rosters?",
    Content: "Rotational and auto-generated rosters with shift swap are on the Growth plan. Basic shifts and comp-off rules are in every plan.",
  },
  {
    id: 2,
    Title: "Can different roles have different pay structures?",
    Content: "Yes. <a href='/payroll-software/management'>Unlimited salary structures</a> are included in every plan, so nursing, technical, support and consulting staff can each have their own.",
  },
  {
    id: 3,
    Title: "Can contracted housekeeping and security staff be included?",
    Content: "Contractor shift allocation is on the Growth plan, and CLRA registers are in every plan.",
  },
  {
    id: 4,
    Title: "Does QkrHR handle clinical scheduling or credentials?",
    Content: "This page covers HR: rosters, attendance, approvals and payroll. Clinical scheduling, consultant on-call rotas and credential tracking aren't covered here; ask in the demo.",
  },
];

// ── Related Industries (above the final CTA) ─────────────────────────
export const RelatedIndustriesData = [
  {
    title: "Managing shift-heavy operations?",
    link: "/hrms-software/hr-payroll-software-manufacturing-companies",
    linkText: "Manufacturing HRMS",
  },
  {
    title: "Running a medical college?",
    link: "/hrms-software/education",
    linkText: "HRMS for schools and colleges",
  },
];

// ── Final CTA ─────────────────────────────────────────────────────────
export const FinalCtaData = [
  {
    id: 1,
    title: "See a Hospital Roster <span class='text-gradient'>and Payroll on Test Data</span>",
    description: "We'll build a 24×7 roster for two units, cover a night-shift gap and run payroll by role.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Pricing", url: "/hrms-software/qkrhr-pricing", type: "cta-btn-outline" },
    ],
  },
];
