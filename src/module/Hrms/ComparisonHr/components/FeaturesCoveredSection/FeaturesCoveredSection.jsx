import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";

import "./FeaturesCoveredSection.scss";

const FeaturesCoveredSection = ({ FeaturesCoveredSectionData }) => {

  return (
    <section className="feature-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 col-xl-12 col-xxl-10">
                <SectionHeading subTitle={FeaturesCoveredSectionData.badge} title={FeaturesCoveredSectionData.title} description={FeaturesCoveredSectionData.description} headingUnderLine={false} />
                <div className="row g-4">
                {FeaturesCoveredSectionData.features?.map((feature, index) => (
                    <div className="col-lg-4 col-12" key={index}>
                        <div className={`feature-card h-100 ${feature.bgColor}`}>
                            <h3>{String(index + 1).padStart(2, "0")}</h3>
                            <p className="fn-sb fn-4">{feature.title}</p>
                            {feature.desc && (
                               <p className="fn-2">{feature.desc}</p>
                              )
                            }
                        </div>
                    </div>
                ))}
                </div>
                {FeaturesCoveredSectionData.subTitle && (
                  FeaturesCoveredSectionData.suDesc && (
                  <div className="row justify-content-center align-items-center">
                      <div className="col-lg-12 col-xxl-12">
                        <div className="bg-light-pink w-100">
                          <h4 className="">{FeaturesCoveredSectionData.subTitle} </h4>
                          <p className="mb-0">{FeaturesCoveredSectionData.suDesc}</p>
                        </div>
                      </div>
                  </div>
               ) )}
            </div>
 
        </div>
        
      </div>
    </section>
  )
};

export default FeaturesCoveredSection;