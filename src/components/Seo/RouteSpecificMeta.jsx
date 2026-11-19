import { useHead } from "@unhead/react";
import { QkrbizCommonSchema } from "./QkrbizCommonSchema";
import { useLocation } from "react-router";
import { QkrbizOgurl as ImagesUrl_QkrbizOgurl } from "../../assets/images";

const SITE_URL = import.meta.env.VITE_SITE_URL || "http://localhost:3000";

const stripSlash = (str) => str && str.length > 0 && str.endsWith("/") ? str.slice(0, -1) : str;

export default function RouteSpecificMeta({ title, description, canonical: canonicalProp, canonicalUrl, image, SchemaData}) {

  const { pathname, search } = useLocation();
   // Fall back to the current route when no canonical prop is passed.
  const canonical = canonicalProp || `${pathname}${search || ""}`;

  // Use pathname only for route detection
  const path = canonical ? canonical.startsWith("http") ? new URL(canonical).pathname : canonical.split("?")[0].split("#")[0] : "/";
  const segments = path.split("/").filter(Boolean);
  const isBlogListPage = path === "/hrms-software/qkrhr-blogs";
  
  // no index paths
  const noindexPaths = ["/thank-you"];
  const currentPath = canonical ? canonical.startsWith("http") ? new URL(canonical).pathname : stripSlash(canonical.split("?")[0].split("#")[0]): "/";
  const isNoindex = noindexPaths.includes(currentPath);

  // ❌ Exclude sections
  const excludedSlugs = [
    "hr-glossary", 
    "core-hr", 
    "employee-onboarding-software",
    "employee-offboarding-software",
    "field-force-automation",
    "leave-and-attendance-management", 
    "hr-payroll-software", 
    "employee-expense-management", 
    "employee-engagement", 
    "employee-task-management", 
    "qkrhr-pricing", 
    "hr-software-small-business",
    "hr-payroll-software-manufacturing-companies",
    "hr-payroll-software-in-delhi",
    "hr-payroll-software-mumbai",
    "hr-payroll-software-hyderabad",
    "hr-payroll-software-bengaluru",
    "hr-payroll-software-chennai",
    "hr-payroll-software-pune",
    "hr-payroll-software-ahmedabad",
    "hr-payroll-software-kolkata",
    "hr-payroll-software-jaipur",
  ];

  // Blog detail page
  const isBlogDetailPage =
    segments.length === 2 &&             
    segments[0] === "hrms-software" &&
    !excludedSlugs.includes(segments[1]) && 
    segments[1] !== "qkrhr-blogs";  

  // RSS
  const showRssFeed = isBlogListPage || isBlogDetailPage;

  // FULL CANONICAL
  const fullCanonical = canonical ? canonical.startsWith("http") ? stripSlash(canonical) : `${SITE_URL}${stripSlash(canonical)}` : `${SITE_URL}${currentPath}`;

  // <link rel="canonical"> only: CMS override (e.g. blog CanonicalURL) when non-empty, else fullCanonical
  const customCanonical = typeof canonicalUrl === "string" ? canonicalUrl.trim() : "";
  const canonicalHref = customCanonical ? customCanonical.startsWith("http") ? customCanonical : `${SITE_URL}${customCanonical.startsWith("/") ? "" : "/"}${customCanonical}` : fullCanonical;

  // SOCIAL IMAGE
  const socialImage = ImagesUrl_QkrbizOgurl;
  const fullImage = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : (socialImage.startsWith("http") ? socialImage : `${SITE_URL}${socialImage}`);

  // const schemaToUse = SchemaData || "";
  const schemaToUse = SchemaData || QkrbizCommonSchema;

  // ROBOTS
  const robotsContent = isNoindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  useHead({
    title,
    meta: [
      // {/* Title */}
      title       && { name: "title",               content: title },
      description && { name: "description",         content: description },

      // {/* Open Graph */}
      { property: "og:locale",                      content: "en_IN" },
      { property: "og:site_name",                   content: "Qkrbiz" },
      { property: "og:url",                         content: fullCanonical },
      { property: "og:type",                        content: "website" },
      title       && { property: "og:title",        content: title },
      description && { property: "og:description",  content: description },
      fullImage   && { property: "og:image",        content: fullImage },
      { property: "og:image:type",                  content: "image/webp" },
      { property: "og:image:width",                 content: "1200" },
      { property: "og:image:height",                content: "630" },
      title       && { property: "og:image:alt",    content: title },
      { property: "article:publisher",              content: "https://www.facebook.com/qkrhr.software/" },

	    // {/* Twitter */}
      { name: "twitter:card",                       content: "summary_large_image" },
      { name: "twitter:site",                       content: "@QkrbizDotCom" },
      { name: "twitter:creator",                    content: "@QkrbizDotCom" },
      { name: "twitter:url",                        content: fullCanonical },
      title       && { name: "twitter:title",       content: title },
      description && { name: "twitter:description", content: description },
      fullImage   && { name: "twitter:image",       content: fullImage },
      title       && { property: "twitter:image:alt",    content: title },

      // {/* ✅ Robots — no fragments, direct children */}
      { name: "robots",                             content: robotsContent },
      { name: "googlebot",                          content: robotsContent },
    ].filter(Boolean),
    link: [

	    // {/* Canonical */}
      { rel: "canonical", href: canonicalHref, key: "canonical" },

	     // {/* RSS */}
      showRssFeed && {
        rel: "alternate",
        type: "application/rss+xml",
        title: "QkrHR Blog RSS",
        href: `${SITE_URL}/hrms-software/qkrhr-blogs/rss`,
        key: "rss-feed",
      },
    ].filter(Boolean),

    // {/* ✅ JSON-LD — dangerouslySetInnerHTML required for SSR */}
    script: schemaToUse
      ? [{ type: "application/ld+json", innerHTML: JSON.stringify(schemaToUse), key: "page-schema" }]
      : [],
  });

  return null;
}

