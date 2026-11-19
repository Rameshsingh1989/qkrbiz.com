import { useState } from 'react';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";

const HraCalculatorMeta = {
  title: "HRA Calculator | Calculate HRA Exemption Online Free | Qkrbiz",
  description: "Use Qkrbiz's free HRA calculator to instantly calculate your HRA tax exemption and taxable HRA based on basic salary, DA, HRA received and rent paid.",
};
import "./HraCalculator.scss";

// Income Tax Rule 2A: exempt HRA is the least of
//   1. actual HRA received
//   2. rent paid − 10% of salary
//   3. 50% of salary (metro) / 40% of salary (non-metro)
// where salary = Basic + DA.
const RENT_THRESHOLD = 0.1;
const METRO_RATE = 0.5;
const NON_METRO_RATE = 0.4;

const FIELDS = [
  { id: "basic", label: "Basic Salary (p.a)" },
  { id: "da", label: "Dearness Allowance (p.a)" },
  { id: "hra", label: "HRA (p.a)" },
  { id: "rent", label: "Rent Paid (p.a)" },
];

const EMPTY_VALUES = { basic: "", da: "", hra: "", rent: "" };

const EMPTY_RESULT = { actualHra: 0, rentExcess: 0, salaryShare: 0, exempt: 0, taxable: 0 };

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value || 0);

const formatNumber = (value) =>
  value === "" ? "" : new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);

const parseNumber = (value) => {
  const digits = value.replace(/[^\d]/g, "");
  return digits === "" ? "" : Number(digits);
};

const calculateHra = ({ basic, da, hra, rent }, isMetro) => {
  const salary = (Number(basic) || 0) + (Number(da) || 0);
  const actualHra = Number(hra) || 0;
  const rentExcess = Math.max((Number(rent) || 0) - salary * RENT_THRESHOLD, 0);
  const salaryShare = salary * (isMetro ? METRO_RATE : NON_METRO_RATE);
  const exempt = Math.min(actualHra, rentExcess, salaryShare);
  return { actualHra, rentExcess, salaryShare, exempt, taxable: actualHra - exempt };
};

const HraCalculator = () => {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [isMetro, setIsMetro] = useState(false);
  const [result, setResult] = useState(EMPTY_RESULT);
  const [resultIsMetro, setResultIsMetro] = useState(false);

  const handleChange = (id) => (e) => {
    const value = parseNumber(e.target.value);
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calculateHra(values, isMetro));
    setResultIsMetro(isMetro);
  };

  return (
    <>
      <RouteSpecificMeta
        title={HraCalculatorMeta.title}
        description={HraCalculatorMeta.description}
      />

      <section className="hra-calculator">
        <div className="container">
          <div className="hc-hero">
            <span className="hc-badge">Free Tools</span>
            <h1 className="hc-title">HRA Calculator</h1>
            <p className="hc-subtitle">
              Enter your salary details to instantly calculate your HRA tax exemption.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <form className="hc-card hc-input-card w-100" onSubmit={handleSubmit} noValidate>
                <h2 className="hc-card-title">HRA Calculator</h2>

                <div className="row g-4 hc-fields">
                  {FIELDS.map(({ id, label }) => (
                    <div className="col-sm-6" key={id}>
                      <label className="hc-label" htmlFor={`hc-${id}`}>{label}</label>
                      <input
                        id={`hc-${id}`}
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        value={formatNumber(values[id])}
                        onChange={handleChange(id)}
                        placeholder="Enter Amount"
                      />
                    </div>
                  ))}
                </div>

                <fieldset className="hc-metro">
                  <legend>Do you live in Delhi, Mumbai, Kolkata or Chennai?</legend>
                  <label className="hc-radio">
                    <input
                      type="radio"
                      name="hc-metro"
                      checked={isMetro}
                      onChange={() => setIsMetro(true)}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="hc-radio">
                    <input
                      type="radio"
                      name="hc-metro"
                      checked={!isMetro}
                      onChange={() => setIsMetro(false)}
                    />
                    <span>No</span>
                  </label>
                </fieldset>

                <button type="submit" className="btn btn-magenta">Calculate</button>
              </form>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="hc-card hc-result-card w-100" aria-live="polite">
                <div className="hc-result-body">
                  <h2 className="hc-card-title">Total Taxable HRA</h2>
                  <p className="hc-result-hint">*The least of the below values is exempt from HRA</p>
                  <div className="hc-result-list">
                    <div className="hc-result-row">
                      <span>Actual HRA received</span>
                      <strong>{formatINR(result.actualHra)}</strong>
                    </div>
                    <div className="hc-result-row">
                      <span>Rent Paid in excess of 10% of salary</span>
                      <strong>{formatINR(result.rentExcess)}</strong>
                    </div>
                    <div className="hc-result-row">
                      <span>{resultIsMetro ? "50%" : "40%"} of Basic Salary</span>
                      <strong>{formatINR(result.salaryShare)}</strong>
                    </div>
                  </div>
                </div>
                <div className="hc-result-total">
                  <div className="hc-result-row">
                    <span>Amount of exempted HRA</span>
                    <strong>{formatINR(result.exempt)}</strong>
                  </div>
                  <div className="hc-result-row">
                    <span>HRA chargeable to Tax</span>
                    <strong>{formatINR(result.taxable)}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="hc-note">
            Salary = Basic + DA. Exempt HRA is 50% of salary for Delhi, Mumbai, Kolkata and Chennai and 40% elsewhere.
          </p>
        </div>
      </section>
    </>
  )
}
export default HraCalculator;
