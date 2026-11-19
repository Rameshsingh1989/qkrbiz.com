import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import { DelhiHrmsData, HosingData, whyChooseData,ctaData, hrmsFeaturesData,citiesIndia, EnterprisesDelhiData, HRSoftwareDelhiData, ImplementationProcessData, EmployeeExperienceData, CustomersData, DelhiHrmsFAQ, ExploreDba,  DelhiHrmsMeta } from "./DelhiHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { DelhiSchemaData } from "./DelhiSchemaData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

const DelhiHrms = () => {

  const socialImage = ImagesUrl_ogImages.Delhi;
  // console.log('sssssss', socialImage);
    
  return (
    <>
      <RouteSpecificMeta
      title={DelhiHrmsMeta.title}
      description={DelhiHrmsMeta.description}
      image={socialImage}
      SchemaData={DelhiSchemaData} 
      />
      <ComponentLocation 
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="7ZQJB_8VsDI"
      TopHeaderClass="content-top-delhi"
      HeadData={DelhiHrmsData} 
      HosingData={HosingData} 
      whyChooseData={whyChooseData} 
      ctaData={ctaData} 
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesDelhiData}
      HRSoftwareDelhiData={HRSoftwareDelhiData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={ExploreDba} />

       {DelhiHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={DelhiHrmsFAQ} />
        )}
    </>
  )
}

export default DelhiHrms;