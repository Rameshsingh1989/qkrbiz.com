import { Fragment } from "react";
import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from '../../../../assets/images';;
import { AccountsReceivableData , AccountsReceivableMeta } from "./AccountsReceivableData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import accountsReceivableSchemaData from "./AccountsReceivableSchemaData";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import "./AccountsReceivable.scss";

const AccountsReceivable = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

   const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={AccountsReceivableMeta.title}
    description={AccountsReceivableMeta.description}
    image={socialImage}
	  SchemaData={accountsReceivableSchemaData}/>

      {AccountsReceivableData.map((accText, accIndex)=>(
        <Fragment key={accIndex}>
            <div className="content-top top-bg">
              <div className="container customizable-width">
               
                  <div className="row justify-content-end align-items-center">
                    <div className="col-lg-5 col-xxl-3 mb-2-xs">
                      <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml(accText.title)}></h1>
                      <div dangerouslySetInnerHTML={sanitizeHtml(accText.desc)}></div>
                    </div>
                    <div className="col-lg-7 col-xxl-7 p-left-lg-3">
                      <img loading="eager" fetchPriority="high"
                        className="img-fluid img-top"
                        src={accText.imgUrl}
                        alt={accText.title}
                      />
                    </div>
                  </div>
                  <div className="row justify-content-end align-items-center">
                      <div className="col-lg-12 col-xxl-10 mb-2-xs" dangerouslySetInnerHTML={sanitizeHtml(accText.desc2)}></div>
                  </div>
             
              </div>
            </div>
            {accText.SecList.map((SecText, SecIndex)=>(
              <Fragment key={SecIndex}>
                {SecIndex % 2 !== 0 ? (
                    <div className="wrapper-area">
                        <div className="container">
                          <div className="row justify-content-end align-items-center">
                            <div className="col-lg-5 col-xl-5 order-m-0">
                              <SectionHeading subTitle="" title={SecText.head} description={SecText.desc} subTitleCenter={false} headingUnderLine={false} /> 
                            </div>
                              <div className="col-lg-7 col-xl-7 order-m-1">
                                <img loading="lazy" className="img-fluid" src={ImagesUrl_sales.TrackPayments} alt={SecText.alt} />
                              </div>
                          </div>
                        </div>
                    </div>
                ):(
                  <section className={`${ SecIndex === 0 ? 'forecast wrapper-area':'wrapper-area'}`} key={SecIndex}> 
                        <div className="container">
                            <div className="row justify-content-start align-items-center">
                              <div className={`${ SecIndex === 0 ? 'col-lg-7 col-xxl-7 forecast-row':'col-lg-7 col-xxl-7'}`}>
                                <img loading="lazy" className="img-fluid mb-3" src={SecText.imgUrl} alt={SecText.alt} /> 
                              </div>
                              <div className="col-lg-5 col-xxl-5 mb-2-xs p-left-lg-2">
                                  <SectionHeading subTitle="" title={SecText.head} description={SecText.desc} subTitleCenter={false} headingUnderLine={false} /> 
                                  <div className="row px-3">
                                      {SecText.Listbox.map((Ulist, UIndex)=>(
                                         <div className="col-lg-6" key={UIndex}>
                                            <h4 className="mt-3" dangerouslySetInnerHTML={sanitizeHtml(Ulist.title)}></h4>
                                            <ul className="list-unstyled icon-left icon-magenta">
                                              {Ulist.List.map((list, LiIndex)=>(
                                                <li key={LiIndex} dangerouslySetInnerHTML={sanitizeHtml(list.li)}></li>
                                              ))}
                                            </ul>
                                        </div>
                                      ))}
                                  </div>
                              </div>
                            </div>
                        </div>
                  </section>
                )}
            </Fragment>
          ))}
        </Fragment>        
      ))}
    </>
  );
};
export default AccountsReceivable;