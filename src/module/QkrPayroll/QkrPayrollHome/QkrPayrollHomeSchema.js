import { logos as ImagesUrl_logos, qkrpayroll as ImagesUrl_qkrpayroll } from "../../../assets/images";
import { PayrollFAQ, QkrPayrollHomeMeta } from "./QkrPayrollHomeData";

const pageUrl = "https://www.qkrbiz.com/payroll-software";

export const QkrPayrollHomeSchema = [
 {
   "@context": "https://schema.org",
   "@graph": [
     {
       "@type": "WebSite",
       "@id": "https://www.qkrbiz.com/#website",
       "name": "Qkrbiz",
       "url": "https://www.qkrbiz.com/",
       "inLanguage": "en-IN",
       "publisher": { "@id": "https://www.qkrbiz.com/#organization" }
     },
     {
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
           "name": "Payroll Software",
           "item": pageUrl
         }
       ]
     },
     {
     "@type": "FAQPage",
     "@id": `${pageUrl}#faq`,
     "mainEntity": PayrollFAQ.map((faq) => ({
       "@type": "Question",
       "name": faq.Title.trim(),
       "acceptedAnswer": {
         "@type": "Answer",
         "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
       }
     }))
     },
     {
       "@type": "ImageObject",
       "@id": `${pageUrl}#primaryimage`,
       "inLanguage": "en-IN",
       "url": `https://www.qkrbiz.com${ImagesUrl_qkrpayroll.qkrpayrollHeader}`,
       "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrpayroll.qkrpayrollHeader}`,
       "width": 2034,
       "height": 1444,
       "caption": "QkrPayroll Software: Automate Salary, Tax & Compliance"
     },
     {
       "@type": "SoftwareApplication",
       "@id": `${pageUrl}#software`,
       "name": "QkrPayroll",
       "url": pageUrl,
       "dateModified": "2026-07-13T00:00:00+05:30",
       "description": "Simplify salary processing, PF, ESI, TDS, PT & compliance with QkrPayroll. Cloud-based payroll software for Indian businesses. Get a free demo.",
       "applicationCategory": "BusinessApplication",
       "applicationSuite": "Qkrbiz",
       "operatingSystem": ["Windows", "macOS", "Android", "iOS"],
       "memoryRequirements": "4-GB",
       "permissions": "may run only with an active internet connection",
       "featureList": [
         "salary calculation automation",
         "PF compliance automation",
         "ESI compliance automation",
         "TDS calculation",
         "Professional Tax calculation",
         "Labour Welfare Fund",
         "payslip delivery",
         "multiple pay groups support",
         "3-stage payroll locking",
         "cloud-based platform"
       ],
       "image": { "@id": `${pageUrl}#primaryimage` },
       "publisher": { "@id": "https://www.qkrbiz.com/#organization" }
     },
     {
       "@type": "Organization",
       "@id": "https://www.qkrbiz.com/#organization",
       "name": "Qkrbiz",
       "legalName": "Intec Infonet Pvt. Ltd.",
       "url": "https://www.qkrbiz.com/",
       "email": "sales@qkrbiz.com",
       "logo": {
         "@type": "ImageObject",
         "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrPayrollLogo}`,
         "width": 124,
         "height": 142
       },
       "foundingDate": "2010-10-07",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "706, Manjusha Building, 57, Nehru Place",
         "addressLocality": "New Delhi",
         "postalCode": "110019",
         "addressCountry": "IN"
       },
       "founder": {
         "@type": "Person",
         "name": "Rajeev Goel",
         "jobTitle": "Managing Director",
         "sameAs": ["https://www.linkedin.com/in/rajeev-goel-a3748110/"]
       },
       "sameAs": [
         "https://www.linkedin.com/products/qkrbiz-qkrhr/",
         "https://www.facebook.com/qkrhr.software/",
         "https://x.com/QkrBiz",
         "https://in.pinterest.com/qkrbiz/"
       ]
     }
   ]
 },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qkrbiz.com/payroll-software#webpage",
    "url": "https://www.qkrbiz.com/payroll-software",
    "name": QkrPayrollHomeMeta.title,
    "description": QkrPayrollHomeMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" }
  }
];
