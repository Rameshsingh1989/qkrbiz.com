import { Row, Col, Card, Container } from "react-bootstrap";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./StrengthCard.scss";

const StrengthCard = ({ data }) => {
  return (
    <div className="strength-section">
        <Container>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-xxl-10">
                    <SectionHeading subTitle="Honest Assessment" title="HROne: What It Does Well — and Where It Has Limits" description="HROne has earned real recognition in India's HRMS market. Its strengths are genuine. So are its limitations." headingUnderLine={false} />
                    <Row className="g-4">
                    {data.map((card, cardIndex) => (
                        <Col lg={6} key={cardIndex}>
                        <Card
                            className={`strength-card ${
                            cardIndex === 0
                                ? "strength-card-success"
                                : "strength-card-danger"
                            } h-100`}
                        >
                            <Card.Body>
                            <h4 className="card-title mb-3">{card.title}</h4>

                            {card.items.map((item, index) => (
                                <div
                                key={index}
                                className={`strength-item ${
                                    index !== card.items.length - 1
                                    ? "border-bottom"
                                    : ""
                                }`}
                                >
                                <div className="d-flex align-items-start">
                                    <span className="strength-number me-3">
                                    {index + 1}
                                    </span>

                                    <div>
                                    <h5>{item.title}</h5>

                                    <p>{item.description}</p>

                                    {item.source && (
                                        <div className="strength-source">
                                            <img loading="lazy" src={item.source} alt="Reviewers" />
                                        </div>
                                    )}

                                    {item.quote && (
                                        <small className="d-block mt-2">
                                        "{item.quote}"
                                        </small>
                                    )}
                                    </div>
                                </div>
                                </div>
                            ))}
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                    </Row>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default StrengthCard;