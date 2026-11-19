import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import {PuneHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesPuneData,EnterprisesDesigned, HRSoftwarePuneData, CustomersData, PuneHrmsFAQ,chakanHinjewadiDba , PuneHrmsMeta } from "./PuneHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { PuneSchemaData } from "./PuneSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./PuneHrms.scss";

const PuneHrms = () => {

  const socialImage = ImagesUrl_ogImages.Pune;

  return (
    <>
      <RouteSpecificMeta
      title={PuneHrmsMeta.title}
      description={PuneHrmsMeta.description}
      image={socialImage}
      SchemaData={PuneSchemaData}
      />
      <ComponentLocation
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={PuneHrmsData}
      HosingData={HosingData}
      whyChooseData={whyChooseData}
      ctaData={ctaData}
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesPuneData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwarePuneData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={chakanHinjewadiDba}
      />
       {PuneHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={PuneHrmsFAQ} />
        )}
    </>
  )
}

export default PuneHrms;
