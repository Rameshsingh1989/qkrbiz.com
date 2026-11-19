import { useState } from 'react';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";

const SalaryHikeCalculatorMeta = {
  title: "Salary Hike Calculator | Calculate Salary Increment Online Free | Qkrbiz",
  description: "Use Qkrbiz's free salary hike calculator to instantly find your hike percentage or new salary after an increment. No spreadsheets needed.",
};
import "./SalaryHikeCalculator.scss";

const MODE_PERCENT = "percent";
const MODE_SALARY = "salary";

const MAX_HIKE = 100;

const HOW_TO_STEPS = {
  [MODE_PERCENT]: ["Enter your current salary.", "Enter your new salary.", "Get your hike percentage instantly."],
  [MODE_SALARY]: ["Enter your current salary.", "Enter your hike percentage.", "Get your new salary instantly."],
};

const formatNumber = (value) =>
  value === "" ? "" : new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value || 0);

const parseNumber = (value) => {
  const digits = value.replace(/[^\d]/g, "");
  return digits === "" ? "" : Number(digits);
};

const parsePercent = (value) => {
  const cleaned = value.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1");
  return cleaned;
};

const round = (value, digits = 2) => Math.round(value * 10 ** digits) / 10 ** digits;

const SalaryHikeCalculator = () => {
  const [mode, setMode] = useState(MODE_PERCENT);
  const [currentSalary, setCurrentSalary] = useState(100000);
  const [newSalary, setNewSalary] = useState(100000);
  const [hikePercent, setHikePercent] = useState("10");

  const current = Number(currentSalary) || 0;

  const computedPercent = current > 0 ? ((Number(newSalary) || 0) - current) / current * 100 : 0;
  const computedNewSalary = current * (1 + (Number(hikePercent) || 0) / 100);

  const sliderValue = mode === MODE_PERCENT ? computedPercent : Number(hikePercent) || 0;
  const sliderProgress = (Math.min(Math.max(sliderValue, 0), MAX_HIKE) / MAX_HIKE) * 100;

  // Dragging the slider updates whichever input drives the current mode.
  const handleSliderChange = (e) => {
    const percent = Number(e.target.value);
    if (mode === MODE_PERCENT) {
      setNewSalary(Math.round(current * (1 + percent / 100)));
    } else {
      setHikePercent(String(percent));
    }
  };

  return (
    <>
      <RouteSpecificMeta
        title={SalaryHikeCalculatorMeta.title}
        description={SalaryHikeCalculatorMeta.description}
      />

      <section className="salary-hike-calculator">
        <div className="container">
          <div className="sh-hero">
            <span className="sh-badge">Salary Hike Calculator</span>
            <h1 className="sh-title">Salary Hike Calculator</h1>
            <p className="sh-subtitle">
              Calculate exact salary increases or hike percentages instantly. Skip the spreadsheets and guesswork.
            </p>
          </div>

          <div className="row g-3">
            <div className="col-lg-6 d-flex">
              <div className="sh-card sh-input-card w-100">
                <div className="sh-modes" role="radiogroup" aria-label="Calculation type">
                  <label className="sh-radio">
                    <input
                      type="radio"
                      name="sh-mode"
                      checked={mode === MODE_PERCENT}
                      onChange={() => setMode(MODE_PERCENT)}
                    />
                    <span>Find Hike Percentage</span>
                  </label>
                  <label className="sh-radio">
                    <input
                      type="radio"
                      name="sh-mode"
                      checked={mode === MODE_SALARY}
                      onChange={() => setMode(MODE_SALARY)}
                    />
                    <span>Find New Salary</span>
                  </label>
                </div>

                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="sh-label" htmlFor="sh-current">Current salary</label>
                    <div className="sh-input-wrap">
                      <span className="sh-input-affix sh-prefix">₹</span>
                      <input
                        id="sh-current"
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        value={formatNumber(currentSalary)}
                        onChange={(e) => setCurrentSalary(parseNumber(e.target.value))}
                        placeholder="Current salary"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    {mode === MODE_PERCENT ? (
                      <>
                        <label className="sh-label" htmlFor="sh-new">New salary</label>
                        <div className="sh-input-wrap">
                          <span className="sh-input-affix sh-prefix">₹</span>
                          <input
                            id="sh-new"
                            type="text"
                            inputMode="numeric"
                            className="form-control"
                            value={formatNumber(newSalary)}
                            onChange={(e) => setNewSalary(parseNumber(e.target.value))}
                            placeholder="New salary"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="sh-label" htmlFor="sh-percent">Hike percentage</label>
                        <div className="sh-input-wrap">
                          <input
                            id="sh-percent"
                            type="text"
                            inputMode="decimal"
                            className="form-control sh-suffix-input"
                            value={hikePercent}
                            onChange={(e) => setHikePercent(parsePercent(e.target.value))}
                            placeholder="Hike %"
                          />
                          <span className="sh-input-affix sh-suffix">%</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="sh-card sh-result-card w-100">
                <p className="sh-result-label">{mode === MODE_PERCENT ? "Hike Percentage" : "New Salary"}</p>
                <p className="sh-result-value" aria-live="polite">
                  {mode === MODE_PERCENT ? `${round(computedPercent, 1).toFixed(1)}%` : formatINR(computedNewSalary)}
                </p>
                {mode === MODE_SALARY && (
                  <p className="sh-result-meta">
                    Increment of {formatINR(computedNewSalary - current)} on {formatINR(current)}
                  </p>
                )}
                <input
                  type="range"
                  className="sh-range"
                  min={0}
                  max={MAX_HIKE}
                  step={0.5}
                  value={Math.min(Math.max(sliderValue, 0), MAX_HIKE)}
                  onChange={handleSliderChange}
                  aria-label="Hike percentage"
                  style={{ "--sh-progress": `${sliderProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="sh-how-to">
            <strong>How to Use the Calculator:</strong>
            {HOW_TO_STEPS[mode].map((step, index) => (
              <span key={step} className="sh-step">
                {index > 0 && <span className="sh-step-arrow" aria-hidden="true">⟶</span>}
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default SalaryHikeCalculator;
