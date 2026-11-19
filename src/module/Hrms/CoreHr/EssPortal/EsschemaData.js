import { logos as ImagesUrl_logos, essPortal as ImagesUrl_essPortal } from "../../../../assets/images";
import { ESSFAQ, EssPortalMeta } from "./EssPortalData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/employee-self-service-portal";

export const EsschemaData = [
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
          "sameAs": [
            "https://www.linkedin.com/products/qkrbiz-qkrhr/",
            "https://www.facebook.com/QkrHR/",
            "https://x.com/QkrBiz"
          ],
          "logo": {
            "@type": "ImageObject",
            "@id": "https://www.qkrbiz.com/hrms-software#logo",
            "inLanguage": "en-IN",
            "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrHRLogo}`,
            "width": 124,
            "height": 142,
            "caption": "QkrHR Logo"
          }
        }
      },
      {
        "@type": "WebPage",
        "url": pageUrl,
        "@id": `${pageUrl}#webpage`,
        "name": EssPortalMeta.title,
        "description": EssPortalMeta.description,
        "datePublished": "2020-10-24T01:51:29+05:30",
        "dateModified": "2026-11-13T10:00:00+05:30",
        "inLanguage": "en-IN",
        "significantLink": [
          "https://www.qkrbiz.com/hrms-software/core-hr",
          "https://www.qkrbiz.com/hrms-software/employee-management",
          "https://www.qkrbiz.com/hrms-software/hr-document-management-system",
          "https://www.qkrbiz.com/hrms-software/hr-workflow-management",
          "https://www.qkrbiz.com/hrms-software/hr-data-analytics"
        ],
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        },
        // Reference the full WebApplication node below; an inline stub here was
        // read by Google as a second, incomplete app (critical "two or more properties" error).
        "about": {
          "@id": `${pageUrl}#webapplication`
        },
        "keywords": "core hr software, employee management, HR workflow management, HR data analytics, best HR software India, QkrHR ESS portal, HR tools, Staff data management, HR software solutions"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QkrHR ESS | Employee Self-Service Portal",
    "url": pageUrl,
    "@id": `${pageUrl}#webapplication`,
    "browserRequirements": "requires HTML5 support, requires JavaScript",
    "sameAs": "https://signin.qkrbiz.com",
    "applicationCategory": "BusinessApplication",
    "applicationSuite": "Qkrbiz",
    "permissions": "may run only with an active internet connection",
    "operatingSystem": "Windows 8.1 or later, macOS 10.13 or later, Chromebook, Android, iOS",
    "memoryRequirements": "4 GB",
    "publisher": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "featureList": [
      "Employee Profile",
      "Track Time and Attendance",
      "Employee Finance",
      "Apply Leave",
      "Check Leave Approval",
      "Employee Directory",
      "Payslips"
    ],
    "image": {
      "@type": "ImageObject",
      "url": `https://www.qkrbiz.com${ImagesUrl_essPortal.essPortalHearder}`,
      "width": 2034,
      "height": 1444,
      "caption": "QkrHR Employee Self-Service Portal"
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
        "name": "Employee Self-Service Portal",
        "item": pageUrl
      }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  "isPartOf": { "@id": `${pageUrl}#webpage` },
  "mainEntity": ESSFAQ.map((faq) => ({
    "@type": "Question",
    "name": faq.Title.trim(),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    }
  }))
  }
];