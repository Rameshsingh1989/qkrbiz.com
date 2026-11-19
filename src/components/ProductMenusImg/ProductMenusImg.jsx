import { Fragment } from "react";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import SectionHeading from "../SectionHeading/SectionHeading";
import './ProductMenusImg.scss';

const ProductMenusImg = ({ headerData, appsClass, filterType, subFilterType }) => {

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
      {headerData.map((header, hIndex) => {

        const matchingProduct = header.ProductMenuData.find(
          item => item.IsProduct === filterType
        );
        const productUrl = matchingProduct?.urls || "";
          
        return (
          <section className={`all-product-menus ${appsClass}`} key={hIndex}>

            {header.ProductMenuData.map((productItem, productIndex) => (
              <Fragment key={productIndex}>
                {productItem.IsProduct === filterType && (
                  
                  <Container>
                      {!subFilterType && (
                        <>
                          <Row className="justify-content-center align-items-center">
                            <Col lg={12} xl={12} xxl={12}>
                                <SectionHeading subTitle="" title={productItem.heading} description={productItem.headDesc} headingUnderLine={false} />
                            </Col>
                          </Row>
                          <Row>
                          {productItem.ProductList.map((hrMenu, hrIndex) => (
                              <Col md={6} lg={4}  key={hrIndex} className="d-flex">
                                <Link to={hrMenu.urls} className={`card w-100 ${hrMenu.iconClass}`}>
                                  <div className="card-header">
                                      <img loading="lazy" src={hrMenu.imgUrls} alt={hrMenu.title?.replace(/<[^>]+>/g, "")} className="img-fluid"/>
                                  </div>
                                  <div className="card-body">
                                    <h3 dangerouslySetInnerHTML={sanitizeHtml(hrMenu.title)} />
                                    <p dangerouslySetInnerHTML={sanitizeHtml(hrMenu.desc)} />
                                  </div>
                                </Link>
                              </Col>
                            ))}
                          </Row>
                        </>
                      )}
                    
                      {productItem.ProductList.map((hrMenu, hrIndex) => {
                        if (hrMenu.IsProduct === subFilterType) {
                          return (
                            <Fragment key={hrIndex}>
                              
                              <Row className="justify-content-center align-items-center">
                                <Col lg={12} xl={12} xxl={12}>
                                  <div className="heading-title text-center">
                                    <h2 className="under-line mb-2" dangerouslySetInnerHTML={sanitizeHtml(hrMenu.heading)} />
                                    <p className="text-center fn-4 mb-4" dangerouslySetInnerHTML={sanitizeHtml(hrMenu.headDesc)} />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                    {hrMenu.ListData.map((List, index) => (
                                      <Col md={6} lg={4}  key={index} className="d-flex">
                                        <Link to={`${productUrl}/${List.urls}`} className="card w-100">
                                          <div className="card-header">
                                              <img loading="lazy" src={List.imgUrls} alt={List.title?.replace(/<[^>]+>/g, "")} className="img-fluid"/>
                                          </div>
                                          <div className="card-body">
                                            <h3 dangerouslySetInnerHTML={sanitizeHtml(List.title)} />
                                            <p dangerouslySetInnerHTML={sanitizeHtml(List.desc)} />
                                          </div>
                                        </Link>
                                      </Col>
                                    ))}
                                  </Row>
                            </Fragment>
                          );
                        }
                        return null;
                      })}
                  </Container>
                )}
              </Fragment>
            ))}
          </section>
        )
        
      })}
    </>
  );
};

  export default ProductMenusImg;
