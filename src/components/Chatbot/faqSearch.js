// Lightweight keyword search over the site's FAQ entries — no AI, no network.
// Questions are matched mostly on the FAQ title, with the answer text as a
// weaker signal, and FAQs from the page the visitor is on get a boost.

const STOP_WORDS = new Set(
  ("a an and are as at be by can could do does did for from has have how i if in into is it its me my of on or our " +
    "should so than that the their them then there these they this to us was we what when where which who why will " +
    "with would you your yours qkrhr qkrbiz qkrpayroll qkrvisit software system tool app please tell know want need about different difference")
    .split(" ")
);

// Map common variants onto one word so "cost", "pricing" and "charges" all match "price".
const SYNONYMS = {
  pricing: "price", cost: "price", costs: "price", charge: "price", charges: "price", fee: "price", fees: "price",
  plan: "price", plans: "price", subscription: "price", rate: "price", rates: "price",
  salary: "payroll", salaries: "payroll", wage: "payroll", wages: "payroll", payslip: "payroll", payslips: "payroll",
  punch: "attendance", checkin: "attendance", biometric: "biometric", fingerprint: "biometric", face: "biometric",
  gps: "location", geo: "location", geofence: "geofencing", geofencing: "geofencing", track: "tracking",
  holiday: "leave", holidays: "leave", vacation: "leave", leaves: "leave",
  roster: "shift", rosters: "shift", shifts: "shift",
  claim: "expense", claims: "expense", reimbursement: "expense", reimbursements: "expense", expenses: "expense",
  staff: "employee", employees: "employee", workforce: "employee", worker: "employee", workers: "employee",
  pf: "pf", epf: "pf", esic: "esi", tds: "tds", compliance: "compliance", statutory: "compliance",
  implement: "setup", implementation: "setup", onboard: "setup", install: "setup", configure: "setup",
  mobile: "mobile", android: "mobile", ios: "mobile", phone: "mobile",
};

const stem = (word) => {
  if (word.length > 5 && word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.length > 5 && word.endsWith("ing")) return word.slice(0, -3);
  if (word.length > 4 && word.endsWith("ed")) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
};

export const htmlToText = (html = "") =>
  String(html)
    .replace(/<\/?(a|span|strong|b|em|i)\b[^>]*>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();

export const tokenize = (text = "") =>
  [
    ...new Set(
      String(text)
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((w) => w && !STOP_WORDS.has(w))
        .map((w) => SYNONYMS[w] || stem(w))
    ),
  ];

const indexCache = new WeakMap();

const indexEntry = (entry) => {
  let idx = indexCache.get(entry);
  if (!idx) {
    idx = {
      titleTokens: new Set(tokenize(entry.title)),
      bodyTokens: new Set(tokenize(htmlToText(entry.html))),
    };
    indexCache.set(entry, idx);
  }
  return idx;
};

const sectionOf = (path) => path.split("/").filter(Boolean)[0] || "";

/**
 * @param {Array} entries  from loadKnowledge()
 * @param {string} query   what the visitor typed
 * @param {string} path    current location.pathname, for the page boost
 * @returns {Array<{entry, score}>} best first, duplicates (same title) removed
 */
export const searchFaqs = (entries, query, path = "/", limit = 3) => {
  const q = tokenize(query);
  if (!q.length) return [];
  const cleanPath = path.replace(/\/+$/, "") || "/";
  const section = sectionOf(cleanPath);

  const scored = [];
  for (const entry of entries) {
    if (entry.scope === "page" && entry.url !== cleanPath) continue;
    const { titleTokens, bodyTokens } = indexEntry(entry);

    let titleHits = 0;
    let bodyHits = 0;
    for (const t of q) {
      if (titleTokens.has(t)) titleHits++;
      else if (bodyTokens.has(t)) bodyHits++;
    }
    if (!titleHits && bodyHits < 2) continue;

    // Share of the visitor's words found, weighted towards the title, plus a
    // small bonus for titles that are mostly made of the visitor's words.
    let score = (titleHits * 3 + bodyHits) / q.length + (titleHits / Math.max(titleTokens.size, 1)) * 0.5;
    if (entry.url === cleanPath) score *= 1.3;
    else if (section && sectionOf(entry.url) === section) score *= 1.1;
    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  const seen = new Set();
  const results = [];
  for (const item of scored) {
    const key = item.entry.title.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(item);
    if (results.length === limit) break;
  }
  return results;
};

// Below this the best match is more likely noise than an answer.
export const MIN_ANSWER_SCORE = 1.2;
