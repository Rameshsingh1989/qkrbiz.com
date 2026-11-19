import { shiftManagements as ImagesUrl_shiftManagements  } from "../../../../assets/images";

export const ShiftManagementMeta = {
  title: "Shift Management Software | Employee Shift Scheduling |QkrHR",
  description: "Shift management software to plan rotational, night and split shifts. Drag-and-drop rosters, shift swaps, overtime alerts and attendance sync. Book a demo.",
};


export const ShiftManagementHeadData = [
    {   
      id:1,
      videoUrl:"",
      youTubeVideoUrl: "bf3U8zW1dxc",
      imgUrl:ImagesUrl_shiftManagements.shiftManagementHeader,
      alt:"With QkrHR shift scheduler software, quickly create multiple shifts",
      title:"Shift Management Software",
      subTitle:"Plan shifts once. <br/><span class='text-gradient'>Let the roster keep itself.</span>",
      desc:"Stop redrawing rosters every week in Excel. QkrHR builds your shift schedules, assigns teams to plants and sites, calculates overtime and night allowances — and feeds it all directly to payroll.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];

// ----------------------- BUILT TO SOLVE REAL LEAVE PROBLEMS -----------------------
export const fixesAllData = [
  {
    id: 1,
    subTitle: "Built to solve real shift problems",
    title: "<span class='text-gradient'>QkrHR fixes all of this —</span> in one flow",
    description: "",
    cards: [
      { 
        id: 1, 
        icon1: ImagesUrl_shiftManagements.rosterRedrawn, 
        icon2: ImagesUrl_shiftManagements.dragAndDrop, 
        problem: "Roster redrawn in Excelevery week", 
        solution: "Drag-and-drop roster grid, updated live" 
      },
      { 
        id: 2, 
        icon1: ImagesUrl_shiftManagements.shiftConflicts,
        icon2: ImagesUrl_shiftManagements.conflictDetection,
        problem: "Shift conflicts — two people, one post", 
        solution: "Conflict detection before the roster saves" 
      },
      { 
        id: 3, 
        icon1: ImagesUrl_shiftManagements.overtimeCalculated,
        icon2: ImagesUrl_shiftManagements.overtimebyShift,
        problem: "Overtime calculated by hand at month-end", 
        solution: "Overtime by shift rules, automatic to the minute" 
      },
      { id: 4, 
        icon1: ImagesUrl_shiftManagements.nightAllowance,
        icon2: ImagesUrl_shiftManagements.nightAllowanceCalculated,
        problem: "Night allowance missed or keyed in wrong", 
        solution: "Night allowance calculated and pushed to payroll" 
      },
      { id: 5, 
        icon1: ImagesUrl_shiftManagements.shiftSwaps,
        icon2: ImagesUrl_shiftManagements.swapRequests,
        problem: "Shift swaps on WhatsApp, roster never updated", 
        solution: "Swap requests approved, roster updated instantly" 
      },
      { 
        id: 6, 
        icon1: ImagesUrl_shiftManagements.attendanceAndPayroll,
        icon2: ImagesUrl_shiftManagements.attendanceValidated,
        problem: "Attendance and payroll don't match the roster", 
        solution: "Attendance validated against shift, payroll flows" 
      }
    ]
  }
];

// ----------------------- YOUR COMPLETE ATTENDANCE FLOW (tabbed, on-click) -----------------------
export const setupShiftsData = [
  {
    subTitle: "How it works",
    title: "Set up shifts once <span class='text-gradient'>Then let QkrHR run the floor</span>",
    description: "",
    stages: [
      {
        tabName: "Define",
        icon: ImagesUrl_shiftManagements.define,
        iconActive: ImagesUrl_shiftManagements.defineActive,
        bgClass: "flow-bg-mint",
        title: "Every shift your operation runs, in one place",
        desc: "Set the name, start time, end time, break duration, and whether it crosses midnight. Each shift carries its own overtime threshold, allowance rules and attendance rounding settings.",
        imgUrl: ImagesUrl_shiftManagements.defineTab,
        alt: "Every shift your operation runs, in one place",
        features: [
          { label: "<span class='fn-sb'>Standard shifts</span> — General, Morning (A), Evening (B), Night (C) with exact timings." },
          { label: "<span class='fn-sb'>Cross-midnight shifts</span> — night shifts that start and end on different calendar dates, handled correctly." },
          { label: "<span class='fn-sb'>Custom shifts</span> — any start/end time, any break duration, any name your plant uses." },
          { label: "<span class='fn-sb'>Overtime threshold</span> set per shift — hours beyond it trigger OT calculation automatically." }
        ]
      },
      {
        tabName: "Pattern & Roster",
        icon: ImagesUrl_shiftManagements.patternRoster,
        iconActive: ImagesUrl_shiftManagements.patternRosterActive,
        bgClass: "flow-bg-lavender",
        title: "Build the pattern once. The roster fills itself",
        desc: "Define a rotating or fixed pattern — who's on A shift this week, B next week, N the week after — and apply it to a team. QkrHR fills the roster grid and keeps it updated as weeks roll over.",
        imgUrl: ImagesUrl_shiftManagements.patternRosterTab,
        alt: "Build the pattern once. The roster fills itself",
        features: [
          { label: "<span class='fn-sb'>3-team rotating cycles</span> (A→B→N) for continuous operations like factories and plants." },
          { label: "<span class='fn-sb'>Fixed shift schedules</span> for office and retail teams that don't rotate." },
          { label: "<span class='fn-sb'>Weekly roster grid</span> — every employee, every day, every shift visible at once." },
          { label: "<span class='fn-sb'>Weekly offs and rest days</span> assigned per team and carried into attendance automatically." }
        ]
      },
      {
        tabName: "Assign Teams",
        icon: ImagesUrl_shiftManagements.assignTeam,
        iconActive: ImagesUrl_shiftManagements.assignTeamActive,
        bgClass: "flow-bg-cream",
        title: "Assign shifts to a team of 200 as fast as a team of 2",
        desc: "Map shift patterns to teams, departments or entire plants in one action. For edge cases — a temporary transfer, a secondment, a medical adjustment — override one person without touching the rest of the group.",
        imgUrl: ImagesUrl_shiftManagements.assignTeamTab,
        alt: "Assign shifts to a team of 200 as fast as a team of 2",
        features: [
          { label: "<span class='fn-sb'>Bulk assignment by team, department, grade or plant</span> — assign a shift pattern to everyone in a group in one action." },
          { label: "<span class='fn-sb'>Individual override</span> — change one person's shift without affecting their team's pattern." },
          { label: "<span class='fn-sb'>Effective date control</span> — schedule assignment changes in advance; the roster updates automatically on the date set." },
          { label: "<span class='fn-sb'>Mid-cycle reassignment</span> — move someone mid-week, pro-rated attendance and OT recalculate from the change date." }
        ]
      },
      {
        tabName: "Attendance Track",
        icon: ImagesUrl_shiftManagements.attendanceTrack,
        iconActive: ImagesUrl_shiftManagements.attendanceTrackActive,
        bgClass: "flow-bg-green",
        title: "Attendance validated against the shift — automatically",
        desc: "Every punch — biometric, GPS mobile or web — is checked against the employee's assigned shift for that day. Late marks, early outs and missed punches are flagged in real time, not discovered at month-end.",
        imgUrl: ImagesUrl_shiftManagements.attendanceTrackTab,
        alt: "Attendance validated against the shift — automatically",
        features: [
          { label: "<span class='fn-sb'>Shift-wise attendance board</span> — see who is in on A shift, who is late on B shift, and who is missing on night shift, live." },
          { label: "<span class='fn-sb'>Late mark by shift timing</span> — a punch at 06:18 on A shift is flagged late; the same punch on General shift is on time." },
          { label: "<span class='fn-sb'>Early out detection</span> — leaves before shift end? Flagged and linked to the exact shift definition." },
          { label: "<span class='fn-sb'>Wrong-shift punch alert</span> — employee punched on a shift they were not rostered for gets flagged for regularization." },
          { label: "<span class='fn-sb'>GPS &amp; geofence validation</span> — mobile punches tied to site location, so shift attendance is verified to the right place." }
        ]
      },
      {
        tabName: "Sync Payroll",
        icon: ImagesUrl_shiftManagements.syncPayroll,
        iconActive: ImagesUrl_shiftManagements.syncPayrollActive,
        bgClass: "flow-bg-peach",
        title: "Shift data lands in payroll. Nothing gets re-keyed",
        desc: "When attendance is locked, QkrHR pushes every shift-related input to payroll automatically — worked days, overtime hours, night allowances, shift differentials and LOP — all calculated from the same roster and attendance data you saw on the board.",
        imgUrl: ImagesUrl_shiftManagements.syncPayrollTab,
        alt: "Shift data lands in payroll. Nothing gets re-keyed",
        features: [
          { label: "<span class='fn-sb'>Worked days and hours</span> pulled from shift-validated attendance — no manual totaling." },
          { label: "<span class='fn-sb'>Overtime by shift rule</span> — the threshold and rate you set per shift type calculate and flow in automatically." },
          { label: "<span class='fn-sb'>Night shift allowance</span> — flat or percentage-based differential per C/N shift day, pushed to payroll without a separate entry." },
          { label: "<span class='fn-sb'>Loss of Pay (LOP)</span> — for absent and no-punch days, calculated against the assigned shift and deducted automatically." },
          { label: "<span class='fn-sb'>One source of truth</span> — the numbers in payroll are the same numbers you saw on the attendance board. No version risk." }
        ]
      }
    ]
  }
];

export const questionManagementData = [
  {
      id: 1,
      title:"",
      subTitle:"",
      desc:"",
      cardSection:[
          {
            id: 1,
            icon:ImagesUrl_shiftManagements.whatShiftManament,
            title: "What is a shift management system?",
            description: "A shift management system is software that defines work shift timings, builds weekly or monthly rosters, assigns employees to shifts, tracks attendance against those shifts, and calculates overtime and allowances. It replaces manual Excel rosters so shift planners build once and the system runs the floor.",
          },
          {
            id: 2,
            icon:ImagesUrl_shiftManagements.whatRotatingShift,
            title: "What is a rotating shift?",
            description: "A rotating shift is a work schedule where employees cycle through different shifts typically morning, evening and night on a repeating pattern. QkrHR builds rotating shift patterns once and applies them to a roster grid automatically, so each employee always knows their shift and each manager sees who's on which shift that day.",
          },
      ]
  }
]
// ----------------------- WHY TEAMS SWITCH (OLD WAY vs QkrHR WAY) -----------------------
export const teamsSwitchData = [
  {
    id: 1,
    subTitle: "Why teams switch",
    title: "The roster isn't the problem <span class='text-gradient'>Everything that happens around it is</span>",
    description: "Most shift pain shows up after you publish the roster — swaps that never get updated, overtime that's counted wrong, night allowances that get missed at payroll time.",
    columns: [
      {
        id: 1,
        // variant: "old",
        variant: "old",
        title: "<span class='old-text'>The Old way</span>",
        points: [
          "A new Excel sheet drawn from scratch every week",
          "Swap requests on WhatsApp — the roster never reflects them",
          "Overtime tallied by hand from a biometric dump",
          "Night allowances keyed separately into payroll",
          "No live view of who's on which shift right now"
        ]
      },
      {
        id: 2,
        variant: "new",
        title: "<span class='new-text'>The QkrHR Way</span>",
        points: [
          "Roster built once, extended week by week in the same grid",
          "Swap requests approved and roster updated in the same action",
          "Overtime calculated per shift rule, no manual counting",
          "Night allowances and differentials flow straight to payroll",
          "Live shift board — who's in, on which shift, right now"
        ]
      }
    ]
  }
];

// ----------------------- HOW IT WORKS (steps) -----------------------
export const beyondStandardShiftsData = [
  {
    id: 1,
    subTitle: "Beyond standard shifts",
    title: "The real-world scenarios most <span class='text-gradient'>scheduling tools can't handle</span>",
    description: "Indian manufacturing and service industries run complex shift arrangements. QkrHR has the controls built in, not bolted on.",
    steps: [
      {
        id: 1,
        number: "1",
        icon: ImagesUrl_shiftManagements.splitShift,
        title: "Split Shifts",
        description: "Define a shift with two separate work windows in the same day — morning block and afternoon block — with a gap in between."
      },
      {
        id: 2,
        number: "2",
        icon: ImagesUrl_shiftManagements.plantLevel,
        title: "Plant-Level Rosters",
        description: "Separate rosters per plant, department or site — each with its own shift types, team assignments and coverage requirements."
      },
      {
        id: 3,
        number: "3",
        icon: ImagesUrl_shiftManagements.flexibleShift,
        title: "Flexible & WFH Shifts",
        description: "Define shifts for hybrid and remote staff with flexible windows, web punch-in and GPS-tagged mobile attendance."
      },
      {
        id: 4,
        number: "4",
        icon: ImagesUrl_shiftManagements.oncallReliefShift,
        title: "On-Call & Relief Shifts",
        description: "Assign on-call or relief shifts with a different OT rule — for staff covering gaps, emergencies or holiday relief."
      }
    ]
  }
];
// ----------------------- ROLE-BASED DASHBOARDS -----------------------
export const roleBasedDashboardsData = [
  {
    subTitle: "Role-based dashboards",
    title: "Every role sees exactly what they need <span class='text-gradient'>to run their shift</span>",
    description: "One platform, four clear lenses — employees, supervisors, plant HR and finance each see what drives their day.",
    stages: [
      {
        tabName: "Employees",
        bgClass: "theme-deepsky",
        title: "Employees",
        imgUrl: ImagesUrl_shiftManagements.employee,
        features: [
          { label: "See current and upcoming shift from the app" },
          { label: "Request shift swaps in self-service" },
          { label: "GPS check-in tied to shift assignment" },
          { label: "Know weekly offs and rest days in advance" }
        ]
      },
      {
        tabName: "Supervisors",
        bgClass: "theme-orange",
        title: "Supervisors",
        imgUrl: ImagesUrl_shiftManagements.supervisor,
        features: [
          { label: "Live view of who's in oneach shift" },
          { label: "Approve swap requests in one tap" },
          { label: "See shift gaps before they become a problem" },
          { label: "Track late marks and early outs by shift" }
        ]
      },
      {
        tabName: "Plant/HR",
        bgClass: "theme-pink",
        title: "HR Teams",
        imgUrl: ImagesUrl_shiftManagements.plantHr,
        features: [
          { label: "Build and publish weekly rosters per plant" },
          { label: "Assign staff to shifts by team or department" },
          { label: "Configure OT and night allowance rules" },
          { label: "Export roster and shift reports for records" }
        ]
      },
      {
        tabName: "Finance",
        bgClass: "theme-success",
        title: "Finance",
        imgUrl: ImagesUrl_shiftManagements.finance,
        features: [
          { label: "OT and night allowance in payroll, automatic" },
          { label: "Shift differential costs by team and month" },
          { label: "No manual entry, no discrepancies" },
          { label: "Faster, more accurate salary processing" }
        ]
      },
     
      
    ]
  }
];

// ----------------------- Built for complex workforce structures -----------------------
export const builtforComplexData = [
  {
    id: 1,
    subTitle: "Built for complex workforce structures",
    title: "Scales from one site to a <span class='text-gradient'>hundred plants</span>",
    description: "",
    cards: [
      {
        id: 1,
        cardBg:"policies-steg-3",
        icon: ImagesUrl_shiftManagements.multiPlant,
        title: "Multi-plant",
        description: "Independent rosters per plant or site, each with its own shift types and coverage rules."
      },
      {
        id: 2,
         cardBg:"policies-steg-2",
        icon: ImagesUrl_shiftManagements.largTeam,
        title: "Large teams",
        description: "Hundreds of workers across A, B and N shifts — assigned in bulk by department or grade."
      },
      {
        id: 3,
        cardBg:"policies-steg-1",
        icon: ImagesUrl_shiftManagements.hybridOffice,
        title: "Hybrid & office",
        description: "General and flexi shifts for office staff sitting alongside plant rosters in one view."
      },
      {
        id: 4,
        cardBg:"policies-steg-4",
        icon: ImagesUrl_shiftManagements.fieldFporce,
        title: "Field forces",
        description: "GPS-tagged check-in tied to shift assignment and site geofence for on-road teams"
      }
    ]
  }
];

// ----------------------- Advanced shift management features) -----------------------
export const advancedShiftData = [
  {
      id: 1,
      title:"Enterprise-grade shift controls, <span class='text-gradient'>without enterprise complexity</span>",
      subTitle:"Advanced shift management features",
      desc:"",
      cardSection:[
          {
            id: 1,
            icon:ImagesUrl_shiftManagements.rotatingShift,
            title: "Rotating shift patterns",
            description: "3-team and 4-team cycles with automatic week-over-week rotation — no manual adjustment needed.",
          },
          {
            id: 2,
            icon:ImagesUrl_shiftManagements.lateMark,
            title: "Late mark & early-out rules",
            description: "Grace windows, rounding and late-mark thresholds configured per shift — applied to attendance automatically.",
          },
          {
            id: 3,
            icon:ImagesUrl_shiftManagements.nightShift,
            title: "Night shift differential",
            description: "Flat or percentage-based night allowance per shift type, pushed into payroll with full breakdowns.",
          },
          {
            id: 4,
            icon:ImagesUrl_shiftManagements.minimumRest,
            title: "Minimum rest period",
            description: "Prevents scheduling a morning shift immediately after a night shift — enforced at roster-save.",
          },
          {
            id: 5,
            icon:ImagesUrl_shiftManagements.rosterChange,
            title: "Roster change history",
            description: "Full audit trail of every roster edit — who changed what, when, and the previous assignment.",
          },
          {
            id: 5,
            icon:ImagesUrl_shiftManagements.rosterExport,
            title: "Roster export",
            description: "Export any shift roster to Excel or PDF — for printing, compliance records or third-party systems.",
          }
      ]
  }
];

// ----------------------- HOW IT COMPARES (table) -----------------------
export const ShiftComparisonData = [
  {
    id: 1,
    subTitle: "How it compares",
    title: "Excel rosters, basic schedulers or <span class='text-gradient'>QkrHR.</span>",
    description: "A scheduling tool tells people when to work. QkrHR makes sure the roster, attendance and payroll all agree.",
    columns: ["Capability", "Excel / paper", "Basic scheduler", "QkrHR Shift"],
    rows: [
      { feature: "Rotating & fixed shift patterns", manual: "Manual", biometric: "Fixed only", qkrhr: "Both" },
      { feature: "Weekly roster grid — all staff, all shifts", manual: "—", biometric: "Partial", qkrhr: "Full grid" },
      { feature: "Shift swap with roster auto-update", manual: "—", biometric: "—", qkrhr: "One approval" },
      { feature: "Overtime calculated per shift rule", manual: "By hand", biometric: "By hand", qkrhr: "Automatic" },
      { feature: "Night shift allowance to payroll", manual: "Manual", biometric: "—", qkrhr: "Direct" },
      { feature: "Attendance validated against shift", manual: "—", biometric: "—", qkrhr: "Real-time" },
      { feature: "Multi-plant roster management", manual: "—", biometric: "Limited", qkrhr: "Full" },
      { feature: "Glide data grid & approvals inbox", manual: "—", biometric: "—", qkrhr: "Exclusive" },

    ]
  }
];


export const ShiftManagementFAQ = [
      {
       id:1,
       Title:"What is QkrHR's shift management software and its key features?",
       Content:"<p class='mb-3'>Shift Management Software helps to assign different types of shifts to all the employees. It is cost-effective, handy, and convenient to use. QkrHR's shift schedule software is seamlessly integrated with <a href='/hrms-software/time-and-attendance-system' target='_blanck'>mobile and biometric devices</a>.</p>"
        +"<h4 class='mb-3'>Features of QkrHR shift management software</h4>"
        +"<ul class='ul-icon'>"
          +"<li class='tick-icon-magenta'>Manage fixed or variable shifts.</li>"
          +"<li class='tick-icon-magenta'>Automate scheduling based on employee’s availability.</li>"
          +"<li class='tick-icon-magenta'>Generate reports and analytics of shift patterns.</li>"
          +"<li class='tick-icon-magenta'>Allow scheduling with maximum or minimum shift lengths.</li>"
          +"<li class='tick-icon-magenta'>Comprehensive Managing Software</li>"
        +"</ul>"
      },
      {
       id:2,
       Title:"What advantages does shift management software provide for businesses?",
       Content:`<p>Many organizations provide different kinds of shifts to their employees. Let’s make a complex shift schedule into an easier pattern with shift planning software. We make a centralized tool for better communication.</p>
          <h4 class='mb-3'>QkrHR shift scheduling tool offers:</h4>
          <ul class='ul-icon'>
            <li class='tick-icon-magenta'>Alignment of shifts and adjustments</li>
            <li class='tick-icon-magenta'>Managing Fixed Shifts and Rotational Shifts</li>
            <li class='tick-icon-magenta'>Flexible Scheduling Pattern</li>
            <li class='tick-icon-magenta'>Customization of shifts</li>
            <li class='tick-icon-magenta'>Swapping of shifts</li>
          </ul>
        `
      },
     {
       id:3,
       Title:"How does QkrHR's shift scheduling software manage employee availability and requests?",
       Content:"<p class='mb-3'>QkrHR’s shift scheduling software is designed to function smoothly in workforce planning by accommodating employee’s availability.</p>"
          +"<ul class='ul-icon'>"
              +"<li class='tick-icon-magenta'>Allow employees to swap their shifts.</li>"
              +"<li class='tick-icon-magenta'>Automated notifications to both managers and employees.</li>"
              +"<li class='tick-icon-magenta'>Transparency amongst employees and management</li>"
              +"<li class='tick-icon-magenta'>Accommodate Employee Flexibility.</li>"
              +"<li class='tick-icon-magenta'>Automation to generate reports and analytics</li>"	
          +"</ul>"
     },
     {
       id:4,
       Title:"How QkrHR is the best workforce shift software?",
       Content:"<p class='mb-3'>Time is the key. QkrHR offers the best workforce shift software, which is cost-effective and easy to use. The QkrHR shift scheduling tool can manage various kinds of shifts.</p>"
            +"<ul class='ul-icon'>"
            +"<li class='tick-icon-magenta'>Fixed shifts</li>"
            +"<li class='tick-icon-magenta'>Rotating shifts</li>"
            +"<li class='tick-icon-magenta'>Flexible schedules</li>"
            +"<li class='tick-icon-magenta'>Split shifts</li>"
            +"<li class='tick-icon-magenta'>Custom patterns</li>"
          +"</ul>"
      },
     {
       id:5,
       Title:"How does QkrHR help to manage complex shift patterns?",
       Content:"<p class='mb-3'>QkrHR shift scheduler software helps to manage complex shift patterns in a simpler way. Our Basic Features include:</p>"
        +"<ul class='ul-icon'>"
         +"<li class='tick-icon-magenta'>Automated Scheduling</li>"
         +"<li class='tick-icon-magenta'>Employee self-scheduling and shift swapping</li>"
         +"<li class='tick-icon-magenta'>Compliance with labor laws and working hours</li>"
         +"<li class='tick-icon-magenta'>Transparent notifications between management and employees</li>"
         +"<li class='tick-icon-magenta'>Save time and energy with the Customization of shift patterns</li>"     
        +"</ul>"  
      },
     {
       id:6,
       Title:"How do shift management and shift scheduling software differ?",
       Content:"<p class='mb-3'><strong>Shift Scheduling Software</strong> focuses on creating and organizing shift schedules for the employees. It often includes tools for shift swapping and automated scheduling.</p>"
        +"<p class='mb-3'><strong>Shift management </strong> is a broader term and often integrates real-time updates, edits, on-the-go adjustments, and monitoring of shift-related activities. Shift Management Software helps to schedule shifts but also manage shifts after they're scheduled.</p>"
     },
];

