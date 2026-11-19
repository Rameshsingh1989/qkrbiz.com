import { coreHr as ImagesUrl_coreHr } from "../../../../assets/images";

export const CoreHrHomeMeta = {
  title: "Best Core HR Software | Automate Core HR Functions | QkrHR",
  description: "QkrHR automates core HR from employee entry to exit, shaped to each organisation's policies and structure. Start a free demo of our HRIS software.",
};

export const CoreHrHeadData = [
  {  
      id:1,
      youTubeVideoUrl: "",
      videoUrl:"",
      imgUrl:ImagesUrl_coreHr.coreHrHeaders,
      alt:"Qkrhr core functions of human resource software",
      title:"Core HR",
      subTitle:"Your Digital HR Command Center",
      desc:"Simplify HR operations with QkrHR’s customizable platform, managing the entire employee lifecycle from onboarding to offboarding with greater efficiency and accuracy.",
      subDesc:"",
      // desc:"Transform your HR operations with QkrHR's comprehensive suite. From onboarding to offboarding, our customizable platform adapts to your unique organizational structure and policies.",
      // subDesc:"Elevate your HR processes, ensuring efficiency and precision at every step of the employee journey",
      link:"/signup",
      HeadList:[]
  }
];
export const CoreHrData = [
  {
    id:1,
    title:"Automate critical HR functions",
    desc:"Elevate your HR processes, ensuring efficiency and precision at every step of the employee journey",
    imgUrl:ImagesUrl_coreHr.coreHrPge,
    alt:"Qkrhr people core hr system",
    fHeadList:[
      {
        id:1,
        icon:ImagesUrl_coreHr.employeeInformation,
        li:"Workforce Data Management",
        url:"/hrms-software/employee-management"
      },
      {
        id:2,
        icon:ImagesUrl_coreHr.attendanceTracking,
        li:"Attendance and Time Tracking",
        url:"/hrms-software/time-and-attendance-system"
      },
      {
        id:3,
        icon:ImagesUrl_coreHr.manageCompliance,
        li:"Manage Compensation & Benefits",
        url:"/payroll-software/management"
      },
      {
        id:4,
        icon:ImagesUrl_coreHr.automateHRWorkflow,
        li:"Automate HR Workflows",
        url:"/hrms-software/hr-workflow-management"
      },
      {
        id:5,
        icon:ImagesUrl_coreHr.reportsInsights,
        li:"Reports and Analytics",
        url:"/hrms-software/hr-data-analytics"
      },

    ]
  }
]

export const CoreHRFAQ = [
     {
       id:1,
       Title:"What is Core HR ?",
       Content:"Core HR involves essential administrative HR functions, such as managing employee data, payroll, attendance, leave, and benefits. It focuses on foundational HR processes to ensure efficient management of employee information, compliance, and routine HR operations.",
     },
     {
       id:2,
       Title:"What are the 5 key functions of Core HR in HRMS Software?",
       Content:"<h4 class='mb-3'>Top 5 functions of Core HR </h4>"
      +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'><a href='/hrms-software/employee-management'>Employee database management</a></li>"
          +"<li class='tick-icon-magenta'>Payroll processing and administration</li>"
          +"<li class='tick-icon-magenta'>Time and attendance tracking</li>"
          +"<li class='tick-icon-magenta'>Benefits administration</li>"
          +"<li class='tick-icon-magenta'>Compliance and <a href='/hrms-software/hr-data-analytics'>reporting</a></li>"
       +"</ul>"
     },
     {
       id:3,
       Title:"Which is the best Core HR software available?",
       Content:"QkrHR is a leading Core HR Management Software known for its employee-centric approach, intuitive interface, seamless integration with payroll, time tracking, and field force management systems. It's well-suited for small and mid-sized businesses seeking a comprehensive HR management solution."
     },
     {
       id:4,
       Title:"Does QkrHR Core HR Software Facilitate Employee Self-Service?",
       Content:"Yes, QkrHR offers <a href='/hrms-software/employee-self-service-portal' target='_blanck'>employee self-service</a> features such as personal information management, <a href='/hrms-software/generate-salary-slips-online-payslip-generator' target='_blanck'>pay stub</a> and tax document access, time-off requests, work schedule viewing, <a href='/hrms-software/hr-document-management-system'>company policy access</a>, and benefits enrollment via web and mobile.",
     },
     {
       id:5,
       Title:"What kind of customer support does QkrHR provide?",
       Content:"<h4 class='mb-3'>We offer multi-tiered support to ensure you get the help you need:</h4>"
       +"<ul class='ul-icon'>"
         +"<li class='tick-icon-magenta'>24/7 online knowledge base and FAQ</li>"
         +"<li class='tick-icon-magenta'>Email support with guaranteed response times</li>"
         +"<li class='tick-icon-magenta'>Phone support during business hours</li>"
         +"<li class='tick-icon-magenta'>Dedicated account manager for enterprise clients</li>"
         +"<li class='tick-icon-magenta'>Regular system updates and feature enhancements</li>"
       +"</ul>"
     },
     {
       id:6,
       Title:"How easy is it to implement QkrHR?",
       Content:"QkrHR is designed to be user-friendly and easy to implement. Our team offers thorough onboarding support, which includes data migration, system configuration, and user training. Clients can be up and running within a few weeks, depending on the complexity of their HR processes.",
     }
];

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const CoreHrCtaData = [
  {
    id: 1,
    title: "See your whole HR setup in one place.",
    description: "We'll walk you through profiles, documents, workflows and reports in the demo, set up the way your company works.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
