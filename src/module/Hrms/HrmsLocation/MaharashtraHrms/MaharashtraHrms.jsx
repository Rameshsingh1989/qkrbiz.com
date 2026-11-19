import { useLocation } from "react-router";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import { MaharashtraHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesMaharashtraData,EnterprisesDesigned, HRSoftwareMaharashtraData, CustomersData, MaharashtraHrmsFAQ,exploreCompleteDba , MaharashtraHrmsMeta } from "./MaharashtraHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";

import { MaharashtraSchemaData } from "./MaharashtraSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./MaharashtraHrms.scss";

const MaharashtraHrms = () => {
  const socialImage = ImagesUrl_ogImages.Mumbai;
  
  return (
    <>
      <RouteSpecificMeta
      title={MaharashtraHrmsMeta.title}
      description={MaharashtraHrmsMeta.description}
      image={socialImage}
      SchemaData={MaharashtraSchemaData} 
      />
      <ComponentLocation 
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={MaharashtraHrmsData} 
      HosingData={HosingData} 
      whyChooseData={whyChooseData} 
      ctaData={ctaData} 
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesMaharashtraData={EnterprisesMaharashtraData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwareMaharashtraData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={exploreCompleteDba}
      />
       {MaharashtraHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={MaharashtraHrmsFAQ} />
        )}
    </>
  )
}

export default MaharashtraHrms;