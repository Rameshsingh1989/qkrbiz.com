import { Fragment, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import FaqComponent from "../../../components/FaqComponent/FaqComponent";
import QkrHeroSection from "../../../components/QkrHeroSection/QkrHeroSection";
import ClientLogoScroll from "../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../pages/Customers/CustomersAllData";
import { HeaderMenuData } from "../../../navigation/data/HeaderMenuData";
import { VisitHeadeData, BenefitsQkrvisitData, FieldAutomationData, FieldForceManagementFaq, SimplifyAutomateData , QkrvisitHomeMeta } from "./QkrvisitHomeData";
import FieldForceRequestForm from "../../../components/RequestForm/FieldForceRequestForm";
import { hrmsMobileScrData } from "../../Hrms/QkrhrHome/QkrhrHomeData";
import { QkrvisitHomeSchemaData } from "./QkrvisitHomeSchemaData";
import { ogImages as ImagesUrl_ogImages } from "../../../assets/images";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./QkrvisitHome.scss";

const QkrvisitHome = () => {

  const socialImage = ImagesUrl_ogImages.Visit;

  const visitsProduct = useMemo(() => {
    return HeaderMenuData[0]?.ProductMenuData?.find(
      product => product.IsProduct === 'isVisit'
    );
  }, []);

  const getColumnSpacing = (index) => {
    const topSpacingIndexes = [0, 2, 3, 5]; // Updated to include 1, 3, 4, 5
    return topSpacingIndexes.includes(index) ? 'top-5' : '';
  };

  // const getCardColorClass = (index) => {
  //   return index % 2 === 0 ? '' : 'pinkblue';
  // };
  const getCardColorClass = (index) => {
     return index % 2 === 1 ? 'blue' : 'pink';
  };

  const additionalCards = [
    {
      id: 5,
      urls: "/hrms-software",
      iconClass: "seamless-hr-integration",
      title: "Seamless HR Integration",
      desc: "Connect HR, attendance, and payroll seamlessly in one platform.",
      readMore: "HR Sync",
    },
    {
      id: 6,
      urls: "/hrms-software/employee-expense-management",
      iconClass: "automated-expense-tracking", 
      title: "Automated Expense Tracking",
      desc: "Automatically calculate and approve mileage and expenses.",
      readMore: "Expense Automation",
    }
  ];

  // Reorder cards according to [4, 0, 1, 2, 5, 3] sequence
  const allCards = useMemo(() => {
    if (!visitsProduct?.ProductList) return additionalCards;
    
    const productList = visitsProduct.ProductList;
    const allItems = [...productList, ...additionalCards];
    // const orderSequence = [4, 0, 1, 2, 5, 3];
    // // Reorder items according to the specified sequence
    // const reorderedCards = orderSequence.map(index => allItems[index]).filter(Boolean);
    // return reorderedCards;
    return  allItems 
  
  }, [visitsProduct]);

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
      <RouteSpecificMeta
      title={QkrvisitHomeMeta.title}
      description={QkrvisitHomeMeta.description}
      image={socialImage}
      SchemaData={QkrvisitHomeSchemaData}
      />
      <QkrHeroSection HeroSectionData={VisitHeadeData} col1={5} col2={6} xl1={5} xl2={6} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />
     
     <div className="field-force-features">
      <Container>
        <SectionHeading subTitle="" title={visitsProduct.heading} description={visitsProduct.headDesc} headingUnderLine={false} />
        <Row className="row-space-1_5">
          {allCards.map((item, index) => (
            <Col lg={4} className={getColumnSpacing(index)} key={item.id || `additional-${index}`}>
              <Card className={getCardColorClass(index)}>
                <Card.Body>
                  <div className={`icon ${item.iconClass}`}></div>
                  <h3 dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                  <p dangerouslySetInnerHTML={sanitizeHtml(item.desc)}></p>
                  <Link to={item.urls} className="link" dangerouslySetInnerHTML={sanitizeHtml(item.readMore)}></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

      <div className="benefits-qkrhr">
        <Container>
          {BenefitsQkrvisitData.map((item, idx) => (
            <Fragment key={idx}>
              <Row className="justify-content-end">
                <Col lg={10} xl={7} xxl={6}>
                  <h2 className="text-gradient text-right" dangerouslySetInnerHTML={sanitizeHtml(item.heading)}></h2>
                  <p className="mb-5 text-right" dangerouslySetInnerHTML={sanitizeHtml(item.description)}></p>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center">
                <Col lg={11} xl={11} xxl={10}>
                  <div className="row row-space-1_5">
                    {item.benefits.map((card, cardIndex) => (
                      <div key={cardIndex} className={`col-lg-3 ${card.m}`}>
                        <Card className="w-100">
                          <Card.Body>
                            <div className={`icon ${card.icon}`}></div>
                            <h3 dangerouslySetInnerHTML={sanitizeHtml(card.title)}></h3>
                            <p dangerouslySetInnerHTML={sanitizeHtml(card.description)}></p>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Fragment>
          ))}
        </Container>
      </div>

      <div className="dotted-bg">
        <section className="qkrhr-wrapper">
          <Container>
            {SimplifyAutomateData.map((data, id) => (
              <Row key={id}>
                <Col lg={6} xl={7} xxl={6} className="order-m-1">
                  <div className="qkrhr-left">
                    {data.steps.map((step, idx) => (
                      <div className={`step step${step.id}`} key={idx}>
                        <h3 dangerouslySetInnerHTML={sanitizeHtml(step.title)}></h3>
                        <p dangerouslySetInnerHTML={sanitizeHtml(step.description)}></p>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={6} xl={5} xxl={6} className="order-m-0">
                  <div className="qkrhr-right">
                    <h2><span className="text-gradient" dangerouslySetInnerHTML={sanitizeHtml(data.sectionTitle)}></span></h2>
                    <p className="intro" dangerouslySetInnerHTML={sanitizeHtml(data.intro)}></p>
                  </div>
                </Col>
              </Row>
            ))}
          </Container>
        </section>
      </div>

      <div className="field-force">
        <Container>
          {FieldAutomationData.map((item, idx) => (
            <Fragment key={idx}>
              <Row className="justify-content-between align-items-center">
                <Col lg={8} xl={7} xxl={7}>
                  <SectionHeading subTitle="" title={item.sectionTitle} description={item.sectionDescription} headingUnderLine={false} subTitleCenter={false} />

                  <Row>
                    {item.cards.map((card, cardIndex) => (
                      <Col lg={4} key={cardIndex}>
                        <Card >
                          <Card.Body>
                            <div className={`icon ${card.icon}`}></div>
                            <h3 dangerouslySetInnerHTML={sanitizeHtml(card.title)}></h3>
                            <p dangerouslySetInnerHTML={sanitizeHtml(card.description)}></p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={4} xl={5} xxl={4}>
                  <Image loading="lazy" fluid src={item.imgUrl} alt={item.sectionTitle} />
                </Col>
              </Row>
            </Fragment>
          ))}
        </Container>
      </div>

      {FieldForceManagementFaq && (
				<FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={FieldForceManagementFaq} />
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
  );
};

export default QkrvisitHome;
