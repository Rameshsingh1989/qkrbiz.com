import { Fragment } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import SectionHeading from '../SectionHeading/SectionHeading';

const FaqComponent = ({FaqData =[], subTitle, title, description}) => {
  
  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <section className="hrms-faq">
            <Container>
                    <Fragment>
                        <SectionHeading subTitle={subTitle} title={title} description={description} headingUnderLine={false} />
                        <Accordion>
                          <Row className="justify-content-center item-aligns-top">
                            <Col lg={6}>
                                {FaqData.map((item, index)=> (
                                  <Fragment key={index}> 
                                    {index % 2 === 0 && (
                                      <Accordion.Item eventKey={index.toString()}>
                                        <Accordion.Header as="h3"><span dangerouslySetInnerHTML={sanitizeHtml(item.Title)}/></Accordion.Header>
                                        <Accordion.Body><div dangerouslySetInnerHTML={sanitizeHtml(item.Content)}></div></Accordion.Body>
                                      </Accordion.Item>		
                                    )}
                                  </Fragment>
                                ))}
                            </Col>
                            <Col lg={6}>
                                {FaqData.map((item, index)=> (
                                  <Fragment key={index}> 
                                    {index % 2 !== 0 && (
                                      <Accordion.Item eventKey={index.toString()}>
                                        <Accordion.Header as="h3"><span dangerouslySetInnerHTML={sanitizeHtml(item.Title)}/></Accordion.Header>
                                        <Accordion.Body><div dangerouslySetInnerHTML={sanitizeHtml(item.Content)}></div></Accordion.Body>
                                      </Accordion.Item>
                                    )}
                                  </Fragment>
                                ))}
                            </Col>
                          </Row>
                        </Accordion>
                    </Fragment>
             
            </Container>
        </section>
    </>
  )
}

export default FaqComponent;