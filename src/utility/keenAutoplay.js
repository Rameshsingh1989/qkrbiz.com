/**
 * keen-slider autoplay plugin (keen-slider has no built-in autoplay).
 *
 * Mirrors Swiper's `autoplay={{ delay, disableOnInteraction, pauseOnMouseEnter }}`:
 *   - advances every `delayMs`
 *   - pauses on hover when pauseOnHover (≈ pauseOnMouseEnter)
 *   - resumes after drag (≈ disableOnInteraction:false)
 *
 * Usage: useKeenSlider(options, [autoplayPlugin(5000)])
 */
export function autoplayPlugin(delayMs, { pauseOnHover = true } = {}) {
  return (slider) => {
    let timeout;
    let mouseOver = false;

    const clear = () => clearTimeout(timeout);
    const next = () => {
      clear();
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), delayMs);
    };

    slider.on("created", () => {
      if (pauseOnHover) {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clear();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          next();
        });
      }
      next();
    });
    slider.on("dragStarted", clear);
    slider.on("animationEnded", next);
    slider.on("updated", next);
    slider.on("destroyed", clear);
  };
}

/**
 * Convert Swiper-style `breakpoints` ({ minWidthPx: perView }) + spacing into
 * keen-slider options. Swiper breakpoints are min-width and the largest match
 * wins; keen evaluates media queries with the LAST matching entry winning, so
 * emitting them in ascending width order preserves the same behaviour.
 */
export function toKeenOptions({
  breakpoints,
  spacing = 0,
  perView = 1,
  loop = false,
  centered = false,
} = {}) {
  const origin = centered ? "center" : "auto";
  const opts = {
    loop,
    mode: "snap",
    renderMode: "performance",
    slides: { perView, spacing, origin },
    breakpoints: {},
  };

  if (breakpoints) {
    for (const width of Object.keys(breakpoints).map(Number).sort((a, b) => a - b)) {
      const bp = breakpoints[width];
      const pv = typeof bp === "object" ? bp.slidesPerView : bp;
      const sp = typeof bp === "object" && bp.spaceBetween != null ? bp.spaceBetween : spacing;
      if (width === 0) {
        opts.slides = { perView: pv, spacing: sp, origin };
      } else {
        opts.breakpoints[`(min-width: ${width}px)`] = {
          slides: { perView: pv, spacing: sp, origin },
        };
      }
    }
  }

  return opts;
}
