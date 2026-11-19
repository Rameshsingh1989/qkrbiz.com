import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { PRICING } from "./HrmsCalculationData";
import { Link } from "react-router";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./HrmsCalculation.scss";

export const HrmsCalculation = () => {

      const [employees, setEmployees] = useState(80);
      const [selectedCompetitor, setSelectedCompetitor] = useState('keka');
      const [billingCycle, setBillingCycle] = useState('monthly');
      const [dropdownOpen, setDropdownOpen] = useState(false);

      // Confetti uses Math.random() which would produce different values
      // on server vs client and break hydration. Gate to post-mount only
      // (server + first client render both emit nothing → no mismatch).
      const [mounted, setMounted] = useState(false);
      useEffect(() => { setMounted(true); }, []);

      // Compute random seeds once on mount so the animation values stay
      // stable across re-renders (slider tweaks won't restart confetti).
      const confettiSeeds = useMemo(
        () => Array.from({ length: 10 }, () => ({
          xStart: Math.random() * 600 - 300,
          yEnd:   -100 - Math.random() * 40,
          dur:    1 + Math.random() * 0.9,
        })),
        []
      );

      const competitor = PRICING.competitors.find(c => c.key === selectedCompetitor);
    
      const calculations = useMemo(() => {
      // QkrHR calculation
      const qkrhrMonthly = PRICING.qkrhr.basePerUserMonthly * employees;
      const qkrhrAnnual = qkrhrMonthly * 12;
      const qkrhrWithDiscount = qkrhrAnnual * (1 - PRICING.qkrhr.annualDiscountPct / 100);
      const qkrhrFinalCost = billingCycle === 'monthly' ? qkrhrMonthly : qkrhrWithDiscount;
      // Competitor calculation (NO annual discount for competitors - only QkrHR gets discount)
      const competitorBase = competitor.basePerUserMonthly * employees;
      const competitorMonthly = competitorBase;
      const competitorAnnual = competitorMonthly * 12;
      // Removed the incorrect 10% discount assumption for competitors
      const competitorFinalCost = billingCycle === 'monthly' ? competitorMonthly : competitorAnnual;
      const savings = competitorFinalCost - qkrhrFinalCost;
      const savingsPercentage = (savings / competitorFinalCost) * 100;
    
      return {
          qkrhr: qkrhrFinalCost,
          competitor: competitorFinalCost,
          savings,
          savingsPercentage,
          isMonthly: billingCycle === 'monthly'
        };
      }, [employees, selectedCompetitor, billingCycle, competitor]);
    
      const formatCurrency = (amount) => {
        return `${PRICING.currency}${Math.round(amount).toLocaleString('en-IN')}`;
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (!event.target.closest('.dropdown')) { 
            setDropdownOpen(false); 
          }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };  
      }, []);

    useEffect(() => {
      const val = ((employees - 5) / (1000 - 5)) * 100;
      document
        .querySelector(".custom-range")
        .style.setProperty("--value", `${val}%`);
    }, [employees]);

  return (
    <>
      <div className="py-5 mb-2 hrms-calculation-section">
        <Container>
            <SectionHeading subTitle="" title='From Hire to Retire — Save More<span class="text-gradient"> with QkrHR</span>' description="Count the costs. Watch the savings." headingUnderLine={false} />
            <Row className="justify-content-center">
              <Col lg={12} xl={12} xxl={10}>
                  <div className="card radius-1 h-100 hrms-calculation">
                      <div className="card-body p-4">
                          <Row className="g-lg-5 rang-area">
                              <Col lg={6}>
                                <div className="card h-100 mb-0 border-0">
                                  <div className="card-body p-0 border-1">
                                    <h3 className="card-title h4 text-dark mb-4">Your Requirements</h3>
                                    
                                    <div className="mb-4">
                                      <label className="form-label opacity-75">
                                        Number of Employees
                                      </label>
                                      <div className="row g-3 align-items-center">
                                        <div className="col">
                                           {/* form-range */}
                                          <input
                                            type="range"
                                            className="custom-range"
                                            min="5"
                                            max="1000"
                                            step="5"
                                            value={employees}
                                            onChange={(e) => setEmployees(Number(e.target.value))}
                                          />
                                        </div>
                                        
                                        <div className="col-auto">
                                          <div className="input-group" style={{width: '100px'}}>
                                            <input
                                              type="number"
                                              className="form-control text-center"
                                              value={employees}
                                              onChange={(e) => setEmployees(Number(e.target.value))}
                                              min="1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Competitor Product */}
                                    <div className="mb-4">
                                      
                                      <label className="form-label opacity-75"> Competitor Product </label>
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-outline-secondary dropdown-toggle w-100 text-start d-flex justify-content-between align-items-center"
                                          type="button"
                                          onClick={() => setDropdownOpen(!dropdownOpen)}
                                          aria-expanded={dropdownOpen}
                                          >
                                         <span>{competitor.name} <span className="small opacity-75">({formatCurrency(competitor.basePerUserMonthly)}/user)</span></span>
                                        </button>
                                        
                                        {dropdownOpen && (
                                          <ul className="dropdown-menu show w-100 mt-1">
                                              {PRICING.competitors.map((comp) => (
                                                <li key={comp.key}>
                                                  <button
                                                    className="dropdown-item opacity-75"
                                                    onClick={() => {
                                                      setSelectedCompetitor(comp.key);
                                                      setDropdownOpen(false);
                                                    }}
                                                  >
                                                    {comp.name} <span className="small">({PRICING.currency}{comp.basePerUserMonthly}/user)</span>
                                                  </button>
                                                </li>
                                              ))}
                                          </ul>
                                        )}
                                      </div>
                                    </div>
          
                                    <div className="mb-4">
                                        <label className="form-label opacity-75">QkrHR Foundation Price ({formatCurrency(PRICING.qkrhr.basePerUserMonthly)}/user)</label>
                                    </div>

                                    <div className="mb-4 p-3 border radius-05">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <p className="fw-medium text-dark mb-0">Billing cycle </p>
                                        
                                        <div className="d-flex align-items-center gap-2">
                                          <span className={`small ${billingCycle === 'annual' ? 'opacity-75' : 'fw-medium'}`}>Monthly &nbsp;&nbsp; </span>
                                          <div className="form-check form-switch mb-0">
                                            <input 
                                              className="form-check-input switch-lg custom-switch" 
                                              type="checkbox" 
                                              role="switch" 
                                              id="billingCycleSwitch" 
                                              checked={billingCycle === 'annual'}
                                              onChange={(e) => setBillingCycle(e.target.checked ? 'annual' : 'monthly')}
                                            />
                                          </div>
                                          <span className={`small ${billingCycle === 'annual' ? 'fw-medium' : 'opacity-75'}`}> Annual</span>
                                        </div>
                                      </div>
                                        <p className="small mt-2 opacity-75 mb-0">If Annual is ON → QkrHR auto-applies {PRICING.qkrhr.annualDiscountPct}% off</p>
                                    </div>
                                    <Link to="/signup" className="btn btn-primary w-100 btn-lg mb-lg-0 mb-xl-0 mb-xxl-0 mb-4"> Schedule a Demo </Link>

                                  </div>
                                </div>
                              </Col>

                              <Col lg={6}>
                                <div className="card h-100 mb-0 border-0">
                                  <div className="card-body p-0 vs-area">
                                    <h3 className="card-title h4 text-dark mb-4">Your Potential Savings</h3>
                                      <Row className="mb-3 g-5">
                                        <Col lg={6} className="col-6">
                                            <div className="card h-100 bg-info-light mb-3 p-3 border-info-dark">
                                              <div className="card-body py-3 p-1 bg-white text-center radius-05">
                                                  <p className="text-dark mb-1">{competitor.name}</p>
                                                  <span className="h5 fn-sb text-primary mb-0">{formatCurrency(calculations.competitor)}</span>
                                                  <p className="small opacity-75 mb-0"> {calculations.isMonthly ? 'Monthly' : 'Annual'}</p>
                                                  <span className="vs">vs</span>
                                              </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="col-6">
                                            <div className="card h-100 bg-pink-light mb-3 p-3 border-pink-dark">
                                              <div className="card-body py-3 p-1 bg-white text-center radius-05">
                                                  <p className="text-dark mb-1">QkrHR</p>
                                                  <span className="h5 fn-sb text-pink mb-0 ">{formatCurrency(calculations.qkrhr)}</span>
                                                  <p className="small opacity-75 mb-0"> {calculations.isMonthly ? 'Monthly' : 'Annual'}</p>
                                                   {billingCycle === 'annual' && (
                                                      <div className="d-flex align-items-center text-pink mb-0">
                                                        <i className="bi bi-check-circle-fill me-2"></i>
                                                            <small className="mb-0 small" style={{fontSize:'0.75rem'}}>
                                                                {PRICING.qkrhr.annualDiscountPct}% annual discount applied
                                                          </small>
                                                      </div>
                                                    )}
                                              </div>
                                            </div>
                                        </Col>
                                      </Row>

                                      {/* Total Savings */}
                                      <div className="card bg-info-light mb-0 relative overflow-hidden motion-card border-info-dark">
                                        <div className="card-body p-3 py-4">
                                          <div className="small mb-1">Your saving with QkrHR</div>
                                          <div>
                                            <span className="fn-6 fn-sb text-pink me-2">{formatCurrency(calculations.savings)}</span>
                                            {calculations.savings > 2500 && (
                                              <small className="great-choice-badge bg-success p-2 radius-2 text-white text-xs px-2 py-1">Great choice!</small>
                                            )}
                                                             
                                         </div>
                                          <p className="small mt-2"> Save {calculations.savingsPercentage.toFixed(1)}% {calculations.isMonthly ? 'per month' : 'per year'}</p>
                                          <Row>
                                            <Col lg={6} className="col-6">
                                                <div className="card bg-white mb-0 border-info-dark">
                                                  <div className="card-body">
                                                      <p className="small opacity-75 mb-1">Employees</p>
                                                      <p className="small fn-sb text-dark mb-0">
                                                        {employees}
                                                      </p>
                                                  </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} className="col-6">
                                                <div className="card bg-white mb-0 border-info-dark">
                                                  <div className="card-body">
                                                      <p className="small opacity-75 mb-1">Billing</p>
                                                      <p className="small fn-sb text-dark mb-0">
                                                        {billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)}
                                                      </p>
                                                  </div>
                                                </div>
                                            </Col>
                                          </Row>
                                        </div>
                                          {mounted && calculations.savings > 2500 && (
                                            <div
                                              className="confetti-layer pointer-events-none position-absolute top-0 start-0 w-100 h-100"
                                            >
                                              {confettiSeeds.map((seed, i) => (
                                                <div
                                                  key={i}
                                                  className="confetti-piece position-absolute top-50 start-50"
                                                  style={{
                                                    "--cx": `${seed.xStart}px`,
                                                    "--cy": `${seed.yEnd}px`,
                                                    "--dur": `${seed.dur}s`,
                                                    "--delay": `${i * 0.05}s`,
                                                  }}
                                                >
                                                  <div
                                                    className="rounded-circle bg-warning shadow border border-warning"
                                                    style={{ width: '1.25rem', height: '1.25rem' }}
                                                  />
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                      </div>
                                  </div>
                                </div>
                              </Col>

                          </Row>
                      </div>
                  </div>
              </Col>
            </Row>

          {/* <Row className="align-items-stretch">
            <Col lg={4} className="d-flex">
              <div className="card text-center border h-100 w-100">
                <p className="mb-0 mt-4 opacity-75">
                  * Calculations are estimates based on the prov
                </p>
              </div>
            </Col>

            <Col lg={4} className="d-flex">
              <div className="card text-center border h-100 w-100">
                <p className="mb-0 mt-4 opacity-75">
                  * Calculations are estimates based on the provided inputs and may not reflect actual pricing. For
                </p>
              </div>
            </Col>

            <Col lg={4} className="d-flex">
              <div className="card text-center border h-100 w-100">
                <p className="mb-0 mt-4 opacity-75">
                  * Calculatthe provided inputs and may not reflect actual pricing. For precise quotes, please contact our sales team.
                </p>
              </div>
            </Col>
          </Row> */}
{/* 
          <div className="feature-grid">
            <div className="feature-card">
              <h3 className="h5 text-dark">Transparent Pricing</h3>
              <p className="small opacity-75 mb-0">No hidden fees. Just clear, straightforward pricing that scales with your business.</p>
            </div>
            <div className="feature-card">
              <h3 className="h5 text-dark">Transparent Pricing</h3>
              <p className="small opacity-75 mb-0">No hidden fees. Just clear, straightforward pricing that scales with your business.</p>
            </div>
            <div className="feature-card">
              <h3 className="h5 text-dark">Transparent Pricing</h3>
              <p className="small opacity-75 mb-0">No hidden fees. Just clear, straightforward pricing that scales with your business.</p>
            </div>
            <div className="feature-card">
              <h3 className="h5 text-dark">Transparent Pricing</h3>
              <p className="small opacity-75 mb-0">No hidden fees. Just clear, straightforward pricing that scales with your business.</p>
            </div>
          </div> */}
            
        </Container>
      </div> 
    </>
  )
}
