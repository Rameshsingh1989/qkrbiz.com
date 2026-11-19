import { Container, Row, Col } from "react-bootstrap";
import KeenSlider from "../KeenSlider/KeenSlider";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./BenefitsSection.scss";

export default function BenefitsSection({ data = [], title = "Benefits", subtitle = ""}) {

const sanitizeHtml = useSanitizeHtml();

  const renderBlogCard = (bItem) => (
    <div className="swiper_item">
      <h3 dangerouslySetInnerHTML={sanitizeHtml(bItem.numb)}></h3>
      <h4 dangerouslySetInnerHTML={sanitizeHtml(bItem.title)}></h4>
      <div className="silck_hidden">
        <p dangerouslySetInnerHTML={sanitizeHtml(bItem.desc)}></p>
      </div>
    </div>
  );

  return (
    <section className="content-slider">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={12}>

           <SectionHeading subTitle="" title={title} description={subtitle} headingUnderLine={false} />

          </Col>
        </Row>

        <KeenSlider
          slides={data}
          renderSlide={renderBlogCard}
          spacing={24}
          centered
          loop
          autoplayDelay={5000}
          arrows
          ariaLabel="Benefits"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            992: { slidesPerView: 3 },
            1600: { slidesPerView: 3 },
            1900: { slidesPerView: 3 },
          }}
        />
      </Container>
    </section>
  );
}
