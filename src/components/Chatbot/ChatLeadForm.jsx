import { useState } from "react";
import { EMAIL_CONFIG } from "../../utility/emailConfig";
import { EmailTemplates } from "../../utility/emailTemplates";
import { StorageUtils } from "../../utility/storageUtils";
import { VALIDATION_PATTERNS } from "../../utility/validationPatterns";
import { sendEmail, getEmailErrorMessage } from "../../services/EmailApi";
import { EMPLOYEE_RANGES } from "./chatbotContent";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company name", type: "text", autoComplete: "organization" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "mobileNo", label: "Mobile (10 digits)", type: "tel", autoComplete: "tel-national", inputMode: "numeric" },
];

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (!VALIDATION_PATTERNS.name.test(form.name.trim())) errors.name = "Use letters only";
  if (!form.company.trim()) errors.company = "Company is required";
  else if (!VALIDATION_PATTERNS.company.test(form.company.trim())) errors.company = "Invalid characters";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!VALIDATION_PATTERNS.email.test(form.email.trim())) errors.email = "Enter a valid email";
  if (!form.mobileNo.trim()) errors.mobileNo = "Mobile is required";
  else if (!VALIDATION_PATTERNS.mobile.test(form.mobileNo.trim())) errors.mobileNo = "10 digits starting 6-9";
  if (!form.noEmployee) errors.noEmployee = "Select team size";
  return errors;
};

const escapeHtml = (text) =>
  String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/**
 * Demo request form shown inside the chat. Sends the same admin + visitor emails
 * as the site's other request forms, with the chat context added as the message.
 */
const ChatLeadForm = ({ interest, questions, onSubmitted }) => {
  const [form, setForm] = useState({ name: "", company: "", email: "", mobileNo: "", noEmployee: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError] = useState("");

  const update = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length || submitting) return;

    setSubmitting(true);
    setSendError("");
    const clean = Object.fromEntries(Object.entries(form).map(([k, v]) => [k, v.trim()]));

    // Visitor-typed questions go into an HTML email, so they are escaped.
    const context = [
      "Source: Website chatbot",
      interest && `Interested in: ${escapeHtml(interest)}`,
      questions.length && `Asked in chat:<br>• ${questions.slice(-8).map(escapeHtml).join("<br>• ")}`,
      `Page: ${escapeHtml(window.location.href)}`,
    ].filter(Boolean).join("<br>");

    try {
      await Promise.all([
        sendEmail({
          ...EMAIL_CONFIG.admin,
          MailSubj: `Chatbot enquiry from ${clean.name}`,
          Message: EmailTemplates.generateAdminEmailBody({ ...clean, myText: context }, StorageUtils.getStoredLandingPage()),
        }),
        sendEmail({
          SendTo: clean.email,
          MailSubj: EMAIL_CONFIG.user.subject,
          Message: EmailTemplates.generateUserEmailBody({ name: clean.name }),
        }),
      ]);
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "chatbot_lead_submitted", chatbot_interest: interest || "demo" });
      }
      onSubmitted(clean.name);
    } catch (error) {
      setSendError(getEmailErrorMessage(error));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="qkr-chat-form" onSubmit={handleSubmit} noValidate>
      {FIELDS.map(({ name, label, ...input }) => (
        <label key={name} className="qkr-chat-field">
          <span>{label}</span>
          <input
            name={name}
            value={form[name]}
            onChange={update}
            aria-invalid={Boolean(errors[name])}
            disabled={submitting}
            {...input}
          />
          {errors[name] && <small role="alert">{errors[name]}</small>}
        </label>
      ))}
      <label className="qkr-chat-field">
        <span>Number of employees</span>
        <select name="noEmployee" value={form.noEmployee} onChange={update} aria-invalid={Boolean(errors.noEmployee)} disabled={submitting}>
          <option value="">Select</option>
          {EMPLOYEE_RANGES.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
        {errors.noEmployee && <small role="alert">{errors.noEmployee}</small>}
      </label>
      {sendError && <p className="qkr-chat-form-error" role="alert">{sendError}</p>}
      <button type="submit" className="qkr-chat-submit" disabled={submitting}>
        {submitting ? "Sending…" : "Book my free demo"}
      </button>
    </form>
  );
};

export default ChatLeadForm;
