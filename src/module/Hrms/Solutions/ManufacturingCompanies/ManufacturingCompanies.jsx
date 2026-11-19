import { Fragment } from "react";
import { Link } from "react-router";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  ManufacturingHeadData,
  TrustedByData,
  WhyGenericFailsData,
  ShopFloorData,
  ComplianceLawsData,
  FactoryFeaturesData,
  SelfServiceData,
  BestHrmsTableData,
  ComparisonData,
  SetupTimelineData,
  RealCostData,
  HowToChooseData,
  ManufacturingFaqData,
  RelatedIndustriesData,
  FinalCtaData,
 ManufacturingCompaniesMeta } from "./ManufacturingCompaniesData";
import RelatedIndustries from "../../../../components/RelatedIndustries/RelatedIndustries";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { ClientStories } from "../../../../components/ClientStories/ClientStories";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import { ogImages as ImagesUrl_ogImages } from "../../../../assets/images";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ManufacturingSchemaData } from "./ManufacturingSchemaData";
import FeatureBuilt from "../component/FeatureBuilt/FeatureBuilt";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import BlogCard from "../../HrmsBlogs/BlogComponent/BlogCard/BlogCard";
import { HrmsBlogCardData } from "../../QkrhrHome/HrmsBlogCardData";
import CommonCtaSection from "../../../../components/CommonCtaSection/CommonCtaSection";

import "./ManufacturingCompanies.scss";

const ManufacturingCompanies = () => {
  const socialImage = ImagesUrl_ogImages.QkrHr;
  const sanitizeHtml = useSanitizeHtml();

  return (
     <div className="manufacturing-page">
      <RouteSpecificMeta
        title={ManufacturingCompaniesMeta.title}
        description={ManufacturingCompaniesMeta.description}
        image={socialImage}
        SchemaData={ManufacturingSchemaData}
      />
      <QkrHeroSectionRow HeroSectionData={ManufacturingHeadData} col1={12} col2={12} xl1={12} xl2={12}/>
      
      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      {/* ── Trusted by ───────────────────────────────────────── */}
      <section className="trusted-by bg-magenta">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={12} xl={12} className="mb-4 text-center">
                <SectionHeading subTitle="" title={TrustedByData.title} description="" headingUnderLine={false} />
            </Col>
            <Col lg={12} xl={10}>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {TrustedByData.industries.map((industry, iIndex) => (
                  <span className="industry-pill" key={iIndex}>{industry}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Why generic HR fails ─────────────────────────────── */}
      <section className="why-generic-fails py-5">
        {WhyGenericFailsData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xxl={10} className="text-center">
                <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row>
              {head.List.map((list, index) => (
                <Col md={6} lg={4} key={index} className="d-flex mb-4">
                  <div className={`card w-100 h-100 ${list.cls}`}>
                    <div className="card-body">
                      <Image className="icons" src={list.icon} alt={list.head} loading="lazy" decoding="async" />
                      <h3 className="card-title"><span dangerouslySetInnerHTML={sanitizeHtml(list.head)} /></h3>
                      <p className="card-desc" dangerouslySetInnerHTML={sanitizeHtml(list.desc)} />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Shop floor attendance & shifts ───────────────────── */}
      <section className="shop-floor py-5">
        {ShopFloorData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xxl={12} className="text-center">
                <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
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
              <h3 className="lock-title text-gradient"><span dangerouslySetInnerHTML={sanitizeHtml(head.lockFlow.title)} /></h3>
              <p className="lock-desc mb-4" dangerouslySetInnerHTML={sanitizeHtml(head.lockFlow.desc)} />
              <div className="lock-flow d-flex flex-wrap justify-content-center align-items-center">
                {head.lockFlow.steps.map((step, index) => (
                  <Fragment key={index}>
                    <span className="flow-step">{step}</span>
                    {index < head.lockFlow.steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
                  </Fragment>
                ))}
              </div>
            </div>
          </Container>
        ))}
      </section>

      {/* ── Compliance laws automated ────────────────────────── */}
      <section className="compliance-laws py-5">
        {ComplianceLawsData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row>
              {head.columns.map((col, index) => (
                <Col md={6} lg={4} key={index} className="d-flex mb-4">
                  <div className="card w-100 h-100">
                    <div className="card-body">
                      <h3 className="card-title"><span dangerouslySetInnerHTML={sanitizeHtml(col.head)} /></h3>
                      <p className="card-desc" dangerouslySetInnerHTML={sanitizeHtml(col.desc)} />
                      <div className={`check-box ${col.cls}`}>
                        <ul className="check-list">
                          {col.items.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Factory features ─────────────────────────────────── */}
      <FeatureBuilt FeatureBuiltData={FactoryFeaturesData} />

      {/* ── Worker self-service ──────────────────────────────── */}
      <section className="self-service py-5">
        {SelfServiceData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xl={9} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-between align-items-center">
              <Col lg={7} xl={7}>
                <Row>
                  {head.List.map((list, index) => (
                    <Col md={6} key={index} className="mb-4">
                      <Card className="w-100 h-100">
                        <Card.Body>
                          <div className="d-flex align-items-start">
                            <span className="flex-shrink-0"><Image src={list.icon} alt={list.head} loading="lazy" decoding="async" /></span>
                            <div className="flex-shrink-1 ms-3">
                              <h3 className="mb-2"><span dangerouslySetInnerHTML={sanitizeHtml(list.head)} /></h3>
                              <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(list.desc)} />
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={5} xl={5} className="text-center mt-4 mt-lg-0">
                <div className="stat-circle-wrap">
                  <div className="stat-circle mx-auto">
                    <span className="circle-value fn-sb">{head.stat.value}</span>
                    <span className="circle-label">{head.stat.label}</span>
                  </div>
                </div>
                <p className="fn-3 mt-4 mb-0" dangerouslySetInnerHTML={sanitizeHtml(head.stat.desc)} />
              </Col>
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Best HRMS ranking table ──────────────────────────── */}
      <section className="best-hrms py-5">
        {BestHrmsTableData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={12} xl={11}>
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
                          <td className="fn-sb" dangerouslySetInnerHTML={sanitizeHtml(row.bestFor)} />
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
              </Col>
            </Row>
          </Container>
        ))}
      </section>

      {/* ── QkrHR vs generic comparison ──────────────────────── */}
      <section className="vs-generic py-5" id="compare-options">
        {ComparisonData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={12} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={12} xl={12}>
                <div className="table-wrap">
                  <table className="compare-table">
                    <thead>
                      <tr>
                        {head.headers.map((h, i) => (
                          <th key={i} className={i === 0 ? "col-feature" : i === 1 ? "col-qkrhr" : ""}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {head.rows.map((row) => (
                        <tr key={row.id}>
                          <td className="col-feature" dangerouslySetInnerHTML={sanitizeHtml(row.feature)} />
                          <td className="col-qkrhr">
                            <span className="cmark good" aria-hidden="true" />
                            <span dangerouslySetInnerHTML={sanitizeHtml(row.qkrhr)} />
                          </td>
                          <td className={`status-${row.generic.status}`}>
                            <span className={`cmark ${row.generic.status}`} aria-hidden="true" />
                            <span dangerouslySetInnerHTML={sanitizeHtml(row.generic.text)} />
                          </td>
                          <td className={`status-${row.manual.status}`}>
                            <span className={`cmark ${row.manual.status}`} aria-hidden="true" />
                            <span dangerouslySetInnerHTML={sanitizeHtml(row.manual.text)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Setup timeline ───────────────────────────────────── */}
      <section className="setup-timeline py-5">
        {SetupTimelineData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={11} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="steps-row">
              {head.steps.map((step, index) => (
                <Col md={6} lg={3} key={index} className="step-col text-center">
                  <h3><span dangerouslySetInnerHTML={sanitizeHtml(step.head)} /></h3>
                  <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(step.desc)} />
                </Col>
              ))}
            </Row>
            {head.note && (
              <div className="timeline-note text-center mt-5">
                <h3 className="note-title text-magenta"><span dangerouslySetInnerHTML={sanitizeHtml(head.note.title)} /></h3>
                <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(head.note.desc)} />
              </div>
            )}
          </Container>
        ))}
      </section>

      {/* ── Real cost ────────────────────────────────────────── */}
      <section className="real-cost">
        {RealCostData.map((head, hIndex) => (
          <Fragment key={hIndex}>
            <Container className="py-5">
              <Row className="justify-content-center">
                <Col lg={11} xl={10} className="text-center">
                  <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
                </Col>
              </Row>
            </Container>
            <div className="impact-panel">
              <Container>
                <div className="impact-head text-center">
                  <p className="impact-label fn-sb mb-2">{head.impact.label}</p>
                  <div className="impact-amount text-magenta fn-sb">{head.impact.amount}</div>
                  <h3 className="impact-sub">{head.impact.sub}</h3>
                  <span className="impact-badge">
                    <span className="arrow" aria-hidden="true">↗</span> {head.impact.badge}
                  </span>
                </div>
                <div className="savings-title"><span dangerouslySetInnerHTML={sanitizeHtml(head.savingsTitle)} /></div>
                <Row className="savings-row justify-content-center text-center">
                  {head.savings.map((item, index) => (
                    <Col xs={12} md={4} lg key={index} className="saving-col">
                      <Image src={item.icon} className="saving-icon" alt={item.label} aria-hidden="true" loading="lazy" decoding="async" />
                      <p className="saving-label mb-1">{item.label}</p>
                      <span className="saving-value text-magenta fn-sb">{item.value}</span>
                      <span className="saving-note d-block">{item.note}</span>
                    </Col>
                  ))}
                </Row>
                <Row className="impact-cards justify-content-center">
                  {head.cards.map((card, index) => (
                    <Col md={6} lg={4} key={index} className="d-flex mb-3">
                      <div className="impact-card w-100 h-100 text-center">
                        <span className="card-eyebrow text-magenta d-block">{card.label}</span>
                        <span className="card-value text-magenta fn-sb d-block">{card.value}</span>
                        <h3 className="card-heading">{card.title}</h3>
                        <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(card.desc)} />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Fragment>
        ))}
      </section>

      {/* ── How to choose ────────────────────────────────────── */}
      <section className="how-to-choose py-5">
        {HowToChooseData.map((head, hIndex) => (
          <Container key={hIndex}>
            <Row className="justify-content-center">
              <Col lg={11} xl={10} className="text-center">
                <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
              </Col>
            </Row>
            <Row className="row-space-1_5">
              {head.columns.map((col, index) => (
                <Col md={6} key={index} className="d-flex mb-4">
                  <div className="choose-card w-100 h-100">
                    <div className="choose-head d-flex align-items-center">
                      <span className="num">{col.num}</span>
                      <h3 className="card-title text-magenta mb-0"><span dangerouslySetInnerHTML={sanitizeHtml(col.head)} /></h3>
                    </div>
                    <ul className="check-list">
                      {col.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={sanitizeHtml(item)} />
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <ClientStories cls="" count1={3} count2={2} count3={1} />

      <BlogCard BlogCardData={HrmsBlogCardData} componentSec="pt-4"/>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {ManufacturingFaqData && <FaqComponent title="Every Manufacturing <span class='text-gradient'>Compliance Law. Automated.</span>" description="Manufacturing faces stricter, more layered compliance than any other sector. One missed filing means penalties, notices, and audit exposure. Our compliance engine handles it all." FaqData={ManufacturingFaqData} />}

      {/* ── Related industries ───────────────────────────────── */}
      <RelatedIndustries items={RelatedIndustriesData} />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <CommonCtaSection PayrollCtaData={FinalCtaData} />

      </div>
  );
};

export default ManufacturingCompanies;
