import ComparisonHero from '../components/ComparisonHero/ComparisonHero';
import AlternativeSection from '../components/AlternativeSection/AlternativeSection';
import FeaturesCoveredSection from '../components/FeaturesCoveredSection/FeaturesCoveredSection';
import ComparisonTableSection from '../components/ComparisonTableSection/ComparisonTableSection';
import KekaOrqkrhr from '../components/KekaOrqkrhr/KekaOrqkrhr';
import PayrollCompliance from '../components/PayrollCompliance/PayrollCompliance';
import UserExperience from '../components/UserExperience/UserExperience';
import FieldForce from '../components/FieldForce/FieldForce';
import ImplementationSupport from '../components/ImplementationSupport/ImplementationSupport';
import WhatYouGet from '../components/WhatYouGet/WhatYouGet';
import { ClientStories } from '../../../../components/ClientStories/ClientStories';
import WhoShouldChoose from '../components/WhoShouldChoose/WhoShouldChoose';
import SeeQkrHR from '../components/SeeQkrHR/SeeQkrHR';
import ResearchtTansparency from '../components/ResearchtTansparency/ResearchtTansparency';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import { HrmsCalculation } from '../../../../components/HrmsCalculation/HrmsCalculation';
import { 
  alternativeSectionData, 
  ComparisonHeroData, 
  comparisonRowsData, 
  FeaturesCoveredSectionData, 
  FieldForceExpenseData, 
  ImplementationSupportData, 
  KekaOrqkrhrData, 
  PayrollComplianceData, 
  UserExperienceData, 
  WhatYouGetData, 
  WhoShouldChooseData,
  researchTransparencyData,
  QkrhrVsKekaFaqData
} from '../data/qkrhrVsKekaData';
import RouteSpecificMeta from '../../../../components/Seo/RouteSpecificMeta';
import { QkrhrVsKekaScehma , QkrhrVsKekaMeta } from './QkrhrVsKekaScehma';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';

import "./QkrhrVsKeka.scss";

const QkrhrVsKeka = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
      <RouteSpecificMeta
      title={QkrhrVsKekaMeta.title}
      description={QkrhrVsKekaMeta.description}
      image={socialImage}
      SchemaData={QkrhrVsKekaScehma} 
      />
      <ComparisonHero comparisonHero={ComparisonHeroData} headerModal={true} />
      <AlternativeSection {...alternativeSectionData} />
      <FeaturesCoveredSection FeaturesCoveredSectionData={FeaturesCoveredSectionData} />
      <ComparisonTableSection comparisonRows={comparisonRowsData} />
      <KekaOrqkrhr KekaOrqkrhrData={KekaOrqkrhrData} />
      <PayrollCompliance data={PayrollComplianceData} />
      <UserExperience data={UserExperienceData} />
      <FieldForce data={FieldForceExpenseData} />
      <ImplementationSupport data={ImplementationSupportData} />
      <WhatYouGet data={WhatYouGetData} />
      <WhoShouldChoose data={WhoShouldChooseData} />
      <div id="hrms-calculation">
        <HrmsCalculation />
      </div>
      <ResearchtTansparency {...researchTransparencyData} />
      <ClientStories cls="" count1={3} count2={2} count3={1} />
      <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={QkrhrVsKekaFaqData} />
      <SeeQkrHR />

    </>
  )
}

export default QkrhrVsKeka