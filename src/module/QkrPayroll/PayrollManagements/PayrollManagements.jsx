import { Fragment } from 'react';
import { Link } from 'react-router';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PayrollManagementFaq, PayrollManagementHeadData, PayrollManagementStats, PayrollStagesData, PayrollManagementData, ComplianceFearData, FinanceAuditorsData, TailoredEveryData, PayrollCtaData, PayrollManagementsMeta } from './PayrollManagementsData';
import QkrHeroSectionRow from '../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import ClientLogoScroll from '../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../pages/Customers/CustomersAllData';
import FaqComponent from '../../../components/FaqComponent/FaqComponent'
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml';
import { PayrollManagementSchemaData } from './PayrollManagementSchema';
import CommonCtaSection from '../../../components/CommonCtaSection/CommonCtaSection';
import { ClientStories } from '../../../components/ClientStories/ClientStories';
import TailoredEvery from '../components/TailoredEvery';
import StatsRow from '../../../components/StatsRow/StatsRow';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

import "./PayrollManagements.scss";

const PayrollManagements = () => {
    
    const socialImage = ImagesUrl_ogImages.Payroll;
  
    const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
        title={PayrollManagementsMeta.title}
        description={PayrollManagementsMeta.description}
        image={socialImage}
        SchemaData={PayrollManagementSchemaData} 
        />
        <QkrHeroSectionRow HeroSectionData={PayrollManagementHeadData} headerModal={true} col1={12} col2={12} xl1={12} xl2={12} />

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <StatsRow stats={PayrollManagementStats} />

        <section className="payroll-stages">
            {PayrollStagesData.map((data) => (
                <Container key={data.id}>

                <Row>
                    <Col lg={12} xxl={10} className="mx-auto text-center">
                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </Col>
                </Row>
                <Row className="g-4">
                    {data.stages.map((stage) => (
                        <Col md={6} lg={4} key={stage.id}>
                            <div className="stage-card h-100">
                                <span className="stage-badge">{stage.badge}</span>
                                <h3 className="stage-title">{stage.title}</h3>
                                <p className="stage-desc text-muted mb-0">{stage.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
 
                    
                </Container>
            ))}
        </section>

        {PayrollManagementData.map((data, index) => (
            <Fragment key={index}>
                {index % 2 === 0 ? (
                    <section className="payrol-management-stucture" key={index}>
                        <Container key={data.id}>
                            <Row>
                                <Col lg={12} xxl={10}  className="mx-auto text-center">
                                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                </Col>
                            </Row>
                            <Row className="justify-content-between align-items-center g-4">
                                <Col lg={5}>
                                    <ul className="ul-icon">
                                        {data.features.map((feature) => (
                                            <li className="tick-icon-magenta" key={feature.id}>{feature.text}</li>
                                        ))}
                                    </ul>
                                    {data.linkUrl && (
                                        <Link to={data.linkUrl} className="salary-back-link text-magenta fn-sb">
                                            {data.linkText}
                                        </Link>
                                        )}
                                </Col>
                                <Col lg={7}>
                                    <Image loading="lazy" className='img img-fluid' src={data.imgUrl} alt={data.alt} />
                                </Col>
                            </Row>
   
                        </Container>
                    </section>  
                ):(
                    <section className="payrol-management-stucture" key={index}>
                            <Container key={data.id}>

                                <Row>
                                    <Col lg={12} xxl={10} className="mx-auto text-center">
                                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                    </Col>
                                </Row>
                                <Row className="justify-content-between align-items-center g-4">
                                    <Col lg={7}>
                                        <Image loading="lazy" className='img img-fluid' src={data.imgUrl} alt={data.alt} />
                                    </Col>
                                    <Col lg={5}>
                                        <ul className="ul-icon">
                                            {data.features.map((feature) => (
                                                <li className="tick-icon-magenta" key={feature.id}>{feature.text}</li>
                                            ))}
                                        </ul>
                                        {data.linkUrl && (
                                            <Link to={data.linkUrl} className="salary-back-link text-magenta fn-sb">
                                                {data.linkText}
                                            </Link>
                                        )}
                                    </Col>
                                </Row>

                            </Container>
                    </section> 
                )}
            </Fragment>	
        ))}

        <section className="compliance-fear">
            {ComplianceFearData.map((data) => (
                <Container key={data.id}>

                    <Row>
                        <Col lg={12} xxl={10} className="mx-auto text-center">
                            <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {data.items.map((item) => (
                            <Col lg={4} key={item.id}>
                                <div className="compliance-card h-100">
                                    <span className="compliance-tag">{item.tag}</span>
                                    <h3 className="compliance-title">{item.title}</h3>
                                    <p className="compliance-detail">{item.detail}</p>
                                    <p className="compliance-desc">{item.description}</p>
                                    <span className="compliance-action">
                                        <span className="check-icon">✓</span> {item.action}
                                    </span>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Container>
            ))}
        </section>

         <section className="finance-auditors">
            {FinanceAuditorsData.map((data) => (
                <Container key={data.id}>

                    <Row>
                        <Col lg={12} xxl={10} className="mx-auto text-center">
                             <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {data.stages.map((stage) => (
                            <Col md={6} lg={4} key={stage.id}>
                                <div className="stage-card h-100">
                                    <Image loading="lazy" className='img img-fluid' src={stage.iconIrl} alt={stage.title} />
                                    <h3 className="stage-title mt-4">{stage.title}</h3>
                                    <p className="stage-desc text-muted mb-4">{stage.description}</p>
                                    <span className="stage-badge">{stage.badge}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Container>
            ))}
        </section>

        {TailoredEveryData?.map((data, index) => (
            <TailoredEvery key={index} data={data} sectionCls="tailored-every" />
        ))}
        {/* Stories Section */}
         <ClientStories cls="" count1={3} count2={2} count3={1} />

        {PayrollManagementFaq && (
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={PayrollManagementFaq} />
        )}

        <CommonCtaSection PayrollCtaData={PayrollCtaData} />

    </>
  )
}

export default PayrollManagements;