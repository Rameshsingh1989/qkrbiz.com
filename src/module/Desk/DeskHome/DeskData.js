import { desk as ImagesUrl_desk, video as ImagesUrl_video } from "../../../assets/images";

export const DeskHomeMeta = {
  title: "Help Desk & Customer Support Software | QkrDesk",
  description: "Resolve customer queries faster with QkrDesk's intelligent help desk, ticket management, and SLA-based support system.",
};

export const DeskHeadData = [
  {   
      id:1,
      youTubeVideoUrl: "",
      videoUrl: ImagesUrl_video.QkrdeskHearders,
      imgUrl: ImagesUrl_desk.QkrdeskHearder,
      alt:"Delight your customers",
      title: "",
      subTitle:"Delight your customers",
      desc:"An intelligent platform for managing service calls of your customers. Fully integrated with Qkrvisit for managing your support team deployed on field.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];


export const DeskFeatureData = [ 
    {   
        "id":1,
        "imgUrl":ImagesUrl_desk.Deskfeatures_1,
        "alt1":"QkrDesk feature for customer support ticket and helpdesk management software",
        "imgUrl2":ImagesUrl_desk.Deskfeatures_2,
        "alt2":"QkrDesk feature for customer support ticket and helpdesk management software",
        "title":"Features",
        "description":"Start working quickly with a user-friendly interface that is similar to familiar spreadsheet software like Excel. Reduce the learning curve with access to frequently used spreadsheet features on every page.",
        "ExpenseFeaturs":[
            {   
                "id":1,
                "imgUrls":ImagesUrl_desk.TicketsManagement,
                "heads":"Tickets Management",
                "desc":"Automate the process of creating, organizing & tracking requests into a seamless process. View all assignments, updates, field visits and process status against each ticket. Customize your tickets."
            },
            {   
                "id":2,
                "imgUrls":ImagesUrl_desk.ServiceContractManagement,
                "heads":"Service Contract Management",
                "desc":"Manage your customer information including the products & services purchased and contracts they are entitled to. Map OEM contracts to customer service contracts as applicable."
            },
            {   
                "id":3,
                "imgUrls":ImagesUrl_desk.ManageFieldVisits,
                "heads":"Manage Field Visits",
                "desc":"Get real time updates of field team on email, sms or app with QkrHR. Tickets can be updated by the field team with attachments and pictures."
            },
            {   
                "id":4,
                "imgUrls":ImagesUrl_desk.WebBasedAccess,
                "heads":"Web Based Access to Customers",
                "desc":"Customers can log in tickets from the web portal, check the status, reopen closed tickets and rate services."
            },
            {   
                "id":5,
                "imgUrls":ImagesUrl_desk.ProcessManagement,
                "heads":"Process Management",
                "desc":"Service calls often involve multiple other processes for managing spares, RMA, repair, etc. Create your own process flows and attach them to tickets as applicable. Track and update each process for end to end management of customer service."
            },
            {   
                "id":6,
                "imgUrls":ImagesUrl_desk.ActIntelligence,
                "heads":"Act With Intelligence",
                "desc":"Customize your reports and get insights into the metrics that matter: the health of your customer base and how it affects your business. Use dashboards to get a bird eye view of services."
            },
            {   
                "id":7,
                "imgUrls":ImagesUrl_desk.GrowWithoutGrowing,
                "heads":"Grow Without Growing Pains",
                "desc":"Scaling is easy because our technology works right out of the box, integrates with other tools, and expands to fit your business."
            },
            {   
                "id":8,
                "imgUrls":ImagesUrl_desk.LeadCustomers,
                "heads":"Lead Customers to Happiness",
                "desc":"Give customers what they want – quick and easy resolutions to their issues. QkrDesk helps you provide personalized support when and where they need it, so customers stay happy."
            },
            {   
                "id":9,
                "imgUrls":ImagesUrl_desk.ConnectingBusiness,
                "heads":"Connecting Business",
                "desc":"Lets each division of your organization define their product or service specific configuration and work as independent units."
            },
         ]
    }, 
];
export const DesTicketData = [
  {   
      "id":1,
      "videoUrl":ImagesUrl_video.HelpdeskAnimation,
      "imgUrl":"",
      "title":"Customer <span class='text-magenta'>Portal<span>",
      "desc":"An intelligent platform for managing service calls of your customers. Fully integrated with Qkrvisit for managing your support team deployed on field.",
  }
];

export const TabScrollLogicalDaskData = [
    {
       "id": 1,
       "tabName":"Ticketing",
       "tabIcon":"Ticketing_Icon",
       "navList": [
         {
          "id": 1,
           "videoUrl":ImagesUrl_video.HelpdeskAnimation,
           "imgUrl": ImagesUrl_desk.Ticketing_bg,
           "title":"Ticketing",
           "description":"Prioritize, categorize and assign tickets so you never lose track of them.",
           "cls":"feture-tracking",
           "UList":[
              {
                "head":"Tickets Like Email",
                "desc":"For your customers, it is just email. If you want it that way. If not, there is a visual editor and a plenty of placeholders available for your custom design.",
                "cls1":"right-1",
                "pcls":"mb-4"
              },
              {
                "head":"Ticket Assignment",
                "desc":"Delegate tickets between team members or automate assignment with case rules.",
                "cls1":"",
                "pcls":"mb-5"
              },
              {
                "head":"Smart Filters",
                "desc":"Quick links to ticket queues in your admin panel. Link to tickets based on their assignee, status, tag, priority, etc.",
                "cls1":"",
                "pcls":"mb-4"
              },
              {
                "head":"Ticket Activity Log",
                "desc":"Track every tiny detail of what happened to a ticket: attributes changed, notifications sent, case rules triggered, macros used, etc.",
                "cls1":"left-1",
                "pcls":"mb-4"
              },
              {
                "head":"Agent Collision Detection",
                "desc":"Get real-time alerts when others are viewing or replying to a ticket.",
                "cls1":"",
                "pcls":"mb-5"
              },
              {
                "head":"Custom Fields",
                "desc":"Set up additional fields to store custom data for each ticket. Make them required to ensure that users fill in information needed to solve their problem.",
                "cls1":"",
                "pcls":"mb-4"
              },

           ]
         }
       ],
       "active": true,
     },
     {
      "id": 2,
      "tabName": "Connect Department",
      "tabIcon":"ConnectDepartment_Icon",
      "navList": [
        {
          "id": 2,
          "imgUrl": ImagesUrl_desk.ConnectingDepartment,
          "videoUrl":ImagesUrl_video.HelpdeskAnimation,
          "title":"Connecting <span class='text-magenta'>Department</span>",
          "description":"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
          "cls":"feture-customer",
          "UList":[
             {
                "head":"Collaboration",
                "desc":"Work together as teams to quickly and efficiently solve customer problems.",
                "pcls":"mb-3"
             },
             {
                "head":"WorkFlow Setup",
                "desc":"Create clear and efficient workflows by sharing tickets with different parties involved without compromising on your access to them.",
                "pcls":"mb-2"
              },
             {
                "head":"Alerts",
                "desc":"Set alerts according to your need for the user. No automatic alerts Given",
                "pcls":"mb-3"
             },
          ]
        }
      ],
      "active": false
     },
     {
      "id": 3,
       "tabName": "Automation",
       "tabIcon":"Automation_Icon",
       "navList": [
         {
          "id": 3,
           "imgUrl":ImagesUrl_desk.ConnectingDepartment,
          "videoUrl":ImagesUrl_video.HelpdeskAnimation,
           "title":"Automation",
           "description":"Leverage Qkr desk's built-in capabilities to automate repetitive helpdesk tasks.",
           "cls":"feture-customer",
           "UList":[
              {
                "head":"Automatic Email Notification",
                "desc":"Notify customers and agents automatically about the changes happening in their ticket.",
                "pcls":"mb-3"
              },
              {
                "head":"TicEvent-triggered Event-triggered Automation",
                "desc":"Implement one or more actions on specific tickets as soon as an event happens.",
                "pcls":"mb-4"
              },
              {
                "head":"Time-triggered Automation",
                "desc":"Execute maintenance activities on tickets based on the time lapse since an event happened",
                "pcls":"mb-3"
              },
           ]
         }
       ],
       "active": false
     },
     {
      "id": 4,
       "tabName": "Customer Portal",
       "tabIcon":"CustomerPortal_Icon",
       "navList": [
         {
          "id": 4,
           "imgUrl": ImagesUrl_desk.ConnectingDepartment,
           "videoUrl":ImagesUrl_video.HelpdeskAnimation,
           "title":"Customer <span class='text-magenta'>Portal<span>",
           "description":"Help customers help themselves Create a self-service experience for customers with a knowledge base and forums.",
           "cls":"feture-customer",
           "UList":[
            {
                "head":"Ticket Creation",
                "desc":"A customer can register his ticket with details.",
                "pcls":"mb-5"
              },
              {
                "head":"Status Update",
                "desc":"Users can check all his status of the ticket",
                "pcls":"mb-5"
              },
              {
                "head":"Alerts",
                "desc":"Alerts on the basis of action can be fixed.",
                "pcls":"mb-3"
              },
           ]
         }
       ],
       "active": false
     },
];
export const BringTeamData = [
    {   
      "id":1,
      "imgUrl":ImagesUrl_desk.StreamlineConversations,
      "title":"<span>Bring Teams Together To Deliver Exceptional</span> <span class='text-magenta'>Customer Support</span>",
      "desc":"Bringing Teams Together to Deliver Exceptional Customer Support is about unifying people, processes, and technology to create seamless customer experiences. By enabling clear communication, shared visibility, and efficient collaboration across teams, organizations can respond faster, resolve issues more effectively, and build lasting customer trust. When teams work together with a common goal, customer support becomes proactive, consistent, and truly exceptional.",
      "UList":[
        {
            "head":"Streamline Conversations",
            "imgUrl":ImagesUrl_desk.StreamlineConversations,
            "desc":"Stay on top of all your requests coming in from different support channels",
            "cls":"mr-2"
          },
          {
            "head":"Collaborate Better",
            "imgUrl":ImagesUrl_desk.CollaborateBetter,
            "desc":"Get help from the right people across internal teams by looping them into tickets",
            "cls":"mt-5"
          },
          {
            "head":"Stay Productive",
            "imgUrl":ImagesUrl_desk.StayProductive,
            "desc":"Make use of smart automation and game mechanics to get things done faster",
            "cls":"ml-6"
          },
       ]
      
    }
];
