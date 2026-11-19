import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import ReadingProgressBar from "../../../../components/ReadingProgressBar/ReadingProgressBar";
import { Breadcrumb, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import BlogDemoForm from "../../../../components/RequestForm/BlogDemoForm";
import SideBarNavigationItem from "../BlogComponent/SideBarNavigationItem";
import { SocialNetwork } from "../../../../components/SocialNetwork/SocialNetwork";
import { Subscribe } from "../../../../components/Subscribe/Subscribe";
import Notfound from "../../../../components/NotFound/Notfound";
import BlogImagesUrl from "../../../../assets/BlogImages";
import useSanitizeHtmlSafe from "../../../../hooks/useSanitizeHtmlSafe";
import { getBlogBySlug, getBlogs } from "../../../../services/blogService";
import PageLoader from "../../../../components/PageLoader/PageLoader";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";

import "./BlogDetail.scss";
import RelatedBlogs from "../BlogComponent/RelatedBlogs";

/* ── helpers ─────────────────────────────────────────────── */
const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) { last = now; fn(...args); }
  };
};

const safeJSONParse = (value) => {
  try { return typeof value === "string" ? JSON.parse(value) : value; }
  catch { return null; }
};

const formatBlog = (b) => ({
  ...b,
  BlogUrl:   b.BlogURL,
  altImg:    b.AltImage,
  BlogImage: b.BlogImagePath,
});

const isBrowser = typeof window !== "undefined";

/* ── Inner ───────────────────────────────────────────────── */

// function BlogDetailInner({ initialBlog, initialBlogs}) {
function BlogDetailInner({ initialBlog}) {
  const navigate     = useNavigate();
  const { blogId }   = useParams();
  // const location     = useLocation();

  const sanitizeHtml = useSanitizeHtmlSafe();

  // ✅ ONLY trust initialBlog if slug matches exactly
  // NEVER use initialBlogs list as fallback — it has incomplete data
  const ssrBlog = useMemo(() => {
    const slug = String(blogId).toLowerCase();

    if (
      initialBlog &&
      String(initialBlog.BlogURL).toLowerCase() === slug
    ) {
      return formatBlog(initialBlog); // ✅ SSR direct hit
    }

    return null; // ✅ SPA nav → fetch on the client
  }, [initialBlog, blogId]);


  const [blogData, setBlogData] = useState(ssrBlog);
  const [loading,  setLoading]  = useState(isBrowser && !ssrBlog);

  // Adopt the SSR blog on hydration / when the matching prop arrives.
  useEffect(() => {
    if (!ssrBlog) return;
    setBlogData(ssrBlog);
    setLoading(false);
  }, [ssrBlog]);

  // Client fetch fallback — only when SSR didn't hand us a match.
  useEffect(() => {
    if (ssrBlog) return;
    let alive = true;
    setLoading(true);
    getBlogBySlug(blogId)
      .then((data) => { if (alive) setBlogData(data ? formatBlog(data) : null); })
      .catch((err) => { if (alive) { console.error("Blog fetch error:", err); setBlogData(null); } })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [ssrBlog, blogId]);

  /* ── table of contents ── */
  const navigation = useMemo(() =>
    blogData?.BlogContents?.map((s) => ({
      id:    `section-${s.Id}`,
      title: s.Title,
    })) || [],
    [blogData]
  );

  const [activeId, setActiveId] = useState(null);
  const isClickScrollingRef     = useRef(false);
  const navigationRef           = useRef(navigation);
  useEffect(() => { navigationRef.current = navigation; }, [navigation]);

  /* ── reset activeId on route change ── */
  useEffect(() => {
    setActiveId(null);
  }, [blogId]);

  /* ── scroll spy ── */
  const handleScroll = useRef(
    throttle(() => {
      if (isClickScrollingRef.current) return;
      let current = null;
      for (const item of navigationRef.current) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) { current = item.id; break; }
      }
      setActiveId((prev) => prev !== current ? current : prev);
    }, 100)
  ).current;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (navigation.length && !activeId) setActiveId(navigation[0].id);
  }, [navigation, activeId]);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top:      el.getBoundingClientRect().top + window.pageYOffset - 120,
      behavior: "smooth",
    });
  }, []);

  const formatDateString = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric", month: "short", day: "numeric",
    });
  };

  const schemaData  = useMemo(() => safeJSONParse(blogData?.Scheema),[blogData]);
  // CMS data → sanitize here (untrusted boundary). FaqComponent uses the
  // lightweight trusted hook, so it must receive already-clean HTML.
  const blogFaqData = useMemo(() => {
    const faqs = safeJSONParse(blogData?.BlogFAQs);
    if (!Array.isArray(faqs)) return faqs;
    return faqs.map((f) => ({
      ...f,
      Title: sanitizeHtml(f?.Title).__html,
      Content: sanitizeHtml(f?.Content).__html,
    }));
  }, [blogData, sanitizeHtml]);

  /* ── sanitize once per blog (not once per render) ──
     sanitizeHtml runs a he.decode loop + ~10 regex passes over the whole
     HTML. Called inline in JSX it re-ran on every render; memoizing pins the
     work to blogData changes so scrolling/state updates never re-sanitize. */
  const titleHtml = useMemo(
    () => sanitizeHtml(blogData?.Title),
    [blogData, sanitizeHtml]
  );
  const descriptionHtml = useMemo(
    () => sanitizeHtml(blogData?.BlogDescription),
    [blogData, sanitizeHtml]
  );
  const sectionsHtml = useMemo(
    () =>
      (blogData?.BlogContents || []).map((section) => ({
        Id:      section.Id,
        title:   sanitizeHtml(section.Title),
        content: sanitizeHtml(section.Content),
      })),
    [blogData, sanitizeHtml]
  );

  // console.log("blog Data", blogData.CanonicalURL);

  /* ── related blogs: full list here, <RelatedBlogs> filters ── */
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (!blogData?.BlogCategoryId) return;
    let alive = true;
    getBlogs()
      .then((data) => { if (alive) setRelatedBlogs(data ?? []); })
      .catch((err) => console.error("Related blog error:", err));
    return () => { alive = false; };
  }, [blogData]);

  if (loading) return <PageLoader />;
  if (!blogData) return <Notfound />;

  return (
    <div className="position-relative">
      <ReadingProgressBar />

      <RouteSpecificMeta
        title={blogData.MetaTitle || blogData.Title}
        description={blogData.MetaDescription || blogData.BlogDescription}
        canonicalUrl={blogData.CanonicalURL}
        image={blogData.BlogImagePath ?? ""}
        SchemaData={schemaData}
      />

      <div className="blog-details blogs-top">
        <Container>
          <Row>
            <Col lg={8}>
                <main className="blog-detail-left">

                    <nav aria-label="Breadcrumb" className="mb-4 breadcrumbs">
                      <ul className="breadcrumb">
                      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrms-software" }}>
                        Home
                      </Breadcrumb.Item>
                      <Breadcrumb.Item onClick={() => navigate("/hrms-software/qkrhr-blogs")}>
                        Blog
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>{blogData.Title}</Breadcrumb.Item>
                      </ul>
                    </nav>
                    <article>
                      <header>
                        <h1 dangerouslySetInnerHTML={titleHtml} />
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span className="small text-muted">By: {blogData.Author}</span>
                          {blogData.PublishDate && (
                            <>
                              <span className="small text-muted">|</span>
                              <span className="small text-muted">
                                {formatDateString(blogData.PublishDate)}
                              </span>
                            </>
                          )}
                        </div>
                      </header>
                      <figure>
                        <Image src={blogData.BlogImagePath} alt={blogData.altImg} fluid  loading="eager" fetchPriority="high" className="mb-4 rounded-4" />
                      </figure>

                      <div dangerouslySetInnerHTML={descriptionHtml} />

                      <div className="blog-call-to-action mb-4">
                        <div>
                          <p className="call-to-heading">Try the HRMS That Makes HR Easy,</p>
                          <p className="call-to-subheading">It Works on Autopilot.</p>
                          <a href="/hrms-software" className="btn btn-pink">Try QkrHR</a>
                        </div>
                        <img
                          src={BlogImagesUrl.blogs.blogBgImage}
                          alt="HR Professional"
                          className="call-to-img"
                          loading="lazy"
                        />
                      </div>

                      {sectionsHtml.map((section) => (
                        <section key={section.Id} id={`section-${section.Id}`}>
                          <h2 dangerouslySetInnerHTML={section.title} />
                          <div dangerouslySetInnerHTML={section.content} />
                        </section>
                      ))}
                    </article>
                </main>
            </Col>

            <Col lg={4}>
                <BlogDemoForm title="Book Free Demo Now!" />
                <div className="position-sticky" style={{ top: "100px" }}>
                  <div className="table-content">
                    <h3 className="mb-3">Table of Contents</h3>
                    <ul className="list-unstyled time-line">
                      {navigation.map((item, index) => {
                        const activeIndex    = navigation.findIndex((n) => n.id === activeId);
                        const isActive       = activeId === item.id;
                        const isBeforeActive = activeIndex !== -1 && index < activeIndex;
                        return (
                          <SideBarNavigationItem
                            key={item.id}
                            item={item}
                            isActive={isActive}
                            isBeforeActive={isBeforeActive}
                            onClick={() => {
                              isClickScrollingRef.current = true;
                              setActiveId(item.id);
                              scrollToSection(item.id);
                              setTimeout(() => {
                                isClickScrollingRef.current = false;
                              }, 1000);
                            }}
                          />
                        );
                      })}
                    </ul>
                  </div>
                  <SocialNetwork socialNetwork="blog-social-network mt-4" />
                </div>
            </Col>
          </Row>
        </Container>
      </div>

       {blogFaqData?.length > 0 && <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={blogFaqData} />}

      <RelatedBlogs blogs={relatedBlogs} currentBlog={blogData} />

      <Subscribe cls="mb-5" />
    </div>
  );
}

/* ── Outer ───────────────────────────────────────────────── */
// key={blogId} remounts the inner tree on blog change, so its
// useState re-seeds from the new slug's SSR/props cleanly.
export default function BlogDetail({ initialBlog = null }) {
  const { blogId } = useParams();

  return <BlogDetailInner key={blogId} initialBlog={initialBlog} />;
}
