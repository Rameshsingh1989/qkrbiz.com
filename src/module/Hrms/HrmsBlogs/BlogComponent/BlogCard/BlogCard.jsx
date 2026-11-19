import { Link } from "react-router";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./BlogCard.scss";

export default function BlogCard({ BlogCardData = [], componentSec}) {
  return (
    <section className={`component-blog ${componentSec}`}>
      {BlogCardData.map((blogCard, index) => (
        <div className="container" key={index}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <SectionHeading subTitle={blogCard.badge} title={blogCard.heading} description={blogCard.desc} headingUnderLine={false} />
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {blogCard.blogList?.map((blog) => (
              <div className="col-md-6 col-lg-4" key={blog.link}>
                <div className="card h-100 blog-card">
                    <div className="ratio blog-card-ratio">
                      {blog.image && (
                        <img
                          src={blog.image}
                          alt={blog.imageAlt || blog.title}
                          loading="lazy"
                          decoding="async"
                          className="card-img-top object-fit-cover"
                        />
                      )}
                    </div>
                    <div className="card-body">
                      <h3 className="card-title blog-card-title">
                        <Link to={blog.link} className="text-reset text-decoration-none">
                          {blog.title.slice(0, 62) + '...'}
                        </Link>
                      </h3>
                     {blog.description && <p className="card-text small mb-0">{blog.description.slice(0, 162) + '...'}</p>}
                    </div>
                  </div>

              </div>
            ))}
          </div>

          {blogCard.viewAll && (
            <div className="text-center mt-4">
              <Link to={blogCard.viewAll.href} className="btn btn-outline-secondary btn-sm rounded-pill blog-card-btn">
                {blogCard.viewAll.label}
              </Link>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}