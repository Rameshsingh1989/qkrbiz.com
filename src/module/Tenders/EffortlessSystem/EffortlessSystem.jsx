import { Fragment } from "react";

import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./EffortlessSystem.scss";

const EffortlessSystem = ({cls, QkrbizAnIntelligentData }) => {

    const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <div className="wrapper-area" style={{paddingTop:'5.5rem', paddingBottom:'5.5rem'}}>
              <div className="container">
                  {QkrbizAnIntelligentData.map((IntList, IntIndex)=>(
                    <div className="row justify-content-between align-items-center" key={IntIndex}>
                        <div className="col-md-12 col-lg-7 col-xl-5 order-m-1">
                            <div className={`squar_bg squar_bg-tender ${cls}`}>
                                <div className="squar-area">
                                  {IntList.SquarList.map((sqText, SqIndex, sarr)=>{
                                    const sqarr1 = sarr.length-1;
                                    return(
                                      <Fragment key={SqIndex}>
                                        {SqIndex !== sqarr1 ? (
                                          <div className={sqText.cls}>
                                            <img loading="lazy" src={sqText.imgUrls} className="img-fluid img-icon" alt="Take The Hassle Out"/>
                                            <h5><span dangerouslySetInnerHTML={sanitizeHtml(sqText.heads)}></span></h5>
                                          </div>
                                        ):null}
                                      </Fragment>
                                    )} 
                                  )}
                                </div>
                                <div className="squar-area squar-column">
                                {IntList.SquarList.map((sqText, SqIndex, sarr)=>{
                                    const sqarr2 = sarr.length-1;
                                    return(
                                      <Fragment key={SqIndex}>
                                        {SqIndex === sqarr2 ? (
                                          <div className={sqText.cls}>
                                            <img loading="lazy" src={sqText.imgUrls} className="img-fluid img-icon" alt="Take The Hassle Out"/>
                                            <h5><span dangerouslySetInnerHTML={sanitizeHtml(sqText.heads)}></span></h5>
                                          </div>
                                        ):
                                        null}
                                      </Fragment>
                                    )} 
                                  )}
                                </div>
                            </div>
                        </div>   
                        <div className="col-md-12 col-lg-5 col-xl-6 p-right-lg-3 order-m-0">
                            <SectionHeading subTitle="" title={IntList.title} description={IntList.desc} subTitleCenter={false} headingUnderLine={false} />
                        </div>
                      
                    </div>  
                  ))}
              </div>            
          </div>
    </>
  )
}

export default EffortlessSystem