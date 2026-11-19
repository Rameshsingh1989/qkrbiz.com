import { useRef } from "react";
import { useHead } from "@unhead/react";
import { Link } from "react-router";
import heroBannerPng from "@/assets/images/hero-top-banner.png";
import { EffortlessUserData, HomeProductData, SecureAccData , HomeMeta } from "./HomeData";
import { HeaderMenuData } from "../../navigation/data/HeaderMenuData";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TabsScrollSwiper from "../../components/TabsScrollSwiper/TabsScrollSwiper";
import { TabScrollData } from "../../components/TabsScrollSwiper/TabsScrollData";
import ClientLogoScroll from "../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../Customers/CustomersAllData";
import { ClientStories } from "../../components/ClientStories/ClientStories";
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { QkrbizSchemaData } from "./QkrbizSchemaData";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import QkrbizProductMenus from "../../components/QkrbizProductMenus/QkrbizProductMenus";
import Accountable from "./Accountable";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';

import './Home.scss';

const Home = () => {

  const sanitizeHtml = useSanitizeHtml();
  const socialImage = ImagesUrl_ogImages.Home;

  useHead({
    link: [
      {
        rel: "preload",
        as: "image",
        href: heroBannerPng,
        fetchpriority: "high",
        media: "(min-width: 992px)",
        key: "hero-lcp-preload",
      },
    ],
  });

  const AppsRef = useRef(null);
  
  const handleClickApps = (e) => {
    e.preventDefault();

    if (!AppsRef.current || typeof window === "undefined") return;

    window.scrollTo({
      top: AppsRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <RouteSpecificMeta
      title={HomeMeta.title}
      description={HomeMeta.description}
      image={socialImage}
      SchemaData={QkrbizSchemaData}/>

      {/* Hero Banner */}
      <div className="hero-top-banner">
        <Container>
          <Row className="justify-content-between">
            {HomeProductData.map((headText, headIndex) => (
              <Col lg={7} xl={7} xxl={6} className="banner-heading" key={headIndex}>
                <h1 dangerouslySetInnerHTML={sanitizeHtml(headText.title)}></h1>
                <p dangerouslySetInnerHTML={sanitizeHtml(headText.desc)} />
                <Link to={headText.link} className="btn btn-gradient rounded-pill"> Free Demo</Link>
                <div className="bottom-img">
                  <Image loading="eager"
                    fluid
                    src={headText.imgUrl}
                    width="800"
                    height="600"
                    alt={headText.title?.replace(/<[^>]+>/g, "")}
                    fetchPriority="high"
                  />
                </div>
              </Col>
            ))}

            <Col lg={5} xl={4} xxl={4} className="apps d-flex">
              <Card className="w-100 h-100">
               {HeaderMenuData.map((headerApp, appIndex) => (
                <Card.Body className="qkrModule" key={appIndex}>
                      <h2 className="apps-heading">{headerApp.title}</h2>
                      {headerApp.ProductMenuData.slice(0, 7).map((appsMenu, index) => (
                        <Link to={appsMenu.urls} className="d-flex" key={index}>
                            <span className="flex-shrink-0">
                              <img loading="lazy" className={`qkrimg ${appsMenu.productClass}`} src={appsMenu.icon} alt={appsMenu.title?.replace(/<[^>]+>/g, "")} />
                            </span>
                            <span className="flex-grow-1">
                              <h3 dangerouslySetInnerHTML={sanitizeHtml(appsMenu.title)}></h3>
                              <p dangerouslySetInnerHTML={sanitizeHtml(appsMenu.desc)} />
                            </span>
                        </Link>
                      ))}
                </Card.Body>
                 ))}
                <Card.Footer>
                  <Link to="#" className="allproducts text-magenta right-arrow" onClick={handleClickApps}>
                    All Products
                  </Link>
                </Card.Footer>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Apps Section */}
      <QkrbizProductMenus headerData={HeaderMenuData} appsClass="home-apps" filterProduct={true} filterType="" subFilterType="" ref={AppsRef} />

      <TabsScrollSwiper TabScrollData={TabScrollData} sm={1} md={2} lg={3} xl={3} xxl={4} colCls="col-lg-12 col-xl-12 col-xxl-11" addCls="tabscroll-view" />

      {/* Effortless User Section */}
      <div className="cv-auto">
        <section className="box effortless-user bg-gray-dark">
        {EffortlessUserData.map((Effortless, EffortIndex) => (
          <Container key={EffortIndex}>
            <Row className="justify-content-center align-items-center">
              <Col lg={12} xl={12} xxl={12}>
                <SectionHeading subTitle="" title={Effortless.title} description={Effortless.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col lg={12} xl={12} xxl={12}>
                <Row className="rows">
                  {Effortless.EffortlessList.map((test, testIndex) => (
                    <div className="col-lg-4 d-flex" key={testIndex}>
                      <Card className="w-100">
                        <Card.Body>
                          <Image className="icons" src={test.imgUrl} alt={test.title} loading="lazy" decoding="async" />
                          <h3 dangerouslySetInnerHTML={sanitizeHtml(test.title)} />
                          <p className="text-magenta" dangerouslySetInnerHTML={sanitizeHtml(test.subTitle)} />
                          <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(test.desc)} />
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        ))}
      </section>
      </div>

      {/* Secure Account Section */}
      <div className="cv-auto">
        <Accountable  SecureAcc={SecureAccData}/>
      </div>

     {/* Stories Section */}
      <div className="cv-auto">
        <ClientStories cls="" count1={3} count2={2} count3={1} />
      </div>

      {/* logo scroll  Section */}
      <div className="cv-auto">
        <ClientLogoScroll logoSlider="logo-scroll logo-slider bg-gray" ClientLogo={CustomerAllData} hide={false} show={true} count1={5} count2={3} count3={2} count4={2} count5={2} />
      </div>

    </>
  );
};

export default Home;
