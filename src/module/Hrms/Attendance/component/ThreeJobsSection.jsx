
import { Link } from 'react-router';
import { FaCheck } from 'react-icons/fa6';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const ThreeJobsSection = ({ data = [], cardColClass = 'col-md-6 col-lg-4' }) => (
  <section className="la-jobs">
    {data.map((section, index ) => (
      <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
              </div>
            </div>

            <div className="row g-4">
              {section.jobs.map((job, index) => (
                <div className={cardColClass} key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      {job.icon && (
                        <img loading="lazy" className="card-icon" src={job.icon} alt={job.title} />
                      )}

                      <h3 className="title">{job.title}</h3>

                      <p className="desc">{job.description}</p>

                      <ul className="list-unstyled">
                        {job.features.map((feature, fIndex) => (
                          <li key={fIndex}>
                            <span className="switch-icon switch-icon-check">
                              <FaCheck />
                            </span>{' '}
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {job.link && (
                        <Link to={job.link} className="arrow-link fn-sb align-self-start mt-auto">
                          {job.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    ))}
  </section>
);

export default ThreeJobsSection;
