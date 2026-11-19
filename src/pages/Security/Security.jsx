import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { SecuritiesData , SecurityMeta } from './SecuritiesData';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import securitySchemaData from './securitySchemaData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

import './Security.scss';

const Security = () => {

    const socialImage = ImagesUrl_ogImages.DataSecurity;
    const sanitizeHtml = useSanitizeHtml();

    return (

        <>
            <RouteSpecificMeta
            title={SecurityMeta.title}
            description={SecurityMeta.description}
            image={socialImage}
            SchemaData={securitySchemaData}
            />
            <section className="window-top-banner bg-magenta-light">
                <Container>
                    <Row className="justify-content-center align-items-center text-center mb-4">
                        <Col lg={12} xl={11} xxl={10}>
                            <h1 className="header-title">Security & Data Protection</h1>
                            <p className="header-text mb-4">Your data is hosted in world-class CtrlS Datacenters, safeguarded with enterprise-grade measures.</p>
                            <span className="bg-white p-2 px-3 radius-2"><FaShieldAlt className='text-magenta'/> Hosted on CtrlS Datacenters (India)</span>
                        </Col>
                    </Row>
                </Container>
            </section>

            {SecuritiesData.map((header, sIndex) => (
                <div className="security-page" key={sIndex}>
                    <Container>
                            <Row className="justify-content-center align-items-center text-center mt-5 mb-2">
                                <Col lg={12} xl={11} xxl={10}>
                                    <p className='fn-3' dangerouslySetInnerHTML={sanitizeHtml(header.description)}></p>
                                </Col>
                            </Row>
                            <Row className="justify-content-center align-items-center">
                                <Col lg={12} xl={12} xxl={12}>
                                        <Row>
                                            {header.features.map((items, index) => (
                                                <Col md={6} lg={4} className="d-flex flex-column" key={index}>
                                                    <Card className={`h-100 `}>
                                                        <Card.Body>
                                                            <Image loading="lazy" className="icons" src={items.imgUrls} alt={items.title} />
                                                            <h3 dangerouslySetInnerHTML={sanitizeHtml(items.title)}></h3>
                                                            <p className='mb-0' dangerouslySetInnerHTML={sanitizeHtml(items.description)}></p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                            </Row>
                    </Container>
                </div>
            ))}

            <Container className='mb-4'>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={12} xl={12} xxl={12} className='bg-magenta-light p-4 radius-2 '>
                               <SectionHeading subTitle="" title="Compliance & Certifications" description='We can provide our security overview and relevant CtrlS facility certificates upon request (under NDA).' subTitleCenter={false} headingUnderLine={false} /> 
                        </Col>
                    </Row>
                
            </Container>
            <Container>
                    <Row className="justify-content-center align-items-center text-center mt-2 mb-4">
                        <Col lg={12} xl={12} xxl={12} className='bg-magenta-light p-4 radius-1 '>
                                 <span className='mr-2 fn-2'><FaCheckCircle className='text-magenta'/> Hosted in CtrlS Datacenters</span>
                                 <span className='mr-2 fn-2'><FaCheckCircle className='text-magenta'/> AES-256 Encryption</span>
                                 <span className='mr-2 fn-2'><FaCheckCircle className='text-magenta'/> ATLS 1.2+ Secure</span>
                                 <span className='mr-2 fn-2'><FaCheckCircle className='text-magenta'/> 24×7 Monitoring</span>
                        </Col>
                    </Row>
                
            </Container>


        </>
    )
}
export default Security;