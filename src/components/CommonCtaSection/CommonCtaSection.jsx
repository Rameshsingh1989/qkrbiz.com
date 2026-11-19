import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./CommonCtaSection.scss";

// In-page anchors ("#id") use a plain <a> so the browser scrolls to the section;
// external links (such as WhatsApp) open in a new tab.
const CtaLink = ({ url, className, children }) =>
  url.startsWith("http") ? (
    <a href={url} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : url.startsWith("#") ? (
    <a href={url} className={className}>{children}</a>
  ) : (
    <Link to={url} className={className}>{children}</Link>
  );

const CommonCtaSection = ({ PayrollCtaData }) => {

  return (
    <section className="payroll-cta py-5">
        {PayrollCtaData?.map((data) => (
            <Container key={data.id}>
                <Row className="justify-content-center">
                    <Col lg={12} xxl={12} className="mx-auto text-center">
                        <div className="heading-title text-center">
                            <SectionHeading subTitle="" title={data.title} description={data.description} headingUnderLine={false} />
                            <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
                                {data.buttons.map((btn) => (
                                    <CtaLink
                                        key={btn.id}
                                        url={btn.url}
                                        className={`btn ${btn.type}`}
                                    >
                                        {btn.label}
                                    </CtaLink>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        ))}
    </section>
  );
};

export default CommonCtaSection;
