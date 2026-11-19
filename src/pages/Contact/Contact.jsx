import { useEffect, useState, Suspense  } from "react";
import { Col, Image, Row, Container} from 'react-bootstrap';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { contact as ImagesUrl_contact } from '../../assets/images';
import { ContactSchema , ContactMeta } from "./ContactSchema";
import PageLoader from "../../components/PageLoader/PageLoader";
import GetInTouch from "./GetInTouch";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import "./Contact.scss";

function Contact() {

  
 const [MapComponent, setMapComponent] = useState(null);
 const socialImage = ImagesUrl_ogImages.Contact;

  useEffect(() => {
    import("../../components/MapComponent/GoogleMapWithMarkers").then((mod) => {
      setMapComponent(() => mod.default);
    });
  }, []);


  return (
    <>
      <RouteSpecificMeta
      title={ContactMeta.title}
      description={ContactMeta.description}
      image={socialImage}
      SchemaData={ContactSchema} 
      />

      <div className="wrapper-bg-img">
        <Container>
          <Row className="row">
            <Col lg="12">
              <h1 className="text-white">Contact Us</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact-us">
          <Container className="container">
              <Row className="mb-5">
                  <Col lg="6 mb-3">
                    <div className="card">
                      <div className="card-body">
                         <SectionHeading subTitle="" title="<span class='text-gradient'>Contact Us</span>" description="" subTitleCenter={false} headingUnderLine={false} /> 
                        <div className="d-flex mb-2">
                          <div className="flex-shrink-0">
                            <Image loading="lazy" src={ImagesUrl_contact.Email} alt="address" />
                          </div>
                          <div className="flex-grow-1">
                            <p>sales@qkrbiz.com</p>
                          </div>
                        </div>
                        <div className="d-flex mb-2">
                          <div className="flex-shrink-0">
                            <Image loading="lazy" src={ImagesUrl_contact.Call} alt="address" />
                          </div>
                          <div className="flex-grow-1">
                            <p>+91-7428174445</p>
                          </div>
                        </div>
                        <h3 className="text-gradient">Our Office Locations</h3>
                        <Row className="row">
                            <Col lg="4">
                              <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                <h4>Delhi</h4>
                                  <p>706, Manjusha Building, 57, Nehru Place, New Delhi - 110019 <br/>Mob No. : +91 7428174445 </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg="4">
                              <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                  <h4>Kolkata</h4>
                                  <p>2E, Ved Bhumi, Koyla Vihar, VIP Road, Kolkata-700052 <br/>Tel : 91-3340619001</p>
                                </div>
                              </div>
                            </Col>
                            <Col lg="4">
                              <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                  <h4>Bengaluru</h4>
                                  <p>No. 1254, B Wing, 14th Floor Mittal Towers, M.G. Road, Bengaluru-560001 <br/>Tel : 80-40930003</p>
                                </div>
                              </div>
                            </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <div className="col-lg-6 p-left-lg-3">
                      <h3 className="mt-0 mb-1 fn-6"> Get In <span className="text-gradient">Touch.</span></h3>
                      <p className="mb-1">Enjoy an effortless user experience combined with enterprise-level features. We are here to answer all your questions and support you every step of the way. Get in touch with us today.</p>
                      <Row>
                        <Col lg="12">
                           <GetInTouch />
                        </Col>
                     </Row>
                      <Row>
                        <Col lg="12">
                        </Col>
                      </Row>
                  </div>
              </Row>

            <Row className="row">
                <Col lg="12">
                
                    {MapComponent ? (
                      <Suspense fallback={<PageLoader />}>
                        <MapComponent />
                      </Suspense>
                    ) : (
                      <PageLoader />
                    )}
                     
                </Col>
            </Row>
          </Container>
      </div>
      
    </>
  );
}

export default Contact;
