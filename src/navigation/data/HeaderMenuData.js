import { companyLinks } from "./companyLinks";
import { PlatformFeatureData } from "./PlatformFeatureData";
import { qkrhr } from "../../module/Hrms/hrms.nav";
import { qkrhrPayroll } from "../../module/QkrPayroll/payroll.nav";
import { qkrdesk } from "../../module/Desk/desk.nav";
import { qkrexpense } from "../../module/Expense/expense.nav";
import { qkrprojects } from "../../module/Project/projects.nav";
import { qkrsales } from "../../module/Sales/sales.nav";
import { qkrtasks } from "../../module/Qkrtask/tasks.nav";
import { qkrtenders } from "../../module/Tenders/tenders.nav";
import { qkrvisit } from "../../module/Qkrvisit/visit.nav";
import { othervsQkrhr } from "../../module/Hrms/hrmsCompare.nav";
import { byIndustry } from "../../module/Hrms/hrmsIndustry.nav";
import { qkrHrmsCityData } from "../../module/Hrms/hrmsCity.nav";
// import { freeTools } from "../../module/Tools/tools.nav";

export const HeaderMenuData = [
  {
    id: 1,
    title: "Qkrbiz Apps",
    description:"One Unified Platform to Manage Your People, Payroll, Field Force, and Operations.",
    head1: "Products",
    head2: "Platform Features",
    userLogin: {
      loginUrl: "https://signin.qkrbiz.com",
      title: "Login",
    },
    signup: {
      url: "/signup",
      title: "Free Demo",
    },
    CompanyData: companyLinks,
    PlatformFeatureData: PlatformFeatureData,
    othervsQkrhr: othervsQkrhr,
    byIndustry:byIndustry,
    qkrHrmsCityData,
    // freeTools,
    ProductMenuData: [
      qkrhr,
      qkrhrPayroll,
      qkrvisit,
      qkrexpense,
      qkrdesk,
      qkrsales,
      qkrtenders,
      qkrtasks,
      qkrprojects,
    ],
  },
];
