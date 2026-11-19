import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";

import "./QkrHRSupport.scss";

const QkrHRSupport = ({ data }) => {
  const { title, description,vs, leftCard, rightCard } = data;

  return (
    <section className="qkrhr-support">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
            <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10">
            <div className="ux-compare">
              <div className={`ux-compare__left ${leftCard.cardClass}`}>
                <div className={`ux-compare__left-header ${leftCard.bgClass}`}>{leftCard.title}</div>
                 <div className="ux-feature__body">
                  <ul className="list-unstyled m-0 ux-feature-list">
                    {leftCard.items.map((item, idx) => (
                      <li key={idx} className="ux-feature">
                        <span className="ux-feature__icon">
                          <FaCircleCheck className="text-magenta" />
                        </span>
                          <h5 className="ux-feature__title">{item.title}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ux-compare__vs"><img loading="lazy" src={vs} alt="VS" /> </div>

              <div className={`ux-compare__right ${rightCard.cardClass}`}>
                <div className={`ux-compare__right-header ${rightCard.bgClass}`}>{rightCard.title}</div>
                <div className="ux-compare__right-body">
                 
                  <p className="ux-compare__right-text">
                    {rightCard.leadIn &&  
                       <strong>{rightCard.leadIn} </strong> 
                    }
                    {rightCard.description && 
                      <span>{rightCard.description}</span>
                    }
                 </p>
                {rightCard.items?.length > 0 &&
                  <ul className="list-unstyled m-0 ux-feature-list">
                    {rightCard.items.map((item, idxx) => (
                          <li key={idxx} className="ux-feature">
                            <span className="ux-feature__icon">
                              <FaCircleXmark className="text-purple" />
                            </span>
                              <h5 className="ux-feature__title">{item.title}</h5>
                          </li>
                      ))}
                  </ul>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QkrHRSupport;
