import {hrDocument as ImagesUrl_hrDocument, } from "../../../../assets/images";

export const SHOW_UNRELEASED = false;

const released = (list) => list.filter((item) => SHOW_UNRELEASED || !item.isNew);

export const DocumentMeta = {
  title: "HR Document Management Software | Policies & Letters | QkrHR",
  description: "Store employee documents, publish policies employees must acknowledge, and generate letters from templates for signature, with every approval recorded.",
};

export const DocumentHeadData = [
  {
    id: 1,
    youTubeVideoUrl: "",
    videoUrl: "",
    imgUrl: ImagesUrl_hrDocument.HrDocumentHeader,
    alt: "QkrHR company documents: policies with acknowledgement progress, a promotion letter signed by the HR Head, and an employee's PAN card verified by HR",
    title: "HR Document Management System",
    subTitle: "Every HR document, signed, current and easy to find",
    desc:"Manage all your HR documents in one place with QkrHR. Easily track policy acknowledgements, generate and send letters for digital signatures, and securely manage employee documents with HR verification and complete document tracking.",
    // desc: "Policies employees acknowledge, letters that fill themselves in and go for signature, and employee files that HR verifies, with a record of who saw what and when.",
    subDesc: "",
    link: "/signup",
    HeadList: []
    // HeadList: [
    //   "Policies with acknowledgement tracking",
    //   "Letters from templates, signed by your signatories",
    //   "Employee documents verified by HR",
    // ],
  },
];

export const DocumentBoxes = [
  {
    id: 1,
    BoxList: [
      {
        id: 1,
        cls: "bg1",
        imgUrls: ImagesUrl_hrDocument.SharedDocuments,
        heads: "Company documents",
        descs: "Policies, handbooks and forms in folders, each shared with exactly the people who should see it.",
      },
      {
        id: 2,
        cls: "bg2",
        imgUrls: ImagesUrl_hrDocument.TeamDocuments,
        heads: "Employee files",
        descs: "PAN, Aadhaar, certificates and past-employer papers, uploaded by employees and verified by HR.",
      },
      {
        id: 3,
        cls: "bg1",
        imgUrls: ImagesUrl_hrDocument.MyDocuments,
        heads: "My documents",
        descs: "Every employee sees their own documents and letters in one place, on the web and in the app.",
      },
    ],
  },
];

/*
 * One section per question an HR team actually asks. The visual is a .webp image
 * (imgUrl + alt): the product card on the shared gradient background.
 */
const AllDocumentSections = [
  {
    id: "policies",
    eyebrow: "Policies & handbooks",
    title: "“We changed the leave policy. Who still needs to sign?”",
    lead: "Publish policies, handbooks and codes of conduct in folders, and choose who sees each one.",
    points: [
      { text: "Turn on <strong>acknowledgement required</strong>. Employees acknowledge from the portal or the app, and you see who has and who hasn't." },
      { text: "For a critical policy, hold portal access until the employee acknowledges it." },
      { text: "<strong>Every version is kept.</strong> Mark a change minor (acknowledgements stand) or material (everyone acknowledges again). You see the headcount before you publish.", isNew: true },
      { text: "People who must acknowledge again get an email that says which version they acknowledged last.", isNew: true },
    ],
    imgUrl: ImagesUrl_hrDocument.policyAckVisual,
    imgWidth: 1272,
    imgHeight: 824,
    alt: "Acknowledgement progress for four company policies, with the employees who have not yet acknowledged the leave policy",
  },
  {
    id: "letters",
    eyebrow: "Letters",
    title: "“I need 40 confirmation letters by Friday.”",
    lead: "",
    points: [
      { text: "Letter templates fill themselves with employee details: name, designation, salary, dates and your own fields." },
      { text: "<strong>Start from ready-made letters</strong> such as appointment, confirmation, experience, relieving and bank letters, then edit them in your own words.", isNew: true },
      { text: "Generate, preview and email letters as PDFs. A copy stays on each employee's profile." },
    ],
    imgUrl: ImagesUrl_hrDocument.letterTemplateVisual,
    imgWidth: 1114,
    imgHeight: 780,
    alt: "A confirmation letter template with employee fields that fill in automatically",
  },
  {
    id: "signing",
    eyebrow: "Signatory approval",
    title: "“The MD has to sign. Can it wait for them?”",
    lead: "",
    points: [
      { text: "A template can carry <strong>up to two signatories</strong>. The letter goes to each in turn, through an <a href='/hrms-software/hr-workflow-management'>approval workflow</a>." },
      { text: "When a signatory approves, their <strong>signature is placed on the letter</strong> where you put it in the template." },
      { text: "A signatory can <strong>send the letter back</strong>. Signatures clear, HR edits and sends it again, and the history is kept.", isNew: true },
    ],
    imgUrl: ImagesUrl_hrDocument.letterSigningVisual,
    imgWidth: 1272,
    imgHeight: 689,
    alt: "A promotion letter signed by the HR Head and waiting for the Managing Director",
  },
  {
    id: "offers",
    eyebrow: "Offer letters",
    title: "“Did the candidate accept?”",
    lead: "",
    points: [
      { text: "Issue offer letters with the <strong>salary structure</strong> built in, without waiting on the accounts team." },
      { text: "Track every offer from issued to joined, with joining dates and recruiters in one list, then carry on into <a href='/hrms-software/employee-onboarding-software'>onboarding</a>." },
      { text: "The candidate gets a secure link to <strong>accept with their typed name, or decline with a reason</strong>. The acceptance is recorded with the time.", isNew: true },
      { text: "The same link continues into pre-boarding, so details and documents arrive before day one.", isNew: true },
    ],
    imgUrl: ImagesUrl_hrDocument.offerLettersVisual,
    imgWidth: 1272,
    imgHeight: 1001,
    alt: "Offer letters list with candidate status, and the salary structure of one offer",
  },
  {
    id: "files",
    eyebrow: "Employee files",
    title: "“Whose PAN copy is missing?”",
    lead: "",
    points: [
      { text: "Set up document types with your own fields, <strong>expiry dates</strong> and mandatory rules." },
      { text: "Employees upload, and HR <strong>verifies or rejects with a remark</strong>." },
      { text: "Upload in bulk, with each file named by employee code." },
      { text: "Choose who sees each document type: the employee, their manager or HR only." },
    ],
    imgUrl: ImagesUrl_hrDocument.employeeFilesVisual,
    imgWidth: 1272,
    imgHeight: 1013,
    alt: "An employee's documents grouped by folder, with verification status for each",
    link: { to: "/hrms-software/employee-management", text: "See employee records" },
  },
  {
    id: "forms",
    eyebrow: "Custom forms",
    title: "“Collect exit interviews from everyone leaving this month.”",
    lead: "",
    points: [
      { text: "Design your own forms and assign them by hand or <strong>automatically by rule</strong>, for example an exit interview 15 days before the last working day." },
      { text: "Link a form to an approval, such as the end-of-probation review, with its own <a href='/hrms-software/hr-workflow-management'>workflow</a>." },
      { text: "See who has filled each form, who has approved it, and how long it has been waiting, alongside your other <a href='/hrms-software/hr-data-analytics'>HR reports</a>." },
      { text: "Employees who haven't submitted get reminders, and their manager is copied after 7 days.", isNew: true },
    ],
    imgUrl: ImagesUrl_hrDocument.customFormsVisual,
    imgWidth: 1272,
    imgHeight: 645,
    alt: "Two assigned forms showing how many employees have filled them and how many are approved",
  },
];

export const DocumentSections = AllDocumentSections.map((section) => ({
  ...section,
  points: released(section.points),
}));

const AllDocumentFAQ = [
  {
    id: 1,
    Title: "What is HR document management in QkrHR?",
    Content: "<p>It keeps every HR document in one place: company policies and handbooks, letters you issue, and each employee's own documents. You decide who can see what, employees acknowledge the policies that need it, and letters go to your signatories for approval before they're issued.</p>",
  },
  {
    id: 2,
    Title: "Can employees acknowledge policies online?",
    Content: "<p>Yes. Mark a document as acknowledgement required, and employees acknowledge it from the portal or the app. HR sees who has acknowledged and who hasn't, and can hold portal access until a critical policy is acknowledged.</p>",
  },
  {
    id: 3,
    Title: "What happens when we update a policy?",
    Content: "<p>You publish a new version and say whether the change is minor or material. A material change asks everyone to acknowledge again. A minor one doesn't. Earlier versions and their acknowledgements stay on record.</p>",
    isNew: true,
  },
  {
    id: 4,
    Title: "How do signatures work on letters?",
    Content: "<p>A letter template can have up to two signatories. The letter goes to each of them in turn, and when a signatory approves, their signature is placed on the letter automatically.</p>",
  },
  {
    id: 5,
    Title: "Which letters can we generate?",
    Content: "<p>Any letter you can write, including appointment, offer, confirmation, increment, promotion, transfer, experience, relieving and bank letters. Employee details such as name, designation, salary and dates fill in automatically.</p>",
  },
  {
    id: 6,
    Title: "Can candidates accept offers online?",
    Content: "<p>Yes. They get a secure link, accept or decline the offer, and continue straight into pre-boarding.</p>",
    isNew: true,
  },
  {
    id: 7,
    Title: "Who can see employee documents?",
    Content: "<p>You decide for each document type: the employee, their manager, HR or specific roles. Access follows the roles and data permissions you set in QkrHR.</p>",
  },
  {
    id: 8,
    Title: "Can employees see their own documents?",
    Content: "<p>Yes. Employees see their documents and letters under My Documents, on the web and in the mobile app, and upload the documents HR asks for through the <a href='/hrms-software/employee-self-service-portal'>self-service portal</a>.</p>",
  },
  {
    id: 9,
    Title: "Can we track document expiry dates?",
    Content: "<p>Yes. Add an expiry date to any document type, such as a passport or driving licence, and it is recorded with each employee's upload.</p>",
  },
  {
    id: 10,
    Title: "Can QkrHR handle both company and employee documents?",
    Content: "<p>Yes. Company documents such as policies and handbooks sit in shared folders, and employee-specific documents such as contracts and certificates sit on each employee's record.</p>",
  },
];

export const DocumentCtaData = [
  {
    id: 1,
    title: "Bring one policy and one letter to the demo.",
    description: "We'll set them up live, versioned and ready to sign, in under 30 minutes.",
    buttons: [
      {
        id: 1,
        label: "Book a Free Demo",
        url: "/signup",
        type: "cta-btn-magenta"
      },
      {
        id: 2,
        label: "Book a walkthrough",
        url: "/contact",
        type: "cta-btn-outline"
      },
    ]
  }
];

export const DocumentFAQ = released(AllDocumentFAQ);
