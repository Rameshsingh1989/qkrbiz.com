import { useEffect, useState } from "react";
import { getBlogs } from "../../../../services/blogService";
import { generateRssXml } from "../../../../utility/RSS/generateRssXml";

const RssXml = ({ initialRssXml }) => {

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.qkrbiz.com";

  const [rssXml, setRssXml] = useState(initialRssXml || "");
  const [loading, setLoading] = useState(!initialRssXml);

  useEffect(() => {
    document.body.style.padding = "0";
    /* If SSR already provided XML → skip API */
    if (initialRssXml) {
      setLoading(false);
      return;
    }
    /* CSR fallback only */
    const loadRSS = async () => {
      try {
        const blogs = await getBlogs();
        console.log("blogs:", blogs);
        const xml = generateRssXml(siteUrl, blogs);
        setRssXml(xml);
      } catch (err) {
        console.error("RSS Error:", err);
        setRssXml(
          `<?xml version="1.0"?><error>${err.message}</error>`
        );
      } finally {
        setLoading(false);
      }
    };
    loadRSS();
  }, [initialRssXml, siteUrl]);
  return (
    <pre
      style={{
        margin: 0,
        padding: 10,
        fontSize: 13,
        whiteSpace: "pre-wrap",
        background: "#fff"
      }}
    >
      {loading ? "Loading RSS..." : rssXml}
    </pre>
  );
};

export default RssXml;
