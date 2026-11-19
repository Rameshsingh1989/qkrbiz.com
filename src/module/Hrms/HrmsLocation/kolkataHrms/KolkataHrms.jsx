import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import {KolkataHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesKolkataData,EnterprisesDesigned, HRSoftwareKolkataData, CustomersData, KolkataHrmsFAQ,completeHRDba, KolkataHrmsMeta } from "./KolkataHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { KolkataSchemaData } from "./KolkataSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./KolkataHrms.scss";

const KolkataHrms = () => {

  const socialImage = ImagesUrl_ogImages.Kolkata;

  return (
    <>
      <RouteSpecificMeta
      title={KolkataHrmsMeta.title}
      description={KolkataHrmsMeta.description}
      image={socialImage}
      SchemaData={KolkataSchemaData}
      />
      <ComponentLocation
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={KolkataHrmsData}
      HosingData={HosingData}
      whyChooseData={whyChooseData}
      ctaData={ctaData}
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesKolkataData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwareKolkataData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={completeHRDba}
      />
       {KolkataHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={KolkataHrmsFAQ} />
        )}
    </>
  )
}

export default KolkataHrms;
