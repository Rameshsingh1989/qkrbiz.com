// import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const Accountable = ({SecureAcc}) => {

    const sanitizeHtml = useSanitizeHtml();

  return (
    <>
      <section className="accountable">
        {SecureAcc.map((Sectext, SecIndex) => (
          <Container key={SecIndex}>
            <Row className="justify-content-center align-items-center mt-3 mb-3">
              <Col lg={12} xl={12} xxl={10}>
                <SectionHeading subTitle="" title={Sectext.title} description={Sectext.desc} headingUnderLine={false} />
              </Col>
            </Row>
            {Sectext.SecureAccList.map((SecList, SeclistIndex, array) => {
                const lastIndex = array.length - 1;
                return (
                        <div key={SeclistIndex}>
                            {SecList.cls === "text-right" ? (
                                <Row>
                                    <Col lg={6}>
                                        <div className="d-flex row-reverse">
                                            <div className={`flex-shrink-1 ${SecList.cls}`}>
                                                <h3 className="subheading" dangerouslySetInnerHTML={sanitizeHtml(SecList.title)} />
                                                <p className="desc" dangerouslySetInnerHTML={sanitizeHtml(SecList.desc)} />
                                                <div className="line"></div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="secure_icon">
                                                    <Image src={SecList.imgUrl} alt={SecList.title} loading="lazy" decoding="async" />
                                                </div>
                                            </div>
                                        </div>	
                                    </Col>
                            </Row>
                            ):(
                            <Row>
                                <Col lg={6}></Col>
                                <Col lg={6}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="secure_icon">
                                                <Image src={SecList.imgUrl} alt={SecList.title} loading="lazy" decoding="async" />
                                            </div>
                                        </div>
                                        <div className={`flex-shrink-1 ${SecList.cls}`}>
                                              <h3 className="subheading" dangerouslySetInnerHTML={sanitizeHtml(SecList.title)} />
                                              <p className="desc" dangerouslySetInnerHTML={sanitizeHtml(SecList.desc)} />
                                              {SeclistIndex !== lastIndex ? (
                                                  <div className="line"></div>
                                              ):null}
                                        </div>
                                    </div>	
                                </Col>
                            </Row>
                        )}
                    </div>
                );
            })}
          </Container>
        ))}
      </section>
    
    </>
  )
}

export default Accountable