import { Fragment } from "react";
import ClientLogoScroll from "../../../components/ClientLogoScroll/ClientLogoScroll";
import QkrHeroSection from "../../../components/QkrHeroSection/QkrHeroSection";
import { CustomerAllData } from "../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { GeoFencedData, GeoFencedFaq, GeoFencedHeadData , GeoFencedMeta } from "./GeoFencedData";
import VideoAutoPlay from "../../../components/Video/VideoAutoPlay";
import VideoWindowPlay from "../../../components/Video/VideoWindowPlay";
import { Col, Container, Image, Row } from "react-bootstrap";
import { hrmsMobileScrData } from "../../Hrms/QkrhrHome/QkrhrHomeData";
import FieldForceRequestForm from "../../../components/RequestForm/FieldForceRequestForm";
import FaqComponent from "../../../components/FaqComponent/FaqComponent";
// import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import { GeoFencedHomeSchemaData } from "./GeoFencedSchemaData";
import { ogImages as ImagesUrl_ogImages } from "../../../assets/images";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";


const GeoFenced = () => {

  const socialImage = ImagesUrl_ogImages.Visit;

  // const sanitizeHtml = useSanitizeHtml();
  
  return (
    <>
        <RouteSpecificMeta
        title={GeoFencedMeta.title}
        description={GeoFencedMeta.description}
        // description="Manage your mobile workforce with QkrVisit, the best field service management software with live tracking, Salesforce field service sync, and smart automation."
        image={socialImage}
        SchemaData={GeoFencedHomeSchemaData}
        />
        <QkrHeroSection HeroSectionData={GeoFencedHeadData} col1={5} col2={6} xl1={5} xl2={6} />
       
        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />
      
        {GeoFencedData.map((list, listIndex)=>(
              <Fragment key={listIndex}>
                  {listIndex % 2 !== 0 ? (
                      <>
                          <section className="wrapper-area">
                            <Container>
                              <Row className="justify-content-between align-items-center">
                                <Col lg={5}>
                                     <SectionHeading subTitle="" title={list.title} description={list.descs} headingUnderLine={false} subTitleCenter={false} />
                                    {/* {list.id === 2 && 
                                        <>
                                            <Link to="/hrms-software/time-and-attendance-system" className="btn btn-outline-magenta mb-4 mt-3">
                                              Learn about Attendance Management
                                            </Link>
                                        </>
                                      }  
                                      {list.id === 4 && 
                                        <>
                                            <Link to="/hrms-software/leave-management-system" className="btn btn-outline-magenta mb-4 mt-3">
                                            Learn about Simplify Leave Management
                                          </Link>
                                        </>
                                      }       */}
                                  </Col>
                                  <Col lg={list.id === 2 ? 5 : 6 }>
                                        {list.videoUrl ? (
                                            list.videoAuto === true ? (
                                              <VideoAutoPlay videoSource={list.videoUrl} videoPoster={list.imgUrl} alt={list.alt}  videoShadow="" radius=""/> 
                                            ):(
                                              <VideoWindowPlay videoSource={list.videoUrl} videoPoster={list.imgUrl} alt={list.alt}  videoShadow="" radius=""/>
                                            )
                                          ) : (
                                            <Image loading="lazy" fluid src={list.imgUrl} alt={list.alt} />
                                        )} 
                                  </Col>
                              </Row>
                            </Container>
                          </section>
                      </>
                    ):(
                      <>
                        <section className="wrapper-area">
                          <div className="container">
                              <div className="row justify-content-between align-items-center">
                                  <Col lg={6} className="order-m-1 mt-1-xs">
                                        {list.videoUrl ? (
                                            list.videoAuto === true ? (
                                              <VideoAutoPlay videoSource={list.videoUrl} videoPoster={list.imgUrl} alt={list.alt}  videoShadow="" radius=""/> 
                                            ):(
                                              <VideoWindowPlay videoSource={list.videoUrl} videoPoster={list.imgUrl} alt={list.alt}  videoShadow="" radius=""/>
                                            )
                                          ) : (
                                            <Image loading="lazy" fluid src={list.imgUrl} alt={list.alt} />
                                        )}
                                  </Col>
                                  <Col lg={5} className="order-m-0">
                                       <SectionHeading subTitle="" title={list.title} description={list.descs} headingUnderLine={false} subTitleCenter={false} />
                                      {/* {list.id === 3 && 
                                        <>
                                            <Link to="/payroll-software/management" className="btn btn-outline-magenta mb-4 mt-3">
                                            Learn about Payroll Management
                                          </Link>
                                        </>
                                      } */}
                                  </Col>
                              </div>
                          </div>
                        </section>
                      </>		
                  )}
              </Fragment> 
        ))}

        {GeoFencedFaq && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={GeoFencedFaq} />
        )}

        {hrmsMobileScrData.map((mdata, mIndex) =>
            mdata.id === 4 && (
              <section className="mobile-design" key={mdata.id || mIndex}>
                <Container>
                  <Row className="justify-content-between align-items-center">
                    <Col lg={5} xl={5}>
                      <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                    </Col>
                    <Col lg={7} xxl={6} className="mb-5">
                      <h3 className='fn-6'>Book Free Demo <span className='text-pink'>Now!</span></h3>
                      <FieldForceRequestForm variant="gradient" btnClass="" />
                    </Col>
                  </Row>
                </Container>
              </section>
            )
        )}
    </>
  )
}

export default GeoFenced;