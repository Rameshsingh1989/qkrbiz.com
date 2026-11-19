import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

import "./SamePlatform.scss";

export const SamePlatform = ({ data }) => {
    const [tailoredEvery, setActiveStage] = useState(0);

    const currentStage = data.stages[tailoredEvery];

    const handleStageClick = (idx) => {
        setActiveStage(idx);
    };

    // const sanitizeHtml = useSanitizeHtml();

    return (
        <section className="same-platform">
            <Container>
                <Row>
                    <Col lg={12} xxl={10} className="mx-auto text-center">
                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col lg={12} xxl={12}>
                       
                        <div className={`every-stakeholder-card ${currentStage.bgClass}`}>
                            <Row className="g-0 justify-content-center">
                                <Col lg={12} xl={10}>
                                    <div className="every-stakeholder-tabs">
                                        {data.stages.map((stage, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                className={`stage-tab ${tailoredEvery === idx ? 'active' : ''}`}
                                                onClick={() => handleStageClick(idx)}
                                            >
                                                {stage.tabName}
                                            </button>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <div className="every-stakeholder-body">
                                <Row className="g-4 align-items-stretch">
                                    <Col lg={5}>
                                        <div className="every-stakeholder-info">
                                            <h3 className="info-title">{currentStage?.title}</h3>
                                            <p>{currentStage.desc}</p>
                                            <ul className="info-features">
                                                {currentStage?.features.map((feature, fIdx) => (
                                                    <li key={fIdx}><span className="check-icon">✓</span> {feature.label}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className="every-stakeholder-preview">
                                            {currentStage && (
                                                <Image loading="lazy" className='img img-fluid' src={currentStage.imgUrl} alt={currentStage.title} />
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    
                    </Col>
                </Row>    
            </Container>
        </section>
    );
};