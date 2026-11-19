import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import RouteSpecificMeta from '../../../../components/Seo/RouteSpecificMeta';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import StatsRow from '../../../../components/StatsRow/StatsRow';
import DepthSection from '../component/DepthSection';
import GlideSection from '../component/GlideSection';
import ThreeJobsSection from '../component/ThreeJobsSection';
import HowItWorksSection from '../component/HowItWorksSection';
import CompareSection from '../component/CompareSection';
import { attendanceSchemaData } from './AttendanceSchemaData';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import {
  AttendanceHeadData,
  AttendanceStats,
  WhySwitchData,
  ThreeJobsData,
  DepthHeadData,
  DepthData,
  FlexibilityData,
  GlideData,
  ComparisonData,
  HowItWorksData,
  BuiltForIndiaData,
  AttendanceFAQ,
  AttendanceCta,
 AttendanceHomeMeta } from './AttendanceData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';

import './AttendanceHome.scss';

const AttendanceHome = () => {
  const sanitizeHtml = useSanitizeHtml();

  const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
      <RouteSpecificMeta
        title={AttendanceHomeMeta.title}
        description={AttendanceHomeMeta.description}
        image={socialImage}
        SchemaData={attendanceSchemaData}
      />

      <QkrHeroSectionRow HeroSectionData={AttendanceHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      {/* ---------------- Stats row ---------------- */}
      <StatsRow stats={AttendanceStats} />

      {/* ---------------- Why teams switch (old vs new) ---------------- */}
      <section className="la-switch">
        {WhySwitchData.map((data) => (
          <div className="container" key={data.id}>
                <div className="row">
                  <div className="col-lg-10 mx-auto text-center">
                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                  </div>
                </div>

                <div className="row g-4 justify-content-center">
                  {data.columns.map((col) => (
                    <div className="col-lg-6" key={col.id}>
                      <div
                        className={`switch-card h-100 switch-card-${col.variant}`}
                      >
                        <h3
                          className="switch-card-title"
                          dangerouslySetInnerHTML={sanitizeHtml(col.title)}
                        />

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

      {/* ---------------- One module, three jobs ---------------- */}
      <ThreeJobsSection data={ThreeJobsData} />

      {/* ---------------- Depth & accuracy (alternating) ---------------- */}
      <DepthSection headData={DepthHeadData} items={DepthData} />

      {/* ---------------- Flexibility ---------------- */}
      <section className="la-flexibility pt-0">
        {FlexibilityData.map((data) => (
          <div className="container" key={data.id}>
                <div className="row">
                  <div className="col-lg-10 mx-auto text-center">
                    <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                  </div>
                </div>
                <div className="row g-4">
                  {data.cards.map((card) => (
                    <div className="col-md-6 col-lg-4" key={card.id}>
                      <div className={`info-card h-100 ${card.cardBg}`}>

                        {card.icon && (
                          <img loading="lazy"
                            className="card-icon"
                            src={card.icon}
                            alt={card.title}
                          />
                        )}

                        <h3 className="info-title">
                          {card.title}
                        </h3>

                        <p className="info-desc text-muted mb-0">
                          {card.description}
                        </p>

                      </div>
                    </div>
                  ))}
                </div>
          </div>
        ))}
      </section>

      {/* ---------------- QkrHR Glide ---------------- */}
      <GlideSection data={GlideData} />

      {/* ---------------- How it compares (table) ---------------- */}
      <CompareSection data={ComparisonData} />

      {/* ---------------- How it works (steps) ---------------- */}
      <HowItWorksSection data={HowItWorksData} />

      {/* ---------------- Built for India ---------------- */}
      <section className="py-5">
        <div className="container">
          <div className="bg-white border rounded-4 shadow-sm p-4 p-lg-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <span className="d-block small fw-bold text-uppercase text-magenta mb-2">{BuiltForIndiaData.subTitle}</span>
                <h2 className="fs-3 fw-semibold mb-0">{BuiltForIndiaData.title}</h2>
              </div>
              <div className="col-lg-7">
                <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                  {BuiltForIndiaData.tags.map((tag) => (
                    <li className="badge rounded-pill bg-gray text-dark-gray fw-semibold fs-6 px-3 py-2" key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      {AttendanceFAQ && (
        <FaqComponent subTitle="" title="Questions HR teams ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={AttendanceFAQ} />
      )}

      {/* ---------------- CTA ---------------- */}
      <CommonCtaSection PayrollCtaData={AttendanceCta} />
    </>
  );
};

export default AttendanceHome;
