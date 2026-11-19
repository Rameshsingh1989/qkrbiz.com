import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCircleCheck, FaCircleQuestion, FaFlag, FaLightbulb } from "react-icons/fa6";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import {
  StartupsHeadData,
  ProblemData,
  PayrollComplianceData,
  StartupFeaturesData,
  RemoteTeamsData,
  BestHrmsTableData,
  ComparisonData,
  SetupStepsData,
  PaysOffData,
  HowToChooseData,
  StartupsFaqData,
  RelatedIndustriesData,
  FinalCtaData,
 StartupsMeta } from "./StartupsData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { ClientStories } from "../../../../components/ClientStories/ClientStories";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import FeatureBuilt from "../component/FeatureBuilt/FeatureBuilt";
import ProblemCards from "../component/ProblemCards/ProblemCards";
import SetupSteps from "../component/SetupSteps/SetupSteps";
import CompareTable from "../component/CompareTable/CompareTable";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { StartupsSchemaData } from "./StartupsSchemaData";
import BlogCard from "../../HrmsBlogs/BlogComponent/BlogCard/BlogCard";
import { HrmsBlogCardData } from "../../QkrhrHome/HrmsBlogCardData";

import "./Startups.scss";

// Header icon per buyer's-guide card type
const chooseIcons = {
  "choose-must": FaCircleCheck,
  "choose-ask": FaCircleQuestion,
  "choose-flag": FaFlag,
  "choose-ahead": FaLightbulb,
};

const Startups = () => {
  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();

  return (
    <div className="startups-page solution-page">
      <RouteSpecificMeta
        title={StartupsMeta.title}
        description={StartupsMeta.description}
        image={socialImage}
        SchemaData={StartupsSchemaData}
      />
      <QkrHeroSectionRow HeroSectionData={StartupsHeadData} col1={12} col2={12} xl1={12} xl2={12}/>

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      <ProblemCards ProblemData={ProblemData} />

      {/* ── Payroll & compliance ─────────────────────────────── */}
      <section className="st-payroll py-4">
        {PayrollComplianceData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row>
              {head.List.map((list, index) => (
                <Col md={6} key={index} className="d-flex mb-4">
                  <div className={`card w-100 h-100 ${list.cls}`}>
                    <div className="card-body">
                      <h3 className="card-title"><span dangerouslySetInnerHTML={sanitizeHtml(list.head)} /></h3>
                      <p className="card-desc" dangerouslySetInnerHTML={sanitizeHtml(list.desc)} />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="lock-box mt-4 text-center">
              <h3 className="lock-title text-magenta"><span dangerouslySetInnerHTML={sanitizeHtml(head.lockFlow.title)} /></h3>
              <p className="lock-desc mb-4" dangerouslySetInnerHTML={sanitizeHtml(head.lockFlow.desc)} />
              <div className="lock-flow d-inline-flex flex-wrap justify-content-center align-items-center">
                {head.lockFlow.steps.map((step, index) => (
                  <Fragment key={index}>
                    <span className="flow-step" dangerouslySetInnerHTML={sanitizeHtml(step)} />
                    {index < head.lockFlow.steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
                  </Fragment>
                ))}
              </div>
            </div>
          </Container>
        ))}
      </section>

      {/* ── Platform features (tabs) ─────────────────────────── */}
      <div id="platform-features" className="st-features">
        <FeatureBuilt FeatureBuiltData={StartupFeaturesData} />
      </div>

      {/* ── Remote & hybrid ──────────────────────────────────── */}
      <section className="st-remote py-4">
        {RemoteTeamsData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              {head.List.map((list, index) => (
                <Col sm={6} lg={3} key={index} className="remote-col d-flex mb-4">
                  <div className="remote-card w-100 h-100 text-center">
                    <h3 className="card-title"><span dangerouslySetInnerHTML={sanitizeHtml(list.head)} /></h3>
                    <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(list.desc)} />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Best HRMS ranking table ──────────────────────────── */}
      <section className="st-best py-4">
        {BestHrmsTableData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xl={11} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <div className="table-wrap">
              <table className="rank-table">
                <thead>
                  <tr>
                    {head.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {head.rows.map((row, rIndex) => (
                    <tr key={row.id} className="highlighted">
                      <td className="col-sno">{rIndex + 1}</td>
                      <td className="col-software fn-sb">{row.software}</td>
                      <td className="fn-sb" dangerouslySetInnerHTML={sanitizeHtml(row.bestFor)}/>
                      <td dangerouslySetInnerHTML={sanitizeHtml(row.when)} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {head.note && (
              <div className="list-note mt-4">
                <p className="mb-0">
                  <span className="note-title fn-sb text-magenta">{head.note.title}</span>{" "}
                  <span dangerouslySetInnerHTML={sanitizeHtml(head.note.desc)} />
                </p>
              </div>
            )}
          </Container>
        ))}
      </section>

      {/* ── QkrHR vs spreadsheets vs stitched tools ──────────── */}
      <CompareTable CompareData={ComparisonData} id="compare-options" checkMark />

      <SetupSteps StepsData={SetupStepsData} />

      {/* ── Why it pays off ──────────────────────────────────── */}
      <section className="st-pays py-5 mt-4">
        {PaysOffData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={11} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={11} xl={10} className="text-center">
                  <Row className="justify-content-center">
                    {head.cards.map((card, index) => (
                      <Col md={6} lg={4} key={index} className="d-flex mb-4">
                        <div className="pays-card w-100 h-100 text-center">
                          <span className="pays-value text-magenta fn-sb d-block">{card.value}</span>
                          <h3 className="pays-title"><span dangerouslySetInnerHTML={sanitizeHtml(card.title)} /></h3>
                          <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(card.desc)} />
                        </div>
                      </Col>
                    ))}
                  </Row>
              </Col>
            </Row>
          </Container>
        ))}
      </section>

      {/* ── How to choose ────────────────────────────────────── */}
      <section className="st-choose py-4">
        {HowToChooseData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={11} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-center g-3">
              {head.columns.map((col) => {
                const Icon = chooseIcons[col.type];
                return (
                  <Col md={6} xxl={5} key={col.id} className="d-flex">
                    <div className={`choose-card ${col.type} w-100 h-100`}>
                      <div className="choose-head d-flex align-items-center">
                        <Icon className="choose-icon flex-shrink-0" aria-hidden="true" />
                        <h3 className="card-title mb-0"><span dangerouslySetInnerHTML={sanitizeHtml(col.head)} /></h3>
                      </div>
                      <ul className="check-list">
                        {col.items.map((item, i) => (
                          <li key={i} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                        ))}
                      </ul>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Related industries ───────────────────────────────── */}
      <RelatedIndustries items={RelatedIndustriesData} />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {StartupsFaqData && <FaqComponent subTitle="FAQ" title="What Startups <span class='text-gradient'>HR Leaders Say</span>" description="QkrHR is modular. Startups at 15 employees use payroll, attendance, and leave. At 80 employees, you add onboarding, analytics, and performance. You pay for what you need — and add on as you grow." FaqData={StartupsFaqData} />}

      {/* ── Testimonials ─────────────────────────────────────── */}
      <ClientStories cls="" count1={3} count2={2} count3={1} />
  
      {/* ── blog ─────────────────────────────────────── */}
      <BlogCard BlogCardData={HrmsBlogCardData} componentSec=""/>

      <CommonCtaSection PayrollCtaData={FinalCtaData} />
    </div>
  );
};

export default Startups;
