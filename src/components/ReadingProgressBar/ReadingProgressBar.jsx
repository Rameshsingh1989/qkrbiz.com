import { useEffect, useRef } from "react";

/**
 * Fixed reading-progress bar driven by page scroll.
 *
 * Updates the bar's transform IMPERATIVELY via a ref — never through React
 * state. This is deliberate: on BlogDetail/GlossaryDetails a state update on
 * every scroll frame re-renders the whole article, which re-runs sanitizeHtml
 * ~60×/sec and trips iOS Safari's watchdog ("A problem repeatedly occurred").
 * Writing straight to el.style keeps scrolling off the React render path.
 *
 * Replaces motion's useScroll + useSpring (~43 KB gzip) with zero dependencies.
 * rAF-throttled + passive listeners so scrolling stays smooth.
 *
 * The bar tracks scroll 1:1 (no spring easing). If the spring "trailing" feel
 * is wanted back, add `transition: transform 120ms linear` to .progress-bar-top.
 */
const ReadingProgressBar = ({ className = "progress-bar-top" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      el.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update(); // set initial position (e.g. restored scroll)

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformOrigin: "0 0", transform: "scaleX(0)" }}
    />
  );
};

export default ReadingProgressBar;
