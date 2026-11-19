import NavigationImg from "@/assets/NavigationImg";
import visitRoutes from "./visit.routes.js";

 export const qkrvisit =   {
    id:2,
    urls:visitRoutes.basePath,
    productClass:"qkrvisit",
    logo:NavigationImg.menuImg.qkrvisitLogo,
    alt:"QkrVisit",
    icon:NavigationImg.menuImg.qkrvisit,
    title:"Qkr<span class='content-pink'>Visit</span>",
    desc:"Field Force Management Software",
    readMore:"Field Force, Simplified",
    ApsDesc:"Because Your Workforce Knows No Boundaries",
    heading:"Why Leading Brands Choose QkrVisit for Field Force Excellence",
    headDesc:"",
    IsProduct:"isVisit",
    key: true,
    ProductList:[ 
        {
            id:1,
            urls:"employee-tracking-app",
            iconClass:"real-time-attendance-tracking",
            icon:NavigationImg.menuImg.realTimeAttendanceNav,
            // title:"Attendance Tracking", 
            title:"Real-time Attendance Tracking",
            desc:"Capture attendance on mobile or biometric systems, anytime, anywhere.",
            readMore:"Instant Attendance",
            heading:"", 
            headDesc:"", 
            IsProduct:"AttendanceTracking",
            ListData:[]
        }, 
        {
            id:2,
            urls:"service-management",
            iconClass:"geo-fencing-field-visits",
            icon:NavigationImg.menuImg.geoFencingNav,
            title:"Geo-Fenced Field Visits", 
            desc:"Monitor field visits with geo-fencing for real-time location accuracy.",
            readMore:"Accurate Visits",
            heading:"", 
            headDesc:"", 
            IsProduct:"FieldVisits",
            ListData:[]
        },
        {
            id:3,
            urls:"real-time-location-tracking",
            iconClass:"configurable-role-based",
            icon:NavigationImg.menuImg.configurableRoleNav,
            title:"Configurable & Accurate", 
            desc:"Set role-specific policies and approval processes for compliance.",
            readMore:"Custom Permissions",
            heading:"", 
            headDesc:"", 
            IsProduct:"ConfigurableAccurate",
            ListData:[]
        },
        {
            id:4,
            urls:"reports-analytics",
            iconClass:"powerful-reports-analytics",
            icon:NavigationImg.menuImg.powerfulReportsNav,
            title:"Powerful Reports & Analytics", 
            desc:"Gain actionable insights with detailed reports on visits and performance.",
            readMore:"Actionable Insights",
            heading:"", 
            headDesc:"", 
            IsProduct:"ReportsAnalytics",
            ListData:[]
        },
        
        
    ] 
}