import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  ItServicesMeta,
  ItServicesHeadData,
  ItOverviewData,
  ItProblemData,
  ItFeaturesData,
  ItDetailHead,
  ItDetailData,
  ItLifecycleData,
  ItCompareData,
  ItSetupData,
  ItStatsData,
  ItServicesFaqData,
  ItRelatedIndustriesData,
  ItFinalCtaData,
} from "./ItServicesData";
import { ItServicesSchemaData } from "./ItServicesSchemaData";
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

const ItServices = () => (
  <div className="solution-page it-services-page">
    <RouteSpecificMeta
      title={ItServicesMeta.title}
      description={ItServicesMeta.description}
      image={ImagesUrl_ogImages.QkrHr}
      SchemaData={ItServicesSchemaData}
    />

    <QkrHeroSectionRow HeroSectionData={ItServicesHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <OverviewSection data={ItOverviewData} />

    <div className="bg-pink-light py-3">
      <ProblemCards ProblemData={ItProblemData} />
    </div>

    <FeatureLinkCards data={ItFeaturesData} />

    <DetailRows head={ItDetailHead} rows={ItDetailData} />

    <NumberedSteps data={ItLifecycleData} />

    <CompareTable CompareData={ItCompareData} cls="fit-table mb-4" />

    <div className="bg-pink-light py-3">
      <SetupSteps StepsData={ItSetupData} id="implementation" />
    </div>

    <StatsRow stats={ItStatsData} />

    <FaqComponent
      subTitle="FAQ"
      title="HRMS for IT companies: <span class='text-gradient'>FAQs</span>"
      FaqData={ItServicesFaqData}
    />

    <RelatedIndustries items={ItRelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={ItFinalCtaData} />
  </div>
);

export default ItServices;
