import NavigationImg from "@/assets/NavigationImg";
import expenseRoutes from "./expense.routes.js";

 export const qkrexpense = {
    id:3,
    urls:expenseRoutes.basePath,
    productClass:"qkrexpense",
    logo:NavigationImg.menuImg.qkrexpenseLogo,
    alt:"QkrExpense",
    icon:NavigationImg.menuImg.qkrexpense,
    title:"Qkr<span class='content-pink'>Expense</span>",
    desc:"Advances, Travel & Expenses",
    readMore:"Control Business Spending",
    ApsDesc:"Streamline Spending, Simplify Reimbursement",
    heading:"",
    headDesc:"",
    IsProduct:"isExpense",
    key: true,
    ProductList:[ ]
 }