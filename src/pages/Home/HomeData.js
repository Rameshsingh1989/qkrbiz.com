import { EffortlessExperience as ImagesUrl_EffortlessExperience, HomeBottomImage as ImagesUrl_HomeBottomImage, accountable as ImagesUrl_accountable } from "../../assets/images";

export const HomeMeta = {
  title: "Qkrbiz | Business Management Software & Cloud ERP",
  description: "All-in-one business management software for small and mid-sized businesses: inventory, customer management, HR and field services. Try it now!",
};

export const HomeProductData = [
    {
        title:"Supercharge your Growth and Profitability with <span class='text-gradient'>Qkrbiz!</span>", 
        desc:"Simplify complexity to boost profitable growth for your business.",
        link:"/signup",
        imgUrl:ImagesUrl_HomeBottomImage,
    }
];

export const EffortlessUserData = [
    {
        title:"Effortless User Experience", 
        desc:"Create a culture of <span class='text-gradient'> accountability </span> with actions and information at your fingertips.",
        EffortlessList:[
            {
                id:1,
                imgUrl:ImagesUrl_EffortlessExperience.simplifiedBox,
                title:"Simplified In-box", 
                subTitle:'All Tasks, One In-box',
                desc:"Complete tasks quickly with a unified in-box. Access comprehensive overviews and detailed connections through thoughtfully designed pages.",
            },
            {
                id:2,
                imgUrl:ImagesUrl_EffortlessExperience.familiarSpreadsheet,
                title:"Familiar Spreadsheet Features", 
                subTitle:"Minimize training time",
                desc:"Reduce training time with a familiar, spreadsheet-inspired layout. Access common spreadsheet functions on every page for increased efficiency.",
            },
            {
                id:3,
                imgUrl:ImagesUrl_EffortlessExperience.clickAnywhere,
                title:"Click From Anywhere", 
                subTitle:"Context-Aware Menus",
                desc:"Enjoy quick access to functions from any page with a single click, eliminating the need to search through menus.",
            },
            {
                id:4,
                imgUrl:ImagesUrl_EffortlessExperience.commandControl, 
                title:"Command and Control Center", 
                subTitle:"Actionable Intelligence",
                desc:"Stay informed with a command center that highlights all deviations and pending updates, ensuring no important actions are missed.",
            },
            {
                id:5,
                imgUrl:ImagesUrl_EffortlessExperience.employeeSelf, 
                title:"Employee Self Service", 
                subTitle:"Effortless Navigation, Seamless HR",
                desc:"Access a unified interface designed for all user types - managers, administrators, HR personnel, and employees - without switching between separate pages.",
            },
            {
                id:6,
                imgUrl:ImagesUrl_EffortlessExperience.customViews, 
                title:"Personalized Views", 
                subTitle:"Views tailored to meet your needs",
                desc:"Tailor your workspace with unlimited custom views, including tables, Kanban boards, card layouts, ordered lists, and pivot tables to suit your specific job requirements.",
            },
           
        ]
    }
];

export const SecureAccData = [
    {
        title:"Secure and Accountable <span class='text-gradient'>Process</span>", 
        desc:"Qkrbiz ensures the security of the product and your information, at all times, with the Trustworthy Computing approach.",
        SecureAccList:[
            {
                id:1,
                imgUrl:ImagesUrl_accountable.SecureAccess,
                title:"Secure Access", 
                desc:"Protect your data with secure access and encryption through SSL/TLS.",
                cls:"text-right",
            },
            {
                id:2,
                imgUrl:ImagesUrl_accountable.RoleBased,
                title:"Role Based Access", 
                desc:"Ensure efficient and accountable access with role-based restrictions for employees in different departments or profiles.",
                cls:"text-left",
            },
            {
                id:3,
                imgUrl:ImagesUrl_accountable.ControlOver,
                title:"Control Over the Process", 
                desc:"Maintain control over your entire process by recording every step, eliminating ambiguities and avoiding blame games.",
                cls:"text-right",
            },
            {
                id:4,
                imgUrl:ImagesUrl_accountable.DataLevel,
                title:"Data Level Security", 
                desc:"Enforce data level security through organizational hierarchy or role-defined restrictions.",
                cls:"text-left",
            },
        ]
    }
];

