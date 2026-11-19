import { useEffect, useState } from 'react';
import { NavLink} from 'react-router';
import { Container, Image } from 'react-bootstrap';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import{CoreHrSchemaData} from './CoreHrSchemaData';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import QkrbizProductMenus from '../../../../components/QkrbizProductMenus/QkrbizProductMenus';
import { HeaderMenuData } from '../../../../navigation/data/HeaderMenuData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import {CoreHrHeadData,CoreHrData, CoreHRFAQ , CoreHrHomeMeta, CoreHrCtaData } from './CoreHrHomeData';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
// import { hrmsMobileScrData } from '../../QkrhrHome/QkrhrHomeData'; 
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

import "./CoreHrHome.scss"

const CoreHrHome = () => {

     const socialImage = ImagesUrl_ogImages.QkrHr;

    // const [windowWidth, setWindowWidth] = useState(0); // ✅ safe on server

    // useEffect(() => {
    // if (typeof window === "undefined") return;

    // const handleResize = () => {
    //     setWindowWidth(window.innerWidth);
    // };

    // handleResize();
    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
    // }, []);


  return (
    <>
        <RouteSpecificMeta
        title={CoreHrHomeMeta.title}
        description={CoreHrHomeMeta.description}
        image={socialImage}
        SchemaData={CoreHrSchemaData} 
        />
        <QkrHeroSectionRow HeroSectionData={CoreHrHeadData} col1={12} col2={12} xl1={12} xl2={12}/>
 
        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <QkrbizProductMenus headerData={HeaderMenuData} appsClass="apps-hr" filterProduct={false} filterType="isHrms" subFilterType="isCorehr" />

        <section className="wrapper-area">
            {CoreHrData.map((text, index)=>(
            <Container key={index}>
                <div className="heading-title text-center">
                     <SectionHeading subTitle="" title={text.title} description={text.desc} headingUnderLine={false} /> 
                </div>
                <div className="row justify-content-center align-items-center">
                      <div className="col-lg-8 col-xl-7 col-xxl-7 elementor-element">
                            <div className="elementor-background-overlay"></div>
                            <ul className="list-unstyled">
                              {text.fHeadList.map((list,FIndex )=>(
                                <li key={FIndex}>
                                <NavLink to={list.url} className="cea-tab-link">
                                      <span className="cea-tab-icon">
                                          <Image loading="lazy" fluid src={list.icon} alt="hr" />
                                      </span>
                                      <span className="cea-tab-title">
                                          {list.li}   
                                      </span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                      </div>
                      <div className="col-lg-4 col-xl-5 col-xxl-5">
                          <Image loading="lazy" fluid src={text.imgUrl} alt={text.alt} />
                      </div>
                </div>
            </Container>
            ))}
        </section>

        {CoreHRFAQ && (
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={CoreHRFAQ} />
        )}

        {/* <section className="mobile-design">
            <Container>
                {hrmsMobileScrData.map((mdata, mIndex) => (
                    <div className="row justify-content-between align-items-center" key={mIndex}>
                        {mdata.id ===1 && (
                        <>
                            <div className="col-lg-5 col-xl-5">
                                <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                                <Link to="/signup" className="btn btn-gradient rounded-pill ml-3-xs">Free Demo</Link>
                            </div>
                            <div className="col-lg-7 col-xl-7">
                                {windowWidth > 991 ? (
                                    <Image loading="lazy" fluid src={mdata.imgUrlD} alt={mdata.alt} />
                                ):(
                                    <Image loading="lazy" fluid src={mdata.imgUrl} alt={mdata.alt} />
                                )
                            }
                            </div>
                        </>
                        )}
                    </div>
                ))}
            </Container>
        </section>
       */}

      <CommonCtaSection PayrollCtaData={CoreHrCtaData} />
    </>
  )
}

export default CoreHrHome;