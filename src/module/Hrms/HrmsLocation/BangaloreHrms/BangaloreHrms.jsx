import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import {BangaloreHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesDelhiData, EnterprisesDesigned, HRSoftwareDelhiData, CustomersData, BangaloreHrmsFAQ,builtHybridDba , BangaloreHrmsMeta } from "./BangaloreHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { BangaloreSchemaData } from "./BangaloreSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./BangaloreHrms.scss";

const BangaloreHrms = () => {

  const socialImage = ImagesUrl_ogImages.Bangalore;
  
  return (
    <>
      <RouteSpecificMeta
      title={BangaloreHrmsMeta.title}
      description={BangaloreHrmsMeta.description}
      image={socialImage}
      SchemaData={BangaloreSchemaData} 
      />
      <ComponentLocation 
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={BangaloreHrmsData} 
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
      internalLinkSectionDba={builtHybridDba}
      />
       {BangaloreHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={BangaloreHrmsFAQ} />
        )}
    </>
  )
}

export default BangaloreHrms;