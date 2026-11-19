import AhmedabadHeader from "@/assets/images/hrms/HrmsCity/Ahmedabad/AhmedabadHeader.webp";
import Reviews from "@/assets/images/hrms/HrmsCity/HrmsDelhi/Reviews.webp";

import DesignedForGujarat from "@/assets/images/hrms/HrmsCity/Ahmedabad/designed-for-pune.svg";
import MadeForGujarat from "@/assets/images/hrms/HrmsCity/Ahmedabad/made-for-mh.svg";
import AattendanceAutomation from "@/assets/images/hrms/HrmsCity/Ahmedabad/attendance-automation.svg";
import Payroll from "@/assets/images/hrms/HrmsCity/Pune/payroll.svg";
import EmpowerEmployee from "@/assets/images/hrms/HrmsCity/Ahmedabad/empower-employee.svg";

import ItTech from "@/assets/images/hrms/HrmsCity/it-tech.webp";
import manufacturing from "@/assets/images/hrms/HrmsCity/manufacturing.webp";
import HealthCare from "@/assets/images/hrms/HrmsCity/health-care.webp";
import SchoolsEducation from "@/assets/images/hrms/HrmsCity/schools-education.webp";
import FmcgField from "@/assets/images/hrms/HrmsCity/fmcg-field.webp";
import RetailHospitaitly from "@/assets/images/hrms/HrmsCity/retail-hospitaitly.webp";

export const AhmedabadHrmsMeta = {
  title: "HRMS & Payroll Software in Ahmedabad | QkrHR",
  description: "Scale your business with QkrHR, the top HRMS & payroll software in Ahmedabad. Automate payroll, tax compliance, attendance, and leave management easily.",
};

export const AhmedabadHrmsData = [
  {
    id: 1,
    youTubeVideoUrl:"bf3U8zW1dxc",
    videoUrl: "",
    imgUrl: AhmedabadHeader,
    // mobileImage: AhmedabadHeaderMobile,
    reviews: Reviews,
    alt: "HRMS & Payroll Software in Ahmedabad",
    title: "<span class='text-gradient'>HRMS & Payroll Software in Ahmedabad</span>",
    subTitle: "",
    desc: "QkrHR is a cloud-based HRMS and payroll software used by 200+ businesses in Ahmedabad and across Gujarat. It manages the complete employee lifecycle — onboarding, attendance, payroll processing, Gujarat Professional Tax compliance, PF, ESI, TDS, and full & final settlements — in one platform built for Ahmedabad's textile mills, pharmaceutical manufacturers, chemical plants, diamond trading firms, and the growing IT sector.",
    subDesc: "",
    link: "/signup",
    HeadList: []
  }
];

export const whyChooseData = {
  sectionTitle: "Everything Your Ahmedabad <span class='text-gradient'>HR Team Needs</span>",
  description:"Ahmedabad runs some of India's most compliance-sensitive industries. Textile mills in Gomtipur and Rakhial have hundreds of shift workers. Pharmaceutical manufacturers in Naroda with contract labour and statutory registers. Chemical plants in Vatva have strict Gujarat Factory Act requirements. Diamond trading firms in the textile market district have complex piece-rate and variable pay structures. Most <a href='/hrms-software'>HR software</a> handles a simple office payroll. QkrHR is built for the complexity that Ahmedabad businesses actually deal with.",
  imageUrl:"",
  col:false,
  features: [
    {
      minHeight:"min-height",
      iconUrl: DesignedForGujarat,
      title: "Gujarat Statutory Compliance — Fully Automated ",
      description:" ",
      List: [
      "Gujarat Professional Tax (PT) — correct slab on every salary run",
      "PF, ESI, TDS, Bonus, Gratuity — fully automated",
      "Form 24Q, ECR, Form 16, Gujarat Factory & Shop registers",
      "Gujarat Factories Act and Shops & Establishments Act compliant",
      "Full & Final settlement — leave encashment, notice recovery, gratuity calculated precisely",
      ]
    },
    {
      minHeight:"min-height",
      iconUrl: MadeForGujarat,
      title: "Built for Ahmedabad's Textile & Manufacturing Workforce ",
      description:" ",
      List: [
        "Multiple shift configurations per unit or department",
        "Biometric device sync across large production floor areas",
        "Daily-wage and contract worker payroll separation",
        "Overtime calculation per Gujarat Factories Act",
        "Statutory register generation on demand",
      ]
    },
    {
      minHeight:"min-height",
      iconUrl: AattendanceAutomation,
      title: "Pharmaceutical & Chemical Plant Compliance ",
      description:" ",
      List: [
          "Inspectors check Form registers anytime — manual updates won't cut it",
          "Ahmedabad's pharma belt — Naroda, Vatva, and Odhav — faces strict labour law audits with zero notice",
          "QkrHR auto-logs attendance, overtime, wages, and statutory deductions in real time",
          "Every register stays updated — not just on payroll day",
          "Always inspection-ready, always compliant",
      ]
    },
    {
      minHeight:"min-height",
      iconUrl: Payroll,
      title: "Multi-Branch HR Across Gujarat",
      description:" ",
      List: [
         "Multi-location HR across Ahmedabad, Surat, Rajkot, Vadodara, Gandhinagar, and Anand — one dashboard",
         "Each location gets its own shift rules, leave policies, and Gujarat-compliant holiday calendar",
         "Regional managers see their branch; HR head sees the entire Gujarat operation",
         "Headcount, payroll, and compliance status — all in one view",
         "One login. One report. One system.",
      ]
    },
    {
      minHeight:"min-height",
      iconUrl: EmpowerEmployee,
      title: "Employee Self-Service — Fewer Queries, More HR Work ",
      description:" ",
      List: [
          "Employees can access payslips, leave balance, attendance, and reimbursement status from the mobile app",
          "Managers approve leave, overtime, and expenses directly in the app — no WhatsApp, no email chains",
          "Ahmedabad HR teams report 60% less time spent on routine queries within the first quarter",
      ]
    },
  ]
};

export const ctaData = {
  sectionTitle: "One HR & Payroll Platform for Every <span class='text-gradient'>Ahmedabad Business</span>",
  description:  `Whether you're a 40-person IT firm in SG Highway or a 500-person textile mill in Gomtipur, QkrHR runs your entire HR and payroll operation without manual Gujarat PT calculations, without spreadsheet attendance registers, and without your accounts team spending days on statutory filings every month. `,
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
      sectionTitle: "All-in-One HRMS Modules for <span class='text-gradient'>Ahmedabad Companies</span> ",
      columns: ["Feature", "Functionality"],
      features: [
        {
          module:"Payroll",
          description: "Accurate, compliant salary processing"
        },
        {
          module:"Attendance",
          description: "Mobile, GPS & biometric log tracking"
        },
        {
          module:"Leave & Shift",
          description:"Smart leave planner, rule-based"
        },
        {
          module:"Compliance",
          description:"PF, ESI, PT, TDS, Gratuity, Bonus"
        },
        {
          module: "ESS Portal",
          description:"Anytime access to HR docs & requests"
        },
        {
          module:"Reports",
          description:"Payslips, audit reports, HR letters"
        }
      ]
    }
];

export const EnterprisesAhmedabadData = {
  // "title": "Best HR Software for Manufacturing, Textile, IT, Pharma & More in <span class='text-gradient'>Gujarat</span>",
  // "description": "Whether you run a startup or a 1000+ employee factory, QkrHR adapts to your sector.",
  // "items": [
  //   {
  //     "icon": EducationInstitutons,
  //     "title": "Textile & Garment Companies Narol, Odhav",
  //     "description": "",
  //     "highlight": true,
  //     "locations": "",
  //   },
  //   {
  //     "icon": ManufacturingUnit,
  //     "title": "Engineering & Manufacturing units Vatva, Changodar",
  //     "description": "",
  //     "highlight": true,
  //     "locations": "",
  //   },
  //   {
  //     "icon": TechStartups,
  //     "title": "IT Parks SG Highway, Gandhinagar",
  //     "description": "",
  //     "highlight": true,
  //     "locations": "",
  //   },
  //   {
  //     "icon": Logistic,
  //     "title": "FMCG, Pharma & Export houses",
  //     "description": "",
  //     "highlight": true,
  //     "locations": "",
  //   }
  // ]
};
export const EnterprisesDesigned = {
  "title": "Built for <span class='text-gradient'>Ahmedabad's Industries</span>",
  "description": "QkrHR is used by Ahmedabad businesses across sectors that have the most complex  HR needs — multiple locations, mixed workforce types, and strict compliance requirements.",
  "items": [
    {
      "icon": ItTech,
      "title": "Textile & Garment (Gomtipur, Rakhial, Narol)",
      "description": "Shift management, daily-wage workforce handling, biometric attendance sync, and Gujarat factory register compliance.",
      "highlight": true,
      "locations": "",
    },
    {
      "icon": manufacturing,
      "title": "Pharmaceuticals (Naroda, Vatva, Odhav)",
      "description": "Statutory register maintenance, contract worker management, and inspection-ready compliance workflows.",
      "highlight": true,
      "locations": "",
    },
    {
      "icon": HealthCare,
      "title": "Chemicals & Petrochemicals (Vatva GIDC, Odhav)",
      "description": "Factory shift rostering, overtime calculations, and Gujarat Factories Act compliance management.",
      "highlight": true,
      "locations": "",
    },
    {
      "icon": SchoolsEducation,
      "title": "Diamond & Jewellery Trading (Surat Corridor, Maninagar)",
      "description": "Diamond & Jewellery Trading (Maninagar, C.G. Road)",
      "highlight": true,
      "locations": "",
    },
    {
      "icon": FmcgField,
      "title": "IT & Tech Services (SG Highway, Prahlad Nagar)",
      "description": "Flexi-hours, remote attendance, TDS management for high salaries, and accurate Form 16 generation.",
      "highlight": true,
      "locations": "",
    },
    {
      "icon": RetailHospitaitly,
      "title": "Logistics & Trading (Citywide)",
      "description": "GPS attendance, field staff tracking, route visibility, and multi-depot payroll management.",
      "highlight": true,
      "locations": "",
    },
    {
      "icon": SchoolsEducation,
      "title": "Education (Satellite, Navrangpura)",
      "description": "Teacher attendance, leave management, and Gujarat Professional Tax compliance for staff.",
      "highlight": true,
      "locations": "",
    }
  ]
};

export const HRSoftwareAhmedabadData = {
     title: "How QkrHR Compares to Other Payroll & HRMS <span class='text-gradient'>Software in Ahmedabad</span>",
    columns: ["Feature", "QkrHR", "GreytHR", "Keka", "Saral PayPack","Zoho People" ],
    rows: [
      { feature: "Gujarat PT — pre-configured", QkrHR: true, GreytHR: true, Keka: true,"Saral PayPack": true, "Zoho People": true },
      { feature: "Gujarat Factory registers auto-generated", QkrHR: true, GreytHR: "Limited", Keka: false, "Saral PayPack": true, "Zoho People": false},
      { feature: "Daily-wage & contract worker management", QkrHR: true, GreytHR: "Limited", Keka: false, "Saral PayPack": true, "Zoho People": false},
      { feature: "GPS + geo-fence attendance", QkrHR: true, GreytHR: false, Keka: true, "Saral PayPack":false, "Zoho People":  "Limited" },
      { feature: "On-site setup in Ahmedabad", QkrHR: true, GreytHR: "Remote only", Keka: "Remote only", "Saral PayPack": true, "Zoho People": "Remote only"},
      { feature: "Full & Final auto-settlement", QkrHR: true, GreytHR: true, Keka:true, "Saral PayPack": true, "Zoho People": "Manual steps" },
      { feature: "Multi-branch Gujarat", QkrHR: true, GreytHR: "Limited", Keka:true, "Saral PayPack": true, "Zoho People": true },
      { feature: "Best for", QkrHR: "Textile + pharma + IT", GreytHR: "Office teams", Keka:"Startups", "Saral PayPack": "Manufacturing", "Zoho People": "SMBs" },
    ]
}

export const CustomersData = [
    {
      "title": "What Ahmedabad Businesses Say About  <span class='text-gradient'>QkrHR HRMS</span>",
      "testimonials": [
        {
          "quote": "We have 380 workers across two shifts in our Gomtipur mill — permanent and daily-wage both. QkrHR tracks biometric attendance for all of them, calculates their wages separately, and generates our Factory Act registers automatically. No more scrambling before inspections.",
          "author": "HR Manager,  Gomtipur, Ahmedabad",
          "link": "#"
        },
        {
          "quote": "Our Naroda plant gets labour department visits without warning. Before QkrHR, we spent two days preparing registers every time. Now everything is updated in real time — Gujarat PT, PF, ESI, overtime register, everything. We just download and hand over.",
          "author": "Admin Head, Naroda, Ahmedabad",
          "link": "#"
        },
        {
          "quote": "We're 90 people on SG Highway — mostly software developers on flexi-hours. QkrHR's mobile attendance and automated Gujarat PT made our payroll clean for the first time. Our finance team no longer touches a spreadsheet on payroll day.",
          "author": "Finance Head, SG Highway, Ahmedabad",
          "link": "#"
        }
      ]
    }
];

export const complianceReadyDba = [
  {
    id: 1,
    title: "Compliance-Ready HR Software <span class='text-gradient'>for Every Business</psan>",
    description: `Gujarat PT correct on every salary run, auto-generated Factory Act registers, and daily-wage & contract worker management — QkrHR keeps Ahmedabad's textile, pharma, and trading businesses inspection-ready all year. Discover QkrHR — the HR software for every business and see everything it automates, from onboarding to Full & Final settlement.`,
    buttonText: "Explore HR Software for Every Business →",
    buttonLink: "/hrms-software",
  },
];

export const AhmedabadHrmsFAQ = [
    {
    id: 1,
    Title: "What is the best HRMS software in Ahmedabad?",
    Content: `QkrHR is rated among the best HRMS software solutions in Ahmedabad 
for businesses in textile, pharmaceutical, chemical, and IT sectors. 
It covers HR management, payroll processing, attendance, Gujarat PT 
compliance, and Factory Act register maintenance — in one platform. 
Used by 200+ businesses across Ahmedabad and Gujarat, from trading 
firms to 500-person manufacturing operations.`
  },
  {
    id: 2,
    Title: "Which payroll software companies and vendors serve Ahmedabad?",
    Content: `Leading payroll software companies and vendors serving Ahmedabad 
include QkrHR, GreytHR, Keka, Saral PayPack, and Zoho People. 
QkrHR offers on-site implementation in Ahmedabad and pre-configured 
Gujarat PT compliance with automatic statutory register generation 
— making it the preferred choice for textile, pharma, and 
manufacturing businesses where factory inspection readiness matters.`
  },
  {
    id: 3,
    Title: "How much does payroll software cost in Ahmedabad?",
    Content: `Whether you run a textile unit in Gomtipur or an IT firm on SG Highway, QkrHR has a plan that fits. Essential is priced at ₹3,000 per month for up to 50 users, with additional employees at ₹40 per user per month. Foundation costs ₹5,000 per month for up to 50 users and ₹80 per additional user, and adds geofencing, overtime automation, and expense management, which is useful for shift-heavy plants. Gujarat PT and Factory Act registers are covered in both plans. For multi-plant operations across Surat, Vadodara, or Rajkot, the Growth plan is priced on a custom basis.`
  },
  {
    id: 4,
    Title: "Does QkrHR support Gujarat Professional Tax compliance?",
    Content: `Yes. QkrHR is pre-configured with Gujarat's Professional Tax slabs 
and automatically applies the correct deduction across all salary 
brackets. It also generates statutory registers required under the 
Gujarat Factories Act and Shops & Establishments Act, including Form B, 
Muster Rolls, and Wage Registers — all updated in real time and 
available for download before any inspection.`
  },
  {
    id: 5,
    Title: "Can QkrHR handle daily-wage and contract workers in Ahmedabad's textile industry?",
    Content: `Yes. QkrHR manages daily-wage workers, contract workers, and permanent 
employees on the same platform with separate attendance tracking and 
payroll calculations. This is specifically built for Ahmedabad's textile 
and manufacturing sector, where mills often run a significant portion 
of their workforce on daily wages or fixed-term contracts alongside 
permanent employees.`
  },
  {
    id: 6,
    Title: "Can QkrHR generate Factory Act statutory registers automatically?",
    Content: `Yes. QkrHR automatically maintains and generates all statutory 
registers required under the Gujarat Factories Act — including 
Form B (Register of Adult Workers), Muster Rolls, Overtime Register, 
and Wage Register. These are updated in real time from attendance 
and payroll data, so your plant is always inspection-ready without 
any manual preparation.`
  },
  {
    id: 7,
    Title: "Can QkrHR manage HR across multiple Gujarat locations?",
    Content: `Yes. QkrHR supports multi-branch HR management from a single 
dashboard. Operations in Surat, Rajkot, Vadodara, Gandhinagar, 
or Anand can each have their own shift rules, leave policies, 
and Gujarat-compliant holiday calendars. Regional managers see 
their location; your HR head has full visibility — headcount, 
payroll, and compliance — across the entire Gujarat operation.`
  }
]
