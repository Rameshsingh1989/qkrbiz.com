import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  SecurityServicesHeadData,
  ProblemData,
  HowItWorksData,
  FeatureFitData,
  SecurityServicesFaqData,
  RelatedIndustriesData,
  FinalCtaData,
  SecurityServicesMeta,
} from "./SecurityServicesData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { SecurityServicesSchemaData } from "./SecurityServicesSchemaData";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";

const SecurityServices = () => (
  <div className="solution-page security-services-page">
    <RouteSpecificMeta
      title={SecurityServicesMeta.title}
      description={SecurityServicesMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={SecurityServicesSchemaData}
    />
    <QkrHeroSectionRow HeroSectionData={SecurityServicesHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <ProblemCards ProblemData={ProblemData} />

    <SetupSteps StepsData={HowItWorksData} id="how-it-works" />

    <CompareTable CompareData={FeatureFitData} cls="fit-table" />

    <FaqComponent
      subTitle="FAQ"
      title="Questions Security <span class='text-gradient'>and FM Companies Ask</span>"
      FaqData={SecurityServicesFaqData}
    />

    <RelatedIndustries items={RelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={FinalCtaData} />
  </div>
);

export default SecurityServices;
