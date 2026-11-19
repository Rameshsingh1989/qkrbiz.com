
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./AlternativeSection.scss";

const AlternativeSection  = ({
  title,
  subtitle,
  description,
  highlightText,
  className = "alternative",
}) => {
  
  return (
    <section className={`${className}`}>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-12 col-xl-12 col-xxl-12">
            <SectionHeading subTitle="" title={title} description={subtitle} subTitleCenter={false} headingUnderLine={false} />
             {(description || highlightText) && (
              <p className="fs-5">
                {description}
                {highlightText && (
                  <>
                    <br />
                    <span className="text-magenta fn-m">{highlightText}</span>
                  </>
                )}
              </p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeSection;
