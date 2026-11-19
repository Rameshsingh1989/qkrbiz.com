import { Link } from 'react-router';
import { Col, Container, Image, Row } from 'react-bootstrap';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import ExitTypes from '../components/ExitTypes';
import {
    OffboardingHeadData, OffboardingCoversData, ExitTypesData, OffboardingFeatureData,
    WageDeadlineData, WhyQkrhrData, OffboardingCtaData, OffboardingFaq,
 EmployeeOffboardingHomeMeta } from './EmployeeOffboardingData';
import { EmployeeOffboardingSchemaData} from './EmployeeOffboardingSchema';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import "./EmployeeOffboarding.scss";

const EmployeeOffboarding = () => {

    const sanitizeHtml = useSanitizeHtml();

    return (
        <div className="employee-offboarding">
        <RouteSpecificMeta
        title={EmployeeOffboardingHomeMeta.title}
        description={EmployeeOffboardingHomeMeta.description}
        image={ImagesUrl_ogImages.QkrHr}
        SchemaData={EmployeeOffboardingSchemaData}
        />
          <QkrHeroSectionRow HeroSectionData={OffboardingHeadData} col1={12} col2={12} xl1={12} xl2={12} />

            {/* What offboarding covers */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <SectionHeading subTitle={OffboardingCoversData.subTitle} title={OffboardingCoversData.title} description={OffboardingCoversData.description} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {OffboardingCoversData.items.map((item) => (
                            <Col md={6} lg={4} key={item.id}>
                                <div className="h-100 border rounded-4 p-4">
                                    <img className="icon-size-md" src={item.icon} alt={`${item.title.replace(/&amp;/g, "&")} icon`} loading="lazy" />
                                    <h3 className="mt-3 mb-2" dangerouslySetInnerHTML={sanitizeHtml(item.title)} />
                                    <p className="text-secondary mb-0">{item.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <ExitTypes data={ExitTypesData} />

            {/* Feature rows: text and screenshot alternate sides */}
            {OffboardingFeatureData.map((row, index) => (
                <section className="offboarding-feature" id={row.id} key={row.id}>
                    <Container>
                        <Row className={`align-items-center g-4 g-xl-5 ${index % 2 ? 'flex-lg-row-reverse' : ''}`}>
                            <Col lg={6}>
                                <h2 className="fs-2 fw-semibold mb-4">{row.title}</h2>
                                <p className="fs-5 mb-3" dangerouslySetInnerHTML={sanitizeHtml(row.description)} />
                                <ul className="icon-magenta">
                                    {row.points.map((point, pIndex) => (
                                        <li key={pIndex} dangerouslySetInnerHTML={sanitizeHtml(point)} />
                                    ))}
                                </ul>
                                {row.linkUrl && (
                                    <Link to={row.linkUrl} className="btn btn-gradient px-4 py-2 mt-2 fw-semibold">{row.linkText}</Link>
                                )}
                            </Col>
                            <Col lg={6}>
                                <Image loading="lazy" fluid className="rounded-4" src={row.imgUrl} alt={row.alt} width="828" height="580" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            ))}

            {/* Code on Wages deadline */}
            <section className="bg-light py-5 mt-4">
                <Container>
                    <Row className="align-items-center g-4 justify-content-center">
                        <Col lg={4} className="text-center text-lg-end">
                            <p className="display-4 fw-semibold mb-0">{WageDeadlineData.stat}</p>
                        </Col>
                        <Col lg={6}>
                            <h2 className="fs-3 fw-semibold mb-3">{WageDeadlineData.title}</h2>
                            <p className="text-secondary mb-3">{WageDeadlineData.description}</p>
                            <Link to={WageDeadlineData.linkUrl} className="btn btn-gradient fw-semibold">{WageDeadlineData.linkText}</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why HR teams run exits on QkrHR */}
            <section className="py-5">
                <Container>
                    <SectionHeading title={WhyQkrhrData.title} headingUnderLine={false} />
                    <Row className="g-4 g-xl-5">
                        {WhyQkrhrData.items.map((item) => (
                            <Col md={6} key={item.id}>
                                <div className="d-flex gap-3 align-items-start">
                                    <span className="flex-shrink-0">
                                        <img className="icon-size-md" src={item.icon} alt={item.title} loading="lazy" />
                                    </span>
                                    <div className="flex-grow-1">
                                        <h3 className="mb-2">{item.title}</h3>
                                        <p className="mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <CommonCtaSection PayrollCtaData={OffboardingCtaData} />

            <div className="pt-5">
                <FaqComponent
                    subTitle="Customer Outcomes"
                    title="<span class='text-gradient'>Employee Offboarding Software:</span><br/>Frequently Asked Questions"
                    FaqData={OffboardingFaq}
                />
            </div>
        </div>
    );
};

export default EmployeeOffboarding;
