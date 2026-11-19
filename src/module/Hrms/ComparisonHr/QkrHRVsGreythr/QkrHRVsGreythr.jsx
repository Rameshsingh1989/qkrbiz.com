import ComparisonHero from '../components/ComparisonHero/ComparisonHero';
import AlternativeSection from '../components/AlternativeSection/AlternativeSection';
import ComparisonTableSection from '../components/ComparisonTableSection/ComparisonTableSection';
import KekaOrqkrhr from '../components/KekaOrqkrhr/KekaOrqkrhr';
import PayrollCompliance from '../components/PayrollCompliance/PayrollCompliance';
import FieldForce from '../components/FieldForce/FieldForce';
import ImplementationSupport from '../components/ImplementationSupport/ImplementationSupport';
import WhatYouGet from '../components/WhatYouGet/WhatYouGet';
import { ClientStories } from '../../../../components/ClientStories/ClientStories';
import WhoShouldChoose from '../components/WhoShouldChoose/WhoShouldChoose';
import SeeQkrHR from '../components/SeeQkrHR/SeeQkrHR';
import ResearchtTansparency from '../components/ResearchtTansparency/ResearchtTansparency';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import { HrmsCalculation } from '../../../../components/HrmsCalculation/HrmsCalculation';
import QkrHRSupport from '../components/QkrHRSupport/QkrHRSupport';
import MovingHR from '../components/MovingHR/MovingHR';

import { alternativeSectionData, 
  ComparisonHeroData, 
  comparisonRowsData, 
  ImplementationSupportData, 
  FieldForceExpenseData, 
  GreytHRSupportData,
  KekaOrqkrhrData, 
  PayrollComplianceData, 
  QkrHRSupportData, 
  researchTransparencyData,
  WhatYouGetData, 
  MovingGreythrData,
  WhoShouldChooseData,
  QkrhrVsgretHrFaqData
 } from '../data/qkrhrVsGrethrData';
import RouteSpecificMeta from '../../../../components/Seo/RouteSpecificMeta';
import { QkrHRVsGreythrScehma , QkrHRVsGreythrMeta } from './QkrHRVsGreythrScehma';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';

import "./QkrHRVsGreythr.scss";

const QkrHRVsGreythr = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
      <RouteSpecificMeta
      title={QkrHRVsGreythrMeta.title}
      description={QkrHRVsGreythrMeta.description}
      image={socialImage}
      SchemaData={QkrHRVsGreythrScehma} 
      />
      <ComparisonHero comparisonHero={ComparisonHeroData} headerModal={true} />
      <AlternativeSection {...alternativeSectionData} />
      <ComparisonTableSection comparisonRows={comparisonRowsData} />
      <KekaOrqkrhr KekaOrqkrhrData={KekaOrqkrhrData} />
      <PayrollCompliance data={PayrollComplianceData} />
      <QkrHRSupport data={QkrHRSupportData} />
      <ImplementationSupport data={ImplementationSupportData} />
      <FieldForce data={FieldForceExpenseData} />
      <QkrHRSupport data={GreytHRSupportData} />
      <WhatYouGet data={WhatYouGetData} />
      <MovingHR data={MovingGreythrData} />
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

export default QkrHRVsGreythr