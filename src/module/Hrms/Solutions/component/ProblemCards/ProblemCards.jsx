import { Col, Container, Image, Row } from 'react-bootstrap';
import SectionHeading from '../../../../../components/SectionHeading/SectionHeading';
import useSanitizeHtml from '../../../../../hooks/useSanitizeHtml';
import "./ProblemCards.scss";

// Problem cards: optional icon, title, desc and an optional note pill; `cls` picks the colour variant
const ProblemCards = ({ ProblemData = [] }) => {
  const sanitizeHtml = useSanitizeHtml();

  return (
    <section className="st-problem py-4">
      {ProblemData.map((head, hIndex) => (
        <Container key={hIndex}>
          <Row className="justify-content-center">
            <Col lg={12} xxl={10} className="text-center">
              <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {head.List.map((list, index) => (
              <Col md={6} lg={3} key={index} className="d-flex mb-4">
                <div className={`card w-100 h-100 ${list.cls || "card-plain"}`}>
                  <div className="card-body">
                    {list.icon && (
                      <span className="icons">
                        <Image src={list.icon} alt={`${list.head.replace(/<[^>]+>/g, "")} icon`} loading="lazy" decoding="async" />
                      </span>
                    )}
                    <h3 className="card-title"><span dangerouslySetInnerHTML={sanitizeHtml(list.head)} /></h3>
                    <p className={`card-desc ${list.note ? "" : "mb-0"}`} dangerouslySetInnerHTML={sanitizeHtml(list.desc)} />
                    {list.note && <p className="card-note mb-0" dangerouslySetInnerHTML={sanitizeHtml(list.note)} />}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      ))}
    </section>
  );
};

export default ProblemCards;
