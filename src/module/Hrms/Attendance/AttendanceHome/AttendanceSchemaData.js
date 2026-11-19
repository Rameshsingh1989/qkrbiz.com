import {
  logos as ImagesUrl_logos,
  ogImages as ImagesUrl_ogImages,
  timeAttendance as ImagesUrl_timeAttendance,
} from "@/assets/images";
import { AttendanceFAQ , AttendanceHomeMeta } from "./AttendanceData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/leave-and-attendance-management";

const organizationId = "https://www.qkrbiz.com/#organization";
const websiteId = "https://www.qkrbiz.com/#website";
const webpageId = `${pageUrl}#webpage`;
const softwareId = `${pageUrl}#software`;

/**
 * Convert FAQ HTML content into readable plain text for JSON-LD.
 * This helper is intended for simple HTML FAQ content.
 */
const stripHtml = (html = "") =>
  String(html)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|div|li|h[1-6])\s*>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();

export const attendanceSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      // Organization
      {
        "@type": "Organization",
        "@id": organizationId,
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "sameAs": [
          "https://www.facebook.com/qkrhr.software/",
          "https://x.com/QkrBiz",
          "https://www.linkedin.com/company/qkrhr-hrms/",
          "https://www.instagram.com/qkrbiz/",
          "https://www.youtube.com/@QkrHR",
          "https://in.pinterest.com/qkrbiz/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7428174445",
          "contactType": "customer service",
          "email": "sales@qkrbiz.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "706, Manjusha Building, 57, Nehru Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110019",
          "addressCountry": "IN"
        }
      },
      // Website
      {
        "@type": "WebSite",
        "@id": websiteId,
        "name": "Qkrbiz",
        "alternateName": "Qkrbiz Business Management Software",
        "url": "https://www.qkrbiz.com",
        "publisher": {
          "@id": organizationId
        }
      },
      // Software application
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        "name": "QkrHR Leave and Attendance Management Software",
        "url": pageUrl,
        "mainEntityOfPage": {
          "@id": webpageId
        },
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "HRMS Software",
        "operatingSystem": "Web, Android, iOS",
        "description": "QkrHR is a smart leave and attendance management system — capturing every punch from biometric, mobile and web, automating leave policies and shift rosters, and sending verified data straight to payroll.",
        "offers": [
          {
            "@type": "Offer",
            "name": "Essential",
            "price": 3000,
            "priceCurrency": "INR",
            "description": "₹3,000 per month for up to 50 users; ₹40 per additional user per month.",
            "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 3000,
              "priceCurrency": "INR",
              "unitText": "MONTH"
            }
          },
          {
            "@type": "Offer",
            "name": "Foundation",
            "price": 5000,
            "priceCurrency": "INR",
            "description": "₹5,000 per month for up to 50 users; ₹80 per additional user per month.",
            "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 5000,
              "priceCurrency": "INR",
              "unitText": "MONTH"
            }
          }
        ],
        "publisher": {
          "@id": organizationId
        }
      },
      // Primary Open Graph image
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#primaryimage`,
        "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.QkrHr}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.QkrHr}`,
        "width": 1200,
        "height": 630,
        "caption": "Leave and Attendance Management Software — QkrHR | Qkrbiz"
      },
      // Header image
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-header`,
        "url": `https://www.qkrbiz.com${ImagesUrl_timeAttendance.timeAndAttendanceHeader}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_timeAttendance.timeAndAttendanceHeader}`,
        "caption": "Leave and Attendance Management System — QkrHR",
        "description": "QkrHR leave and attendance management system dashboard showing biometric, mobile and web attendance in one log."
      },
      // Attendance punch feature image
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-punch`,
        "url": "https://www.qkrbiz.com/assets/every-punch-BI18Q_y6.webp",
        "contentUrl": "https://www.qkrbiz.com/assets/every-punch-BI18Q_y6.webp",
        "caption": "Capture every punch from biometric, mobile and web in one attendance log",
        "description": "QkrHR captures attendance from biometric devices, GPS-tagged mobile check-in and web browser punch-in into a single unified log."
      },
      // Leave management feature image
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-leave`,
        "url": "https://www.qkrbiz.com/assets/leave-calculates-6VQm18Vm.webp",
        "contentUrl": "https://www.qkrbiz.com/assets/leave-calculates-6VQm18Vm.webp",
        "caption": "Automated leave accruals and balances with QkrHR leave management",
        "description": "QkrHR automates leave accruals, carry-forward and multi-level approvals so employees can check their leave balances before applying."
      },
      // Shift management feature image
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-shifts`,
        "url": "https://www.qkrbiz.com/assets/Shifts-rosters-D_sc8Di7.webp",
        "contentUrl": "https://www.qkrbiz.com/assets/Shifts-rosters-D_sc8Di7.webp",
        "caption": "Shift rosters, rotating and night shifts with overtime rules in QkrHR",
        "description": "QkrHR shift management supports roster planning, rotating and night shifts, overtime rules and plant-level rosters for multi-location teams."
      },
      // Web page
      {
        "@type": "WebPage",
        "@id": webpageId,
        "url": pageUrl,
        "name": AttendanceHomeMeta.title,
        "description": AttendanceHomeMeta.description,
        "isPartOf": {
          "@id": websiteId
        },
        "publisher": {
          "@id": organizationId
        },
        "mainEntity": {
          "@id": softwareId
        },
        "primaryImageOfPage": {
          "@id": `${pageUrl}#primaryimage`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.qkrbiz.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "HRMS Software",
              "item": "https://www.qkrbiz.com/hrms-software"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Leave & Attendance Management",
              "item": pageUrl
            }
          ]
        }
      },

      // FAQ page
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "url": pageUrl,
        "isPartOf": {
          "@id": webpageId
        },
        "mainEntity": AttendanceFAQ.map((faq) => ({
          "@type": "Question",
          "name": stripHtml(faq.Title),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": stripHtml(faq.Content)
          }
        }))
      }
    ]
  }
];
