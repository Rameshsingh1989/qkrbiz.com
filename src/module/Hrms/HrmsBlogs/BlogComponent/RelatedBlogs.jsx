import { useMemo } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router";
import { FaClock } from "react-icons/fa6";

const formatDateString = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function RelatedBlogs({
  blogs = [],
  currentBlog,
}) {
  const relatedBlogs = useMemo(() => {
    if (!blogs?.length || !currentBlog) return [];

    return blogs
      .filter(
        (item) =>
          item.BlogCategoryId === currentBlog.BlogCategoryId &&
          item.BlogURL !== currentBlog.BlogURL &&
          item.IsPublished
      )
      .sort(
        (a, b) =>
          new Date(b.EditPublish || b.PublishDate) -
          new Date(a.EditPublish || a.PublishDate)
      )
      .slice(0, 3);
  }, [blogs, currentBlog]);

  // Minimum 2 related blogs, else hide the section
  if (relatedBlogs.length < 2) return null;

  return (
    <section className="related-blogs-section py-5 bg-light mb-4">
      <Container>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h2 className="fn-4 fw-sb mb-2"> {currentBlog.BlogCatName} Blogs </h2>
            <p className="text-muted mb-0">Latest insights and articles from the same category</p>
          </div>

          <Link to="/hrms-software/qkrhr-blogs" className="btn btn-outline-dark rounded-pill px-4"> View All </Link>
        </div>

        <Row className="g-4">
          {relatedBlogs.map((item) => (
            <Col lg={4} md={6} key={item.RId}>
              <Link to={`/hrms-software/${item.BlogURL}`} className="text-decoration-none">
                <div className="related-blog-card h-100 bg-white rounded-4 overflow-hidden shadow-sm">
                  <div className="related-blog-image">
                    <Image src={item.BlogImagePath} alt={item.AltImage} fluid loading="lazy" />
                  </div>

                  <div className="p-4">
                    <h3 className="related-blog-title fn-3 mb-3"> {item.Title?.length > 70 ? `${item.Title.slice(0, 70)}...` : item.Title}</h3>
                    <p className="related-blog-desc text-muted">
                      {item.MetaDescription?.length > 145 ? `${item.MetaDescription.slice(0, 145)}...`: item.MetaDescription}
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <span className="small text-dark">{item.Author}</span>
                      <span className="small text-muted">
                        <FaClock className="me-1" aria-hidden="true" />
                        {formatDateString(
                          item.EditPublish || item.PublishDate
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}