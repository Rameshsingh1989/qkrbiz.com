import { logos as ImagesUrl_logos, reportsAnalytics as ImagesUrl_reportsAnalytics } from "../../../assets/images";
import { ReportsAnalyticsFaq , RepotsAnalyticsMeta } from "./RepotsAnalyticsData";

const pageUrl = "https://www.qkrbiz.com/field-force-management-software/reports-analytics";

export const RepotsAnalyticsSchemaData = [

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
           "name": "Best Field Force Management Software in India | QkrVisit",
           "item": "https://www.qkrbiz.com/field-force-management-software"
         },
         {
           "@type": "ListItem",
           "position": 3,
           "name": RepotsAnalyticsMeta.title.split(" | ")[0],
           "item": pageUrl
         }
       ]
 	},
       {
       "@type": "FAQPage",
       "@id": `${pageUrl}#faq`,
       "mainEntity": ReportsAnalyticsFaq.map((faq) => ({
         "@type": "Question",
         "name": faq.Title.trim(),
         "acceptedAnswer": {
           "@type": "Answer",
           "text": faq.Content.replace(/<\/?(a|span|strong|b|em|i)\b[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
         }
       }))
       },
       {
       "@type": "ImageObject",
       "@id": `${pageUrl}#primaryimage`,
       "inLanguage": "en-IN",
       "url": `https://www.qkrbiz.com${ImagesUrl_reportsAnalytics.reportsAnalyticsHeader}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_reportsAnalytics.reportsAnalyticsHeader}`,
       "width": 2034,
       "height": 1444,
       "caption": RepotsAnalyticsMeta.title
 	},
       {
       "@type": "SoftwareApplication",
       "name": "QkrVisit",
       "url": pageUrl,
       "description": RepotsAnalyticsMeta.description,
       "applicationCategory": "BusinessApplication",
       "applicationSuite": "Qkrbiz",
       "operatingSystem": [
         "Windows",
         "macOS",
         "Android",
         "iOS"
       ],
       "memoryRequirements": "4-GB",
       "permissions": "may run only with an active internet connection",
       "featureList": [
         "Reports & Analytics"
       ],
       "image": { "@id": `${pageUrl}#primaryimage` }
 	},
       {
       "@type": "Organization",
       "name": "Qkrbiz",
       "legalName": "Intec Infonet Pvt. Ltd.",
       "url": "https://www.qkrbiz.com",
       "email": "sales@qkrbiz.com",
       "logo": {
         "@type": "ImageObject",
         "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrVisitLogo}`,
         "width": 124,
         "height": 142
       },
       "foundingDate": "2010-10-07",
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
         "jobTitle": "Managing Director"
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
       ]
 	}
     ]
   },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qkrbiz.com/field-force-management-software/reports-analytics#webpage",
    "url": "https://www.qkrbiz.com/field-force-management-software/reports-analytics",
    "name": RepotsAnalyticsMeta.title,
    "description": RepotsAnalyticsMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" }
  }
];
