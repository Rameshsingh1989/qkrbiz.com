import { Fragment } from "react";
import CardFeatures from "../../components/CardFeatures/CardFeatures";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import './SimpleYetSection.scss';

const SimpleYetSection = ({ data = [], className = "" }) => {
  return (
    <section className={`wrapper-area ${className}`}>
      <div className="container mt-4">
        {data.map((simpleList, simpleIndex) => (
          <Fragment key={simpleIndex}>

            <SectionHeading subTitle="" title={simpleList.title} description="" headingUnderLine={false} /> 

            <div className="row rows justify-content-between mt-3">
              {simpleList.BoxList?.map((bList, bIndex) => (
                <div className="col-lg-4" key={bIndex}>
                  <CardFeatures
                    cardBg={bList.cls}
                    bodyHeight=""
                    imgUrl={bList.imgUrls}
                    alts={bList.heads}
                    head={bList.heads}
                    headDesc=""
                    desc={bList.descs}
                  />
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default SimpleYetSection;