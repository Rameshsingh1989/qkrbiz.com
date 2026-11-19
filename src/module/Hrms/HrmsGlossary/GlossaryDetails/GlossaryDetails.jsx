import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import ReadingProgressBar from "../../../../components/ReadingProgressBar/ReadingProgressBar";
import { useParams, Link, useNavigate } from "react-router";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import BlogDemoForm from "../../../../components/RequestForm/BlogDemoForm";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import useSanitizeHtmlSafe from "../../../../hooks/useSanitizeHtmlSafe";
import { getGlossaryBySlug } from "../../../../services/GlossaryService";
import SideBarNavItem from "../GlossaryComponent/SideBarNavItem";
import { SocialNetwork } from "../../../../components/SocialNetwork/SocialNetwork";
import PageLoader from "../../../../components/PageLoader/PageLoader";
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";

import "./GlossaryDetails.scss";

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
/* ── Component ─────────────────────── */

const GlossaryDetails = ({initialGlossary = null}) => {

  const navigate = useNavigate();
  const { slug } = useParams();
  const sanitizeHtml = useSanitizeHtmlSafe();

  /* ── state ───────────────────────── */

  const [glossaryItem, setGlossaryItem] = useState(initialGlossary);
  const [loading, setLoading] = useState(!initialGlossary);
  const [error, setError] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const contentRef = useRef(null);
  /* ── SSR sync ────────────────────── */
  useEffect(() => {
    if (!initialGlossary) return;
    setGlossaryItem(initialGlossary);
    setLoading(false);
  }, [initialGlossary]);
  /* ── Client fetch fallback ───────── */

  const fetchGlossaryItem = useCallback(() => {
      setLoading(true);
      setError(null);
      getGlossaryBySlug(slug)
        .then((data) => {
          setGlossaryItem(data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [slug]);

  useEffect(() => {
    if (initialGlossary) return;
    fetchGlossaryItem();
  }, [fetchGlossaryItem]);


  /* ── Table of contents ───────────── */
  const navigation = useMemo(() =>
    glossaryItem?.GlossaryContent?.map((s) => ({
      id: `section-${s.Id}`,
      title:
        s.Title ||
        `Section ${s.Id}`
    })) || [],
    [glossaryItem]
  );

  // const navigation = useMemo(() =>
  //   glossaryItem?.GlossaryContent?.map((s, index) => ({
  //     id: `section-${s.Id}`,
  //     title: s.Title?.replace(/<[^>]+>/g, "") || `Section ${index + 1}`
  //   })) || [],
  //   [glossaryItem]
  // );

  const isClickScrollingRef = useRef(false);
  const navigationRef = useRef(navigation);

  useEffect(() => {
    navigationRef.current = navigation;
  }, [navigation]);

  /* ── Scroll spy ─────────────────── */

  const handleScroll = useRef(
      throttle(() => {
        if (typeof window === "undefined") return;
        if (isClickScrollingRef.current) return;
        let current = null;
        for (const item of navigationRef.current) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= 150 &&
            rect.bottom >= 150
          ) {
            current = item.id;
            break;
          }
        }
        setActiveId((prev) =>
          prev !== current
            ? current
            : prev
        );
       }, 100)
  ).current;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll,{ passive: true } );
    handleScroll();
    return () =>window.removeEventListener("scroll",handleScroll);
  }, [handleScroll]);

  const scrollToSection =
    useCallback((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.pageYOffset -
          120,
        behavior: "smooth",
      });
  }, []);

  // console.log("Glossary Item:", glossaryItem);
  /* ── FAQ and Schema fix ─────────────────── */
  const glossarySchemaData = useMemo(() => safeJSONParse(glossaryItem?.Scheema),[glossaryItem]);
  // CMS data → sanitize here (untrusted boundary). FaqComponent uses the
  // lightweight trusted hook, so it must receive already-clean HTML.
  const glossaryFaqData = useMemo(() => {
    const faqs = safeJSONParse(glossaryItem?.GlossaryFAQ);
    if (!Array.isArray(faqs)) return faqs;
    return faqs.map((f) => ({
      ...f,
      Title: sanitizeHtml(f?.Title).__html,
      Content: sanitizeHtml(f?.Content).__html,
    }));
  }, [glossaryItem, sanitizeHtml]);

  const goBack = () => navigate("/hrms-software/hr-glossary");
  /* ── UI states ─────────────────── */
  if (loading) return <PageLoader />;
  if (error) return (
      <Container className="py-5 text-center">
        <p className="text-danger">{error}</p>
        <Button variant="outline-danger" size="sm" onClick={fetchGlossaryItem}>Retry</Button>
      </Container>
    );

  if (!glossaryItem)
    return (
      <Container className="py-5 text-center">
        <h2>Term not found</h2>
        <Button variant="gradient"onClick={goBack}>← Back</Button>
      </Container>
    );
  /* ── Render ─────────────────────── */
  return (
    <>
      <ReadingProgressBar />
      <RouteSpecificMeta
        title={glossaryItem.MetaTitle || "Untitled Glossary"}
        description={glossaryItem.MetaDescription}
        SchemaData={glossarySchemaData}
      />
      {/* Header */}
      <div className="hr-glossary-details">
        <Container>
          <Row>
            <Col lg={8}>
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{to: "/hrms-software"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{to:"/hrms-software/hr-glossary"}}> HR Glossary</Breadcrumb.Item>
                <Breadcrumb.Item active>{glossaryItem.GlossaryTitle}</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="text-gradient" dangerouslySetInnerHTML={sanitizeHtml( glossaryItem.GlossaryTitle)}/>
             {glossaryItem.GlossaryDescription && <div className="mb-4" dangerouslySetInnerHTML={sanitizeHtml( glossaryItem.GlossaryDescription)}/> }
            </Col>
          </Row>
        </Container>
      </div>
      {/* Content */}
      <div className="glossary-details">
        <Container className="py-5">
          <Row className="row-space-1_5 row">
            <Col lg={8} className="glossary-detail-left" ref={contentRef}>
                {glossaryItem?.GlossaryContent?.map(
                  (section) => (
                    <article key={section.Id}  id={`section-${section.Id}`} className="glossary-section">
                      <h2 dangerouslySetInnerHTML={sanitizeHtml( section.Title)}/>
                      <div dangerouslySetInnerHTML={sanitizeHtml( section.SectionHTML)}/>
                    </article>
                  )
                )}
                <Button variant="gradient" className="mb-4" onClick={goBack}>
                    ← Back to Glossary
                </Button>
            </Col>
            {/* Sidebar */}
            <Col lg={4}>
              <BlogDemoForm title="Book Free Demo Now!" className="blog-free-trial"/>
              <div className="position-sticky" style={{ top: "100px" }}>
                <div className="table-content">
                  <h3>Table of Contents</h3>
                  <ul className="list-unstyled time-line">
                    {navigation.map(
                      (item, index) => {
                        const activeIndex = navigation.findIndex( (n) => n.id === activeId);
                        const isActive = activeId === item.id;
                        const isBeforeActive = activeIndex !== -1 && index < activeIndex;
                        return (
                          <SideBarNavItem
                            key={item.id}
                            item={item}
                            isActive={isActive}
                            isBeforeActive={
                              isBeforeActive
                            }
                            onClick={() => { isClickScrollingRef.current = true; setActiveId(item.id); scrollToSection(item.id);
                              setTimeout(() => {
                                isClickScrollingRef.current = false;
                              }, 1000);
                            }}
                          />
                        );
                      }
                    )}
                  </ul>
                </div>
                <SocialNetwork socialNetwork="blog-social-network mt-4" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {glossaryFaqData?.length > 0 && (
          <>
            <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={glossaryFaqData} />
          </>
      )}
    </>
  );

};

export default GlossaryDetails;