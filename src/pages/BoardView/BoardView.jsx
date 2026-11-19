import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { BoardViewMeta, BoardHeadData, BoardHowData, BoardSections, BoardReadyData, BoardFAQ, BoardCtaData } from './BoardViewData.js';
import useSanitizeHtml from '../../hooks/useSanitizeHtml.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import boardViewSchemaData from './boardViewSchemaData.js';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import QkrHeroSection from '../../components/QkrHeroSection/QkrHeroSection.jsx';
import ClientLogoScroll from '../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../Customers/CustomersAllData';
import { ClientStories } from '../../components/ClientStories/ClientStories';
import FaqComponent from '../../components/FaqComponent/FaqComponent';
import CommonCtaSection from '../../components/CommonCtaSection/CommonCtaSection';

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-planet', 'bg-art-bunting', 'bg-art-sunrise'];

const BoardView = () => {

  const socialImage = ImagesUrl_ogImages.BoardView;
  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
        title={BoardViewMeta.title}
        description={BoardViewMeta.description}
        image={socialImage}
        SchemaData={boardViewSchemaData}
        />

        <QkrHeroSection HeroSectionData={BoardHeadData} col1={5} xl1={5} col2={7} xl2={7} />

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <section className="wrapper-area">
        <div className="container">
            <SectionHeading subTitle={BoardHowData.eyebrow} title={BoardHowData.title} description={BoardHowData.lead} subTitleCenter={true} headingUnderLine={false} />
            <div className="row">
            {BoardHowData.apps.map((app) => (
                <div className="col-md-6 col-lg-4 d-flex" key={app.id}>
                <div className="card w-100 rounded-4 bg-white shadow-sm">
                    <div className="card-body p-4">
                    <span className="text-uppercase fw-semibold small text-magenta">{app.product}</span>
                    <h3 className="fs-5 mt-1 mb-3">{app.title}</h3>
                    <p className="mb-0">{app.desc}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        {BoardSections.map((section, index) => {
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
                <div className={`col-lg-7 dms-visual ${visualFirst ? 'order-lg-1' : ''}`}>
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
            <SectionHeading subTitle={BoardReadyData.eyebrow} title={BoardReadyData.title} description="" subTitleCenter={true} headingUnderLine={false} />
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-2">
            {BoardReadyData.items.map((item) => (
                <div className="col d-flex" key={item.id}>
                <div className="card w-100 rounded-4 bg-white shadow-sm">
                    <div className="card-body p-4">
                        <h3 className="fs-6 fw-semibold mb-1">{item.title}</h3>
                        <p className="mb-0">{item.desc}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-4 p-3 px-4 rounded-4 bg-gray-dark">
            <p className="mb-0">{BoardReadyData.band.text}</p>
            <Link to={BoardReadyData.band.link.to} className="text-magenta fw-semibold">{BoardReadyData.band.link.text}</Link>
            </div>
        </div>
        </section>

        <ClientStories cls="" count1={3} count2={2} count3={1} />

        <FaqComponent subTitle="" title="Questions about boards" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={BoardFAQ} />

        <CommonCtaSection PayrollCtaData={BoardCtaData} />
    </>
  )
}

export default BoardView;
