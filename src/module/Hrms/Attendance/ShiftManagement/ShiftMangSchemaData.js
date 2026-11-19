import { logos as ImagesUrl_logos, shiftManagements as ImagesUrl_shiftManagements } from "@/assets/images";
import { ShiftManagementFAQ , ShiftManagementMeta } from "./ShiftManagementData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/shift-management-system";

export const ShiftMangSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Qkrbiz",
        "url": "https://www.qkrbiz.com"
      },
      {
      "@type": "WebPage",
      "url": pageUrl,
      "@id": `${pageUrl}#webpage`,
      "name": ShiftManagementMeta.title,
      "description": ShiftManagementMeta.description,
      "datePublished": "2024-11-18T01:51:29+05:30",
      "dateModified": "2026-11-13T10:00:00+05:30",
      "significantLink": [
        "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management",
        "https://www.qkrbiz.com/hrms-software/time-and-attendance-system",
        "https://www.qkrbiz.com/hrms-software/leave-management-system"
      ],
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
            "addressLocality": "New Delhi",
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
        "name": ShiftManagementMeta.title,
        "url": pageUrl,
        "@id": `${pageUrl}#webapplication`,
        "browserRequirements": ["requires HTML5 support", "requires JavaScript"],
        "sameAs": "https://signin.qkrbiz.com",
        "applicationCategory": "BusinessApplication",
        "applicationSuite": "Qkrbiz",
        "permissions": "may run only with an active internet connection",
        "operatingSystem": ["Windows 8.1 or later", "macOS 10.13 or later", "Chromebook"],
        "memoryRequirements": "4-GB",
        "featureList": [
          "Manage fixed or variable shifts.",
          "Flexible Scheduling Pattern",
          "Swapping of shifts",
          "Track available Leave Balances",
          "Easy and Customizable employee work scheduling software",
          "Integrating Shift with payroll calculation.",
          "Generate reports and analytics of shift patterns",
          "Manage complex shift patterns",
          "Set up attendance regularization and deviation policies",
          "Customize your comp-off policy",
          "Team shift calendar"
        ],
        "copyrightHolder": { "@id": "https://www.qkrbiz.com/#organization" },
        "creator": { "@id": "https://www.qkrbiz.com/#organization" },
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "maintainer": { "@id": "https://www.qkrbiz.com/#organization" },
        "image": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          "inLanguage": "en-IN",
          "url": `https://www.qkrbiz.com${ImagesUrl_shiftManagements.shiftManagementHeader}`,
          "width": 2034,
          "height": 1444,
          "caption": "With QkrHR shift scheduler software, quickly create multiple shifts"
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
        { "@type": "ListItem", "position": 1, "name": "Qkrbiz | Best Business Management Software | ERP Cloud Solutions", "item": "https://www.qkrbiz.com/" },
        { "@type": "ListItem", "position": 2, "name": "Best HRMS Software in India | HR Management System | QkrHR", "item": "https://www.qkrbiz.com/hrms-software" },
        { "@type": "ListItem", "position": 3, "name": "QkrHR Leave and Attendance management software", "item": "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management" },
        { "@type": "ListItem", "position": 4, "name": ShiftManagementMeta.title.split(" | ")[0], "item": pageUrl }
      ]
    },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": ShiftManagementFAQ.map((faq) => ({
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