import { EmployeeDataFAQ, EmployeeMeta } from "./EmployeeData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/employee-management";

export const EmployeeEchemaData = [
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
        "@id": `${pageUrl}#breadcrumb`,
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
            "name": "Best HRMS Software in India | HR Management System | QkrHR",
            "item": "https://www.qkrbiz.com/hrms-software"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Best Core HR Software | QkrHR",
            "item": "https://www.qkrbiz.com/hrms-software/core-hr"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Employee Database & Staff Records Management System | QkrHR",
            "item": pageUrl
          }
        ]
      },
       {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "name": EmployeeMeta.title,
        "description": EmployeeMeta.description,
        "url": pageUrl,
        "breadcrumb": {
          "@id": `${pageUrl}#breadcrumb`
        }
      },
       {
       "@type": "FAQPage",
       "@id": `${pageUrl}#faq`,
       "isPartOf": { "@id": `${pageUrl}#webpage` },
       "mainEntity": EmployeeDataFAQ.map((faq) => ({
         "@type": "Question",
         "name": faq.Title.trim(),
         "acceptedAnswer": {
           "@type": "Answer",
           "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
         }
       }))
       }
     ]
   }
]