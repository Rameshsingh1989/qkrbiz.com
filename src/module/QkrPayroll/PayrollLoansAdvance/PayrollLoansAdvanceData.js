import { qkrpayroll as ImagesUrl_qkrpayroll } from "../../../assets/images";

export const PayrollLoansAdvanceMeta = {
  title: "Employee Loans & Advances | Payroll Software | QkrPayroll",
  description: "QkrPayroll manages employee loans & salary advances – configurable policies, automated approvals, EMI auto-deduction & instant loan statements. Free demo.",
};

export const PayrollManagementHeadData = [
  { 
    id:1,
      youTubeVideoUrl: "bf3U8zW1dxc",
      videoUrl: "",
      imgUrl:ImagesUrl_qkrpayroll.loansAdvanceHeader,
      alt:"Employee Loan and Advance Management Software",
      title:"Employee Loan and Advance Management Software",
      subTitle:"Employee Loans & Advances,<br/> <span class='text-gradient'>Configure, Approve, Track. All in Payroll.</span> ",
      desc:"From loan policy setup to the final EMI — QkrPayroll manages every step inside payroll. No spreadsheets, no side-tracking, no manual deductions every month",
      subDesc:"",
      link:"/signup",
      HeadList:[
      ]
  }
];

export const ComplianceStagesData = [
  {
    id: 1,
    subTitle: "How It Works",
    title: "Four Steps from Request to Final EMI — All Automated",
    description: "QkrPayroll handles every stage of the employee loan lifecycle. HR sets up the policy once — the rest runs automatically, pay cycle after pay cycle.",
    stages: [
      {
        id: 1,
        badge: "1",
        bgCls:"light-magenta",
        title: "Employee Submits Request",
        description: "Through the QkrPayroll self-service portal — on web or mobile. Employee selects loan type, enters amount, adds reason. The system shows only eligible amounts based on their grade policy — over-limit requests never reach approvers."
      },
      {
        id: 2,
        badge: "2",
        bgCls:"light-magenta",
        title: "Approval Workflow Triggers",
        description: "The request routes through the configured approval chain — manager, HR, and finance — with notifications at each step. Approvers act from the Pending Inbox. No email threads, no WhatsApp follow-ups, no status confusion."
      },
      {
        id: 3,
        badge: "3",
        bgCls:"light-magenta",
        title: "Disbursement via Payroll",
        description: "On final approval, the loan is disbursed through the payroll run — as a one-time salary addition — or tracked as a separate payment. The repayment schedule and EMI amount are set automatically based on the policy and approved tenure."
      },
      {
        id: 4,
        badge: "3",
        bgCls:"light-magenta",
        title: "EMI Auto-Deducted Monthly",
        description: "Every pay cycle, QkrPayroll deducts the EMI from the employee's salary without any HR action. Loan balance updates. Employee sees it clearly on their payslip. HR sees all active loans and EMI totals in the dashboard. Nothing to manage month-to month."
      }
    ]
  }
];

export const  PayrollLoansAdvanceData =[
  {
    id: 1,
    subTitle: "Loan Policy Configuration",
    title: "Set the Rules Once — <span class='text-gradient'>QkrPayroll Enforces Them Every Time</span>",
    description: "Every company has different loan rules for different employee levels. QkrPayroll lets you define loan policies by grade or department — covering eligibility, limits, loan types, and repayment terms. Once configured, the system enforces them automatically for every request.",
    imgUrl: ImagesUrl_qkrpayroll.loanPolicyConfiguration,
    alt: "Set the Rules Once — QkrPayroll Enforces Them Every Time",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "Configure maximum loan amount per grade — Junior, Mid, Senior, Manager can each have different limits"
      },
      {
        id: 2,
        text: "Define eligible loan types per grade — not every grade needs access to every loan type"
      },
      {
        id: 3,
        text: "Set maximum repayment tenure (months) and minimum employment tenure for eligibility"
      },
      {
        id: 4,
        text: "Define interest rate (0% or any rate) — simple or reducing balance method, both supported"
      },
      {
        id: 5,
        text: "Set maximum outstanding loans allowed at one time per employee — per type or in total"
      },
      {
        id: 6,
        text: "Probation period lock — prevent loan requests during probation, auto-lifted after confirmation"
      },
    ]
  },
  {
    id: 2,
    subTitle: "Approval Workflow & Disbursement",
    title: "Multi-Level Approvals — <span class='text-gradient'>No Email Chains, No Follow-Ups</span>",
    description: "Loan requests flow through a structured, configurable approval chain. Every approver gets notified instantly and can act from their dashboard. No status ambiguity, no requests lost in inboxes.",
    imgUrl: ImagesUrl_qkrpayroll.approvalWorkflowDisbursement,
    alt: "Multi-Level Approvals No Email Chains, No Follow-Ups",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "Configure approval chain — reporting manager → HR Admin → Finance — for each loan type"
      },
      {
        id: 2,
        text: "Approvers can approve, reject, or modify the amount within the policy limit"
      },
      {
        id: 3,
        text: "Pending approvals surface in QkrPayroll Pending Inbox — live count, no checking required"
      },
      {
        id: 4,
        text: "Employee gets notified at every stage — request received, approved by manager, pending finance"
      },
      {
        id: 5,
        text: "Disbursement via payroll run — loan amount added to that month's net pay automatically"
      },
      {
        id: 6,
        text: "Repayment schedule auto-generated on approval — EMI, tenure, outstanding balance set immediately"
      }
    ]
  },
  {
    id: 3,
    subTitle: "EMI Auto-Deduction & Tracking",
    title: "Set It Once — <span class='text-gradient'>EMIs Deduct Themselves Every Month</span>",
    description: "Once a loan is approved, QkrPayroll handles the rest. EMIs deduct automatically every pay cycle. Balances update in real time. Employees see it on their payslip. HR sees it in the dashboard. Nobody has to do anything manually — month after month, until the loan closes.",
    imgUrl: ImagesUrl_qkrpayroll.emiAutoDeductionTracking,
    alt: "Set It Once — EMIs Deduct Themselves Every Month",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "EMI auto-calculated based on approved loan amount, tenure, and interest rate"
      },
      {
        id: 2,
        text: "Deducted from monthly salary without any HR action — appears on payslip as a separate line item"
      },
      {
        id: 3,
        text: "Outstanding balance and paid installments visible to employee in their self-service portal"
      },
      {
        id: 4,
        text: "If an employee is on LOP or has low net pay, the system flags it — HR decides whether to defer the EMI"
      },
      {
        id: 5,
        text: "Early closure (foreclosure) handled — remaining balance deducted in one shot, loan marked closed"
      },
      {
        id: 6,
        text: "On employee exit, outstanding loan balance flagged for recovery from final settlement"
      }
    ]
  },
  {
    id: 4,
    subTitle: "Multiple Concurrent Loans",
    title: "One Employee, Multiple Loans — <span class='text-gradient'>Each Tracked Independently</span>",
    description: "Employees don't always have one financial need at a time. QkrPayroll supports multiple active loans simultaneously — each with its own repayment schedule, EMI, and outstanding balance. All deducted automatically. All visible on the payslip separately.",
    imgUrl: ImagesUrl_qkrpayroll.multipleConcurrentLoans,
    alt: "One Employee, Multiple Loans — Each Tracked Independently",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "Personal loan, medical emergency, and festival advance can all run at the same time"
      },
      {
        id: 2,
        text: "Each loan has its own EMI, tenure, and balance — tracked and deducted independently"
      },
      {
        id: 3,
        text: "Total monthly deduction checked against configurable maximum — net pay never goes below a threshold"
      },
      {
        id: 4,
        text: "Each loan appears as a separate line item on the payslip — full transparency for employee"
      },
      {
        id: 5,
        text: "Loan history maintained per employee — closed loans, active loans, full payment trail"
      }
    ]
  },
  {
    id: 5,
    subTitle: "Salary Advance",
    title: "Salary Before Pay Day — <span class='text-gradient'>Tracked and Adjusted Automatically</span>",
    description: "Sometimes employees need money before the monthly payroll date. QkrPayroll handles salary advances — including approval, disbursement, and automatic salary adjustment — without any separate reconciliation by HR or Finance.",
    imgUrl: ImagesUrl_qkrpayroll.salaryAdvance,
    alt: "Salary Before Pay Day-Tracked and Adjusted Automatically",
    linkText: "",
    linkUrl: "",
    features: [
      {
        id: 1,
        text: "Employee requests advance against earned salary for the current month — within configured limits"
      },
      {
        id: 2,
        text: "Approval routes through manager and HR — same structured workflow as other loan types"
      },
      {
        id: 3,
        text: "Advance amount automatically adjusted (deducted) from the same or next month's salary"
      },
      {
        id: 4,
        text: "Appears as a clearly labelled deduction on the payslip — no ambiguity for employee or Finance"
      },
      {
        id: 5,
        text: "No separate spreadsheet or manual reconciliation needed between payroll and advance records"
      }
    ]
  }
];

export const GratuityBonuseData =[
 {
    id: 1,
    subTitle: "Interest Calculation",
    title: "With Interest or Without — <span class='text-gradient'>Both Methods Supported</span>",
    description: "Many companies offer 0% interest loans as an employee benefit. Some charge nominal interest. QkrPayroll handles both — and applies the correct method automatically based on the policy.",
    alt: "Interest Calculation",
    linkText: "",
    linkUrl: "",
    feature:[
      {
        icon: ImagesUrl_qkrpayroll.gratuityIcon,
        alt: "Gratuity calculation icon for automated gratuity management in QkrPayroll",
        badge: "1",
        title:"Zero Interest (0%) — Employee Benefit",
        cls:"light-green",
        desc:"Most Indian companies offer interest-free loans as an employee welfare benefit. Configure QkrPayroll to apply 0% on any loan type. The EMI is simply the loan amount divided by tenure — clean and simple.",
        exampleLabel: "Example:",
        list: [
            {
              id: 1,
              text: "₹1,20,000 loan · 12 months · 0% interest"
            },
            {
              id: 2,
              text: "EMI = ₹10,000/month flat · No interest component"
            }
        ]
      },
      {
        icon: ImagesUrl_qkrpayroll.statutoryDonus,
        alt: "Statutory bonus icon for automated bonus calculation in QkrPayroll software",
        badge: "2",
        title:"Reducing Balance Method",
        cls:"light-info",
        desc:"For loans where interest applies, QkrPayroll uses the reducing balance method — interest calculated on the outstanding principal, which decreases each month as EMIs are paid. Accurate, fair, and auto-computed.",
        exampleLabel: "Example:",
        list: [
            {
              id: 1,
              text: "₹1,00,000 · 12 months · 12% p.a."
            },
            {
              id: 2,
              text: "Month 1 EMI: ₹8,885 (₹1,000 interest + ₹7,885 principal)"
            },
            {
              id: 3,
              text: "Month 12 EMI: ₹8,885 (₹74 interest + ₹8,811 principal)"
            }
        ]
      }
    ]
  }
]

export const ComplianceCalendarData = [
  {
    id: 1,
    subTitle: "Compliance Calendar",
    title: "Know Every Filing Deadline — <span class='text-gradient'>Never Miss One Again</span>",
    description: "QkrPayroll tracks due dates for every statutory filing. Your HR and Finance teams always know what's due, what's filed, and what's coming next.",
    items: [
       {
        id: 1,
        iconIrl:ImagesUrl_qkrpayroll.personalLoanIcon,
        class: "card_2",
        title: "Personal Loan",
        description: "General-purpose employee loan — home repairs, family needs, or any personal financial requirement. Configurable amount and tenure per grade.",
        pill: "Most common",
        cls: "light-purple"
      },
      {
        id: 2,
        class: "card_1",
        iconIrl:ImagesUrl_qkrpayroll.medicalEmergencyLoanIcon,
        title: "Medical Emergency Loan",
        description: "For urgent medical situations — hospitalisation, surgery, or family health emergencies. Often prioritised in the approval workflow for faster processing.",
        pill: "Priority disbursement",
        cls: "light-green"
      },
      {
        id: 3,
        iconIrl:ImagesUrl_qkrpayroll.festivalAdvanceIcon,
        class: "card_3",
        title: "Festival Advance",
        description: "Seasonal employee advance for Diwali, Eid, Christmas, or other festivals. Short tenure, typically 2–5 months. Widely used across industries in India.",
        pill: "Short tenure",
        cls: "light-peach"
      },
      {
        id: 4,
        iconIrl:ImagesUrl_qkrpayroll.educationLoanIcon,
        class: "card_4",
        title: "Education Loan",
        description: "For employee's own further education or children's schooling fees. Typically longer tenure — up to 24 months — with higher eligibility for senior grades.",
        pill: "Long tenure",
        cls: "light-lavender"
      },
      {
        id: 5,
        iconIrl:ImagesUrl_qkrpayroll.vehicleLoanIcon,
        class: "card_4",
        title: "Vehicle Loan",
        description: "Two-wheeler or four-wheeler purchase assistance. Usually available to mid and senior grade employees. Higher loan amounts with 12–24 month repayment.",
        pill: "Senior grades",
        cls: "light-purple"
      },
      {
        id: 6,
        iconIrl:ImagesUrl_qkrpayroll.salaryAdvanceIcon,
        class: "card_3",
        title: "Salary Advance",
        description: "Advance against the current month's earned salary. Recovered automatically in the same or next payroll run. No tenure — single recovery.",
        pill: "Single month",
        cls: "light-peach"
      },
      {
        id: 7,
        iconIrl:ImagesUrl_qkrpayroll.expenseAdvanceIcon,
        class: "card_1",
        title: "Expense Advance",
        description: "Cash advance for business travel or project expenses — before submission of actual bills. Reconciled against expense claims after the trip or project.",
        pill: "Expense linked",
        cls: "light-green"
      },
      {
        id: 8,
        iconIrl:ImagesUrl_qkrpayroll.customLoanTypeIcon,
        class: "card_2",
        title: "Custom Loan Type",
        description: "Create any loan type specific to your industry or policy — housing, relocation, tools, uniform, or anything your workforce needs. Fully configurable.",
        pill: "Your policy, your type",
        cls: "light-blue"
      }
    ]
  }
];

export const FinanceReportsData = [
  {
    id: 1,
    subTitle: "Loan Reports",
    title: "Complete Visibility for HR and Finance — <span class='text-gradient'>Every Report, On Demand</span>",
    description: "From outstanding balances to monthly EMI summaries, QkrPayroll gives HR and Finance every report they need — without building it manually from payslip data.",
    stages: [
      {
        id: 1,
        iconIrl:ImagesUrl_qkrpayroll.outstandingLoanReportIcon,
        badge: "Senior Grades",
        title: "Outstanding Loan Report",
        description: "Total outstanding balance per employee across all active loans — type, disbursed amount, paid amount, and remaining. Filter by department or grade."
      },
      {
        id: 2,
        iconIrl:ImagesUrl_qkrpayroll.emiScheduleEmployeeIcon,
        badge: "Employee & HR",
        title: "EMI Schedule per Employee",
        description: "Month-wise repayment schedule for each active loan per employee — including EMI split (principal + interest, if applicable) and balance after each payment."
      },
      {
        id: 3,
        iconIrl:ImagesUrl_qkrpayroll.MonthlyEmiSummaryIcon,
        badge: "Monthly",
        title: "Monthly EMI Summary",
        description: "Total EMI deductions for the current payroll month across all employees — by loan type, department, or entity. Used for Finance payroll reconciliation."
      },
      {
        id: 4,
        iconIrl:ImagesUrl_qkrpayroll.loanEligibilityReportIcon,
        badge: "HR Admin",
        title: "Loan Eligibility Report",
        description: "Current eligibility status of all employees — whether they can apply, why they cannot (probation, existing loan limit reached), and their maximum eligible amount by grade."
      },
      {
        id: 5,
        iconIrl:ImagesUrl_qkrpayroll.loanClosureReportIcon,
        badge: "Audit & Closure",
        title: "Loan Closure Report",
        description: "History of all loans closed in a period — repaid on schedule, foreclosed, or adjusted at exit. Full audit trail with approval history and disbursement dates."
      },
      {
        id: 6,
        iconIrl:ImagesUrl_qkrpayroll.financeLiabilityIcon,
        badge: "Finance Planning",
        title: "Finance Liability Dashboard",
        description: "Total loan liability outstanding across all employees — by entity, department, and loan type. Helps Finance plan provisions and track employee benefit costs."
      }
    ]
  }
];

export const TailoredEveryData = [
    {
      subTitle: "Role-Based Experience",
      title: "Three Teams. One System. <span class='text-gradient'>Each Sees What They Need.</span>",
      description: "QkrPayroll gives employees, HR admins, and Finance teams exactly the view that serves them — without overlap or confusion.",
      stages: [
        {
          tabName: "Employees",
          bgClass:"bg-dangers",
          title: "Apply, track, and repay — all from your phone.",
          desc:"Employees don't need to ask HR for loan status or outstanding balance. Everything is available in the QkrPayroll self-service portal — anytime, from any device.",
          imgUrl: ImagesUrl_qkrpayroll.loanEmployees, 
          features: [
            { 
              label: "Apply for a loan from mobile — see eligible amount instantly", 
            },
            { 
              label: "Get notified at every approval stage — no chasing HR", 
            },
            { 
              label: "View loan statement — amount, EMI, installments paid, balance", 
            },
            { 
              label: "See all active loans in one place — personal, medical, festival", 
            },
            { 
              label: "Download full loan repayment schedule anytime", 
            },
            { 
              label: "EMI deduction visible on monthly payslip — separate line item", 
            }
          ],
        },
        {
          tabName: "HR & Admin",
          bgClass:"bg-voilet",
          title: "Configure once. Let the system do the rest.",
          desc: "HR sets up loan policies, manages the approval workflow, and reviews the dashboard. Month-to-month, QkrPayroll handles EMI deductions automatically — no manual adjustments needed.",
          imgUrl: ImagesUrl_qkrpayroll.loanHrAdmin,
          features: [
            {
              label: "Configure loan policies per grade, department, or loan type",
            },
            {
              label: "Approve, reject, or modify loan requests from the Pending Inbox",
            },
            {
              label: "View all active loans, outstanding balances, and EMI schedules",
            },
            {
              label: "Pending Inbox — live count of loan approvals awaiting action",
            },
            {
              label: "Eligibility report — who can apply and for how much",
            },
            {
              label: "Exit handling — outstanding loan balance flagged at F&F settlement",
            },
          ],
        },
        {
            tabName: "Finance & Accounts",
            bgClass:"bg-successes",
            title: "Full liability view. No surprises in the payroll run.",
            desc: "Finance gets complete visibility on outstanding loan liability, monthly EMI deductions, and disbursement amounts — before every payroll approval.",
            imgUrl: ImagesUrl_qkrpayroll.loanFinance,
            features: [
              {
                label: "View total outstanding loan liability by entity, department, grade",
              },
              {
                label: "Monthly EMI summary — total deductions before payroll approval",
              },
              {
                label: "Approve loans requiring Finance sign-off from the Pending Inbox",
              },
              {
                label: "Export loan reports for accounting and provision planning",
              },
              {
                label: "Disbursement history — when each loan was disbursed and how",
              },
              {
                label: "Liability dashboard for employee benefit cost tracking",
              },
            ],
        },
      ],
    },
];

export const PayrollLoansAdvanceFaq = [
       {
          id: 1,
          Title: "What is employee loan management in payroll software?",
          Content: "Employee loan management in payroll software handles the complete lifecycle of employee loans — from policy configuration and self-service requests to approval workflows, payroll-integrated disbursement, and automatic EMI deductions each pay cycle. QkrPayroll connects loans directly to payroll so EMIs are deducted automatically, balances update in real time, and everything appears on the payslip without any monthly HR intervention."
        },
        {
          id: 2,
          Title: "How does QkrPayroll handle EMI deductions for employee loans?",
          Content: "QkrPayroll automatically deducts EMIs from an employee's monthly salary based on the approved repayment schedule. The EMI amount, remaining balance, and any interest are reflected as separate line items on the payslip. No manual deduction is needed by HR — the system applies it every pay cycle until the loan is fully repaid. If an employee is on LOP or low net pay, the system flags it so HR can decide whether to defer."
        },
        {
          id: 3,
          Title: "Can an employee have multiple active loans at the same time?",
          Content: "Yes. QkrPayroll supports multiple concurrent active loans per employee — a personal loan, a medical emergency loan, and a festival advance can all run simultaneously. Each loan has its own repayment schedule, EMI, and outstanding balance, tracked and deducted independently. All deductions appear as separate line items on the payslip."
        },
        {
          id: 4,
          Title: "Can loan policies be configured differently for different employee grades?",
          Content: "Yes. QkrPayroll lets HR define separate loan policies for each employee grade or department — covering maximum loan amount, eligible loan types, repayment period, and interest rate. Employees see only the limits applicable to their grade when submitting a request, so over-limit requests never reach the approval stage."
        },
        {
          id: 5,
          Title: "What types of employee loans does QkrPayroll support?",
          Content: "QkrPayroll supports personal loans, medical emergency loans, festival advances, education loans, vehicle loans, salary advances (against earned salary), expense advances, and custom loan types defined by the employer. Multiple loan types can be active for a single employee simultaneously, each tracked independently."
        },
        {
          id: 6,
          Title: "How are salary advances handled in QkrPayroll?",
          Content: "Salary advances let employees request a portion of their earned salary before the pay date. The advance routes through the configured approval workflow (manager and HR). On approval, it's disbursed and tracked in the system. The advance amount is automatically deducted from the same or next month's salary — appearing as a clearly labelled deduction on the payslip. No separate reconciliation needed by HR or Finance."
        }
];
export const PayrollCtaData = [
  {
    id: 1,
    title: "Support Your Team Without <span class='text-gradient'>The Admin Overhead.</span>",
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

