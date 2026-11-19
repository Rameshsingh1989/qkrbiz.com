import { Card, Row, Col } from "react-bootstrap";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./WhatYouGet.scss";

const WhatYouGet = ({ data }) => {

  const { title, description, items } = data;

  return (
    <section className="what-you-get">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
            <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10">
            <Row className="g-3">
              {items.map((item, idx) => (
                <Col md={6} lg={4} key={idx}>
                  <Card className="what-you-get-card h-100">
                    <Card.Body>
                      <Card.Text className="what-you-get-card__text">{item}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
