import { Image} from 'react-bootstrap';
import RouteSpecificMeta from '../../../../components/Seo/RouteSpecificMeta';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import HandleExceptions from '../component/HandleExceptions';
import ProblemsSlider from '../component/ProblemsSlider';
import AttendanceFlow from '../component/AttendanceFlow';
import DashboardsTab from '../component/DashboardsTab';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import { AtteManagSchemaData } from './AtteManagSchemaData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

import {
  AttendanceManagementHeadData,
  AttendanceProblemsData,
  AttendanceFlowData,
  HandleExceptionsData,
  AttendanceDashboardsData,
  AdvancedCapabilitiesData,
  ProblemsRemovedData,
  AttendanceManagementFAQ,
  AttendanceManagementCta,
 AttendanceManagementMeta } from './AttendanceManagementData';

import './AttendanceManagement.scss';

const TimeAttendance = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();

  return (
    <div className="time-management">
      <RouteSpecificMeta
        title={AttendanceManagementMeta.title}
        description={AttendanceManagementMeta.description}
        image={socialImage}
        SchemaData={AtteManagSchemaData}
      />

      <QkrHeroSectionRow HeroSectionData={AttendanceManagementHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      {/* ---------------- Built to Solve Real Business Problems ---------------- */}
      <ProblemsSlider data={AttendanceProblemsData} />

      {/* ---------------- Your Complete Attendance Flow (icon tabs, on-click) ---------------- */}
      <AttendanceFlow data={AttendanceFlowData} />

      {/* ---------------- Handle Exceptions (scroll-driven) ---------------- */}
      <HandleExceptions data={HandleExceptionsData} />

      {/* ---------------- Dashboards That Drive Action (role tabs) ---------------- */}
      {AttendanceDashboardsData.map((data, index) => (
        <DashboardsTab tabGg="dashboards-box" key={index} data={data} sanitizeHtml={sanitizeHtml} />
      ))}

      {/* ---------------- Advanced Capabilities ---------------- */}
      <section className="am-advanced">
        {AdvancedCapabilitiesData.map((data, index) => (
          <div className="container" key={index}>

                <div className="row">
                  <div className="col-lg-10 mx-auto text-center">
                     <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                     
                  </div>
                </div>

                <div className="row g-4 justify-content-center">
                  {data.cards.map((card) => (
                    <div className="col-6 col-md-4 col-lg" key={card.id}>
                      <div className="card h-100 text-center">
                        {card.icon && (
                          <Image loading="lazy"
                            className="advanced-icon"
                            src={card.icon}
                            alt={card.title}
                          />
                        )}

                        <p className="advanced-title mb-0">
                          {card.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
        ))}
      </section>

      {/* ---------------- Problems it removes ---------------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading subTitle={ProblemsRemovedData.subTitle} title={ProblemsRemovedData.title} description={ProblemsRemovedData.description} headingUnderLine={false} />
          <div className="row g-3">
            {ProblemsRemovedData.items.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="h-100 bg-white border rounded-4 shadow-sm p-4">
                  <h3 className="fs-5 fw-semibold mb-2">{item.title}</h3>
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      {AttendanceManagementFAQ && (
        <FaqComponent subTitle="" title="Questions HR teams ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={AttendanceManagementFAQ} />
      )}
      {/* ---------------- CTA ---------------- */}
      <CommonCtaSection PayrollCtaData={AttendanceManagementCta} />

    </div>
  );
};

export default TimeAttendance;
