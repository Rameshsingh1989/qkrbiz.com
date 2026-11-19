import { Card, Row, Col } from "react-bootstrap";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./ImplementationSupport.scss";

const ImplementationSupport = ({ data }) => {
  const { title, description, cardTitle, cardDesc, logoTitle, cardBg, qkrCard, kekaCard } = data;

  return (
    <section className="implementation-support">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
             <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10">
            <Card className="impl-card">
              <Card.Header className="impl-card__header text-center bg-transparent">
                <h3 className="impl-card__title">{cardTitle}</h3>
                {cardDesc && <p>{cardDesc}</p>}
              </Card.Header>
              <Card.Body>
                <Row className="g-4">
                  <Col md={6}>
                    <Card className="impl-side impl-side--left h-100">
                      <Card.Body>
                        <div className="impl-side__logo">
                          <img loading="lazy" src={qkrCard.logo} alt={qkrCard.logoAlt} />
                        </div>
                        <div className="impl-feature-list">
                          {qkrCard.items.map((item, idx) => (
                            <Card key={idx} className="impl-feature">
                              <Card.Body>
                                <Card.Title className="impl-feature__title">{item.title}</Card.Title>
                                <Card.Text className="impl-feature__desc">{item.description}</Card.Text>
                              </Card.Body>
                            </Card>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={6}>
                    <Card className={`impl-side impl-side--right h-100 ${kekaCard.cardBg}`}>
                      <Card.Body className="keka-body">
                          <div className="impl-side__logo">
                            <img loading="lazy" src={kekaCard.logoText} alt={kekaCard.logoTextAlt} />
                          </div>
                          {kekaCard.logoTitle &&
                            <h4 className="text-white">{kekaCard.logoTitle}</h4>
                          }
                          <p className="impl-side__desc">{kekaCard.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSupport;
