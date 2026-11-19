
import TamilNaduHeader from "@/assets/images/hrms/HrmsCity/Chennai/TamilNaduHeader.webp";
// import TamilNaduHeaderMobile from "@/assets/images/hrms/HrmsCity/Chennai/TamilNaduHeaderMobile.webp";
import Reviews from "@/assets/images/hrms/HrmsCity/HrmsDelhi/Reviews.webp";                                  

import CoreFeaturesTailored from "@/assets/images/hrms/HrmsCity/Chennai/CoreFeaturesTailored.svg";
import ChennaiSpecificCompliance from "@/assets/images/hrms/HrmsCity/Chennai/ChennaiSpecificCompliance.svg";
import AccurateAttendance from "@/assets/images/hrms/HrmsCity/Chennai/AccurateAttendance.svg";
import FastCompliantPayroll from "@/assets/images/hrms/HrmsCity/Chennai/FastCompliantPayroll.svg";
import EmployeeSelfService from "@/assets/images/hrms/HrmsCity/Chennai/EmployeeSelfService.svg";

import ItTech from "@/assets/images/hrms/HrmsCity/it-tech.webp";
import manufacturing from "@/assets/images/hrms/HrmsCity/manufacturing.webp";
import HealthCare from "@/assets/images/hrms/HrmsCity/health-care.webp";
import SchoolsEducation from "@/assets/images/hrms/HrmsCity/schools-education.webp";
import FmcgField from "@/assets/images/hrms/HrmsCity/fmcg-field.webp";
import RetailHospitaitly from "@/assets/images/hrms/HrmsCity/retail-hospitaitly.webp";

export const ChennaiHrmsMeta = {
  title: "Best HRMS and Payroll Software in Chennai | QkrHR",
  description: "QkrHR is Chennai's trusted HRMS & payroll software — HR management, salary processing, Tamil Nadu PT & compliance for 400+ businesses. Get a demo.",
};

export const ChennaiHrmsData = [
  {
    id: 1,
    youTubeVideoUrl:"bf3U8zW1dxc",
    videoUrl: "",
    imgUrl: TamilNaduHeader,
    // mobileImage:TamilNaduHeaderMobile,
    reviews: Reviews,
    alt: "Best HRMS & Payroll Software in Chennai & Tamil Nadu",
    title: "<span class='text-gradient'>Best HRMS & Payroll Software in Chennai & Tamil Nadu</span>",
    subTitle: "",
    desc: "QkrHR is a cloud-based HR management, HRMS, and payroll software used by 400+ businesses in Chennai and across Tamil Nadu. It manages the complete employee lifecycle — onboarding, attendance, payroll processing, Tamil Nadu Professional Tax compliance, PF, ESI, TDS, and full & final settlements — in one platform built for Chennai's manufacturing units, IT services firms, logistics companies, and multi-branch retail operations.",
    subDesc: "",
    link: "/signup",
    HeadList: []
  }
];

export const whyChooseData = {
  sectionTitle: "Everything Your Chennai <span class='text-gradient'>  HR Team Needs </span>",
  description:"Chennai HR teams deal with a workforce spread that few other cities match. Your factory floor in Ambattur runs three shifts with biometric attendance. Your IT team in OMR works flexi-hours. Your logistics team is spread across Chennai, Kancheepuram, and Chengalpattu — punching in from wherever they are. Most <a href='/hrms-software'>HR software</a> is built for one type of team. QkrHR is built for all of them.",
  imageUrl:"",
  col:false,
  features: [
    {
      minHeight: "min-height",
      iconUrl: CoreFeaturesTailored,
      title: "Tamil Nadu Statutory Compliance — Fully Automated",
      description: "Tamil Nadu payroll compliance simplified for every business.",
      List: [
        "Tamil Nadu Professional Tax (PT) with accurate slab calculation",
        "PF, ESI, TDS, Bonus & Gratuity automation",
        "Form 24Q, ECR, Form 16 & statutory register generation",
        "Tamil Nadu Shops & Establishments Act compliant",
        "Automated Full & Final settlement with leave encashment & gratuity",
      ]
    },

    {
      minHeight: "min-height",
      iconUrl: ChennaiSpecificCompliance,
      title: "HR Management, Payroll & Attendance — Three Systems, One Platform",
      description: "Manage HR, attendance and payroll from one centralized platform.",
      List: [
        "Biometric sync, Supervisor Punch & GPS geo-fence attendance",
        "Employee onboarding, leave, documents & approval workflows",
        "Salary processing, statutory deductions, bank files & payslips",
        "Tamil Nadu PT, PF, ESI, TDS, Form 16 & challan compliance",
        "Employee self-service mobile app with payslip access",
      ]
    },

    {
      minHeight: "min-height",
      iconUrl: AccurateAttendance,
      title: "Built for Chennai's Manufacturing & Industrial Workforce",
      description: "Designed for factories, industrial units and contract workforce management.",
      List: [
        "Ideal for manufacturing, auto parts & garment export industries",
        "Supports multi-shift & contract workforce attendance",
        "Department-wise overtime & LOP rule configuration",
        "Real-time biometric sync for accurate payroll",
        "Efficiently manages 500+ workers across multiple shifts",
      ]
    },

    {
      minHeight: "min-height",
      iconUrl: FastCompliantPayroll,
      title: "Field Team & Logistics Attendance — No More Phone Calls",
      description: "Track mobile employees and field staff in real time.",
      List: [
        "Perfect for logistics, FMCG & field sales teams",
        "GPS geo-fence with mobile punch-in attendance",
        "Real-time employee location tracking across districts",
        "No manual attendance entry or follow-up calls",
        "Field attendance auto-syncs directly with payroll",
      ]
    },

    {
      minHeight: "min-height",
      iconUrl: EmployeeSelfService,
      title: "Multi-Branch HR Across Tamil Nadu",
      description: "Manage all Tamil Nadu branches with centralized HR visibility.",
      List: [
        "Single dashboard for Chennai HQ & all TN branches",
        "Branch-wise shifts, leave policies & approval workflows",
        "Tamil Nadu holiday calendar setup per branch",
        "Role-based access for Branch HR & Head HR teams",
        "Complete visibility into payroll, compliance & workforce data",
      ]
    },
  ]
};

export const ctaData = {
  sectionTitle: "One HR & Payroll Platform for Every <span class='text-gradient'>Chennai Business</span>",
  description: "Whether you're a 25-person export firm in Parrys Corner or a 700-person auto-component manufacturer in Sriperumbudur — QkrHR runs your entire HR operation without spreadsheets, without manual Tamil Nadu compliance checks, and without your HR team losing a week every month to payroll preparation.",
  primaryButton: {
    text: "Book Your Free DemoNow",
    url: "/signup"
  },
  secondaryButton: {
    text: "Explore Plans & Pricing",
    url: "/hrms-software/qkrhr-pricing"
  }
};

export const hrmsFeaturesData = [
      {
      sectionTitle: "<span class='text-gradient'>HR Modules</span> That Scale With You",
      columns: ["Module", "Description"],
      features: [
        {
          module:"Payroll Processing",
          description: "Auto salary with PF, ESI, TDS, bonus, arrears, F&F"
        },
        {
          module:"Attendance",
          description: "GPS, biometric & online tracking"
        },
        {
          module:"Leave & Shift Management",
          description:"Rule-based, region-specific configuration"
        },
        {
          module:"ESS Portal",
          description:"Mobile + web"
        },
        {
          module: "Compliance Center",
          description:"Form 16, ECR, TDS, PT, Bonus, Gratuity"
        },
        {
          module:"Document Vault",
          description:"Aadhaar, PAN, KYC, offer letters, contracts"
        },
        {
          module: "Multi-Location Dashboard",
          description:"Chennai, Coimbatore, Madurai, Salem & more"
        }
      ]
    }
];

export const EnterprisesDelhiData = {
  // "title": "Who Should Use QkrHR <span class='text-gradient'> in Tamil Nadu? </span>",
  // "description": "QkrHR perfect For unique needs of companies tamil nadu — from regulatory requirements to handling field staff across locations like:",
  // "items": [
  //   {
  //     "icon": Itbpocompanies,
  //     "title": "IT & BPO companies in OMR, T. Nagar, Velachery",
  //     "highlight": true,
  //     "locations": "",
  //     "description": ""
  //   },
  //   {
  //     "icon": ManufacturingUnits,
  //     "title": "Manufacturing units in Ambattur, Sriperumbudur",
  //     "highlight": true,
  //     "locations": "",
  //     "description": ""
  //   },
  //   {
  //     "icon":Retailchains,
  //     "title": "Retail chains in Pondy Bazaar, Anna Salai",
  //     "highlight": true,
  //     "locations": "",
  //     "description": ""
  //   },
  //   {
  //     "icon": Deliverylogisticsstaffing,
  //     "title": "Delivery, logistics & staffing firms",
  //     "highlight": true,
  //     "locations": "",
  //     "description": ""
  //   }
  // ]
};

export const EnterprisesDesigned = {
  "title": "Who Should Use QkrHR <span class='text-gradient'> in Tamil Nadu? </span>",
  "description": "QkrHR is built for the unique needs of Tamil Nadu businesses — from state-specific compliance to managing field staff across multiple locations, including:",
    "items": [
    {
      icon: manufacturing,
      title: "Auto & Auto-components (Sriperumbudur, Ambattur, Guindy)",
      description:"Shift management, contract workforce handling, biometric sync & overtime calculation",
      highlight: true,
      locations: "",
    },
    {
      icon: ItTech,
      title: "IT & IT Services (OMR, Tidel Park, Sholinganallur)",
      description:"Flexi-hours, remote attendance, variable pay, high-salary TDS & Form 16 management",
      highlight: true,
      locations: "",
    },
    {
      icon: RetailHospitaitly,
      title: "Garment & Textile Exports (Ambattur, Pallavaram)",
      description:"Contract workforce management, piece-rate payroll & Labour Welfare Fund compliance",
      highlight: true,
      locations: "",
    },
    {
      icon: FmcgField,
      title: "Logistics & Supply Chain (Manali, Ennore, Kancheepuram)",
      description:"GPS attendance, field employee tracking & multi-depot payroll management",
      highlight: true,
      locations: "",
    },
    {
      icon: HealthCare,
      title: "Healthcare & Hospitals (Nungambakkam, Anna Nagar)",
      description:"Duty roster management, multi-centre staff handling & Tamil Nadu statutory compliance",
      highlight: true,
      locations: "",
    },
    {
      icon: SchoolsEducation,
      title: "Retail & Consumer Businesses (Citywide, tier-2 Tamil Nadu)",
      description:"Shift rostering, weekend overtime & seasonal workforce scaling support",
      highlight: true,
      locations: "",
    },
  ]
};

export const HRSoftwareChennaiData = {
  title: "How QkrHR Compares to Other Payroll & <span class='text-gradient'>HR Software in Chennai</span>",
  columns: ["Feature","QkrHR","GreytHR","Keka","Spine HR","Zoho People",
  ],
  rows: [
    {
      feature: "Tamil Nadu PT — Pre-configured",
      QkrHR: true,
      GreytHR: true,
      Keka: true,
      "Spine HR": true,
      "Zoho People": true,
    },

    {
      feature: "Labour Welfare Fund (Tamil Nadu)",
      QkrHR: true,
      GreytHR: true,
      Keka: true,
      "Spine HR": true,
      "Zoho People": "Manual",
    },

    {
      feature: "Factory Shift Management",
      QkrHR: true,
      GreytHR: "Limited",
      Keka: false,
      "Spine HR": true,
      "Zoho People": false,
    },

    {
      feature: "GPS + Geo-fence Attendance",
      QkrHR: true,
      GreytHR: false,
      Keka: true,
      "Spine HR": "Limited",
      "Zoho People": "Limited",
    },

    {
      feature: "HR + Payroll + Attendance in One",
      QkrHR: true,
      GreytHR: true,
      Keka: "Partial",
      "Spine HR": true,
      "Zoho People": "Partial",
    },

    {
      feature: "On-site Setup in Chennai",
      QkrHR: true,
      GreytHR: false,
      Keka: false,
      "Spine HR": true,
      "Zoho People": false,
    },

    {
      feature: "Full & Final Auto-settlement",
      QkrHR: true,
      GreytHR: true,
      Keka: true,
      "Spine HR": true,
      "Zoho People": "Manual",
    },

    {
      feature: "Multi-branch Tamil Nadu Support",
      QkrHR: true,
      GreytHR: "Limited",
      Keka: true,
      "Spine HR": true,
      "Zoho People": true,
    },

    {
      feature: "Starting Price (Per Employee / Month)",
      QkrHR: "₹40",
      GreytHR: "₹50",
      Keka: "₹90",
      "Spine HR": "₹70",
      "Zoho People": "₹60",
    },

    {
      feature: "Best For",
      QkrHR: "Manufacturing + IT + Field Teams",
      GreytHR: "Office-first Teams",
      Keka: "Startups & SMBs",
      "Spine HR": "Manufacturing",
      "Zoho People": "General HR Management",
    },
  ],
};

export const CustomersData = [
    {
      title:"What Chennai HR Teams Say <span class='text-gradient'> About QkrHR</span>",
      testimonials: [
        {
          "quote": "We run three shifts at our Ambattur plant with 320 workers. Reconciling biometric attendance used to take our HR team two full days every month. With QkrHR, attendance syncs automatically and payroll is done in under 2 hours. We haven't had a payroll dispute in 6 months.",
          "author": "HR Manager,, Ambattur Industrial Estate",
          "link": "#"
        },
        {
          "quote": "Our 180-person team works across two Chennai offices and from home. QkrHR handles the attendance complexity without any manual intervention. Tamil Nadu PT is applied correctly on every salary, and Form 16 is generated automatically. Our payroll team went from 3 days to half a day.",
          "author": "Finance Director,, OMR",
          "link": "#"
        },
        {
          "quote": "Our drivers and field supervisors are spread across Chennai and three districts. GPS attendance solved our biggest problem — we used to have disputes every month about who was where. Now it's all logged automatically. Payroll just runs.",
          "author": "Operations Head,, Manali, Chennai",
          "link": "#"
        }
      ]
    }
];
export const smartHrmsSoftwareDba = [
  {
    id: 1,
    title: "Smart HRMS Software <span class='text-gradient'>for Every Business</psan>",
    description: `Tamil Nadu PT with accurate slab calculation, multi-shift factory attendance for 500+ workers, and payroll that runs directly from live attendance data — QkrHR unifies HR, attendance, and payroll on one platform. Explore QkrHR — the ideal HRMS software for every business trusted by HR teams across India`,
    buttonText: " Explore HRMS Software for Every Business →",
    buttonLink: "/hrms-software",
  },
];
export const ChennaiHrmsFAQ = [
   {
    id: 1,
    Title: "What is the best HRMS software in Chennai?",
    Content: `QkrHR is rated among the best HRMS and HR management software solutions in Chennai for businesses managing manufacturing, IT, logistics, and field-based teams. It covers HR management, payroll processing, attendance, Tamil Nadu PT compliance, PF, ESI, and TDS in one platform, and is used by 400+ businesses across Chennai and Tamil Nadu.`
  },
  {
    id: 2,
    Title: "Which payroll software companies are available in Chennai?",
    Content: `Leading payroll software companies serving Chennai include QkrHR, GreytHR, Keka, Spine HR, and Zoho People. QkrHR and Spine HR both offer on-site implementation support in Chennai. QkrHR combines factory shift management, GPS attendance for field teams, and Tamil Nadu PT compliance in a single integrated platform.`
  },
  {
    id: 3,
    Title: "How much does payroll software cost in Chennai?",
    Content: `QkrHR brings HR, payroll, and attendance onto one platform at a single monthly price, so Chennai businesses don't need to pay for three separate tools. The Essential plan costs ₹3,000 per month for up to 50 employees, with each additional employee at ₹40 per month. The Foundation plan costs ₹5,000 per month for up to 50 users and ₹80 per additional user. It adds overtime automation for multi-shift plants in Ambattur and Sriperumbudur, geofenced attendance for logistics teams, and work-from-home tracking for IT teams on OMR. Tamil Nadu PT and Labour Welfare Fund compliance are part of both plans. Companies with branches in Coimbatore, Madurai, or Salem can ask our sales team for a custom Growth plan quote.`
  },
  {
    id: 4,
    Title: "Does QkrHR cover Tamil Nadu Professional Tax compliance?",
    Content: `Yes. QkrHR is pre-configured with Tamil Nadu's Professional Tax slabs and automatically applies the correct deduction across all salary brackets. It also calculates the Labour Welfare Fund contribution, maintains statutory registers required under the Tamil Nadu Shops & Establishments Act, and updates automatically when PT slabs or compliance rules change.`
  },
  {
    id: 5,
    Title: "Can QkrHR handle HR management, payroll, and attendance together in Chennai?",
    Content: `Yes. QkrHR integrates HR management, payroll processing, and attendance on a single platform — replacing the common setup of three separate tools stitched together with Excel. Attendance syncs directly to payroll. HR management — leaves, onboarding, documents, approvals — runs on the same system. No data exports, no manual reconciliation, no errors.`
  },
  {
    id: 6,
    Title: "Is QkrHR suitable for Chennai's manufacturing companies?",
    Content: `Yes. QkrHR is widely used by Chennai's manufacturing sector — including auto-component plants in Sriperumbudur, garment exporters in Ambattur, and industrial units in Guindy. It supports multiple shift configurations, biometric device sync, contract worker management, overtime calculation, and Tamil Nadu Labour Welfare Fund deductions — all standard in Chennai's manufacturing environment.`
  },
  {
    id: 7,
    Title: "Can QkrHR manage HR across multiple Tamil Nadu locations?",
    Content: `Yes. QkrHR supports multi-branch HR management from a single dashboard. Branch offices in Coimbatore, Madurai, Trichy, Salem, or Tirunelveli can each have their own shift rules, leave policies, and Tamil Nadu-compliant holiday calendars. Regional admins see their branch only; the Head of HR has complete visibility across the full Tamil Nadu operation.`
  }
];
