import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const HowItWorksSection = ({ data = [] }) => (
  <section className="la-steps">
    {data.map((section, index) => (
      <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
              </div>
            </div>

            <div className="row g-4">
              {section.steps.map((step, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      {step.icon ? (
                            <img loading="lazy"
                              src={step.icon}
                              alt={step.title}
                              className="mb-4"
                            />
                        ):(
                        <span className="number fn-sb">{step.number}</span>
                        )}
                      <h3 className="title">{step.title}</h3>

                      <p className="desc mb-0">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    ))}
  </section>
);

export default HowItWorksSection;
