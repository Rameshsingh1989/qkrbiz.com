import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import { WorkflowsCovers, WorkflowsCtaData, WorkflowsFAQ, WorkflowsHeadData, WorkflowsJourney, WorkflowsMeta, WorkflowsSections, WorkflowsTiles, WorkflowsTools, WorkflowsWhatHappens } from './WorkflowsData';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { WorkflowEchemaData } from './WorkflowEchemaData';
import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import { Pill, StageChain } from './WorkflowVisuals';
// import { hrmsMobileScrData } from '../../QkrhrHome/QkrhrHomeData';

import './Workflows.scss';

// Pranav Goel's quote mentions smart workflows.
const QUOTE_CLIENT_ID = 1;

const TILE = 'card h-100 rounded-4 shadow-sm p-4';

// Backgrounds for the section visuals, repeated in this order.
const visualBgs = ['bg-art-hills', 'bg-art-planet', 'bg-art-dots'];

const Workflows = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();

  // const [windowWidth, setWindowWidth] = useState(0);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const quote = ClientReviewData.find((client) => client.id === QUOTE_CLIENT_ID);
  const [designer, ...tiles] = WorkflowsTiles;

  return (
    <>
      <RouteSpecificMeta
        title={WorkflowsMeta.title}
        description={WorkflowsMeta.description}
        image={socialImage}
        SchemaData={WorkflowEchemaData}
      />

      <QkrHeroSectionRow HeroSectionData={WorkflowsHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <section className="wrapper-area" id="journey">
        <div className="container">
          <SectionHeading subTitle="The journey" title="One request, start to finish, and nobody has to chase it." description="" subTitleCenter={true} headingUnderLine={false} />
          <ol className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3 list-unstyled mb-0">
            {WorkflowsJourney.map((step) => (
              <li className="col" key={step.id}>
                <div className={TILE}>
                  <span className="d-flex align-items-center gap-2">
                    <span className="wf-avatar rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 fw-bold bg-magenta-light text-magenta">{step.id}</span>
                    <span className="small fw-bold text-uppercase text-dark-gray">{step.who}</span>
                  </span>
                  <h3 className="h5 mt-3 mb-2">{step.title}</h3>
                  <p className="mb-0">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrapper-area">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className={`${TILE} gap-3`}>
                <div>
                  <Pill tone="ok">{designer.tag}</Pill>
                  <h3 className="mt-3 mb-2">{designer.title}</h3>
                  <p className="mb-0">{designer.desc}</p>
                </div>
                <div className="mt-auto d-flex align-items-center gap-2 flex-wrap text-dark-gray"><Pill tone="info">Applies when</Pill>Expense claim · amount over ₹50,000</div>
                <StageChain />
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3">
              {tiles.slice(0, 2).map((tile) => (
                <div className={TILE} key={tile.id}>
                  <h3 className="h5 mb-2">{tile.title}</h3>
                  <p className="mb-0">{tile.desc}</p>
                  {tile.note && <span className="mt-3"><Pill tone="warn">{tile.note}</Pill></span>}
                </div>
              ))}
            </div>
            {tiles.slice(2).map((tile) => (
              <div className="col-lg-4" key={tile.id}>
                <div className={TILE}>
                  <h3 className="h5 mb-2">{tile.title}</h3>
                  <p className="mb-0">{tile.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {WorkflowsSections.map((section, index) => {
        const visualFirst = index % 2 === 1;
        return (
          <section className="wrapper-area" id={section.id} key={section.id}>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className={`col-lg-5 ${visualFirst ? 'order-lg-2' : ''}`}>
                  <SectionHeading subTitle={section.eyebrow} title={section.title} description="" subTitleCenter={false} headingUnderLine={false} />
                  <ul className="ul-icon mt-3">
                    {section.points.map((point, pIndex) => (
                      <li className="tick-icon-magenta" key={pIndex} dangerouslySetInnerHTML={sanitizeHtml(point.text)} />
                    ))}
                  </ul>
                </div>
                <div className={`col-lg-6 mt-4 mt-lg-0 ${visualFirst ? 'order-lg-1' : ''}`}>
                  <div className={`bg-art ${visualBgs[index % visualBgs.length]} rounded-4 p-3 p-md-4`}>
                    <Image loading="lazy" fluid className="w-100" src={section.imgUrl} alt={section.alt} width={section.imgWidth} height={section.imgHeight} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="wrapper-area border-top" id="stuck">
        <div className="container">
          <SectionHeading subTitle="What happens when…" title="Nothing gets stuck, and nothing is decided behind your back." description="" subTitleCenter={false} headingUnderLine={false} />
          <dl className="list-group rounded-4 shadow-sm mb-0">
            {WorkflowsWhatHappens.map((item) => (
              <div className="list-group-item row g-1 mx-0 px-3 px-md-4 py-3" key={item.id}>
                <dt className="col-md-5 fw-semibold">{item.when}</dt>
                <dd className="col-md-7 text-dark-gray mb-0">{item.then}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrapper-area border-top" id="notify">
        <div className="container">
          <SectionHeading subTitle="Tell, ask, remind" title="Three tools, each with one job." description="" subTitleCenter={true} headingUnderLine={false} />
          <div className="row g-3 mt-1">
            {WorkflowsTools.map((tool) => (
              <div className="col-lg-4" key={tool.id}>
                <div className={TILE}>
                  <span><Pill tone={tool.tone}>{tool.tag}</Pill></span>
                  <h3 className="h5 mt-3 mb-2">{tool.title}</h3>
                  <p className="mb-0">{tool.desc}</p>
                  {tool.link && <Link to={tool.link.to} className="mt-3 fw-semibold text-magenta">{tool.link.text}</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper-area border-top" id="covers">
        <div className="container">
          <SectionHeading subTitle="What it covers" title="One engine for every request in HR." description="" subTitleCenter={true} headingUnderLine={false} />
          <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center">
            {WorkflowsCovers.map((item) => item.to ? (
              <Link to={item.to} className="badge rounded-pill bg-gray text-magenta fw-semibold fs-6 px-3 py-2" key={item.name}>{item.name}</Link>
            ) : (
              <span className="badge rounded-pill bg-gray text-dark-gray fw-semibold fs-6 px-3 py-2" key={item.name}>{item.name}</span>
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

      <FaqComponent subTitle="" title="Questions HR teams ask" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={WorkflowsFAQ} />

      <CommonCtaSection PayrollCtaData={WorkflowsCtaData} />

      {/* <section className="mobile-design">
        <div className="container">
          {hrmsMobileScrData.map((mdata, mIndex) => (
            <div className="row justify-content-between align-items-center" key={mIndex}>
              {mdata.id === 1 && (
                <>
                  <div className="col-lg-5 col-xl-5">
                    <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} />
                    <Link to="/signup" className="btn btn-gradient rounded-pill ml-3-xs">Free Demo</Link>
                  </div>
                  <div className="col-lg-7 col-xl-7">
                    {windowWidth > 991 ? (
                      <Image loading="lazy" fluid src={mdata.imgUrlD} alt={mdata.alt} />
                    ) : (
                      <Image loading="lazy" fluid src={mdata.imgUrl} alt={mdata.alt} />
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section> */}
    </>
  )
}

export default Workflows;
