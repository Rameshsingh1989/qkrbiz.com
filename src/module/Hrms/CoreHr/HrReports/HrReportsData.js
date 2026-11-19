import { hrReports as ImagesUrl_hrReports } from "../../../../assets/images";

export const HrReportsMeta = {
  title: "HR Analytics & Workforce Reporting Dashboard | QkrHR",
  description: "Unlock data-driven HR insights with QkrHR analytics software. Monitor headcount, attrition trends, attendance, and payroll costs with visual dashboards.",
};

export const HrReportsHeadData = [
  {
      id:1,
      youTubeVideoUrl: "",
      videoUrl:"",
      imgUrl:ImagesUrl_hrReports.hrReportsHeader,
      alt:"hr reports and analytics",
      title:"QkrHR Analytics Software",
      subTitle:"Good Decision-Making Needs Good Insights",
      desc:"QkrHR provides reporting and analytics on HR data to aid decision-making and workforce management.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];
export const HrReportsData = [
  {
    id:1,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_hrReports.visitReports,
    alt:"360-degree view with QkrHR visit reports",
    title:"Visit Reports",
    descs:"Get a 360 degree view with extensive reporting of Qkrbiz <a href='/hrms-software/field-force-automation'>field force automation</a>. View daily reports for the entire team, by employee or by time. View monthly movement of an employee or view visit history by client or project."
  },
  {
    id:2,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_hrReports.leaveLedgerReport,
    alt:"Qkrhr Leave Ledger Reports",
    title:"Leave Ledger Reports",
    descs:"Employees can view their leave balance and approval status while submitting leave requests as well as on the <a href='/hrms-software/time-and-attendance-system' target='_blanck'>attendance calendar</a>, dashboard, and profile. A single page displaying all leave transactions and balances is provided by the leave ledger. The HR staff can view each employee's leave balance by selecting the Leave Balances option. See <a href='/hrms-software/leave-management-system'>leave management</a>."
  },
  {
    id:3,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_hrReports.movementsRecord,
    alt:"Qkrh detailed movement reports",
    title:"Movements Record Sheet",
    descs:"Get a step by step summary of visits with detailed movement reports providing details of clients visited, duration of visit, status updates, mileage, travel time & deviations."
  },
  {
    id:4,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_hrReports.employeeAtteSheet,
    alt:"Qrkhr Daily attendance status report",
    title:"Employee Attendance Sheet",
    descs:"Issue offer letters with salary structure and track the joining of employees. HR team can <a href='/hrms-software/generate-salary-slips-online-payslip-generator' target='_blanck'>generate salary structures</a> easily without depending on the accounts team."
  },
  {
    id:5,
    videoAuto: false,
    videoUrl:"",
    imgUrl:ImagesUrl_hrReports.payrollReports,
    alt:"QkrPayroll Summary Report",
    title:"Payroll Summary Report",
    descs:"The Payroll Summary Report dashboard provides a comprehensive view of your organization's <a href='/payroll-software/management' target='_blanck'>payroll data</a>, allowing you to analyze and track payroll expenses across different time periods and departments."
  },
  // {
  //   id:6,
  //   videoAuto: false,
  //   videoUrl:ImagesUrl_video.FieldForceAnalytics,
  //   imgUrl:ImagesUrl_hrReports.visitAnalytics,
  //   title:"Visit Analytics",
  //   descs:"Gain insights and review trends with the inbuilt analytics. Analyze visits of the entire team or each employee. Analyze types of visit, type of client visited and no of visits for each employee."
  // },
]

// ── Final CTA (CommonCtaSection) ─────────────────────────────────────
export const HrReportsCtaData = [
  {
    id: 1,
    title: "Bring the report you build by hand every month.",
    description: "We'll show you how it looks as a ready QkrHR report in the demo.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
