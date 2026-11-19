import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  ConstructionMeta,
  ConstructionHeadData,
  ConstructionOverviewData,
  ConstructionProblemData,
  ConstructionFeaturesData,
  ConstructionDetailHead,
  ConstructionDetailData,
  ConstructionLifecycleData,
  ConstructionCompareData,
  ConstructionSetupData,
  ConstructionStatsData,
  ConstructionFaqData,
  ConstructionRelatedIndustriesData,
  ConstructionFinalCtaData,
} from "./ConstructionData";
import { ConstructionSchemaData } from "./ConstructionSchemaData";
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

const Construction = () => (
  <div className="solution-page construction-page">
    <RouteSpecificMeta
    title={ConstructionMeta.title}
    description={ConstructionMeta.description}
    image={ImagesUrl_ogImages.QkrHr}
    SchemaData={ConstructionSchemaData}
    />

    <QkrHeroSectionRow HeroSectionData={ConstructionHeadData} col1={12} col2={12} xl1={12} xl2={12} />

    <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

    <OverviewSection data={ConstructionOverviewData} />

    <div className="bg-pink-light py-3">
      <ProblemCards ProblemData={ConstructionProblemData} />
    </div>

    <FeatureLinkCards data={ConstructionFeaturesData} />

    <DetailRows head={ConstructionDetailHead} rows={ConstructionDetailData} />

    <NumberedSteps data={ConstructionLifecycleData} />

    <CompareTable CompareData={ConstructionCompareData} cls="fit-table mb-4" />

    <div className="bg-pink-light py-3">
      <SetupSteps StepsData={ConstructionSetupData} id="implementation" />
    </div>

    <StatsRow stats={ConstructionStatsData} />

    <FaqComponent subTitle="FAQ" title="HRMS for construction: <span class='text-gradient'>FAQs</span>" FaqData={ConstructionFaqData}/>

    <RelatedIndustries items={ConstructionRelatedIndustriesData} />

    <CommonCtaSection PayrollCtaData={ConstructionFinalCtaData} />
  </div>
);

export default Construction;
