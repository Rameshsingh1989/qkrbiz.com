import { essPortal as ImagesUrl_essPortal } from "../../../../assets/images";

export const EssPortalMeta = {
  title: "QkrHR ESS Portal | Employee Self Service Portal",
  description: "QkrHR ESS portal: Empower employees with anytime access to payslips, leave, attendance, and personal details. Simplify HR management efficiently.",
};

export const EssPortalHeadData = [
  {   
      id:1,
      youTubeVideoUrl: "",
      videoUrl:ImagesUrl_essPortal.essVideoHearder,
      imgUrl:ImagesUrl_essPortal.essPortalHearder,
      alt:"QkrHR Employee Self-Service Portal",
      title:"QkrHR ESS Portal",
      subTitle:"Single Interface for Every Role",
      desc:"QkrHR's unified portal adapts intelligently to each user – whether you're an employee, manager, HR team member, or administrator. Access everything you need without switching to different sections.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];
export const EssPortalData = [
  {   
      id:1,
      videoAuto: false,
      videoUrl:"",
      imgUrl:ImagesUrl_essPortal.personalInfo,
      alt:"With hrms self service, employees can easily view and edit their Profile",
      title:"Employee Profile",
      descs:"Manage and update your personal details easily. View and edit contact information, emergency contacts, and address. Keep your profile current with the latest changes, ensuring accurate and up-to-date records without HR intervention.",  
      listInner:[]
  },
  {   
      id:2,
      videoAuto: false,
      videoUrl:"",
      imgUrl:ImagesUrl_essPortal.trackAttendance,
      alt:"QkrHR ESS interface enables transparent and controlled attendance tracking",
      title:"Track Attendance",
      link: { to: "/hrms-software/time-and-attendance-system", text: "Learn about Attendance Management" },
      descs:"Gain comprehensive visibility and control over your attendance records: clear visibility into clock-in/out times, absences, late arrivals, and total working hours. Access attendance information through multiple intuitive views: a social dashboard for quick overviews, an attendance calendar for monthly patterns, a movement view for detailed daily activity, and a tabular format for data-driven analysis.<br/>The intuitive interface ensures all critical attendance information is easily accessible and understandable, leaving no room for oversight. This multi-faceted approach to <a href='/hrms-software/time-and-attendance-system'>attendance tracking</a> empowers employees with full transparency and control over their work hours, promoting accountability and reducing administrative burden on HR.",
      listInner:[]

  },
  {
    id:3,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_essPortal.viewPayrollInfo,
    alt:"Access payslips, salary breakdowns, and tax details securely with QkrHR ESS payroll portal",
    title:"Employee Finance",
    link: { to: "/payroll-software/management", text: "Learn about Payroll Management" },
    narrow: true,
    descs:"Access payslips, salary breakdowns, and tax details quickly and securely. Review past payments, update personal information, and manage tax preferences in one convenient location.",
    listInner:[]
  },
  {
    id:4,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_essPortal.leaveDashboard,
    alt:"QkrHR offers a centralized leave management interface in the HRMS ESS portal",
    title:"Leave Management",
    link: { to: "/hrms-software/leave-management-system", text: "Learn about Leave Management" },
    narrow: true,
    descs:"The beautifully organized single-page design eliminates the need to navigate between different sections, streamlining the entire <a href='/hrms-software/leave-management-system'>leave management process</a>. This intuitive interface provides employees with all the necessary tools and information to manage their time off effectively, enhancing user experience and reducing time spent on administrative tasks.<br/>Check leave balances instantly for all leave types, submit leave requests, stay informed about upcoming holidays and company events, access leave policies without navigating away, and use the integrated attendance calendar for easy reference.",
    listInner:[
    ],
  },
  {
    id:6,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_essPortal.reportingHierarchy,
    alt:"In Qkrhr ESS , Employee easily view reporting hierarchy to efficient communication and collaboration.",
    title:"Employee Directory",
    narrow: true,
    descs:"Use the <a href='/hrms-software/employee-management'>employee directory</a> to easily locate and access contact information. View the company's organizational structure through various hierarchical views (by reporting manager, department, location, etc.) to facilitate efficient communication and collaboration.",
    listInner:[]
  },
  {
    id:7,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_essPortal.accessPaySlip,
    alt:"Qkrhr ess payslip download",
    title:"Payslips",
    narrow: true,
    descs:"Employees see their current and past payslips in the portal and the app, and view them online or download them as PDF. An email tells them when a new payslip is ready, so HR no longer sends payslips by hand.",
    listInner:[]
  },
]
export const ESSFAQ = [
     {
       id:1,
       Title:"What is a QkrHR Employee Self-Service (ESS) portal?",
       Content:"The QkrHR Employee Self-Service (ESS) portal empowers employees to manage HR tasks and <a href='/hrms-software/employee-management'>access personal information</a>, streamlining HR processes, enhancing employee engagement, and reducing administrative workload for HR teams.",
     },
     {
       id:2,
       Title:"What information can employees access through the QkrHR ESS portal?",
       Content:"<h4 class='mb-3'>The QkrHR ESS portal provides employees with access to a wide range of personal and work-related information, including:</h4>"
        +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'>Personal profile and contact details</li>"		
          +"<li class='tick-icon-magenta'><a href='/hrms-software/generate-salary-slips-online-payslip-generator'>Pay stubs and salary information (ESS payslip download)</a></li>"		
          +"<li class='tick-icon-magenta'>Leave balances and application system</li>"		
          +"<li class='tick-icon-magenta'>Attendance records and time tracking</li>"		
          +"<li class='tick-icon-magenta'>Performance reviews and goals</li>"		
          +"<li class='tick-icon-magenta'>Company <a href='/hrms-software/hr-document-management-system'>policies and documents</a></li>"		
          +"<li class='tick-icon-magenta'>Benefits enrollment and management	</li>"	
          +"<li class='tick-icon-magenta'>Expense claims submission and tracking</li>"	
       +"</ul>"
       +"<p>This comprehensive access ensures employees have real-time visibility into their HR-related data and can perform self-service tasks efficiently.</p>"
     },
     {
      id:3,
      Title:"Is the QkrHR ESS portal mobile-friendly or accessible through an app?",
      Content:"<h4 class='mb-3'>Yes, the QkrHR ESS portal is designed with mobility in mind:</h4>"
       +"<ul class='ul-icon'>"
         +"<li class='tick-icon-magenta'>Mobile-responsive design for easy access via smartphone or tablet browsers</li>"			
         +"<li class='tick-icon-magenta'>Real-time attendance tracking through mobile devices</li>"			
         +"<li class='tick-icon-magenta'>The app is designed for use on both iOS and Android devices.</li>"			
         +"<li class='tick-icon-magenta'>Push notifications for important updates or approvals</li>"			
      +"</ul>"
      +"<p>This mobile accessibility ensures that employees can access their ESS portal anytime, anywhere, enhancing user adoption and satisfaction.</p>"
     },
     {
       id:4,
       Title:"How does the QkrHR ESS portal reduce the administrative workload for HR?",
       Content:"<h4 class='mb-3'>The QkrHR ESS portal substantially lightens HR's administrative workload by:</h4>"
        +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'>Enabling employees to update their personal information directly.</li>"					
          +"<li class='tick-icon-magenta'>Allowing self-service for common HR requests (leave applications, document requests).</li>"					
          +"<li class='tick-icon-magenta'>Providing a platform for managers to approve requests directly (leave, attendance, etc.).</li>"					
          +"<li class='tick-icon-magenta'>Automating routine tasks like payslip distribution and <a href='/hrms-software/leave-management-system'>leave balance updates</a>.</li>"					
          +"<li class='tick-icon-magenta'>Offering a self-service update portal for employees to manage their own data.</li>"					
          +"<li class='tick-icon-magenta'>Minimizing the requirement for HR to manually manage routine inquiries and tasks.</li>"						
       +"</ul>"
       +"<p>By empowering employees with self-service capabilities, HR teams can focus on more strategic initiatives and value-added activities.</p>"
     },
     {
       id:5,
       Title:"How customizable is the QkrHR ESS portal?",
       Content:"<h4 class='mb-3'>The QkrHR ESS portal offers extensive customization options to suit your organization's unique needs:</h4>"
       +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'>Configurable modules to match your specific HR processes</li>"				
          +"<li class='tick-icon-magenta'>The customizable user interface aligns with your company's branding</li>"				
          +"<li class='tick-icon-magenta'>Capability to customize features according to your needs</li>"				
          +"<li class='tick-icon-magenta'>Custom fields for capturing organization-specific information</li>"				
          +"<li class='tick-icon-magenta'><a href='/hrms-software/hr-workflow-management'>Configurable workflows</a> for approvals and notifications</li>"				
       +"</ul>"
       +"<p>This adaptability ensures that the ESS portal can be customized to meet the specific requirements of your organization, irrespective of its size or industry.</p>"
     },
     {
      id:6,
      Title:"Can managers approve requests, like leave or attendance, directly through the ESS portal?",
      Content:"<h4 class='mb-3'>Yes, the QkrHR ESS portal includes advanced features for manager self-service:</h4>"
      +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'>Managers have the capability to review and sanction leave requests from their team members.</li>"						
          +"<li class='tick-icon-magenta'>Real-time attendance machine integration allows for quick oversight of team attendance</li>"						
          +"<li class='tick-icon-magenta'>Performance review submissions and approvals can be managed through the portal</li>"						
          +"<li class='tick-icon-magenta'><a href='/hrms-software/employee-expense-management'>Expense claim approvals</a> can be processed directly in the system	</li>"					
          +"<li class='tick-icon-magenta'>Managers can access team <a href='/hrms-software/hr-data-analytics'>reports and analytics</a> for better decision-making</li>"					
      +"</ul>"
      +"<p>This streamlined approval process enhances efficiency and reduces turnaround times for various HR-related requests.</p>"
     },
     {
      id:7,
      Title:"How secure is the employee information stored in the QkrHR ESS portal?",
      Content:"<h4 class='mb-3'>Security is a top priority for the QkrHR ESS portal:</h4>"
      +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'>Secure login process</li>"						
          +"<li class='tick-icon-magenta'>Role-based access control to ensure users only see information they're authorized to access</li>"						
          +"<li class='tick-icon-magenta'>Data encryption during transmission and storage</li>"						
          +"<li class='tick-icon-magenta'>Regular security audits and compliance checks</li>"						
          +"<li class='tick-icon-magenta'>Automated logout for inactive sessions</li>"						
          +"<li class='tick-icon-magenta'>Detailed audit trails of all system activities</li>"										
      +"</ul>"
      +"<p>These security measures ensure that your employees' sensitive information remains protected at all times.</p>"
     },
     {
      id:8,
      Title:"Can employees download their payslips through the ESS portal?",
      Content:"<h4 class='mb-3'>Yes, one of the key features of the QkrHR ESS portal is the ability for employees to access and download their payslips:</h4>"
      +"<ul class='ul-icon'>"

          +"<li class='tick-icon-magenta'>Easy access to current and historical payslips</li>"			
          +"<li class='tick-icon-magenta'>Secure ESS payslip download functionality</li>"			
          +"<li class='tick-icon-magenta'>Email notifications when new payslips are available</li>"			
          +"<li class='tick-icon-magenta'>Option to <a href='/hrms-software/generate-salary-slips-online-payslip-generator'>view payslips online or download</a> as PDF</li>"			
          +"<li class='tick-icon-magenta'>Connecting with the payroll system for instant updates</li>"													
      +"</ul>"
      +"<p>This self-service payroll feature eliminates the need for manual payslip distribution, saving time for HR teams and providing convenience for employees.</p>"
     },
]

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const EssPortalCtaData = [
  {
    id: 1,
    title: "Let employees answer their own questions.",
    description: "We'll show you leave, attendance, payslips and requests from an employee's side in the demo.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
