import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { FaArrowLeft, FaArrowRight, FaCheck, FaXmark } from 'react-icons/fa6';
import { toKeenOptions } from '../../../../utility/keenAutoplay';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import 'keen-slider/keen-slider.min.css';

const ProblemsSlider = ({ data }) => {

  const [current, setCurrent] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    ...toKeenOptions({
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
      spacing: 24,
    }),
    created: () => setLoaded(true),
    slideChanged: (s) => setCurrent(s.track.details.rel),
    detailsChanged: (s) => setCurrent(s.track.details.rel),
  });

  const maxIdx = loaded && instanceRef.current ? instanceRef.current.track.details.maxIdx : 0;

  return (
    <section className="am-problems">
      {data.map((section) => (
        <div className="container" key={section.id}>

              <div className="row">
                <div className="col-lg-12 mx-auto text-center">
                  
                  <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />

                </div>
              </div>

              <div ref={sliderRef} className="keen-slider">
                {section.cards.map((card, index) => (
                  <div className="keen-slider__slide" key={card.id}>
                    <div className={`problem-card ${card.bgClass}`}>
                      <div className="problem-content" 
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}>
                        
                        <h3 className="problem-title">
                          { hoverIndex === index
                          ? card.solvedTitle
                          : card.title}
                          
                          {/* {card.solvedTitle} */}
                        </h3>

                        <div className="d-flex gap-3">
                          <p className="problem-desc problem-solved">
                            {card.description}
                          </p>

                          <div>
                            <span className="problem-icon problem-icon-cross">
                              <FaXmark />
                            </span>

                            <span className="problem-icon problem-icon-check">
                              <FaCheck />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="problem-nav d-flex justify-content-center gap-3 mt-4">
                <button
                  type="button"
                  className={`problem-arrow${
                    current <= 0 ? " is-disabled" : ""
                  }`}
                  aria-label="Previous"
                  disabled={current <= 0}
                  onClick={() => instanceRef.current?.prev()}
                >
                  <FaArrowLeft />
                </button>

                <button
                  type="button"
                  className={`problem-arrow${
                    current >= maxIdx ? " is-disabled" : ""
                  }`}
                  aria-label="Next"
                  disabled={current >= maxIdx}
                  onClick={() => instanceRef.current?.next()}
                >
                  <FaArrowRight />
                </button>
              </div>
        </div>
      ))}
    </section>
  );
};

export default ProblemsSlider;
