import { logos as ImagesUrl_logos, fieldForceAuto as ImagesUrl_fieldForceAuto } from "../../../assets/images";
import { FieldForceManagementFaq , QkrvisitHomeMeta } from "./QkrvisitHomeData";

const pageUrl = "https://www.qkrbiz.com/field-force-management-software";

export const QkrvisitHomeSchemaData = [
   {
     "@context": "https://schema.org",
     "@graph": [
       {
         "@type": "WebSite",
         "name": "Qkrbiz",
         "url": "https://www.qkrbiz.com"
       },
       {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Qkrbiz | Best Business Management Software | ERP Cloud Solutions",
            "item": "https://www.qkrbiz.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": QkrvisitHomeMeta.title.split(" | ")[0],
            "item": pageUrl
          }
        ]
      },
       {
       "@type": "FAQPage",
       "@id": `${pageUrl}#faq`,
       "mainEntity": FieldForceManagementFaq.map((faq) => ({
         "@type": "Question",
         "name": faq.Title.trim(),
         "acceptedAnswer": {
           "@type": "Answer",
           "text": faq.Content.replace(/<\/?(a|span|strong|b|em|i)\b[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
         }
       }))
       },
       {
        "@type": "Corporation",
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "foundingDate": "2010-10-07",
        "email": "sales@qkrbiz.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "706, Manjusha Building, 57, Nehru Place",
          "addressLocality": "New Delhi",
          "postalCode": "110019",
          "addressCountry": {
            "@type": "Country",
            "name": "IN"
          }
        },
        "founder": {
          "@type": "Person",
          "name": "Rajeev Goel",
          "jobTitle": "MD"
        },
        "sameAs": [
          "https://www.linkedin.com/in/rajeev-goel-a3748110/",
          "https://www.linkedin.com/products/qkrbiz-qkrhr/",
          "https://www.facebook.com/qkrhr.software/",
          "https://x.com/QkrBiz",
          "https://www.hrmsworld.com/qkrhr-hrms-software.html",
          "https://www.getapp.com/hr-employee-management-software/a/qkrhr/",
          "https://www.crunchbase.com/organization/qkrhr",
          "https://www.techimply.com/profile/qkrhr",
          "https://www.softwareadvice.com/product/522919-QkrHR/",
          "https://www.capterra.in/software/1070742/QkrHR",
          "https://www.softwaresuggest.com/qkrhr",
          "https://softwarepath.com/software/qkrhr-hrms-software",
          "https://crozdesk.com/software/qkrhr",
          "https://www.techjockey.com/detail/qkrhr",
          "https://www.g2.com/products/qkrhr/reviews",
          "https://www.wesuggestsoftware.com/hr-software/qkrhr",
          "https://technologycounter.com/products/qkrhr",
          "https://www.softwareworld.co/software/qkrhr-reviews",
          "https://in.pinterest.com/qkrbiz/"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrVisitLogo}`,
          "width": 124,
          "height": 142
        }
      },
       {
        "@type": "WebApplication",
        "name": "QkrVisit",
        "description": QkrvisitHomeMeta.description,
        "applicationCategory": "BusinessApplication",
        "applicationSuite": "Qkrbiz",
        "operatingSystem": [
          "Windows 8.1 or later",
          "macOS 10.13 or later",
          "Chromebook"
        ],
        "memoryRequirements": "4-GB",
        "permissions": "may run only with an active internet connection",
        "browserRequirements": [
          "requires HTML5 support",
          "requires JavaScript"
        ],
        "sameAs": "https://signin.qkrbiz.com/",
        "url": pageUrl,
        "featureList": [
          "field force management software",
          "field force automation software",
          "field force management system",
          "best field force management software",
          "field force software",
          "hr management software",
          "employee self-service portal",
          "time and attendance management",
          "expense management",
          "payroll management",
          "hr workflow management",
          "compliance management",
          "GPS/mobile attendance",
          "real-time location tracking",
          "visit scheduling and logs"
        ],
        "image": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          "inLanguage": "en-IN",
          "url": `https://www.qkrbiz.com${ImagesUrl_fieldForceAuto.fieldForceHeader}`,
          "width": 2034,
          "height": 1444,
          "caption": "QkrHR is the best HRMS Software in India to manage HR tasks."
        }
      }
     ]
   },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qkrbiz.com/field-force-management-software#webpage",
    "url": "https://www.qkrbiz.com/field-force-management-software",
    "name": QkrvisitHomeMeta.title,
    "description": QkrvisitHomeMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" }
  }
];
