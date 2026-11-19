import { useRef, useState } from "react";
import { Link } from "react-router";
import { Container, Row, Col, Image } from "react-bootstrap";
import VideoAutoPlay from "../../../../components/Video/VideoAutoPlay";
import { HosingData, HrmsCompareFAQ, HrmsPriceHeadData , HrmsPriceMeta } from "./HrmsPriceData";
import { HrmsPricePlans } from "../component/HrmsPricePlans";
import { ClientStories } from "../../../../components/ClientStories/ClientStories";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { HrmsCompareSchemaData } from "./HrmsPriceSchemaData";
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { decodeEntities } from "@/utility/decodeEntities";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import PricingPlanCard from "../component/AddonCard";
import { HrmsCalculation } from "../../../../components/HrmsCalculation/HrmsCalculation";
import "./HrmsPrice.scss";

// function ResponsiveImage({ desktop, mobile, alt }) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//      if (typeof window === "undefined") return;
//     const check = () => setIsMobile(window.innerWidth < 992);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   return (
//     <Image fluid src={isMobile ? mobile : desktop} alt={decodeEntities(alt || "")} className="img-stretch" />
//   );
// }

const PRICING_TABS = [
  { id: "pricing", label: "Pricing" },
  { id: "field-tracking", label: "Field Tracking", badge: "Add-On" },
  { id: "compare", label: "Compare" },
];

const HrmsPrice = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;

  const sanitizeHtml = useSanitizeHtml();

  const [activeTab, setActiveTab] = useState("pricing");

  const AppsRef = useRef(null);
  const handleClickApps = (e) => {
    e.preventDefault();
    if (!AppsRef.current || typeof window === "undefined") return;
    window.scrollTo({
      top: AppsRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };
  // console.log("AppsRef", AppsRef);

  return (
    <>
      <RouteSpecificMeta
      title={HrmsPriceMeta.title}
      description={HrmsPriceMeta.description}
      image={socialImage}
      SchemaData={HrmsCompareSchemaData} />

      <section className="content-top content-top-price">
          {/* <Container className="customizable-size"> */}
           <Container>
              {HrmsPriceHeadData.map((thead,tIndex)=>(
                  <Row className="justify-content-between align-items-center" key={tIndex}>
                      <Col lg={5} xl={6} xxl={6}>
                        {thead.title ? (
                          <>
                            <h1 className="title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.title)}></span></h1>
                            <h2 className="header-title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.subTitle)}></span></h2>
                          </>
                        ):(
                          <>
                            <h1 className="header-title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.subTitle)}></span></h1>
                          </>
                        )}
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
                          <div className="d-flex gap-3 content-btn">
                              <button className="btn btn-outline-magenta" onClick={handleClickApps}>See Full Pricing Below</button>
                              <Link to={thead.link} className="btn btn-gradient">Talk to Sales</Link>
                          </div>
                      </Col>
                      <Col lg={6} xl={6} xxl={6} className="right-space-less">
                          { thead.videoUrl ? (
                              <VideoAutoPlay videoSource={thead.videoUrl} videoPoster={thead.imgUrl} alt={thead.alt} videoShadow="" radius=""/>
                              ):(
                                <Image loading="eager" fetchPriority="high" fluid src={thead.imgUrl} alt={decodeEntities(thead.alt || "")} />
                                  // <ResponsiveImage desktop={thead.imgUrl} mobile={thead.mobileImage} alt={thead.alt} />
                              )
                          }
                      </Col>
                  </Row>
              ))}
          </Container>
      </section>

      <section className="hosting mb-3">
          <Container>
              <Row>
                  {HosingData.map((hText, hIndex) => (
                      <Col lg={3} key={hIndex}>
                          <div className="d-flex justify-content-center mb-4">
                                  <div className="flex-shrink-0">
                                    <div className="icons-wraper">
                                      <Image loading="lazy" src={hText.iconUrl} alt={hText.title} className="icons"/>
                                    </div> 
                                  </div>
                                  <div className="flex-grow-1 align-content-center">
                                      <h2 className="fn-5 mb-2" dangerouslySetInnerHTML={sanitizeHtml(hText.title)} />
                                      <p className="mb-0 " dangerouslySetInnerHTML={sanitizeHtml(hText.description)} />
                                  </div>
                          </div>
                      </Col>
                  ))}
                  
              </Row>
          </Container>
      </section>

      <section className="pricing-tabs-section" ref={AppsRef}>
        <Container>
          <div className="pricing-tabs">
            {PRICING_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`pricing-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.badge && <span className="tab-badge">{tab.badge}</span>}
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
        <div className="tab-content">
          {activeTab === "pricing" && <HrmsPricePlans />}
          {activeTab === "field-tracking" && <PricingPlanCard />}
          {activeTab === "compare" && <HrmsCalculation />}
        </div>
      </section>

      <ClientStories cls="" count1={3} count2={2} count3={1} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={true} count1={6} count2={4} count3={2} count4={2} count5={1} />
      
      {HrmsCompareFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={HrmsCompareFAQ} />
      )}

    </>
  );
};

export default HrmsPrice;
