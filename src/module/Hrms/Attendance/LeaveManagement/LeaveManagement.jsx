import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import { LeaveManagementFAQ, LeaveManagementHeadData, LeaveAttendanceStats, LeaveSolveData, LeaveDepthHeadData, LeaveDepthData, LeaveGlideData, LeaveThreeJobsData, LeaveHowItWorksData, AdvancedLeaveData, LeaveComparisonData, LeaveManagmentCta , LeaveManagementMeta } from './LeaveManagementData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { LeaveManagementSchemaData } from './LeaveMangSchemaData';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import StatsRow from '../../../../components/StatsRow/StatsRow';
import ProblemSolutionGrid from '../component/ProblemSolutionGrid';
import DepthSection from '../component/DepthSection';
import GlideSection from '../component/GlideSection';
import ThreeJobsSection from '../component/ThreeJobsSection';
import HowItWorksSection from '../component/HowItWorksSection';
import CompareSection from '../component/CompareSection';
// import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import './LeaveManagement.scss';

const LeaveManagement = () => {
  // const sanitizeHtml = useSanitizeHtml();

  const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
      <RouteSpecificMeta
      title={LeaveManagementMeta.title}
      description={LeaveManagementMeta.description}
      image={socialImage}
      SchemaData={LeaveManagementSchemaData}
      />

      <QkrHeroSectionRow HeroSectionData={LeaveManagementHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      {/* ---------------- Stats row ---------------- */}
      <StatsRow stats={LeaveAttendanceStats} />

      {/* ---------------- Built to solve real leave problems ---------------- */}
      <ProblemSolutionGrid data={LeaveSolveData} />

      {/* ---------------- Depth & accuracy (alternating) ---------------- */}
      <DepthSection headData={LeaveDepthHeadData} items={LeaveDepthData} />

      {/* ---------------- QkrHR Glide ---------------- */}
      <GlideSection data={LeaveGlideData} />

      {/* ---------------- One module, three jobs ---------------- */}
      <ThreeJobsSection data={LeaveThreeJobsData} cardColClass="col-md-6 col-lg-3" />

      {/* ---------------- How it works (steps) ---------------- */}
      <HowItWorksSection data={LeaveHowItWorksData} />

      <section className="advanced-leave mt-5">
        {AdvancedLeaveData.map((section, index) => (
          <div className="container" key={index}>

                <div className="row justify-content-center">
                  <div className="col-lg-10 mx-auto text-center">
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
      <CompareSection data={LeaveComparisonData} />

      {LeaveManagementFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={LeaveManagementFAQ} />
      )}

        {/* ---------------- CTA ---------------- */}
      <CommonCtaSection PayrollCtaData={LeaveManagmentCta} />
    </>
  )
}

export default LeaveManagement;
