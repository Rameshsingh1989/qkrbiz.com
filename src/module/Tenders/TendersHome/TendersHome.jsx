import  { Fragment } from "react";
import { Link } from "react-router";
import VideoAutoPlay from "../../../components/Video/VideoAutoPlay";
import VideoWindowPlay from "../../../components/Video/VideoWindowPlay";
import { TendersHeadData, EMDStatusData, BiddingStatusData, TendersFeatureData, BenefitsData, UnrecoveredDepositsData, SoftwareDetails, TendersHomeMeta } from "./TendersData";
import { QkrbizAnIntelligentData,  QkrbizPrimedData, RaectangleData } from "../../Sales/SalesHome/SalesHomeData";
import RaectangleContent from "../../../components/RaectangleContent/RaectangleContent";
import PlatformFeatures from "../../../components/PlatformFeatures/PlatformFeatures";
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { Card, Image } from "react-bootstrap";
import QkrHeroSection from "../../../components/QkrHeroSection/QkrHeroSection";
import { ogImages as ImagesUrl_ogImages } from "@/assets/images";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import BenefitsSection from "../../../components/BenefitsSection/BenefitsSection";
import EffortlessSystem from "../EffortlessSystem/EffortlessSystem";
import { tendersSchemaData } from "./TendersSchemaData";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./TendersHome.scss";

const TendersHome = () => {

    const socialImage = ImagesUrl_ogImages.Tender;

    const sanitizeHtml = useSanitizeHtml();

  return (
    <>

        <RouteSpecificMeta
        title={TendersHomeMeta.title}
        description={TendersHomeMeta.description}
        image={socialImage}
        SchemaData={tendersSchemaData} 
        />

        <QkrHeroSection HeroSectionData={TendersHeadData} col1={5} col2={6} xl1={5} xl2={6} />

       <div className="container">
         {EMDStatusData.map((EMDS, EMDSIndex)=>(
            <div className="bg-blue-magenta-light EMDStatus" key={EMDSIndex}>
                <div dangerouslySetInnerHTML={sanitizeHtml(EMDS.desc)}></div>
           </div>
         ))}
      </div>
      
      <div className="wrapper-area">
        <div className="container">
            {BiddingStatusData.map((bitem, bIndex)=>(
                <div className="row justify-content-center align-items-center" key={bIndex}>
                    <div className="col-lg-11 col-xl-9 col-xxl-8 text-center">
                       <SectionHeading subTitle="" title={bitem.title} description={bitem.desc} headingUnderLine={false} />
                    </div>

                    <div className="col-lg-10 col-xl-12 col-xxl-12 text-center"> 
                            <img loading="lazy"  className="img-fluid" src={bitem.imgUrl}  alt={bitem.title} />
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="tendars-features mb-5">
            <div className="container">
                {TendersFeatureData.map((FeatureList, FeatureListIndex)=>(
                    <Fragment key={FeatureListIndex}>
                        {FeatureList.imgUrl1 && (
                            <div className="row t-row">
                                <div className="col-lg-8 col-xxl-8 d-flex flex-column">
                                    <h2 className="mt-4"><span dangerouslySetInnerHTML={sanitizeHtml(FeatureList.title)}></span></h2> 
                                    <p style={{ fontSize: 1.375+'rem', marginBottom: 2+'rem' }} dangerouslySetInnerHTML={sanitizeHtml(FeatureList.description)}></p>
                                      <img loading="lazy" src={FeatureList.imgUrl1} className="img-fluid rounded-4 mb-space-4" alt={FeatureList.alt1} />      
                                </div>  
                                <div className="col-lg-4 col-xxl-4 d-flex flex-column"> 
                                          {FeatureList.ExpenseFeaturs.slice(0, 2 ).map((FeatureItem, FeatureIndex)=>(
                                               <Card className="w-100" key={FeatureIndex}>
                                                <Card.Body>
                                                        <Image loading="lazy" className="icons" src={FeatureItem.imgUrls} alt={FeatureItem.heads} /> 
                                                        <h3>{FeatureItem.heads}</h3>
                                                        <p className="mb-0">{FeatureItem.desc}</p>
                                                    </Card.Body>
                                                </Card>
                                          ))}
                                </div>
                            </div>
                        )}
                        {FeatureList.imgUrl2 && (
                            <div className="row t-row">
                                <div className="col-lg-4 col-xxl-4 d-flex flex-column"> 
                                          {FeatureList.ExpenseFeaturs.slice(2, 4 ).map((FeatureItem, FeatureIndex)=>(
                                                <Card className="w-100"  key={FeatureIndex}>
                                                    <Card.Body>
                                                        <Image loading="lazy" className="icons" src={FeatureItem.imgUrls} alt={FeatureItem.heads} /> 
                                                        <h3>{FeatureItem.heads}</h3>
                                                        <p className="mb-0">{FeatureItem.desc}</p>
                                                    </Card.Body>
                                                </Card>
                                          ))}
                                </div>
                                <div className="col-lg-8 col-xxl-8 d-flex flex-column">
                                      <img loading="lazy" src={FeatureList.imgUrl2} className="img-fluid rounded-4 mb-space-4" alt={FeatureList.alt2} />      
                                </div>  
                                
                            </div>
                        )}
                        <div className="row bottom-row">
                              {FeatureList.ExpenseFeaturs.slice(4).map((FeatureItem, FeatureIndex)=>(
                                  <div className="col-lg-4 col-xxl-4 d-flex" key={FeatureIndex}>
                                    <Card className="w-100">
                                        <Card.Body>
                                            <Image loading="lazy" className="icons" src={FeatureItem.imgUrls} alt={FeatureItem.heads} /> 
                                            <h3>{FeatureItem.heads}</h3>
                                            <p className="mb-0">{FeatureItem.desc}</p>
                                        </Card.Body>
                                    </Card>
                                  </div>
                              ))}
                        </div>
                    </Fragment> 
                ))}  
            </div>
      </div>

      <EffortlessSystem QkrbizAnIntelligentData={QkrbizAnIntelligentData} cls="squar_bg-tender-image" />

      <div className="wrapper-area">
          <div className="container">
              {QkrbizPrimedData.map((prime, priIndex)=>(
                  <div className="row justify-content-between align-items-center" key={priIndex}>
                      <div className="col-lg-6 p-right-lg-3">
                          <SectionHeading subTitle="" subTitleCenter={false} title={prime.title} description={prime.desc} headingUnderLine={false} />
                          <ul className="ul-icon primed">
                            {prime.QList.map((inList, inIndex)=>(
                              <li className="tick-icon-slateblue fn-2" key={inIndex} dangerouslySetInnerHTML={sanitizeHtml(inList.li)}></li>
                            ))}
                          </ul>
                      </div>
                      <div className="col-lg-4 p-left-lg-3">
                        <img loading="lazy" src={prime.imgUrl_2} className="img-fluid" alt="Qkrbiz Primed"/>
                      </div>
                  </div> 
              ))}   
          </div>            
      </div>

      <RaectangleContent RaectangleData={RaectangleData} bgThem="bg-blue-magenta-light tenders-bgline mb-5" Headclr="text-blue-magenta"/>

      <section className="wrapper-area question-designs">
          <div className="container">
              <div className="row justify-content-between align-items-center">
                 {UnrecoveredDepositsData.map((UnreText, UnreIndex)=>(
                    <Fragment key={UnreIndex}>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <SectionHeading subTitle="" title={UnreText.title} description="" subTitleCenter={false} headingUnderLine={false} />
                        </div>
                        {UnreText.Unrecovered.map((list, inIndex)=>(
                            <div className="col-md-6 col-lg-6 col-xl-4" key={inIndex}>
                                <div className={`card q_img ${list.cls}`}>
                                    <p className="card-space" dangerouslySetInnerHTML={sanitizeHtml(list.li)}></p>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                 ))}    
              </div>
          </div>
      </section>

       {SoftwareDetails.map((fdata, fIndex) => (
            <Fragment key={fIndex}>
                {fIndex % 2 !== 0 ? (
                <section className="wrapper-area">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 order-m-0">
                                    <SectionHeading subTitle="" title={fdata.title} description={fdata.descs} subTitleCenter={false} headingUnderLine={false} />
                                    <div className="hrms-them">
                                        <Link to={fdata.urls} className="btn btn-outline-magenta mb-4 mt-3">
                                            {fdata.linkText}
                                        </Link>
                                    </div>
                                </div>
                            <div className="col-lg-6 order-m-1">
                                    {fdata.videoUrl ? (
                                        fdata.videoAuto === true ? (
                                            <VideoAutoPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} alt={fdata.alt} videoShadow="" radius=""/>  
                                        ):(
                                            <VideoWindowPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} alt={fdata.alt} videoShadow="" radius=""/>
                                        )
                                    ) : (
                                        <Image loading="lazy" fluid src={fdata.imgUrl} alt={fdata.alt} />
                                    )}
                            </div>
                        </div>
                    </div>
                </section>
                ):(
                <section className="wrapper-area">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 order-m-1">
                                    {fdata.videoUrl ? (
                                        fdata.videoAuto === true ? (
                                            <VideoAutoPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} alt={fdata.alt} videoShadow="" radius=""/>  
                                        ):(
                                            <VideoWindowPlay videoSource={fdata.videoUrl} videoPoster={fdata.imgUrl} alt={fdata.alt} videoShadow="" radius=""/>
                                        )
                                    ) : (
                                        <Image loading="lazy" fluid src={fdata.imgUrl} alt={fdata.alt} />
                                    )}
                            </div>
                            <div className="col-lg-5 order-m-0">
                                    <SectionHeading subTitle="" title={fdata.title} description={fdata.descs} subTitleCenter={false} headingUnderLine={false} />
                                    <div className="hrms-them">
                                        <Link to={fdata.urls} className="btn btn-outline-magenta mb-4 mt-3">
                                            {fdata.linkText}
                                        </Link>
                                    </div>
                            </div>
                        </div>
                        </div>
                </section>
                )}
                
            </Fragment>
       ))}

      <PlatformFeatures />

      <BenefitsSection data={BenefitsData} title="Benefits" subtitle="" />

    </>
  );
};

export default TendersHome;
