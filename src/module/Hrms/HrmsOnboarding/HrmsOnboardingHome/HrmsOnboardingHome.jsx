import { Fragment, useEffect } from 'react';
import { Link } from 'react-router';
import { Col, Container, Image, Row } from 'react-bootstrap';
import QkrHeroSection from '../../../../components/QkrHeroSection/QkrHeroSection';
import { OnboardingData, OnboardingFaqData, OnboardingHeadData, PerfectOnboardingData, QkrHROnboardingData, WelcomeNewEmployeesData , HrmsOnboardingHomeMeta } from './HrmsOnboardingData';
import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import { HrmsOnboardingSchemaData } from './HrmsOnboardingSchemaData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

import "./HrmsOnboardingHome.scss"

 const HrmsOnboardingHome = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;

   const sanitizeHtml = useSanitizeHtml();

  useEffect(()=>{
    const coreNewArr = [...OnboardingData];
       coreNewArr.splice(4, 0, 'OnboardingData');
     // console.log('dfddf', coreNewArr)
   },[])

  return (
      <>
        <RouteSpecificMeta
        title={HrmsOnboardingHomeMeta.title}
        description={HrmsOnboardingHomeMeta.description}
        image={socialImage}
        SchemaData={HrmsOnboardingSchemaData}/>
        <QkrHeroSection HeroSectionData={OnboardingHeadData} col1={5} col2={6} xl1={5} xl2={6}/>

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

       <div className="onboarding-section">
          <Container>
            <SectionHeading subTitle="" title='Everything You Need for <span class="text-gradient">Perfect Onboarding</span>' description={`With QkrHR, onboarding isn't just a process — it's a powerful first experience that's fast, friendly, and fully digital.`} headingUnderLine={false} /> 
            <Row className="g-lg-5">
              {PerfectOnboardingData.map((textIcon, index) => (
                <Col lg={2} md={4} sm={6} key={index}>
                  <div className="feature-item text-center">
                     {index !== PerfectOnboardingData.length - 1 && <div className="divider"></div>}
                    <div className={`icon-circle ${textIcon.key}`}>
                      <Image loading="lazy" fluid src={textIcon.icon} alt={textIcon.title} />
                    </div>
                    <h3 className="feature-title mt-3" dangerouslySetInnerHTML={sanitizeHtml(textIcon.title)} />
                    <p className="feature-description" dangerouslySetInnerHTML={sanitizeHtml(textIcon.description)} />
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="text-center mt-4">
              <Col lg={12}>
                  <Link to="/signup" className="btn btn-gradient">Start Your Perfect Onboarding Journey</Link>
              </Col>
            </Row>
          </Container>
        </div>

        {OnboardingData.map((edata, eIndex) => (
          <Fragment key={eIndex}>
              {eIndex % 2 !== 0 ? (
                    <section className="wrapper-area">
                        <Container>
                            <Row className="justify-content-between align-items-center">
                                <Col lg={5}>
                                   <SectionHeading subTitle="" title={edata.title} description={edata.descs} subTitleCenter={false} headingUnderLine={false} /> 

                                   {edata?.List && (
                                        <ul className="list-unstyled icon-left icon-blue-list">
                                          {edata.List.map((item, index) => (
                                            <li key={index} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                                          ))}
                                      </ul>
                                    )}
                                </Col>
                                <Col lg={6}>
                                    <img loading="lazy" className="img-fluid mt-1-xs" src={edata.imgUrl} alt={edata.title} />

                                </Col>
                            </Row>
                        </Container>
                    </section>
                ) : (
                  <>
                  {eIndex === 4 && 
                    <div className="clients-say">
                      <div className="container">
                        {ClientReviewData.map((client, clIndex) => (
                          <Fragment key={clIndex}>
                            {client.id === 1 && 
                              <div className="row justify-content-between clients-sayInner">
                                <div className="col-lg-3">
                                  <div className="clint-img">
                                    <img loading="lazy" src={client.imgUrl} className="img-fluid" alt={client.title} />
                                  </div>
                                </div>
                                <div className="col-lg-8">
                                  <p className="quote-right left" dangerouslySetInnerHTML={sanitizeHtml(client.desc)} />
                                  <div className="d-flex">
                                    <div className="flex-shrink-0 left-border"></div>
                                    <div className="flex-grow-1">
                                      <h3 className="text-title" dangerouslySetInnerHTML={sanitizeHtml(client.title)} />
                                      <p className="text-violet" dangerouslySetInnerHTML={sanitizeHtml(client.subTitle)} />
                                    </div>
                                  </div>
                                
                                </div>
                              </div>
                            }	
                            </Fragment>
                        ))}
                      </div>
                    </div>
                  }
                  <section className="wrapper-area">
                    <Container>
                      <Row className="justify-content-between align-items-center">
                          <Col lg={6} className="order-m-1">
                           <img loading="lazy" className="img-fluid mt-1-xs" src={edata.imgUrl} alt={edata.title} />
                                  
                          </Col>
                          <Col lg={5} className="order-m-0">
                              <SectionHeading subTitle="" title={edata.title} description={edata.descs} subTitleCenter={false} headingUnderLine={false} /> 
                              {edata?.List && (
                                  <ul className="list-unstyled icon-left icon-blue-list">
                                    {edata.List.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                </ul>
                              )}
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </> 
                )
              }
          </Fragment>	
        ))}

        <div className="onboarding-Features">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} xl={12} xxl={11}>
                        {QkrHROnboardingData.map((fText, fIndex) => (
                            <Fragment key={fIndex}>
                                <SectionHeading subTitle="" title={fText.title} description="" headingUnderLine={false} /> 
                                <Row>
                                    {fText.AllClients.map((list, index) => (
                                        <Col lg={4} key={index} className='mb-4'>
                                            <div className="card h-100">
                                                <div className="card-body" dangerouslySetInnerHTML={sanitizeHtml(list.title)}></div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Fragment>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="hr-operations">
            <Container>
                {WelcomeNewEmployeesData.map((empText, eIndex) => (
                    <Row className="justify-content-justify align-items-center" key={eIndex}>
                        <Col lg={6} xl={6} className='order-lg-1 order-2'>
                            <Image loading="lazy" fluid src={empText.imgUrl} alt="eady to Transform Your HR Operations" />
                        </Col>
                        <Col lg={6} xl={6} className="pt-5 pt-lg-0 pb-3 pb-lg-0 mb-2 order-lg-2 order-1">
                            <SectionHeading subTitle="" title={empText.title} description={empText.desc} subTitleCenter={false} headingUnderLine={false} /> 
                            <Link to="/signup" className="btn btn-gradient rounded-pill fn-3">Schedule a Free Demo</Link>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>

        {OnboardingFaqData && (
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={OnboardingFaqData} />
        )}
      
    </>
  )
}
export default HrmsOnboardingHome;