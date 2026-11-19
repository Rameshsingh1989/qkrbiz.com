import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Container, Image } from 'react-bootstrap';
import QkrHeroSection from '../../../../components/QkrHeroSection/QkrHeroSection';
import { EngagementData, EngagementFaqData, EngagementHeadData , HrmsEngagementHomeMeta } from './EngagementData';
import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { hrmsMobileScrData } from '../../QkrhrHome/QkrhrHomeData';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { EngagementSchemaData } from './EngagementSchemaData';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import "./HrmsEngagementHome.scss";

 const HrmsEngagementHome = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();

    useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);

  useEffect(()=>{
    const coreNewArr = [...EngagementData];
       coreNewArr.splice(2, 0, 'engagementData');
     // console.log('dfddf', coreNewArr)
   },[])

   
  return (
      <>
        <RouteSpecificMeta
        title={HrmsEngagementHomeMeta.title}       	     	
        description={HrmsEngagementHomeMeta.description}
        image={socialImage}
        SchemaData={EngagementSchemaData}
        />
        <QkrHeroSection HeroSectionData={EngagementHeadData} col1={5} col2={6} xl1={5} xl2={6}/>

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        {EngagementData.map((edata, eIndex) => (
          <Fragment key={eIndex}>
              {eIndex % 2 !== 0 ? (
                    <section className="wrapper-area">
                        <Container>
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5">                                 
                                   <SectionHeading subTitle="" title={edata.title} description={edata.descs} subTitleCenter={false} headingUnderLine={false} /> 
                                </div>
                                <div className="col-lg-6">
                                    <img loading="lazy" className="img-fluid mt-1-xs" src={edata.imgUrl} alt={edata.title} />
                                </div>
                            </div>
                        </Container>
                    </section>
                ) : (
                  <>
                  {eIndex === 2 && 
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
                    <div className="container">
                      <div className="row justify-content-between align-items-center">
                          <div className="col-lg-6 order-m-1">
                              <img loading="lazy" className="img-fluid mt-1-xs" src={edata.imgUrl} alt={edata.title} />
                          </div>
                          <div className="col-lg-5 order-m-0">
                              <SectionHeading subTitle="" title={edata.title} description={edata.descs} subTitleCenter={false} headingUnderLine={false} /> 
                        </div>
                      </div>
                    </div>
                  </section>
                  
                </> 
                )
              }
          </Fragment>	
        ))}

        {EngagementFaqData && (
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={EngagementFaqData} />
        )}
        
        <section className="mobile-design">
          <div className="container">
              {hrmsMobileScrData.map((mdata, mIndex) => (
                  <div className="row justify-content-between align-items-center" key={mIndex}>
                      {mdata.id === 1 && (
                      <>
                          <div className="col-lg-5 col-xl-5">
                              <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                              <Link to="/signup" className="btn btn-gradient rounded-pill ml-3-xs">Free Demo</Link>
                          </div>
                          <div className="col-lg-7 col-xl-7">
                              {windowWidth > 991 ? (
                                  <Image loading="lazy" fluid src={mdata.imgUrlD} alt={mdata.alt} />
                              ):(
                                  <Image loading="lazy" fluid src={mdata.imgUrl} alt="mdata" />
                              )
                          }
                          </div>
                      </>
                      )}
                  </div>
              ))}
          </div>
        </section>
    </>
  )
}
export default HrmsEngagementHome;