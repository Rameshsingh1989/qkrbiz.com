import  { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { toKeenOptions } from '../../../utility/keenAutoplay';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
// import useSanitizeHtml from '../../../hooks/useSanitizeHtml';

const PayrollFoundation = ({PayrollFoundationData}) => {

    // const sanitizeHtml = useSanitizeHtml();

    // Foundation carousel (Slider A)
    const [foundationIdx, setFoundationIdx] = useState(0);
    const [foundationLoaded, setFoundationLoaded] = useState(false);
    const [foundationRef, foundationInst] = useKeenSlider({
        ...toKeenOptions({
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            },
            spacing: 24,
        }),
        created: () => setFoundationLoaded(true),
        slideChanged: (s) => setFoundationIdx(s.track.details.rel),
        detailsChanged: (s) => setFoundationIdx(s.track.details.rel), // recompute dots on breakpoint/resize
    });
    const foundationDots =
        foundationLoaded && foundationInst.current
            ? foundationInst.current.track.details.maxIdx + 1
            : 0;

  return (
    <>
        <section className="payroll-system payroll-foundation">
            {PayrollFoundationData.map((data, index) => (
                <Container key={index}>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={12} xxl={10} className="mx-auto text-center">
                            <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className="foundation-slider position-relative">
                                <div ref={foundationRef} className="keen-slider">
                                    {data.features.map((feature, i) => (
                                        <div className="keen-slider__slide" key={i}>
                                            <Card className={`h-100`}>
                                                <Card.Body>
                                                    <Image loading="lazy" className='img img-fluid' src={feature.imgUrl} alt={feature.title} />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <p className="arrow-link mb-0">{feature.link}</p>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                                <div className="foundation-controls d-flex flex-column align-items-center mt-4">
                                    <div className="foundation-pagination mb-3">
                                        {foundationDots > 1 && Array.from({ length: foundationDots }).map((_, i) => (
                                            <button
                                                type="button"
                                                key={i}
                                                className={`keen-dot${foundationIdx === i ? ' is-active' : ''}`}
                                                aria-label={`Go to slide ${i + 1}`}
                                                onClick={() => foundationInst.current?.moveToIdx(i)}
                                            />
                                        ))}
                                    </div>
                                    <div className="foundation-nav d-flex gap-3">
                                        <button type="button" className={`foundation-prev nav-btn${foundationIdx <= 0 ? " is-disabled" : ""}`} aria-label="Previous" disabled={foundationIdx <= 0} onClick={() => foundationInst.current?.prev()}>
                                            <FaArrowLeft />
                                        </button>
                                        <button type="button" className={`foundation-next nav-btn${foundationDots > 0 && foundationIdx >= foundationDots - 1 ? " is-disabled" : ""}`} aria-label="Next" disabled={foundationDots > 0 && foundationIdx >= foundationDots - 1} onClick={() => foundationInst.current?.next()}>
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    
                </Container>
            ))}
        </section>
    </>
  )
}

export default PayrollFoundation