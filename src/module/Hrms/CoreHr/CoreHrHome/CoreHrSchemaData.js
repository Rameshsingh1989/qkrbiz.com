import { logos as ImagesUrl_logos, coreHr as ImagesUrl_coreHr } from "../../../../assets/images";
import { CoreHRFAQ, CoreHrHomeMeta } from "./CoreHrHomeData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/core-hr";

export const CoreHrSchemaData = [

    {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Qkrbiz",
        "url": "https://www.qkrbiz.com",
        "@id": "https://www.qkrbiz.com/#website",
        "publisher": {
          "@type": "Organization",
          "name": "Qkrbiz",
          "legalName": "Intec Infonet Pvt. Ltd.",
          "@id": "https://www.qkrbiz.com/#organization",
          "foundingDate": "2010-10-07",
          "email": "sales@qkrbiz.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Delhi",
            "addressCountry": "IN",
            "postalCode": "110019",
            "streetAddress": "706, Manjusha Building, 57, Nehru Place"
          },
          "founder": {
            "@type": "Person",
            "name": "Rajeev Goel",
            "jobTitle": "MD",
            "sameAs": ["https://www.linkedin.com/in/rajeev-goel-a3748110/"]
          },
          "sameAs": [
            "https://www.linkedin.com/products/qkrbiz-qkrhr/",
            "https://www.facebook.com/QkrHR/",
            "https://x.com/QkrBiz"
          ],
          "logo": {
            "@type": "ImageObject",
            "@id": "https://www.qkrbiz.com/#logo",
            "inLanguage": "en-IN",
            "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrHRLogo}`,
            "width": 124,
            "height": 142,
            "caption": "QkrHR Logo"
          }
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": pageUrl,
    "@id": `${pageUrl}#webpage`,
    "name": CoreHrHomeMeta.title,
    "description": CoreHrHomeMeta.description,
    "datePublished": "2020-10-24T01:51:29+05:30",
    "dateModified": "2026-11-13T10:00:00+05:30",
    "inLanguage": "en-IN",
    "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
    "primaryImageOfPage": { "@id": `${pageUrl}#primaryimage` },
    "significantLink": [
      "https://www.qkrbiz.com/hrms-software/employee-management",
      "https://www.qkrbiz.com/hrms-software/employee-self-service-portal",
      "https://www.qkrbiz.com/hrms-software/hr-document-management-system",
      "https://www.qkrbiz.com/hrms-software/hr-workflow-management",
      "https://www.qkrbiz.com/hrms-software/hr-data-analytics"
    ],
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
    "about": { "@id": `${pageUrl}#webapplication` },
    "keywords": "core hr software, employee management, HR workflow management, HR data analytics, best HR software India, QkrHR ESS portal, HR tools, Staff data management, HR software solutions"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QkrHR",
    "url": pageUrl,
    "@id": `${pageUrl}#webapplication`,
    "browserRequirements": "requires HTML5 support, requires JavaScript",
    "sameAs": "https://signin.qkrbiz.com",
    "applicationCategory": "BusinessApplication",
    "applicationSuite": "Qkrbiz",
    "permissions": "may run only with an active internet connection",
    "operatingSystem": "Windows 8.1 or later, macOS 10.13 or later, Chromebook, Android, iOS",
    "memoryRequirements": "4 GB",
    "featureList": [
      "Core HR management", "employee lifecycle management", "employee document management",
      "workflow automation", "data analytics and reporting", "compliance tracking",
      "leave management", "asset tracking", "roles and permissions",
      "attendance and time tracking", "audit trail", "generate letters",
      "custom forms", "organization structure", "employee self service"
    ],
    "copyrightHolder": { "@id": "https://www.qkrbiz.com/#organization" },
    "creator": { "@id": "https://www.qkrbiz.com/#organization" },
    "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
    "maintainer": { "@id": "https://www.qkrbiz.com/#organization" },
    "image": {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      "inLanguage": "en-IN",
      "url": `https://www.qkrbiz.com${ImagesUrl_coreHr.coreHrPge}`,
      "width": 2034,
      "height": 1444,
      "caption": "Automate critical HR tasks with QkrHR Software India"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "3000",
      "highPrice": "5000",
      "offerCount": 2,
      "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
      "offers": [
        {
          "@type": "Offer",
          "name": "Essential",
          "price": "3000",
          "priceCurrency": "INR",
          "description": "₹3,000 per month for up to 50 users; ₹40 per additional user per month.",
          "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "3000",
            "priceCurrency": "INR",
            "unitText": "MONTH"
          }
        },
        {
          "@type": "Offer",
          "name": "Foundation",
          "price": "5000",
          "priceCurrency": "INR",
          "description": "₹5,000 per month for up to 50 users; ₹80 per additional user per month.",
          "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "5000",
            "priceCurrency": "INR",
            "unitText": "MONTH"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com/" },
      { "@type": "ListItem", "position": 2, "name": "HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
      { "@type": "ListItem", "position": 3, "name": "Core HR Software", "item": pageUrl }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  "isPartOf": { "@id": `${pageUrl}#webpage` },
  "mainEntity": CoreHRFAQ.map((faq) => ({
    "@type": "Question",
    "name": faq.Title.trim(),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    }
  }))
  }
];