import { WorkflowsFAQ, WorkflowsMeta } from "./WorkflowsData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/hr-workflow-management";

export const WorkflowEchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Qkrbiz",
        "url": "https://www.qkrbiz.com"
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "name": WorkflowsMeta.title,
        "url": pageUrl,
        "description": WorkflowsMeta.description,
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Qkrbiz",
          "url": "https://www.qkrbiz.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": WorkflowsFAQ.map((faq) => ({
          "@type": "Question",
          "name": faq.Title.trim(),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
          }
        }))
      }
    ]
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
        "name": "HR Workflow Management",
        "item": pageUrl
      }
    ]
  }
];
