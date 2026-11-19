import { Link } from "react-router";
import { Image } from "react-bootstrap";
import { SmallMediumSizedMeta, SmallMediumSizedData, SmeStatsData, SmeProblemData, SmeFeaturesData, SmeStepsData, SmeGuideData, SmeIndustriesData, SmePricingData, SmeFaqData, SmeCtaData } from "./SmallMediumSizedData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import StatsRow from "../../../../components/StatsRow/StatsRow";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { ClientStories } from "../../../../components/ClientStories/ClientStories";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";
import { SmallSizedSchemaData } from "./SmallSizedSchemaData";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import BlogCard from "../../HrmsBlogs/BlogComponent/BlogCard/BlogCard";
import { HrmsBlogCardData } from "../../QkrhrHome/HrmsBlogCardData";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import CompareTable from "../component/CompareTable/CompareTable";
import { NumberedSteps } from "../component/IndustrySections/IndustrySections";

import './SmallMediumSized.scss';

const SmallMediumSized = () => {

    const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <div className="smes-page">
        <RouteSpecificMeta
        title={SmallMediumSizedMeta.title}
        description={SmallMediumSizedMeta.description}
        image={socialImage}
        SchemaData={SmallSizedSchemaData}
        />
        <QkrHeroSectionRow HeroSectionData={SmallMediumSizedData} col1={12} col2={12} xl1={12} xl2={12}/>

        <StatsRow stats={SmeStatsData} />

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <div className="bg-pink-light py-3">
            <ProblemCards ProblemData={SmeProblemData} />
        </div>

        <section className="wrapper-area" id="features">
            <div className="container">
                <SectionHeading subTitle={SmeFeaturesData.badge} title={SmeFeaturesData.title} description={SmeFeaturesData.desc} headingUnderLine={false} />
                <div className="row g-3">
                    {SmeFeaturesData.items.map((item) => (
                        <div className="col-md-6 col-lg-4 d-flex" key={item.id}>
                            <div className="card w-100 rounded-4 bg-white shadow-sm">
                                <div className="card-body p-4">
                                    <Image loading="lazy" src={item.icon} alt="" width={48} height={48} />
                                    <h3 className="fs-5 mt-3 mb-2">{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <ul className="ul-icon mb-0">
                                        {item.points.map((point) => (
                                            <li className="tick-icon-magenta" key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex flex-wrap align-items-center gap-2 mt-4">
                    <strong className="me-1">Also included:</strong>
                    <div className="d-flex flex-wrap gap-2">
                        {SmeFeaturesData.alsoIncluded.map((chip) => (
                            <span className="rounded-pill border bg-white small px-3 py-1" key={chip}>{chip}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-gray-extralight" id="how-it-works">
            <NumberedSteps data={SmeStepsData} />
        </div>

        <ClientStories cls="" count1={3} count2={2} count3={1} />

        <CompareTable CompareData={SmeGuideData} id="buyers-guide" cls="fit-table mb-4" />

        <section className="wrapper-area">
            <div className="container">
                <div className="row g-4 align-items-center rounded-4 bg-gray-extralight p-4 p-lg-5 mx-0">
                    <div className="col-lg-5">
                        <h2 className="fs-3 mb-2">{SmeIndustriesData.title}</h2>
                        <p className="mb-0">{SmeIndustriesData.desc}</p>
                    </div>
                    <div className="col-lg-7 d-flex flex-wrap gap-2">
                        {SmeIndustriesData.items.map((item) => (
                            <Link to={item.link} className="rounded-pill border bg-white text-reset px-3 py-2" key={item.id}>{item.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="wrapper-area" id="pricing">
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <SectionHeading subTitle={SmePricingData.badge} title={SmePricingData.title} description={SmePricingData.desc} subTitleCenter={false} headingUnderLine={false} />
                        <ul className="ul-icon mb-0">
                            {SmePricingData.points.map((point) => (
                                <li className="tick-icon-magenta" key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="rounded-4 border border-2 bg-white shadow-sm p-4 p-lg-5">
                            <p className="text-dark-gray mb-1">Plans start at</p>
                            <p className="mb-4"><span className="fn-9 fn-sb text-black">{SmePricingData.price}</span> <span className="text-dark-gray">{SmePricingData.priceUnit}</span></p>
                            <div className="d-flex flex-wrap gap-2">
                                {SmePricingData.buttons.map((btn) => (
                                    <Link to={btn.url} className={btn.cls} key={btn.id}>{btn.label}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FaqComponent subTitle="FAQ" title="HR software for small businesses: <span class='text-gradient'>common questions</span>" description="" FaqData={SmeFaqData} />

        <BlogCard BlogCardData={HrmsBlogCardData} componentSec=""/>

        <CommonCtaSection PayrollCtaData={SmeCtaData} />
    </div>
  )
}

export default SmallMediumSized
