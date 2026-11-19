import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const GlideSection = ({ data = [] }) => (
  <section className="la-glide">
    {data.map((section, index) => (
      <div className="container" key={index}>

            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
               <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
              </div>
            </div>

            <div className="row g-4">
              {section.cards.map((card, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      {card.icon && (
                        <img loading="lazy" className="card-icon" src={card.icon} alt={card.title} />
                      )}

                      <h3 className="glide-title">{card.title}</h3>

                      <p className="glide-desc mb-0">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    ))}
  </section>
);

export default GlideSection;
