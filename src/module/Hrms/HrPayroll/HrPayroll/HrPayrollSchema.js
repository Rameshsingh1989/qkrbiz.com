import { logos as ImagesUrl_logos, hrPayroll as ImagesUrl_hrPayroll } from "../../../../assets/images";
import { HrPayrollFaq , HrPayrollMeta } from "./HrPayrollData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/hr-payroll-software";

export const HrPayrollSchemaData =  [
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": pageUrl,
      "@id": `${pageUrl}#webpage`,
      "name": HrPayrollMeta.title,
      "description": HrPayrollMeta.description,
      "datePublished": "2026-07-08T00:00:00+05:30",
      "dateModified": "2026-07-08T00:00:00+05:30",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://www.qkrbiz.com",
        "@id": "https://www.qkrbiz.com/#website",
        "publisher": {
          "@type": "Corporation",
          "name": "Qkrbiz",
          "legalName": "Intec Infonet Pvt. Ltd.",
          "@id": "https://www.qkrbiz.com/#organization",
          "foundingDate": "2010-10-07",
          "email": "sales@qkrbiz.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "postalCode": "110019",
            "streetAddress": "706, Manjusha Building, 57, Nehru Place",
            "addressLocality": "New Delhi"
          },
          "founder": {
            "@type": "Person",
            "name": "Rajeev Goel",
            "jobTitle": "MD",
            "sameAs": [
              "https://www.linkedin.com/in/rajeev-goel-a3748110/"
            ]
          },
          "sameAs": [
            "https://www.linkedin.com/products/qkrbiz-qkrhr/",
            "https://www.facebook.com/QkrHR/",
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
            "https://in.pinterest.com/qkrhrbesthrsoftware/"
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
      "about": {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapplication`,
        "name": "QkrHR: Best HR and Payroll Software in India",
        "url": pageUrl,
        "browserRequirements": ["requires HTML5 support", "requires JavaScript"],
        "sameAs": "https://signin.qkrbiz.com/",
        "applicationCategory": "BusinessApplication",
        "applicationSuite": "Qkrbiz",
        "permissions": "may run only with an active internet connection",
        "operatingSystem": ["Windows 8.1 or later", "macOS 10.13 or later", "Chromebook"],
        "memoryRequirements": "4-GB",
        "featureList": [
          "Integrated HR and Payroll on a Single Platform",
          "Automated Statutory Compliance - PF, ESI, TDS, PT, LWF",
          "Attendance and Leave Auto-Sync with Payroll",
          "Multi-Entity Payroll Management",
          "GPS and Biometric Attendance Integration",
          "Configurable Salary Structures and CTC Components",
          "Digital Payslip Generation and Distribution",
          "Full and Final Settlement Calculations",
          "Form 16 and TDS Return Filing",
          "7-Day Employee Go-Live with WhatsApp POC Support"
        ],
        "copyrightHolder": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "creator": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "maintainer": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          "inLanguage": "en-IN",
          "url": `https://www.qkrbiz.com${ImagesUrl_hrPayroll.hrPayrollHeader}`,
          "caption": "Best HR and Payroll Software in India - QkrHR"
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
      }
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
          "name": "QkrHR HRMS Software",
          "item": "https://www.qkrbiz.com/hrms-software"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": HrPayrollMeta.title.split(" | ")[0],
          "item": pageUrl
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "isPartOf": { "@id": `${pageUrl}#webpage` },
      "mainEntity": HrPayrollFaq.map((faq) => ({
        "@type": "Question",
        "name": faq.Title,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
        }
      }))
    }
  ]
}

]
