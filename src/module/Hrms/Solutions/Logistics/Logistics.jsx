import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  LogisticsHeadData,
  ProblemData,
  HowItWorksData,
  WorkflowsData,
  LogisticsFaqData,
  RelatedIndustriesData,
  FinalCtaData,
 LogisticsMeta } from "./LogisticsData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { LogisticsSchemaData } from "./LogisticsSchemaData";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";

const Logistics = () => (
  <div className="solution-page logistics-page">
    <RouteSpecificMeta
      title={LogisticsMeta.title}
      description={LogisticsMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={LogisticsSchemaData}
    />
    <QkrHeroSectionRow HeroSectionData={LogisticsHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <ProblemCards ProblemData={ProblemData} />

    <SetupSteps StepsData={HowItWorksData} id="how-it-works" />

    <CompareTable CompareData={WorkflowsData} cls="fit-table" />

    <FaqComponent
      subTitle="FAQ"
      title="Questions Logistics <span class='text-gradient'>HR Teams Ask</span>"
      FaqData={LogisticsFaqData}
    />

    <RelatedIndustries items={RelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={FinalCtaData} />
  </div>
);

export default Logistics;
