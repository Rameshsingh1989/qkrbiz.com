import NavigationImg from "@/assets/NavigationImg";
import salesRoutes from "./sales.routes.js";

 export const qkrsales = {
    id:5,
    urls:salesRoutes.basePath,
    productClass:"qkrsales",
    logo:NavigationImg.menuImg.qkrsalesLogo,
    alt:"QkrSales",
    icon:NavigationImg.menuImg.qkrsales,
    title:"Qkr<span class='content-pink'>Sales</span>",
    desc:"Sales and AR Management",
    readMore:"Boost Cashflow Now",
    ApsDesc:"Maximizing Revenue from Product to Service, Order to Cash",
    heading:"Sales Management Features",
    headDesc:"",
    IsProduct:"isSales",
    key: true,
    // Module nav overrides — merged over DEFAULT_MODULE_NAV in navRegistry.js.
    nav: {
        featuresMenu: { 
            title: "Sales Features",
            variant: "list"
        },
        showSolutions: false,
        showCities: false,
        showComparison: false,
        showIndustries: false,
        mobileCta: "login",
    },
    ProductList:[
        {
            id:1,
            urls:"sales-management",
            icon:NavigationImg.menuImg.SalesManagementNav,
            iconClass:"SalesManagement",
            title:"Sales Management", 
            desc:"QkrSales simplifies the entire sales process by managing customer orders, tracking every stage from order receipt to payment, and automating workflows for faster, more efficient sales operations.",
            readMore:"Read More",
            heading:"Sales Management Features", 
            headDesc:"",        
            IsProduct:"isSalesManagement",
            ListData:[ ]
        },
        {
            id:2,
            urls:"accounts-receivable",
            icon:NavigationImg.menuImg.AccountsReceivableNav,
            iconClass:"AccountsReceivable",
            title:"Accounts Receivable",
            desc:"Make sure that every payment is received on schedule and that you have complete visibility into every receivable at a granular level. No more losses brought on by unrecovered payments!",
            readMore:"Read More",
            heading:"Accounts Receivable Features", 
            headDesc:"",        
            IsProduct:"isAccountsReceivable",
            ListData:[ ]
        },
        {
            id:3,
            urls:"billing-payment",
            icon:NavigationImg.menuImg.BillingPaymentNav,
            iconClass:"BillingPayment",
            title:"Billing & Payment",
            desc:"Keeping track of customers' complex billing and payment terms can be a daunting task, but it doesn't have to be. With Qkrsales, manage complex customer billing schedules and payments at every step along the way with ease.",
            readMore:"Read More",
            heading:"Billing & Payment Features", 
            headDesc:"",        
            IsProduct:"isBillingPayment",
            ListData:[ ]

        },
        {
            id:4, 
            urls:"order-execution",
            icon:NavigationImg.menuImg.OrderExecutionNav,
            iconClass:"OrderExecution",
            title:"Order Execution",
            desc:"Track important deliverables with Milestones, such as delivery, installation, invoicing, and payment, to keep your projects moving forward. Proactively monitor deadlines with warnings to help prevent delays and Liquidated Damages!",
            readMore:"Read More",
            heading:"Order Execution Features",
            headDesc:"",
            IsProduct:"isOrderExecution",
            ListData:[ ]
        },
        {
            id:5,
            urls:"invoicing",
            icon:NavigationImg.menuImg.InvoicingNav,
            iconClass:"Invoicing",
            title:"Invoicing",
            desc:"Keep on top of billing and never let a due date slip past you with proactive alerts. Streamline your processes by mapping billing terms of every order and track them from start to finish!",
            readMore:"Read More",
            heading:"Invoicing Features",
            headDesc:"",
            IsProduct:"isInvoicing",
            ListData:[ ]
        },
        {
            id:6,
            urls:"tender-deposit",
            icon:NavigationImg.menuImg.TenderDepositNav,
            iconClass:"TenderDeposit",
            title:"Tender Deposit",
            desc:"Ensure timely submission and recovery of all deposits such as Security Deposits (SD), Performance Bank Guarantees (PBG), and Earnest Money Deposits (EMD). Make sure that all tender terms are fully complied with meticulous recording from the order stage.",
            readMore:"Read More",
            heading:"Tender Deposit Features",
            headDesc:"",
            IsProduct:"isTenderDeposit",
            ListData:[ ]
        },
        {
            id:7,
            urls:"sales-performance",
            icon:NavigationImg.menuImg.SalesPerformanceNav,
            iconClass:"SalesPerformance",
            title:"Sales Performance",
            desc:"With real-time performance tracking, your sales team is empowered to maximize their success. Monthly updates keep everyone informed and striving for excellence!",
            readMore:"Read More",
            heading:"Sales Performance Features",
            headDesc:"",
            IsProduct:"isSalesPerformance",
            ListData:[ ]
        },
        {
            id:8,
            urls:"document-management",
            icon:NavigationImg.menuImg.DocumentManagementNav,
            iconClass:"DocumentManagement",
            title:"Document Management",
            desc:"Store and retrieve all of your documents with ease! Accessing all of the documents generated at various phases of order processing is now simple and quick.",
            readMore:"Read More",
            heading:"Document Management Features",
            headDesc:"",
            IsProduct:"isDocumentManagement",
            ListData:[ ]
        },
        {
            id:9,
            urls:"business-managements",
            icon:NavigationImg.menuImg.BusinessManagementNav,
            iconClass:"BusinessManagement",
            title:"Business Management",
            desc:"Gain greater control of your business with seamless integrations. Streamline processes by integrating Qkrtender, Qkrprojects, QkrHR, Qkrinventory and QkrExpense into one unified platform.",
            readMore:"Read More",
            heading:"Business Management Features",
            headDesc:"",
            IsProduct:"isBusinessManagement",
            ListData:[ ]
        }, 
    ]
}
