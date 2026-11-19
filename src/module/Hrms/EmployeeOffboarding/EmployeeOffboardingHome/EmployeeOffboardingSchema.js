import { logos as ImagesUrl_logos, employeeOffboarding as ImagesUrl_offboarding } from "../../../../assets/images";
import { OffboardingFaq, EmployeeOffboardingHomeMeta } from "./EmployeeOffboardingData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/employee-offboarding-software";

export const EmployeeOffboardingSchemaData = [
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": pageUrl,
      "@id": `${pageUrl}#webpage`,
      "name": EmployeeOffboardingHomeMeta.title,
      "description": EmployeeOffboardingHomeMeta.description,
      "datePublished": "2026-11-04T00:00:00+05:30",
      "dateModified": "2026-11-13T00:00:00+05:30",
      "inLanguage": "en-IN",
      "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://www.qkrbiz.com",
        "@id": "https://www.qkrbiz.com/#website",
        "publisher": {
          "@type": "Corporation",
          "name": "Qkrbiz",
          "legalName": "Intec Infonet Pvt. Ltd.",
          "@id": "https://www.qkrbiz.com/#organization",
          "email": "sales@qkrbiz.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "postalCode": "110019",
            "streetAddress": "706, Manjusha Building, 57, Nehru Place",
            "addressLocality": "New Delhi"
          },
          "logo": {
            "@type": "ImageObject",
            "@id": "https://www.qkrbiz.com/#logo",
            "inLanguage": "en-IN",
            "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
            "caption": "Qkrbiz Logo"
          }
        }
      },
      "primaryImageOfPage": { "@id": `${pageUrl}#primaryimage` },
      "about": {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapplication`,
        "name": "QkrHR Employee Offboarding Software",
        "url": pageUrl,
        "browserRequirements": ["requires HTML5 support", "requires JavaScript"],
        "applicationCategory": "BusinessApplication",
        "applicationSuite": "Qkrbiz",
        "operatingSystem": ["Windows 8.1 or later", "macOS 10.13 or later", "Chromebook", "Android", "iOS"],
        "featureList": [
          "Exit applications by employee, manager or HR",
          "Immediate exit for abrupt departures",
          "Configurable resignation approval chain with withdrawal",
          "Notice period dashboard with automatic leave rules",
          "Confidential exit interviews with attrition trends",
          "Department clearance checklist with owners and due dates",
          "Last working day confirmation",
          "Automatic hand-over to full and final settlement",
          "Wage and gratuity due-date tracking"
        ],
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "image": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          "inLanguage": "en-IN",
          "url": `https://www.qkrbiz.com${ImagesUrl_offboarding.offboardingHeader}`,
          "caption": "QkrHR Employee Offboarding Software"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "3000",
          "highPrice": "5000",
          "offerCount": 2,
          "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com/" },
        { "@type": "ListItem", "position": 2, "name": "QkrHR HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
        { "@type": "ListItem", "position": 3, "name": "Employee Offboarding Software", "item": pageUrl }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "isPartOf": { "@id": `${pageUrl}#webpage` },
      "mainEntity": OffboardingFaq.map((faq) => ({
        "@type": "Question",
        "name": faq.Title,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim()
        }
      }))
    }
  ]
}
];

