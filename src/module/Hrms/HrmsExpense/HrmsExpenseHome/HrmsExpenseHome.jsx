import { useEffect , Fragment} from 'react';
import { Link } from 'react-router';
import { ExpHeadData,AutomateExpenseData,ExpenseAllData, HowiTWorks, EmployeExpenseFaq} from './HrExpenseData.js';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { HrmsExpenseHomeMeta } from "./HrExpenseData";
import { Col, Container, Image, Row } from 'react-bootstrap';
import VideoWindowPlay from '../../../../components/Video/VideoWindowPlay.jsx';
import VideoAutoPlay from '../../../../components/Video/VideoAutoPlay.jsx';
import QkrHeroSection from '../../../../components/QkrHeroSection/QkrHeroSection.jsx';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll.jsx';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent.jsx';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData.js';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml.js';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { HrmsExpenseHomeSchemaData } from './HrmsExpenseHomeSchemaData.js';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading.jsx';

import "./HrmsExpenseHome.scss"

 const HrmsExpenseHome = () => {

    const socialImage = ImagesUrl_ogImages.QkrHr;
    const sanitizeHtml = useSanitizeHtml();

    useEffect(()=>{
        const expenseHrAllNewArr = [...ExpenseAllData];
        expenseHrAllNewArr.splice(3, 0, 'expenseHrAllData');
        // console.log('dfddf', expenseHrAllNewArr)
    },[])

    return (
      <>	
        <RouteSpecificMeta
        title={HrmsExpenseHomeMeta.title}   	     	
        description={HrmsExpenseHomeMeta.description}
        image={socialImage}
        SchemaData={HrmsExpenseHomeSchemaData}
        />

        <QkrHeroSection HeroSectionData={ExpHeadData} col1={6} col2={5} xl1={6} xl2={5}/>

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

	   	 <div className="py-5 expense-approval">
              <Container>
                  {AutomateExpenseData.map((AutomateList, AutomateIndex)=>(
                    <Row className="justify-content-between align-items-center" key={AutomateIndex}>
                        <Col lg={4} xl={4} xxl={4}>
  
                            <SectionHeading subTitle="" title={AutomateList.title} description={AutomateList.description} subTitleCenter={false} headingUnderLine={false} />  
                           
                          </Col>
                          <Col lg={8} xl={8} xxl={8}>    
                            <Row>
                                {AutomateList.Listing.map((AutomateInner, AutomateInnerIndex)=>(
                                <Col lg={4} key={AutomateInnerIndex}>
                                    <div className="card" >
                                        <div className="card-body">
                                        <div className={`hr-icon ${AutomateInnerIndex === 2 ? 'icon':null }`}>
                                                <Image loading="lazy" src={AutomateInner.icons} alt={AutomateInner.heads}/> 
                                        </div>
                                            <h3 dangerouslySetInnerHTML={sanitizeHtml(AutomateInner.heads)} />
                                            <p dangerouslySetInnerHTML={sanitizeHtml(AutomateInner.desc)} />
                                        </div>   
                                    </div>
                                </Col>
                                ))}
                            </Row>                 
                          </Col>
                    </Row>
                  ))}
              </Container>	
         </div>

        {ExpenseAllData.map((expSec, expIndex)=>(
            <Fragment key={expIndex}>
                {expIndex % 2 === 0 ? (
                <>
                    <section className="wrapper-area">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className={`order-m-1 mt-1-xs ${expIndex === 0 ? 'col-lg-5 ':'col-lg-6 ' } `} >
                                    {expSec.videoUrl ? (
                                        expSec.videoAuto === true ? (
                                            <VideoAutoPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius=""/> 
                                        ):(
                                            <VideoWindowPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius=""/>
                                        )
                                    ) : (
                                        <Image loading="lazy" fluid src={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} />
                                    )}
                                </div>
                                <div className="col-lg-5 order-m-0">
                                    <SectionHeading subTitle="" title={expSec.title} description="" subTitleCenter={false} headingUnderLine={false} />  
                                    {expSec?.List && (
                                        <ul className="list-unstyled icon-left icon-blue-list">
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
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                ):(
                <>
                    {(expIndex === 1 && 

                        <div className="workflow-container">
                            <Container>
                                {HowiTWorks.map((list, index )=>(
                                    <div className="row mb-5 align-items-center" key={index}>
                                        <div className="col-lg-12 col-xl-2 col-xxl-2">
                                            {/* <h2 className="how-it-works-title"><span dangerouslySetInnerHTML={sanitizeHtml(list.title)}></span></h2> */}
                                            <SectionHeading subTitle="" title={list.title} description="" subTitleCenter={false} headingUnderLine={false} />  
                                        </div>
                                        <div className="col-lg-12 col-xl-10 col-xxl-10">
                                            <div className="row">
                                            {list.Listing.map((innerList, innerIndex, array )=>{
                                                const lastIndex = array.length - 1;
                                                return (
                                                    <Fragment key={innerIndex}>
                                                        <div className="col-lg-3 col-xl-3 col-xxl-3">
                                                            <div className={`step-card ${innerList.cls}`}>
                                                                <span className="step-number">{`0${innerList.no}`}</span>
                                                                <h3 className="step-title" dangerouslySetInnerHTML={sanitizeHtml(innerList.title)} />
                                                                <p className="step-description" dangerouslySetInnerHTML={sanitizeHtml(innerList.desc)} />
                                                            </div>
                                                        </div>
                                                        {innerIndex !== lastIndex ? (
                                                            <div className="col-lg-1 col-xl-1 col-xxl-1 d-none d-xl-block">
                                                                <div className="connector"></div>
                                                            </div>
                                                        ):null}
                                                    </Fragment>
                                                )
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        
                            </Container>
                        </div>
                    )}

                    <section className="wrapper-area">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-5 order-m-0">
                                        <SectionHeading subTitle="" title={expSec.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
              
                                         {expSec?.List && (
                                             <ul className="list-unstyled icon-left icon-blue-list">
                                                {expSec.List.map((item, index) => (
                                                   <li key={index} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                                                ))}
                                            </ul>
                                          )}
                                    </div>
                                    <div className={`order-m-1 mt-1-xs ${ expIndex === 2 ? 'col-lg-7 ':'col-lg-7 ' } `}>
                                       {expSec.videoUrl ? (
                                            expSec.videoAuto === true ? (
                                              <VideoAutoPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius=""/> 
                                            ):(
                                              <VideoWindowPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius=""/>
                                            )
                                          ) : (
                                            <Image loading="lazy" fluid src={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} />
                                          )}
                                    </div>
                            </div>
                        </div>
                    </section>
                </>
                )}
            </Fragment>
        ))}
        
        {EmployeExpenseFaq && (
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={EmployeExpenseFaq} />
        )}

      </>
    )
  }
export default HrmsExpenseHome;