import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { autoplayPlugin } from "../../utility/keenAutoplay";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SliderViewMulti.scss";

const SliderViewMulti = ({ slidersData = [], }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const sanitizeHtml = useSanitizeHtml();

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
      created: () => setLoaded(true),
      slideChanged: (s) => setActiveIndex(s.track.details.rel),
    },
    [autoplayPlugin(5000)]
  );

  const dotCount =
    loaded && instanceRef.current
      ? instanceRef.current.track.details.slides.length
      : 0;

  return (
    <section className="slider-view-multi">
      <div className="container">
     {slidersData.map((itemList, x) => (

        <div className="slider-layout" key={x}>
          {/* SECTION HEADER */}
          <SectionHeading subTitle="" title={itemList.title} description={itemList.description} headingUnderLine={false} />

          <div className="row g-4">
            {/* LEFT MENU */}
            <div className="slider-menu col-lg-4 col-xl-4 col-xxl-4">
              {itemList.DataList.map((item, index) => (
                <div
                  key={item.id}
                  className={`menu-item d-flex align-items-center ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => instanceRef.current?.moveToIdx(index)}
                >
                  <div className="flex-shrink-0 me-4">
                    <img loading="lazy"
                      src={
                        activeIndex === index || hoverIndex === index
                          ? item.imgIconActive
                          : item.imgIcon
                      }
                      alt={item.subTitle}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h3 dangerouslySetInnerHTML={sanitizeHtml(item.subTitle)} />
                    <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(item.desc)} />
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SLIDER */}
            <div className="slider-content col-lg-8 col-xl-8 col-xxl-8">
              <div ref={sliderRef} className="keen-slider">
                {itemList.DataList.map((item) => (
                  <div className="keen-slider__slide" key={item.id}>
                    <div className="slide-card">
                      <img loading="lazy" src={item.imgUrl} alt={item.alt} />
                    </div>
                  </div>
                ))}
              </div>

              {loaded && dotCount > 1 && (
                <div className="keen-dots">
                  {Array.from({ length: dotCount }).map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      className={`keen-dot${activeIndex === i ? " is-active" : ""}`}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => instanceRef.current?.moveToIdx(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

        )) }
      </div>
    </section>
  );
};

export default SliderViewMulti;
