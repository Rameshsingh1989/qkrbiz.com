
import { qkrpayroll as ImagesUrl_qkrpayroll } from "../../../assets/images";

import attendanceArrives from '@/assets/images/qkrpayroll/attendance-arrives.svg';
import oneRevision from '@/assets/images/qkrpayroll/one-revision.svg';
import payrollShould from '@/assets/images/qkrpayroll/payroll-should.svg';
import salaryLanded from '@/assets/images/qkrpayroll/salary-landed.svg';
import wrongSlab from '@/assets/images/qkrpayroll/wrong-slab.svg';

export const QkrPayrollHomeMeta = {
  title: "Payroll Software in India | Salary & Compliance | QkrPayroll",
  description: "Simplify salary processing, PF, ESI, TDS, PT & compliance with QkrPayroll. Cloud-based payroll software in Indian businesses. Get a free demo.",
};


export const PayrollHomeData = [
   {
      id:1,
      youTubeVideoUrl: "bf3U8zW1dxc",
      videoUrl: "",
      imgUrl:ImagesUrl_qkrpayroll.qkrpayrollHeader,
      alt:"Cloud-based payroll software in India",
      title:"Cloud-based payroll software in India",
      subTitle:"<span class='text-gradient'>Automate your entire payroll cycle, </span> <br/>attendance to disbursement",
      desc:"QkrPayroll handles everything from salary structures to statutory filing: PF, ESI, PT, LWF, and TDS — so your payroll runs without errors, every month.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
   },
];
export const PayrollProblemsData = [
  {
    subTitle: "Modern payroll software reality",
    title: "5 Payroll Problems Costing Indian Businesses <span class='text-gradient'>Hours Every Month</span>",
    description: "",
    problems: [
      {
        icon: attendanceArrives,
        title: "Attendance arrives late. Payroll runs late.",
        description: "Chasing department heads for attendance confirmation on the 28th. By the time it's locked, disbursement is already delayed and employees are asking HR when salaries will hit.",
        bGcolor: "bg-blue",
        full: false,
      },
      {
        icon: oneRevision,
        title: "One revision. Three hours of corrections.",
        description: "A single salary change cascades into manual recalculations across components, statutory deductions, and payslips. What should take 5 minutes takes half a working day.",
        bGcolor: "bg-rose",
        full: false,
      },
      {
        icon: wrongSlab,
        title: "Wrong PT slab. Wrong state. Compliance risk.",
        description: "Professional Tax rates differ across 18 states. One wrong configuration means incorrect <br/> challans filed for months — with penalties that arrive long after the mistake was made.",
        bGcolor: "bg-violets",
        full: true,
      },
      {
        icon: salaryLanded,
        title: "Salary landed wrong. Employee escalated.",
        description: "The mismatch between what the employee expected and what landed in their account. HR spends the first week of every month explaining discrepancies that should have been caught before disbursement.",
        bGcolor: "bg-pink",
        full: false,
      },
      {
        icon: payrollShould,
        title: "Payroll that should take 2 days takes 5.",
        description: "Finance is waiting. Management is asking. HR is firefighting. No guided process, no automated checks, no handoff control — just one person holding the entire payroll cycle together manually.",
        bGcolor: "bg-peach",
        full: false,
      },
    ],
  },
];


export const PayrollNeedsData = [
     {
      subTitle:"Payroll Features",
      title: "Payroll, Tax and Compliance in, <span class='text-gradient'>One Platform</span>",
      description: 'Three core modules, all connected. No data entry between systems, no compliance guesswork.',
      features: [
        {
         imgUrl: ImagesUrl_qkrpayroll.payrollManagement,
          title: 'Payroll Management',
          description: `QkrPayroll smart console streamlines payroll—from structure to salary slips—without missing a step. With the Payroll Wizard, it's “Perfect Payroll, Every Time.”`,
          link:"/payroll-software/management",
          linkText:"See Payroll in Action  →",
          bGcolor: 'bg-greens'
        },
        {
         imgUrl: ImagesUrl_qkrpayroll.statutoryCompliance,
          title: 'Statutory Compliance',
          description: 'Stay audit-ready with automated PF, ESI, professional tax, gratuity, and LWF calculations, challans, and returns—all updated to current statutory rates.',
          link:"/payroll-software/statutory-compliance",
          linkText:"Always Audit-Ready →",
          bGcolor: 'bg-magentas'
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.loanAndAdvance,
          title: 'Loans and Advances',
          description: 'Centralize employee advance and loan requests with configurable policies, automated approvals, seamless disbursements, and EMI tracking.',
          link:"/payroll-software/loans-advances",
          linkText:"Advances, On Autopilot  →",
          bGcolor: 'bg-infos'
        },
      ],
    },
];

export const PayrollFoundationData = [
     {
      subTitle:"Pre-Payroll Stage",
      title: "Set the Foundation for <span class='text-gradient'>Accurate Payroll</span>",
      description: 'Before payroll runs, QkrPayroll makes sure every input is verified. Attendance, pay groups, and pay cycles — all in order.',
      features: [
        {
         imgUrl: ImagesUrl_qkrpayroll.attendanceLeaveAuto,
          title: 'Attendance & Leave Auto-Sync',
          description: '',
          link:"Attendance & Leave Auto-Sync",
        },
        {
         imgUrl: ImagesUrl_qkrpayroll.fieldTeamAttendance,
          title: 'Field Team Attendance Tracking',
          description: '',
          link:"Field Team Attendance Tracking",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.defineMultiplePay,
          title: 'Define Multiple Pay Groups',
          description: '',
          link:"Define Multiple Pay Groups",
        },
         {
         imgUrl: ImagesUrl_qkrpayroll.multiEntityPayroll,
          title: 'Multi-entity payroll setup',
          description: '',
          link:"Multi-entity payroll setup",
        },
        {
         imgUrl: ImagesUrl_qkrpayroll.handleDifferentPay,
          title: 'Handle different pay cycles',
          description: '',
          link:"Handle different pay cycles",
        },
        {
         imgUrl: ImagesUrl_qkrpayroll.createCustomSalary,
          title: 'Create custom salary structures',
          description: '',
          link:"Create custom salary structures",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.configureLoansSalary,
          title: 'Configure loans & salary advances',
          description: '',
          link:"Configure loans & salary advances",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.appraisalsIncrements,
          title: 'Appraisals, increments & revisions',
          description: '',
          link:"Appraisals, increments & revisions",
        },
      ],
    },
];

export const RunPayrollData = [
    {
      subTitle: "How QkrPayroll Works",
      title: "Run Payroll in 3 Simple Steps — <span class='text-gradient'>Start to Finish</span>",
      description: "QkrPayroll 3-stage payroll locking cycle eliminates errors before they happen. Each stage locks data before the next begins — so every payroll is accurate and audit-ready.",
      stages: [
        {
          tabName: "Stage 1",
          title: "Attendance Cycle End Stage",
          imgUrl: ImagesUrl_qkrpayroll.payrollStage1,
          alt: "QkrPayroll stage 1 attendance review, validation, and attendance locking",
          features: [
            { 
              label: "HR dashboard for attendance review", 
            },
            { 
              label: "Error identification & corrections", 
            },
            { 
              label: "Attendance locked by HR teams", 
            },
            { 
              label: "Final data validation", 
             },
          ],
        },
        {
          tabName: "Stage 2",
          title: "Payroll Processing Stage",
          alt: "QkrPayroll stage 2 automated salary calculation and statutory compliance processing",
          imgUrl: ImagesUrl_qkrpayroll.payrollStage2,
          features: [
            { 
              label: "Automated salary calculations", 
            },
            { 
              label: "Step-by-step payroll wizard",
            },
            { label: "Compliance calculations (PF, ESI, TDS, PT)",
            },
            { 
              label: "Up-to-date statutory compliance", 
             },
          ],
        },
        {
          tabName: "Stage 3",
          title: "Pay & Lock Payroll",
          imgUrl: ImagesUrl_qkrpayroll.payrollStage3,
          alt: "QkrPayroll stage 3 salary disbursement, audit reports, and final payroll lock",
          features: [
            { 
              label: "Disburse salaries,", 
            },
            { 
              label: "Accurate filings and reports", 
            },
            {
               label: "Audit-ready documentation", 
            },
            { 
              label: "Lock payroll for audit safety", 
            },
          ],
        },
      ],
    },
];

export const BuiltAccuracyData = [
    {
      subTitle:"",
      title: "Built for Accuracy, <span class='text-gradient'>Designed for Flexibility</span>",
      description: "From start to finish—in just 3 simple steps.",
      features: [
        {
          imgUrl: ImagesUrl_qkrpayroll.payrollNotified,
          title: "Get notified at every stage of payroll",
          bGcolor: "bg-1",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.payrollResume,
          title: "Pause and resume payroll processing",
          bGcolor: "bg-2",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.payrollCorrections,
          title: "Never miss a step with guided workflows",
          bGcolor: "bg-3",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.payrollGuidedWorkflows,
          title: "Go back and make corrections before finalizing",
          bGcolor: "bg-4",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.payrollProcess,
          title: "Process employees selectively or in bulk",
          bGcolor: "bg-5",
        },
        {
          imgUrl: ImagesUrl_qkrpayroll.payrollLockPayroll,
          title: "Lock payroll only when everything is perfect",
          bGcolor: "bg-6",
        },
      ],
    },
];

export const EveryStakeholderData = [
    {
      subTitle: "Built for Every Stakeholder",
      title: "Built for <span class='text-gradient'>Every Stakeholder</span> in Your Business",
      description: "QkrPayroll gives each person exactly what they need — without giving them what they don't.",
      stages: [
        {
          tabName: "Employees",
          bgClass:"bg-dangers",
          title: "Employees",
          imgUrl: ImagesUrl_qkrpayroll.payrollEmployees, 
          features: [
            { label: "Track salary status in real time", 
            },
            { 
              label: "No need to ask HR about payment timelines", 
            },
            { 
              label: "Access payslips, tax details, and requests anytime", 
            }
          ],
        },
        {
          tabName: "HR & Admin",
          bgClass:"bg-voilet",
          title: "HR & Admin",
          imgUrl: ImagesUrl_qkrpayroll.payrollHrAdmin,
          features: [
            { 
              label: " Manage attendance and payroll from one dashboard", 
            },
            { 
              label: "Validate and lock attendance without errors",
               },
            { label: "Ensure smooth, compliant payroll processing",
            },
          ],
        },
        {
          tabName: "Finance",
          bgClass:"bg-warnings",
          title: "Finance",
          imgUrl: ImagesUrl_qkrpayroll.payrollFinance,
          features: [
            { 
              label: "Track payroll progress via dashboard", 
            },
            { label: "Identify pending actions instantly", 
            },
            {
               label: "Finalize payroll using guided wizard", 
            },
            { 
              label: "Process payments and lock payroll securely", 
            },
          ],
        },
      ],
    },
];

export const  FullHrmsData = [
    {
      subtitle: 'Also Need Full HR Management?',
      title: "QkrPayroll + Full HRMS —<span class='text-gradient'> One Platform</span>",
      description: 'QkrPayroll works as a standalone payroll system and also integrates seamlessly with QkrHR HRMS — our complete HR management platform for attendance, leave, onboarding, field force management, and employee records. One platform. No data silos.',
      imgUrl:ImagesUrl_qkrpayroll.fullHrms,
      link:" Explore QkrPayroll – HR + Payroll Together →",
    }
] ;

export const PayrollFAQ = [
  {
    id: 1,
    Title: "What is payroll software?",
    Content: "Payroll software is a system that automates employee salary processing — calculating earnings, deductions, and taxes, generating payslips, and preparing statutory filings. In India, this includes automatic PF, ESI, TDS, and professional tax computation, so HR and finance teams can run accurate, compliant payroll in minutes instead of days of spreadsheet work.",
  },
  {
    id: 2,
    Title: "Which payroll software is best for mid-size and growing businesses in India?",
    Content: "Qkrpayroll is built for mid-size and growing businesses that have outgrown spreadsheets and entry-level tools but don't want enterprise-grade complexity or cost. It automates PF, ESI, TDS, and professional tax across 18 states, supports multi-entity and multi-location payroll, and scales as your headcount grows — no re-implementation needed. With a 15-day full implementation and dedicated WhatsApp support, growing teams go live fast without a heavy IT project.",
  },
  {
    id: 3,
    Title: "How does QkrPayroll manage PF, ESI, TDS & professional tax compliance?",
    Content: "Qkrpayroll calculates PF, ESI, TDS, and professional tax automatically in every pay cycle and generates challan-ready reports for filing. Professional tax is covered across all 18 PT-levying Indian states, with state-specific slabs applied automatically — including edge cases like Maharashtra's February rate. Statutory updates are maintained in the software, so your team never tracks rule changes manually.",
  },
  {
    id: 4,
    Title: "Is QkrPayroll among the top payroll software in India?",
    Content: "Yes, QkrPayroll is built for Indian businesses with 50–500 employees. It runs every payroll through a three-stage locking cycle (Attendance Lock → Processing → Disbursement) and applies Professional Tax slabs across 18 states automatically. It handles PF, ESI, TDS and LWF out of the box. Employees go live in 7 days and full implementation takes 15 days, with a one-time onboarding fee, no AMC, and WhatsApp support.",
  },
  {
    id: 5,
    Title: "How long does it take to implement payroll software?",
    Content: "With Qkrpayroll, employees go live in 7 days and full implementation completes in 15 days — including data migration, salary structure setup, and statutory configuration. A dedicated point of contact on WhatsApp supports your team throughout, so switching payroll doesn't turn into a months-long IT project.",
  },
  {
    id: 6,
    Title: "Can I switch payroll software mid-financial-year?",
    Content: "Yes — you don't have to wait for April. Qkrpayroll migrates your year-to-date payroll data, including earnings, deductions, and TDS already deducted, so Form 16, tax computations, and statutory filings stay accurate for the full financial year. Most mid-year switches complete within the standard 15-day implementation window.",
  },
  {
    id: 7,
    Title: "Does payroll software integrate with attendance and leave?",
    Content: "Yes. Qkrpayroll runs on a three-stage cycle: Attendance Lock, Processing, and Disbursement. Attendance and leave data — including GPS-based field force attendance — flows directly into payroll, and locking attendance before processing means no last-minute changes can corrupt a payroll run. Loss of pay, overtime, and shift data are applied automatically.",
  },
  {
    id: 8,
    Title: "Can Qkrpayroll run payroll for multiple entities and locations?",
    Content: "Yes. Qkrpayroll supports multi-entity, multi-location payroll from a single platform — separate legal entities, state-wise professional tax slabs, and location-specific compliance are all handled in one system. This makes it a strong fit for groups of companies, CAs and payroll consultants managing multiple clients, and businesses expanding across states.",
  },
  {
    id: 9,
    Title: "What is the difference between payroll software and an HRMS?",
    Content: "Payroll software focuses on salary processing and statutory compliance, while an HRMS covers the full employee lifecycle — attendance, leave, onboarding, appraisals, and more — with payroll as one module. Qkrpayroll is available both as standalone payroll software and as the payroll module inside QkrHR, so you can start with payroll alone and expand to the full HRMS when you're ready.",
  },
  {
    id: 10,
    Title: "Can employees access their own payslips and tax documents?",
    Content: "Yes. Employee self-service lets your team download payslips, view Form 16, submit investment declarations, and check tax computations from their mobile — without emailing HR. This cuts routine payroll queries sharply and keeps proof-of-income documents available to employees on demand.",
  },
  {
    id: 11,
    Title: "How much does payroll software cost in India?",
    Content: "Payroll software in India is typically priced per employee per month, so cost scales with your headcount rather than a large upfront licence. Qkrpayroll follows the same model — you pay for the employees you process, and pricing adjusts as your team grows. For exact pricing for your team size and requirements, request a quote or book a demo.",
  },
   {
    id: 12,
    Title: "Does QkrPayroll support both the old and new income tax regimes?",
    Content: "Yes, Each employee chooses a tax regime at the start of the financial year, and QkrPayroll calculates monthly TDS using that regime's slabs and deductions. Under the old regime, investment declarations and proofs submitted through employee self-service feed straight into the calculation. Employees can view their tax computation anytime, which reduces year-end surprises and questions to HR.",
  },
   {
    id: 13,
    Title: "How is full and final settlement calculated in QkrPayroll?",
    Content: "QkrPayroll computes full and final settlement automatically when an employee exits. It covers:"
    +"<ul>"
      +"<li>pending salary</li>"
      +"<li>leave encashment</li>"
      +"<li>gratuity where applicable</li>"
      +"<li>notice-period recovery or payout</li>"
      +"<li>loan and advance recovery</li>"
      +"<li>final TDS</li>"
    +"</ul>"
+"It then generates an itemised settlement statement for approval. HR doesn't have to rebuild the calculation in a spreadsheet, and the employee gets a clear breakdown.",
  },
   {
    id: 14,
    Title: "Can QkrPayroll create the PF ECR file for EPFO filing?",
    Content: "Yes, After payroll is locked, QkrPayroll generates the monthly Electronic Challan cum Return (ECR) file in the format the EPFO portal accepts. It includes UAN-wise wages, employee and employer contributions, and the EPS split. Your team uploads the file and pays the challan without re-keying any figures, which removes the main source of PF filing mismatches",
  },
];



