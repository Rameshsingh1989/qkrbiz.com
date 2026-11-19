import { DocumentFAQ, DocumentMeta } from "./DocumentsData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/hr-document-management-system";

export const DocumentEchemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Qkrbiz",
    "url": "https://www.qkrbiz.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    "name": DocumentMeta.title,
    "url": pageUrl,
    "description": DocumentMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Qkrbiz",
      "url": "https://www.qkrbiz.com"
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
        "item": "https://www.qkrbiz.com/"
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
        "name": "Core HR",
        "item": "https://www.qkrbiz.com/hrms-software/core-hr"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "HR Document Management System",
        "item": pageUrl
      }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  "isPartOf": { "@id": `${pageUrl}#webpage` },
  "mainEntity": DocumentFAQ.map((faq) => ({
    "@type": "Question",
    "name": faq.Title.trim(),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    }
  }))
  }
]