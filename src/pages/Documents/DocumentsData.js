import { Document as ImagesUrl_Document, video as ImagesUrl_video } from "../../assets/images";

export const DocumentsMeta = {
  title: "Secure Cloud Document Management System | Qkrbiz",
  description: "Manage, store, and access all your business documents securely with Qkrbiz Document Management system.",
};

// /documents hero
export const DocumentsHeadData = [
  {  
      id:1,
      youTubeVideoUrl: "",
      videoUrl: ImagesUrl_video.DocumentsHeader,
      imgUrl: ImagesUrl_Document.HocumentManagmentHeader,
      alt:"Qkrbiz document management with files attached to records",
      title: "Document Management",
      subTitle:"Every file stays with the record it belongs to, in every app.",
      desc:"Bills on expense claims, papers on tender deposits, proofs on leave requests. Attach them once, open them in place, and see what is missing before it costs you.",
      subDesc:"",
      link:"/signup",
      HeadList:[]
  }
];

// DocData and DocSectionData are used by the QkrSales pages
// (module/Sales/SalesHome and module/Sales/Feauters/DocumentManagement).
  export const DocData = [
    {
      id:1,
      videoUrl:ImagesUrl_video.DocumentsHeader,
      imgUrl:ImagesUrl_Document.HocumentManagmentHeader,
      title:"Document Management",
      description:"Qkrbiz provides a comprehensive document management system that streamlines your document storage and sharing processes. Say goodbye to physical paper movement and easily attach all necessary documents to any form or approval request. With centralized access to all documents created during any process, find the documents you need in just seconds.",
      urls:"/signup",
      BoxList: [
          {
            id:1,
            cls:"bg1",
            imgUrls:ImagesUrl_Document.SharedDocuments,
            heads:"Shared Documents",
            descs:"Easily share company policies and frequently used documents with your employees through folders with granular access control.",
          },
          {
            id:2,
            cls:"bg2",
            imgUrls:ImagesUrl_Document.TeamDocuments,
            heads:"Team Documents",
            descs:"Efficiently share and access documents within your team, without the hassle of configuring access control manually."
          },
          {
            id:3,
            cls:"bg1",
            imgUrls:ImagesUrl_Document.MyDocuments,
            heads:"My Documents",
            descs:"Upload and store personal documents for quick access when needed."
          },
        ]
    },
  ];
  export const DocSectionData = [
    {
      id:1,
      cls1:"col-lg-5",
      cls2:"col-lg-7",
      span: "GENERATE LETTERS",
      imgUrls:ImagesUrl_Document.CreateLetter,
      imgUrls_1:"",
      heads:"Create Letters From Custom <span class='text-magenta'>Defined Templates</span>",
      descs:"With Qkrbiz, you can generate all types of letters digitally such as customer payment reminders, bank requests & employee letters and send them through the system."
    },
    {
      id:2,
      cls1:"col-lg-5 order-m-0",
      cls2:"col-lg-5 mt-1-xs order-m-1",
      span: "CENTRALIZE ACCESS",
      imgUrls:ImagesUrl_Document.AllDocument,
      imgUrls_1:ImagesUrl_Document.AccessDocuments,
      heads:"Access <span class='text-magenta'> All Documents at One Place</span>",
      descs:"Connect documents to transactions at each stage of progress and access them all centrally at any time. With its powerful search and filtering options, you can quickly find the documents you need in just seconds."
    },
  ]

// ── Across qkrbiz ─────────────────────────────────────────────────────
export const DocAppsData = {
  eyebrow: "Across qkrbiz",
  title: "The file is on the record, not in someone's inbox.",
  lead: "<span>Whoever opens the request sees its papers, without asking for them.</span>",
  apps: [
    {
      id: 1,
      product: "QkrHR",
      title: "People",
      chips: ["Employee files", "Company policies", "Letters", "Leave and WFH proofs", "Comp-off proofs", "Exit papers"],
      link: { to: "/hrms-software/hr-document-management-system", text: "HR documents in detail →" },
    },
    { id: 2, product: "QkrExpense", title: "Money out", chips: ["Bills on claims", "Trip documents", "Booking tickets"] },
    { id: 3, product: "QkrTenders", title: "Bids and deposits", chips: ["Deposit papers", "Supporting documents", "Bid status files", "Fee receipts"] },
    { id: 4, product: "QkrSales", title: "Collections", chips: ["Payment proofs on collections"] },
    { id: 5, product: "QkrDesk", title: "Tickets", chips: ["Screenshots and files on tickets"] },
    { id: 6, product: "QkrTasks · QkrProjects", title: "Work", chips: ["Task attachments", "Project documents"] },
  ],
};

// ── Question-led sections ─────────────────────────────────────────────
export const DocSections = [
  {
    id: "viewer",
    eyebrow: "Open in place",
    title: "“Five bills to check, and every one opens a new tab.”",
    imgUrl: ImagesUrl_Document.openInPlace,
    imgWidth: 1152,
    imgHeight: 716,
    alt: "Attachments on a deposit request: a PDF, a photo, a Word file and a spreadsheet, each opening beside the page",
    points: [
      "A file opens <strong>beside the page</strong> on a computer, and full screen on a phone.",
      "<strong>PDFs, photos, Word and Excel</strong> files show without downloading them first.",
      "Close it and you are <strong>exactly where you were</strong>, with anything you typed still there.",
      "Download it, or open it in the browser, when you need the file itself.",
    ],
  },
  {
    id: "read",
    eyebrow: "Read from the card",
    title: "“Can't it read the PAN number itself?”",
    imgUrl: ImagesUrl_Document.readFromCard,
    imgWidth: 1152,
    imgHeight: 766,
    alt: "Uploading a PAN card: the PAN number, name and date of birth read from the image and filled in, to check before sending",
    points: [
      "When a candidate or employee uploads a <strong>PAN card, Aadhaar card or cancelled cheque</strong>, the details are read from the image and filled in.",
      "They <strong>check and correct</strong> what was read before sending.",
      "HR sees where a typed value <strong>differs from the card</strong>.",
      "The reading happens <strong>in the browser</strong>, so the image isn't sent to an outside service to be read.",
    ],
  },
  {
    id: "gaps",
    eyebrow: "Documents dashboard",
    title: "“What's missing, and in which office?”",
    imgUrl: ImagesUrl_Document.documentsDashboard,
    imgWidth: 1152,
    imgHeight: 724,
    alt: "Documents dashboard with sign-offs due, missing, to verify, rejected and expiring documents, and a table by department",
    points: [
      "One screen that shows <strong>only the gaps</strong>: sign-offs still due, and employee documents missing, waiting to be checked, rejected or about to expire.",
      "Split by <strong>legal entity, location and department</strong>.",
      "Every number <strong>opens the list where it gets fixed</strong>, already filtered.",
      "Counts follow your own access, so each admin sees their own part.",
    ],
  },
  {
    id: "numbering",
    eyebrow: "Form numbering",
    title: "“Each company in our group numbers its orders its own way.”",
    imgUrl: ImagesUrl_Document.formNumbering,
    imgWidth: 1152,
    imgHeight: 604,
    alt: "Form number series for each legal entity, with prefix and next number, and a note on forms with no series",
    points: [
      "Give each form a <strong>number series</strong>: a prefix and a running number, or a date-wise number.",
      "Keep a series to <strong>one legal entity</strong>, or share it across the group.",
      "Mark one series as the <strong>default</strong>, and switch old ones off without losing them.",
      "A check lists the <strong>forms that have no series yet</strong>, before anyone needs a number.",
    ],
  },
];

// ── Built in ──────────────────────────────────────────────────────────
export const DocSafeData = {
  eyebrow: "Built in",
  title: "Files follow the same rules as the records they sit on.",
  items: [
    { id: 1, title: "Opens only for the right people", desc: "A file opens for people who can open the record it belongs to, and for no one else." },
    { id: 2, title: "Old versions kept", desc: "Replace a company document and the earlier version stays on record, with the date it changed." },
    { id: 3, title: "Your number, every time", desc: "Numbers come from the series, so two orders never share one." },
  ],
};

export const DocumentsFAQ = [
  {
    id: 1,
    Title: "Which file types open without downloading?",
    Content: "PDFs, photos, Word documents, Excel sheets and text files open in the side viewer. Anything else can be downloaded.",
  },
  {
    id: 2,
    Title: "Does it work on the phone?",
    Content: "Yes. On a phone the viewer opens full screen, and closing it takes you back to the request.",
  },
  {
    id: 3,
    Title: "Which cards can it read?",
    Content: "PAN cards, Aadhaar cards and cancelled cheques or passbooks. The person always checks the values before sending.",
  },
  {
    id: 4,
    Title: "Who can open an attached file?",
    Content: "The people who can open the record it is attached to.",
  },
  {
    id: 5,
    Title: "Can each legal entity have its own numbers?",
    Content: "Yes. Create a series for each legal entity, or one series that every entity shares.",
  },
  {
    id: 6,
    Title: "Where are policies, letters and employee files covered?",
    Content: "On the <a href='/hrms-software/hr-document-management-system'>HR document management</a> page, with acknowledgements, signatures and verification.",
  },
];

export const DocumentsCtaData = [
  {
    id: 1,
    title: "Bring a claim with its bills.",
    description: "We'll show you how it is checked in the demo, without opening a single new tab.",
    buttons: [
      { id: 1, label: "Book a Free Demo", url: "/signup", type: "cta-btn-magenta" },
      { id: 2, label: "Book a walkthrough", url: "/contact", type: "cta-btn-outline" },
    ],
  },
];
