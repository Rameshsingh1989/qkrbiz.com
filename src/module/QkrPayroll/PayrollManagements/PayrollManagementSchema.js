import { logos as ImagesUrl_logos, qkrpayroll as ImagesUrl_qkrpayroll } from "../../../assets/images";
import { PayrollManagementFaq , PayrollManagementsMeta } from "./PayrollManagementsData";

const pageUrl = "https://www.qkrbiz.com/payroll-software/management";

export const PayrollManagementSchemaData =  [

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
           "name": "QkrPayroll: Cloud Payroll Software for Indian Businesses",
           "item": "https://www.qkrbiz.com/payroll-software"
         },
         {
           "@type": "ListItem",
           "position": 3,
           "name": PayrollManagementsMeta.title.split(" | ")[0],
           "item": pageUrl
         }
       ]
     },
      {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": PayrollManagementFaq.map((faq) => ({
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
       "url": `https://www.qkrbiz.com${ImagesUrl_qkrpayroll.payrollManagmentHeader}`,
       "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrpayroll.payrollManagmentHeader}`,
       "width": 2034,
       "height": 1444,
       "caption": "QkrPayroll Management Software: One System for Everything Payroll"
     },
      {
       "@type": "SoftwareApplication",
       "name": "QkrPayroll",
       "url": pageUrl,
       "description": PayrollManagementsMeta.description,
       "applicationCategory": "BusinessApplication",
       "applicationSuite": "Qkrbiz",
       "operatingSystem": ["Windows", "macOS", "Android", "iOS"],
       "memoryRequirements": "4-GB",
       "permissions": "may run only with an active internet connection",
       "featureList": [
         "salary processing automation",
         "statutory compliance calculation",
         "multi-entity payroll management",
         "instant bank letter generation",
         "appraisals and salary revision management",
         "expense reimbursement integration",
         "arrears calculation",
         "flexible salary structures",
         "payslip generation",
         "increment letters"
       ],
       "image": { "@id": `${pageUrl}#primaryimage` }
     },
      {
       "@type": "Organization",
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
         "https://in.pinterest.com/qkrbiz/"
       ]
     }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qkrbiz.com/payroll-software/management#webpage",
    "url": "https://www.qkrbiz.com/payroll-software/management",
    "name": PayrollManagementsMeta.title,
    "description": PayrollManagementsMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" }
  }
];
