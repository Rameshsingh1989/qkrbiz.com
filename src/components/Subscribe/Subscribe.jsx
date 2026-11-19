import { Container,Row,Form,InputGroup,Button,Col} from "react-bootstrap";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Subscribe.scss";

export const Subscribe = ({cls}) => {
  return (
    <>
      <Container className={`${cls}`}>
        <Row className="row justify-content-center">
          <Col lg={10} xl={7} xxl={6}>
            <SectionHeading subTitle="" title="Subscribe to our Newsletter" description="Subscribe to our email newsletter to get the latest posts delivered right to your email." headingUnderLine={false} /> 
          </Col>
        </Row>
        <Row className="row justify-content-center">
          <Col lg={8} xl={7} xxl={4}>
            <InputGroup className="mb-3 subscribe">
              <Form.Control
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                aria-describedby="email-address2"
              />
              <InputGroup.Text id="email-address2">
                <Button variant="magenta" size="sm">Subscribe</Button>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}
