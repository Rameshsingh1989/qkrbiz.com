import { useEffect, useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import { useSyncedKeenSliders } from "../../hooks/useSyncedKeenSliders";
// import SectionHeading from "../SectionHeading/SectionHeading";
import "keen-slider/keen-slider.min.css";
import "./TabsScrollSwiper.scss";

// ================= ROOT =================
const TabsScrollSwiper = ({
  colCls = "col-12",
  TabScrollData = [],
  addCls = "",
  titleTag = "h2",
  sm = 1,
  md = 2,
  lg = 3,
  xl = 3,
  xxl = 4,
}) => {
  const sanitizeHtml = useSanitizeHtml();
  if (!Array.isArray(TabScrollData) || !TabScrollData.length) return null;

  return (
    <section className="multitab_content nav-tabs">
      <Container>
        <Row className="justify-content-center">
          <div className={colCls}>
            {TabScrollData.map((section, idx) => (
              <SectionSwiper
                key={idx}
                section={section}
                addCls={addCls}
                titleTag={titleTag}
                sanitizeHtml={sanitizeHtml}
                sm={sm}
                md={md}
                lg={lg}
                xl={xl}
                xxl={xxl}
              />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

// ================= SECTION =================
const SectionSwiper = ({ section, addCls, titleTag, sanitizeHtml, sm, md, lg, xl, xxl }) => {
  const { navRef, contentRef, active, goTo, next, prev, atStart, atEnd } = useSyncedKeenSliders({
    navBreakpoints: {
      0:    { slidesPerView: sm },
      576:  { slidesPerView: md },
      768:  { slidesPerView: lg },
      992:  { slidesPerView: xl },
      1400: { slidesPerView: xxl },
    },
    navSpacing: 20,
    slideCount: section.AllTabData.length,
  });

  return (
    <div>
      <SectionHeader section={section} sanitizeHtml={sanitizeHtml} titleTag={titleTag} />
      <div className={`slider-container ${addCls}`}>

        {/* NAV */}
        <div className="tabs-left position-relative">
          <button type="button" className={`tab-nav-btn tab-nav-prev${atStart ? " is-disabled" : ""}`} aria-label="Previous tab" disabled={atStart} onClick={prev}>
            <FaChevronLeft aria-hidden="true" />
          </button>
          <div ref={navRef} className="keen-slider nav-swiper">
            {section.AllTabData.map((tab, index) => (
              <div key={tab.id ?? index} className="keen-slider__slide slick-slide">
                <div
                  className={`topdiv ${active === index ? "active" : ""}`}
                  onClick={() => goTo(index)}
                >
                  <div className="icons"><span className={`img ${tab.tabIcon || ""}`} /></div>
                  <div className="text" dangerouslySetInnerHTML={sanitizeHtml(tab.tabName)} />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className={`tab-nav-btn tab-nav-next${atEnd ? " is-disabled" : ""}`} aria-label="Next tab" disabled={atEnd} onClick={next}>
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="tab-content">
          <div ref={contentRef} className="keen-slider content-swiper">
            {section.AllTabData.map((tab, index) => (
              <div key={tab.id ?? index} className="keen-slider__slide">
                <div className="tab-panel">
                  {tab.navList?.map((item, idx) => {
                    if (!item.videoUrl) {
                      return <Image key={idx} className="img-fluid" src={item.imgUrl} alt={item.title ?? ""} loading="lazy" />;
                    }
                    // return  <YouTubeVideo videoId={item.youTubeVideoUrl} />
                    return item.videoAuto
                      ? <LazyVideo key={idx} item={item} type="auto" />
                      : <LazyVideo key={idx} item={item} type="window" />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// ================= HEADER =================
const SectionHeader = ({ section, sanitizeHtml, titleTag: TitleTag = "h2" }) => (
  <div className="heading-title text-center mb-4">

    <TitleTag className="under-line under-line-unset mb-2" dangerouslySetInnerHTML={sanitizeHtml(section.title)} />
    {section.desc && <p className="text-center fn-4">{section.desc}</p>}
  </div>
  // <SectionHeading subTitle="" title={section.title} description={section.desc} headingUnderLine={false} />
);

// ================= VIDEO =================
const LazyVideo = ({ item, type }) => {
  const [Comp, setComp] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const loader = type === "auto"
      ? import("../Video/VideoAutoPlay")
      : import("../Video/VideoWindowPlay");
    loader.then((m) => setComp(() => m.default));
  }, [type]);

  if (!Comp) return <Image loading="lazy" className="img-fluid" src={item.imgUrl} alt={item.title ?? ""} />;

  return <Comp videoSource={item.videoUrl} videoPoster={item.imgUrl} alt={item.title ?? ""} radius="radius-1" />;
};

// ================= YouTub VIDEO =================
// const YouTubeVideo = ({ videoId }) => {

//   return (
//     <div className="youtube-home-overlay">
//       <div className="youtube-popup">
//         <iframe
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//           allow="autoplay"
//           allowFullScreen
//           title="YouTube Video"
//           loading="lazy"
//           style={styles.unsetBorder}
//         />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   unsetBorder:{
//     borderRadius: "0.5rem"
//   }
// }

export default TabsScrollSwiper;