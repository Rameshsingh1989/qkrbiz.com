// TODO: swap in education-specific artwork once it's added under assets/images/hrms/solutions/education
import { education as ImagesUrl_education } from "../../../../assets/images";

export const EducationMeta = {
  title: "HRMS for Schools & Colleges | Education Payroll | QkrHR",
  description: "HR and payroll for schools, colleges and education groups: multi-campus management, leave approvals, teaching and non-teaching payroll, PF, ESI and TDS.",
};

export const EducationHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_education.educationHeading,
    alt: "HRMS for Schools and Education Groups",
    title: "HRMS for Schools and Education Groups",
    subTitle: "Every Campus Runs Its Own Way.<br/><span class='text-gradient'>You Run One Payroll.</span>",
    desc: "Each campus keeps its own calendar and approvers, while the group runs one set of policies for teaching and non-teaching staff.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── The problem ───────────────────────────────────────────────────────
export const ProblemData = [
  {
    badge: "The Problem",
    title: "Where School HR <span class='text-gradient'>Gets Stuck</span>",
    desc: "Traditional spreadsheets and paper chits create confusion, delayed salaries, and unorganized staff records across campuses.",
    List: [
      {
        id: "1",
        icon: ImagesUrl_education.leaveOnPaper,
        head: "Leave on Paper",
        desc: "Leave forms travel from teacher to HOD to principal, and the accounts office finds out only at month end when processing salaries.",
      },
      {
        id: "2",
        icon: ImagesUrl_education.oneSpreadsheet,
        head: "One Spreadsheet Per Campus",
        desc: "Each campus keeps its own staff list and salary sheet, so consolidating management reports across the education group takes days.",
      },
      {
        id: "3",
        icon: ImagesUrl_education.differentTerms,
        head: "Different Terms, One Template",
        desc: "Teaching, administrative, transport and support staff are forced into the same salary template despite varying allowances and norms.",
      },
    ],
  },
];

// ── How it works ──────────────────────────────────────────────────────
export const HowItWorksData = [
  {
    badge: "How It Works",
    title: "How a School Group's Month <br/><span class='text-gradient'>Runs on QkrHR</span>",
    desc: "Campuses keep their calendars and approvers; the group runs one unified payroll seamlessly.",
    steps: [
      { id: "1", step: "Step 01", head: "Set Up Campuses &amp; Entities", desc: "Each campus is created as a location under its trust or society, with its own specific term and holiday calendar.", tag: "North campus · Trust A · Term calendar" },
      { id: "2", step: "Step 02", head: "Staff Punch &amp; Apply Leave", desc: "Staff clock in via <a href='/hrms-software/leave-and-attendance-management'>biometric device or web punch</a>, and submit leave requests directly from their mobile app.", tag: "08:05 · North campus · Staff room ✓" },
      { id: "3", step: "Step 03", head: "HOD &amp; Principal Approve", desc: "Leave requests route automatically through multi-level approval stages in each approver's Pending Actions inbox.", tag: "Leave · HOD ✓ → Principal" },
      { id: "4", step: "Step 04", head: "One Payroll Across Trusts", desc: "<a href='/hrms-software/time-and-attendance-system'>Attendance auto-locks</a>., then payroll runs per pay structure with automated PF, ESI, PT and TDS challans", tag: "300 staff · 3 entities · Locked ✓" },
    ],
  },
];

// ── Feature fit table ─────────────────────────────────────────────────
export const FeatureFitData = [
  {
    badge: "Feature Fit",
    title: "<span class='text-gradient'>What Schools &amp; Education Groups Need,</span><br/> and Where It Is in QkrHR",
    desc: "Education groups run several campuses, often under different trusts or societies, with teaching and non-teaching staff on different terms. These are the needs that follow, with the QkrHR plan that covers each.",
    headers: ["School group need", "Why it matters", "How QkrHR solves it"],
    columns: ["need", "why", "qkrhr"],
    rows: [
      { id: "1", need: "Several Campuses", why: "Each campus has its own principal, timings, exams and holiday calendar", qkrhr: "Holiday calendar per location; multi-entity payroll" },
      { id: "2", need: "Trusts &amp; Societies", why: "Campuses may sit under different registered legal entities", qkrhr: "Up to 3 legal entities on Essential, unlimited on Foundation" },
      { id: "3", need: "Teaching &amp; Non-Teaching Pay", why: "Teachers, administration, transport and support staff are paid on different pay bands", qkrhr: "Unlimited salary structures included in every plan" },
      { id: "4", need: "Leave Approvals", why: "Leave must go to the head of department, then escalate to the principal", qkrhr: "Pending Actions inbox; up to 3 approval stages on Essential, unlimited on Foundation" },
      { id: "5", need: "Daily Attendance", why: "Staff punch at the staff room, gate or administrative office", qkrhr: "Biometric device integration and web punch" },
      { id: "6", need: "Statutory Deductions", why: "PF applies from 20 employees and ESI from 10 employees", qkrhr: "Automated PF, ESI, PT in 18 states, TDS, challans and statutory returns" },
      { id: "7", need: "Staff Self-Service (ESS)", why: "Teachers check leave balance, apply for duty leave and download payslips", qkrhr: "Native Android &amp; iOS <a href='/hrms-software/employee-self-service-portal'>mobile apps with digital payslips</a>" },
      { id: "8", need: "Circulars &amp; Announcements", why: "Official management notices and circulars must reach every campus instantly", qkrhr: "Centralized digital announcements and staff polls" },
    ],
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const EducationFaqData = [
  {
    id: 1,
    Title: "Can each campus have its own holidays?",
    Content: "Yes. Each location can have its own holiday calendar, so campuses with different term dates, local district holidays, or exam periods stay completely independent.",
  },
  {
    id: 2,
    Title: "Can teaching and non-teaching staff have different pay structures?",
    Content: "Yes. Unlimited salary structures are included in every plan. You can configure distinct pay bands, allowances, and deduction policies for academic staff, administrative staff, drivers, and housekeeping staff.",
  },
  {
    id: 3,
    Title: "Can leave go to the HOD and then the principal?",
    Content: "Yes. The Essential plan supports up to 3 approval stages. The Foundation plan adds unlimited stages, auto-forwarding rules, and delegation when an approver is away on leave.",
  },
  {
    id: 4,
    Title: "Can we run payroll for campuses under different trusts?",
    Content: "Yes. Multi-entity payroll is built into QkrHR. Up to 3 legal entities are supported on Essential, and unlimited trusts/societies on the Foundation plan, each with their own separate PF/ESI registrations.",
  },
  {
    id: 5,
    Title: "Does QkrHR handle timetables or substitutions?",
    Content: "This system covers <a href='/hrms-software'>staff HR operations</a>, biometric attendance, leave approvals, and payroll compliance. Timetables, substitution planning, and student SIS records are separate modules; please ask in the demo if you require integrated timetabling.",
  },
];

// ── Related Industries (above the final CTA) ─────────────────────────
export const RelatedIndustriesData = [
  {
    title: "Running a hospital or medical college?",
    link: "/hrms-software/healthcare",
    linkText: "HRMS for hospitals",
  },
  {
    title: "Managing branches across states?",
    link: "/hrms-software/retail",
    linkText: "HRMS for multi-branch retail",
  },
];

// ── Final CTA ─────────────────────────────────────────────────────────
export const FinalCtaData = [
  {
    id: 1,
    title: "Get your One <span class='text-gradient'>Unified HRMS System</span>",
    description: "Replace fragmented spreadsheets with full control and transparency across all your institutions.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Pricing", url: "/hrms-software/qkrhr-pricing", type: "cta-btn-outline" },
    ],
  },
];
