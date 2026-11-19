import React, { Fragment } from 'react';
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import "./RaectangleContent.scss";

const RaectangleContent = ({RaectangleData, bgThem, Headclr}) => {
  const sanitizeHtml = useSanitizeHtml();
  return (
    <>
      <div className={`wrapper-area raectangle-area ${bgThem}`}>
          <div className="container">
                <div className="row">
                    {RaectangleData.map((rectText, reIndex, arr)=>{
                      const lastArray = arr.length - 1;
                      return(
                        <Fragment  key={reIndex}>
                          <div className={`col-12 ${reIndex !== lastArray ? 'col-sm-6':'col-sm-12'} col-lg-2 col-xl-2`}>
                              <h2 className={`${rectText.cls_1} ${Headclr}`}>{`0 ${rectText.id}`}</h2>
                              <div className="Rectangle">
                                    <img loading="lazy" src={rectText.imgUrl} className="img-icon" alt={rectText.title}/>
                                    <h5><span dangerouslySetInnerHTML={sanitizeHtml(rectText.title)}></span></h5>
                              </div>
                              {rectText.id === 2 || rectText.id === 4 ? (
                                <h2 className={`${rectText.cls_2} ${Headclr}`}>{`0 ${rectText.id}`}</h2>
                              ):null  
                              }
                          </div>
                        </Fragment>
                      );
                    })}
                </div> 
          </div>            
      </div>
    </>
  )
}

export default RaectangleContent;