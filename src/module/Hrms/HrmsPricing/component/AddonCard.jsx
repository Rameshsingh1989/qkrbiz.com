import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import './AddonCard.scss';
import asset from '@/assets/images/hrms/hrmsPrice/asset.svg';

const addonFeatureColumns = [
  {
    title: "Live Tracking",
    items: ["GPS Visit Tracking", "Live Location Tracking"],
  },
  {
    title: "Payroll Integration",
    items: ["Attendance, Expense & Payroll Sync", "Auto Conveyance Expenses"],
  },
  {
    title: "Field Operations",
    items: ["Customer Management", "Territory Management", "Field Force Reports & Map View"],
  },
];

export default function PricingPlanCard() {
  return (
    <Container className="qkrvisit-addon pt-4 pb-3">
      <Row className="g-4 flex justify-content-center align-items-center">
        <Col lg={8} className="addon-intro">
              <div className="qkrvisit-banner">
                <span className="banner-icon">
                  <img loading="lazy" src={asset} alt="QkrVisit Addon" />
                </span>
                <p className="banner-text">
                  QkrVisit attaches to whichever plan you're already on — <strong>no separate system, no reconciling data between tools.</strong>
                </p>
              </div>
        </Col>
      </Row>
      <div className="qkrvisit-addon-card">
        <Row className="g-4 align-items-start">
          <Col lg={4} className="addon-intro">
            <span className="addon-badge">Field Force &amp; Live Tracking</span>
            <h3 className="addon-name">QkrVisit</h3>
            <p className="addon-desc">
              GPS visit tracking, live location and auto-logged conveyance — fully integrated into attendance, expense and payroll.
            </p>
            <Link to="/contact" className="addon-cta">Talk to Sales</Link>
          </Col>

          {addonFeatureColumns.map((col, idx) => (
            <Col lg key={idx} className="feature-col">
              <h4 className="feature-col-title">{col.title}</h4>
              <ul className="feature-check-list">
                {col.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </div>

    </Container>
  );
}
