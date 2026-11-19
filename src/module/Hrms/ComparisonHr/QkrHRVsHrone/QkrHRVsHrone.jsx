import ComparisonHero from '../components/ComparisonHero/ComparisonHero';
import AlternativeSection from '../components/AlternativeSection/AlternativeSection';
import FeaturesCoveredSection from '../components/FeaturesCoveredSection/FeaturesCoveredSection';
import ComparisonTableSection from '../components/ComparisonTableSection/ComparisonTableSection';
import PremiumShould from '../components/PremiumShould/PremiumShould';
import PayrollCompliance from '../components/PayrollCompliance/PayrollCompliance';
import FieldForce from '../components/FieldForce/FieldForce';
import WhatYouGet from '../components/WhatYouGet/WhatYouGet';
import { ClientStories } from '../../../../components/ClientStories/ClientStories';
import WhoShouldChoose from '../components/WhoShouldChoose/WhoShouldChoose';
import SeeQkrHR from '../components/SeeQkrHR/SeeQkrHR';
import ResearchtTansparency from '../components/ResearchtTansparency/ResearchtTansparency';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import { HrmsCalculation } from '../../../../components/HrmsCalculation/HrmsCalculation';
import QkrHRSupport from '../components/QkrHRSupport/QkrHRSupport';

import { 
  ComparisonHeroData, 
  alternativeSectionData, 
  HrmsAdaptData,
  strengthsData,
  FeaturesCoveredSectionData, 
  comparisonRowsData, 
  FieldForceExpenseData, 
  PremiumShouldData, 
  PayrollComplianceData, 
  QkrHRSupportData, 
  researchTransparencyData,
  WhatYouGetData, 
  WhoShouldChooseData,
  QkrhrVsgretHrFaqData
 } from '../data/qkrhrVsHroneData';
import RouteSpecificMeta from '../../../../components/Seo/RouteSpecificMeta';
import { QkrHRVsHroneScehma , QkrHRVsHroneMeta } from './QkrHRVsHroneScehma';
import HrmsAdapt from '../components/HrmsAdapt/HrmsAdapt';
import StrengthCard from '../components/StrengthCard/StrengthCard';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';

import "./QkrHRVsHrone.scss";

const QkrHRVsHrone = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
      <RouteSpecificMeta
      title={QkrHRVsHroneMeta.title}
      description={QkrHRVsHroneMeta.description}
      image={socialImage}
      SchemaData={QkrHRVsHroneScehma} 
      />
      <ComparisonHero comparisonHero={ComparisonHeroData} headerModal={true} />
      <AlternativeSection {...alternativeSectionData} />
      <HrmsAdapt HrmsAdaptData={HrmsAdaptData} />
      <StrengthCard data={strengthsData} />
      <FeaturesCoveredSection FeaturesCoveredSectionData={FeaturesCoveredSectionData} />
      <ComparisonTableSection comparisonRows={comparisonRowsData} />
      <PayrollCompliance data={PayrollComplianceData} />
      <QkrHRSupport data={QkrHRSupportData} />
      <FieldForce data={FieldForceExpenseData} />
      <PremiumShould PremiumShouldData={PremiumShouldData} />
      <WhatYouGet data={WhatYouGetData} />
      <WhoShouldChoose data={WhoShouldChooseData} />
      <div id="hrms-calculation">
        <HrmsCalculation />
      </div>
      <ResearchtTansparency {...researchTransparencyData} />
      <ClientStories cls="" count1={3} count2={2} count3={1} />
      <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={QkrhrVsgretHrFaqData} />
      <SeeQkrHR />

    </>
  )
}

export default QkrHRVsHrone