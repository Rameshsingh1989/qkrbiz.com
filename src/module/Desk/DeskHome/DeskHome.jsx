import { BringTeamData, DeskFeatureData, DeskHeadData, TabScrollLogicalDaskData,   DeskHomeMeta } from "./DeskData";
import PlatformFeatures from "../../../components/PlatformFeatures/PlatformFeatures";
import BenefitsSection from "../../../components/BenefitsSection/BenefitsSection";
import { BenefitsData } from "../../Hrms/QkrhrHome/QkrhrHomeData";
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import QkrHeroSection from "../../../components/QkrHeroSection/QkrHeroSection";
import { ogImages as ImagesUrl_ogImages } from "../../../assets/images";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import DeskFeatures from "./DeskFeatures";
import { Card, Image } from "react-bootstrap";
import qkrdeskSchemaData from "./qkrdeskSchemaData";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./DeskHome.scss";

const DeskHome = () => {

  const socialImage = ImagesUrl_ogImages.Desk;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
        title={DeskHomeMeta.title}
        description={DeskHomeMeta.description}
        image={socialImage}
        SchemaData={qkrdeskSchemaData}
        />

        <QkrHeroSection HeroSectionData={DeskHeadData} col1={5} col2={6} xl1={5} xl2={6} />

        <div className="desk-features">
            <div className="container">
                {DeskFeatureData.map((FeatureList, FeatureListIndex)=>(
                    <div className="row" key={FeatureListIndex}>
                        {FeatureList.imgUrl && (
                        <>
                            <div className="col-lg-12 col-xl-12 col-xxl-7 d-flex"> 
                                <div className="row">
                                    <div className="col-lg-6 col-xxl-6 d-flex flex-column">
                                      <h2 className="bottom-border border-warning" dangerouslySetInnerHTML={sanitizeHtml(FeatureList.title)}></h2> 
                                      <p style={{ fontSize: 1.375+'rem' }} dangerouslySetInnerHTML={sanitizeHtml(FeatureList.description)}></p>

                                    </div>
                                    {FeatureList.ExpenseFeaturs.slice(0, 3 ).map((FeatureItem, FeatureIndex)=>(
                                        <div className="col-lg-6 col-xxl-6 d-flex" key={FeatureIndex}>
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
                            </div>
                            <div className="col-lg-12 col-xl-6 col-xxl-5 desk-xxl-block d-flex">
                                <img loading="lazy" src={FeatureList.imgUrl2} className="img-fluid rounded-4 expense-hide-img mb-space-4" alt={FeatureList.alt1} />      
                            </div> 
                        </>
                        )}
                    
                        {FeatureList.imgUrl2 && (
                            <>
                               {/* <div className="col-lg-12 col-xl-12 col-xxl-5 desk-xxl-block d-flex">
                                    <img src={FeatureList.imgUrl} className="img-fluid rounded-4 expense-hide-img mb-space-4" alt={FeatureList.alt2} />      
                                </div> */}
                                <div className="col-lg-12 col-xl-12 col-xxl-12 d-flex"> 
                                    <div className="row">
                                        {FeatureList.ExpenseFeaturs.slice(3).map((FeatureItem, FeatureIndex)=>(
                                            <div className="col-lg-6 col-xxl-4 d-flex" key={FeatureIndex}>
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
                                </div>
                            </>
                        )}
                    </div> 
                ))}         
            </div>
        </div>
  
        <DeskFeatures TabScrollLogicalDaskData={TabScrollLogicalDaskData} colCls="col-lg-12 col-xl-12 col-xxl-12"/>

        <div className="hexagon-area">
            <div className="container">
                {BringTeamData.map((bring, bringIndex)=>(
                  <div className="row justify-content-between align-items-center" key={bringIndex}>
                      <div className="col-lg-12 col-xl-5 col-xxl-4">
                          <SectionHeading subTitle="" title={bring.title} description={bring.desc} headingUnderLine={false} subTitleCenter={false} />
                      </div>
                      <div className="col-lg-12 col-xl-7 col-xxl-6">
                          {bring.UList.map((list, index)=>(
                            <div className={`hexagon-bg ${list.cls}`} key={index}>
                                  <img loading="lazy" src={list.imgUrl} className="img-fluid" alt={list.head}/>
                                  <h4 dangerouslySetInnerHTML={sanitizeHtml(list.head)}></h4>
                                  <p dangerouslySetInnerHTML={sanitizeHtml(list.desc)}></p>
                            </div>
                          ))}
                      </div>
                  </div>  
                ))}
            </div>            
        </div>
        
        <div className="container desk-working">
              <div className="bg-warnings py-5 rounded-5">
                  <div className="row justify-content-center align-items-center mt-3">
                      <div className="col-lg-10 col-xl-8 col-xxl-7 text-center over-lay">
                         <SectionHeading subTitle="" title="Working Together Is Better" description="Our products allow businesses to be more reliable, flexible, and scalable. They help improve communication and make sense of massive amounts of data. Above all, they work together to help turn interactions into lasting relationships." headingUnderLine={false} />
                      </div>
                  </div>
              </div>            
        </div>

        <PlatformFeatures />

        <BenefitsSection data={BenefitsData} title="Benefits" subtitle="" />

    </>
  )
}

export default DeskHome;