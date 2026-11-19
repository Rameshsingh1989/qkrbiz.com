import { FaArrowRight } from "react-icons/fa6";
import Vs from "@/assets/images/hrms/comparisonHr/vs.png";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./UserExperience.scss";

const UserExperience = ({ data }) => {
  const { title, description, leftCard, rightCard } = data;

  return (
    <section className="user-experience">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
             <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10">
            <div className="ux-compare">
              <div className="ux-compare__left">
                <div className="ux-compare__left-header">{leftCard.title}</div>
                <ul className="list-unstyled m-0 ux-feature-list">
                  {leftCard.items.map((item, idx) => (
                    <li key={idx} className="ux-feature">
                      <span className="ux-feature__icon">
                        <FaArrowRight />
                      </span>
                      <div className="ux-feature__body">
                        <h5 className="ux-feature__title">{item.title}</h5>
                        <p className="ux-feature__desc">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ux-compare__vs"><img loading="lazy" src={Vs} alt="VS" /> </div>

              <div className="ux-compare__right">
                <div className="ux-compare__right-header">{rightCard.title}</div>
                <div className="ux-compare__right-body">
                 
                  <p className="ux-compare__right-text">
                    {rightCard.leadIn &&  
                       <strong>{rightCard.leadIn} </strong> 
                    }
                    {rightCard.description && 
                      <span>{rightCard.description}</span>
                    }
                 </p>
                {!rightCard.items?.length > 0 &&
                  rightCard.items.map((item, idxx) => (
                        <li key={idxx} className="ux-feature">
                          <span className="ux-feature__icon">
                            <FaArrowRight />
                          </span>
                          <div className="ux-feature__body">
                            <h5 className="ux-feature__title">{item.title}</h5>
                            <p className="ux-feature__desc">{item.description}</p>
                          </div>
                        </li>
                    ))
                }
                </div>
                <div className="ux-compare__right-footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
