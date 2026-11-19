
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import AttendanceFlow from '../component/AttendanceFlow';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import HowItWorksSection from '../component/HowItWorksSection';
import DashboardsTab from '../component/DashboardsTab';
import CompareSection from '../component/CompareSection';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ShiftMangSchemaData } from './ShiftMangSchemaData';
import { ShiftManagementHeadData,fixesAllData, setupShiftsData, teamsSwitchData,beyondStandardShiftsData,roleBasedDashboardsData,questionManagementData,builtforComplexData,advancedShiftData,ShiftComparisonData, ShiftManagementFAQ , ShiftManagementMeta } from './ShiftManagementData';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";

import './ShiftManagement.scss';

const ShiftManagement = () => {

    const sanitizeHtml = useSanitizeHtml();
    const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
        <RouteSpecificMeta
        title={ShiftManagementMeta.title}
        description={ShiftManagementMeta.description}
        image={socialImage} 
        SchemaData={ShiftMangSchemaData} 
        />

        <QkrHeroSectionRow HeroSectionData={ShiftManagementHeadData} col1={12} col2={12} xl1={12} xl2={12} />

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        {/* ---------------- Built to solve real leave problems ---------------- */}
        <section className="fixed-all">
          {fixesAllData.map((section) => (
            <div className="container" key={section.id}>
                  <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                      <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
                    </div>
                  </div>
                  <div className="row g-4">
                    {section.cards.map((card) => {
                      return (
                        <div className="col-md-6 col-lg-4" key={card.id}>
                          <div className="card h-100">
                            <div className="card-body">
                              <ul className="solve-list list-unstyled mb-0">
                                <li className="solve-problem">

                                  <img loading="lazy" src={card.icon1} alt={card.problem} className="solve-img" />
                                  <span>{card.problem}</span>
                                </li>

                                <li className="solve-solution">
                                  <img loading="lazy" src={card.icon2} alt={card.solution} className="solve-img" />
                                  <span>{card.solution}</span>
                                </li>
                              </ul>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
            </div>
          ))}
        </section>

        {/* ---------------- Your Complete Attendance Flow (icon tabs, on-click) ---------------- */}
        <AttendanceFlow data={setupShiftsData} />

       {/* ---------------- Why teams switch (old vs new) ---------------- */}
        <section className="bg-gray py-5 mt-3">
          {questionManagementData.map((cardText, index) => (
            <div className="container" key={index}>
              <div className="row g-4 justify-content-center">
                    {cardText.cardSection?.map((card, index) => (
                      <div className="col-md-6 col-lg-4 d-flex" key={index}>
                        <div className="card h-100 w-100 rounded-4">
                          <div className="card-body p-4">
                            {card.icon && (
                              <img loading="lazy"
                                src={card.icon}
                                alt={card.title || card.title}
                                className="mb-4"
                              />
                            )}

                            <h3 className="title"> {card.title} </h3>
                            <p>{card.description}</p>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>
          ))}
        </section>

        {/* ---------------- Why teams switch (old vs new) ---------------- */}
        <section className="la-switch">
          {teamsSwitchData.map((data) => (
            <div className="container" key={data.id}>
                  <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                      <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </div>
                  </div>

                  <div className="row g-4 justify-content-center">
                    {data.columns.map((col) => (
                      <div className="col-lg-6" key={col.id}>
                        <div className={`switch-card h-100 switch-card-${col.variant}`}>
                          <h3 className="switch-card-title" dangerouslySetInnerHTML={sanitizeHtml(col.title)} />

                          <ul className="switch-list list-unstyled mb-0">
                            {col.points.map((point, pIndex) => (
                              <li key={pIndex} className="d-flex">
                                <span
                                  className={`switch-icon ${
                                    col.variant === "new"
                                      ? "switch-icon-check"
                                      : "switch-icon-cross"
                                  }`}
                                >
                                  {col.variant === "new" ? (
                                    <FaCheck />
                                  ) : (
                                    <FaXmark />
                                  )}
                                </span>

                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>
          ))}
        </section>

       {/* ---------------- Beyond standard shifts ---------------- */}
        <HowItWorksSection data={beyondStandardShiftsData} />

       {/* ---------------- Role-based dashboards ---------------- */}
       {roleBasedDashboardsData.map((data, index) => (
        <DashboardsTab tabGg="dashboards-box" key={index} data={data} sanitizeHtml={sanitizeHtml} />
       ))}
       

       {/* ---------------- Flexibility ---------------- */}
       <section className="builtfor-complex pt-4">
        {builtforComplexData.map((data) => (
          <div className="container" key={data.id}>
                <div className="row">
                  <div className="col-lg-12 mx-auto text-center">
                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} />
                  </div>
                </div>
                <div className="row g-4">
                  {data.cards.map((card) => (
                    <div className="col-md-6 col-lg-3" key={card.id}>
                      <div className={`info-card h-100 ${card.cardBg}`}>

                        {card.icon && (
                          <img loading="lazy" className="card-icon mb-3" src={card.icon} alt={card.title} />
                        )}
                        <h3 className="info-title">{card.title} </h3>
                        <p className="info-desc text-muted mb-0">{card.description}</p>

                      </div>
                    </div>
                  ))}
                </div>
          </div>
        ))}
       </section>

       <section className="advanced-shift mt-4">
        {advancedShiftData.map((section, index) => (
          <div className="container" key={index}>

                <div className="row justify-content-center">
                  <div className="col-lg-12 mx-auto text-center">
                     <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
                  </div>
                </div>
                <div className="row g-4">
                  {section.cardSection?.map((card, index) => (
                    <div className="col-md-6 col-lg-4 d-flex" key={index}>
                      <div className="card h-100 w-100">
                        <div className="card-body">
                          {card.icon && (
                            <img loading="lazy"
                              src={card.icon}
                              alt={card.title || card.title}
                              className="mb-4"
                            />
                          )}

                          <h3 className="title"> {card.title} </h3>
                          <p>{card.description}</p>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
 
          </div>
        ))}
       </section>

       {/* ---------------- How it compares (table) ---------------- */}
       <CompareSection data={ShiftComparisonData} />

      
       {ShiftManagementFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={ShiftManagementFAQ} />
       )}
        
    </>
  )
}

export default ShiftManagement;