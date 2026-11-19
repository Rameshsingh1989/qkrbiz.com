import { Fragment } from 'react';
import CardFeatures from '../../components/CardFeatures/CardFeatures.jsx';
import { UnifiedViewData } from './UnifiedViewData.js';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta.jsx";
import { UnifiedViewMeta } from "./UnifiedViewData";
import useSanitizeHtml from '../../hooks/useSanitizeHtml.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images.jsx';
import UnifiedViewSchemaData from './UnifiedViewSchemaData.js';
import './UnifiedView.scss';

const UnifiedView = () => {

  const sanitizeHtml = useSanitizeHtml();
  const socialImage = ImagesUrl_ogImages.UnifiedView;

  return (
    <>
        <RouteSpecificMeta
        title={UnifiedViewMeta.title}
        description={UnifiedViewMeta.description}
	    image={socialImage}
        SchemaData={UnifiedViewSchemaData}
        />

        <div className="wrapper-bg-img"> </div>
    
        <div className="all_features features py-5">
            <div className="container"> 
              {UnifiedViewData.map((SpList, SpIndex)=>(
                <Fragment key={SpIndex}>
                    <div className="row justify-content-center align-items-center mb-5">
                        <div className="col-lg-12 col-xl-12 col-xxl-10">
                            <div className="heading-title text-center">
                                <h1 className="under-line under-line-unset mb-2" dangerouslySetInnerHTML={sanitizeHtml(SpList.title)}></h1> 
                                <p className="fn-4 text-center" dangerouslySetInnerHTML={sanitizeHtml(SpList.desc)}></p>       

                            </div>
                        </div>
                    </div>
                    <div className="row rows">
                      {SpList.SpreadsheetList.map((sitem, id)=>(
                            <div className="col-lg-6 col-xl-4" key={id}>
                                <CardFeatures
                                cardBg={sitem.cardBg}
                                bodyHeight=""
                                imgUrl={sitem.imgUrls}
                                alts={sitem.title}
                                head={sitem.title}
                                headDesc=""
                                desc={sitem.desc}
                                />
                            </div> 
                        ))}
                    </div>
                </Fragment>
              ))}
                
            </div>
        </div>
    </>
  )
}

export default UnifiedView