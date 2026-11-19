import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./EveryStakeholder.scss";

const EveryStakeholder = ({ data }) => {

    const [activeStage, setActiveStage] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);

    const currentStage = data.stages[activeStage];
    const currentFeature = currentStage?.features[activeFeature];

    const handleStageClick = (idx) => {
        setActiveStage(idx);
        setActiveFeature(0);
    };

    return (
        <section className="every-stakeholder">
            <Container>
                <Row>
                    <Col lg={10} className="mx-auto text-center">
                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </Col>
                </Row>

  
                <div className={`every-stakeholder-card ${currentStage.bgClass}`}>
                    <Row className="g-0 justify-content-center">
                        <Col lg={12} xl={11}>
                            <div className="every-stakeholder-tabs">
                                {data.stages.map((stage, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`stage-tab ${activeStage === idx ? 'active' : ''}`}
                                        onClick={() => handleStageClick(idx)}
                                    >
                                        {stage.tabName}
                                    </button>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <div className="every-stakeholder-body">
                        <Row className="g-1 align-items-stretch">
                            <Col lg={4}>
                                <div className="every-stakeholder-info">
                                    <ul className="info-features">
                                        {currentStage?.features.map((feature, fIdx) => (
                                            <li key={fIdx}>{feature.label}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="every-stakeholder-preview">
                                    {currentStage && (
                                        <Image loading="lazy" className='img img-fluid' src={currentStage.imgUrl} alt={currentStage.tabName} />
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </Container>
        </section>
    );
};
export default EveryStakeholder;