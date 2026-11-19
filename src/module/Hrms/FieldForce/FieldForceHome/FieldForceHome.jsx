import { Fragment, useEffect } from 'react';
import { Link } from 'react-router';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { FieldForceHeadeData, FieldForceData , FieldForceHomeMeta } from './FieldForceData';
import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
import { hrmsMobileScrData } from "../../QkrhrHome/QkrhrHomeData";
import { Col, Container, Image, Row } from 'react-bootstrap';
import QkrHeroSection from '../../../../components/QkrHeroSection/QkrHeroSection';
import VideoWindowPlay from '../../../../components/Video/VideoWindowPlay';
import VideoAutoPlay from '../../../../components/Video/VideoAutoPlay';
import FieldForceRequestForm from '../../../../components/RequestForm/FieldForceRequestForm';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '@/assets/images';
import { fieldForceSchemaData } from './FieldForceSchemaData';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

import "./FieldForceHome.scss"

const FieldForceHome = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();

  useEffect(() => {
    const fieldNewArr = [...FieldForceData];
    fieldNewArr.splice(3, 0, 'clientDataFeild');
    //console.log('ffffffffff', fieldNewArr);
  }, []);

  return (
    <>
      <RouteSpecificMeta
      title={FieldForceHomeMeta.title}
      description={FieldForceHomeMeta.description}
      image={socialImage}
      SchemaData={fieldForceSchemaData} 
      />
      <QkrHeroSection HeroSectionData={FieldForceHeadeData} col1={5} col2={6} xl1={5} xl2={6} />
      
      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      {FieldForceData.map((fdata, fIndex) => (
           <Fragment key={fIndex}>
              {fIndex % 2 !== 0 ? (
                  <>
                   {(fIndex === 3 && 
                        <div className="clients-say">
                            <Container>
                                {ClientReviewData.map((client, clIndex) => (
                                    <Fragment key={clIndex}>
                                        {client.id === 1 && 
                                            <Row className="justify-content-between clients-sayInner">
                                              <Col lg={3}>
                                                <div className="clint-img">
                                                  <img loading="lazy" src={client.imgUrl} className="img-fluid" alt={client.title} />
                                                </div>
                                              </Col>
                                              <Col lg={8}>
                                                <p className="quote-right left" dangerouslySetInnerHTML={sanitizeHtml(client.desc)} />
                                                <div className="d-flex">
                                                  <div className="flex-shrink-0 left-border"></div>
                                                  <div className="flex-grow-1">
                                                  <h3 className="text-title" dangerouslySetInnerHTML={sanitizeHtml(client.title)} />
                                                  <p className="text-violet" dangerouslySetInnerHTML={sanitizeHtml(client.subTitle)} />
                                                  </div>
                                                </div>
                                              </Col>
                                            </Row>
                                        }	
                                    </Fragment>
                                ))}
                            </Container>
                        </div>
                    )}
                    <section className="wrapper-area">
                      <Container>
                        <Row className="justify-content-between align-items-center">
                          <Col lg={5}>
                              <SectionHeading subTitle="" title={fdata.title} description={fdata.desc} subTitleCenter={false} headingUnderLine={false} /> 
                              {fIndex === fdata.List.length - 1 && (
                                <h3 className='fn-3 mb-2'>Why It’s a Game-Changer:</h3>
                              )}
                              {fdata?.List && (
                                <ul className="list-unstyled icon-left icon-black-list">
                                    {fdata.List.map((list, index) => (
                                        <li key={index} dangerouslySetInnerHTML={sanitizeHtml(list)} />
                                  ))}
                                </ul>
                              )} 
                              {fdata.id === 2 && 
                                <Link to="/hrms-software/hr-payroll-software" className="btn btn-gradient mt-3">Explore Payroll</Link>
                              }
                              {/* {fdata?.List && (
                                <Fragment>
                                    <Row>
                                      <Col lg={12} xxl={9}>
                                        <Card className='mt-2 border-0 box-shadow-info rounded-3'>
                                            <Card.Body>
                                              {fIndex === fdata.List.length - 1 && (
                                                <h3 className='fn-3 mb-2'>Why It’s a Game-Changer:</h3>
                                              )}
                                              <ul className="list-unstyled icon-left icon-black-list">
                                                  {fdata.List.map((list, index) => (
                                                      <li key={index}>{list}</li>
                                                ))}
                                              </ul>
                                            </Card.Body>
                                        </Card>
                                      </Col>
                                    </Row>
                                </Fragment>
                              )} */}
                          </Col>
                          <Col lg={6}>
                              {fdata.videoUrl ? (
                                fdata.videoAuto === true ? (
                                  <VideoAutoPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} videoShadow="" radius=""/> 
                                ):(
                                  <VideoWindowPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} videoShadow="" radius=""/>
                                )
                              ) : (
                                <Image loading="lazy" fluid className="mt-1-xs" src={fdata.imgUrl} alt="Live Team Location" />
                              )}
                          </Col>
                        </Row>
                      </Container>
                    </section>
                   
                  </>
                ) : (
                  <>
                    <section className="wrapper-area">
                      <Container>
                        <Row className="justify-content-between align-items-center">
                            <Col className="order-m-1" lg={fdata.id === 3 ? '4 p-right-lg-5' :  '6'} >
                                {fdata.videoUrl ? (
                                  fdata.videoAuto === true ? (
                                    <VideoAutoPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} videoShadow="" radius=""/> 
                                  ):(
                                    <VideoWindowPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} videoShadow="" radius=""/>
                                  )
                                ) : (
                                  <Image loading="lazy" fluid className="mt-1-xs" src={fdata.imgUrl} alt="Live Team Location" />
                                )}
                            </Col>
                            <Col lg={5} className="order-m-0">
                                <SectionHeading subTitle="" title={fdata.title} description={fdata.desc} subTitleCenter={false} headingUnderLine={false} /> 
                                {fdata?.List && (
                                  <ul className="list-unstyled icon-left icon-black-list">
                                      {fdata.List.map((list,index )=>(
                                        <li key={index} dangerouslySetInnerHTML={sanitizeHtml(list)} />
                                      ))}
                                  </ul>
                                )}
                                {fdata.id === 5 && 
                                  <Link to="/hrms-software/employee-expense-management" className="btn btn-gradient mt-3">Expense Features</Link>
                                }
                            </Col>
                        </Row>
                      </Container>
                    </section>
                  </>
                )}
            </Fragment>
      ))}

      <section className="mobile-design">
          <Container>
              {hrmsMobileScrData.map((mdata, mIndex) => (
                    <Row className="justify-content-between align-items-center" key={mIndex}>
                      {mdata.id === 4 && (
                      <>
                          <Col lg={5} xl={5}>
                              <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                          </Col>
                              <Col lg={7} xl={6} className="mb-5">
                                 <h3 className='fn-6'>Book Free Demo <span className='text-gradient'>Now!</span></h3>
                                <FieldForceRequestForm variant="gradient" btnClass=""/>
                               {/* {windowWidth > 991 ? (
                                        <Image fluid src={mdata.imgUrlD} alt={mdata.alt} />
                                    ):(
                                        <Image fluid src={mdata.imgUrl} alt="mdata" />
                                    ) 
                                }*/}
                          </Col>
                      </>
                      )}
                  </Row>
              ))}
          </Container>
      </section>

    </>
  )
}

export default FieldForceHome;