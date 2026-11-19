import PuneHeader from "@/assets/images/hrms/HrmsCity/Pune/PuneHeader.webp";
// import PuneHeaderMobile from "@/assets/images/hrms/HrmsCity/Pune/PuneHeaderMobile.webp";
import Reviews from "@/assets/images/hrms/HrmsCity/HrmsDelhi/Reviews.webp";

import DesignedForPune from "@/assets/images/hrms/HrmsCity/Pune/designed-for-pune.svg";
import MadeForMh from "@/assets/images/hrms/HrmsCity/Pune/made-for-mh.svg";
import AattendanceAutomation from "@/assets/images/hrms/HrmsCity/Pune/attendance-automation.svg";
import Payroll from "@/assets/images/hrms/HrmsCity/Pune/payroll.svg";
import EmpowerEmployee from "@/assets/images/hrms/HrmsCity/Pune/empower-employee.svg";

import ItTech from "@/assets/images/hrms/HrmsCity/it-tech.webp";
import manufacturing from "@/assets/images/hrms/HrmsCity/manufacturing.webp";
import HealthCare from "@/assets/images/hrms/HrmsCity/health-care.webp";
import SchoolsEducation from "@/assets/images/hrms/HrmsCity/schools-education.webp";
import FmcgField from "@/assets/images/hrms/HrmsCity/fmcg-field.webp";
import RetailHospitaitly from "@/assets/images/hrms/HrmsCity/retail-hospitaitly.webp";

export const PuneHrmsMeta = {
  title: "HRMS & Payroll Software in Pune | QkrHR",
  description: "QkrHR is Pune's trusted HRMS & payroll software — HR management, attendance & Maharashtra compliance for IT, auto & manufacturing firms. Book a free demo.",
};

export const PuneHrmsData = [
  {
    id: 1,
    youTubeVideoUrl:"bf3U8zW1dxc",
    videoUrl: "",
    imgUrl: PuneHeader,
    // mobileImage:PuneHeaderMobile,
    reviews: Reviews,
    alt: "HRMS software in Pune",
    title: "<span class='text-gradient'>HRMS & Payroll Software in Pune</span>",
    subTitle: "",
    desc: "QkrHR is a cloud-based HRMS and payroll software used by 300+ businesses in Pune and across Maharashtra. It manages the complete employee lifecycle — onboarding, attendance, payroll processing, Maharashtra Professional Tax compliance, MLWF contributions, PF, ESI, TDS, and full & final settlements — in one platform built for Pune's IT services firms, automotive and auto-component manufacturers, engineering companies, and field-based sales teams. ",
    subDesc: "",
    link: "/signup",
    HeadList: []
  }
];
export const whyChooseData = {
  sectionTitle: "Everything Your Pune <span class='text-gradient'>HR Team Needs</span>",
  description:`Whether you're a 30-person SaaS company in Kalyani Nagar or a 900-person auto-component supplier in Chakan — QkrHR's <a href="/hrms-software">hrms software</a> manages your entire HR and payroll operation without spreadsheets, without chasing attendance data at month-end, and without your finance team manually calculating Maharashtra PT and MLWF contributions every cycle.`,
  imageUrl:"",
  col:false,
 features: [
  {
    minHeight: "min-height",
    iconUrl: DesignedForPune,
    title: "Maharashtra Statutory Compliance — Fully Automated",
    description: "",
    List: [
      "Maharashtra Professional Tax (PT) — correct slab, every salary",
      "MLWF (Maharashtra Labour Welfare Fund) — auto-calculated every cycle",
      "PF, ESI, TDS, Bonus, Gratuity — fully automated",
      "Form 24Q, ECR, Form 16, Maharashtra statutory registers",
      "Maharashtra Shops & Establishments Act compliant",
      "Full & Final settlement — leave encashment, notice recovery, gratuity to the rupee"
    ]
  },
  {
    minHeight: "min-height",
    iconUrl: MadeForMh,
    title: "Built for Pune's Automotive & Manufacturing Workforce",
    description: "",
    List: [
      "Multiple shift configurations per plant or department",
      "Biometric device sync across large factory floor areas",
      "Contract worker attendance and payroll separation",
      "Overtime calculation per Maharashtra Factories Act rules",
      "Labour Welfare Fund deduction on all eligible workers"
    ]
  },
  {
    minHeight: "min-height",
    iconUrl: AattendanceAutomation,
    title: "IT & Tech Attendance — Flexible Hours, Accurate Payroll",
    description: "",
    List: [
      "Hinjewadi IT firms deal with flexi-hours, remote work, variable pay, and ESOPs — complex by nature",
      "High salaries mean TDS errors are expensive and Form 16 must be precise",
      "Most companies still depend on manual CA involvement — slow and error-prone",
      "QkrHR automates it all — mobile attendance, accurate TDS, and Form 16 generation",
      "Built for Pune's IT workforce, zero manual CA dependency",
    ]
  },
  {
    minHeight: "min-height",
    iconUrl: Payroll,
    title: "Multi-Branch HR Across Maharashtra",
    description: "",
    List: [
      "Multi-branch HR across Pune, Mumbai, Nashik, Aurangabad, Kolhapur, and Nagpur — managed from one dashboard",
      "Each branch gets its own shift rules, leave policies, and Maharashtra-compliant holiday calendar",
      "Regional HR managers see their branch; CHRO sees the entire operation",
      "Payroll status, headcount, and compliance health — all in one view",
      "One login. One report. One system." 
    ]
  },
  {
    minHeight: "min-height",
    iconUrl: EmpowerEmployee,
    title: "Employee Self-Service — Cut HR Query Volume by 60%",
    description: "",
    List: [
      "Employees access payslips, leave balance, attendance, and reimbursement status — all from the mobile app",
      "Managers get leave, expense, and overtime approvals directly in the app — no WhatsApp, no email chains",
      "Routine HR queries drop by 60% within the first quarter of using QkrHR",
    ]
  },
  ]
};

export const ctaData = {
  sectionTitle: "One HR & Payroll Platform for Every <span class='text-gradient'>Pune Business </span>",
  description:  `Whether you're a 30-person SaaS company in Kalyani Nagar or a 900-person auto-component supplier in Chakan — QkrHR manages your entire HR and payroll operation without spreadsheets, without chasing attendance data at month-end, and without your finance team manually calculating Maharashtra PT and MLWF contributions every cycle`,
  primaryButton: {
    text: "Schedule Your Free DemoNow",
    url: "/signup"
  },
  secondaryButton: {
    text: "Explore Plans & Pricing",
    url: "/hrms-software/qkrhr-pricing"
  }
};

export const hrmsFeaturesData = [
  {
      sectionTitle: "<span class='text-gradient'>Core HRMS</span> Modules Available in <span class='text-gradient'> Pune</span>",
      columns: ["Module", "Description"],
      features: [
        {
          module:"Payroll",
          description: "Error-free, automated salary generation"
        },
        {
          module:"Time & Attendance",
          description: "GPS/mobile/biometric-based tracking"
        },
        {
          module:"Leave & Shift",
          description:"Rule-based leave/shift planner"
        },
        {
          module:"ESS Portal",
          description:"Employee self-access with real-time info"
        },
        {
          module: "HR Compliance",
          description:"PT, PF, ESI, TDS, Bonus automation"
        },
        {
          module:"Reports & Letters",
          description:"Payslips, F&F, Form 16, contracts, more"
        }
      ]
    }
];

export const EnterprisesPuneData = {};

export const EnterprisesDesigned = {
  "title": "Built for <span class='text-gradient'> Pune's Industries</span>",
  "description": "QkrHR is used across Pune's most compliance-intensive sectors — where workforce complexity, multi-location operations, and Maharashtra labour law obligations make generic HR software inadequate",
  "items": [
    {
      icon: ItTech,
      title: "IT & Software Services (Hinjewadi, Kharadi, Magarpatta)",
      description: "Flexi-hours, remote attendance, variable pay structures, high-salary TDS, and accurate Form 16 generation.",
      highlight: true,
      locations: "",
    },
    {
      icon: manufacturing,
      title: "Automotive & Auto-Components (Chakan, Pimpri-Chinchwad, Talegaon)",
      description: "Shift management, contract workforce handling, biometric attendance sync, and overtime calculation.",
      highlight: true,
      locations: "",
    },
    {
      icon: HealthCare,
      title: "Engineering & Industrial (MIDC Bhosari, Ranjangaon)",
      description: "Factory shift rostering, shop-floor attendance tracking, MLWF deductions, and Factories Act compliance.",
      highlight: true,
      locations: "",
    },
    {
      icon: SchoolsEducation,
      title: "Startups & Product Companies (Koregaon Park, Kalyani Nagar, Baner)",
      description: "Built for fast-growing teams with equity-based compensation and lean HR operations.",
      highlight: true,
      locations: "",
    },
    {
      icon: FmcgField,
      title: "Logistics & Supply Chain (Sanaswadi, Ranjangaon Corridor)",
      description: "GPS attendance, field employee tracking, route visibility, and multi-location payroll management.",
      highlight: true,
      locations: "",
    },
    {
      icon: RetailHospitaitly,
      title: "Healthcare (Deccan, Aundh, Hadapsar)",
      description: "Manage multi-centre staff attendance, duty rosters, and Maharashtra healthcare compliance requirements.",
      highlight: true,
      locations: "",
    }
  ]
};


export const HRSoftwarePuneData = {
  title: "How QkrHR Compares to Other HRMS &  <span class='text-gradient'>Payroll Software in Pune</span>",
  columns: ["Feature", "QkrHR", "GreytHR", "Keka", "HROne", "Zoho People"],
  rows: [
    {
      feature: "Maharashtra PT — pre-configured",
      QkrHR: true,
      GreytHR: true,
      Keka: true,
      HROne: true,
      "Zoho People": true,
    },
    {
      feature: "MLWF auto-calculated",
      QkrHR: true,
      GreytHR: true,
      Keka: "Manual",
      HROne: true,
      "Zoho People": "Manual",
    },
    {
      feature: "Factory shift management",
      QkrHR: true,
      GreytHR: "Limited",
      Keka: false,
      HROne: "Limited",
      "Zoho People": false,
    },
    {
      feature: "Contract worker management",
      QkrHR: true,
      GreytHR: "Limited",
      Keka: false,
      HROne: true,
      "Zoho People": false,
    },
    {
      feature: "GPS + geo-fence attendance",
      QkrHR: true,
      GreytHR: false,
      Keka: true,
      HROne: true,
      "Zoho People": "Limited",
    },
    {
      feature: "On-site setup in Pune",
      QkrHR: true,
      GreytHR: "Remote only",
      Keka: "Remote only",
      HROne: "Remote only",
      "Zoho People": "Remote only",
    },
    {
      feature: "Full & Final auto-settlement",
      QkrHR: true,
      GreytHR: true,
      Keka: true,
      HROne: true,
      "Zoho People": "Manual steps",
    },
    // {
    //   feature: "Multi-branch Tamil Nadu",
    //   QkrHR: true,
    //   GreytHR: "Limited",
    //   Keka: true,
    //   HROne: true,
    //   "Zoho People": true,
    // },
    {
      feature: "Multi-branch Maharashtra",
      QkrHR: true,
      GreytHR: "Limited",
      Keka: true,
      HROne: true,
      "Zoho People": true,
    },
    {
      feature: "Best for",
      QkrHR: "IT + auto + manufacturing",
      GreytHR: "Office-first teams",
      Keka: "Startups",
      HROne: "Mid-market",
      "Zoho People": "SMBs",
    },
  ],
};

export const CustomersData = [
    {
      "title": "What Pune HR Teams Say <span class='text-gradient'>About QkrHR</span>",
      "testimonials": [
        {
          "quote": "We run two shifts at our Chakan plant with 450 workers — permanent and contract both. QkrHR handles attendance for both worker types separately, calculates Maharashtra MLWF correctly, and runs payroll for the entire plant in under 90 minutes. Our previous software took us 3 days to do the same thing.",
          "author": "HR Head, Chakan, Pune",
          "link": "#"
        },
        {
          "quote": "We have 220 employees across Hinjewadi and a smaller team in Kharadi. Flexi-hours meant our previous attendance system was a mess every month. QkrHR's mobile punch-in solved it — and Maharashtra PT is applied automatically. Our HR team spends half the time on payroll they used to.",
          "author": "Finance Manager, Hinjewadi, Pune",
          "link": "#"
        },
        {
          "quote": "MIDC compliance is non-negotiable for us. QkrHR handles Maharashtra PT, MLWF, PF, ESI, and all our Factories Act registers automatically. Zero compliance penalties since going live. And the implementation team was on-site in Pimpri — that mattered to us",
          "author": "Admin Director, Pimpri-Chinchwad",
          "link": "#"
        }
      ]
    }
];
export const  chakanHinjewadiDba = [
  {
    id: 1,
    title: "From Chakan to Hinjewadi  <span class='text-gradient'>Best HRMS Software in India</psan>",
    description: `Whether it's 3-shift factory floors in Chakan or flexi-hour IT teams in Hinjewadi, QkrHR calculates Maharashtra PT and MLWF automatically and runs error-free payroll straight from live attendance. Visit the page for the best HRMS software in India to explore every core module — payroll, leave & shift, ESS portal, compliance, and more.`,
    buttonText: "Explore Best HRMS Software in India →",
    buttonLink: "/hrms-software",
  },
];
export const PuneHrmsFAQ = [
    {
    id: 1,
    Title: "What is the best HRMS software in Pune?",
    Content: `QkrHR is rated among the best HRMS software solutions in Pune for businesses managing IT, automotive, and manufacturing workforces. It covers HR management, payroll processing, attendance, Maharashtra PT and MLWF compliance, PF, ESI, and TDS — in one integrated platform. Used by 300+ businesses across Pune and Maharashtra, from early-stage startups to 900-person manufacturing operations.`
  },
  {
    id: 2,
    Title: "Which HRMS and payroll software companies serve Pune?",
    Content: `Leading HRMS and payroll software companies serving Pune include QkrHR, GreytHR, Keka, HROne, and Zoho People. QkrHR offers on-site implementation support in Pune and pre-configured Maharashtra PT and MLWF auto-calculation — making it the preferred choice for Pune's automotive and manufacturing businesses where compliance accuracy is non-negotiable.`
  },
  {
    id: 3,
    Title: "How much does payroll software cost in Pune?",
    Content: `QkrHR's pricing for Pune businesses depends on two things: your team size and the features you need. For up to 50 employees, the Essential plan costs a flat ₹3,000 per month, and every employee after that adds ₹40 per month. The Foundation plan costs ₹5,000 per month for the first 50 users and ₹80 per additional user. It adds work-from-home attendance and geo-tagged mobile punch for Hinjewadi's IT teams, plus overtime automation for Chakan's shift-based plants. Maharashtra PT and MLWF compliance are built into both plans. Companies with branches in Mumbai, Nashik, or Nagpur can contact our sales team for a custom Growth plan quote.`
  },
  {
    id: 4,
    Title: "Does QkrHR support Maharashtra Professional Tax and MLWF compliance?",
    Content: `Yes. QkrHR is pre-configured for both Maharashtra Professional Tax and the Maharashtra Labour Welfare Fund (MLWF). PT slabs apply automatically across all salary brackets. MLWF contributions are calculated and deducted correctly every payroll cycle. Statutory registers and challan files are generated automatically, and PT slab updates apply without any manual reconfiguration.`
  },
  {
    id: 5,
    Title: "Can QkrHR handle both IT and manufacturing workforces in Pune?",
    Content: `Yes. QkrHR is specifically built for Pune's mixed-workforce environment. It manages flexi-hour IT teams in Hinjewadi on mobile punch-in, shift-based factory workers in Chakan on biometric sync, and contract workers in Pimpri-Chinchwad — all on a single platform. Shift rules, attendance policies, and payroll configurations can be set separately per department, plant, or location.`
  },
  {
    id: 6,
    Title: "Can QkrHR manage contract workers separately from permanent employees?",
    Content: `Yes. QkrHR manages contract workers and permanent employees on the same platform with separate attendance tracking, payroll calculations, and compliance settings. This is critical for Pune's automotive and engineering sector, where factories often run a large share of their workforce on contract or fixed-term arrangements alongside permanent staff.`
  },
  {
    id: 7,
    Title: "Can QkrHR manage HR across multiple Maharashtra locations from Pune?",
    Content: `Yes. QkrHR supports multi-branch HR management from a single dashboard. Branch offices in Mumbai, Nashik, Aurangabad, Kolhapur, or Nagpur can each have their own shift rules, leave policies, and Maharashtra-compliant settings. Regional admins see their branch; the Head of HR has full visibility — headcount, payroll, and compliance — across the entire Maharashtra operation.`
  }
]
