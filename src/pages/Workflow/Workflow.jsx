import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { WorkflowMeta, WorkflowsHeadData, WorkflowAppsData, WorkflowSections, WorkflowSafeData, WorkflowFAQ, WorkflowCtaData } from './WorkflowData.js';
import useSanitizeHtml from '../../hooks/useSanitizeHtml.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import workflowSchemaData from './workflowSchemaData.js';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import QkrHeroSection from '../../components/QkrHeroSection/QkrHeroSection.jsx';
import ClientLogoScroll from '../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../Customers/CustomersAllData';
import { ClientStories } from '../../components/ClientStories/ClientStories';
import FaqComponent from '../../components/FaqComponent/FaqComponent';
import CommonCtaSection from '../../components/CommonCtaSection/CommonCtaSection';
import './Workflow.scss';

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-road', 'bg-art-arch', 'bg-art-bunting'];

const Workflow = () => {

  const socialImage = ImagesUrl_ogImages.Workflow;
  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
      <RouteSpecificMeta
        title={WorkflowMeta.title}
        description={WorkflowMeta.description}
        image={socialImage}
        SchemaData={workflowSchemaData}
      />

      <QkrHeroSection HeroSectionData={WorkflowsHeadData} col1={5} col2={6} xl1={5} xl2={6} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <section className="wrapper-area">
        <div className="container">
          <SectionHeading subTitle={WorkflowAppsData.eyebrow} title={WorkflowAppsData.title} description={WorkflowAppsData.lead} subTitleCenter={true} headingUnderLine={false} />
          <div className="row g-3 mt-2">
            {WorkflowAppsData.apps.map((app) => (
              <div className="col-md-6 col-lg-4 d-flex" key={app.id}>
                <div className={app.highlight ? 'card w-100 rounded-4 bg-magenta-light wf-card-alt' : 'card w-100 rounded-4 bg-white wf-card'}>
                  <div className="card-body p-4">
                    <span className="text-uppercase fw-semibold small">{app.product}</span>
                    <h3 className="fs-5 mt-1 mb-3">{app.title}</h3>
                    {app.desc && <p className="mb-0">{app.desc}</p>}
                    {app.chips && (
                      <div className="d-flex flex-wrap gap-2">
                        {app.chips.map((chip) => (
                          <span className="badge rounded-pill bg-gray wf-text-gray fw-medium" key={chip}>{chip}</span>
                        ))}
                      </div>
                    )}
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

      {WorkflowSections.map((section, index) => {
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
          <SectionHeading subTitle={WorkflowSafeData.eyebrow} title={WorkflowSafeData.title} description="" subTitleCenter={true} headingUnderLine={false} />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-2">
            {WorkflowSafeData.items.map((item) => (
              <div className="col d-flex" key={item.id}>
                <div className="w-100 rounded-4 bg-white border wf-guard">
                  <h3 className="fs-6 fw-semibold mb-1">{item.title}</h3>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-4 p-3 px-4 rounded-4 bg-gray-dark">
            <p className="mb-0 wf-text-gray">{WorkflowSafeData.band.text}</p>
            <Link to={WorkflowSafeData.band.link.to} className="text-magenta fw-semibold">{WorkflowSafeData.band.link.text}</Link>
          </div>
        </div>
      </section>

      <ClientStories cls="" count1={3} count2={2} count3={1} />

      <FaqComponent subTitle="" title="Questions admins ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={WorkflowFAQ} />

      <CommonCtaSection PayrollCtaData={WorkflowCtaData} />
    </>
  )
}

export default Workflow;
