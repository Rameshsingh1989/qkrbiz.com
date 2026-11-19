// import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import { EmployeeCtaData, EmployeeDataFAQ, EmployeeExtras, EmployeeHeadData, EmployeeLifecycle, EmployeeMeta, EmployeeSections, EmployeeTiles } from './EmployeeData';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { EmployeeEchemaData } from './EmployeeEchemaData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import { CustomFieldList, Pill } from './EmployeeVisuals';

import './EmployeeDatabase.scss';

// Pranav Goel's quote mentions customizable views and easier HR operations.
const QUOTE_CLIENT_ID = 1;

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-dots', 'bg-art-sunrise', 'bg-art-arch', 'bg-art-planet'];

const EmployeeDatabase = () => {
  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();
  
  const quote = ClientReviewData.find((client) => client.id === QUOTE_CLIENT_ID);
  const [record, ...tiles] = EmployeeTiles;

  const renderSection = (section, index) => {
    const visualFirst = index % 2 === 1;
    return (
      <section className="wrapper-area emp-section" id={section.id} key={section.id}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className={`col-lg-5 ${visualFirst ? 'order-lg-2' : ''}`}>
              <SectionHeading subTitle={section.eyebrow} title={section.title} description="" subTitleCenter={false} headingUnderLine={false} />
              <ul className="ul-icon mt-3">
                {section.points.map((point, pIndex) => (
                  <li className="tick-icon-magenta" key={pIndex} dangerouslySetInnerHTML={sanitizeHtml(point.text)} />
                ))}
              </ul>
              {section.link && (
                <Link to={section.link.to} className="btn btn-outline-magenta mt-2">{section.link.text}</Link>
              )}
            </div>
            <div className={`col-lg-6 emp-visual ${visualFirst ? 'order-lg-1' : ''}`}>
              <div className={`bg-art ${visualBgs[index % visualBgs.length]} rounded-4 p-3 p-md-4`}>
                <Image loading="lazy" fluid className="w-100" src={section.imgUrl} alt={section.alt} width={section.imgWidth} height={section.imgHeight} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const firstSections = EmployeeSections.filter((s) => !s.afterLifecycle);
  const laterSections = EmployeeSections.filter((s) => s.afterLifecycle);

  return (
    <>
      <RouteSpecificMeta
      title={EmployeeMeta.title}
      description={EmployeeMeta.description}
      image={socialImage}
      SchemaData={EmployeeEchemaData}
      />

      <QkrHeroSectionRow HeroSectionData={EmployeeHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <section className="wrapper-area">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="emp-tile emp-tile-lg d-flex flex-column gap-3">
                <div>
                  <Pill tone="ok">{record.tag}</Pill>
                  <h3>{record.title}</h3>
                  <p>{record.desc}</p>
                </div>
                <div className="mt-auto"><CustomFieldList /></div>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3">
              {tiles.slice(0, 2).map((tile) => (
                <div className="emp-tile d-flex flex-column" key={tile.id}>
                  <h3 className="mt-0">{tile.title}</h3>
                  <p>{tile.desc}</p>
                  {tile.note && <span className="mt-3"><Pill tone="warn">{tile.note}</Pill></span>}
                </div>
              ))}
            </div>
            {tiles.slice(2).map((tile) => (
              <div className="col-lg-4" key={tile.id}>
                <div className="emp-tile">
                  <h3 className="mt-0">{tile.title}</h3>
                  <p>{tile.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {firstSections.map((section, index) => renderSection(section, index))}

      <section className="wrapper-area emp-section" id="lifecycle">
        <div className="container">
          <SectionHeading subTitle="Join to exit" title="The whole lifecycle, in order." description="" subTitleCenter={false} headingUnderLine={false} />
          <div className="row g-3 mt-1">
            {EmployeeLifecycle.map((step) => (
              <div className="col-md-6 col-lg-3" key={step.id}>
                <div className="emp-tile d-flex flex-column">
                  <span><Pill tone="info">{step.step}</Pill></span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {step.link && <Link to={step.link.to} className="mt-3">{step.link.text}</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {laterSections.map((section, index) => renderSection(section, firstSections.length + index))}

      <section className="wrapper-area emp-section">
        <div className="container">
          <div className="row g-3">
            {EmployeeExtras.map((extra) => (
              <div className="col-lg-6" key={extra.id}>
                <div className="emp-tile d-flex flex-column">
                  <span><Pill tone="info">{extra.tag}</Pill></span>
                  <h3>{extra.title}</h3>
                  <p>{extra.desc}</p>
                  {extra.link && <Link to={extra.link.to} className="mt-3">{extra.link.text}</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {quote && (
        <div className="clients-say">
          <div className="container">
            <div className="row justify-content-between clients-sayInner">
              <div className="col-lg-3">
                <div className="clint-img">
                  <Image loading="lazy" fluid src={quote.imgUrl} alt={quote.title} />
                </div>
              </div>
              <div className="col-lg-8">
                <p className="quote-right left" dangerouslySetInnerHTML={sanitizeHtml(quote.desc)} />
                <div className="d-flex">
                  <div className="flex-shrink-0 left-border"></div>
                  <div className="flex-grow-1">
                    <h3 className="text-title" dangerouslySetInnerHTML={sanitizeHtml(quote.title)} />
                    <p className="text-violet" dangerouslySetInnerHTML={sanitizeHtml(quote.subTitle)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <FaqComponent subTitle="" title="Questions HR teams ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={EmployeeDataFAQ} />

      <CommonCtaSection PayrollCtaData={EmployeeCtaData} />

    </>
  )
}

export default EmployeeDatabase;
