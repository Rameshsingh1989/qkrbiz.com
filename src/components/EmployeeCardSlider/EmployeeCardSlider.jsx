import { Fragment } from "react";
import { Image } from "react-bootstrap";
import KeenSlider from "../KeenSlider/KeenSlider";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./EmployeeCardSlider.scss"

const EmployeeCardSlider = ({ CardViewData }) => {
  const renderCard = (cardList) => (
    <Image loading="lazy" fluid src={cardList.imgUrl} alt={cardList.alt} />
  );

  return (
    <div className="wrapper-area">
      <div className="container">
        {CardViewData.map((cardText, cardIndex) => (
          <Fragment key={cardIndex}>
            {/* Heading */}
            <div className="row justify-content-center align-items-center mb-4">
              <div className="col-lg-12 col-xl-12 col-xxl-10 text-center">
                <SectionHeading subTitle="" title={cardText.title} description={cardText.desc} headingUnderLine={false} /> 
              </div>
            </div>

            {/* Slider */}
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-xl-12 col-xxl-10 text-center">
                <KeenSlider
                  slides={cardText.CardViewList}
                  renderSlide={renderCard}
                  perView={1}
                  spacing={20}
                  loop
                  autoplayDelay={5000}
                  dots
                  slideClassName="mb-5"
                  ariaLabel={cardText.title}
                  breakpoints={{
                    480: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 1 },
                  }}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCardSlider;
