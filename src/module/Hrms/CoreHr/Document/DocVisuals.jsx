/*
 * Drawn product cards for the HR Document Management page.
 * They are illustrations, not working controls: each card is one image to screen
 * readers (role="img" + aria-label) and nothing inside it is focusable.
 * Names and numbers are illustrative.
 */
import { SHOW_UNRELEASED } from './DocumentsData';

// Class names are spelled out in full: the production build (PurgeCSS) drops any class
// that only exists as a template string such as `dms-pill-${tone}`.
const PILL_CLASS = {
  muted: 'dms-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-gray text-dark-gray',
  info: 'dms-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-info-light dms-pill-info',
  warn: 'dms-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-warning-light dms-pill-warn',
  ok: 'dms-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap dms-pill-ok',
  danger: 'dms-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap dms-pill-danger',
};

const AVATAR_CLASS = {
  magenta: 'dms-avatar rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 fw-bold bg-magenta-light text-magenta',
  blue: 'dms-avatar rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 fw-bold bg-info-light dms-avatar-blue',
  warn: 'dms-avatar rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 fw-bold bg-warning-light dms-avatar-warn',
};

const Pill = ({ tone = 'muted', children }) => (
  <span className={PILL_CLASS[tone]}>{children}</span>
);

const Avatar = ({ initials, tone = 'magenta' }) => (
  <span className={AVATAR_CLASS[tone]}>{initials}</span>
);

const PolicyVersionsCard = () => (
  <figure className="dms-mock" role="img" aria-label="Version history of the leave policy, with 88 employees still to acknowledge version 4">
    <div className="dms-mock-head">
      <span>Leave Policy · version history</span>
      <Pill tone="warn">88 pending</Pill>
    </div>
    <div className="dms-row">
      <span className="dms-row-main"><Pill tone="info">v4</Pill><span><strong>Material</strong> · new carry-forward rule<small>Published 01 Jan 2027 by HR Admin</small></span></span>
      <small>54 of 142 acknowledged</small>
    </div>
    <div className="dms-row">
      <span className="dms-row-main"><Pill>v3</Pill><span>Minor · formatting<small>Published 14 Jun 2026</small></span></span>
      <small>acknowledgements kept</small>
    </div>
    <div className="dms-row">
      <span className="dms-row-main"><Pill>v2</Pill><span>Material · sandwich rule<small>Published 02 Jan 2026</small></span></span>
      <small>139 acknowledged</small>
    </div>
    <div className="dms-mock-foot">
      <strong className="d-block mb-2">Still to acknowledge version 4</strong>
      <div className="dms-row dms-row-flat"><span className="dms-row-main"><Avatar initials="AR" />Ananya Rao</span><small>acknowledged v3 · again needed</small></div>
      <div className="dms-row dms-row-flat"><span className="dms-row-main"><Avatar initials="VS" tone="blue" />Vikram Sethi</span><small>not yet acknowledged</small></div>
    </div>
  </figure>
);

const PolicyAckCard = () => (
  <figure className="dms-mock" role="img" aria-label="Acknowledgement progress for four company policies">
    <div className="dms-mock-head">
      <span>Policies · acknowledgement</span>
      <Pill tone="warn">31 pending</Pill>
    </div>
    {[
      { name: 'Code of Conduct', pct: 96 },
      { name: 'Leave Policy 2027', pct: 62, warn: true },
      { name: 'POSH Policy', pct: 100 },
      { name: 'IT & Data Use', pct: 81 },
    ].map((p) => (
      <div className="dms-row" key={p.name}>
        <strong>{p.name}</strong>
        <span className="dms-progress">
          <span className="dms-bar"><span className={p.warn ? 'dms-bar-fill dms-bar-warn' : 'dms-bar-fill'} style={{ width: `${p.pct}%` }} /></span>
          <small>{p.pct}%</small>
        </span>
      </div>
    ))}
    <div className="dms-mock-foot">
      <strong className="d-block mb-2">Leave Policy 2027 · not yet acknowledged</strong>
      <div className="dms-row dms-row-flat"><span className="dms-row-main"><Avatar initials="AR" />Ananya Rao</span><small>portal access on hold</small></div>
      <div className="dms-row dms-row-flat"><span className="dms-row-main"><Avatar initials="VS" tone="blue" />Vikram Sethi</span><small>reminded today</small></div>
    </div>
  </figure>
);

const LetterCard = () => (
  <figure className={`dms-mock-pair ${SHOW_UNRELEASED ? '' : 'dms-mock-pair-single'}`} role="img" aria-label="A confirmation letter template with employee fields that fill in automatically">
    {SHOW_UNRELEASED && (
      <div className="dms-mock dms-mock-list">
        <div className="dms-mock-head"><span>Ready-made letters</span></div>
        <div className="dms-row">Appointment Letter</div>
        <div className="dms-row bg-magenta-extralight text-magenta fw-semibold">Confirmation Letter</div>
        <div className="dms-row">Experience Letter</div>
        <div className="dms-row">Relieving Letter</div>
        <div className="dms-row">Bank Account Letter</div>
        <div className="p-3"><span className="dms-fake-btn dms-fake-btn-primary w-100">Use this letter</span></div>
      </div>
    )}
    <div className="dms-mock dms-letter p-4">
      <span className="dms-letter-logo d-block rounded-1 mb-3" />
      <p className="fw-bold text-black">Confirmation of Employment</p>
      <p>Dear <span className="dms-token">Employee Name</span>,</p>
      <p>We are pleased to confirm your services as <span className="dms-token">Designation</span> with effect from <span className="dms-token">Confirmation Date</span>. Your monthly gross salary will be <span className="dms-token">Gross Salary</span>.</p>
      <p>All other terms of your appointment remain unchanged.</p>
      <span className="dms-sign-slot d-inline-block mt-3 rounded-3">Signature · HR Head</span>
    </div>
  </figure>
);

const SigningCard = () => (
  <figure className="dms-mock" role="img" aria-label="A promotion letter signed by the HR Head and waiting for the Managing Director">
    <div className="dms-mock-head">
      <span>Promotion letter · Ananya Rao</span>
      <Pill tone="info">In approval</Pill>
    </div>
    <div className="dms-steps">
      <div className="d-flex gap-3">
        <span className="d-flex flex-column align-items-center"><Avatar initials="1" /><span className="dms-step-line" /></span>
        <div className="flex-grow-1 pb-3">
          <strong>HR Head · Rohit Mehta</strong>
          <small>Signed 11 Nov, 4:10 pm</small>
          <span className="dms-signature">R. Mehta</span>
        </div>
      </div>
      <div className="d-flex gap-3">
        <span className="d-flex flex-column align-items-center"><Avatar initials="2" tone="warn" /></span>
        <div className="flex-grow-1 pb-3">
          <strong>Managing Director · Sunita Kapoor</strong>
          <small>Waiting since 11 Nov</small>
          <span className="d-flex gap-2 mt-3 flex-wrap">
            <span className="dms-fake-btn dms-fake-btn-primary">Approve &amp; sign</span>
            {SHOW_UNRELEASED && <span className="dms-fake-btn">Send back</span>}
          </span>
        </div>
      </div>
    </div>
  </figure>
);

const OffersCard = () => (
  <figure className="dms-mock" role="img" aria-label="Offer letters list with candidate status, and the salary structure of one offer">
    <div className="dms-mock-head">
      <span>Offer letters</span>
      <span className="dms-fake-btn dms-fake-btn-primary">+ Offer letter</span>
    </div>
    <div className="dms-row">
      <span className="dms-row-main"><Avatar initials="AJ" /><span><strong>Aditi Joshi</strong><small>Sales Executive · Pune</small></span></span>
      <Pill tone="ok">Joined</Pill>
    </div>
    <div className="dms-row bg-magenta-extralight text-magenta fw-semibold">
      <span className="dms-row-main"><Avatar initials="KM" tone="blue" /><span><strong>Karan Malhotra</strong><small>Senior Analyst · Mumbai</small></span></span>
      <Pill tone="ok">Accepted</Pill>
    </div>
    <div className="dms-row">
      <span className="dms-row-main"><Avatar initials="RS" tone="warn" /><span><strong>Riya Shah</strong><small>Accountant · Delhi</small></span></span>
      <Pill tone="info">Shared with Candidate</Pill>
    </div>
    <div className="dms-mock-foot">
      <strong className="d-block mb-2">Karan Malhotra · salary structure</strong>
      <div className="dms-line"><span>Basic</span><span>₹22,500</span></div>
      <div className="dms-line"><span>HRA</span><span>₹11,250</span></div>
      <div className="dms-line"><span>Special allowance</span><span>₹11,250</span></div>
      <div className="dms-line dms-line-total"><span>Gross per month</span><span>₹45,000</span></div>
      <div className="dms-line"><span>Joining date</span><span>01 Dec 2026</span></div>
    </div>
  </figure>
);

const FilesCard = () => (
  <figure className="dms-mock" role="img" aria-label="An employee's documents grouped by folder, with verification status for each">
    <div className="dms-mock-head">
      <span>Vikram Sethi · documents</span>
      <small>4 of 6 verified</small>
    </div>
    <div className="dms-group">ID proofs</div>
    <div className="dms-row"><span>PAN Card</span><Pill tone="ok">Verified</Pill></div>
    <div className="dms-row"><span>Aadhaar</span><Pill tone="ok">Verified</Pill></div>
    <div className="dms-row"><span>Passport<small>Expires 03 Feb 2027</small></span><Pill tone="ok">Verified</Pill></div>
    <div className="dms-group">Education</div>
    <div className="dms-row"><span>Graduation Certificate</span><Pill tone="warn">Awaiting Verification</Pill></div>
    <div className="dms-group">Previous employment</div>
    <div className="dms-row"><span>Relieving Letter<small>“Page 2 is missing”</small></span><Pill tone="danger">Rejected</Pill></div>
    <div className="dms-row"><span>Last 3 payslips</span><Pill>Pending Upload</Pill></div>
  </figure>
);

const FormsCard = () => (
  <div className="d-flex flex-column gap-3" role="img" aria-label="Two assigned forms showing how many employees have filled them and how many are approved">
    <figure className="dms-mock p-3">
      <div className="d-flex justify-content-between align-items-center gap-2"><strong>Exit Interview · November</strong><Pill tone="info">On workflow</Pill></div>
      <div className="dms-meter"><small>Filled</small><span className="dms-bar"><span className="dms-bar-fill" style={{ width: '70%' }} /></span><small>7 / 10</small></div>
      <div className="dms-meter"><small>Approved</small><span className="dms-bar"><span className="dms-bar-fill" style={{ width: '40%' }} /></span><small>4 / 10</small></div>
      <small className="mt-2">Pending with <strong>Neha Iyer</strong> · 3 days</small>
    </figure>
    <figure className="dms-mock p-3">
      <div className="d-flex justify-content-between align-items-center gap-2"><strong>Probation Review · Q4</strong><Pill tone="ok">Assigned by rule</Pill></div>
      <div className="dms-meter"><small>Filled</small><span className="dms-bar"><span className="dms-bar-fill" style={{ width: '100%' }} /></span><small>12 / 12</small></div>
      <div className="dms-meter"><small>Approved</small><span className="dms-bar"><span className="dms-bar-fill" style={{ width: '83%' }} /></span><small>10 / 12</small></div>
    </figure>
  </div>
);

const DocVisual = ({ name }) => {
  if (name === 'policy') return SHOW_UNRELEASED ? <PolicyVersionsCard /> : <PolicyAckCard />;
  if (name === 'letter') return <LetterCard />;
  if (name === 'signing') return <SigningCard />;
  if (name === 'offers') return <OffersCard />;
  if (name === 'files') return <FilesCard />;
  if (name === 'forms') return <FormsCard />;
  return null;
};

export default DocVisual;
