import {logos as ImagesUrl_logos} from "@/assets/images";

export const HrBlogMeta = {
  title: "HR Blog | Explore All HRMS-Related Insights and Solutions - QkrHR",
  description: "Read the latest HR blogs, payroll compliance guides, workforce tips, and HRMS insights from industry experts on the official QkrHR knowledge blog.",
};
export const HrBlogSchema = [
 {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Qkrbiz",
        "url": "https://www.qkrbiz.com",
        "@id": "https://www.qkrbiz.com/#website"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.qkrbiz.com/hrms-software/qkrhr-blogs#webpage",
        "url": "https://www.qkrbiz.com/hrms-software/qkrhr-blogs",
        "name": HrBlogMeta.title,
        "description": HrBlogMeta.description,
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "mainEntityOfPage": {
      "@id": "https://www.qkrbiz.com/hrms-software/qkrhr-blogs#webpage"
    },
    "name": HrBlogMeta.title,
    "description": HrBlogMeta.description,
    "url": "https://www.qkrbiz.com/hrms-software/qkrhr-blogs",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "Qkrbiz",
      "logo": {
        "@type": "ImageObject",
        "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "width": 124,
        "height": 142
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.qkrbiz.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "HRMS Software",
        "item": "https://www.qkrbiz.com/hrms-software"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "QkrHR Blogs",
        "item": "https://www.qkrbiz.com/hrms-software/qkrhr-blogs"
      }
    ]
  }

];