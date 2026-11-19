// import React from 'react';
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import "./CardFeatures.scss";

const CardFeatures = ({ cardBg, bodyHeight,imgUrl, alts, head, headDesc, desc }) => {

  const sanitizeHtml = useSanitizeHtml();
  return (
    <>
        <div className={`card ${cardBg}`}>
            {imgUrl && 
               <div className="card-header header-bgunset">
                   <img loading="lazy" src={imgUrl} alt={alts} />
              </div>
            }
            <div className={`card-body ${bodyHeight}`}>
              {head && <h3 dangerouslySetInnerHTML={sanitizeHtml(head)}></h3>}
              {headDesc && <p className="text-magenta" dangerouslySetInnerHTML={sanitizeHtml(headDesc)}></p>}
              <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(desc)}></p>
            </div>
        </div>     
    </>
  )
}

export default CardFeatures;