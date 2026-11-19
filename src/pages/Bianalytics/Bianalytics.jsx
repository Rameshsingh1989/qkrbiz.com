import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { BianalyticsMeta } from "./BianalyticsData";
import { BianalyticsHeadData,CustomizableDashData,SimpleYetData,InteractiveData } from './BianalyticsData.js';
// import useSanitizeHtml from '../../hooks/useSanitizeHtml.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import SimpleYetSection from '../Workflow/SimpleYetSection.jsx';
import bianalyticsSchemaData from './bianalyticsSchemaData.js';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import QkrHeroSection from '../../components/QkrHeroSection/QkrHeroSection.jsx';

import './Bianalytics.scss';

const Bianalytics = () => {

    const socialImage = ImagesUrl_ogImages.Biznalytics;
    // const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={BianalyticsMeta.title}
    description={BianalyticsMeta.description}
    image={socialImage}
	SchemaData={bianalyticsSchemaData} 
    />
   <QkrHeroSection HeroSectionData={BianalyticsHeadData} col1={5} col2={6} xl1={5} xl2={6} />

      <section className="py-5 customizable-dash">
            <div className="container">
                {CustomizableDashData.map((customList, customIndex)=>(
                    <div className="row justify-content-end align-items-center" key={customIndex}>
                        <div className="col-lg-6 col-xl-6 col-xxl-4 mb-1-xs">
                            <SectionHeading subTitle="" title={customList.title} description={customList.desc} subTitleCenter={false} headingUnderLine={false} /> 
                        </div>
                        <div className="col-lg-0 col-xl-0 col-xxl-2 d-none d-xxl-block"><img loading="lazy" className="img-fluid"  src={customList.imgRing} alt={customList.title}/></div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6 right">
                            <img loading="lazy" className="img-fluid"  src={customList.imgUrl} alt={customList.title}/>
                        </div>
                    </div>
                ))}
            </div>
      </section>

    <SimpleYetSection
    data={SimpleYetData}
    className="workflow-area simple-yet"
    />

      <section className="wrapper-area">
        <div className="container">
            {InteractiveData.map((customList, customIndex)=>(
                <div className="row justify-content-between align-items-center" key={customIndex}>
                    <div className="col-lg-6 col-xxl-6 order-m-1">
                        <img loading="lazy" className="img-fluid" src={customList.imgUrl} alt={customList.title} />
                    </div>
                    <div className="col-lg-6 col-xxl-5 mb-1-xs order-m-0">
                        <SectionHeading subTitle="" title={customList.title} description={customList.desc} subTitleCenter={false} headingUnderLine={false} /> 
                    </div>
                </div>
            ))}
          
        </div>
      </section>

    </>
  )
}

export default Bianalytics