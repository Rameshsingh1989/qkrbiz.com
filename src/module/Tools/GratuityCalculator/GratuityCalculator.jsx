import { useMemo, useState } from 'react';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";

const GratuityCalculatorMeta = {
  title: "Gratuity Calculator | Calculate Gratuity Online Free | Qkrbiz",
  description: "Use Qkrbiz's free gratuity calculator to instantly calculate the gratuity payable based on your monthly salary (Basic + DA) and years of service.",
};
import "./GratuityCalculator.scss";

// Payment of Gratuity Act, 1972: (15 × last drawn salary × years) / 26
const GRATUITY_DAYS = 15;
const WORKING_DAYS = 26;
const GRATUITY_CAP = 2000000; // statutory ceiling ₹20 lakh

const MIN_YEARS = 5;
const MAX_YEARS = 50;

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value || 0);

const GratuityCalculator = () => {
  const [salary, setSalary] = useState(25000);
  const [years, setYears] = useState(5);

  const { gratuity, isCapped } = useMemo(() => {
    const raw = (GRATUITY_DAYS * (Number(salary) || 0) * years) / WORKING_DAYS;
    return { gratuity: Math.min(raw, GRATUITY_CAP), isCapped: raw > GRATUITY_CAP };
  }, [salary, years]);

  const handleSalaryChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setSalary(value === "" ? "" : Number(value));
  };

  const sliderProgress = ((years - MIN_YEARS) / (MAX_YEARS - MIN_YEARS)) * 100;

  return (
    <>
      <RouteSpecificMeta
        title={GratuityCalculatorMeta.title}
        description={GratuityCalculatorMeta.description}
      />

      <section className="gratuity-calculator">
        <div className="container">
          <div className="gc-hero">
            <span className="gc-badge">Free Tools</span>
            <h1 className="gc-title">Gratuity Calculator</h1>
            <p className="gc-subtitle">
              Say Goodbye to Manual Math Madness and Embrace Qkrbiz's Free Gratuity Calculator
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="gc-card gc-input-card w-100">
                <h2 className="gc-card-title">Gratuity Calculator</h2>

                <div className="gc-field">
                  <label htmlFor="gc-salary">Monthly Salary (Basic Pay + D.A)</label>
                  <div className="gc-input-wrap">
                    <span className="gc-input-prefix">₹</span>
                    <input
                      id="gc-salary"
                      type="text"
                      inputMode="numeric"
                      className="form-control"
                      value={salary}
                      onChange={handleSalaryChange}
                      placeholder="Enter monthly salary"
                    />
                  </div>
                </div>

                <div className="gc-field mb-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="gc-years">No.of Years of Service</label>
                    <span className="gc-years-value">{years} yrs</span>
                  </div>
                  <input
                    id="gc-years"
                    type="range"
                    className="gc-range"
                    min={MIN_YEARS}
                    max={MAX_YEARS}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    style={{ "--gc-progress": `${sliderProgress}%` }}
                  />
                  <div className="gc-range-labels">
                    <span>{MIN_YEARS}</span>
                    <span>{MAX_YEARS}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="gc-card gc-result-card w-100">
                <div className="gc-result-body">
                  <h2 className="gc-card-title">Total Gratuity Payable To You</h2>
                  <div className="gc-result-row">
                    <span>Monthly Salary (Basic Pay + D.A)</span>
                    <strong>{formatINR(salary)}</strong>
                  </div>
                  <div className="gc-result-row">
                    <span>No.of Years of Service</span>
                    <strong>{years}</strong>
                  </div>
                </div>
                <div className="gc-result-total">
                  <span>Total</span>
                  <strong>{formatINR(gratuity)}</strong>
                </div>
              </div>
            </div>
          </div>

          <p className="gc-note">
            Gratuity = (15 × Last drawn salary × Years of service) / 26.
            {isCapped && " The amount is capped at the statutory limit of ₹20,00,000."}
          </p>
        </div>
      </section>
    </>
  )
}
export default GratuityCalculator;
