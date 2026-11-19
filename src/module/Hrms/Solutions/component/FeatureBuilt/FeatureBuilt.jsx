import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import SectionHeading from '../../../../../components/SectionHeading/SectionHeading';
import { Link } from 'react-router';
import useSanitizeHtml from '../../../../../hooks/useSanitizeHtml';
import "./FeatureBuilt.scss";

// Feature titles may contain inline links; alt text needs them stripped.
const stripTags = (html = "") => html.replace(/<[^>]+>/g, "");

const FeatureBuiltItem = ({ data }) => {
  const sanitizeHtml = useSanitizeHtml();
  const [activeStage, setActiveStage] = useState(0);
  const currentStage = data.stages[activeStage];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={11} xl={10} className="text-center">
          <SectionHeading subTitle={data.badge} title={data.title} description={data.desc} headingUnderLine={false} />
        </Col>
      </Row>
    <div className={currentStage.tabCls}>
      <Row className="justify-content-center">
        <Col lg={11} xl={11} xxl={10}>
          <div className="feature-built-tabs">
            {data.stages.map((stage, idx) => (
              <button
                key={idx}
                type="button"
                className={`stage-tab${activeStage === idx ? ' active' : ''}`}
                onClick={() => setActiveStage(idx)}
              >
                {stage.tabName}
              </button>
            ))}
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={12} xl={12} xxl={12}>
          <div className="feature-built-card">
            <Row className="justify-content-between">
              <Col lg={6}>
                <div className="feature-list">
                  {currentStage?.features.map((feature, fIdx) => (
                    <div className={`feature-row d-flex${feature.icon ? '' : ' align-items-center'}`} key={fIdx}>
                      {feature.icon ? (
                        <span className="feature-icon flex-shrink-0">
                          <Image src={feature.icon} alt={stripTags(feature.title)} aria-hidden="true" loading="lazy" decoding="async" />
                        </span>
                      ) : (
                        <span className="feature-check flex-shrink-0" aria-hidden="true">✓</span>
                      )}
                      <div className="flex-shrink-1 ms-3">
                        <h3 className={`feature-name ${feature.description ? 'mb-1' : 'mb-0'}`} dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                        {feature.description && (
                          <p className="feature-text mb-0" dangerouslySetInnerHTML={{__html:feature.description}} />
                        )}
                      </div>
                    </div>
                  ))}
                  {currentStage.featurelink &&(
                     <Link to={currentStage.featurelink} className="btn btn-gradient rounded-pill mt-4">{currentStage.featureText}</Link>
                  )}
                </div>
              </Col>
              <Col lg={6}>
                <div className="feature-preview">
                  {currentStage && (
                    <Image className="img-fluid" src={currentStage.imgUrl} alt={currentStage.alt || currentStage.tabName} loading="lazy" decoding="async" />
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>  

    </Container>
  );
};

const FeatureBuilt = ({ FeatureBuiltData = [] }) => {
  return (
    <section className="feature-built">
      {FeatureBuiltData.map((data, index) => (
        <FeatureBuiltItem key={index} data={data} />
      ))}
    </section>
  );
};

export default FeatureBuilt;
