/*
 * Small drawn pieces for the HR Workflow Management tiles.
 * Section visuals are .webp images (see WorkflowsData.js).
 */

// Class names are spelled out in full: the production build (PurgeCSS) drops any class
// that only exists as a template string.
const PILL_CLASS = {
  muted: 'badge rounded-pill bg-gray text-dark-gray',
  info: 'badge rounded-pill bg-info-light text-primary',
  warn: 'badge rounded-pill bg-warning-light text-warning-dark',
  ok: 'badge rounded-pill bg-success-subtle text-success-emphasis',
  danger: 'badge rounded-pill bg-danger-subtle text-danger-emphasis',
};

export const Pill = ({ tone = 'muted', children }) => (
  <span className={PILL_CLASS[tone]}>{children}</span>
);

// Stage chain drawn inside the large "Workflow designer" tile.
export const StageChain = () => (
  <div className="wf-mock d-flex align-items-center gap-2 flex-wrap small" role="img" aria-label="A three-stage workflow: reporting manager, then any 2 of 3 in the HR team, then the finance head">
    <div className="border rounded-3 p-2 flex-fill"><small>Stage 1</small><strong>Reporting manager</strong></div>
    <span className="text-secondary fs-5" aria-hidden="true">→</span>
    <div className="border rounded-3 p-2 flex-fill"><small>Stage 2 · any 2 of 3</small><strong>HR team</strong></div>
    <span className="text-secondary fs-5" aria-hidden="true">→</span>
    <div className="border rounded-3 p-2 flex-fill"><small>Stage 3</small><strong>Finance head</strong></div>
  </div>
);
