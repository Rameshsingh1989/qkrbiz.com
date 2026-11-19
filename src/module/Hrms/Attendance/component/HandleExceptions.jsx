import { useEffect, useRef, useState } from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const HandleExceptions = ({ data }) => {
  const [active, setActive] = useState(0);
  const triggerRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const nodes = triggerRefs.current.filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [data]);

  const steps = data?.steps || [];
  const activeStep = steps[active] || steps[0];

  const handleSelect = (idx) => {
    setActive(idx);
    const node = triggerRefs.current[idx];
    if (node && typeof node.scrollIntoView === "function") {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="handle-exceptions">
      <div className="he-pin">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            {/* Text + clickable list */}
            <div className="col-lg-4 col-xxl-4">
              
              <SectionHeading subTitle={data.subTitle} subTitleCenter={false} title={data.title} description={data.description} headingUnderLine={false} />

              <ul className="he-steplist list-unstyled mb-0">
                {steps.map((step, idx) => (
                  <li
                    key={step.id}
                    className={`he-steplist-item ${
                      active === idx ? "is-active" : ""
                    }`}
                    onClick={() => handleSelect(idx)}
                    role="button"
                  >
                    <span className="he-dot" />

                    <span className="he-steplist-text">
                      <span className="he-steplist-title">
                        {step.title}
                      </span>

                      {active === idx && (
                        <span className="he-steplist-desc">
                          {step.description}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Single active image */}
            <div className="col-lg-8 col-xxl-8">
              <div className="he-preview">
                {activeStep && (
                  <img loading="lazy"
                    className="img img-fluid"
                    src={activeStep.imgUrl}
                    alt={activeStep.alt}
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Invisible scroll triggers (one per step) that drive the active image */}
      <div className="he-triggers" aria-hidden="true">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="he-trigger"
            data-index={idx}
            ref={(el) => (triggerRefs.current[idx] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default HandleExceptions;
