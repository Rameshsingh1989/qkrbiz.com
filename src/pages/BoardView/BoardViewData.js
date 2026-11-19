import { BoardView as ImagesUrl_BoardView } from "../../assets/images";

export const BoardViewMeta = {
  title: "Board View for Task Management | Qkrbiz",
  description: "Manage tasks visually with Qkrbiz Board View. Get a Kanban-style overview of your team's work in one place.",
};

export const BoardHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_BoardView.boardHero,
    alt: "An Employee Transitions board with three columns: probation ending in 30 days, confirmation due, and settlement in progress, each with employee cards",
    title: "Boards",
    subTitle: "See where every record sits, stage by stage.",
    desc: "Probation reviews, settlements, tasks and tickets laid out in columns. Records move to the right column on their own as their details change.",
    subDesc: "",
    link: "/signup",
    HeadList: [],
  },
];

// ── How a board works ─────────────────────────────────────────────────
export const BoardHowData = {
  eyebrow: "How a board works",
  title: "Columns are rules, cards are records.",
  lead: "<span>Pick what the board is about, then say what each column holds. The records sort themselves.</span>",
  apps: [
    { id: 1, product: "Columns", title: "Each column is a filter", desc: "A column shows the records that meet its rules, so nobody moves cards by hand." },
    { id: 2, product: "Cards", title: "Only the fields that matter", desc: "Build the card from blocks and show the three things people need to see." },
    { id: 3, product: "Actions", title: "Work from the card", desc: "Every card has the same actions as its list, so the board is a place to act, not just look." },
  ],
};

// ── Question-led sections ─────────────────────────────────────────────
export const BoardSections = [
  {
    id: "columns",
    eyebrow: "Columns",
    title: "“Who's in the last month of probation?”",
    imgUrl: ImagesUrl_BoardView.boardColumns,
    imgWidth: 1152,
    imgHeight: 748,
    alt: "Editing a board column called Probation ends in 30 days: two rules, an amber top colour, and cards sorted by probation end date",
    points: [
      "Give each column <strong>filter rules</strong> on the record: status, dates, department and other fields.",
      "Records <strong>land in the right column on their own</strong> as their details change.",
      "Give each column a <strong>colour</strong>, and set how its cards are sorted.",
    ],
  },
  {
    id: "cards",
    eyebrow: "Card builder",
    title: "“Show me the three things I need, not twenty.”",
    imgUrl: ImagesUrl_BoardView.boardCardBuilder,
    imgWidth: 1152,
    imgHeight: 614,
    alt: "The card builder: a palette of blocks on the left and a live preview of an employee card on the right",
    points: [
      "<strong>Drag blocks together</strong>: fields, labels and icons. No HTML.",
      "See <strong>the real card</strong> as you build it.",
      "The same builder sets up <strong>card views</strong> on lists elsewhere in the app.",
    ],
  },
  {
    id: "act",
    eyebrow: "Act from the board",
    title: "“Can I just do it from here?”",
    imgUrl: ImagesUrl_BoardView.boardActions,
    imgWidth: 1152,
    imgHeight: 698,
    alt: "A task card with its action menu open: Update Status, Priority, Reassign, Attachments, History and Cancel",
    points: [
      "Open a card's <strong>action menu</strong> for the same actions you'd find on its list.",
      "On a <strong>task board</strong>, drop a card on another status column and the status update opens. The card moves once you save.",
      "Use <strong>saved filters</strong>, or build your own from conditions and save it for next time.",
    ],
  },
  {
    id: "share",
    eyebrow: "Share a board",
    title: "“The whole team should work from my board.”",
    imgUrl: ImagesUrl_BoardView.boardSharing,
    imgWidth: 1152,
    imgHeight: 506,
    alt: "My Boards list: two of my own boards, one shared with six people, and a board shared by Neha Iyer with a Clone to My Boards action",
    points: [
      "<strong>Share</strong> a board with the people you pick. They see it live, as you change it.",
      "<strong>Only you can change</strong> a board you shared.",
      "Anyone it's shared with can <strong>Clone to My Boards</strong> and make their own version.",
    ],
  },
];

// ── Ready in the apps ─────────────────────────────────────────────────
export const BoardReadyData = {
  eyebrow: "Ready in the apps",
  title: "Some boards come built in.",
  items: [
    { id: 1, title: "QkrTasks", desc: "Task board where dropping a card updates its status" },
    { id: 2, title: "QkrDesk", desc: "Ticket board by status" },
    { id: 3, title: "QkrHR", desc: "Pre-boarding pipeline from offer to joining" },
  ],
  band: {
    text: "Need a board you don't see? Our team sets it up for you, without a software change.",
    link: { to: "/signup", text: "Ask for a board →" },
  },
};

export const BoardFAQ = [
  {
    id: 1,
    Title: "Do we move cards between columns by hand?",
    Content: "No. Each column shows the records that meet its rules, so a record changes column when its details change. On task boards you can also drop a card on a status column to update it.",
  },
  {
    id: 2,
    Title: "What can a board show?",
    Content: "Records from the form you pick when you create it, such as employees, tasks or tickets. That choice stays fixed; clone the board to start one for something else.",
  },
  {
    id: 3,
    Title: "Do we need to know HTML to design cards?",
    Content: "No. Cards are built by dragging blocks, with a live preview. HTML is there only for the rare case that needs it.",
  },
  {
    id: 4,
    Title: "Can others change a board I share?",
    Content: "No. Only the owner changes a shared board. Others can clone it and change their copy.",
  },
  {
    id: 5,
    Title: "Are saved filters private?",
    Content: "A filter saved on a shared board is visible to everyone who can see that board.",
  },
  {
    id: 6,
    Title: "Can we have more than one board?",
    Content: "Yes, as many as you need, with one set as your default.",
  },
];

export const BoardCtaData = [
  {
    id: 1,
    title: "Bring the process you track on a whiteboard.",
    description: "We'll set it up as a board in the demo, with your own stages.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
