import { useState } from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const DashboardsTab = ({ data, tabGg }) => {

    const [activeStage, setActiveStage] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);

    const currentStage = data.stages[activeStage];
    const currentFeature = currentStage?.features[activeFeature];

    const handleStageClick = (idx) => {
        setActiveStage(idx);
        setActiveFeature(0);
    };

    return (
        <section className={`${tabGg}`}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-10 mx-auto text-center">
                        <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 col-xxl-12">

                        <div className="row">
                            <div className="col-lg-12">

                                <div className={`dashboards-tab-card ${currentStage.bgClass}`}>
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-lg-12 col-xl-11">
                                            <div className="dashboards-tab">
                                                {data.stages.map((stage, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className={`stage-tab ${
                                                    activeStage === idx ? "active" : ""
                                                    }`}
                                                    onClick={() => handleStageClick(idx)}
                                                >
                                                    {stage.tabName}
                                                </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dashboards-tab-body">
                                        <div className="row g-1 align-items-stretch">

                                            <div className="col-lg-4">
                                                <div className="dashboards-tab-info">
                                                <ul className="info-features">
                                                    {currentStage?.features.map((feature, fIdx) => (
                                                    <li key={fIdx}>
                                                        {feature.label}
                                                    </li>
                                                    ))}
                                                </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-8">
                                                <div className="dashboards-tab-preview">
                                                {currentStage && (
                                                    <img loading="lazy"
                                                    className="img img-fluid"
                                                    src={currentStage.imgUrl}
                                                    alt={currentStage.tabName}
                                                    />
                                                )}
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
export default DashboardsTab;