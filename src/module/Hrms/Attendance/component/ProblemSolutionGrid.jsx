import { FaCheck, FaXmark } from 'react-icons/fa6';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const ProblemSolutionGrid = ({ data = [] }) => (
  <section className="la-solve">
    {data.map((section) => (
      <div className="container" key={section.id}>

            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                 <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
              </div>
            </div>

            <div className="row g-4">
              {section.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div className="col-md-6 col-lg-4" key={card.id}>
                    <div className="card h-100">
                      <div className="card-body">
                        {/* {Icon && (
                          <span className="solve-icon">
                            <Icon />
                          </span>
                        )} */}
                        <img loading="lazy"
                          src={card.icon}
                          alt={card.problem}
                          className="solve-img"
                        />

                        <ul className="solve-list list-unstyled mb-0">
                          <li className="solve-problem">
                            <span className="solve-mark solve-mark-cross">
                              <FaXmark />
                            </span>
                            <span>{card.problem}</span>
                          </li>

                          <li className="solve-solution">
                            <span className="solve-mark solve-mark-check">
                              <FaCheck />
                            </span>
                            <span>{card.solution}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

      </div>
    ))}
  </section>
);

export default ProblemSolutionGrid;
