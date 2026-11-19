import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import {JaipurHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesJaipurData,EnterprisesDesigned, HRSoftwareJaipurData, CustomersData, JaipurHrmsFAQ,growingJaipurDba , JaipurHrmsMeta } from "./JaipurHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { JaipurHrmsSchemaData } from "./JaipurHrmsSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";

import "./JaipurHrms.scss";

const JaipurHrms = () => {

  const socialImage = ImagesUrl_ogImages.Jaipur;

  return (
    <>
      <RouteSpecificMeta
      title={JaipurHrmsMeta.title}
      description={JaipurHrmsMeta.description}
      image={socialImage}
      SchemaData={JaipurHrmsSchemaData}
      />
      <ComponentLocation
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={JaipurHrmsData}
      HosingData={HosingData}
      whyChooseData={whyChooseData}
      ctaData={ctaData}
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesJaipurData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwareJaipurData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={growingJaipurDba}
      // ctaData={FinalctaData}
      />
       {JaipurHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={JaipurHrmsFAQ} />
        )}
    </>
  )
}

export default JaipurHrms;
