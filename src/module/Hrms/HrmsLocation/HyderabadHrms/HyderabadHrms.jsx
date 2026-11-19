
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import { HyderabadHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesDelhiData,EnterprisesDesigned, HRSoftwareDelhiData, CustomersData, HyderabadHrmsFAQ,deskFactoryDba, HyderabadHrmsMeta } from "./HyderabadHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { HyderabadSchemaData } from "./HyderabadSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./HyderabadHrms.scss";

const HyderabadHrms = () => {

  const socialImage = ImagesUrl_ogImages.Hyderabad;
  
  return (
    <>
      <RouteSpecificMeta
      title={HyderabadHrmsMeta.title}
      description={HyderabadHrmsMeta.description}
      image={socialImage}
      SchemaData={HyderabadSchemaData} 
      />
      
      <ComponentLocation 
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={HyderabadHrmsData} 
      HosingData={HosingData} 
      whyChooseData={whyChooseData} 
      ctaData={ctaData} 
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesDelhiData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwareDelhiData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={deskFactoryDba}
      />
       {HyderabadHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={HyderabadHrmsFAQ} />
        )}
    </>
  )
}

export default HyderabadHrms;