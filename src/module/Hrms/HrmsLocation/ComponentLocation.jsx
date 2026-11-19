import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaPlay } from "react-icons/fa6";
import YouTubePopup from "../../../components/Video/YouTubePopup";
import VideoAutoPlay from "../../../components/Video/VideoAutoPlay";
import CheckTick  from "@/assets/images/hrms/HrmsCity/HrmsDelhi/CheckTick.svg";
import CrossWrong  from "@/assets/images/hrms/HrmsCity/HrmsDelhi/CrossWrong.svg";
import ClientLogoScroll from "../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../pages/Customers/CustomersAllData";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import InternalLinkSection from "./component/InternalLinkSection/InternalLinkSection";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

import "./ComponentLocation.scss";


// function ResponsiveImage({ desktop, mobile, alt }) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const update = () => setIsMobile(window.innerWidth < 992);
//     update();

//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return (
//     <Image
//       fluid
//       src={isMobile ? mobile : desktop}
//       alt={alt}
//       className="img-stretch"
//     />
//   );
// }

const ComponentLocation = ({
  customizableWidth,
  lgWidth,
  xlWidth,
  xxlWidth,
  videoIdCode, 
  TopHeaderClass, 
  HeadData, 
  HosingData,
  whyChooseData, 
  ctaData, 
  hrmsFeaturesData,
  citiesIndia, 
  EnterprisesDelhiData,
  EnterprisesDesigned, 
  HRSoftwareDelhiData,
  ImplementationProcessData,
  EmployeeExperienceData, 
  CustomersData,
  internalLinkSectionDba
  }) => {
    
    const getIcon = (value) => {
        if (value === true) {
          return <Image loading="lazy" src={CheckTick} alt="Check" className="icons"/>;
        } else if (value === false) {
          return <Image loading="lazy" src={CrossWrong} alt="Remove" className="icons"/>;
        }
        return value;
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleOpen = () => setShowPopup(true);
    const handleClose = () => setShowPopup(false);

    const [windowWidth, setWindowWidth] = useState(0);

    const sanitizeHtml = useSanitizeHtml();

    useEffect(() => {
      if (typeof window === "undefined") return;

      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
       <section className={`content-top ${TopHeaderClass}`}>
            <Container className={customizableWidth}>
                {HeadData.map((thead, tIndex)=>(
                    <Row className="justify-content-between align-items-center" key={tIndex}>
                        <Col lg={lgWidth} xl={xlWidth} xxl={xxlWidth}>
                            <h1 className="header-title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.title)}></span></h1>
                            {thead.subTitle &&
                                <h2 className="sub-title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.subTitle)}></span></h2> 
                            }                       
                            {thead.desc &&
                                <p className="header-text"><span dangerouslySetInnerHTML={sanitizeHtml(thead.desc)}></span></p> 
                            }
                            {thead.subDesc &&
                            <p className="header-text" dangerouslySetInnerHTML={sanitizeHtml(thead.subDesc)} />
                            } 
                            {thead.HeadList && thead.HeadList.length > 0 && ( 
                                <ul className="ul-icon">
                                    {thead.HeadList.map((IList, iIndex) => (
                                      <li className="tick-icon-magenta" key={iIndex} dangerouslySetInnerHTML={sanitizeHtml(IList)} />
                                    ))}
                                </ul>
                            )}       
                           {  thead.reviews &&
                                <Image loading="lazy" fluid src={thead.reviews} alt={thead.alt} className="mt-3 img-review" />
                                
                            } 
                            <div className="d-flex gap-3 content-btn">                    
                            <Link to={thead.link} className="btn btn-gradient rounded-pill">Free Demo</Link>
                            { thead.youTubeVideoUrl && 
                                <Button variant='default' className="btn btn-outline-danger youtube-btn rounded-pill" onClick={handleOpen}> 
                                  <span>Play Video</span> <FaPlay className="play-icon" />
                                </Button>
                            }
                            </div>
                        </Col>
                        <Col lg={6} xl={6} xxl={6} className="right-space-less">
                            { thead.videoUrl ? (
                                    <VideoAutoPlay videoSource={thead.videoUrl} videoPoster={thead.imgUrl} alt={thead.alt} videoShadow="" radius=""/>
                                ):(
                                    <Image loading="eager" fetchPriority="high" fluid src={thead.imgUrl} alt={thead.alt}  className="img-stretch"/>
                                    // <ResponsiveImage desktop={thead.imgUrl} mobile={thead.mobileImage} alt={thead.alt} />
                                )
                            }
                        </Col>
                    </Row>
                ))}
            </Container>
       </section>

       {showPopup && (
            <YouTubePopup videoId={videoIdCode} onClose={handleClose} />
        )}

        <section className="hosting">
            <Container>
                <Row>
                    {HosingData.map((hText, hIndex) => (
                        <Col lg={4} key={hIndex}>
                            <div className="d-flex justify-content-center mb-4">
                                    <div className="flex-shrink-0">
                                      <div className="icons-wraper">
                                        <Image loading="lazy" src={hText.iconUrl} alt={hText.title} className="icons"/>
                                      </div> 
                                    </div>
                                    <div className="flex-grow-1 align-content-center">
                                        <h2 className="fn-4 mb-2" dangerouslySetInnerHTML={sanitizeHtml(hText.title)} />
                                        <p className="mb-0 ">{hText.description}</p>
                                    </div>
                            </div>
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        </section>
        
        <section className="why-choose-section">
              <Container>
                  <Row className="justify-content-center align-items-center">
                      <Col lg={12} xl={12} xxl={10}>
                        <SectionHeading subTitle="" title={whyChooseData.sectionTitle} description={whyChooseData.description} headingUnderLine={false} />
  
                      </Col>
                  </Row>
                  
                    {whyChooseData.col=== true ? (

                            <Row className="align-items-center justify-content-center">

                              <Col lg={4} className="d-flex flex-column">
                                
                                  {whyChooseData.features.slice(0, 2).map((feature, index) => (
                                    <div key={index} className={`feature-card ${feature.minHeight}`}>
                                      <Image loading="lazy" src={feature.iconUrl} alt={feature.title} className="icons" />
                                      <h3 dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                                      {feature.description && (
                                          <p dangerouslySetInnerHTML={sanitizeHtml(feature.description)} />
                                      )}
                                      {feature.List && feature.List.length > 0 && ( 
                                            <ul className="list-unstyled icon-left icon-blue-list mb-0">
                                                {feature.List.map((list, iIndex) => (
                                                  <li key={iIndex} dangerouslySetInnerHTML={sanitizeHtml(list)} />
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                  ))}
                              </Col>
                              { whyChooseData.imageUrl && (
                                  <Col lg={4} className="d-flex flex-column align-items-center">
                                    <img loading="lazy" src={whyChooseData.imageUrl} alt="QkrHR" className="img-fluid rounded" />
                                  </Col>
                              )}
                              
                              <Col lg={4} className="d-flex flex-column">
                                {whyChooseData.features.slice(2).map((feature, index) => (
                                  <div key={index} className={`feature-card ${feature.minHeight}`}>
                                    
                                      <Image loading="lazy" src={feature.iconUrl} alt={feature.title} className="icons" />
                                      <h3 dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                                      {feature.description && (
                                          <p dangerouslySetInnerHTML={sanitizeHtml(feature.description)} />
                                      )}
                                      {feature.List && feature.List.length > 0 && ( 
                                            <ul className="list-unstyled icon-left icon-blue-list mb-0">
                                                {feature.List.map((list, iIndex) => (
                                                  <li key={iIndex} dangerouslySetInnerHTML={sanitizeHtml(list)} />
                                                ))}
                                            </ul>
                                        )}
                                  </div>
                                ))}
                              </Col>

                            </Row>

                      ):(
                        <Row>
                          {whyChooseData.features.map((feature, index) => ( 
                                <Col lg={4} key={index} className="mb-4">
                                  <div key={index} className={`feature-card h-100 ${feature.minHeight}`}>
                                  
                                    <Image loading="lazy" src={feature.iconUrl} alt={feature.title} className="icons" />
                                    <h3 dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                                    {feature.description && (
                                        <p dangerouslySetInnerHTML={sanitizeHtml(feature.description)} />
                                    )}
                                      {feature.List && feature.List.length > 0 && ( 
                                          <ul className="list-unstyled icon-left icon-blue-list mb-0">
                                              {feature.List.map((list, iIndex) => (
                                                <li key={iIndex} dangerouslySetInnerHTML={sanitizeHtml(list)} />
                                              ))}
                                          </ul>
                                      )}
                                </div>
                              </Col>  
                            ))}
                        </Row>
                    )}
                  
              </Container>
        </section>

        <section className="cta-section text-center bg-magenta-light">
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col lg={12} xl={12} xxl={12}>
                    <SectionHeading subTitle="" title={ctaData.sectionTitle} description={ctaData.description} headingUnderLine={false} />
                    <div className="cta-buttons d-grid gap-3 d-flex justify-content-center">
                      <Link to={ctaData.primaryButton.url} className="btn btn-gradient rounded-pill">
                        {ctaData.primaryButton.text}
                      </Link>
                      <Link
                        to={ctaData.secondaryButton.url}
                        className="btn btn-gradient-outline rounded-pill"
                      >
                        {ctaData.secondaryButton.text}
                      </Link>
                    </div>
                </Col>
              </Row>
            </Container>
        </section>

        {hrmsFeaturesData && hrmsFeaturesData.length > 0 && (
            hrmsFeaturesData.map((mText, mIndex) => ( 
                  <section className="hrms-features" key={mIndex}>
                      <Container>
                        <Row className="justify-content-center align-items-center">
                          <Col lg={12} xl={12} xxl={11}>
                               <SectionHeading subTitle="" title={mText.sectionTitle} description="" headingUnderLine={false} />
                              <div className="table-wrapper">
                                <table>
                                  <thead>
                                    <tr>
                                      {mText.columns.map((col, index) => (
                                        <th key={index} dangerouslySetInnerHTML={sanitizeHtml(col)}></th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {mText.features.map((item, index) => (
                                      <tr key={index}>
                                        <td className="module" dangerouslySetInnerHTML={sanitizeHtml(item.module)}></td>
                                        <td className="description" dangerouslySetInnerHTML={sanitizeHtml(item.description)}></td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                          </Col>
                        </Row>
                      </Container>
                  </section>
              ))
         )}

       <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <section className="text-center py-5">
          <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={12} xl={12} xxl={11}>
                        {citiesIndia.map((cityText, cidx) => (
                            <div key={cidx}>
                              <SectionHeading subTitle="" title={cityText.title} description={cityText.description} headingUnderLine={false} />
                                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 city-category-btn">
                                    {cityText.cities.map((city, idx) => (
                                       <Fragment key={idx}>
                                          <Link to={city.url} className="btn btn-outline-light rounded-5 m-2" title={city.name}>
                                             <Image loading="lazy" src={city.icon} alt={city.name} className="icons" />{city.name}
                                          </Link>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                </Col>
              </Row>  
          </Container>
        </section>

       {EnterprisesDesigned && (
        <section className="enterprises-designed">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={12} xl={12} xxl={11}>

                <SectionHeading subTitle="" title={EnterprisesDesigned.title} description={EnterprisesDesigned.description} headingUnderLine={false} />
              </Col>
            </Row>
             <Row className="justify-content-center align-items-center">
                  <Col lg={12} xl={12} xxl={12}>
                       <Row className="justify-content-center">
                        {EnterprisesDesigned.items.map((item, idx) => (
                          <Col lg={4} md={6} className="mb-4" key={idx}>
                            <div className="card h-100 ">
                              <div className="card-body">
                                  <Image loading="lazy" src={item.icon} alt={item.title} className="icons" />
                                <h3 className="card-title" dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                                <p className="card-text" dangerouslySetInnerHTML={sanitizeHtml(item.description)}></p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>

                  </Col>
              </Row>
           
          </Container>
        </section>
        )}
        
       {EnterprisesDelhiData?.items?.length > 0 && (
          <section className="enterprises">
            <Container>
              <Row className="justify-content-center text-center">
                  <Col lg={12} xl={12} xxl={10}>        
                      <SectionHeading subTitle="" title={EnterprisesDelhiData.title} description={EnterprisesDelhiData.description} headingUnderLine={false} />
                  </Col>
              </Row>
              <Row className="justify-content-center text-center"> 
                  {EnterprisesDelhiData.items.map((item, idx) => {
                      <div className="col-lg-4" key={idx}>
                      <div className="card">
                        <div className="card-body">
                        <div className="icon-circle mbs-4">
                          <Image loading="lazy" src={item.icon} alt={item.title} className="icons" />
                          </div>
                          <h5 className="card-title" dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h5>
                          <p className="card-text" dangerouslySetInnerHTML={sanitizeHtml(item.description)}></p>
                        </div>
                      </div>
                      </div>
                    })}
              </Row>
              <Row className="justify-content-center text-center">
                {EnterprisesDelhiData.items.map((item, idx) => {
                  let content;

                  if (idx % 2 === 0) {
                    content = (
                      <>
                        <div className="line"></div>
                        <div className="icon-circle mbs-4">
                          <Image loading="lazy" src={item.icon} alt={item.title} className="icons" />
                        </div>
                        <div className="content-box">
                        <h3 className="text-pink mb-2" dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                        </div>
                      </>
                    );
                  } else {
                    if (windowWidth > 991) {
                      content = (
                        <>
                          <div className="content-box">
                          <h3 className="text-pink mb-2" dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                          </div>
                          <div className="icon-circle mts-4">
                            <Image loading="lazy" src={item.icon} alt={item.title} className="icons" />
                          </div>
                        </>
                      );
                    } else {
                      content = (
                        <>
                          <div className="icon-circle mbs-4">
                            <Image loading="lazy" src={item.icon} alt={item.title} className="icons" />
                          </div>
                          <div className="content-box">
                          <h3 className="text-pink mb-2" dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                          </div>
                        </>
                      );
                    }
                  }
                  return (
                    <Col lg={3} key={idx} className={`mb-4 position-relatives ${(idx === 1 || idx === 3) ? "mts-5" : ""}`}>
            
                      {content}
                      { idx === 1 && (       
                          <div className="lines"></div>
                        )
                      }
                    </Col>
                  );
                })}
              </Row> 
            </Container>
          </section>
        )}

        <section className="hrms-features-delhi">
            <Container>
              <Row className="justify-content-center align-items-center">
                  <Col lg={12} xl={12} xxl={11}>
                       <SectionHeading subTitle="" title={HRSoftwareDelhiData.title} description="" headingUnderLine={false} />
                      <div className="table-responsive">
                          <table>
                            <thead>
                              <tr>
                                {HRSoftwareDelhiData.columns.map((col, index) => (
                                  <th key={index} dangerouslySetInnerHTML={sanitizeHtml(col)}></th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {HRSoftwareDelhiData.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {HRSoftwareDelhiData.columns.map((col, colIndex) => (
                                    <td key={colIndex}>
                                      {colIndex === 0
                                        ? row.feature
                                        : getIcon(row[col])}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                      </div>
                  </Col>
              </Row>
          </Container>
        </section>

        <section className="implementation-process">
          {ImplementationProcessData.map((stepText, stepIndex) => (
            <Container key={stepIndex}>
               <SectionHeading subTitle="" title={stepText.title} description={stepText.subtitle} headingUnderLine={false} />
               <Row className="p-3">
               {stepText.steps.map((step, index) => (
                  <Col lg={4} key={index} >
                    <div className={step.wrapperClass}>
                      {!step.reverse && (
                        <div className="flex-shrink-1 mr-2">
                          <h3 className={step.textClass} dangerouslySetInnerHTML={sanitizeHtml(step.title)}></h3>
                          <p dangerouslySetInnerHTML={sanitizeHtml(step.description)}></p>
                        </div>
                      )}

                      <div className={`flex-shrink-0 d-flex flex-shrink-0 justify-content-center ${index % 2 === 0 ? "top-space" : ""}`}>
                        <div className={step.iconClass}>
                           <div className="icons">
                              <Image loading="lazy" src={step.icon} alt={step.title} />
                          </div>
                        </div>
                      </div>

                      {step.reverse && (
                        <div className="flex-shrink-1">
                          <h3 className={step.textClass} dangerouslySetInnerHTML={sanitizeHtml(step.title)}></h3>
                          <p dangerouslySetInnerHTML={sanitizeHtml(step.description)}></p>
                        </div>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          ))}
        </section>

        <section className="py-5">
          <Container>
            {EmployeeExperienceData.map((eText, eIndex) => ( 
                  <Row className="align-items-center justify-content-between" key={eIndex}>
                      <Col lg={6} xl={5}>
                          <SectionHeading subTitle="" title={eText.title} description={eText.subtitle} headingUnderLine={false} subTitleCenter={false} />
                          <ul className="ul-icon">
                            {eText.features.map((item, index) => (
                              <li key={index} className="tick-icon-magenta" dangerouslySetInnerHTML={sanitizeHtml(item)}></li>
                            ))}
                          </ul>
                      </Col>

                      <Col lg={5} xl={4} className="text-center">
                        <img loading="lazy" src={eText.image} alt="Mobile HRMS App" className="img-fluid" />
                      </Col>
                  </Row>
             ))} 
          </Container>
        </section>

         <section className="customers-data">
             {CustomersData.map((cText, cIndex) => ( 
               <Container key={cIndex}>
                  <Row className="justify-content-center align-items-center mb-4">
                      <Col lg={12} xl={12} xxl={11}>
                            <SectionHeading subTitle="" title={cText.title} description="" headingUnderLine={false} />
                            <Row className="g-4">
                                {cText.testimonials.map((t, i) => (
                                  <Col lg="4" className="col-md-4" key={i}>
                                    <div className="p-4 h-100 rounded-3 border-left" >
                                      <p className="fst-italic">“<span dangerouslySetInnerHTML={sanitizeHtml(t.quote)} />”</p>
                                      <p className="text-primary mb-0"> — <span dangerouslySetInnerHTML={sanitizeHtml(t.author)} /></p>
                                    </div>
                                  </Col>
                                ))}
                            </Row>
                      </Col>
                    </Row>
                 </Container>
              ))}
        </section>

        <InternalLinkSection internalLinkSectionDba={internalLinkSectionDba} />
    </>
  )
}

export default ComponentLocation;

// const styles = {
//   youtube: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: '0.435rem',
//     paddingBottom: '0.435rem',
//     gap: '0.5rem'
//   },
//   playIcon: {
//     backgroundColor:'#dc3545',
//     fontSize: '1.75rem',
//     color:'#fff',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     width: '0.85rem',
//     height: '0.85rem'
//   }
// };