import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import ComponentLocation from "../ComponentLocation";
import { ChennaiHrmsData, whyChooseData,ctaData, hrmsFeaturesData, EnterprisesDelhiData,EnterprisesDesigned, HRSoftwareChennaiData, CustomersData, ChennaiHrmsFAQ,smartHrmsSoftwareDba , ChennaiHrmsMeta } from "./ChennaiHrmsData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ChennaiSchemaData } from "./ChennaiSchemaData";
import {HosingData, citiesIndia, EmployeeExperienceData, ImplementationProcessData } from "../DelhiHrms/DelhiHrmsData";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import "./ChennaiHrms.scss";

const ChennaiHrms = () => {

  const socialImage = ImagesUrl_ogImages.ChennaiTamilNadu;
  
  return (
    <>
      <RouteSpecificMeta
      title={ChennaiHrmsMeta.title}
      description={ChennaiHrmsMeta.description}
      image={socialImage}
      SchemaData={ChennaiSchemaData} 
      />
      <ComponentLocation 
      customizableWidth=""
      lgWidth="6"
      xlWidth="6"
      xxlWidth="6"
      videoIdCode="bf3U8zW1dxc"
      TopHeaderClass="content-top-mumbai"
      HeadData={ChennaiHrmsData} 
      HosingData={HosingData} 
      whyChooseData={whyChooseData} 
      ctaData={ctaData} 
      hrmsFeaturesData={hrmsFeaturesData}
      citiesIndia={citiesIndia}
      EnterprisesDelhiData={EnterprisesDelhiData}
      EnterprisesDesigned={EnterprisesDesigned}
      HRSoftwareDelhiData={HRSoftwareChennaiData}
      ImplementationProcessData={ImplementationProcessData}
      EmployeeExperienceData={EmployeeExperienceData}
      CustomersData={CustomersData}
      internalLinkSectionDba={smartHrmsSoftwareDba}
      />
       {ChennaiHrmsFAQ && (
          <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={ChennaiHrmsFAQ} />
        )}
    </>
  )
}

export default ChennaiHrms;