import { useState } from 'react';
import { FaCheck} from 'react-icons/fa6';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const AttendanceFlow = ({ data }) => {
  const sanitizeHtml = useSanitizeHtml();
  const [active, setActive] = useState(0);
// console.log('', active);

  return (
    <section className="attendance-flow">
      {data.map((section, sIndex) => {
        const current = section.stages[active] || section.stages[0];
        

        return (
          <div className="container" key={sIndex}>

            <div className="row">
              <div className="col-lg-12 col-xxl-10 mx-auto text-center">
                <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />

              </div>
            </div>

            {/* Icon tab row */}
            <div className="row justify-content-center">
              <div className="col-lg-12 col-xxl-12">
                <div className="flow-tabs">
                  {section.stages.map((stage, idx) => {
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`flow-tab ${ active === idx ? "active" : "" }`}
                        onClick={() => setActive(idx)}
                      >
                        <span className="flow-tab-icon">
                          <img loading="lazy"  src={ active === idx  ? stage.iconActive : stage.icon } alt={stage.title} />
                        </span>
                        <span className="flow-tab-name"> {stage.tabName} </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active stage content */}
            <div className="row justify-content-between align-items-top flow-body g-5">

              <div className="col-lg-5 col-xxl-5">
                <div className="flow-info">
                  <h3 className="flow-info-title">{current.title} </h3>
                {current.desc && (
                    <p className="mb-2" dangerouslySetInnerHTML={sanitizeHtml(current.desc)} />
                  )}
                  <ul className="flow-features list-unstyled mb-0">
                    {current.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flow-feature">
                        <span className="flow-check">
                          <FaCheck />
                        </span>

                        <span className="bottom-line" dangerouslySetInnerHTML={sanitizeHtml(feature.label)} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-7 col-xxl-6">
                <div className={`flow-preview ${current.bgClass || ""}`}>
                  <img loading="lazy" className="img img-fluid" src={current.imgUrl} alt={current.alt} />
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AttendanceFlow;
