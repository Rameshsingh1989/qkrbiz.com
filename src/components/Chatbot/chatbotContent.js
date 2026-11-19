// Fixed copy for the chatbot's guided flows. Prices and contacts here mirror the
// pricing page and the site's JSON-LD — update them together.

export const BOT_NAME = "Qkrbiz Assistant";

export const CONTACT = {
  phone: "+91 7428174445",
  phoneHref: "tel:+917428174445",
  email: "sales@qkrbiz.com",
};

export const GREETING = [
  "Hi there 👋 I'm the Qkrbiz Assistant.",
  "I can answer questions about QkrHR, payroll, attendance and field force tracking, share pricing, or set up a free demo. What would you like to do?",
];

export const TEASER = "👋 Hi! Looking for HR or payroll software? I can help.";

// Quick-reply buttons. `action` is handled in ChatbotPanel's runAction(); `icon`
// is a key into CHIP_ICONS there (kept as a string so chips survive sessionStorage).
export const CHIPS = {
  demo: { label: "Book a free demo", action: "demo", icon: "demo" },
  pricing: { label: "Pricing", action: "pricing", icon: "pricing" },
  products: { label: "Explore products", action: "products", icon: "products" },
  ask: { label: "Ask a question", action: "ask", icon: "ask" },
  sales: { label: "Talk to sales", action: "sales", icon: "sales" },
  menu: { label: "Main menu", action: "menu", icon: "menu" },
};

export const MAIN_MENU = [CHIPS.demo, CHIPS.pricing, CHIPS.products, CHIPS.ask, CHIPS.sales];

export const PRICING = {
  intro: "QkrHR pricing is based on your team size. Statutory compliance (PF, ESI, PT, TDS) is included in every plan.",
  plans: [
    { name: "Essential", price: "₹3,000/month", detail: "Up to 50 users, then ₹40 per additional user per month." },
    { name: "Foundation", price: "₹5,000/month", detail: "Up to 50 users, then ₹80 per additional user per month. Adds WFH attendance, geo-tagged mobile punch and more." },
    { name: "Growth", price: "Custom quote", detail: "For multi-entity and multi-site organisations." },
  ],
  url: "/hrms-software/qkrhr-pricing",
};

export const PRODUCTS = [
  { name: "QkrHR – HRMS", text: "Core HR, employee database, ESS portal, documents and onboarding.", url: "/hrms-software" },
  { name: "QkrPayroll", text: "Automated payroll with PF, ESI, PT, TDS and LWF compliance.", url: "/payroll-software" },
  { name: "QkrVisit – Field Force", text: "Live location tracking, geo-fenced attendance and field visit reports.", url: "/field-force-management-software" },
  { name: "Leave & Attendance", text: "Biometric, mobile and GPS attendance, leave policies and shift rosters.", url: "/hrms-software/leave-and-attendance-management" },
  { name: "Expense Management", text: "Mobile expense claims, multi-level approvals and reimbursements.", url: "/hrms-software/employee-expense-management" },
  { name: "Employee Engagement", text: "Announcements, praise, feedback and polls.", url: "/hrms-software/employee-engagement" },
];

export const EMPLOYEE_RANGES = ["1-50", "51-100", "101-200", "201-500", "501-1000", "1000+"];

export const NO_MATCH = "I couldn't find an answer to that in our help content. Our team can answer it for you — would you like to book a free demo or talk to sales?";

// Messages that should jump straight to a flow instead of searching FAQs.
// Keep these to explicit requests — a word like "human" alone also appears in
// questions ("best Human Resource software"), and an exact FAQ question always
// wins over these (see ChatbotPanel's ask()).
export const INTENTS = [
  { action: "demo", test: /\b(demo|trial|try it|free trial|call ?back|call me|contact me|get in touch)\b/i },
  {
    action: "sales",
    test: /\b((talk|speak|chat|connect)\s+(me\s+)?(to|with)\s+(a |an |the |your )?(human|person|someone|agent|representative|sales|team|expert)|sales ?team|real person|phone number|contact number|mobile number|email id|email address)\b/i,
  },
  { action: "pricing", test: /^\s*(price|prices|pricing|plans?|cost|how much)\s*\??\s*$/i },
  { action: "greet", test: /^\s*(hi+|hello+|hey+|hii+|namaste|good (morning|afternoon|evening))\b[\s!.]*$/i },
  { action: "thanks", test: /^\s*(thanks|thank you|thx|ok(ay)?|great|cool|got it)\b[\s!.]*$/i },
];
