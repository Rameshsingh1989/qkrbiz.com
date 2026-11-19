import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";

const InternalLinkSection = ({internalLinkSectionDba}) => {

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
         {internalLinkSectionDba.map((text, index)=>(
          <Col lg={10} className="text-center" key={index}>
            <SectionHeading subTitle="" title={text.title} description={text.description} headingUnderLine={false} />
            <Link to={text.buttonLink} className="btn btn-gradient rounded-pill" >
              {text.buttonText}
            </Link>
          </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default InternalLinkSection