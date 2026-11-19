import NavigationImg from "@/assets/NavigationImg";
import payrollRoutes from "./payroll.routes.js";

 export const qkrhrPayroll =   {
    id:2,
    urls:payrollRoutes.basePath,
    productClass:"qkrpayroll",
    logo:NavigationImg.menuImg.qkrpayrollLogo,
    alt:"QkrPayroll",
    icon:NavigationImg.menuImg.qkrpayroll,
    title:"Qkr<span class='content-pink'>Payroll</span>",
    desc:"Payroll Management Software",
    readMore:"Run Perfect Payroll",
    ApsDesc:"Payroll That Never Misses A Step",
    heading:"Why Leading Brands Choose Qkrvisit for Field Force Excellence",
    headDesc:"",
    IsProduct:"isPayroll",
    key: true,
    ProductList:[ 
        {
            id:1,
            urls:"management",
            iconClass:"payroll-management",
            icon:NavigationImg.menuImg.payrollManagementNav,
            title:"Payroll Management",
            desc:"From salary structures to payslips, processed accurately through a guided step by step wizard.",
            readMore:"Instant Attendance",
            heading:"", 
            headDesc:"", 
            IsProduct:"isPayrollManagement",
            ListData:[]
        }, 
        {
            id:2,
            urls:"statutory-compliance",
            iconClass:"statutory-compliance",
            icon:NavigationImg.menuImg.complianceManagementtNav,
            title:"Statutory Compliance", 
            desc:"PF, ESI, PT, LWF, and TDS auto-calculated and filed across all 18 states, always at current rates.",
            readMore:"Accurate Visits",
            heading:"", 
            headDesc:"", 
            IsProduct:"isStatutoryCompliance",
            ListData:[]
        },
        {
            id:3,
            urls:"loans-advances",
            iconClass:"loans-advances",
            icon:NavigationImg.menuImg.loansAdvancesNav,
            title:"Loans and Advances", 
            desc:"Employee loan requests, approvals, disbursements, and EMI deductions, policy-driven and fully automated.",
            readMore:"Custom Permissions",
            heading:"", 
            headDesc:"", 
            IsProduct:"isLoansadvances",
            ListData:[]
        },
        // {
        //     id:4,
        //     urls:"reports-analytics",
        //     iconClass:"reports-analytics",
        //     icon:NavigationImg.menuImg.geoFencingNav,
        //     title:"Powerful Reports & Analytics", 
        //     desc:"Gain actionable insights with detailed reports on visits and performance.",
        //     readMore:"Actionable Insights",
        //     heading:"", 
        //     headDesc:"", 
        //     IsProduct:"ReportsAnalytics",
        //     ListData:[]
        // }, 
    ] 
}