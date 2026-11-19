import { Link } from "react-router";
import { Image } from "react-bootstrap";
import { AlertnotifiHeadData, AlertTypesData, AlertSections, AlertChecksData, AlertAppsData, AlertFAQ, AlertCtaData, AlertnotificationMeta } from "./AlertnotificationData.js";
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from "../../hooks/useSanitizeHtml.js";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import alertnotificationSchemaData from "./alertnotificationSchemaData.js";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";
import QkrHeroSection from "../../components/QkrHeroSection/QkrHeroSection.jsx";
import ClientLogoScroll from "../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../Customers/CustomersAllData";
import { ClientStories } from "../../components/ClientStories/ClientStories";
import FaqComponent from "../../components/FaqComponent/FaqComponent";
import CommonCtaSection from "../../components/CommonCtaSection/CommonCtaSection";

import "./Alertnotification.scss";

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-planet', 'bg-art-rings', 'bg-art-stairs'];

const Alertnotification = () => {

  const socialImage = ImagesUrl_ogImages.AlertNotifications;
  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
      <RouteSpecificMeta
        title={AlertnotificationMeta.title}
        description={AlertnotificationMeta.description}
        image={socialImage}
        SchemaData={alertnotificationSchemaData}
      />

      <QkrHeroSection HeroSectionData={AlertnotifiHeadData} col1={5} col2={6} xl1={5} xl2={6} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <section className="wrapper-area">
        <div className="container">
          <SectionHeading subTitle={AlertTypesData.eyebrow} title={AlertTypesData.title} description={AlertTypesData.lead} subTitleCenter={true} headingUnderLine={false} />
          <div className="row g-3 mt-2">
            {AlertTypesData.types.map((type) => (
              <div className="col-md-6 col-lg-4 d-flex" key={type.id}>
                <div className="card w-100 rounded-4 bg-white alert-card">
                  <div className="card-body p-4">
                    <span className="text-dark-gray text-uppercase fw-semibold small">{type.label}</span>
                    <h3 className="fs-5 mt-1">{type.title}</h3>
                    <p>{type.desc}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {type.chips.map((chip) => (
                        <span className="badge rounded-pill bg-gray alert-text-gray fw-medium" key={chip}>{chip}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-4 p-3 px-4 rounded-4 bg-magenta-light">
            <p className="mb-0">{AlertTypesData.band.text}</p>
            <Link to={AlertTypesData.band.link.to} className="text-magenta fw-semibold">{AlertTypesData.band.link.text}</Link>
          </div>
        </div>
      </section>

      {AlertSections.map((section, index) => {
        const visualFirst = index % 2 === 1;
        return (
          <section className="wrapper-area" id={section.id} key={section.id}>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className={`col-lg-5 ${visualFirst ? 'order-lg-2' : ''}`}>
                  <SectionHeading subTitle={section.eyebrow} badge={section.badge} title={section.title} description="" subTitleCenter={false} headingUnderLine={false} />
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
          <SectionHeading subTitle={AlertChecksData.eyebrow} title={AlertChecksData.title} description="" subTitleCenter={true} headingUnderLine={false} />
          <ol className="row row-cols-1 row-cols-sm-3 row-cols-lg-6 g-2 mt-2 ps-0 list-unstyled">
            {AlertChecksData.steps.map((step) => (
              <li className="col d-flex" key={step.id}>
                <div className="w-100 rounded-4 bg-white border alert-step-card d-flex flex-column gap-2">
                  <span className="rounded-circle bg-magenta-light text-magenta fw-semibold small alert-step-no">{step.id}</span>
                  <h3 className="fs-6 fw-semibold mb-0">{step.title}</h3>
                  <p className="mb-0 small">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrapper-area">
        <div className="container">
          <SectionHeading subTitle={AlertAppsData.eyebrow} title={AlertAppsData.title} description="" subTitleCenter={true} headingUnderLine={false} />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-2">
            {AlertAppsData.apps.map((app) => (
              <div className="col d-flex" key={app.id}>
                <div className="w-100 rounded-4 bg-gray-dark alert-app-box">
                  <h3 className="fs-6 fw-semibold text-magenta mb-1">{app.product}</h3>
                  <p className="mb-0">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientStories cls="" count1={3} count2={2} count3={1} />

      <FaqComponent subTitle="" title="Questions about alerts and notifications" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={AlertFAQ} />

      <CommonCtaSection PayrollCtaData={AlertCtaData} />
    </>
  );
};

export default Alertnotification;
