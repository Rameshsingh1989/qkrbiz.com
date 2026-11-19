import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from '../../hooks/useSanitizeHtml.js';
import { DocumentsHeadData, DocAppsData, DocSections, DocSafeData, DocumentsFAQ, DocumentsCtaData, DocumentsMeta } from './DocumentsData.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import documentSchemaData from './documentSchemaData.js';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import ClientLogoScroll from '../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../Customers/CustomersAllData';
import { ClientStories } from '../../components/ClientStories/ClientStories';
import FaqComponent from '../../components/FaqComponent/FaqComponent';
import CommonCtaSection from '../../components/CommonCtaSection/CommonCtaSection';
import QkrHeroSection from '../../components/QkrHeroSection/QkrHeroSection.jsx';

import './Documents.scss';

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-sunrise', 'bg-art-dots', 'bg-art-hills'];

const Documents = () => {

  const sanitizeHtml = useSanitizeHtml();
  const socialImage = ImagesUrl_ogImages.Document;

  return (
    <>
        <RouteSpecificMeta
        title={DocumentsMeta.title}
        description={DocumentsMeta.description}
        image={socialImage}
        SchemaData={documentSchemaData}
        />

        <QkrHeroSection HeroSectionData={DocumentsHeadData} col1={5} col2={6} xl1={5} xl2={6}/>
       
        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <section className="wrapper-area">
            <div className="container">
                <SectionHeading subTitle={DocAppsData.eyebrow} title={DocAppsData.title} description={DocAppsData.lead} subTitleCenter={true} headingUnderLine={false} />
                <div className="row g-3 mt-2">
                    {DocAppsData.apps.map((app) => (
                        <div className="col-md-6 col-lg-4 d-flex" key={app.id}>
                            <div className="card w-100 rounded-4 bg-white doc-app-card">
                                <div className="card-body p-4">
                                    <span className="text-uppercase fw-semibold small">{app.product}</span>
                                    <h3 className="fs-5 mt-1 mb-3">{app.title}</h3>
                                    <div className="d-flex flex-wrap gap-2">
                                        {app.chips.map((chip) => (
                                            <span className="badge rounded-pill bg-gray doc-chip fw-medium" key={chip}>{chip}</span>
                                        ))}
                                    </div>
                                    {app.link && (
                                        <Link to={app.link.to} className="d-inline-block mt-3 text-magenta fw-semibold">{app.link.text}</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {DocSections.map((section, index) => {
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
                            <div className={`col-lg-6 dms-visual ${visualFirst ? 'order-lg-1' : ''}`}>
                                <div className={`bg-art ${visualBgs[index % visualBgs.length]} rounded-4 p-3 p-md-4`}>
                                  <Image loading="lazy" fluid src={section.imgUrl} alt={section.alt} width={section.imgWidth} height={section.imgHeight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        })}

        <section className="wrapper-area">
            <div className="container">
                <SectionHeading subTitle={DocSafeData.eyebrow} title={DocSafeData.title} description="" subTitleCenter={true} headingUnderLine={false} />
                <div className="row g-3 mt-2">
                    {DocSafeData.items.map((item) => (
                        <div className="col-md-4 d-flex" key={item.id}>
                            <div className="card w-100 rounded-4">
                                <div className="card-body p-4">
                                    <h3>{item.title}</h3>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <ClientStories cls="" count1={3} count2={2} count3={1} />

        <FaqComponent subTitle="" title="Questions about documents" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={DocumentsFAQ} />

        <CommonCtaSection PayrollCtaData={DocumentsCtaData} />
    </>
  )
}

export default Documents
