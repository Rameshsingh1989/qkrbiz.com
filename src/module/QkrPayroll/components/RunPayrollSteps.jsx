import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const RunPayrollSteps = ({ data, index }) => {


    const [activeStage, setActiveStage] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);

    const currentStage = data.stages[activeStage];
    const currentFeature = currentStage?.features[activeFeature];

    const handleStageClick = (idx) => {
        setActiveStage(idx);
        setActiveFeature(0);
    };

    return (
        <section className="run-payroll">
            <Container>
                <Row>
                    <Col lg={10} className="mx-auto text-center">
                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </Col>
                </Row>
      
                <Row>
                    <Col lg={12}>
                        <div className="run-payroll-card">
                            <div className="run-payroll-tabs">
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
                            <div className="run-payroll-body">
                                <Row className="g-4 align-items-stretch">
                                    <Col lg={4}>
                                        <div className="run-payroll-info">
                                            <h3 className="info-title">{currentStage?.title}</h3>
                                            <ul className="info-features">
                                                {currentStage?.features.map((feature, fIdx) => (
                                                    <li key={fIdx}>{feature.label}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={8}>
                                        <div className="run-payroll-preview">
                                            {currentStage && (
                                                <Image loading="lazy" className='img img-fluid' src={currentStage.imgUrl} alt={currentStage.alt} />
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

export default RunPayrollSteps;