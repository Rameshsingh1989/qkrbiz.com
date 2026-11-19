import { taskManagement as ImagesUrl_taskManagement, video as ImagesUrl_video } from "../../../../assets/images";

export const TaskManagementHomeMeta = {
  title: "HR and Employee Task Management System in India | QkrHR",
  description: "Boost productivity with QkrHR — India's HR and Employee Task Management System. Simplify task delegation, tracking, and completion.",
};

export const TaskManagementHeadData = [
  {   
      id:1,
      videoUrl:ImagesUrl_video.TasksHeader,
      imgUrl:ImagesUrl_taskManagement.taskManagementHeader,
      alt:"Employee Task Management",
      title:"Employee Task Management",
      subTitle:"Simplify task delegation, tracking, and execution with QkrHR",
      desc:"Where every task finds its path, Every deadline is met, and Every team works in sync.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];

export const TaskManagementData = [
    {
       "id":1,
       "title":"What Makes QkrHR Task Management a <span class='text-gradient'>Game-Changer?</span>",
       "description":"With QkrHR Task Management, effortlessly assign, track, and complete tasks while staying organized and in control.",
       "Listing":[
          {  
             id:1,
             cls:"card-magenta",
             icons:ImagesUrl_taskManagement.workflowsThat,
             heads:"Workflows That Work",
             desc:"Structure tasks with ease and never miss a beat."
          },
          {
             id:2,
             cls:"card-info",
             icons:ImagesUrl_taskManagement.meverMiss,
             heads:"Never Miss a Deadline",
             desc:"Smart reminders and automated follow-ups keep teams on track."
          },
          {
             id:3,
             cls:"card-pink",
             icons:ImagesUrl_taskManagement.crystalClear,
             heads:"Crystal-Clear Accountability",
             desc:"Every task has an owner, ensuring seamless execution."
          },
          {
             id:4,
             cls:"card-success",
             icons:ImagesUrl_taskManagement.workflowsThat,
             heads:"Insights That Drive Productivity",
             desc:"Data-backed reports help you optimize team efficiency."
          },
          {
             id:5,
             cls:"card-warning",
             icons:ImagesUrl_taskManagement.tailoredYou,
             heads:"Tailored for You",
             desc:"Customize tasks, priorities, and workflows to match your business needs."
          },
       ]
    },
];

export const HrEfficiencyData = [
    {
          title: "Revolutionizing HR Efficiency,<span class='text-gradient'> <br/>One Task at a Time</span>",
          subtitle: "One Task at a Time",
          imgUrl:ImagesUrl_taskManagement.revolutionizingHR,
          features: [
            {
              id: 1,
              cls:"mr-auto",
              title: "Streamlined Employee Onboarding",
              description: "Ensure smooth onboarding by assigning structured tasks for documentation, training, and policy sign-offs."
            },
            {
              id: 2,
              cls:"mt-5",
              title: "Compliance Without Complications",
              description: "Automate routine compliance tasks, meeting deadlines without the stress."
            },
            {
              id: 3,
               cls:"",
              title: "Payroll & HR Approvals Made Easy",
              description: "Eliminate bottlenecks by automating approvals for payroll, leaves, and reimbursements."
            },
            {
              id: 4,
               cls:"mt-5 mr-auto",
              title: "Performance Reviews & Feedback Loops",
              description: "Set up periodic check-ins, trigger reminders, and collect insights—all without manual follow-ups."
            }
          ]
      }
];

export const TaskManagementAllData = [
   {
      id:1,
      videoAuto: false,
      imgUrl:ImagesUrl_taskManagement.smartTask,
      videoUrl:"",
      title:"Smart Task <span class='text-gradient'>Scheduling</span>",
      List: [
         "Assign one-time or recurring tasks effortlessly.",
         "Automate repetitive workflows like payroll approvals and compliance checks.",
       ]
   },
    {
      id:2,
      videoAuto: false,
      imgUrl:ImagesUrl_taskManagement.prioritiesMatter,
      videoUrl:"",
      title:"Priorities That <span class='text-gradient'>Matter<span>",
      List: [
         "Set urgency levels and due dates so critical tasks get done first.",
         "Visual task boards for instant clarity on pending work.",
       ]
    },
    {
      id:3,
      videoAuto: false,
      imgUrl:ImagesUrl_taskManagement.intelligentEscalations,
      videoUrl:"",
      title:"Intelligent Alerts<span class='text-gradient'> & Escalations</span>",
      List: [
         "Get notified before deadlines approach to avoid last-minute scrambles.",
         "Auto-escalate pending tasks to higher authorities to ensure accountability.",
       ]
    },
    {
      id:4,
      videoAuto: false,
      imgUrl:ImagesUrl_taskManagement.realtimeTracking,
      videoUrl:"",
      title:"Real-Time Tracking<span class='text-gradient'> & Reporting</span>",
      List: [
         "Monitor task progress at a glance with live status updates.",
         "Generate reports to assess performance and optimize efficiency.",
       ]
    },
    {
      id:5,
      videoAuto: false,
      imgUrl:ImagesUrl_taskManagement.smartCategorization,
      videoUrl:"",
      title:"Smart Categorization <span class='text-gradient'> & Filtering</span>",
      List: [
         "Organize tasks under HR, Admin, Payroll, Compliance, and more.",
         'Use dynamic filters like "My Tasks," "Overdue Tasks," and "Urgent Tasks.',
       ]
    },
];
