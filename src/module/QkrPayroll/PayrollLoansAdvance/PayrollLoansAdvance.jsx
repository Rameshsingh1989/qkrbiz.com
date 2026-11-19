import { Fragment} from 'react';
import { Link } from 'react-router';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { PayrollLoansAdvanceFaq, PayrollManagementHeadData, ComplianceStagesData, PayrollLoansAdvanceData, ComplianceCalendarData, PayrollCtaData, GratuityBonuseData, FinanceReportsData, TailoredEveryData, PayrollLoansAdvanceMeta } from './PayrollLoansAdvanceData';
import QkrHeroSectionRow from '../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import ClientLogoScroll from '../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../pages/Customers/CustomersAllData';
import FaqComponent from '../../../components/FaqComponent/FaqComponent'
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml';
import { PayrollLoansAdvanceSchema } from './PayrollLoansAdvanceSchema';
import CommonCtaSection from '../../../components/CommonCtaSection/CommonCtaSection';
import { ClientStories } from '../../../components/ClientStories/ClientStories';
import TailoredEvery from '../components/TailoredEvery';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

import "./PayrollLoansAdvance.scss";

const PayrollLoansAdvance = () => {
    
    const socialImage = ImagesUrl_ogImages.Payroll;
  
    const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
        title={PayrollLoansAdvanceMeta.title}
        description={PayrollLoansAdvanceMeta.description}
        image={socialImage}
        SchemaData={PayrollLoansAdvanceSchema} 
        />
        <QkrHeroSectionRow HeroSectionData={PayrollManagementHeadData} headerModal={true} col1={12} col2={12} xl1={12} xl2={12} />
        
        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <Container className="py-4">
            <Row>
                <Col lg={12}  xxl={12} className="mx-auto text-center">
                 <SectionHeading subTitle="" title="What Is Employee Loan Management in Payroll Software?" description="Employee loan management in payroll software is a system that handles the complete lifecycle of employee loans and advances — from policy setup and self
service requests to approval workflows, payroll-integrated disbursement, and automatic EMI deductions each pay cycle. Instead of managing loans in 
spreadsheets and manually adjusting salaries, a payroll-integrated loan system like QkrPayroll connects loans directly to payroll — so EMIs are deducted 
automatically, balances update in real time, and every loan appears cleanly on the employee's payslip without any monthly HR intervention." headingUnderLine={false} />
            </Col>
            </Row>
        </Container>

        <section className="four-steps">
            {ComplianceStagesData.map((data) => (
                <Container key={data.id}>

                    <Row>
                        <Col lg={12}  xxl={10} className="mx-auto text-center">
                            <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {data.stages.map((stage) => (
                            <Col md={6} lg={3} key={stage.id}>
                                <div className={`stage-card h-100 ${stage.bgCls}`}>
                                    <span className={`stage-badge`}>{stage.badge}</span>
                                    <h3 className="stage-title">{stage.title}</h3>
                                    <p className="stage-desc text-muted mb-0">{stage.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    
                </Container>
            ))}
        </section>

        {PayrollLoansAdvanceData.map((data, index) => (
            <Fragment key={index}>
                {index % 2 === 0 ? (
                    <section className={`payrol-management-stucture ${index % 2 !== 0 ? 'light-magenta' : ''}`} key={index}>
                            <Container key={data.id}>
                                <Row>
                                    <Col lg={12}  xxl={10} className="mx-auto text-center">
                                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                    </Col>
                                </Row>
                                <Row className="justify-content-between align-items-center g-4">
                                    <Col lg={6}>
                                            <ul className="ul-icon">
                                                {data.features.map((feature) => (
                                                    <li className="tick-icon-magenta" key={feature.id} dangerouslySetInnerHTML={sanitizeHtml(feature.text)} />
                                                ))}
                                            </ul>
                                            {data.linkUrl && (
                                                <Link to={data.linkUrl} className="salary-back-link text-magenta fn-sb">
                                                    {data.linkText}
                                                </Link>
                                            )}
                                    </Col>
                                    <Col lg={6}>
                                        <Image loading="lazy" className='img img-fluid' src={data.imgUrl} alt={data.alt} />
                                    </Col>
                                </Row>
                            </Container>
                    </section>  
                ):(
                    <section className={`payrol-management-stucture ${index % 2 !== 0 ? 'light-magenta' : ''}`} key={index}>
                            <Container key={data.id}>

                                <Row>
                                    <Col lg={12}  xxl={10} className="mx-auto text-center">
                                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                    </Col>
                                </Row>
                                    <Row className="justify-content-between align-items-center g-4">
                                    <Col lg={6}>
                                        <Image loading="lazy" className='img img-fluid' src={data.imgUrl} alt={data.alt} />
                                    </Col>
                                    <Col lg={6}>
                                        <ul className="ul-icon">
                                            {data.features.map((feature) => (
                                                <li className="tick-icon-magenta" key={feature.id} dangerouslySetInnerHTML={sanitizeHtml(feature.text)} />
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

       <section className="gratuity-bonus-section py-5">
            {GratuityBonuseData.map((data, index) => (
                <Container key={index}>
                    <Row>
                    <Col lg={12}  xxl={10} className="mx-auto">
                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </Col>
                    </Row>
                    <Row className="g-4">
                        {data.feature.map((item, index) => (
                            <Col lg={6} key={index}>
                                <Card className={`h-100 feature-card ${item.cls}`} key={item.title}>
                                    <Card.Body>
                                    <Image loading="lazy" className='img img-fluid' src={item.icon} alt={item.alt} />
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <h4 className='mb-0'>{item.exampleLabel}</h4>
                                    <ul className="feature-list">
                                        {item.list.map((listItem, index) => (
                                        <li key={index}><span className="check-icon">✓</span> {listItem.text}</li>
                                        ))}
                                    </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ))}
        </section>

        <section className="compliance-calendar">
            {ComplianceCalendarData.map((data) => (
                <Container key={data.id}>

                    <Row>
                        <Col lg={12}  xxl={10} className="mx-auto text-center">
                            <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {data.items.map((item) => (
                            <Col lg={3} key={item.id}>
                                <div className={`compliance-card h-100 ${item.class}`}>
                                    <Image loading="lazy" className='img img-fluid compliance-tag' src={item.iconIrl} alt={item.title} />
                                    <h3 className="compliance-title">{item.title}</h3>
                                    <p className="compliance-desc">{item.description}</p>
                                    <span className="compliance-action">
                                        {item.pill}
                                    </span>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Container>
            ))}
        </section>

         <section className="loan-reports">
            {FinanceReportsData.map((data) => (
                <Container key={data.id}>

                    <Row>
                        <Col lg={10} className="mx-auto text-center">
                            <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {data.stages.map((stage) => (
                            <Col md={6} lg={4} key={stage.id}>
                                <div className={`stage-card h-100`}>
                                    <Image loading="lazy" className='img img-fluid' src={stage.iconIrl} alt={stage.title} />
                                    <h3 className="stage-title mt-4">{stage.title}</h3>
                                    <p className="stage-desc mb-4">{stage.description}</p>
                                    <span className="stage-badge">{stage.badge}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Container>
            ))}
        </section>

        {TailoredEveryData?.map((data, index) => (
            <TailoredEvery key={index} data={data}  sectionCls="role-based-experience" />
        ))}

        {/* Stories Section */}
        <ClientStories cls="" count1={3} count2={2} count3={1} />

        {PayrollLoansAdvanceFaq && (
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={PayrollLoansAdvanceFaq} />
        )}

        <CommonCtaSection PayrollCtaData={PayrollCtaData} />

    </>
  )
}

export default PayrollLoansAdvance;