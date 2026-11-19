import { logos as ImagesUrl_logos, leaveManagement as ImagesUrl_leaveManagement } from "../../../../assets/images";
import { LeaveManagementFAQ , LeaveManagementMeta } from "./LeaveManagementData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/leave-management-system";

export const LeaveManagementSchemaData = [
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
      "name": LeaveManagementMeta.title,
      "description": LeaveManagementMeta.description,
      "datePublished": "2024-11-18T01:51:29+05:30",
      "dateModified": "2026-09-23T00:00:00+05:30",
      "significantLink": [
        "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management",
        "https://www.qkrbiz.com/hrms-software/time-and-attendance-system",
        "https://www.qkrbiz.com/hrms-software/shift-management-system"
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
            "postalCode": "110019",
            "streetAddress": "706, Manjusha Building, 57, Nehru Place",
            "addressLocality": "New Delhi"
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
        "@id": `${pageUrl}#webapplication`,
        "name": LeaveManagementMeta.title,
        "url": pageUrl,
        "browserRequirements": ["requires HTML5 support", "requires JavaScript"],
      "sameAs": "https://signin.qkrbiz.com/",
        "applicationCategory": "BusinessApplication",
        "applicationSuite": "Qkrbiz",
        "permissions": "may run only with an active internet connection",
        "operatingSystem": ["Windows 8.1 or later", "macOS 10.13 or later", "Chromebook"],
        "memoryRequirements": "4-GB",
        "featureList": [
        "Custom leave types — Casual, Sick, Earned, Maternity, Paternity and more",
          "Automated monthly accrual with pro-ration for joiners and exits",
          "Multi-level leave approval workflows with conditional routing",
          "Auto-escalation for stale approval requests",
          "Sandwich leave policy with configurable sub-rules",
        "Loss of Pay (LOP) tracking with direct payroll integration",
        "Leave regularization and exception handling workflows",
          "Compensatory off management with expiry and encashment rules",
          "Carry-forward, lapse and encashment automation at year-end",
        "Leave grants with maker-checker dual authorization",
          "Real-time leave balance visible to employees before applying",
        "Leave liability and utilization reports for finance teams",
          "Multi-location and multi-entity leave policy configuration",
          "Restricted holiday (floater leave) management"
      ],
        "copyrightHolder": { "@id": "https://www.qkrbiz.com/#organization" },
        "creator": { "@id": "https://www.qkrbiz.com/#organization" },
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "maintainer": { "@id": "https://www.qkrbiz.com/#organization" },
        "image": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          "inLanguage": "en-IN",
          "url": `https://www.qkrbiz.com${ImagesUrl_leaveManagement.leaveManagementHeader}`,
          "width": 1200,
          "height": 630,
          "caption": "QkrHR online leave management system — custom policies, auto accrual and payroll integration"
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
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-define`,
      "url": "https://www.qkrbiz.com/assets/leave-management-define-DVBG3SHd.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/leave-management-define-DVBG3SHd.webp",
      "caption": "Define any leave type your organization needs in QkrHR",
      "description": "QkrHR supports standard paid leaves, Loss of Pay, incident-based grants (Maternity, Paternity, Bereavement, Marriage) and fully custom leave types — each with its own accrual rule, cap, eligibility and documentation requirement."
  },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-build`,
      "url": "https://www.qkrbiz.com/assets/leave-management-build-BbH-EjKH.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/leave-management-build-BbH-EjKH.webp",
      "caption": "Build a leave policy bundle once — QkrHR applies it to the whole group",
      "description": "A leave policy in QkrHR picks which types apply, sets the year-end date, and adds cross-type rules including clubbing restrictions, sandwich policy and year-end carry-forward, lapse and encashment logic."
  },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-accrue`,
      "url": "https://www.qkrbiz.com/assets/leave-management-assign-accrue-C8d47wrg.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/leave-management-assign-accrue-C8d47wrg.webp",
      "caption": "Assign leave policies and auto-accrue balances every month in QkrHR",
      "description": "Map a leave policy to hundreds of employees by department, grade or location in one action. From that moment, accrual runs automatically — pro-rated for joiners and exits, logged line by line."
  },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-approve`,
      "url": "https://www.qkrbiz.com/assets/leave-management-approve-U9FwNLm3.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/leave-management-approve-U9FwNLm3.webp",
      "caption": "Multi-level leave approval workflow with auto-escalation in QkrHR",
      "description": "Configure 1 to N approval levels by role, manager or user. Long leaves go down a stricter path. Stale requests escalate automatically. Managers approve from a single inbox — no missed or lost requests."
  },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-report`,
      "url": "https://www.qkrbiz.com/assets/leave-management-report-BkWwbTt5.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/leave-management-report-BkWwbTt5.webp",
      "caption": "Real-time leave visibility and workforce insights in QkrHR",
      "description": "QkrHR leave reports include team calendar, leave liability (financial value of unused paid leave), utilization by type and group, and a pending approvals dashboard — all filterable by team, department, date or location."
  },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com/" },
      { "@type": "ListItem", "position": 2, "name": "QkrHR HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
      { "@type": "ListItem", "position": 3, "name": "HR and leave and attendance management system | Qkrhr", "item": "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management" },
      { "@type": "ListItem", "position": 4, "name": LeaveManagementMeta.title.split(" | ")[0], "item": pageUrl }
    ]
  },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "isPartOf": { "@id": `${pageUrl}#webpage` },
      "mainEntity": LeaveManagementFAQ.map((faq) => ({
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