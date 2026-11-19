import { QkrTenders as ImagesUrl_QkrTenders, hrDocument as ImagesUrl_hrDocument, hrWorkflow as ImagesUrl_hrWorkflow, video as ImagesUrl_video } from "../../../assets/images";

export const TendersHomeMeta = {
  title: "Tender Management Software India | QkrTenders",
  description: "Win more tenders with QkrTenders. Track bids, deposits, and tender statuses in one centralized tender management platform.",
};

export const TendersHeadData = [
  {   
      id:1,
      youTubeVideoUrl: "uPq_rTEZZug",
      videoUrl: "",
      imgUrl: ImagesUrl_QkrTenders.Qkrtenderheader,
      alt:"Unlock your capital",
      title: "",
      subTitle:"Unlock your capital",
      desc:"An intelligent platform for managing your tender bids and Earnest Money Deposits (EMD), Security Deposits (SD), Performance Bank Guarantees (PBG) and Retention Money.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];

export const EMDStatusData = [
    {   
        "id":1,
        "desc":"<p class='fn-4'>It can be challenging to keep up with tracking tender bid status and collecting deposits like Earnest Money Deposits (EMD), Security Deposits (SD), and Performance Bank Guarantees (PBG) when you're busy with new tenders and order execution. Neglecting these collections can result in your working capital being blocked.</p>"
        + "<p class='fn-4'>Qkrtender offers a solution to this problem by managing all your bids and deposits from start to finish. Its automated system ensures that each deposit is recovered in a timely manner, freeing up your valuable working capital.</p>",
    }
];
export const BiddingStatusData = [
    {   
        "id":1,
        "videoUrl":"",
        "imgUrl":ImagesUrl_QkrTenders.BiddingStatus,
        "title":"Bidding Status",
        "desc":"Bid Submission Kanban boards to track bids at different stages reminders for updates at each stage of evaluation EMD made collectable as per tender terms manage tender extension",
    }
];
export const TendersFeatureData = [
    {   
        "id":1,
        "imgUrl1":ImagesUrl_QkrTenders.TendersFeature_1,
        "alt1":"QkrTenders feature for tender submission and approval workflow management",
        "imgUrl2":ImagesUrl_QkrTenders.TendersFeature_2,
        "alt2":"QkrTenders feature for tender document management and bid tracking software",
        "title":"Tender Bids and Deposit <span class='text-gradient'>Management System</span>",
        "description":"Manage tender bids, bank limits, approval, submission and recovery of every deposit",
        "ExpenseFeaturs":[
            {   
                "id":1,
                "imgUrls":ImagesUrl_QkrTenders.DepositRequests,
                "heads":"Deposit Requests",
                "desc":"Request EMD with Tender details Process PBG, SD & any other BG Requests Workflow based approval Accounts team notified on final approval Hold or cancel request Add custom fields and custom forms to EMD Requests"
            },
            {   
                "id":2,
                "imgUrls":ImagesUrl_QkrTenders.BankProcessing,
                "heads":"Bank Processing",
                "desc":"List of approved request Apply to bank using pre-defined templates Manage BG Limits with multiple Banks Receive Instruments from Bank Issue to salesperson Track submission to client by salesperson"
            },
            {   
                "id":3,
                "imgUrls":ImagesUrl_QkrTenders.BidManagement,
                "heads":"Bid Management",
                "desc":"Bid Submission Kanban boards to track bids at different stages Reminders for updates at each stage of evaluation EMD made collectable as per tender terms Manage tender extension"
            },
            {   
                "id":4,
                "imgUrls":ImagesUrl_QkrTenders.CollectDeposits,
                "heads":"Collect Deposits",
                "desc":"Deposits automatically made collectable on expiry date Create templates from reminders to salesperson and customers Salesperson to update collection Accounts team to release from bank Kanban boards to overdue collections with aging Pivot tables to view data by bank, by expiry year"
            },
            {   
                "id":5,
                "imgUrls":ImagesUrl_QkrTenders.ExtensionsAmendments,
                "heads":"Extensions or Amendments",
                "desc":"Request for Extension or Amendment of deposits Approval workflow with complete history Process amendment from bank Track resubmission"
            },
            {   
                "id":6,
                "imgUrls":ImagesUrl_QkrTenders.PerformanceMonitoring,
                "heads":"Performance Monitoring & Review",
                "desc":"Define Turnaround Time (TAT) for every task Automatically records actual time taken for every task User to specify delay reason, when TAT is breached Review performance of employee across all assigned tasks"
            },
            {   
                "id":7,
                "imgUrls":ImagesUrl_QkrTenders.GenerateLetters,
                "heads":"Generate Letters",
                "desc":"Customize templates of letters for multiple Banks Create pre-approved PBG formats for recurring clients Customize and automate reminders to clients Customize and automate reminders to Bank"
            },
         ]
    },
    
];

export const UnrecoveredDepositsData = [
    {   
        "id":1,
        "imgUrl":ImagesUrl_QkrTenders.DespiteOurGrowing,
        "title":"Funds getting blocked in <span class='text-gradient'>Unrecovered Deposits</span>",
        "Unrecovered":[
             {
                "id":1,
                "cls":"q_img_1",
               "li":"Facing trouble with the timely recovery of Earnest Money Deposits (EMD), Performance Bank Guarantees (PBG), and Security Deposits (SD)." 
             },
             {
                "id":2,
                "cls":"q_img_2",
                "li":"Poor tracking of bid status and lost bids resulting in unrecovered Earnest Money Deposits (EMD)." 
              },
              {
                "id":3,
                "cls":"q_img_3",
                "li":"PBG are getting delayed or undergoing unnecessary amendments due to lack of precise order terms and conditions." 
              },
              {
                "id":4,
                "cls":"q_img_4",
                "li":"Recovery of EMD or PBG becoming a challenge due to lack of information after a salesperson leaves." 
              },
              {
                "id":5,
                "cls":"q_img_5",
                "li":"Lack of proper approval process leading to submission of some unviable bids." 
              }
        ]
    }
];

export const SoftwareDetails = [
    {
        id:1,
        videoAuto: false,
        videoUrl:"",
        imgUrl:ImagesUrl_hrWorkflow.hrWorkflows,
        alt:"HR Workflows",
        title:"HR Workflows",
        descs:`Qkrbiz's workflow engine optimizes HR operations by supporting policy-driven approval workflows. You can define multiple approval stages with unlimited levels of approvers, ensuring a flexible and comprehensive process. Stay informed with real-time notifications via SMS, email, and in-app alerts, so every stakeholder in the approval chain is always updated.
              <br/>Create and personalize notification templates, set up automatic reminders, and schedule escalations to ensure timely follow-ups for pending approvals. This guarantees that no task is overlooked.
              <br/>Whether it’s for leave applications, expense submissions, or other HR procedures, Qkrbiz simplifies approval tracking and management.`,
        urls:"/hrms-software/hr-workflow-management",
       linkText:"Workflow features"       
       },
      {
        id:2,
        videoAuto: false,
        videoUrl:"",
        imgUrl:ImagesUrl_hrDocument.employeeRelatedDoc,
        alt:"Documents",
        title:"Documents",
        descs:"QkrHR offers a secure, digital repository for storing all employee-related documents. With robust access controls, it ensures the privacy and safety of sensitive data. By centralizing employee documentation, it helps streamline HR workflows and boosts overall operational efficiency.",
        urls:"/hrms-software/hr-document-management-system",
        linkText:"Document Management"   
    },
      {
        id:3,
        videoAuto: true,
        videoUrl:ImagesUrl_video.AlertNotificationRepeat,
        imgUrl:ImagesUrl_hrWorkflow.alertsNotifications,
        alt:"Alerts & Notifications",
        title:"Alerts & Notifications",
        descs:"Qkrbiz provides a comprehensive alert and notification system, an integral feature of any efficient HR platform. With customizable reminders and escalation mechanisms, it guarantees that crucial HR tasks are executed on time, preventing delays and ensuring smooth operations.",
        urls:"/hrms-software/hr-workflow-management",
        linkText:"Alerts & Notifications"   
    },
];

export const BenefitsData = [  
    {   
        id:1,
        numb:"01",
        title:"Bid Management",
        desc:"Keep a close track of bids from approval stage through evaluation stages to final outcome",
    },
    {   
        id:2,
        numb:"02",
        title:"Recovery of deposits",
        desc:"Take uncertainty out of recovery of your valuable deposits with automated reminders",
    },
    {   
        id:3,
        numb:"03",
        title:"Bank Limits",
        desc:"Complete control over bank limit utilization across multiple banks",
    },
    {   
        id:4,
        numb:"04",
        title:"Automate deposit approval",
        desc:"Accurate and time bound approvals of EMD, PBG and SD with policy based workflows",
    },
    {   
        id:5,
        numb:"05",
        title:"Life cycle management",
        desc:"Complete transparency at all stages of tender bidding, bid evaluation & order booking right from request stage to recovery",
    },
    {   
        id:6,
        numb:"06",
        title:"Bye-bye to searching for documents",
        desc:"Access all documents connected with bids and orders on a click",
    }
]