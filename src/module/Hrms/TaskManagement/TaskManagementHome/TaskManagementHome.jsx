import { useEffect, Fragment } from 'react';
import { Link } from 'react-router';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { TaskManagementHeadData, TaskManagementData, TaskManagementAllData, HrEfficiencyData , TaskManagementHomeMeta } from './TaskManagementData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import VideoWindowPlay from '../../../../components/Video/VideoWindowPlay';
import VideoAutoPlay from '../../../../components/Video/VideoAutoPlay';
import QkrHeroSection from '../../../../components/QkrHeroSection/QkrHeroSection';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { MoreFeatues } from '../../../../components/MoreFeatures/MoreFeatues';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { TaskFeatureData } from '../../../../components/MoreFeatures/TaskFeatureData';
import { TaskManagementSchemaData } from './TaskManagementSchemaData';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import "./TaskManagementHome.scss"

const TaskManagementHome = () => {

    const socialImage = ImagesUrl_ogImages.QkrHr;
    
    const sanitizeHtml = useSanitizeHtml();

    useEffect(() => {
        const expenseHrAllNewArr = [...TaskManagementAllData];
        expenseHrAllNewArr.splice(2, 0, 'expenseHrAllData');
       // console.log('dfddf', expenseHrAllNewArr)
    }, [])

    return (
        <>
            <RouteSpecificMeta
            title={TaskManagementHomeMeta.title}
        	description={TaskManagementHomeMeta.description}
            image={socialImage}
            SchemaData={TaskManagementSchemaData}
            />

            <QkrHeroSection HeroSectionData={TaskManagementHeadData} col1={6} col2={5} xl1={5} xl2={6} />

            <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

            <div className="py-5 game-changer">
                <Container>
                    {TaskManagementData.map((AutomateList, AutomateIndex) => (
                        <Row className="row-space-1_5" key={AutomateIndex}>
                            <Col lg={4} xl={4} xxl={4} className="d-flex">
                               <div className='w-100'>
                                    <SectionHeading subTitle="" title={AutomateList.title} description={AutomateList.description} subTitleCenter={false} headingUnderLine={false} /> 
                                </div>
                            </Col>
                            {AutomateList.Listing.map((AutomateInner, AutomateInnerIndex) => (
                                <Col lg={4} key={AutomateInnerIndex} className="d-flex">
                                    <div className={`card w-100 ${AutomateInner.cls}`} >
                                        <div className="card-body">
                                            <div className={`hr-icon`}>
                                                <Image loading="lazy" src={AutomateInner.icons} alt={AutomateInner.heads} />
                                            </div>
                                            <h3 dangerouslySetInnerHTML={sanitizeHtml(AutomateInner.heads)} />
                                            <p dangerouslySetInnerHTML={sanitizeHtml(AutomateInner.desc)} />
                                        </div>
                                    </div>
                                </Col>
                            ))}

                        </Row>
                    ))}
                </Container>
            </div>
            
            {TaskManagementAllData.map((expSec, expIndex) => (
                <Fragment key={expIndex}>
                    {expIndex % 2 === 0 ? (
                        <>
                            {(expIndex === 2 &&

                                <div className="revolutionizing-hr">
                                    <Container>
                                        {HrEfficiencyData.map((list, index) => (
                                        <div key={index}>
                                            <Row className="mb-4 justify-content-center align-items-center">
                                            <Col lg={12} xl={5}>
                                                <SectionHeading subTitle="" title={list.title} description="" headingUnderLine={false} /> 
                                            </Col>
                                            </Row>
                                            <Row className="justify-content-center align-items-end">
                                            <Col lg={4}>
                                                {list.features.slice(0, 2).map((feature, i) => (
                                                <Card key={i} className={feature.cls}>
                                                    <Card.Body>
                                                        <h3 className="text-gradient fn-3" dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                                                        <ul className="ul-icon">
                                                            <li className="tick-icon-magenta" key={index} dangerouslySetInnerHTML={sanitizeHtml(feature.description)} />
                                                        </ul>
                                                    </Card.Body>
                                                </Card>
                                                ))}
                                            </Col>

                                            <Col lg={4} className="revolutionizing-img">
                                                <Image loading="lazy" fluid className='img-ab' src={list.imgUrl} alt={list.title} />
                                            </Col>

                                            <Col lg={4}>
                                                {list.features.slice(2, 4).map((feature, i) => (
                                                <Card key={i} className={feature.cls}>
                                                    <Card.Body>
                                                        <h3 className="text-gradient fn-3" dangerouslySetInnerHTML={sanitizeHtml(feature.title)} />
                                                        <ul className="ul-icon">
                                                            <li className="tick-icon-magenta" key={index} dangerouslySetInnerHTML={sanitizeHtml(feature.description)} />
                                                        </ul>
                                                    </Card.Body>
                                                </Card>
                                                ))}
                                            </Col>
                                            </Row>
                                        </div>
                                        ))}
                                    </Container>
                                </div>
                            )}
                            <section className="wrapper-area">
                                <div className="container">
                                    <Row className="justify-content-between align-items-center">
                                        {/* <div className={`order-m-1 mt-1-xs ${expIndex === 0 ? 'col-lg-5 ' : 'col-lg-6 '} `} > */}
                                        <Col lg={ expIndex === 3 ? 5 : 6} className="order-m-1">
                                            {expSec.videoUrl ? (
                                                expSec.videoAuto === true ? (
                                                    <VideoAutoPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                                                ) : (
                                                    <VideoWindowPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                                                )
                                            ) : (
                                                <Image loading="lazy" fluid src={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} />
                                            )}
                                        </Col>
                                        <Col lg={5} className="order-m-0">
                                            <SectionHeading subTitle="" title={expSec.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                                            {expSec?.List && (
                                                <ul className="list-unstyled icon-left icon-black-list">
                                                    {expSec.List.map((item, index) => (
                                                        <li key={index} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                                                    ))}
                                                </ul>
                                            )}
                                            {expSec.id === 5 && (
                                                <Link to="/workflow" className="btn btn-outline-magenta mb-4 mt-3">
                                                    Workflow features
                                                </Link>
                                            )
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        </>
                    ) : (
                        <>
                            <section className="wrapper-area">
                                <div className="container">
                                    <Row className="row justify-content-between align-items-center">
                                      <Col lg={5} className="order-m-1">
                                            <SectionHeading subTitle="" title={expSec.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                                            {expSec?.List && (
                                                <ul className="list-unstyled icon-left icon-black-list">
                                                    {expSec.List.map((item, index) => (
                                                        <li key={index} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                                                    ))}
                                                </ul>
                                            )}
                                        </Col>
                                        <Col lg={5} className="order-m-1 mt-1-xs">
                                            {expSec.videoUrl ? (
                                                expSec.videoAuto === true ? (
                                                    <VideoAutoPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                                                ) : (
                                                    <VideoWindowPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                                                )
                                            ) : (
                                                <Image loading="lazy" fluid src={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} />
                                            )}
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        </>
                    )}
                </Fragment>
            ))}

            <MoreFeatues MoreFeatureData={TaskFeatureData} />
        </>
    )
}
export default TaskManagementHome;