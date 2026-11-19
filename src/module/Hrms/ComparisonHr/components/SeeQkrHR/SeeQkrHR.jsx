
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";
import { Link } from 'react-router';
import "./SeeQkrHR.scss";

const SeeQkrHR = () => {

 const sanitizeHtml = useSanitizeHtml();

  return (
    <>  
    <section className="see-qkrhr">
          <div className="container">

              <div className="row justify-content-center">
                <div className="col-lg-12 col-xxl-9 text-center">
                    <div className="card">
                      <div className="card-body">

                            <h2 className="section-title" dangerouslySetInnerHTML={sanitizeHtml(`<span class="text-magenta text-underline">See QkrHR </span> for Yourself`)} />
                            <p className="fs-5 mb-5" dangerouslySetInnerHTML={sanitizeHtml('Book a live demo and see how QkrHR handles your specific payroll setup, compliance requirements, and workforce — before you commit to anything')} />
                            <div className="d-flex gap-4 justify-content-center">
                                <Link to="/signup" className="btn btn-magenta rounded-pill">Book a Free Demo</Link>
                                <Link to="/hrms-software" className="btn btn-outline-magenta rounded-pill">Explore All Features</Link>
                            </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </section>
       
    </>
  )
}

export default SeeQkrHR