import { Container, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import { useSyncedKeenSliders } from "../../../hooks/useSyncedKeenSliders";
import "keen-slider/keen-slider.min.css";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "./TaskSliders.scss";

const TaskSliders = ({ TabTaskData = [], conBg = ""}) => {

  const sanitizeHtml = useSanitizeHtml();
  const { navRef, contentRef, active, goTo, next, prev, atStart, atEnd } = useSyncedKeenSliders({
    navBreakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      992: { slidesPerView: 2 },
      1400: { slidesPerView: 3 },
    },
    navSpacing: 20,
    slideCount: TabTaskData.length,
  });

  if (!Array.isArray(TabTaskData) || !TabTaskData.length)
    return null;

  return (

     <div className="multitab_content nav-tabs mt-4">
       <Container>

          <SectionHeading subTitle="" title='Task Management <span class="text-gradient">Made Easy!</span>' description="" headingUnderLine={false} />
          <div className={`tab-scroll bg-deepsky-extralight team-scroll slider-container ${conBg}`}>
             <Row className="align-items-center justify-content-center">
                <div className="col-lg-12 col-xl-11 col-xxl-10">
                  {/* ================= LEFT NAV ================= */}
                  <div className="tabs-left position-relative">

                    {/* LEFT ARROW */}
                    <button type="button" className={`nav-arrow nav-prev${atStart ? " is-disabled" : ""}`} aria-label="Previous" disabled={atStart} onClick={prev}>
                      <FaChevronLeft aria-hidden="true" />
                    </button>
                    <div ref={navRef} className="keen-slider nav-swiper">
                      {TabTaskData.map((item, index) => (
                        <div key={item.id || index} className="keen-slider__slide slick-slide">
                          <div
                            className={`topdiv ${
                              active === index ? "active" : ""
                            }`}
                            onClick={() => goTo(index)}
                          >
                            <div className="d-flex align-items-center">
                              <div className="icons">
                                <span className={`img ${item.tabIcon}`} />
                              </div>
                              <span className="text" dangerouslySetInnerHTML={sanitizeHtml(item.tabName)}></span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* RIGHT ARROW */}
                    <button type="button" className={`nav-arrow nav-next${atEnd ? " is-disabled" : ""}`} aria-label="Next" disabled={atEnd} onClick={next}>
                      <FaChevronRight aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Row>
              {/* ================= RIGHT CONTENT ================= */}
              <div className="tab-content">
                <div ref={contentRef} className="keen-slider content-swiper">
                  {TabTaskData.map((item, index) => (
                    <div key={item.id || index} className="keen-slider__slide">
                      <div className="tab-panel">
                        {item.navList?.map((item, j) => (

                            <Row key={j} className="align-items-center justify-content-center">
                                <div className="col-lg-12 col-xl-11 col-xxl-11">
                                    <img loading="lazy" src={item.imgUrl} alt={item.title} className="img-fluid" />
                                 </div>

                            </Row>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </div>
      </Container>
    </div>
              

  );
};

export default TaskSliders;
