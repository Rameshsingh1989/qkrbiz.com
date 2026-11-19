import { Link } from 'react-router';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { Col, Container, Image, Row } from 'react-bootstrap';
import { HrPayrollFaq, HrPayrollHeadData, HrPayrollStats, HrPayrollData, ComplianceFearData, SamePlatformData, GoDeepEitherSideData, IntegratedPlatformData, PayrollCtaData, HrPayrollMeta } from './HrPayrollData';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent'
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { HrPayrollSchemaData } from './HrPayrollSchema';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import { ClientStories } from '../../../../components/ClientStories/ClientStories';
import { SamePlatform } from '../components/SamePlatform';
import StatsRow from '../../../../components/StatsRow/StatsRow';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import "./HrPayroll.scss";

const HrPayroll = () => {
    const socialImage = ImagesUrl_ogImages.QkrHr;

    return (
        <>
            <RouteSpecificMeta
            title={HrPayrollMeta.title}
            description={HrPayrollMeta.description}
            image={socialImage}
            SchemaData={HrPayrollSchemaData} 
            />
            <QkrHeroSectionRow HeroSectionData={HrPayrollHeadData} col1={12} col2={12} xl1={12} xl2={12}/>
            
            <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

            <StatsRow stats={HrPayrollStats} />

            <section className="integrated-platform">
                {IntegratedPlatformData.map((data) => (
                    <Container key={data.id}>
                    
                                <Row>
                                    <Col lg={10} className="mx-auto text-center">
                                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="integrated-platform-table">
                                            <div className="ipt-row ipt-head">
                                                <div className="ipt-cell ipt-affects">{data.columns.affects}</div>
                                                <div className="ipt-cell ipt-separate">{data.columns.separate}</div>
                                                <div className="ipt-cell ipt-integrated">{data.columns.integrated}</div>
                                            </div>
                                            {data.rows.map((row) => (
                                                <div className="ipt-row" key={row.id}>
                                                    <div className="ipt-cell ipt-affects fn-sb">{row.affects}</div>
                                                    <div className="ipt-cell ipt-separate">
                                                        <span className="ipt-icon ipt-icon-x">✕</span>
                                                        <span>{row.separate}</span>
                                                    </div>
                                                    <div className="ipt-cell ipt-integrated">
                                                        <span className="ipt-icon ipt-icon-check">✓</span>
                                                        <span>{row.integrated}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                  
                    </Container>
                ))}
            </section>

            {HrPayrollData.map((data, index) => (
                <section className="hr-payroll-structure" key={index}>
                    <Container>
                        <Row>
                            <Col lg={10} className="mx-auto text-center">
                                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                            </Col>
                        </Row>
                        <Row className={`align-items-center g-4 g-xl-5 ${index % 2 ? 'flex-lg-row-reverse' : ''}`}>
                            <Col lg={6}>
                                <ul className="icon-magenta">
                                    {data.features.map((feature) => (
                                        <li key={feature.id}>{feature.text}</li>
                                    ))}
                                </ul>
                                {data.linkUrl && (
                                    <Link to={data.linkUrl} className="salary-back-link text-magenta fn-sb">
                                        {data.linkText}
                                    </Link>
                                    )}
                            </Col>
                            <Col lg={6}>
                                <Image loading="lazy" className="img img-fluid rounded-4" src={data.imgUrl} alt={data.alt} />
                            </Col>
                        </Row>    
                    </Container>
                </section> 
            ))}

            <section className="compliance-fear">
                {ComplianceFearData.map((data) => (
                    <Container key={data.id}>

                            <Row>
                                <Col lg={10} className="mx-auto text-center">
                                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                </Col>
                            </Row>
                            <Row className="g-4">
                                {data.items.map((item) => (
                                    <Col lg={4} key={item.id}>
                                        <div className="compliance-card h-100">
                                            <Image loading="lazy" className="img img-fluid rounded-4" src={item.iconUrl} alt={item.title} />
                                            <h3 className="compliance-title">{item.title}</h3>
                                            <p className="compliance-desc">{item.description}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                    </Container>
                ))}
            </section>

            {SamePlatformData?.map((data, index) => (
                <SamePlatform key={index} data={data} />
            ))}

            <section className="go-deep-either-side">
                {GoDeepEitherSideData.map((data) => (
                    <Container key={data.id}>
     
                            <Row>
                                <Col lg={10} className="mx-auto text-center">
                                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                                </Col>
                            </Row>
                            <Row className="g-4">
                                {data.cards.map((card) => (
                                    <Col md={6} key={card.id}>
                                        <div className="go-deep-card h-100">
                                            <span className="go-deep-label">{card.label}</span>
                                            <h3 className="go-deep-title">{card.title}</h3>
                                            <p className="go-deep-desc">{card.description}</p>
                                            <div className="go-deep-tags">
                                                {card.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="go-deep-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <Link to={card.buttonUrl} className="go-deep-btn">{card.buttonText}</Link>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                    </Container>
                ))}
            </section>
            
            {/* Stories Section */}
            <ClientStories cls="" count1={3} count2={2} count3={1} />

            {HrPayrollFaq && (
                <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={HrPayrollFaq} />
            )}

            <CommonCtaSection PayrollCtaData={PayrollCtaData} /> 

        </>
    )
}
export default HrPayroll;