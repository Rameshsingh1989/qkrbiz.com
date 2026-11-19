import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useState, useEffect, useRef, useCallback } from "react";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import SectionHeading from "../SectionHeading/SectionHeading";

import "./ClientLogoScroll.scss";

const GAP = 40; // px between logos (was Swiper spaceBetween={40})

/**
 * Continuous logo marquee. Replaces the old Swiper freeMode+autoplay(delay:1,
 * speed:12000) ticker with a pure-CSS marquee — smoother, zero JS slider lib.
 * The track is rendered twice and translated -50% so the loop is seamless;
 * pausing on hover is CSS (`animation-play-state`). Slide width is computed to
 * honour the responsive per-view counts. SSR renders the logos in a flex row
 * (content in HTML, no layout shift); the animation starts after mount.
 */
const MarqueeRow = ({ logos, sanitizeHtml, counts }) => {
  const { count1, count2, count3, count4, count5 } = counts;
  const wrapRef = useRef(null);
  const [logoW, setLogoW] = useState(null);

  const perViewFor = useCallback(
    (w) =>
      w >= 1200 ? count1 : w >= 992 ? count2 : w >= 768 ? count3 : w >= 480 ? count4 : count5,
    [count1, count2, count3, count4, count5]
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const compute = () => {
      const pv = Math.max(1, perViewFor(window.innerWidth));
      const w = el.clientWidth;
      // each slide owns a trailing GAP (margin-right), so pv slides span pv*(w/pv)
      setLogoW(w / pv - GAP);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [perViewFor]);

  // Duration scales with logo count so speed stays constant regardless of list length.
  const duration = `${Math.max(12, logos.length * 3)}s`;
  const slideStyle = logoW ? { width: `${logoW}px` } : undefined;

  return (
    <div className="logo-marquee" ref={wrapRef}>
      <div
        className={`logo-marquee__track${logoW ? " is-animated" : ""}`}
        style={{ animationDuration: duration }}
      >
        {[...logos, ...logos].map((item, idx) => (
          <div className="logo-slide" style={slideStyle} key={idx} aria-hidden={idx >= logos.length}>
            <Image src={item.imgUrl} alt={item.alt} fluid loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientLogoScroll = ({
  ClientLogo = [],
  logoSlider = "",
  show = true,
  hide = false,
  count1 = 5,
  count2 = 4,
  count3 = 3,
  count4 = 2,
  count5 = 2,
}) => {
  const sanitizeHtml = useSanitizeHtml();
  const counts = { count1, count2, count3, count4, count5 };

  if (!ClientLogo.length) return null;

  return (
    <section className={logoSlider}>
      <Container>
        {ClientLogo.map((clientList, idx) => (
          <div key={idx} className="client-section py-4">
            {clientList.isHeadHide === show && (
              <Row className="justify-content-center text-center">
                <Col>
                  <SectionHeading subTitle="" title={clientList.title} description={clientList.desc} headingUnderLine={false} />
                </Col>
              </Row>
            )}

            {clientList.isHeadHide === hide && clientList.headingHr && (
              <Row className="justify-content-center text-center mb-4">
                <Col lg={8} xl={7} xxl={6}>
                  <ListGroup horizontal className="heading-mid-top">
                    <ListGroup.Item>
                      <h2 className="text-black fn-7 mb-0">
                        <span dangerouslySetInnerHTML={sanitizeHtml(clientList.headingHr)} />
                      </h2>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            )}

            {clientList.CustomersList?.length > 0 && (
              <MarqueeRow logos={clientList.CustomersList} sanitizeHtml={sanitizeHtml} counts={counts} />
            )}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ClientLogoScroll;
