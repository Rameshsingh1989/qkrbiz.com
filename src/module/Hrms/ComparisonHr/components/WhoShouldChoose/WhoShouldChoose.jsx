import { Card, Row, Col } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";

import "./WhoShouldChoose.scss";

const ChecklistCard = ({title, items, titleClass }) => (
    <Card.Body className="p-4">
      <h3 className={`mb-4 ${titleClass}`}>{title}</h3>
      <ul className="list-unstyled m-0 who-list">
        {items.map((item, idx) => (
          <li key={idx} className="d-flex align-items-start gap-4 mb-3">
            <FaCircleCheck className="who-list__icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card.Body>
);

const WhoShouldChoose = ({ data }) => {
  const {brandClass, title, description, qkrCard, kekaCard, shortNote } = data;

  return (
    <section className="who-should-choose">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
            <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10">
            <Row className="g-4">
              <Col md={6}>
                <Card className={`h-100 ${qkrCard.brandClass}`}>
                  <ChecklistCard title={qkrCard.title} items={qkrCard.items} titleClass="text-magenta" />
                </Card>  
              </Col>
              <Col md={6}>
                <Row className="g-4">
                  <Col xs={12}>
                    <Card className={`h-100 ${kekaCard.brandClass}`}>
                      <ChecklistCard title={kekaCard.title} items={kekaCard.items} titleClass="text-purple" />
                    </Card>  
                  </Col>
                  <Col xs={12}>
                    <Card className="bg-magenta">
                      <Card.Body className="p-4">
                        <h3 className="mb-3 text-underline d-inline-block text-white">{shortNote.title}</h3>
                        <p className="mb-0 text-white">{shortNote.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldChoose;
