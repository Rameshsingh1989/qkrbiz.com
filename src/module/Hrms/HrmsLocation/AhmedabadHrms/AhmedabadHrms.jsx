import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import {AhmedabadHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesAhmedabadData,EnterprisesDesigned, HRSoftwareAhmedabadData, CustomersData, AhmedabadHrmsFAQ,complianceReadyDba , AhmedabadHrmsMeta } from "./AhmedabadHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { AhmedabadSchemaData } from "./AhmedabadSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./AhmedabadHrms.scss";

const AhmedabadHrms = () => {

  const socialImage = ImagesUrl_ogImages.Ahemedabad;

  return (
    <>
      <RouteSpecificMeta
      title={AhmedabadHrmsMeta.title}
      description={AhmedabadHrmsMeta.description}
      image={socialImage}
      SchemaData={AhmedabadSchemaData}
      />
      <ComponentLocation
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={AhmedabadHrmsData}
      HosingData={HosingData}
      whyChooseData={whyChooseData}
      ctaData={ctaData}
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesAhmedabadData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwareAhmedabadData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={complianceReadyDba}
      />
       {AhmedabadHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={AhmedabadHrmsFAQ} />
        )}
    </>
  )
}

export default AhmedabadHrms;
