import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import './ExitTypes.scss';

const ExitTypes = ({ data }) => {
  const [activeId, setActiveId] = useState(data.types[0].id);

  return (
    <section className="exit-types py-5">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
          </Col>
        </Row>

        <Row className="g-3 justify-content-center">
          {data.types.map((type) => {
            const isOpen = type.id === activeId;
            return (
              <div key={type.id} className={`col-12 ${isOpen ? 'col-lg-9' : 'col-lg-3'}`}>
                <div className={`h-100 border-magenta rounded-4 ${isOpen ? 'bg-magenta-light' : 'bg-white border'}`}>
                  <button
                    type="button"
                    className={`exit-type-tab btn w-100 h-100 fs-3 fw-semibold ${isOpen ? 'd-none' : 'd-flex'} align-items-center justify-content-start justify-content-lg-center px-4 py-3`}
                    onClick={() => setActiveId(type.id)}
                    aria-expanded={isOpen}
                    aria-controls={`exit-type-${type.id}`}
                  >
                    <span>{type.title}</span>
                  </button>

                  <div className={`${isOpen ? '' : 'd-none'} p-4 p-lg-5`} id={`exit-type-${type.id}`}>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                      <h3 className="mb-0">{type.title}</h3>
                      <span className="badge rounded-pill bg-white text-magenta fw-normal fs-6 px-3 py-2">{type.badge}</span>
                    </div>
                    <p className="fs-5 text-secondary mb-4">{type.description}</p>
                    <Row as="ol" className="list-unstyled g-3 mb-0">
                      {type.steps.map((step) => (
                        <Col as="li" sm={4} key={step.id}>
                          <div className="h-100 bg-white border rounded-3 p-3">
                            <span className="badge rounded-pill bg-magenta fs-6 mb-3">{step.id}</span>
                            <strong className="d-block fw-semibold">{step.title}</strong>
                            <small className="text-secondary">{step.text}</small>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ExitTypes;
