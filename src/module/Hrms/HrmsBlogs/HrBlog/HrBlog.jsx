import { useEffect, useState, useMemo, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Container, Row, Col, Image, Button, Pagination } from "react-bootstrap";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import {
  FaClock, FaUsers, FaUser, FaUserTie, FaUserCheck, FaUserPlus, FaUserGroup,
  FaMoneyBill, FaMoneyBillWave, FaCoins, FaCalculator, FaFileInvoiceDollar, FaSackDollar,
  FaCalendarDays, FaCalendarCheck,
  FaChartLine, FaChartBar, FaChartPie, FaTrophy, FaMedal, FaStar, FaAward, FaCertificate,
  FaGavel, FaShield, FaLock,
  FaFileLines, FaClipboard, FaClipboardList, FaClipboardCheck,
  FaGraduationCap, FaBook, FaBookOpen,
  FaHandshake, FaBriefcase, FaBuilding, FaIdCard,
  FaHeart, FaFaceSmile, FaThumbsUp,
  FaBolt, FaRocket, FaLightbulb,
  FaGear, FaWrench, FaScrewdriverWrench,
  FaTag, FaList, FaListCheck, FaTable,
  FaMagnifyingGlass, FaBell, FaEnvelope,
  FaPlay, FaArrowRight, FaChevronRight, FaPaperPlane,
  FaCircleQuestion, FaCircleInfo, FaDollarSign, FaNewspaper, FaArrowTrendUp, FaChalkboard,
} from "react-icons/fa6";
import { FaCalendarAlt, FaShieldAlt, FaBalanceScale, FaFileAlt } from "react-icons/fa";
import { HrBlogSchema , HrBlogMeta } from "./HrBlogSchema";
import { Subscribe } from "../../../../components/Subscribe/Subscribe";
import useSanitizeHtmlSafe from "../../../../hooks/useSanitizeHtmlSafe";
import { getBlogs } from "../../../../services/blogService";
import "./HrBlog.scss";

// Static icon registry — maps blog category icon names to react-icons components.
// Keys are lowercased FA icon names without the leading "fa".
const ICON_REGISTRY = {
  clock: FaClock,
  users: FaUsers, user: FaUser, usertie: FaUserTie, usercheck: FaUserCheck,
  userplus: FaUserPlus, usergroup: FaUserGroup,
  moneybill: FaMoneyBill, moneybillwave: FaMoneyBillWave, coins: FaCoins,
  calculator: FaCalculator, fileinvoicedollar: FaFileInvoiceDollar, sackdollar: FaSackDollar,
  calendaralt: FaCalendarAlt, calendardays: FaCalendarDays, calendarcheck: FaCalendarCheck,
  chartline: FaChartLine, chartbar: FaChartBar, chartpie: FaChartPie,
  trophy: FaTrophy, medal: FaMedal, star: FaStar, award: FaAward, certificate: FaCertificate,
  gavel: FaGavel, shieldalt: FaShieldAlt, shield: FaShield, lock: FaLock,
  balancescale: FaBalanceScale,
  filealt: FaFileAlt, filelines: FaFileLines,
  clipboard: FaClipboard, clipboardlist: FaClipboardList, clipboardcheck: FaClipboardCheck,
  graduationcap: FaGraduationCap, book: FaBook, bookopen: FaBookOpen,
  handshake: FaHandshake, briefcase: FaBriefcase, building: FaBuilding, idcard: FaIdCard,
  heart: FaHeart, facesmile: FaFaceSmile, thumbsup: FaThumbsUp,
  bolt: FaBolt, rocket: FaRocket, lightbulb: FaLightbulb,
  gear: FaGear, wrench: FaWrench, screwdriverwrench: FaScrewdriverWrench,
  tag: FaTag, list: FaList, listcheck: FaListCheck, table: FaTable,
  magnifyingglass: FaMagnifyingGlass, bell: FaBell, envelope: FaEnvelope,
  play: FaPlay, arrowright: FaArrowRight, chevronright: FaChevronRight, paperplane: FaPaperPlane,
  circlequestion: FaCircleQuestion, circleinfo: FaCircleInfo, dollarsign: FaDollarSign, newspaper: FaNewspaper,
  arrowtrendup: FaArrowTrendUp, chalkboard: FaChalkboard, blackboard: FaChalkboard
};

const getIcon = (name) => {
  if (!name) return FaCircleQuestion;
  const key = name.replace(/^fa/i, "").toLowerCase().replace(/[^a-z]/g, "");
  return ICON_REGISTRY[key] ?? FaCircleQuestion;
};

// Renders a react-icons component resolved from a category icon name.
const DynIcon = ({ name, ...props }) => {
  const Icon = getIcon(name);
  return <Icon {...props} />;
};

const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });
};

/* ── component ───────────────────────────────────────────── */
const HrBlog = ({ initialBlogs = [], origin }) => {
  
  const navigate       = useNavigate();
  const [searchParams] = useSearchParams();
  const sanitizeHtml   = useSanitizeHtmlSafe();

  /* ── state ── */
  const [blogs,      setBlogs]      = useState(() => Array.isArray(initialBlogs) ? initialBlogs : []);
  const [hasFetched, setHasFetched] = useState(() => Array.isArray(initialBlogs) && initialBlogs.length > 0);
  const [error,      setError]      = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const loading = blogs.length === 0 && !hasFetched;

    // ✅ ADD HERE
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0);

    if (!isNaN(Date.parse(dateStr))) {
      return new Date(dateStr);
    }

    const [day, mon, year] = dateStr.split("-");
    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    const fullYear = Number(year) < 100 ? 2000 + Number(year) : Number(year);

    return new Date(fullYear, months[mon], Number(day));
  };

  /* ── SSR sync ── */
  useEffect(() => {
    if (!Array.isArray(initialBlogs) || initialBlogs.length === 0) return;
    setBlogs(initialBlogs);
    setHasFetched(true);
    setError(null);
  }, [initialBlogs]);

  /* ── client fetch fallback ── */
  const fetchBlogs = useCallback(() => {
    setError(null);
    getBlogs()
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch((err) => { console.error(err); setError(err.message); })
      .finally(() => setHasFetched(true));
  }, []);

  useEffect(() => {
    if (Array.isArray(initialBlogs) && initialBlogs.length > 0) return;
    fetchBlogs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── categories ── */
  const categories = useMemo(() => [
    ...new Map(
      blogs
        .filter((b) => b?.BlogCatName)
        .map((b) => [b.BlogCatName, b])
    ).values(),
  ], [blogs]);

  const filteredBlogs = useMemo(() => {
    const base = selectedCategory
      ? blogs.filter((b) => b?.BlogCatName === selectedCategory)
      : blogs;

    return [...base].sort(
      (a, b) => parseDate(b.PublishDate) - parseDate(a.PublishDate)
    );
  }, [blogs, selectedCategory]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory((prev) => prev === cat ? null : cat);
    navigate("/hrms-software/qkrhr-blogs");
  };

  /* ── pagination ── */
  const postsPerPage = 6;
  const totalPages   = Math.max(1, Math.ceil(filteredBlogs.length / postsPerPage));
  const currentPage  = Math.min(
    Math.max(1, parseInt(searchParams.get("page") || "1", 10)),
    totalPages
  );
  const currentPosts = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  // const paginate = (page) => {
  //   const base = "/hrms-software/qkrhr-blogs";
  //   navigate(page === 1 ? base : `${base}?page=${page}`);
  // };
  
    // console.log("🔍Blog Contents:", currentPosts) ;
  /* ── render ── */
  return (
    <>
      <RouteSpecificMeta
        origin={origin}
        title={HrBlogMeta.title}
        description={HrBlogMeta.description}
        SchemaData={HrBlogSchema}
      />

      <div className="blogs-top blogs-top-bg">
        <Container>
          <Row className="row justify-content-center mb-4">
            <Col lg="10">
              <h1 className="fn-7 fn-r bl-3" dangerouslySetInnerHTML={sanitizeHtml("QkrHR Blogs")} />
              <h2 className="bh-1 mb-3" dangerouslySetInnerHTML={sanitizeHtml(`We're democratizing HR Information<br/><span class="text-gradient fn-r">Revolutionizing HR landscape in the process</span>`)} />
              <p className="fn-4 mb-0" dangerouslySetInnerHTML={sanitizeHtml(`We're turning tricky HR stuff into simple, clear insights—no jargon, no barriers, just helpful ideas for everyone!`)} />
            </Col>
          </Row>
        </Container>
      </div>

      <main className="hrms-blogs-wrapper">
        <Container>
          <div className="blog-category-btn">
            <Row className="row justify-content-center text-center">
              <Col xxl="6">
                
                {categories.length > 0 && (
                  <>
                    <h5 className="explore-trading" dangerouslySetInnerHTML={sanitizeHtml("Explore Blog Topics")} />
                    <div className="text-center mb-3" role="group" aria-label="Filter blogs by category">
                      {categories.map((cat) => (
                        <Button
                          key={cat.BlogCatName}
                          variant="outline-light rounded-5 m-2"
                          className={selectedCategory === cat.BlogCatName ? "active" : ""}
                          onClick={() => handleCategoryChange(cat.BlogCatName)}
                          aria-pressed={selectedCategory === cat.BlogCatName}>
                            <DynIcon name={cat.BlogCateIcon} style={{ color: cat.BlogCatColor, marginRight: '0.5rem' }} />{cat.BlogCatName}</Button>
                      ))}
                    </div>
                  </>
                )}
              </Col>
            </Row>
          </div>

          {loading && <p className="text-center">Loading...</p>}

          {error && (
            <div className="text-center">
              <p className="text-danger">{error}</p>
              <Button variant="outline-danger" size="sm" onClick={() => { setHasFetched(false); fetchBlogs(); }}>
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && currentPosts.length === 0 && (
            <p className="text-center text-muted py-5">
              {selectedCategory ? "No blogs found in this category." : "No blogs available at the moment."}
            </p>
          )}

          <Row className="row mt-3">
            <div className="col-lg-12">
              <div className="row">
                {currentPosts.map((blog, index) => (
                  <div className="col-lg-12 col-xl-4 col-xxl-4 d-flex" key={blog.RId ?? blog.BlogURL ?? index}>
                      <article className="card mb-xl-5">
                          <Link className="card-header" to={`/hrms-software/${blog?.BlogURL || "#"}`} aria-label={blog?.Title || "Blog"}>
                            {/* first row is above the fold: load it now, the LCP card first */}
                            <Image
                              loading={index < 3 ? "eager" : "lazy"}
                              fetchPriority={index === 0 ? "high" : undefined}
                              fluid src={blog.BlogImagePath} alt={blog.AltImage || blog.Title}
                            />
                          </Link>
                        <div className="card-body">
                          <Link to={`/hrms-software/${blog?.BlogURL || "#"}`} aria-label={blog?.Title || "Blog"}>
                            <h5><span dangerouslySetInnerHTML={sanitizeHtml(blog.Title.slice(0, 62) + '...')} /></h5>
                          </Link>
                          <div className="content" dangerouslySetInnerHTML={sanitizeHtml(blog?.BlogDescription.length <= 180 ? blog?.BlogDescription : blog?.BlogDescription.replace(/<[^>]*>/g, '').slice(0, 180) + '...')}/>
                         </div> 
                          <div className="card-footer card-footers">
                            <div className="d-flex justify-content-between">
                              <span className="fn-user text-light-dark">{blog?.Author || "Unknown"}</span>
                              <span className="ms-3 fn-user text-dark-gray">
                                <FaCalendarAlt className="calendar-icon" /> <span>{formatDate(blog?.PublishDate)}</span>
                              </span>
                            </div>
                          </div>
                      </article>
                  </div>
                ))}
              </div>
            </div>
          </Row>

            {totalPages > 1 && (
              <Pagination className="justify-content-center align-items-center mt-5 custom-pagination">

                {/* Page Info */}
                <div className="page-info me-3">
                  Page {currentPage} of {totalPages}
                </div>

                {/* First */}
                <Pagination.First
                  as={Link}
                  to="/hrms-software/qkrhr-blogs"
                  disabled={currentPage === 1}
                />

                {/* Prev */}
                <Pagination.Prev
                  as={Link}
                  to={
                    currentPage - 1 <= 1
                      ? "/hrms-software/qkrhr-blogs"
                      : `/hrms-software/qkrhr-blogs?page=${currentPage - 1}`
                  }
                  disabled={currentPage === 1}
                />

                {/* First Page */}
                {currentPage > 2 && (
                  <>
                    <Pagination.Item
                      as={Link}
                      to="/hrms-software/qkrhr-blogs"
                    >
                      1
                    </Pagination.Item>

                    {currentPage > 3 && <Pagination.Ellipsis disabled />}
                  </>
                )}

                {/* Current -1 */}
                {currentPage > 1 && (
                  <Pagination.Item
                    as={Link}
                    to={
                      currentPage - 1 === 1
                        ? "/hrms-software/qkrhr-blogs"
                        : `/hrms-software/qkrhr-blogs?page=${currentPage - 1}`
                    }
                  >
                    {currentPage - 1}
                  </Pagination.Item>
                )}

                {/* Current */}
                <Pagination.Item active>
                  {currentPage}
                </Pagination.Item>

                {/* Current +1 */}
                {currentPage < totalPages && (
                  <Pagination.Item
                    as={Link}
                    to={`/hrms-software/qkrhr-blogs?page=${currentPage + 1}`}
                  >
                    {currentPage + 1}
                  </Pagination.Item>
                )}

                {/* Last Page */}
                {currentPage < totalPages - 1 && (
                  <>
                    {currentPage < totalPages - 2 && (
                      <Pagination.Ellipsis disabled />
                    )}

                    <Pagination.Item
                      as={Link}
                      to={`/hrms-software/qkrhr-blogs?page=${totalPages}`}
                    >
                      {totalPages}
                    </Pagination.Item>
                  </>
                )}

                {/* Next */}
                <Pagination.Next
                  as={Link}
                  to={`/hrms-software/qkrhr-blogs?page=${currentPage + 1}`}
                  disabled={currentPage === totalPages}
                />

                {/* Last */}
                <Pagination.Last
                  as={Link}
                  to={`/hrms-software/qkrhr-blogs?page=${totalPages}`}
                  disabled={currentPage === totalPages}
                />

              </Pagination>
            )}

        </Container>
      </main>

      <Subscribe cls="mb-5" />
    </>
  );
};

export default HrBlog;
