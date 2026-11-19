import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  HealthcareHeadData,
  ProblemData,
  HowItWorksData,
  FeatureFitData,
  HealthcareFaqData,
  RelatedIndustriesData,
  FinalCtaData,
 HealthcareMeta } from "./HealthcareData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { HealthcareSchemaData } from "./HealthcareSchemaData";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";

const Healthcare = () => (
  <div className="solution-page healthcare-page">
    <RouteSpecificMeta
      title={HealthcareMeta.title}
      description={HealthcareMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={HealthcareSchemaData}
    />
    <QkrHeroSectionRow HeroSectionData={HealthcareHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <ProblemCards ProblemData={ProblemData} />

    <SetupSteps StepsData={HowItWorksData} id="how-it-works" />

    <CompareTable CompareData={FeatureFitData} cls="fit-table" />

    <FaqComponent
      subTitle="FAQ"
      title="Questions Hospital <span class='text-gradient'>HR Teams Ask</span>"
      FaqData={HealthcareFaqData}
    />

    <RelatedIndustries items={RelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={FinalCtaData} />
  </div>
);

export default Healthcare;
