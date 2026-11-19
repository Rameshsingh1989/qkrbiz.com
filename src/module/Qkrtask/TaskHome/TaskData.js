import { Qkrtask as ImagesUrl_Qkrtask, video as ImagesUrl_video } from "../../../assets/images";

export const TaskHomeMeta = {
  title: "Team Task Management & Productivity App | QkrTasks",
  description: "Assign, prioritize, and track business tasks with QkrTasks. Boost team productivity with smart task management and deadline alerts.",
};

export const TaskHeadData = [
   {
         "id":1,
         "youTubeVideoUrl": "",
         "videoUrl":ImagesUrl_video.TasksHeader,
         "imgUrl":ImagesUrl_Qkrtask.QkrtaskHeader,
         "alt":"",
         "title":"QkrTasks",
         "subTitle":"The perfect task management software",
         "desc":"Organize your work so that everyone is clear of what to do and when.",
         "link":"/signup",
         "subDesc":"",
         "HeadList":[
                  'One time and recurring tasks',
                  'Custom forms',
                  'Performance Analytics',
                  'Notifications and escalations'
         ]
   }
];
export const TabsScrollTaskData = [
    {
       "id": 1,
       "tabName": "Effortless Experience",
       "tabIcon": "EffortlessExperience",
       "navList": [
         {
           "imgUrl": ImagesUrl_Qkrtask.EffortlessExperienceBody,
           "title":"Effortless Experience",
         }
       ],
       "active": true,
     },
     {
      "id": 2,
      "tabName": "Task View",
      "tabIcon": "TaskView",
      "navList": [
        {
          "imgUrl": ImagesUrl_Qkrtask.TaskViewBody,
          "title":"TaskView",
        }
      ],
      "active": false
    },
     {
      "id": 3,
       "tabName": "History",
       "tabIcon": "History",
       "navList": [
         {
           "imgUrl": ImagesUrl_Qkrtask.HistoryBody,
           "title":"History",
         }
       ],
       "active": false
     },
  
];
export const GettingWorkData = [
    {
      "id":1,
      "title":"Is Getting Work Completed On Time <span class='text-gradient'>Becoming A Pain Point? </span>",
      "description":"",
      "BoxList":[
         {
            "id":1,
            "imgUrls":ImagesUrl_Qkrtask.Reporting,
            "heads":"Reporting",
            "desc":"Chasing team to submit reports timely is a job in itself.",
            "link":"/signup",
            "linkText":"Solution",
            "Listing":[
               {
                  "li":"Set up your reporting on a weekly, monthly, quarterly, or annual basis."
               },
               {
                  "li":"QkrTasks will follow up with your team on your behalf, providing clear deadlines and prompts to ensure the report is finished on schedule."
               },
               {
                  "li":"After work is finished, the team will attach reports and update the status."
               }
            ]
         },
         {
            "id":2,
            "imgUrls":ImagesUrl_Qkrtask.ImportantTasks,
            "heads":"Important tasks",
            "desc":"A lot of significant activities that need time to finish are sometimes overlooked in the daily chaos of work.",
            "link":"/signup",
            "linkText":"Solution",
            "Listing":[
               {
                  "li":"Let QkrTasks handle the follow-up so you don't have to. It would guarantee that such tasks are never forgotten until they are finished."
               },
               {
                  "li":"Set up tasks that have a future due date; QkrTasks will activate them as and when they become due."
               }
            ]
         },
         {
            "id":3,
            "imgUrls":ImagesUrl_Qkrtask.Renewals,
            "heads":"Renewals",
            "desc":"It can be difficult to keep track of licensing, insurance, warranty contract, and other renewals. Any lapses could lead to financial losses or disruption of work.",
            "link":"/signup",
            "linkText":"Solution",
            "Listing":[
               {
                  "li":"Set up these jobs in QkrTasks and unwind!"
               },
               {
                  "li":"Allow it to send out follow-up reminders as the deadline draws near."
               }
            ]
         }
      ]
   }
];
export const CompliancesData = [
    {   
        "id":1,
        "imgUrl":ImagesUrl_Qkrtask.Compliances,
        "link":"/signup",
        "title":"Compliances",
        "desc":"For every business, statutory tasks that must be finished by a certain date are crucial. Any delays could result in fines or damage to one's reputation..",
        "ulList":"With QkrTasks, you can assign a task once and let it take care of the rest, ensuring such tasks are completed timely year after year, while giving you real time status updates.",

    }
];


export const TaskDigitalPlatform = [
   {
    "id":1,
    "desc":"A digital platform, built by industry veterans, which provides a knowledge based solution to all these problems. This effortless and highly customizable system enhances your potential to grow by freeing valuable capital, time and energy through updated and error free management.",
   }
]