import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import { DocumentBoxes, DocumentCtaData, DocumentFAQ, DocumentHeadData, DocumentMeta, DocumentSections } from './DocumentsData';
import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { DocumentEchemaData } from './DocumentEchemaData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import SharedDocuments from '../../../../pages/Documents/SharedDocuments/SharedDocuments';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';

import './Document.scss';

// The customer quote sits right after the signing section, next to the letters story it backs.
const QUOTE_AFTER_SECTION = 'signing';
const QUOTE_CLIENT_ID = 3;

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-bunting', 'bg-art-road', 'bg-art-rings'];

const Document = () => {
    const socialImage = ImagesUrl_ogImages.QkrHr;
    const sanitizeHtml = useSanitizeHtml();
     
    const quote = ClientReviewData.find((client) => client.id === QUOTE_CLIENT_ID);

  return (
    <>
        <RouteSpecificMeta
        title={DocumentMeta.title}
        description={DocumentMeta.description}
        image={socialImage}
        SchemaData={DocumentEchemaData}
        />

        <QkrHeroSectionRow HeroSectionData={DocumentHeadData} col1={12} col2={12} xl1={12} xl2={12} />

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <SharedDocuments SharedDocumentsData={DocumentBoxes} />


        {DocumentSections.map((section, index) => {
          const visualFirst = index % 2 === 1;
          return (
            <section className="wrapper-area" id={section.id} key={section.id}>
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className={`col-lg-5 ${visualFirst ? 'order-lg-2' : ''}`}>
                    <SectionHeading subTitle={section.eyebrow} title={section.title} description="" subTitleCenter={false} headingUnderLine={false} />
                    <ul className="ul-icon">
                      {section.points.map((point, pIndex) => (
                        <li className="tick-icon-magenta" key={pIndex} dangerouslySetInnerHTML={sanitizeHtml(point.text)} />
                      ))}
                    </ul>
                    {section.link && (
                      <Link to={section.link.to} className="btn btn-outline-magenta mt-2">{section.link.text}</Link>
                    )}
                  </div>
                  <div className={`col-lg-6 mt-4 mt-lg-0 ${visualFirst ? 'order-lg-1' : ''}`}>
                    <div className={`bg-art ${visualBgs[index % visualBgs.length]} rounded-4 p-3 p-md-4`}>
                      <Image loading="lazy" fluid className="w-100" src={section.imgUrl} alt={section.alt} width={section.imgWidth} height={section.imgHeight} />
                    </div>
                  </div>
                </div>
                
              </div>
              {section.id === QUOTE_AFTER_SECTION && quote && (
                    <div className="clients-say mt-5">
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
            </section>
            
            
          );
        })}

        {DocumentFAQ && (
            <FaqComponent subTitle="" title="Questions HR teams ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={DocumentFAQ} />
        )}

        <CommonCtaSection PayrollCtaData={DocumentCtaData} />

    </>
  )
}

export default Document;
