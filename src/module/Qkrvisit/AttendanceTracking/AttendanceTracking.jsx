import { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ClientLogoScroll from "../../../components/ClientLogoScroll/ClientLogoScroll";
import QkrHeroSection from "../../../components/QkrHeroSection/QkrHeroSection";
import { CustomerAllData } from "../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { AttendanceTrackingData, AttendanceTrackingHeadeData, AttendancTrakingFaq , AttendanceTrackingMeta } from "./AttendanceTrackingData";
import VideoAutoPlay from "../../../components/Video/VideoAutoPlay";
import VideoWindowPlay from "../../../components/Video/VideoWindowPlay";
import { hrmsMobileScrData } from "../../Hrms/QkrhrHome/QkrhrHomeData";
import FieldForceRequestForm from "../../../components/RequestForm/FieldForceRequestForm";
import FaqComponent from "../../../components/FaqComponent/FaqComponent";
import { AttendanceTrackingSchemaData } from "./AttendanceTrackingSchemaData";
import { ogImages as ImagesUrl_ogImages } from "../../../assets/images";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const AttendanceTracking = () => {

  const socialImage = ImagesUrl_ogImages.Visit;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
          title={AttendanceTrackingMeta.title}
          description={AttendanceTrackingMeta.description}
          image={socialImage}
          SchemaData={AttendanceTrackingSchemaData}
        />
        <QkrHeroSection HeroSectionData={AttendanceTrackingHeadeData} col1={5} col2={6} xl1={5} xl2={6} />
        
        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />
      
        {AttendanceTrackingData.map((trackData, trackIndex)=>(
              <Fragment key={trackIndex}>
                  {trackIndex % 2 !== 0 ? (
                      <>
                          <section className="wrapper-area">
                            <Container>
                              <Row className="justify-content-between align-items-center">
                                <Col lg={5}>
                                    <SectionHeading subTitle="" title={trackData.title} description={trackData.descs} headingUnderLine={false} subTitleCenter={false} />
                                    {/* {trackData.id === 2 && 
                                        <>
                                            <Link to="/hrms-software/time-and-attendance-system" className="btn btn-outline-magenta mb-4 mt-3">
                                              Learn about Attendance Management
                                            </Link>
                                        </>
                                      }  
                                      {trackData.id === 4 && 
                                        <>
                                            <Link to="/hrms-software/leave-management-system" className="btn btn-outline-magenta mb-4 mt-3">
                                            Learn about Simplify Leave Management
                                          </Link>
                                        </>
                                      }       */}
                                  </Col>
                                  <Col lg={trackData.id === 2 ? 4 : 6 }>
                                        {trackData.videoUrl ? (
                                            trackData.videoAuto === true ? (
                                              <VideoAutoPlay videoSource={trackData.videoUrl} videoPoster={trackData.imgUrl} alt={trackData.alt} videoShadow="" radius=""/> 
                                            ):(
                                              <VideoWindowPlay videoSource={trackData.videoUrl} videoPoster={trackData.imgUrl} alt={trackData.alt} videoShadow="" radius=""/>
                                            )
                                          ) : (
                                            <Image loading="lazy" fluid src={trackData.imgUrl} alt={trackData.alt} />
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
                                        {trackData.videoUrl ? (
                                            trackData.videoAuto === true ? (
                                              <VideoAutoPlay videoSource={trackData.videoUrl} videoPoster={trackData.imgUrl} alt={trackData.alt} videoShadow="" radius=""/> 
                                            ):(
                                              <VideoWindowPlay videoSource={trackData.videoUrl} videoPoster={trackData.imgUrl} alt={trackData.alt} videoShadow="" radius=""/>
                                            )
                                          ) : (
                                            <Image loading="lazy" fluid src={trackData.imgUrl} alt={trackData.alt} />
                                        )}
                                  </Col>
                                  <Col lg={5} className="order-m-0">
                                      <SectionHeading subTitle="" title={trackData.title} description={trackData.descs} headingUnderLine={false} subTitleCenter={false} />
                                      {/* {trackData.id === 3 && 
                                        <>
                                            <Link to="/payroll-software/management" className="btn btn-outline-magenta mb-4 mt-3">
                                            Learn about Payroll Management
                                          </Link>
                                        </>
                                      }*/}
                                  </Col>
                              </div>
                          </div>
                        </section>
                      </>		
                  )}
              </Fragment> 
        ))}

      {AttendancTrakingFaq && (
				<FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={AttendancTrakingFaq} />
			)}

        {hrmsMobileScrData.map((mdata, mIndex) =>
            mdata.id === 4 && (
              <section className="mobile-design" key={mdata.id || mIndex}>
                <Container>
                  <Row className="justify-content-between align-items-center">
                    <Col lg={5} xl={5}>
                      <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                    </Col>
                    <Col lg={7} xl={6} className="mb-5">
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

export default AttendanceTracking;