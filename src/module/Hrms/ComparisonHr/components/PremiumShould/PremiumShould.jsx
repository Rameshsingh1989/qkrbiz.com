import { FaCheck } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./PremiumShould.scss";

const PremiumShould = ({ PremiumShouldData}) => {

  const sanitizeHtml = useSanitizeHtml();

  const scrollToCalculator = () => {
    const el = document.getElementById("hrms-calculation");
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="premium-should-section bg-pink-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {PremiumShouldData?.map((txt, index) => (
            <div className="col-lg-12 col-xxl-10" key={index}>
              <SectionHeading subTitle={txt.badge} title={txt.title} description={txt.description} headingUnderLine={false} />
              <div className="row g-4 justify-content-center">
                {txt.pricingCards?.map((card, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className={`card premium-should-card border-0 shadow-sm h-100 ${card.theme}`}>
                      <div className={`card-header text-white fs-5 px-4 py-3 ${card.headerClass}`}>
                        {card.title}
                      </div>

                      <div className="card-body px-4">
                        <h3 dangerouslySetInnerHTML={sanitizeHtml(card.price)} />

                        <ul className="list-unstyled mt-4 feature-list">
                          {card.features?.map((item, idx) => (
                            <li key={idx} className="d-flex align-items-center mb-3">
                              <span className={`feature-icon ${item.included ? "feature-icon-check" : "feature-icon-cross"}`}>
                                {item.included ? <FaCheck /> : <FaExclamationTriangle />}
                              </span>
                              <span>
                                {item.label}
                                {item.badge && <span className="feature-badge ms-1">{item.badge}</span>}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="feature-note text-center">
                          {card.note}
                        </div>

                        <button
                          type="button"
                          onClick={scrollToCalculator}
                          className={`btn py-3 w-100 ${card.btnClass}`}
                        >
                          {card.buttonText}
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumShould;