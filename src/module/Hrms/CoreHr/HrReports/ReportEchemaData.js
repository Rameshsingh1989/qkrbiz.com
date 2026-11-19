import { HrReportsMeta } from "./HrReportsData";
export const ReportEchemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Qkrbiz",
    "url": "https://www.qkrbiz.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": HrReportsMeta.title,
    "url": "https://www.qkrbiz.com/hrms-software/hr-data-analytics",
    "description": HrReportsMeta.description,
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
        "name": "HR Data Analytics",
        "item": "https://www.qkrbiz.com/hrms-software/hr-data-analytics"
      }
    ]
  }
]