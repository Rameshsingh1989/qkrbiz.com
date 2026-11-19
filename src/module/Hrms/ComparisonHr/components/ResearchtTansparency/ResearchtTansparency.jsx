import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./ResearchtTansparency.scss";

const ResearchTransparency = ({ title, description }) => {

  return (
    <section className="see-qkrhr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xxl-10 text-center">
            <div className="card">
              <div className="card-body">
                <SectionHeading subTitle="" title={title} description={description} headingUnderLine={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTransparency;

