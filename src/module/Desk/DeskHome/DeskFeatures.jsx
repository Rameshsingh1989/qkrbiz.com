import { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import VideoWindowPlay from "../../../components/Video/VideoWindowPlay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import { useSyncedKeenSliders } from "../../../hooks/useSyncedKeenSliders";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import "keen-slider/keen-slider.min.css";

const DeskFeatures = ({ TabScrollLogicalDaskData = [], colCls = "col-lg-12",}) => {

  const sanitizeHtml = useSanitizeHtml();
  const { navRef, contentRef, active, goTo, next, prev, atStart, atEnd } = useSyncedKeenSliders({
    navBreakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      992: { slidesPerView: 2 },
      1400: { slidesPerView: 4 },
    },
    navSpacing: 20,
    slideCount: TabScrollLogicalDaskData.length,
  });

  if (!Array.isArray(TabScrollLogicalDaskData) || !TabScrollLogicalDaskData.length)
    return null;

  return (
    <section className="multitab_content nav-tabs">
      <Container>
        <Row className="justify-content-center mt-4">
          <div className={colCls}>
             <SectionHeading subTitle="" title="Features" description="" headingUnderLine={false} />

            <div className="tab-scroll tabscroll-warning">

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

              {/* ================= RIGHT CONTENT ================= */}
              <div className="tab-content">
                <div ref={contentRef} className="keen-slider content-swiper">
                  {TabScrollLogicalDaskData.map((item, index) => (
                    <div key={item.id || index} className="keen-slider__slide">
                      <div className="tab-panel">
                        {item.navList?.map((block, i) => (
                          <Fragment key={i}>
                            {block.id === 1 ? (
                              <>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-12 text-center mb-5">
                                            <h3 className="bottom-border border-center border-magenta mb-3" dangerouslySetInnerHTML={sanitizeHtml(block.title)}></h3>
                                            <p className="fn-4" dangerouslySetInnerHTML={sanitizeHtml(block.description)}></p>
                                        </div>
                                    </div>
                                    <div className={`row ${block.cls}`}>
                                        <div className="col-lg-4">
                                        {block.UList?.slice(0, 3).map((u, x) => (
                                            <div className={`text-right ${u.cls1}`} key={x}>
                                                <h4 dangerouslySetInnerHTML={sanitizeHtml(u.head)}></h4>
                                                <p className={u.pcls} dangerouslySetInnerHTML={sanitizeHtml(u.desc)}></p>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="col-lg-4 video-space">
                                            <VideoWindowPlay videoSource={block.videoUrl} videoPoster={block.imgUrl} videoShadow="" radius="" />
                                        </div>
                                        <div className="col-lg-4">
                                        {block.UList?.slice(3).map((u, x) => (
                                            <div className={`text-left ${u.cls1}`} key={x}>
                                                <h4 dangerouslySetInnerHTML={sanitizeHtml(u.head)}></h4>
                                                <p className={u.pcls} dangerouslySetInnerHTML={sanitizeHtml(u.desc)}></p>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                              </>
                            ) : (
                                    <div className={`row justify-content-between align-items-center mt-3 ${block.cls}`}>
                                        <div className="col-lg-4">
                                            <h3 className="bottom-border border-width border-magenta"><span dangerouslySetInnerHTML={sanitizeHtml(block.title)}></span></h3>
                                            <p className="fn-4" dangerouslySetInnerHTML={sanitizeHtml(block.description)}></p>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <VideoWindowPlay videoSource={block.videoUrl} videoPoster={block.imgUrl} videoShadow="" radius="" />
                                                </div>
                                                <div className="col-lg-7">
                                                    {block.UList.map((u, x) => (
                                                    <Fragment key={x}>
                                                        <h4 dangerouslySetInnerHTML={sanitizeHtml(u.head)}></h4>
                                                        <p className={u.pcls} dangerouslySetInnerHTML={sanitizeHtml(u.desc)}></p>
                                                    </Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            )}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DeskFeatures;
