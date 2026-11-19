import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import { HrmsPricePlanData } from "./HrmsPricePlanData";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import "./HrmsPricePlans.scss";

export const HrmsPricePlans = () => {
  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <Container className="pt-4 pb-3 price-plans">
      <h4 className="text-center mb-5">Choose the best plan <span className="text-pink">for you</span></h4>
      <Row className="g-4 justify-content-center align-items-start">
        {HrmsPricePlanData.map((plan, planIndex) => (
          <Col lg={4} md={10} key={planIndex} className="d-flex">
            <div className={`plan-card ${plan.badge ? "popular" : ""}`}>
              {plan.badge &&
                <span className="popular-ribbon" dangerouslySetInnerHTML={sanitizeHtml(plan.badge)} />
              }
              <div className="plan-head">
                <h3 className="plan-name" dangerouslySetInnerHTML={sanitizeHtml(plan.name)} />
                <p className="plan-tagline" dangerouslySetInnerHTML={sanitizeHtml(plan.tagline)} />
                <div className="plan-price">
                  <span className="amount" dangerouslySetInnerHTML={sanitizeHtml(plan.price)} />
                  <span className="unit" dangerouslySetInnerHTML={sanitizeHtml(plan.priceUnit)} />
                </div>
                <p className="users-line" dangerouslySetInnerHTML={sanitizeHtml(plan.usersLine)} />
                <p className="sub-price-line" dangerouslySetInnerHTML={sanitizeHtml(plan.subPriceLine)} />
                {/* <span className="legal-entities-pill" dangerouslySetInnerHTML={sanitizeHtml(plan.legalEntities)} /> */}
              </div>
              <div className="plan-features">
                  <Link to={plan.ctaLink} className={`plan-cta ${plan.badge ? "btn-magenta" : "outline"}`} dangerouslySetInnerHTML={sanitizeHtml(plan.ctaLabel)} />
                <h4 className="features-heading mt-3" dangerouslySetInnerHTML={sanitizeHtml(plan.featuresHeading)} />
                {Object.entries(plan.features).map(([featureCategory, items], featureIdx) => (
                  <div className="feature-group" key={featureIdx}>
                    <h5 className="feature-category" dangerouslySetInnerHTML={sanitizeHtml(featureCategory)} />
                    <ul className="feature-list">
                      {items.map((item, i) => (
                        <li key={i}><span dangerouslySetInnerHTML={sanitizeHtml(item)} /></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};
