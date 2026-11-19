import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  FinancialMeta,
  FinancialHeadData,
  FinancialOverviewData,
  FinancialProblemData,
  FinancialFeaturesData,
  FinancialDetailHead,
  FinancialDetailData,
  FinancialStagesData,
  FinancialCompareData,
  FinancialSetupData,
  FinancialStatsData,
  FinancialFaqData,
  FinancialRelatedIndustriesData,
  FinancialFinalCtaData,
} from "./FinancialServicesData";
import { FinancialServicesSchemaData } from "./FinancialServicesSchemaData";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import StatsRow from "../../../../components/StatsRow/StatsRow";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import {
  OverviewSection, FeatureLinkCards, DetailRows, NumberedSteps,
} from "../component/IndustrySections/IndustrySections";

const FinancialServices = () => (
  <div className="solution-page financial-services-page">
    <RouteSpecificMeta
      title={FinancialMeta.title}
      description={FinancialMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={FinancialServicesSchemaData}
    />

    <QkrHeroSectionRow HeroSectionData={FinancialHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <OverviewSection data={FinancialOverviewData} />

    <div className="bg-pink-light py-3">
      <ProblemCards ProblemData={FinancialProblemData} />
    </div>

    <FeatureLinkCards data={FinancialFeaturesData} />

    <DetailRows head={FinancialDetailHead} rows={FinancialDetailData} />

    <NumberedSteps data={FinancialStagesData} />

    <CompareTable CompareData={FinancialCompareData} cls="fit-table mb-4" />

    <div className="bg-pink-light py-3">
      <SetupSteps StepsData={FinancialSetupData} id="implementation" />
    </div>

    <StatsRow stats={FinancialStatsData} />

    <FaqComponent
      subTitle="FAQ"
      title="Payroll for financial services: <span class='text-gradient'>FAQs</span>"
      FaqData={FinancialFaqData}
    />

    <RelatedIndustries items={FinancialRelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={FinancialFinalCtaData} />
  </div>
);

export default FinancialServices;
