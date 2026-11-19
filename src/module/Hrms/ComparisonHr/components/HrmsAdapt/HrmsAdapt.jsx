import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";
import "./HrmsAdapt.scss";

const HrmsAdapt = ({ HrmsAdaptData}) => {

  const sanitizeHtml = useSanitizeHtml();

  // const scrollToCalculator = () => {
  //   const el = document.getElementById("hrms-calculation");
  //   if (!el) return;
  //   const offset = 100;
  //   const top = el.getBoundingClientRect().top + window.scrollY - offset;
  //   window.scrollTo({ top, behavior: "smooth" });
  // };

  return (
    <section className="hrms-adapt bg-pink-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {HrmsAdaptData?.map((txt, index) => (
            <div className="col-lg-12 col-xxl-10" key={index}>
              <SectionHeading subTitle={txt.badge} title={txt.title} description={txt.description} headingUnderLine={false} />
              <div className="row g-4 justify-content-center">
                {txt.Cards?.map((card, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className={`card h-100 ${card.theme}`}>
                      <div className={`card-header fs-5 px-4 py-3`}>
                        {card.title}
                      </div>

                      <div className="card-body px-4 py-">
                        <h3 className="fn-3" dangerouslySetInnerHTML={sanitizeHtml(card.price)} />
                        <p>{card.desc}</p>
                        <div className="feature-note text-center">
                          {card.note}
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrmsAdapt;