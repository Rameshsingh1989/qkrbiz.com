import { Card, Col, Container, Row } from 'react-bootstrap';
import { HeaderMenuData } from '../../navigation/data/HeaderMenuData';
import { Link } from 'react-router';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import SectionHeading from '../SectionHeading/SectionHeading';
import './PlatformFeatures.scss';  

const PlatformFeatures = () => {
    
 const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <div className="platformfeatures_home">
            <Container>
                <Row className="justify-content-center align-items-center mb-4">
                    <Col lg={10} xl={8} xxl={7} className="text-center">
                        <SectionHeading subTitle="" title="Platform Features" description="Ease of use with actionable intelligence on every page" headingUnderLine={false} />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col lg={12} xl={12} xxl={12}> 
                        {HeaderMenuData.map((headPlatform, plIndex)=>(           
                            <Row className="justify-content-center" key={plIndex}>
                                {headPlatform.PlatformFeatureData.map((cards)=>(
                                <Col sm={12} md={6} lg={4} xl={4} xxl={3} className="d-flex" key={cards.id}>
                                    <Card className="w-100">
                                        <Card.Body>       
                                            <div className="platfrom-img">
                                                <img src={cards.imgUrls} alt={cards.title} loading="lazy" />
                                            </div>
                                            {/* cards.headclr */}
                                            <p dangerouslySetInnerHTML={sanitizeHtml(cards.title)} />
                                            <h3 dangerouslySetInnerHTML={sanitizeHtml(cards.desc)} />
                                        </Card.Body>
                                        <Card.Footer>
                                                <Link className="link" to={cards.urls} dangerouslySetInnerHTML={sanitizeHtml(cards.readMore)} />
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                ))}
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>	
        </div>
    </>
  )
}

export default PlatformFeatures;