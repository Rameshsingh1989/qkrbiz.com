import { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { toKeenOptions } from '../../../utility/keenAutoplay';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const BuiltAccuracy = ({BuiltAccuracyData}) => {

    // Accuracy carousel (Slider B)
    const [accuracyIdx, setAccuracyIdx] = useState(0);
    const [accuracyLoaded, setAccuracyLoaded] = useState(false);
    const [accuracyRef, accuracyInst] = useKeenSlider({
        ...toKeenOptions({
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
            },
            spacing: 24,
        }),
        created: () => setAccuracyLoaded(true),
        slideChanged: (s) => setAccuracyIdx(s.track.details.rel),
        detailsChanged: (s) => setAccuracyIdx(s.track.details.rel), // recompute dots on breakpoint/resize
    });

    const accuracyDots =
        accuracyLoaded && accuracyInst.current
            ? accuracyInst.current.track.details.maxIdx + 1
            : 0;

  return (
    <>
    <section className="built-accuracy">
                {BuiltAccuracyData.map((data, index) => (
                    <Container key={index}>
                         <Row>
                            <Col lg={12} className="mx-auto text-center">
                                <SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
                            </Col>
                        </Row>


                        <div className="accuracy-slider position-relative">
                            <div ref={accuracyRef} className="keen-slider">
                                {data.features.map((feature, i) => (
                                    <div className="keen-slider__slide" key={i}>
                                        <div className={`accuracy-card ${feature.bGcolor}`}>
                                            <div className="accuracy-card-img">
                                                <Image loading="lazy" className='img img-fluid' src={feature.imgUrl} alt={feature.title} />
                                            </div>
                                            <div className="accuracy-card-label">{feature.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="accuracy-controls d-flex justify-content-center align-items-center mt-4">
                                <div className="accuracy-pagination">
                                    {accuracyDots > 1 && Array.from({ length: accuracyDots }).map((_, i) => (
                                        <button
                                            type="button"
                                            key={i}
                                            className={`keen-dot${accuracyIdx === i ? ' is-active' : ''}`}
                                            aria-label={`Go to slide ${i + 1}`}
                                            onClick={() => accuracyInst.current?.moveToIdx(i)}
                                        />
                                    ))}
                                </div>
                                <div className="accuracy-nav d-flex gap-2 align-items-center justify-content-center">
                                    <button type="button" className={`accuracy-prev nav-btn${accuracyIdx <= 0 ? " is-disabled" : ""}`} aria-label="Previous" disabled={accuracyIdx <= 0} onClick={() => accuracyInst.current?.prev()}>
                                        <FaArrowLeft />
                                    </button>
                                    <button type="button" className={`accuracy-next nav-btn${accuracyDots > 0 && accuracyIdx >= accuracyDots - 1 ? " is-disabled" : ""}`} aria-label="Next" disabled={accuracyDots > 0 && accuracyIdx >= accuracyDots - 1} onClick={() => accuracyInst.current?.next()}>
                                        <FaArrowRight />
                                    </button>
                                </div>

                            </div>
                        </div>

        
                    </Container>
                ))}
            </section>
    </>
  )
}

export default BuiltAccuracy