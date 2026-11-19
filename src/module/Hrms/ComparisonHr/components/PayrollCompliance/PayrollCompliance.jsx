import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";

import "./PayrollCompliance.scss";

const PayrollCompliance = ({ data }) => {
  const sanitizeHtml = useSanitizeHtml();
  const { title, description,vs, qkrCard, kekaCard } = data;

  return (
    <section className="payroll-compliance">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
             <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xxl-10">
                <div className="payroll-compare">
                  <div className="payroll-compare-card">
                    <div className="payroll-compare__header radius-left left">
                        {qkrCard.title}
                    </div>
                    <div className="payroll-compare__body border-right">
                        <ol className="payroll-steps">
                          {qkrCard.steps.map((step) => (
                            <li key={step.num} className="payroll-step">
                              <span className="payroll-step__num">{step.num}</span>
                              <div className="payroll-step__content">
                                <h3 className="payroll-step__title">{step.title}</h3>
                                <p className="payroll-step__desc">{step.description}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                    </div>
                  </div>
                  <div className="payroll-compare-card">
                    <div className="payroll-compare__header radius-right right">
                      <div className="vs">
                        <img loading="lazy" src={vs} alt="VS" />
                      </div>
                        {kekaCard.title}
                    </div>

                    <div className="payroll-compare__body">
                        <p className="hr-desc">{kekaCard.description}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PayrollCompliance;

