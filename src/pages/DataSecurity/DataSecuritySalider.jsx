import { Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import { useSyncedKeenSliders } from "../../hooks/useSyncedKeenSliders";
import "keen-slider/keen-slider.min.css";
import "./DataSecuritySalider.scss";

const DataSecuritySalider = ({ TabScrollLogicalDaskData = [], conBg = ""}) => {

  const sanitizeHtml = useSanitizeHtml();
  const { navRef, contentRef, active, goTo, next, prev, atStart, atEnd } = useSyncedKeenSliders({
    navBreakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      992: { slidesPerView: 2 },
      1400: { slidesPerView: 3 },
    },
    navSpacing: 20,
    slideCount: TabScrollLogicalDaskData.length,
  });

  if (!Array.isArray(TabScrollLogicalDaskData) || !TabScrollLogicalDaskData.length)
    return null;

  return (


          <div className={`tab-scroll slider-container ${conBg}`}>
             <Row className="justify-content-center">
                <div className="col-xl-10">
                  {/* ================= LEFT NAV ================= */}
                  <div className="tabs-left position-relative">

                    {/* LEFT ARROW */}
                    <button type="button" className={`nav-arrow nav-prev${atStart ? " is-disabled" : ""}`} aria-label="Previous" disabled={atStart} onClick={prev}><FaChevronLeft /></button>
                    <div ref={navRef} className="keen-slider nav-swiper">
                      {TabScrollLogicalDaskData.map((item, index) => (
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
                              <span
                                className="text"
                                dangerouslySetInnerHTML={sanitizeHtml(item.tabName)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* RIGHT ARROW */}
                    <button type="button" className={`nav-arrow nav-next${atEnd ? " is-disabled" : ""}`} aria-label="Next" disabled={atEnd} onClick={next}><FaChevronRight /></button>
                  </div>
                </div>
              </Row>
              {/* ================= RIGHT CONTENT ================= */}
              <div className="tab-content">
                <div ref={contentRef} className="keen-slider content-swiper">
                  {TabScrollLogicalDaskData.map((item, index) => (
                    <div key={item.id || index} className="keen-slider__slide">
                      <div className="tab-panel">
                        {item.navList?.map((item, j) => (

                            <Row key={j} className="align-items-center justify-content-between">
                                <div className="col-lg-7">
                                  <h3 dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                                  <p dangerouslySetInnerHTML={sanitizeHtml(item.desc1)}></p>

                                  {item.UList?.length > 0 && (
                                    <ul className="ul-icon">
                                      {item.UList.map((li, k) => (
                                        <li
                                          key={k}
                                          dangerouslySetInnerHTML={sanitizeHtml(li.li)}
                                        ></li>
                                      ))}
                                    </ul>
                                  )}

                                  {item.desc2 && (
                                    <div dangerouslySetInnerHTML={sanitizeHtml(item.desc2)} />
                                  )}
                                </div>

                                <div className="col-lg-5">
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

  );
};

export default DataSecuritySalider;
