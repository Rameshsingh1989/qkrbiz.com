import { Col, Container, Row } from 'react-bootstrap';
import SectionHeading from '../../../../../components/SectionHeading/SectionHeading';
import useSanitizeHtml from '../../../../../hooks/useSanitizeHtml';
import "./SetupSteps.scss";

// Numbered step cards with an optional per-step tag and an optional section note
const SetupSteps = ({ StepsData = [], id }) => {
  const sanitizeHtml = useSanitizeHtml();

  return (
    <section id={id} className="st-steps py-4">
      {StepsData.map((head, hIndex) => (
        <Container key={hIndex}>
          <Row className="justify-content-center">
            <Col lg={11} xl={10} className="text-center">
              <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
            </Col>
          </Row>
          <Row className="g-3">
            {head.steps.map((step) => (
              <Col md={6} lg={3} key={step.id} className="d-flex">
                <div className="step-card d-flex flex-column w-100 h-100">
                  <span className="step-pill align-self-start">{step.step}</span>
                  <h3><span dangerouslySetInnerHTML={sanitizeHtml(step.head)} /></h3>
                  <p className={step.tag ? "flex-grow-1" : "mb-0"} dangerouslySetInnerHTML={sanitizeHtml(step.desc)} />
                  {step.tag && <span className="step-tag" dangerouslySetInnerHTML={sanitizeHtml(step.tag)} />}
                </div>
              </Col>
            ))}
          </Row>
          {head.note && (
            <div className="step-note text-center mt-4">
              <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(head.note)} />
            </div>
          )}
        </Container>
      ))}
    </section>
  );
};

export default SetupSteps;
