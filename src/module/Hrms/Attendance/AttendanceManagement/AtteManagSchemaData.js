import { logos as ImagesUrl_logos, timeAttendance as ImagesUrl_timeAttendance } from "../../../../assets/images";
import { AttendanceManagementFAQ , AttendanceManagementMeta } from "./AttendanceManagementData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/time-and-attendance-system";
export const AtteManagSchemaData = [
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
      "name": AttendanceManagementMeta.title,
      "description": AttendanceManagementMeta.description,
      "datePublished": "2024-11-18T01:51:29+05:30",
      "dateModified": "2026-09-23T00:00:00+05:30",
      "significantLink": [
        "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management",
        "https://www.qkrbiz.com/hrms-software/shift-management-system",
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
        "name": "QkrHR",
        "url": pageUrl,
        "browserRequirements": ["requires HTML5 support", "requires JavaScript"],
        "sameAs": "https://signin.qkrbiz.com/",
        "applicationCategory": "BusinessApplication",
        "applicationSuite": "Qkrbiz",
        "permissions": "may run only with an active internet connection",
        "operatingSystem": ["Windows 8.1 or later", "macOS 10.13 or later", "Chromebook"],
        "memoryRequirements": "4-GB",
        "featureList": [
          "Biometric device integration",
          "GPS-tagged mobile attendance check-in",
          "Real-time attendance monitoring dashboard",
          "Attendance regularization and deviation policies",
          "Attendance lock and unlock controls",
          "Maker-checker validation system",
      	"Loss of Pay (LOP) tracking and adjustments",
          "Restricted holiday and floater leave management",
          "Automated overtime calculations",
      	"Direct payroll integration",
          "Multi-shift and rotating shift support",
      	"Blue-collar workforce attendance"
    	],
        "copyrightHolder": { "@id": "https://www.qkrbiz.com/#organization" },
        "creator": { "@id": "https://www.qkrbiz.com/#organization" },
      	"publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "maintainer": { "@id": "https://www.qkrbiz.com/#organization" },
        "image": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          "inLanguage": "en-IN",
          "url": `https://www.qkrbiz.com${ImagesUrl_timeAttendance.timeAndAttendanceHeader}`,
          "caption": "QkrHR attendance management software dashboard — real-time attendance tracking"
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
  	  "url": "https://www.qkrbiz.com/assets/attendance-define-B33XwOUX.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/attendance-define-B33XwOUX.webp",
      "caption": "Define clear and flexible attendance policies in QkrHR",
      "description": "QkrHR allows multi-layered attendance policy configuration for shift-based, WFH, mobile and field workforce — with role-based access and transparent policies visible to all employees."
	},
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-lock`,
      "url": "https://www.qkrbiz.com/assets/attendance-unlock-relock-BsbXWBUI.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/attendance-unlock-relock-BsbXWBUI.webp",
      "caption": "Attendance lock and unlock controls in QkrHR",
      "description": "QkrHR's attendance locking system freezes data before payroll begins, ensuring compliance calculations never run on unverified attendance records."
	},
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-dashboard`,
      "url": "https://www.qkrbiz.com/assets/dashboards-employee-DWJUUb0N.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/dashboards-employee-DWJUUb0N.webp",
      "caption": "Employee attendance dashboard in QkrHR",
      "description": "QkrHR employee dashboard showing real-time attendance tracking, approval status and leave requests in one view — no follow-up needed."
	},
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-fix`,
      "url": "https://www.qkrbiz.com/assets/fix-attendance-problem-CAPibl7u.webp",
      "contentUrl": "https://www.qkrbiz.com/assets/fix-attendance-problem-CAPibl7u.webp",
      "caption": "QkrHR attendance overview dashboard — fix attendance problems permanently",
      "description": "QkrHR attendance overview showing complete attendance flow from capture to payroll sync with clarity, accuracy and full audit trail."
	},
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
    	{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com/" },
    	{ "@type": "ListItem", "position": 2, "name": "QkrHR HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
    	{ "@type": "ListItem", "position": 3, "name": "Leave & Attendance Management", "item": "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management" },
    	{ "@type": "ListItem", "position": 4, "name": AttendanceManagementMeta.title.split(" | ")[0], "item": pageUrl }
  	]
	},
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "isPartOf": { "@id": `${pageUrl}#webpage` },
      "mainEntity": AttendanceManagementFAQ.map((faq) => ({
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