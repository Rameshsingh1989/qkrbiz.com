import { Fragment } from 'react';
import { ProjectsHeadData, ProjectsFeatureData,ProjectAccountingdata , ProjectHomeMeta } from './ProjectHomeData';
import { QkrbizPrimedData } from '../../Sales/SalesHome/SalesHomeData';
import PlatformFeatures from '../../../components/PlatformFeatures/PlatformFeatures';
import { BenefitsData } from '../../Tenders/TendersHome/TendersData';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import QkrHeroSection from '../../../components/QkrHeroSection/QkrHeroSection';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml';
import BenefitsSection from '../../../components/BenefitsSection/BenefitsSection';
import { Card, Image } from 'react-bootstrap';
import { projectSchemaData } from './ProjectSchemaData';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

import "./ProjectHome.scss";

const ProjectHome = () => {

const socialImage = ImagesUrl_ogImages.Project;
const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
        title={ProjectHomeMeta.title}
        description={ProjectHomeMeta.description}
        image={socialImage}
	    SchemaData={projectSchemaData}
        />

        <QkrHeroSection HeroSectionData={ProjectsHeadData} col1={5} col2={6} xl1={5} xl2={6} />
      
        <div className="projects-features bg-lateblue-light">
                <div className="container">
                    {ProjectsFeatureData.map((FeatureList, FeatureListIndex)=>(
                        <Fragment key={FeatureListIndex}>
                            {FeatureList.imgUrl1 && (
                                <div className="row t-row">
                                    <div className="col-lg-8 col-xxl-8 d-flex">
                                        <div className="card card-dark w-100">
                                            <div className="card-body card-body-pb-0">
                                                <div className="row">
                                                    <div className="col-lg-6 col-xxl-7 d-flex flex-column">
                                                        <h2 className="bottom-border border-slateblue-light mt-2" dangerouslySetInnerHTML={sanitizeHtml(FeatureList.title)}></h2> 
                                                        <p style={{ fontSize: 1.375+'rem', marginBottom: 1.5+'rem' }} dangerouslySetInnerHTML={sanitizeHtml(FeatureList.description)}></p>
                                                    </div>
                                                    <div className="col-lg-5 col-xxl-5 d-flex">
                                                        <img loading="lazy" src={FeatureList.imgUrl1} className="img-fluid fimg-relative" alt={FeatureList.alt} />
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>       
                                    </div>  
                                    <div className="col-lg-4 col-xxl-4 d-flex"> 
                                            {FeatureList.ExpenseFeaturs.slice(0, 1 ).map((FeatureItem, FeatureIndex)=>(
                                                    <Card className="w-100"  key={FeatureIndex}>
                                                        <Card.Body>
                                                            <Image loading="lazy" className="icons" src={FeatureItem.imgUrls} alt={FeatureItem.heads} /> 
                                                            <h3>{FeatureItem.heads}</h3>
                                                            <p className="mb-0">{FeatureItem.desc}</p>
                                                        </Card.Body>
                                                    </Card>
            
                                            ))}
                                    </div>
                                </div>
                            )}
                            <div className="row t-row bottom-row">
                                {FeatureList.ExpenseFeaturs.slice(1).map((FeatureItem, FeatureIndex)=>(
                                    <div className="col-lg-4 col-xxl-4 d-flex" key={FeatureIndex}>
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
                        </Fragment> 
                    ))}  
                </div>
        </div>

        <div className="wrapper-area">
            <div className="container">
                    {QkrbizPrimedData.map((primtList, pIndex)=>(
                        <div className="row align-items-center" key={pIndex}>
                            <div className="col-lg-6 p-right-lg-3">

                                <SectionHeading subTitle="" title={primtList.title} description="Integrate with QkrSales to get control across the entire sales process." subTitleCenter={false} headingUnderLine={false} /> 
                                <ul className="ul-icon primed">
                                    {primtList.QList.map((inList, inIndex)=>(
                                         <li className="tick-icon-info fn-2" key={inIndex} dangerouslySetInnerHTML={sanitizeHtml(inList.li)}></li>
                                     ))}
                                </ul>
                            </div>
                            <div className="col-lg-4 p-left-lg-3">
                                <img loading="lazy" src={primtList.imgUrl_2} className="img-fluid" alt="Qkrbiz Primed"/>
                            </div>
                        </div> 
                    ))}   
            </div>            
        </div>

        <section className="wrapper-area question-design projects-question">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                {ProjectAccountingdata.map((accText, AccIndex)=>(
                        <Fragment key={AccIndex}>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                    <SectionHeading subTitle="" title={accText.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                            </div>
                            
                            {accText.PList.map((ListText, PListIndex)=>(
                                <div className="col-md-6 col-lg-6 col-xl-4" key={PListIndex}>
                                    <div className={`card q_img ${ListText.cls}`}>
                                        <p className="card-space" dangerouslySetInnerHTML={sanitizeHtml(ListText.desc)}></p>
                                    </div>
                                </div>
                            ))}
                        </Fragment>
                ))}
                </div>
            </div>
        </section>

        <PlatformFeatures />

        <BenefitsSection data={BenefitsData} title="Benefits" subtitle="" />

    </>
  )
}

export default ProjectHome;