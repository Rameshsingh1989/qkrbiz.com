import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  RetailHeadData,
  ProblemData,
  HowItWorksData,
  FeatureFitData,
  RetailFaqData,
  RelatedIndustriesData,
  FinalCtaData,
 RetailMeta } from "./RetailData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { RetailSchemaData } from "./RetailSchemaData";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";

const Retail = () => (
  <div className="solution-page retail-page">
    <RouteSpecificMeta
      title={RetailMeta.title}
      description={RetailMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={RetailSchemaData}
    />
    <QkrHeroSectionRow HeroSectionData={RetailHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <ProblemCards ProblemData={ProblemData} />

    <SetupSteps StepsData={HowItWorksData} id="how-it-works" />

    <CompareTable CompareData={FeatureFitData} cls="fit-table" />

    <FaqComponent
      subTitle="FAQ"
      title="Questions Retail <span class='text-gradient'>HR Teams Ask</span>"
      FaqData={RetailFaqData}
    />

    <RelatedIndustries items={RelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={FinalCtaData} />
  </div>
);

export default Retail;
