import NavigationImg from "@/assets/NavigationImg";
import tasksRoutes from "./tasks.routes.js";

export const qkrtasks ={
    id:7,
    urls:tasksRoutes.basePath,
    productClass:"qkrtask",
    logo:NavigationImg.menuImg.qkrtaskLogo,
    alt:"QkrTasks",
    icon:NavigationImg.menuImg.qkrtask,
    title:"Qkr<span class='content-pink'>Tasks</span>",
    desc:"Task Management",
    readMore:"Get More Done",
    ApsDesc:"Transforming Tasks into Triumphs",
    heading:"",
    headDesc:"",
    IsProduct:"isTasks",
    key: true,
    ProductList:[ ]
 }