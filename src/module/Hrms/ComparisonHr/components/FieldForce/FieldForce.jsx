import { Card, Row, Col } from "react-bootstrap";
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./FieldForce.scss";

const FieldForce = ({ data }) => {
  const sanitizeHtml = useSanitizeHtml();
  const { title, description, qkrSection, kekaSection } = data;

  return (
    <section className="field-force-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
            <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10">
            <Card className="field-force-card">
              <Card.Header className="field-force-card__intro bg-transparent text-center">
                <h3 className="field-force-card__title">{qkrSection.title}</h3>
                <p
                  className="field-force-card__subtitle"
                  dangerouslySetInnerHTML={sanitizeHtml(qkrSection.subtitle)}
                />
              </Card.Header>

              <Card.Body>
                <Row className="g-3">
                  {qkrSection.features.map((feature, idx) => (
                    <Col md={6} lg={3} key={idx}>
                      <Card className="field-feature h-100">
                        <Card.Body>
                          <Card.Title
                            className="field-feature__title"
                            dangerouslySetInnerHTML={sanitizeHtml(feature.title)}
                          />
                          <div className="field-feature__divider" />
                          <Card.Text className="field-feature__desc">
                            {feature.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
              {kekaSection?.title?.trim() &&
                kekaSection?.description?.trim() && (
                  <Card.Footer className="field-force-card__hr text-center bg-transparent">
                    <div className="field-force-card__label">
                      <span className="bg-white p-2">{kekaSection.title}</span>
                    </div>

                    <p className="field-force-card__desc">
                      {kekaSection.description}
                    </p>
                  </Card.Footer>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldForce;
