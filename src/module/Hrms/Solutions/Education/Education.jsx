import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  EducationHeadData,
  ProblemData,
  HowItWorksData,
  FeatureFitData,
  EducationFaqData,
  RelatedIndustriesData,
  FinalCtaData,
 EducationMeta } from "./EducationData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { EducationSchemaData } from "./EducationSchemaData";
import BlogCard from "../../HrmsBlogs/BlogComponent/BlogCard/BlogCard";
import { HrmsBlogCardData } from "../../QkrhrHome/HrmsBlogCardData";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";

const Education = () => (
  <div className="solution-page education-page">
    <RouteSpecificMeta
      title={EducationMeta.title}
      description={EducationMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={EducationSchemaData}
    />
    <QkrHeroSectionRow HeroSectionData={EducationHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <ProblemCards ProblemData={ProblemData} />

    <SetupSteps StepsData={HowItWorksData} id="how-it-works" />

    <CompareTable CompareData={FeatureFitData} cls="fit-table" />

    <BlogCard BlogCardData={HrmsBlogCardData} componentSec="" />

    <FaqComponent
      subTitle="FAQ"
      title="Questions School HR &amp; Accounts Teams Ask"
      description="A systematic checklist for HR Managers, CHROs, and CFOs evaluating HRMS vendors. Don't be swayed by demos — evaluate on these school-specific criteria."
      FaqData={EducationFaqData}
    />

    <RelatedIndustries items={RelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={FinalCtaData} />
  </div>
);

export default Education;
