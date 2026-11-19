import { useCallback, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { toKeenOptions } from "../utility/keenAutoplay";

/**
 * keen-slider height plugin — makes a slider's container match the active
 * slide's height (Swiper's `autoHeight`). Recomputes on slide change, resize,
 * and late image loads.
 */
function adaptiveHeight(slider) {
  let ro;
  const setH = () => {
    const slide = slider.slides?.[slider.track.details.rel];
    if (slide) slider.container.style.height = `${slide.offsetHeight}px`;
  };

  slider.on("created", () => {
    setH();
    // A ResizeObserver on every slide catches late-loading media that changes
    // height — images AND <video> (the old img-only `load` listener left the
    // pane stuck at the video's pre-load height, e.g. 150px). Requires the
    // `min-height:0` override on content slides (see _scrollbar.scss) so the
    // slide can shrink to its content instead of the previous container height.
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(setH);
      slider.slides.forEach((s) => ro.observe(s));
    } else {
      slider.slides.forEach((s) =>
        s.querySelectorAll("img,video").forEach((el) => {
          el.addEventListener("load", setH);
          el.addEventListener("loadeddata", setH);
        })
      );
    }
  });
  slider.on("slideChanged", setH);
  slider.on("detailsChanged", setH);
  slider.on("updated", setH);
  slider.on("destroyed", () => ro?.disconnect());
}

/**
 * Two keen-slider instances (a nav strip + a content pane) kept in sync — the
 * Swiper "dual-synced tab-scroll" replacement used by DeskFeatures, TaskSliders,
 * DataSecuritySalider, TabsScrollSwiper, TabsScrollSlider.
 *
 * Returns refs to attach, the active index, and goTo/next/prev controls.
 * A `syncing` guard prevents the nav↔content slideChanged handlers from
 * ping-ponging (the old code used setTimeout guards for the same reason).
 */
export function useSyncedKeenSliders({ navBreakpoints, navSpacing = 20, slideCount = 0 } = {}) {
  const [active, setActive] = useState(0);
  // Total tab count comes from the caller (it maps the data, so it always knows)
  // — more reliable than keen's created-time slide count, which can under-report.
  const count = slideCount;
  const syncing = useRef(false);
  const activeRef = useRef(0); // avoids stale closures in next/prev

  const setActiveBoth = (i) => {
    activeRef.current = i;
    setActive(i);
  };

  const withGuard = (fn) => {
    if (syncing.current) return;
    syncing.current = true;
    fn();
    setTimeout(() => (syncing.current = false), 50);
  };

  const [navRef, navInstance] = useKeenSlider({
    ...toKeenOptions({ breakpoints: navBreakpoints, spacing: navSpacing }),
    slideChanged: (s) => {
      const rel = s.track.details.rel;
      setActiveBoth(rel);
      withGuard(() => contentInstance.current?.moveToIdx(rel));
    },
  });

  const [contentRef, contentInstance] = useKeenSlider(
    {
      slides: { perView: 1 },
      slideChanged: (s) => {
        const rel = s.track.details.rel;
        setActiveBoth(rel);
        withGuard(() => navInstance.current?.moveToIdx(rel));
      },
    },
    [adaptiveHeight]
  );

  // goTo/next/prev step through the ACTIVE TAB index (0…count-1) and move BOTH
  // panes. Driving the nav pane directly (its maxIdx = tabs − perView) made the
  // arrows stop ~perView tabs early and never reach the last tabs. content
  // (perView 1) reaches every tab; nav clamps to its last window automatically.
  const goTo = useCallback(
    (i) => {
      const clamped = Math.max(0, Math.min(i, Math.max(0, count - 1)));
      setActiveBoth(clamped);
      navInstance.current?.moveToIdx(clamped);
      contentInstance.current?.moveToIdx(clamped);
    },
    [count, navInstance, contentInstance]
  );

  const next = useCallback(() => goTo(activeRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(activeRef.current - 1), [goTo]);

  // Disabled at the true first/last TAB (these sliders don't loop).
  const atStart = active <= 0;
  const atEnd = count > 0 && active >= count - 1;

  return { navRef, navInstance, contentRef, contentInstance, active, count, goTo, next, prev, atStart, atEnd };
}
