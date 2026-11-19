import { useEffect, Fragment } from 'react';
import { Link } from 'react-router';
import { ExpHeadData, RevampExpenseData, AutomateExpenseData, ExpenseFeatureData, ExpenseAllData, BenefitsData , ExpenseHomeMeta } from './ExpenseData';
import { ClientReviewData } from '../../../components/ClientStories/ClientReviewData';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import VideoWindowPlay from '../../../components/Video/VideoWindowPlay';
import VideoAutoPlay from '../../../components/Video/VideoAutoPlay';
import BenefitsSection from '../../../components/BenefitsSection/BenefitsSection';
import PlatformFeatures from '../../../components/PlatformFeatures/PlatformFeatures';
import QkrHeroSection from '../../../components/QkrHeroSection/QkrHeroSection';
import ClientLogoScroll from '../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../pages/Customers/CustomersAllData';
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml';
import { Card, Image } from 'react-bootstrap';
import qkrexpenseSchemaData from './qkrexpenseSchemaData';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import "./ExpenseHome.scss";

const ExpenseHome = () => {

  const socialImage = ImagesUrl_ogImages.Expense;

  const sanitizeHtml = useSanitizeHtml();

  useEffect(() => {
    const expenseAllNewArr = [...ExpenseAllData];
    expenseAllNewArr.splice(3, 0, 'expenseAllData');
    // console.log('dfddf', expenseAllNewArr)
  }, [])
  useEffect(() => {
    const benefitsNewArr = [...ExpenseAllData];
    benefitsNewArr.splice(5, 0, 'benefitsNewArr');
    // console.log('bbbb', benefitsNewArr)
  }, [])


  return (
    <>
      <RouteSpecificMeta
        title={ExpenseHomeMeta.title}
        description={ExpenseHomeMeta.description}
        image={socialImage}
        SchemaData={qkrexpenseSchemaData}
      />
      <QkrHeroSection HeroSectionData={ExpHeadData} col1={5} col2={6} xl1={5} xl2={6} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <div className="py-4 revamp-expens">
        <div className="container">
          {RevampExpenseData.map((RevampList, RevampIndex) => (
            <Fragment key={RevampIndex}>
              <SectionHeading subTitle="" title={RevampList.title} description={RevampList.description} headingUnderLine={false} />
              <div className="row justify-content-center">
                {RevampList.BoxList.map((boxli, boxliIndex) => (
                  <div className="col-lg-4 d-flex mb-3" key={boxliIndex}>
                    <div className="card h-100">
                      <div className="card-header">
                        <img loading="lazy" src={boxli.imgUrls} className="img-fluid" alt={boxli.heads} />
                      </div>
                      <div className="card-body">
                        <h3 className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(boxli.heads)}></h3>
                      </div>
                      <div className="card-footer">
                        <ul className="list-unstyled icon-voilet-list">
                          {boxli.Listing.map((listItem, ListIndex) => (
                            <li key={ListIndex} dangerouslySetInnerHTML={sanitizeHtml(listItem.li)}></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="py-5 expense-approval">
        <div className="container">
          {AutomateExpenseData.map((AutomateList, AutomateIndex) => (
            <div className="row justify-content-between align-items-center" key={AutomateIndex}>
              <div className="col-lg-5">
                <SectionHeading subTitle="" title={AutomateList.title} description={AutomateList.description} headingUnderLine={false} subTitleCenter={false} />
                {AutomateList.Listing.map((AutomateInner, AutomateInnerIndex) => (
                  <div className="d-flex align-items-start" key={AutomateInnerIndex}>
                    <div className="flex-shring-0"><img loading="lazy" src={AutomateInner.icons} className="icon-square" alt='arrow' /></div>
                    <div className="flex-grow-1">
                      <h3 dangerouslySetInnerHTML={sanitizeHtml(AutomateInner.heads)}></h3>
                      <p dangerouslySetInnerHTML={sanitizeHtml(AutomateInner.desc)}></p>
                    </div>
                  </div>
                ))}

              </div>
              <div className="col-lg-5">
                <img loading="lazy" className="img-fluid mt-3-xs" src={AutomateList.imgUrls} alt="Automate Expense" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="expense-features">
        <div className="container">
          {ExpenseFeatureData.map((FeatureList, FeatureListIndex) => (
            <div className="row" key={FeatureListIndex}>
              {FeatureList.imgUrl && (
                <>
                  <div className="col-lg-12 col-xl-6 col-xxl-5 d-flex flex-column">
                    <SectionHeading subTitle="" title={FeatureList.title} description={FeatureList.description} subTitleCenter={false} headingUnderLine={false} /> 
                    <img loading="lazy" src={FeatureList.imgUrl} className="img-fluid rounded-4 mb-space-4" alt={FeatureList.title} />
                  </div>
                  <div className="col-lg-12 col-xl-6 col-xxl-7 d-flex">
                    <div className="row">
                      {FeatureList.ExpenseFeaturs.slice(0, 4).map((FeatureItem, FeatureIndex) => (
                        <div className="col-lg-6 col-xxl-6 d-flex" key={FeatureIndex}>
                            <Card className="w-100">
                                <Card.Body>
                                    <Image loading="lazy" className="icons" src={FeatureItem.imgUrls} alt={FeatureItem.heads} /> 
                                    <h3>{FeatureItem.heads}</h3>
                                    <p className="mb-0">{FeatureItem.desc}</p>
                                </Card.Body>
                            </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {FeatureList.imgUrl2 && (
                <>
                  <div className="col-lg-12 col-xl-12 col-xxl-7 d-flex">
                    <div className="row">
                      {FeatureList.ExpenseFeaturs.slice(4).map((FeatureItem, FeatureIndex) => (
                        <div className="col-lg-6 col-xxl-6 d-flex" key={FeatureIndex}>
                          <Card className="w-100">
                                <Card.Body>
                                    <Image loading="lazy" className="icons" src={FeatureItem.imgUrls} alt={FeatureItem.heads} /> 
                                    <h3>{FeatureItem.heads}</h3>
                                    <p className="mb-0">{FeatureItem.desc}</p>
                                </Card.Body>
                            </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-12 col-xxl-5 d-flex">
                    <img loading="lazy" src={FeatureList.imgUrl2} className="img-fluid rounded-4 expense-hide-img mb-space-4" alt="Arrow" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {ExpenseAllData.map((expSec, expIndex) => (
        <Fragment key={expIndex}>
          {expIndex % 2 === 0 ? (
            <>
              <section className="wrapper-area">
                <div className="container">
                  <div className="row justify-content-between align-items-center">
                    <div className={`order-m-0 mt-1-xs ${expIndex === 0 ? 'col-lg-5 ' : 'col-lg-6 '} `} >
                      {expSec.videoUrl ? (
                        expSec.videoAuto === true ? (
                          <VideoAutoPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                        ) : (
                          <VideoWindowPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.descs?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                        )
                      ) : (
                        <img loading="lazy" className="img-fluid" src={expSec.imgUrl} alt={expSec.descs?.replace(/<[^>]+>/g, "")} />
                      )}
                    </div>
                    <div className="col-lg-5 order-m-1">
                      <SectionHeading subTitle="" title={expSec.title} description={expSec.descs} headingUnderLine={false} subTitleCenter={false} />
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
          ) : (
            <>
              {(expIndex === 3 &&
                <div className="clients-say">
                  <div className="container">
                    {ClientReviewData.map((client, clIndex) => (
                      <Fragment key={clIndex}>
                        {client.id === 1 &&
                          <div className="row justify-content-between clients-sayInner">
                            <div className="col-lg-3">
                              <div className="clint-img">
                                <img loading="lazy" src={client.imgUrl} className="img-fluid" alt={client.title} />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <p className="quote-right left" dangerouslySetInnerHTML={sanitizeHtml(client.desc)} />
                              <div className="d-flex">
                                <div className="flex-shrink-0 left-border"></div>
                                <div className="flex-grow-1">
                                  <h3 className="text-title" dangerouslySetInnerHTML={sanitizeHtml(client.title)} />
                                  <p className="text-violet" dangerouslySetInnerHTML={sanitizeHtml(client.subTitle)} />
                                </div>
                              </div>


                            </div>
                          </div>
                        }
                      </Fragment>
                    ))}
                  </div>
                </div>
              )}
              {(expIndex === 5 &&

               <BenefitsSection data={BenefitsData} title="Benefits" subtitle="" />

              )}
              <section className="wrapper-area">
                <div className="container">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 order-m-1">
                       <SectionHeading subTitle="" title={expSec.title} description={expSec.descs} headingUnderLine={false} subTitleCenter={false} />
                    </div>
                    <div className="col-lg-6 order-m-0  mt-1-xs">
                      {expSec.videoUrl ? (
                        expSec.videoAuto === true ? (
                          <VideoAutoPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                        ) : (
                          <VideoWindowPlay videoSource={expSec.videoUrl} videoPoster={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} videoShadow="" radius="" />
                        )
                      ) : (
                        <img loading="lazy" className="img-fluid" src={expSec.imgUrl} alt={expSec.title?.replace(/<[^>]+>/g, "")} />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </Fragment>
      ))}

      <PlatformFeatures />

    </>
  )
}
export default ExpenseHome;
