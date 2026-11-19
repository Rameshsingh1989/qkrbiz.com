import { qkrpayroll as ImagesUrl_qkrpayroll } from "../../../assets/images";

export const StatutoryCompliancesMeta = {
  title: "Payroll Statutory Compliance Software | PF, ESI, TDS | QkrPayroll",
  description: "QkrPayroll automates all Indian payroll statutory compliance – PF, ESI, TDS, PT & LWF. Challans, returns & Form 16 auto-generated. Always audit-ready. Free demo.",
};

export const PayrollManagementHeadData = [
  { 
    id:1,
      youTubeVideoUrl: "bf3U8zW1dxc",
      videoUrl: "",
      imgUrl:ImagesUrl_qkrpayroll.statutoryComplianceHeader,
      alt:"Payroll Statutory Compliance India",
      title:"Payroll Statutory Compliance India",
      subTitle:"<span class='text-gradient'>Statutory Compliance,</span><br/> PF, ESI, TDS, PT & LWF.",
      desc:"QkrPayroll calculates, deducts, and files every statutory obligation automatically — at current rates, every pay cycle. No compliance specialist needed. No manual rate updates. No missed deadlines.",
      subDesc:"",
      link:"/signup",
      HeadList:[
      ]
  }
];

export const ComplianceStagesData = [
  {
    id: 1,
    subTitle: "How Payroll Runs in QkrPayroll",
    title: "Compliance in Three Steps - <span class='text-gradient'>After Every Payroll Run</span>",
    description: "Every approved payroll run in QkrPayroll triggers the full compliance cycle automatically. Your team doesn't have to initiate, track, or manage any of it.",
    stages: [
      {
        id: 1,
        badge: "1",
        bgCls:"light-green",
        title: "Auto-Calculate at Current Rates",
        description: "As soon as attendance is locked and payroll processing begins, QkrPayroll calculates all five statutory contributions for every employee—applying their salary, work location, and tax regime. Rates are always current. No circular- hunting, no spreadsheet updates when EPFO or ESIC changes a rate."
      },
      {
        id: 2,
        badge: "2",
        bgCls:"light-magenta",
        title: "Auto-Generate Challans & Returns",
        description: "After payroll approval, QkrPayroll generates every required document automatically — PF ECR file, ESI contribution challan, PT challans (state-wise), TDS payment challan, and Form 24Q. No manual preparation. No downloading separate tools. Everything is ready to upload or submit."
      },
      {
        id: 3,
        badge: "3",
        bgCls:"light-info",
        title: "Stay Always Audit-Ready",
        description: "Every calculation, deduction, and filing is logged with timestamps, amounts, and the payroll run it belongs to. At any audit —internal or statutory — your complete compliance history is one export away. Nothing to reconstruct. Nothing missing. QkrPayroll makes audit prep a non-event."
      }
    ]
  }
];

export const  StatutoryComplianceData =[
  {
    id: 1,
    subTitle: "Provident Fund (EPF)",
    title: "Your PF Compliance - <span class='text-gradient'>Calculated, Filed & Reconciled Every Month</span>",
    description: "EPF is one of the most scrutinized statutory obligations in India. QkrPayroll handles every component of PF — employee deduction, employer contribution, EPS split, ECR file generation, and exemption management — without any manual intervention.",
    imgUrl: ImagesUrl_qkrpayroll.providentFund,
    alt: "Flexible salary configuration with QkrPayroll software",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "<span class='text-magenta'>Employee PF: 12%</span> of basic salary — deducted automatically every pay cycle"
      },
      {
        id: 2,
        text: "<span class='text-magenta'>Employer split:</span> 8.33% to EPS (capped at ₹15,000 basic) + 3.67% to EPF account"
      },
      {
        id: 3,
        text: "<span class='text-magenta'>ECR (Electronic Challan-cum-Return)</span> file auto-generated for EPFO direct upload"
      },
      {
        id: 4,
        text: "<span class='text-magenta'>VPF (Voluntary PF)</span> contributions tracked and included when employees opt in"
      },
      {
        id: 5,
        text: "<span class='text-magenta'>PF exemptions (for exempt establishments)</span> handled correctly without manual adjustment"
      },
      {
        id: 6,
        text: "<span class='text-magenta'>New joiner UAN</span> linking and exit settlement PF calculations built in"
      },
    ]
  },
  {
    id: 2,
    subTitle: "Employees' State Insurance (ESI)",
    title: "ESI Applicability Checked Per Employee - <span class='text-gradient'>Every Cycle, Automatically</span>",
    description: "ESI is tricky because it depends on an employee's gross salary that month — not their CTC. QkrPayroll checks applicability dynamically each pay cycle, so an employee whose gross crosses ₹21,000 is handled correctly without any manual flag from HR.",
    imgUrl: ImagesUrl_qkrpayroll.employeesState,
    alt: "Flexible salary configuration with QkrPayroll software",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "Applicability threshold (≤ ₹21,000 gross) checked per employee every single pay cycle"
      },
      {
        id: 2,
        text: "Employee (0.75%) and employer (3.25%) contributions calculated and deducted automatically"
      },
      {
        id: 3,
        text: "ESI contribution challan auto-generated for ESIC portal — ready to upload monthly"
      },
      {
        id: 4,
        text: "Half-yearly ESI return generated for each ESIC sub-code — April-September and October-March"
      },
      {
        id: 5,
        text: "Branch-wise ESIC code management for multi-location businesses"
      },
      {
        id: 6,
        text: "New joiner ESI IP number generation and exit handling built into employee lifecycle"
      }
    ]
  },
  {
    id: 3,
    subTitle: "TDS — Section 192",
    title: "TDS Calculated to the Rupee - <span class='text-gradient'>Old Regime, New Regime, Employee's Choice</span>",
    description: "TDS under Section 192 is the most complex statutory calculation in payroll — it depends on projected annual income, declared investments, HRA claims, and which tax regime the employee has chosen. QkrPayroll handles all of it, and generates Form 16 and Form 24Q without any manual preparation.",
    imgUrl: ImagesUrl_qkrpayroll.tdsSection192,
    alt: "Provident Fund (EPF)",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "Old tax regime — deductions under 80C, 80D, HRA, LTA, and others appliedas declared"
      },
      {
        id: 2,
        text: "New tax regime — standard deduction applied, TDS computed on new slab rates"
      },
      {
        id: 3,
        text: "Employee portal for investment declarations — proof submission tracked and verified"
      },
      {
        id: 4,
        text: "Monthly TDS adjusted based on projected annual income — no year-end surprises"
      },
      {
        id: 5,
        text: "Form 16 Part A and Part B auto-generated and distributed to every employee at year end"
      },
      {
        id: 6,
        text: "Form 24Q quarterly returns ready for TRACES filing — zero manual data entry"
      }
    ]
  },
  {
    id: 4,
    subTitle: "Professional Tax & Labour Welfare Fund",
    title: "State-Wise PT and LWF - <span class='text-gradient'>Pre-Configured, Never a Manual Update</span>",
    description: "Professional Tax rules differ by state — different slabs, different frequencies, different employer obligations. QkrPayroll has every PT-applicable state pre-configured. Just assign employees to their work location, and QkrPayroll handles the rest.",
    imgUrl: ImagesUrl_qkrpayroll.professionalTax,
    alt: "Professional Tax & Labour Welfare Fund",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "All PT-applicable states pre-configured — KA, MH, WB, TS, AP,TN, Gujarat, and more"
      },
      {
        id: 2,
        text: "State-specific slabs, applicable months, and employee/employer shares applied automatically"
      },
      {
        id: 3,
        text: "LWF contributions — employee and employer amounts — tracked by state-specific cycle"
      },
      {
        id: 4,
        text: "LWF deducted in the correct month (June/December or state- specific) — auto-scheduled"
      },
      {
        id: 5,
        text: "When employees relocate between states, QkrPayroll switches their PT configuration automatically"
      }
    ]
  }
];

export const GratuityBonuseData =[
 {
    id: 1,
    subTitle: "Gratuity & Bonus",
    title: "Beyond Monthly Compliance,<br/> <span class='text-gradient'>Gratuity and Bonus, Computed Correctly</span>",
    description: "Two obligations that catch many businesses off-guard. QkrPayroll computes both correctly, every time, based on current law.",
    alt: "Gratuity & Bonus",
    linkText: "",
    linkUrl: "",
    feature:[
      {
        icon: ImagesUrl_qkrpayroll.gratuityIcon,
        alt:"Gratuity calculation icon for automated gratuity management in QkrPayroll",
        title:"Gratuity",
        cls:"light-green",
        desc:"Payable to employees completing 5+ years of continuous service under the Payment of Gratuity Act, 1972. QkrPayroll calculates gratuity based on last drawn basic salary and completed years — accurately, without manual formula application.",
        list: [
            {
              id: 1,
              text: "Formula: (Last basic salary × 15 × years served) ÷ 26"
            },
            {
              id: 2,
              text: "Triggered automatically at employee exit after 5 years"
            },
            {
              id: 3,
              text: "Gratuity liability report for finance planning"
            },
        ]
      },
      {
        icon: ImagesUrl_qkrpayroll.statutoryDonus,
        alt:"Statutory bonus icon for automated bonus calculation in QkrPayroll software",
        title:"Statutory Bonus",
        cls:"light-info",
        desc:"Under the Payment of Bonus Act, 1965, employees earning up to ₹21,000/month are entitled to a minimum 8.33% bonus on ₹7,000 (or minimum wage, whichever is higher). QkrPayroll computes eligibility and bonus amounts during the annual cycle without manual calculation.",
        list: [
            {
              id: 1,
              text: "Eligibility check: employees ≤ ₹21,000/month gross"
            },
            {
              id: 2,
              text: "Minimum 8.33% — maximum 20% based on allocable surplus"
            },
            {
              id: 3,
              text: "Paid directly through payroll in the applicable month"
            },
        ]
      }
    ]
  }
]

export const AutoGeneratedData = [
  {
    id: 1,
    subTitle: "Challans & Returns",
    title: "Every Document, Auto-Generated After Every Payroll Run",
    description: "No more downloading separate tools, running reports manually, or building Excel challans. Every filing document is ready in QkrPayroll the moment payroll is approved.",
    items: [
       {
        id: 1,
        tag: "ECR",
        title: "PF ECR Challan",
        detail: "Monthly · After payroll approval",
        description: "As soon as attendance is locked and payroll processing begins, QkrPayroll calculates all five statutory contributions for every employee — applying their salary, work location, and tax regime. Rates are always current. No circular-hunting, no spreadsheet updates when EPFO or ESIC changes a rate.",
        action: "✓ Auto-generated"
      },
      {
        id: 2,
        tag: "ESI",
        title: "ESI Contribution Challan",
        detail: "Monthly · Per ESIC sub-code",
        description: "ESI challan with employee and employer contribution breakdowns, formatted for ESIC online portal upload. Branch-wise if applicable.",
        action: "✓ Auto-generated"
      },
      {
        id: 3,
        tag: "TDS",
        title: "TDS Payment Challan",
        detail: "Monthly · Section 192 payment",
        description: "Monthly TDS challan (ITNS 281) showing total TDS deducted across all employees for the month — ready for online tax payment.",
        action: "✓ Auto-generated"
      },
      {
        id: 4,
        tag: "24Q",
        title: "Form 24Q — TDS Return",
        detail: "Quarterly · Q1 to Q4",
        description: "Quarterly TDS statement for salaries — including all deductions, employee-wise TDS amounts, and PAN details — ready for TRACES filing.",
        action: "✓ Auto-generated"
      },
      {
        id: 5,
        tag: "F16",
        title: "Form 16 — Part A & B",
        detail: "Annual · Financial year end",
        description: "Complete Form 16 for every employee — Part A (TDS certificate from TRACES) and Part B (salary breakup and deductions). Auto-distributed via employee portal.",
        action: "✓ Auto-generated"
      },
      {
        id: 6,
        tag: "PT",
        title: "Professional Tax Challans",
        detail: "Monthly / Quarterly · Per state",
        description: "State-specific PT challans generated per applicable state based on employee work locations. Multi-state businesses get each challan independently.",
        action: "✓ Auto-generated"
      }
    ]
  }
];

export const FilingDeadlineData = [
  {
    id: 1,
    subTitle: "Compliance Calendar",
    title: "<span class='text-gradient'>Know Every Filing Deadline,</span><br/> Never Miss One Again",
    description: "QkrHR tracks due dates for every statutory filing. Your HR and Finance teams always know what's due, what's filed, and what's coming next.",
   

    cardData:[
      {
        title: "PF / EPF",
        cls: "pf-card",
        rows: [
          ["Monthly ECR", "15th of next month"],
          ["Penalty for delay", "12–18% p.a."]
        ],
        autoBadge:"✓ Auto-generated"
      },
      {
        title: "ESI",
        cls: "esi-card",
        rows: [
          ["Monthly challan", "15th of next month"],
          ["Half-yearly return", "Nov 11 • May 12"]
        ],
        autoBadge:"✓ Auto-generated"
      },
      {
        title: "TDS",
        cls: "tds-card",
        rows: [
          ["Monthly TDS payment", "7th of next month"],
          ["Form 24Q", "31st of month after Q"]
        ],
        autoBadge:"✓ Auto-generated"
      },
      {
        title: "PT & LWF",
        cls: "pt-card",
        rows: [
          ["PT challan", "State-specific date"],
          ["LWF deduction", "June / December"]
        ],
        autoBadge:"✓ Auto-generated"
      }
    ]
  }
];
export const AuditReadinessData = [
  {
    id: 1,
    subTitle: "Audit Readiness",
    title: "<span class='text-gradient'>Always Audit-Ready,</span><br/> Nothing to Reconstruct, Nothing Missing",
    description: "Most payroll compliance headaches come from audits — scrambling for records, reconciling challans, proving filings were made on time. QkrPayroll keeps everything indexed and exportable from day one.",
    stages: [
      {
        id: 1,
        iconIrl: ImagesUrl_qkrpayroll.completeCompliance,
        title: "Complete Compliance History",
        description: "Every statutory calculation, deduction, and challan is stored with the payroll run it belongs to. Filter by period, employee, or compliance type. Export in seconds."
      },
      {
        id: 2,
        iconIrl: ImagesUrl_qkrpayroll.timestampedFiling,
        title: "Timestamped Filing Records",
        description: "Every challan generation, payroll approval, and rate application is timestamped with who did it and when. The audit trail is complete and tamper-evident."
      },
      {
        id: 3,
        iconIrl: ImagesUrl_qkrpayroll.statutoryLiability,
        title: "Statutory Liability Reports",
        description: "Month-wise and year-wise liability summaries for PF, ESI, TDS, PT, and LWF — for both HR reconciliation and Finance ledger matching. One-click export."
      },
      {
        id: 4,
        iconIrl: ImagesUrl_qkrpayroll.ratechangeLog,
        title: "Rate Change Log",
        description: "Every time a statutory rate is updated in QkrPayroll, the change is logged with the effective date. You always know which rate applied to which pay cycle — no ambiguity during audits."
      },
      {
        id: 5,
        iconIrl: ImagesUrl_qkrpayroll.employeeLeveldrill,
        title: "Employee-Level Drill-Down",
        description: "For any employee, at any point in time — see the exact PF, ESI, TDS, and PT deducted, the challan it was part of, and the payroll run it came from. Audit answers in seconds."
      },
      {
        id: 6,
        iconIrl: ImagesUrl_qkrpayroll.secureRole,
        title: "Secure, Role-Restricted Access",
        description: "Compliance records are accessible to Finance and HR admins based on their role. Auditors can be given read-only access to specific periods — no full database exposure needed."
      }
    ]
  }
];
export const StatutoryCompliancesFaq = [
       {
        id: 1,
        Title: "What is statutory compliance in payroll?",
        Content: "Statutory compliance in payroll refers to the mandatory deductions, contributions, and government filings that every Indian employer must make on behalf of employees each month — PF, ESI, TDS under Section 192, Professional Tax, and LWF. Non-compliance carries penalties, interest, and legal liability. QkrPayroll automates all five — calculations, deductions, challan generation, and return filing."
      },
      {
        id: 2,
        Title: "Which statutory compliances does QkrPayroll automate?",
        Content: "QkrPayroll automates five statutory compliances: EPF/PF (12% employee + 12% employer on basic salary), ESI (0.75% employee + 3.25% employer for employees earning ≤ ₹21,000/month), TDS under Section 192 (old and new tax regime), Professional Tax (state-wise slabs), and Labour Welfare Fund. Challans, ECR files, Form 24Q, and Form 16 are all auto-generated after every payroll run."
      },
      {
        id: 3,
        Title: "How does QkrPayroll handle TDS under the new tax regime?",
        Content: "QkrPayroll supports both old and new tax regimes under Section 192. Employees declare their preferred regime through the QkrPayroll self-service portal. TDS is calculated on projected annual income under the chosen regime — investment declarations and HRA exemptions applied for the old regime, standard deduction and new slab rates for the new regime. Form 16 and Form 24Q are generated accordingly."
      },
      {
        id: 4,
        Title: "Does QkrPayroll support state-wise Professional Tax calculations?",
        Content: "Yes. QkrPayroll pre-configures Professional Tax rules for all PT-applicable Indian states — Karnataka, Maharashtra, West Bengal, Telangana, Andhra Pradesh, Tamil Nadu, Gujarat, and more. Slab rates, applicable months, and employee/employer contributions are applied automatically based on each employee's work location. State-specific PT challans are generated independently."
      },
      {
        id: 5,
        Title: "Are challans and returns auto-generated in QkrPayroll?",
        Content: "Yes. After every approved payroll run, QkrPayroll auto-generates the PF ECR file, ESI contribution challan, PT challans (per state), TDS payment challan, and LWF contribution reports. Form 24Q quarterly TDS returns and Form 16 (Part A and Part B) are generated at the right point in the compliance cycle — no manual preparation or separate tool needed."
      },
      {
        id: 6,
        Title: "What is EPF and how is it calculated in payroll?",
        Content: "EPF (Employee Provident Fund) is a mandatory retirement savings scheme under the EPF Act 1952. Both employee and employer contribute 12% of basic salary monthly. Of the employer's 12%, 8.33% goes to EPS (Pension Scheme) on a salary cap of ₹15,000, and 3.67% goes to the PF account. QkrPayroll calculates all components automatically and generates the monthly ECR file for EPFO upload — including VPF contributions and PF exemption handling."
      }
];

export const PayrollCtaData = [
  {
    id: 1,
    title: "Never Fear a Compliance <span class='text-gradient'>Audit Again.</span>",
    description: "500+ Indian companies run payroll on QkrPayroll. Book a 30-minute demo — we'll walk you through a full pay run, live.",
    buttons: [
      {
        id: 1,
        label: "Book a Free Demo",
        url: "/signup",
        type: "cta-btn-magenta"
      },
      {
        id: 2,
        label: "See Pricing",
        url: "/hrms-software/qkrhr-pricing",
        type: "cta-btn-outline"
      },
      {
        id: 3,
        label: "Payroll Overview →",
        url: "/payroll-software",
        type: "cta-btn-outline"
      }
    ]
  }
];