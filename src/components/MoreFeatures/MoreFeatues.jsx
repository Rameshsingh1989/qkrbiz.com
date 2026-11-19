import { Fragment } from "react"
import { Col,Card,Image, Container, Row } from "react-bootstrap"
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import SectionHeading from "../SectionHeading/SectionHeading";
import './MoreFeatues.scss';

export const MoreFeatues = ({MoreFeatureData}) => {

const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <div className="features-design board-features py-5">
            <Container> 
                {MoreFeatureData.map((TeamFeatureList, TeamFeatureIndex)=>(
                <Fragment key={TeamFeatureIndex}>
                    <Row className="justify-content-center align-items-center mb-5">
                        <Col lg={12} xl={11} xxl={10}>
                             <SectionHeading subTitle="" title={TeamFeatureList.title} description={TeamFeatureList.desc}  headingUnderLine={false} />      
                        </Col>
                    </Row>
                    <Row>
                    {TeamFeatureList.TeamsFeatureCard.map((sitem, teamId)=>(
                        <Col lg={6} xl={4} xxl={4} key={teamId} className="d-flex">
                            <Card className="w-100">
                                {sitem.imgUrls &&
                                <Card.Header className={`${sitem.cardBg}`}>
                                    <Image loading="lazy" src={sitem.imgUrls} alt={sitem.title} />
                                </Card.Header>
                                }
                                <Card.Body>
                                    {sitem.title && <h3 dangerouslySetInnerHTML={sanitizeHtml(sitem.title)}></h3>}
                                    {sitem.headDesc && <p className="text-magenta" dangerouslySetInnerHTML={sanitizeHtml(sitem.headDesc)}></p>}
                                    <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(sitem.desc)}></p>
                                </Card.Body>
                            </Card>
                        </Col> 
                        ))}
                    </Row>
                </Fragment>
                ))}
            </Container>
        </div>
    </>
  )
}
