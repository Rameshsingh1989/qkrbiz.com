import { Link } from "react-router";
import { Image } from "react-bootstrap";
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta.jsx";
import { DataSecurityMeta, SecurityHeadData, AccessModelData, SecuritySections, AccessWhenData, SecurityCardsData, AccessAppsData, DataSecurityFAQ, DataSecurityCtaData } from "./SecurityData.js";
import useSanitizeHtml from "../../hooks/useSanitizeHtml.js";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images.jsx';
import dataSecuritySchemaData from "./dataSecuritySchemaData.js";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";
import QkrHeroSection from "../../components/QkrHeroSection/QkrHeroSection.jsx";
import ClientLogoScroll from "../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../Customers/CustomersAllData";
import { ClientStories } from "../../components/ClientStories/ClientStories";
import FaqComponent from "../../components/FaqComponent/FaqComponent";
import CommonCtaSection from "../../components/CommonCtaSection/CommonCtaSection";

import "./DataSecurity.scss";

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-rings', 'bg-art-stairs', 'bg-art-road'];

const DataSecurity = () => {

  const sanitizeHtml = useSanitizeHtml();
  const socialImage = ImagesUrl_ogImages.DataSecurity;

  return (
    <>
      <RouteSpecificMeta
        title={DataSecurityMeta.title}
        description={DataSecurityMeta.description}
        image={socialImage}
        SchemaData={dataSecuritySchemaData}
      />

      <QkrHeroSection HeroSectionData={SecurityHeadData} col1={5} col2={6} xl1={5} xl2={6} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <section className="wrapper-area">
        <div className="container">
          <SectionHeading subTitle={AccessModelData.eyebrow} title={AccessModelData.title} description={AccessModelData.lead} subTitleCenter={true} headingUnderLine={false} />
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 mt-2">
            {AccessModelData.cards.map((card) => (
              <div className="col d-flex" key={card.id}>
                <div className={card.highlight ? 'card w-100 rounded-4 bg-magenta-light sec-card-alt' : 'card w-100 rounded-4 bg-white sec-card'}>
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="text-dark-gray text-uppercase fw-semibold small">{card.label}</span>
                    <h3 className="fs-5 mt-1">{card.title}</h3>
                    <p>{card.desc}</p>
                    {card.chips && (
                      <div className="d-flex flex-wrap gap-2">
                        {card.chips.map((chip) => (
                          <span className="rounded-pill bg-gray small fn-1 px-3 py-1" key={chip}>{chip}</span>
                        ))}
                      </div>
                    )}
                    {card.link && (
                      <Link to={card.link.to} className="mt-auto text-magenta fw-semibold">{card.link.text}</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {SecuritySections.map((section, index) => {
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
                  {section.link && (
                    <Link to={section.link.to} className="text-magenta fw-semibold">{section.link.text}</Link>
                  )}
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
          <SectionHeading subTitle={AccessWhenData.eyebrow} title={AccessWhenData.title} description="" subTitleCenter={true} headingUnderLine={false} />
          <ul className="list-unstyled mb-0 mt-2 rounded-4 border overflow-hidden sec-when">
            {AccessWhenData.items.map((item) => (
              <li className="d-lg-flex gap-4 px-3 px-lg-4 py-3" key={item.id}>
                <strong className="d-block col-lg-5">{item.title}</strong>
                <span className="d-block flex-fill mt-1 mt-lg-0 text-dark-gray">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrapper-area">
        <div className="container">
          <SectionHeading subTitle={SecurityCardsData.eyebrow} title={SecurityCardsData.title} description="" subTitleCenter={true} headingUnderLine={false} />
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 mt-2">
            {SecurityCardsData.cards.map((card) => (
              <div className="col d-flex" key={card.id}>
                <div className="card w-100 rounded-4 bg-white sec-card">
                  <div className="card-body p-4">
                    <h3 className="fs-5">{card.title}</h3>
                    <p className="mb-0">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper-area">
        <div className="container">
          <SectionHeading subTitle={AccessAppsData.eyebrow} title={AccessAppsData.title} description={AccessAppsData.lead} subTitleCenter={true} headingUnderLine={false} />
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
            {AccessAppsData.apps.map((app) => (
              <span className="rounded-pill bg-gray text-magenta fw-semibold px-3 py-2" key={app}>{app}</span>
            ))}
          </div>
        </div>
      </section>

      <ClientStories cls="" count1={3} count2={2} count3={1} />

      <FaqComponent subTitle="" title="Questions admins ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={DataSecurityFAQ} />

      <CommonCtaSection PayrollCtaData={DataSecurityCtaData} />
    </>
  );
};

export default DataSecurity;
