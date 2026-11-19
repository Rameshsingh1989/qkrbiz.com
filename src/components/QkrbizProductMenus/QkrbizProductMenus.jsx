import { Fragment } from "react";
import { Link } from "react-router";
import { Card, Col, Container, Row } from "react-bootstrap";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import SectionHeading from "../SectionHeading/SectionHeading";
import './QkrbizProductMenus.scss';

const QkrbizProductMenus = ({ headerData, appsClass, filterProduct = false, filterType, subFilterType, ref }) => {

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
      {headerData.map((header, hIndex) => {

        const productItem = header.ProductMenuData.find(
          item => item.IsProduct === filterType
        );

        const productUrl = productItem?.urls || "";

        return (
          <section ref={ref} className={`apps-area ${appsClass}`} key={hIndex}>
                <Container>
                     {filterProduct  && (
                        <Container key={hIndex}>
                          {/* <div className="heading-title text-center">
                            <h2 className="under-line" dangerouslySetInnerHTML={sanitizeHtml(header.title)} />
                          </div> */}
                          <SectionHeading subTitle="" title={header.title} description={header.description} headingUnderLine={false} />
                          <Row className="justify-content-center align-items-center">
                            <Col lg={12} xl={12} xxl={12}>
                              <Row>
                                {header.ProductMenuData.map((proItem, proIndex) => (
                                  <div className="col-md-6 col-lg-4 mb-4 d-flex" key={proIndex}>
                                    <Card className="w-100 h-100">
                                      <Card.Body>
                                        <div className="qkrimg-width">
                                          <img className={`qkrimg ${proItem.productClass}`} src={proItem.icon} alt={proItem.title?.replace(/<[^>]+>/g, "")} loading="lazy" decoding="async" />
                                        </div>
                                        <h3 dangerouslySetInnerHTML={sanitizeHtml(proItem.title)}></h3>
                                        <p dangerouslySetInnerHTML={sanitizeHtml(proItem.ApsDesc)} />
                                      </Card.Body>
                                      <Card.Footer>
                                        <Link to={proItem.urls} className="text-magenta arrowLink">{proItem.readMore}</Link>
                                      </Card.Footer>
                                    </Card>
                                  </div>
                                ))}
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                     )}
                      {productItem && !subFilterType && (
                        <>
                          <SectionHeading subTitle="" title={productItem.heading} description={productItem.headDesc} headingUnderLine={false} />

                          <Row className="justify-content-center align-items-center">
                            <Col lg={12} xl={12} xxl={12}>
                                <Row>
                                  {productItem.ProductList.map((hrMenu, hrIndex) => (
                                    <Col md={6} lg={4}  key={hrIndex} className="d-flex">
                                      <Card className="w-100">
                                        <Card.Body>
                                          {/* <span className={`qkrimg ${hrMenu.iconClass}`}></span> */}
                                          <div className="qkrimg-width">
                                              <img className={`qkrimg ${hrMenu.iconClass}`} src={hrMenu.icon} alt={hrMenu.title?.replace(/<[^>]+>/g, "")} loading="lazy" decoding="async" />
                                           </div>
                                          <h3 dangerouslySetInnerHTML={sanitizeHtml(hrMenu.title)} />
                                          <p dangerouslySetInnerHTML={sanitizeHtml(hrMenu.desc)} />
                                        </Card.Body>
                                        <Card.Footer>
                                          <Link to={hrMenu.urls} className="text-magenta arrowLink">
                                            {hrMenu.readMore}
                                          </Link>
                                        </Card.Footer>
                                      </Card>
                                    </Col>
                                  ))}
                                </Row>
                            </Col>
                          </Row>
                        </>
                      )}
                    
                      {productItem && subFilterType && productItem.ProductList.map((hrMenu, hrIndex) => {
                        if (hrMenu.IsProduct === subFilterType) {
                          return (
                            <Fragment key={hrIndex}>
                    
                              <SectionHeading subTitle="" title={hrMenu.heading} description={hrMenu.headDesc} headingUnderLine={false} />

                              <Row className="justify-content-center align-items-center">
                                <Col lg={12} xl={12} xxl={12}>
                                  <Row>
                                    {hrMenu.ListData.map((List, index) => (
                                      <Col md={6} lg={4}  key={index} className="d-flex">
                                        <Card className="w-100">
                                            <Card.Body>
                                                {/* <span className={`qkrimg ${List.iconClass}`}></span> */}
                                               <div className="qkrimg-width"> 
                                                <img className={`qkrimg ${List.iconClass}`} src={List.icon} alt={List.title?.replace(/<[^>]+>/g, "")} loading="lazy" decoding="async" />
                                                </div>
                                                <h3 dangerouslySetInnerHTML={sanitizeHtml(List.title)} />
                                                <p dangerouslySetInnerHTML={sanitizeHtml(List.desc)} />
                                                </Card.Body>
                                            <Card.Footer>
                                                <Link to={`${productUrl}/${List.urls}`}   className="text-magenta arrowLink">
                                                  {List.readMore}
                                                </Link>
                                            </Card.Footer>
                                          </Card>
                                      </Col>
                                    ))}
                                  </Row>
                                </Col>
                              </Row>
                            </Fragment>
                          );
                        }
                        return null;
                      })}
                  </Container>
          </section>
        )

      })}
    </>
  );
};

export default QkrbizProductMenus;