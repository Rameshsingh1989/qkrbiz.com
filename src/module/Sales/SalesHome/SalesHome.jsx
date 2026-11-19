
import { Link } from "react-router";
import { Fragment} from "react";
import KeenSlider from "../../../components/KeenSlider/KeenSlider";
import { 
  GrowingSalesdata,
  BenefitsData, 
  SalesHeadData, 
  SalesOrderData,
  RaectangleData, 
  QkrbizAnIntelligentData, 
  QkrbizPrimedData
 , SalesHomeMeta } from "./SalesHomeData";
import QkrbizProductMenus from "../../../components/QkrbizProductMenus/QkrbizProductMenus";
import { HeaderMenuData } from "../../../navigation/data/HeaderMenuData";
import PlatformFeatures from "../../../components/PlatformFeatures/PlatformFeatures";
import RaectangleContent from "../../../components/RaectangleContent/RaectangleContent";
import { Container } from "react-bootstrap";
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages } from "../../../assets/images";
import { DocSectionData } from "../../../pages/Documents/DocumentsData";
import BenefitsSection from "../../../components/BenefitsSection/BenefitsSection";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import EffortlessSystem from "../../Tenders/EffortlessSystem/EffortlessSystem";
import salesHomeSchemaData from "./SalesHomeSchemaData";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./SalesHome.scss";

const SalesHome = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>

      <RouteSpecificMeta
      title={SalesHomeMeta.title}
      description={SalesHomeMeta.description}
      image={socialImage}
	  SchemaData={salesHomeSchemaData} 
      />

      <div className="content-top top-bg">
        <Container>
            {SalesHeadData.map((sheadText, sindex)=>(
              <div className="row justify-content-between align-items-center" key={sindex}>
              <div className="col-lg-5">
                <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml(sheadText.title)}></h1>
                <div dangerouslySetInnerHTML={sanitizeHtml(sheadText.desc)}></div>
                <Link to={sheadText.link} className="btn btn-gradient rounded-pill"> Free Demo</Link>
              </div>
              <div className="col-lg-7">
                <img loading="eager" fetchPriority="high" className="img-fluid img-top" src={sheadText.imgUrl} alt={sheadText.title}/>
              </div>
            </div>
            ))}
        </Container>
      </div>

      <QkrbizProductMenus headerData={HeaderMenuData} appsClass="apps-sales" filterProduct={false} filterType="isSales" subFilterType="" /> 

      <section className="question-design question-sales mt-5">
          <Container>
              <div className="row justify-content-between align-items-center">
               {GrowingSalesdata.map((accText, AccIndex)=>(
                  <Fragment key={AccIndex}>
                      <div className="col-md-12 col-lg-12 col-xl-12">
                          <SectionHeading subTitle="" title={accText.title} description="" headingUnderLine={false} /> 
                      </div> 
                         
                      {accText.PList.map((ListText, PListIndex)=>(
                          <div className="col-md-6 col-lg-6 col-xl-4" key={PListIndex}>
                              <div className={`card q_img ${ListText.cls}`}>
                                  <p className="card-space" dangerouslySetInnerHTML={sanitizeHtml(ListText.desc)}></p>
                              </div>
                          </div>
                      ))}
                  </Fragment>
               ))}
              </div>
          </Container>
      </section>

      {DocSectionData.map((docList, docId) => (
        <Fragment key={docId}>
           {docList.id === 2 && (
              <section className="wrapper-area">
                  <div className="container">
                      <div className="row justify-content-between align-items-center">
                              <div className={docList.cls1}>
                                  <SectionHeading subTitle={docList.span} title={docList.heads} description={docList.descs} subTitleCenter={false} headingUnderLine={false} /> 
                              </div>
                              <div className={`${docList.cls2} p-left-lg-5`}>
                                  <img loading="lazy" className="img-fluid" src={docList.imgUrls_1} alt={docList.span} />
                              </div>
                      </div>
                  </div>
              </section>
           )}
        </Fragment>  
      ))}

      <RaectangleContent RaectangleData={RaectangleData} bgThem="bg-deepsky-extralight" Headclr="text-deepsky-light"/>

     <div className="wrapper-area slick-slider-dots">
          <div className="container">
              {SalesOrderData.map((so, soindex)=>(
                  <Fragment key={soindex}>
                      <div className="row justify-content-center align-items-center mb-4">
                          <div className="col-lg-10 col-xl-10 col-xxl-8 text-center">
                             <SectionHeading subTitle="" title={so.title} description={so.desc} subTitleCenter={false} headingUnderLine={false} /> 
                          </div>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10 col-xl-10 col-xxl-8 text-center">

                             <KeenSlider
                                 slides={so.SOList}
                                 renderSlide={(solist)=>(
                                    <img loading="lazy" className="img-fluid" src={solist.imgUrl} alt="Sales Order" />
                                 )}
                                 spacing={24}
                                 loop
                                 autoplayDelay={5000}
                                 dots
                                 slideClassName="mb-4"
                                 ariaLabel="Sales Order"
                                 breakpoints={{
                                     0: { slidesPerView: 1 },
                                     992: { slidesPerView: 1 },
                                     1200: { slidesPerView: 1 },
                                     1400: { slidesPerView: 1 },
                                 }}
                             />

                        </div>
                      </div>
                  </Fragment>
              ))}
          </div>
      </div>

      <EffortlessSystem QkrbizAnIntelligentData={QkrbizAnIntelligentData} cls="squar_bg-sales-image" />

      <div className="wrapper-area">
          <div className="container">
              {QkrbizPrimedData.map((prime, priIndex)=>(
                  <div className="row justify-content-between align-items-center" key={priIndex}>
                      <div className="col-lg-6 p-right-lg-3">
                           <SectionHeading subTitle="" title={prime.title} description={prime.desc} subTitleCenter={false} headingUnderLine={false} /> 
                          <ul className="ul-icon primed">
                            {prime.QList.map((inList, inIndex)=>(
                              <li className="tick-icon-info fn-2" key={inIndex} dangerouslySetInnerHTML={sanitizeHtml(inList.li)}></li>
                            ))}
                          </ul>
                      </div>
                      <div className="col-lg-4 p-left-lg-3">
                        <img loading="lazy" src={prime.imgUrl_1} className="img-fluid" alt="Qkrbiz Primed"/>
                      </div>
                  </div> 
              ))}   
          </div>            
      </div>
    
      <PlatformFeatures /> 

      <BenefitsSection data={BenefitsData} title="Benefits" subtitle="" />
    

    </>
  );
};

export default SalesHome;
