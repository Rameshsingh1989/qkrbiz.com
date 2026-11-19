import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { CustomizationsMeta, CustomizationsHeadData, CustomizationsReadyData, CustomizationsSections, CustomizationsFAQ, CustomizationsCtaData } from './CustomizationsData';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import customizationsSchemaData from './customizationsSchemaData';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import QkrHeroSection from '../../components/QkrHeroSection/QkrHeroSection.jsx';
import ClientLogoScroll from '../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../Customers/CustomersAllData';
import { ClientStories } from '../../components/ClientStories/ClientStories';
import FaqComponent from '../../components/FaqComponent/FaqComponent';
import CommonCtaSection from '../../components/CommonCtaSection/CommonCtaSection';

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-arch', 'bg-art-hills', 'bg-art-dots'];

const Customizations = () => {

  const sanitizeHtml = useSanitizeHtml();
  const socialImage = ImagesUrl_ogImages.Customizations;

  return (
    <>
        <RouteSpecificMeta
        title={CustomizationsMeta.title}
        description={CustomizationsMeta.description}
        image={socialImage}
        SchemaData={customizationsSchemaData}
        />

        <QkrHeroSection HeroSectionData={CustomizationsHeadData} col1={5} xl1={5} col2={7} xl2={7} />

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <section className="wrapper-area">
        <div className="container">
            <SectionHeading subTitle={CustomizationsReadyData.eyebrow} title={CustomizationsReadyData.title} description={CustomizationsReadyData.lead} subTitleCenter={true} headingUnderLine={false} />
            <div className="row g-3">
            {CustomizationsReadyData.items.map((item) => (
                <div className="col-md-6 col-lg-4 d-flex" key={item.id}>
                <div className={`card w-100 rounded-4 shadow-sm ${item.highlight ? 'bg-magenta-light' : 'bg-white'}`}>
                    <div className="card-body p-4">
                    <span className="text-uppercase fw-semibold small text-magenta">{item.label}</span>
                    <h3 className="fs-5 mt-1 mb-3">{item.title}</h3>
                    <p className="mb-0">{item.desc}</p>
                    {item.link && (
                        <Link to={item.link.to} className="d-inline-block mt-3 text-magenta fw-semibold">{item.link.text}</Link>
                    )}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        {CustomizationsSections.map((section, index) => {
        const visualFirst = index % 2 === 1;
        return (
            <section className="wrapper-area" id={section.id} key={section.id}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                <div className={`col-lg-5 ${visualFirst ? 'order-lg-2' : ''}`}>
                    <SectionHeading subTitle={section.eyebrow} title={section.title} description="" subTitleCenter={false} headingUnderLine={false} />
                    <ul className="ul-icon">
                    {section.points.map((point, pIndex) => (
                        <li className="tick-icon-magenta" key={pIndex} dangerouslySetInnerHTML={sanitizeHtml(point)} />
                    ))}
                    </ul>
                </div>
                <div className={`col-lg-7 ${visualFirst ? 'order-lg-1' : ''}`}>
                    <div className={`bg-art ${visualBgs[index % visualBgs.length]} rounded-4 p-3 p-md-4`}>
                    <Image loading="lazy" fluid src={section.imgUrl} alt={section.alt} width={section.imgWidth} height={section.imgHeight} />
                    </div>
                </div>
                </div>
            </div>
            </section>
        );
        })}

        <ClientStories cls="" count1={3} count2={2} count3={1} />

        <FaqComponent subTitle="" title="Questions about customizing" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={CustomizationsFAQ} />

        <CommonCtaSection PayrollCtaData={CustomizationsCtaData} />
    </>
  )
}

export default Customizations;
