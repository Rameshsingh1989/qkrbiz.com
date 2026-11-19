import { Link } from 'react-router';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { PayrollFAQ, PayrollHomeData,PayrollFoundationData,FullHrmsData, PayrollNeedsData, RunPayrollData,EveryStakeholderData, BuiltAccuracyData, PayrollProblemsData , QkrPayrollHomeMeta } from './QkrPayrollHomeData';
import QkrHeroSectionRow from '../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import ClientLogoScroll from '../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../pages/Customers/CustomersAllData';
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import { QkrPayrollHomeSchema } from './QkrPayrollHomeSchema';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml';
import { ClientStories } from "../../../components/ClientStories/ClientStories";
import FaqComponent from '../../../components/FaqComponent/FaqComponent';
import PayrollFoundation from '../components/PayrollFoundation';
import EveryStakeholder from '../components/EveryStakeholder';
import RunPayrollSteps from '../components/RunPayrollSteps';
import BuiltAccuracy from '../components/BuiltAccuracy';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import BlogCard from '../../Hrms/HrmsBlogs/BlogComponent/BlogCard/BlogCard';
import { PayrollBlogCardData } from './PayrollBlogCardData';
import "./QkrPayrollHome.scss";

 const QkrPayrollHome = () => {

    const socialImage = ImagesUrl_ogImages.Payroll;
    const sanitizeHtml = useSanitizeHtml();

    return (
        <>
            <RouteSpecificMeta
            title={QkrPayrollHomeMeta.title}
            description={QkrPayrollHomeMeta.description}
            image={socialImage}
            SchemaData={QkrPayrollHomeSchema}
            />

            <QkrHeroSectionRow HeroSectionData={PayrollHomeData} headerModal={true} col1={12} col2={12} xl1={12} xl2={12} />

            <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

            <section className="payroll-problems">
                {PayrollProblemsData.map((data, index) => (
                    <Container key={index}>
                        <Row>
                            <Col lg={12} xxl={10} className="mx-auto text-center">
                                <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                            </Col>
                        </Row>
  
                        <Row className="g-4">
                            {data.problems.map((problem, pIndex) => (
                                <Col lg={problem.full ? 12 : 6} key={pIndex}>
                                    <div className={`problem-card h-100 ${problem.bGcolor}`}>
                                        <div className="problem-head">
                                            <div className="problem-icon">
                                                <img loading="lazy" src={problem.icon} alt={problem.title} />
                                            </div>
                                            <h3 className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(problem.title)} />
                                        </div>
                                        <div className="problem-content">
                                            <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(problem.description)} />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </Container>
                ))}
            </section>

            <section className="payroll-system">
                {PayrollNeedsData.map((data, index) => (
                    <Container key={index}>
                        <Row>
                            <Col lg={12} xxl={10} className="mx-auto text-center">
                                <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                            </Col>
                        </Row>

                        <Row className="g-4" key={index}>
                            {data.features.map((feature, index) => (
                                <Col lg={4} key={index}>
                                    <Card className={`h-100 ${feature.bGcolor}`}>
                                        <Card.Header>
                                            <Image loading="lazy" className='img img-fluid' src={feature.imgUrl} alt={feature.title} />
                                        </Card.Header>
                                        <Card.Body>
                                            <h3 dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                                            <p className="text-muted" dangerouslySetInnerHTML={sanitizeHtml(feature.description)} />
                                            <Link to={feature.link} className="arrow-link fn-sb">{feature.linkText}</Link>
                                            
                                        </Card.Body>    
                                    </Card>
                                </Col>
                            ))} 
                        </Row>

              
                    </Container>
                ))}     
            </section>

            <PayrollFoundation PayrollFoundationData={PayrollFoundationData} />
            
            {RunPayrollData?.map((data, index) => (
                <RunPayrollSteps  key={index} data={data} sanitizeHtml={sanitizeHtml} />
            ))}

            <BuiltAccuracy BuiltAccuracyData={BuiltAccuracyData} />

            {EveryStakeholderData?.map((data, index) => (
                <EveryStakeholder key={index} data={data} sanitizeHtml={sanitizeHtml} />
            ))}

            <section className="accurate-payroll">
                {FullHrmsData.map((data, index) => (
                    <Container key={index}>
                        <Row>
                            <Col lg={10} className="mx-auto text-center">
                                <SectionHeading subTitle={data.subtitle} title={data.title} description={data.description} headingUnderLine={false} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className="mx-auto text-center">
                                 <Image loading="lazy" className='img img-fluid' src={data.imgUrl} alt={data.subtitle} />

                            </Col>
                        </Row>
                        {/* <Row>
                            <Col lg={10} className="mx-auto text-center mt-5">
                                 <Link to="/hrms-software/hr-payroll-software" className="btn btn-magenta rounded-pill py-3 fn-2">{data.link}</Link>
                            </Col>
                        </Row> */}
                    </Container>
                ))}
            </section>
            <BlogCard BlogCardData={PayrollBlogCardData} componentSec="pb-0"/>

             {/* Stories Section */}
            <ClientStories cls="" count1={3} count2={2} count3={1} />

            {PayrollFAQ && (
                <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={PayrollFAQ} />
            )}
            
        </>
    ) 
}

export default QkrPayrollHome;