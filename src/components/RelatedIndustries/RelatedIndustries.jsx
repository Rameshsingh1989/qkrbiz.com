import { Link } from 'react-router';

const RelatedIndustries = ({ items = []}) => {
  if (!items.length) return null;

  return (
    <section className="py-1">
      <div className="container">
        
        <div className="mb-3 d-flex align-items-center justify-content-center"><span className="border-magenta-rounded">Explore More</span></div>
        <h2 className="fn-sb mb-4 text-center">Related Industries</h2>

        <div className="row justify-content-center mb-4">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="card radius-1 h-100 w-100 text-center">
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="fn-4 mb-3 mt-1">{item.title}</h3>

                  <Link to={item.link} className="btn btn-gradient">
                    {item.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedIndustries;
