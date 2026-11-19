/*
 * Small drawn pieces for the Employee Management bento tiles.
 * Section visuals are .webp images (see EmployeeData.js).
 */
import { EmployeeCustomFields } from './EmployeeData';

// Class names are spelled out in full: the production build (PurgeCSS) drops any class
// that only exists as a template string such as `emp-pill-${tone}`.
const PILL_CLASS = {
  muted: 'emp-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-gray text-dark-gray',
  info: 'emp-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-magenta-light text-magenta',
  warn: 'emp-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-warning-light emp-pill-warn',
  ok: 'emp-pill d-inline-flex align-items-center rounded-pill fw-semibold text-nowrap bg-success-light emp-pill-ok',
};

export const Pill = ({ tone = 'muted', children }) => (
  <span className={PILL_CLASS[tone]}>{children}</span>
);

// Custom-field list drawn inside the large "Employee record" tile.
export const CustomFieldList = () => (
  <div className="emp-fields" role="img" aria-label="Four custom fields added to the employee record: blood group, uniform size, driving licence validity and cost centre">
    {EmployeeCustomFields.map((f) => (
      <div className="emp-row" key={f.name}><span>{f.name}</span><small>{f.type}</small></div>
    ))}
  </div>
);
