import {Fragment }  from 'react';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import PlatformFeatures from '../../../components/PlatformFeatures/PlatformFeatures';
import QkrHeroSection from '../../../components/QkrHeroSection/QkrHeroSection';
import { BenefitsData } from '../../Hrms/QkrhrHome/QkrhrHomeData';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { MoreFeatues } from '../../../components/MoreFeatures/MoreFeatues.jsx';
import ClientLogoScroll from '../../../components/ClientLogoScroll/ClientLogoScroll.jsx';
import { CustomerAllData } from '../../../pages/Customers/CustomersAllData.js';
import { TaskHeadData,TabsScrollTaskData,GettingWorkData,CompliancesData, TaskDigitalPlatform , TaskHomeMeta } from './TaskData';
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import TaskSliders from './TaskSliders.jsx';
import BenefitsSection from '../../../components/BenefitsSection/BenefitsSection.jsx';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml.js';
import { TaskFeatureData } from '../../../components/MoreFeatures/TaskFeatureData.js';
import { taskSchemaData } from './TaskSchemaData.js';
import SectionHeading from '../../../components/SectionHeading/SectionHeading.jsx';

import "./TaskHome.scss";

const TaskHome = () => {

  const socialImage = ImagesUrl_ogImages.Task;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>

          <RouteSpecificMeta
          title={TaskHomeMeta.title}
          description={TaskHomeMeta.description}
          image={socialImage}
          SchemaData={taskSchemaData}  
          />
          <QkrHeroSection HeroSectionData={TaskHeadData} col1={5} col2={6} xl1={5} xl2={6} />

          <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

          <TaskSliders TabTaskData={TabsScrollTaskData} conBg="bg-deepsky-extralight" />

          <div className="wrapper-area box-with-image getting-work">
              <div className="container">
                  {GettingWorkData.map((workList, workIndex)=>(
                        <Fragment key={workIndex}>
                            <div className="row justify-content-center align-items-center mt-4">
                                <div className="col-lg-12 col-xl-11 col-xxl-11 text-center">
                                    <SectionHeading subTitle="" title={workList.title} description="" headingUnderLine={false} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {workList.BoxList.map((boxli, boxliIndex)=>(
                                      <div className="col-lg-4 d-flex mb-3" key={boxliIndex}>
                                          <div className="card h-100">
                                            <div className="card-header">
                                              <img loading="lazy" src={boxli.imgUrls} className="img-fluid" alt={boxli.heads} />
                                            </div>
                                            <div className="card-body pb-0">
                                                <h3 dangerouslySetInnerHTML={sanitizeHtml(boxli.heads)}></h3>
                                                <p dangerouslySetInnerHTML={sanitizeHtml(boxli.desc)}></p>
                                            </div>
                                            <div className="card-footer">
                                                  <ul className="list-unstyled icon-deepsky-list">
                                                      {boxli.Listing.map((listItem, ListIndex)=>(
                                                            <li key={ListIndex} dangerouslySetInnerHTML={sanitizeHtml(listItem.li)}></li>
                                                        ))}
                                                  </ul>
                                                  
                                            </div>
                                            <Link to={boxli.link} className="solution-link rounded-pill mt-4">{boxli.linkText}</Link>
                                          </div>
                                      </div>
                                ))}    
                            </div>
                        </Fragment>
                  ))}
              </div>
          </div>

          <div className="py-4 mb-5">
              <Container>
                  <div className="compliances">
                      {CompliancesData.map((Compli, CompliIndex)=>(
                        <Row className="justify-content-center" key={CompliIndex}>
                            <Col lg={12} xl={6}>
                                  <img loading="lazy" src={Compli.imgUrl} className="img-fluid mb-3" alt="Compliances" />
                            </Col>
                            <div className="col-lg-12 col-xl-6 p-left-lg-3">
                                <SectionHeading subTitle="" title={Compli.title} description={Compli.desc} subTitleCenter={false} headingUnderLine={false} />     
                                <div className="card mb-4">
                                  <div className="card-body">
                                      <p className='fn-3' dangerouslySetInnerHTML={sanitizeHtml(Compli.ulList)}></p>                                      
                                  </div>
                                  
                                </div>
                                <Link to={Compli.link} className="btn btn-default rounded-pill">Solution</Link>

                                

                            </div>
                        </Row>
                      ))}
                    
                  </div>
              </Container>
          </div>

          <BenefitsSection data={BenefitsData} title="Benefits" subtitle="" />
 
          <MoreFeatues MoreFeatureData={TaskFeatureData} />
 
          <div className="container">
              <div className="py-5 px-3 bg-deepsky-dark rounded-5">
                  <div className="row justify-content-center align-items-center mt-2">
                    {TaskDigitalPlatform.map((ptext, pIndex)=>(
                      <div className="col-lg-12 col-xl-11 col-xxl-8 text-center over-lay" key={pIndex}>
                        <p className="fn-3 text-white" dangerouslySetInnerHTML={sanitizeHtml(ptext.desc)}></p> 
                      </div>
                    ))}
                  </div>
              </div>            
          </div>

          <PlatformFeatures />

    </>
  )
}

export default TaskHome;