import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "keen-slider/keen-slider.min.css";
import { autoplayPlugin, toKeenOptions } from "../../utility/keenAutoplay";
import "./KeenSlider.scss";

/**
 * Reusable keen-slider carousel — the Swiper replacement for the common
 * "map data → slides, optional arrows/dots/autoplay/loop/breakpoints" pattern.
 *
 * SSR-safe: renders the slides as plain divs on the server (so content is in
 * the HTML for SEO); keen-slider enhances them after mount. No dynamic import
 * or bootstrap-grid fallback needed.
 *
 * Props:
 *   slides          array of data
 *   renderSlide     (item, index) => slide content
 *   breakpoints     Swiper-style { minWidthPx: perView }  (optional)
 *   perView         base slides-per-view when no `breakpoints` (default 1)
 *   spacing         gap between slides in px (Swiper spaceBetween)
 *   loop, centered  booleans
 *   autoplayDelay   ms (omit/0 to disable)
 *   arrows, dots    booleans to render nav arrows / pagination dots
 *   className        extra class on the outer wrapper
 *   slideClassName   extra class on each slide
 *   getKey           (item, i) => key   (default: i)
 *   ariaLabel        accessible label for the slider region
 */
export default function KeenSlider({
  slides = [],
  renderSlide,
  breakpoints,
  perView = 1,
  spacing = 0,
  loop = false,
  centered = false,
  autoplayDelay = 0,
  arrows = false,
  dots = false,
  className = "",
  slideClassName = "",
  getKey,
  ariaLabel = "carousel",
}) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      ...toKeenOptions({ breakpoints, spacing, perView, loop, centered }),
      created: () => setLoaded(true),
      slideChanged: (s) => setCurrent(s.track.details.rel),
      detailsChanged: (s) => setCurrent(s.track.details.rel), // recompute dots on breakpoint/resize
    },
    autoplayDelay ? [autoplayPlugin(autoplayDelay)] : []
  );

  if (!slides.length) return null;

  // Dot count = reachable snap positions. For NON-loop, maxIdx+1 (the trailing
  // perView-1 slides aren't left-edge positions, so slides.length would render
  // dead "extra" dots). For LOOP, keen's maxIdx is effectively infinite, so use
  // slides.length (every slide is a valid lead position). Guard against
  // non-finite/negative values → never build an invalid-length array.
  const details = loaded && instanceRef.current ? instanceRef.current.track.details : null;
  const rawDots = details ? (loop ? details.slides.length : details.maxIdx + 1) : 0;
  const dotCount = Number.isFinite(rawDots) && rawDots > 0 ? Math.floor(rawDots) : 0;

  // Arrow disabled state — loop sliders never disable; non-loop disable at the ends.
  const atStart = !loop && current <= 0;
  const atEnd = !loop && !!details && current >= details.maxIdx;

  return (
    <div className={`keen-wrap ${className}`}>
      <div ref={sliderRef} className="keen-slider" role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
        {slides.map((item, i) => (
          <div
            className={`keen-slider__slide ${slideClassName}${current === i ? " is-active" : ""}`}
            key={getKey ? getKey(item, i) : i}
          >
            {renderSlide(item, i)}
          </div>
        ))}
      </div>

      {arrows && loaded && (
        <>
          <button
            type="button"
            className={`keen-arrow keen-arrow--prev${atStart ? " is-disabled" : ""}`}
            aria-label="Previous slide"
            disabled={atStart}
            onClick={() => instanceRef.current?.prev()}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`keen-arrow keen-arrow--next${atEnd ? " is-disabled" : ""}`}
            aria-label="Next slide"
            disabled={atEnd}
            onClick={() => instanceRef.current?.next()}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </>
      )}

      {dots && dotCount > 1 && (
        <div className="keen-dots" role="tablist" aria-label="Slide navigation">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              type="button"
              key={i}
              className={`keen-dot${current === i ? " is-active" : ""}`}
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={current === i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
