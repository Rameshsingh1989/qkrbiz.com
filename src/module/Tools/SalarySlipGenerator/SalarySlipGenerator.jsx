import { cloneElement, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { amountInWords } from "./Amountinwords";
import { calculateEsi, calculatePf } from "./Payrollrules"; // PF and ESI rules live here
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import "./SalarySlipGenerator.scss";

const SalarySlipGeneratorMeta = {
  title: "Salary Slip Generator | Create Payslips Online Free | Qkrbiz",
  description: "Use Qkrbiz's free salary slip generator to create a payslip with earnings, PF, ESI and TDS deductions, then view and download it in minutes.",
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const inrShort = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

// All money is kept in paise (whole numbers) so totals never get rounding errors
const toPaise = (value) => Math.max(0, Math.round((parseFloat(value) || 0) * 100));
const formatPaise = (paise) => inr.format(paise / 100);

function formatDate(value) {
  if (!value) return "";
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

const EMPTY_COMPANY = { 
  name: "", 
  address: "" 
};

const EMPTY_EMPLOYEE = {
  name: "",
  code: "", 
  designation: "",
  department: "", 
  joined: "",
  pan: "", 
  uan: "", 
  bank: "", 
  paidDays: "", 
  lopDays: "",
};

const START_EARNINGS = [
  { id: "basic", label: "Basic Salary", amount: "25000", locked: true },
  { id: "da", label: "Dearness Allowance (DA)", amount: "", locked: true }, // counts towards PF wages
  { id: "hra", label: "House Rent Allowance", amount: "10000" },
  { id: "conveyance", label: "Conveyance Allowance", amount: "1600" },
  { id: "special", label: "Special Allowance", amount: "8400" },
];

const START_DEDUCTIONS = [
  { id: "pf", label: "Provident Fund (PF)", amount: "", rule: "pf", auto: true },
  { id: "esi", label: "Employee State Insurance (ESI)", amount: "", rule: "esi", auto: true },
  { id: "pt", label: "Professional Tax", amount: "" },
  { id: "tds", label: "Income Tax (TDS)", amount: "" },
];

let rowCount = 0;
const newRow = () => ({ id: `row-${++rowCount}`, label: "", amount: "" });

export default function SalarySlipGenerator({
  footerNote = "This is a computer-generated payslip and does not require a signature.",
}) {
  const periodLabelId = useId();
  const viewTitleId = useId();
  const sheetId = useId();
  const rootRef = useRef(null);
  const formTitleRef = useRef(null);
  const viewTitleRef = useRef(null);

  const [step, setStep] = useState("form"); // "form" → "view"
  const [triedView, setTriedView] = useState(false);
  const [downloadState, setDownloadState] = useState("idle"); // "idle" | "working" | "error"

  const [company, setCompany] = useState(EMPTY_COMPANY);
  const [period, setPeriod] = useState(() => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  });
  const [employee, setEmployee] = useState(EMPTY_EMPLOYEE);
  const [earnings, setEarnings] = useState(START_EARNINGS);
  const [deductions, setDeductions] = useState(START_DEDUCTIONS);
  const [logo, setLogo] = useState("");
  const [printReady, setPrintReady] = useState(false);

  // While this tool is on screen, printing shows only the payslip on a clean A4 page
  useEffect(() => {
    const pageStyle = document.createElement("style");
    pageStyle.textContent = "@page { size: A4; margin: 0; }";
    document.head.appendChild(pageStyle);
    document.body.classList.add("ssg-print-scope");
    setPrintReady(true);
    return () => {
      pageStyle.remove();
      document.body.classList.remove("ssg-print-scope");
    };
  }, []);

  // Free the uploaded logo from memory when it's replaced or the page closes
  useEffect(() => () => logo && URL.revokeObjectURL(logo), [logo]);

  /* ---------- Totals ---------- */
  const earningRows = earnings.map((r) => ({ id: r.id, label: r.label, paise: toPaise(r.amount) }));
  const grossPaise = earningRows.reduce((sum, r) => sum + r.paise, 0);
  const paiseOf = (id) => earningRows.find((r) => r.id === id)?.paise ?? 0;
  // PF depends on the pay month (new rules from Nov 2025 and Sep 2026), see payrollRules.js
  const pf = calculatePf({
    basicPaise: paiseOf("basic"),
    daPaise: paiseOf("da"),
    grossPaise,
    year: period.year,
    month: period.month,
  });
  const esi = calculateEsi(grossPaise);

  const autoPaise = (rule) => (rule === "pf" ? pf.pfPaise : rule === "esi" ? esi.esiPaise : 0);
  const autoHint = (rule) => {
    if (rule === "pf") {
      const wages = pf.halfOfGrossRule ? "Basic + DA or half of gross pay, whichever is more" : "Basic + DA";
      return `12% of ${inrShort.format(pf.basePaise / 100)} (PF wages: ${wages}, up to ${inrShort.format(pf.ceiling)})`;
    }
    return esi.applies || grossPaise === 0
      ? "0.75% of gross pay"
      : "Not applicable: gross pay is above ₹21,000";
  };

  const deductionRows = deductions.map((r) => ({
    id: r.id,
    label: r.label,
    paise: r.auto ? autoPaise(r.rule) : toPaise(r.amount),
  }));
  const deductionPaise = deductionRows.reduce((sum, r) => sum + r.paise, 0);
  const totals = { gross: grossPaise, deductions: deductionPaise, net: grossPaise - deductionPaise };
  const periodLabel = `${MONTHS[period.month]} ${period.year}`;
  const fileName = ["Payslip", employee.name.trim(), periodLabel].filter(Boolean).join(" ").replace(/\s+/g, "-");

  /* ---------- Checks before showing the payslip ---------- */
  const problems = {
    companyName: !company.name.trim() && "Enter the company name",
    employeeName: !employee.name.trim() && "Enter the employee name",
    earnings: grossPaise === 0 && "Enter at least one earning amount",
  };
  const errors = triedView ? problems : {};
  const isComplete = !Object.values(problems).some(Boolean);

  /* ---------- Handlers ---------- */
  const setCompanyField = (key) => (e) => setCompany((c) => ({ ...c, [key]: e.target.value }));
  const setEmployeeField = (key, transform = (v) => v) => (e) =>
    setEmployee((p) => ({ ...p, [key]: transform(e.target.value) }));

  const rowActions = (setRows) => ({
    update: (id, patch) => setRows((rows) => rows.map((r) => (r.id === id ? { ...r, ...patch } : r))),
    remove: (id) => setRows((rows) => rows.filter((r) => r.id !== id)),
    add: () => setRows((rows) => [...rows, newRow()]),
  });
  const earningActions = rowActions(setEarnings);
  const deductionActions = rowActions(setDeductions);

  const handleLogo = (e) => {
    const file = e.target.files?.[0];
    if (file) setLogo(URL.createObjectURL(file));
    e.target.value = ""; // lets the same file be chosen again
  };

  const clearForm = () => {
    setCompany(EMPTY_COMPANY);
    setEmployee(EMPTY_EMPLOYEE);
    setEarnings(START_EARNINGS.map((r) => ({ ...r, amount: "" })));
    setDeductions(START_DEDUCTIONS.map((r) => ({ ...r, amount: "" })));
    setLogo("");
    setTriedView(false);
  };

  // Switch step, scroll to the top of the tool and move keyboard focus to the new heading
  const goTo = (nextStep) => {
    setStep(nextStep);
    setDownloadState("idle");
    requestAnimationFrame(() => {
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      (nextStep === "view" ? viewTitleRef : formTitleRef).current?.focus({ preventScroll: true });
    });
  };

  const handleView = (e) => {
    e.preventDefault();
    setTriedView(true);
    if (!isComplete) {
      requestAnimationFrame(() => rootRef.current?.querySelector('[aria-invalid="true"]')?.focus());
      return;
    }
    goTo("view");
  };

  // Direct download. The two PDF libraries load only when this button is clicked,
  // so they don't slow down the page.
  const handleDownload = async () => {
    const sheet = document.getElementById(sheetId);
    if (!sheet || downloadState === "working") return;
    setDownloadState("working");
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")]);
      const canvas = await html2canvas(sheet.firstElementChild, {
        scale: 2,
        backgroundColor: "#ffffff",
        windowWidth: 1280, // always the full-width layout, even on phones
        onclone: (doc) => doc.getElementById(sheetId)?.firstElementChild?.classList.add("ssg-slip-pdf"),
      });
      const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
      const margin = 12;
      let width = 210 - margin * 2;
      let height = (canvas.height * width) / canvas.width;
      if (height > 297 - margin * 2) {
        height = 297 - margin * 2;
        width = (canvas.width * height) / canvas.height;
      }
      pdf.addImage(canvas, "PNG", (210 - width) / 2, margin, width, height, undefined, "FAST");
      pdf.save(`${fileName}.pdf`);
      setDownloadState("idle");
    } catch (error) {
      console.error("Payslip PDF failed:", error);
      setDownloadState("error");
    }
  };

  // Browser print. The page title becomes the file name if someone saves it as PDF.
  const handlePrint = () => {
    const pageTitle = document.title;
    document.title = fileName;
    window.addEventListener("afterprint", () => { document.title = pageTitle; }, { once: true });
    window.print();
  };

  const thisYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => thisYear - 5 + i);

  const slip = (
    <Payslip
      company={company}
      logo={logo}
      periodLabel={periodLabel}
      employee={employee}
      earnings={earningRows}
      deductions={deductionRows}
      totals={totals}
      footerNote={footerNote}
    />
  );

  return (
    <div className="container mt-5">
      <RouteSpecificMeta
        title={SalarySlipGeneratorMeta.title}
        description={SalarySlipGeneratorMeta.description}
      />
      <h1 className="text-center mb-4">Salary Slip Generator</h1>
      <div className="ssg" ref={rootRef}>
        <ol className="ssg-steps">
          <li className={step === "form" ? "is-active" : "is-done"} aria-current={step === "form" ? "step" : undefined}>
            <span aria-hidden="true">1</span> Enter details
          </li>
          <li className={step === "view" ? "is-active" : ""} aria-current={step === "view" ? "step" : undefined}>
            <span aria-hidden="true">2</span> View &amp; download
          </li>
        </ol>

        {step === "form" ? (
          <form className="ssg-form" onSubmit={handleView} noValidate>
            <h2 className="ssg-visually-hidden" ref={formTitleRef} tabIndex={-1}>Enter payslip details</h2>

            <fieldset className="ssg-card">
              <legend className="ssg-legend">Company details</legend>
              <div className="ssg-grid">
                <Field label="Company name" span="2" error={errors.companyName}>
                  <input className="ssg-input" value={company.name} onChange={setCompanyField("name")}
                    placeholder="e.g. Sharma Textiles Pvt. Ltd." autoComplete="organization" />
                </Field>
                <div className="ssg-field" role="group" aria-labelledby={periodLabelId}>
                  <span className="ssg-label" id={periodLabelId}>Pay period</span>
                  <div className="ssg-pair">
                    <select className="ssg-input" aria-label="Month" value={period.month}
                      onChange={(e) => setPeriod((p) => ({ ...p, month: Number(e.target.value) }))}>
                      {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
                    </select>
                    <select className="ssg-input" aria-label="Year" value={period.year}
                      onChange={(e) => setPeriod((p) => ({ ...p, year: Number(e.target.value) }))}>
                      {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div className="ssg-field">
                  <span className="ssg-label">Company logo <em>(optional)</em></span>
                  <div className="ssg-logo-row">
                    {logo && <img loading="lazy" className="ssg-logo-thumb" src={logo} alt="Uploaded logo" />}
                    <label className="ssg-btn ssg-btn-ghost ssg-btn-sm ssg-upload">
                      {logo ? "Change" : "Upload logo"}
                      <input type="file" accept="image/*" className="ssg-visually-hidden" onChange={handleLogo} />
                    </label>
                    {logo && <button type="button" className="ssg-link" onClick={() => setLogo("")}>Remove</button>}
                  </div>
                </div>
                <Field label="Company address" span="full">
                  <textarea className="ssg-input" rows={2} value={company.address} onChange={setCompanyField("address")}
                    placeholder="Street, city, state, PIN" />
                </Field>
              </div>
            </fieldset>

            <fieldset className="ssg-card">
              <legend className="ssg-legend">Employee details</legend>
              <div className="ssg-grid">
                <Field label="Employee name" error={errors.employeeName}>
                  <input className="ssg-input" value={employee.name} onChange={setEmployeeField("name")}
                    placeholder="e.g. Rahul Sharma" />
                </Field>
                <Field label="Employee ID">
                  <input className="ssg-input" value={employee.code} onChange={setEmployeeField("code")} placeholder="e.g. EMP001" />
                </Field>
                <Field label="Designation">
                  <input className="ssg-input" value={employee.designation} onChange={setEmployeeField("designation")} placeholder="e.g. Machine Operator" />
                </Field>
                <Field label="Department">
                  <input className="ssg-input" value={employee.department} onChange={setEmployeeField("department")} placeholder="e.g. Production" />
                </Field>
                <Field label="Date of joining">
                  <input className="ssg-input" type="date" value={employee.joined} onChange={setEmployeeField("joined")} />
                </Field>
                <Field label="PAN">
                  <input className="ssg-input" value={employee.pan} maxLength={10} autoCapitalize="characters"
                    onChange={setEmployeeField("pan", (v) => v.toUpperCase())} placeholder="e.g. ABCDE1234F" />
                </Field>
                <Field label="UAN">
                  <input className="ssg-input" value={employee.uan} inputMode="numeric" maxLength={12}
                    onChange={setEmployeeField("uan")} placeholder="12-digit UAN" />
                </Field>
                <Field label="Bank account no.">
                  <input className="ssg-input" value={employee.bank} inputMode="numeric" onChange={setEmployeeField("bank")} />
                </Field>
                <Field label="Paid days">
                  <input className="ssg-input" type="number" inputMode="decimal" min="0" max="31" step="0.5"
                    value={employee.paidDays} onChange={setEmployeeField("paidDays")} placeholder="e.g. 30" />
                </Field>
                <Field label="LOP days">
                  <input className="ssg-input" type="number" inputMode="decimal" min="0" max="31" step="0.5"
                    value={employee.lopDays} onChange={setEmployeeField("lopDays")} placeholder="e.g. 0" />
                </Field>
              </div>
            </fieldset>

            <div className="ssg-pay-grid">
              <PayRows
                legend="Earnings"
                nameLabel="Earning name"
                addLabel="Add earning"
                rows={earnings}
                actions={earningActions}
                error={errors.earnings}
              />
              <PayRows
                legend="Deductions"
                nameLabel="Deduction name"
                addLabel="Add deduction"
                rows={deductions}
                actions={deductionActions}
                autoPaise={autoPaise}
                autoHint={autoHint}
              />
            </div>

            <div className="ssg-submit-bar">
              <p className="ssg-summary">
                <span>Net pay</span>
                <strong className={totals.net < 0 ? "ssg-negative" : undefined}>{formatPaise(totals.net)}</strong>
                <small>
                  Gross {formatPaise(totals.gross)} · Deductions {formatPaise(totals.deductions)}
                </small>
              </p>
              <div className="ssg-actions">
                <button type="button" className="ssg-btn ssg-btn-ghost" onClick={clearForm}>Clear form</button>
                <button type="submit" className="ssg-btn ssg-btn-primary">View payslip</button>
              </div>
            </div>
          </form>
        ) : (
          <section className="ssg-view" aria-labelledby={viewTitleId}>
            <div className="ssg-toolbar">
              <div>
                <h2 className="ssg-view-title" id={viewTitleId} ref={viewTitleRef} tabIndex={-1}>Your payslip is ready</h2>
                <p className="ssg-view-text">Check the details, then download it as a PDF or print it.</p>
              </div>
              <div className="ssg-actions">
                <button type="button" className="ssg-btn ssg-btn-ghost" onClick={() => goTo("form")}>Edit details</button>
                <button type="button" className="ssg-btn ssg-btn-ghost" onClick={handlePrint}>Print</button>
                <button type="button" className="ssg-btn ssg-btn-primary" onClick={handleDownload}
                  disabled={downloadState === "working"}>
                  {downloadState === "working" ? "Preparing PDF…" : "Download PDF"}
                </button>
              </div>
            </div>
            {totals.net < 0 && (
              <p className="ssg-warning" role="alert">Deductions are more than earnings, so net pay is negative.</p>
            )}
            {downloadState === "error" && (
              <p className="ssg-warning" role="alert">
                The PDF couldn&rsquo;t be created. Please try again, or use Print and choose &ldquo;Save as PDF&rdquo;.
              </p>
            )}
            <div className="ssg-sheet" id={sheetId}>{slip}</div>
          </section>
        )}

        {printReady && createPortal(<div className="ssg-print-root">{slip}</div>, document.body)}
      </div>
    </div>
  );
}

// Full class names written out, so PurgeCSS keeps them in the production CSS
const SPAN_CLASS = { 2: "ssg-span-2", full: "ssg-span-full" };

// Label + input + error message. The error is linked to the input so screen readers read it.
function Field({ label, span, error, children }) {
  const id = useId();
  const errorId = `${id}-error`;
  const control = cloneElement(children, {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  });
  return (
    <div className={["ssg-field", SPAN_CLASS[span]].filter(Boolean).join(" ")}>
      <label className="ssg-label" htmlFor={id}>{label}</label>
      {control}
      {error && <span className="ssg-error" id={errorId}>{error}</span>}
    </div>
  );
}

function PayRows({ legend, nameLabel, addLabel, rows, actions, autoPaise, autoHint, error }) {
  return (
    <fieldset className="ssg-card">
      <legend className="ssg-legend">{legend}</legend>
      <div className="ssg-rows">
        {rows.map((row) => (
          <div className="ssg-row" key={row.id}>
            <input
              className="ssg-input"
              aria-label={nameLabel}
              placeholder={nameLabel}
              value={row.label}
              readOnly={row.locked}
              onChange={(e) => actions.update(row.id, { label: e.target.value })}
            />
            <div className="ssg-amount">
              <span aria-hidden="true">₹</span>
              <input
                className="ssg-input"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                placeholder="0"
                aria-label={`${row.label || nameLabel} amount`}
                aria-invalid={error && row.id === "basic" ? true : undefined}
                value={row.auto ? String(autoPaise(row.rule) / 100) : row.amount}
                readOnly={row.auto}
                onChange={(e) => actions.update(row.id, { amount: e.target.value })}
              />
            </div>
            {row.rule ? (
              <label className="ssg-auto">
                <input
                  type="checkbox"
                  checked={row.auto}
                  onChange={(e) =>
                    actions.update(row.id, e.target.checked
                      ? { auto: true }
                      : { auto: false, amount: String(autoPaise(row.rule) / 100) })
                  }
                />
                Auto
              </label>
            ) : row.locked ? (
              <span />
            ) : (
              <button type="button" className="ssg-remove" aria-label={`Remove ${row.label || "row"}`}
                onClick={() => actions.remove(row.id)}>
                ×
              </button>
            )}
            {row.auto && <p className="ssg-hint">{autoHint(row.rule)}</p>}
          </div>
        ))}
      </div>
      {error && <p className="ssg-error" role="alert">{error}</p>}
      <button type="button" className="ssg-add" onClick={actions.add}>+ {addLabel}</button>
    </fieldset>
  );
}

function Payslip({ company, logo, periodLabel, employee, earnings, deductions, totals, footerNote }) {
  const details = [
    ["Employee ID", employee.code],
    ["Designation", employee.designation],
    ["Department", employee.department],
    ["Date of Joining", formatDate(employee.joined)],
    ["PAN", employee.pan],
    ["UAN", employee.uan],
    ["Bank A/c No.", employee.bank],
  ].filter(([, value]) => value);

  return (
    <article className="ssg-slip">
      <header className="ssg-slip-head">
        <div className="ssg-company">
          {logo && <img loading="lazy" className="ssg-logo" src={logo} alt={company.name || "Company Name"} />}
          <div>
            <p className={`ssg-company-name${company.name ? "" : " ssg-empty"}`}>{company.name || "Company Name"}</p>
            {company.address && <p className="ssg-company-address">{company.address}</p>}
          </div>
        </div>
        <div className="ssg-period">
          <span>Payslip for the month</span>
          <strong>{periodLabel}</strong>
        </div>
      </header>

      <section className="ssg-slip-summary">
        <div>
          <h3 className="ssg-slip-heading">Employee summary</h3>
          <dl className="ssg-details">
            <div>
              <dt>Employee Name</dt>
              <dd className={employee.name ? "" : "ssg-empty"}>{employee.name || "Employee Name"}</dd>
            </div>
            {details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="ssg-netbox">
          <strong>{formatPaise(totals.net)}</strong>
          <span>Employee Net Pay</span>
          {(employee.paidDays || employee.lopDays) && (
            <dl className="ssg-days">
              {employee.paidDays && <div><dt>Paid Days</dt><dd>{employee.paidDays}</dd></div>}
              {employee.lopDays && <div><dt>LOP Days</dt><dd>{employee.lopDays}</dd></div>}
            </dl>
          )}
        </div>
      </section>

      <PayTables earnings={earnings} deductions={deductions} totals={totals} />

      <div className="ssg-net">
        <div>
          <strong>Total Net Payable</strong>
          <span>Gross Earnings − Total Deductions</span>
        </div>
        <strong className="ssg-net-amount">{formatPaise(totals.net)}</strong>
      </div>
      <p className="ssg-words">
        Amount in words: <strong>{amountInWords(totals.net / 100)}</strong>
      </p>
      {footerNote && <p className="ssg-footnote">{footerNote}</p>}
    </article>
  );
}

// Wide payslips (and the PDF): one table, so both totals sit on the same line.
// Narrow payslips (phones): two tables, one under the other. CSS shows the right one.
function PayTables({ earnings, deductions, totals }) {
  const shownEarnings = earnings.filter((r) => r.paise !== 0);
  const shownDeductions = deductions.filter((r) => r.paise !== 0);
  const rowCount = Math.max(shownEarnings.length, shownDeductions.length, 1);

  const cells = (rows, i) => {
    const row = rows[i];
    if (row) {
      return [
        <td key="label">{row.label || "Other"}</td>,
        <td key="amount" className="ssg-num">{formatPaise(row.paise)}</td>,
      ];
    }
    if (i === 0) {
      return [
        <td key="label" className="ssg-empty">None</td>,
        <td key="amount" className="ssg-num">{formatPaise(0)}</td>,
      ];
    }
    return [<td key="label" />, <td key="amount" />];
  };

  return (
    <>
      <table className="ssg-table ssg-table-combined">
        <colgroup>
          <col className="ssg-col-label" />
          <col className="ssg-col-amount" />
          <col className="ssg-col-label" />
          <col className="ssg-col-amount" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Earnings</th>
            <th scope="col" className="ssg-num">Amount</th>
            <th scope="col">Deductions</th>
            <th scope="col" className="ssg-num">Amount</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }, (_, i) => (
            <tr key={i}>
              {cells(shownEarnings, i)}
              {cells(shownDeductions, i)}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Gross Earnings</th>
            <td className="ssg-num">{formatPaise(totals.gross)}</td>
            <th scope="row">Total Deductions</th>
            <td className="ssg-num">{formatPaise(totals.deductions)}</td>
          </tr>
        </tfoot>
      </table>

      <div className="ssg-tables">
        <PayTable title="Earnings" rows={shownEarnings} totalLabel="Gross Earnings" total={totals.gross} />
        <PayTable title="Deductions" rows={shownDeductions} totalLabel="Total Deductions" total={totals.deductions} />
      </div>
    </>
  );
}

function PayTable({ title, rows, totalLabel, total }) {
  return (
    <table className="ssg-table">
      <thead>
        <tr>
          <th scope="col">{title}</th>
          <th scope="col" className="ssg-num">Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows.length ? (
          rows.map((r) => (
            <tr key={r.id}>
              <td>{r.label || "Other"}</td>
              <td className="ssg-num">{formatPaise(r.paise)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="ssg-empty">None</td>
            <td className="ssg-num">{formatPaise(0)}</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">{totalLabel}</th>
          <td className="ssg-num">{formatPaise(total)}</td>
        </tr>
      </tfoot>
    </table>
  );
}