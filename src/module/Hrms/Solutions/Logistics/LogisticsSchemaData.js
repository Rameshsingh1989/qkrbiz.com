import { logos as ImagesUrl_logos, logistics as ImagesUrl_logistics } from "../../../../assets/images";
import { LogisticsFaqData , LogisticsMeta } from "./LogisticsData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/logistics";

export const LogisticsSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qkrbiz.com/#organization",
        "name": "Qkrbiz",
        "brand": { "@id": "https://www.qkrbiz.com/hrms-software#brand" },
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.qkrbiz.com/#logo",
          "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
          "contentUrl": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
          "caption": "Qkrbiz Logo"
        },
        "image": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "email": "support@qkrbiz.com",
        "telephone": "+91-7428174445",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "706, Manjusha Building, 57, Nehru Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110019",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.instagram.com/qkrbiz/",
          "https://www.facebook.com/qkrhr.software/",
          "https://www.linkedin.com/company/qkrhr-hrms/",
          "https://x.com/QkrBiz",
          "https://in.pinterest.com/qkrbiz/",
          "https://www.youtube.com/@QkrHR"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "telephone": "+91-7428174445",
            "email": "sales@qkrbiz.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "+91-9217708850",
            "email": "support@qkrbiz.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://www.qkrbiz.com/hrms-software#brand",
        "name": "QkrHR",
        "url": "https://www.qkrbiz.com/hrms-software",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.qkrbiz.com/hrms-software#logo",
          "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrHRLogo}`,
          "contentUrl": `https://www.qkrbiz.com${ImagesUrl_logos.QkrHRLogo}`,
          "caption": "QkrHR Logo",
          "encodingFormat": "image/svg+xml"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": LogisticsMeta.title,
        "description": LogisticsMeta.description,
        "inLanguage": "en-IN",
        "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        "about": { "@id": "https://www.qkrbiz.com/hrms-software#softwareapplication" },
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "primaryImageOfPage": { "@id": `${pageUrl}#image-hero` },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Logistics, delivery and field service companies with hub staff, drivers and field technicians"
        },
        "keywords": "HRMS for logistics, logistics HR software, delivery staff attendance, driver payroll, field service HR, geo-tagged attendance, mileage claims, overtime tracking",
        "hasPart": [
          { "@id": "https://www.qkrbiz.com/hrms-software/logistics#howto" },
          { "@id": "https://www.qkrbiz.com/hrms-software/logistics#faq" }
        ],
        "dateModified": "2026-10-30T10:00:00+05:30"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },
          { "@type": "ListItem", "position": 2, "name": "QkrHR HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
          { "@type": "ListItem", "position": 3, "name": "HRMS for Logistics", "item": pageUrl }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-hero`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_logistics.logisticsHeading}`,
        "url": `https://www.qkrbiz.com${ImagesUrl_logistics.logisticsHeading}`,
        "name": "HRMS for Logistics and Field Operations – QkrHR",
        "caption": "QkrHR HRMS for logistics, delivery and field service operations",
        "encodingFormat": "image/webp",
        "representativeOfPage": true,
        "creditText": "Qkrbiz – QkrHR",
        "creator": { "@id": "https://www.qkrbiz.com/#organization" },
        "copyrightNotice": "© 2026 Intec Infonet Pvt. Ltd. All rights reserved.",
        "license": "https://www.qkrbiz.com/terms",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "inLanguage": "en-IN"
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        "name": "How a Logistics Month Runs on QkrHR",
        "description": "Each group captures its day its own way; approvals and payroll are shared.",
        "inLanguage": "en-IN",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Each Group Starts Its Day",
            "text": "Hub staff punch on the biometric device; delivery staff on mobile; technicians check in at their first visit."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Work Is Recorded Where It Happens",
            "text": "Shift rules apply at the hub; expenses and visits are recorded in the field."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Managers Approve Before the Cut-off",
            "text": "Corrections, leave and claims arrive in each manager's Pending Actions inbox."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "One Locked Payroll",
            "text": "Attendance locks, then payroll runs with LOP, overtime and approved reimbursements."
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#workflows`,
        "name": "Three Logistics Workflows on QkrHR",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Hub or warehouse shift",
            "description": "Biometric punch at the hub, shift rules, missed-punch correction, approval by the shift supervisor, and payroll with LOP and overtime at twice the ordinary rate."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Delivery or driver day",
            "description": "Geo-tagged mobile punch at the hub or first stop, toll and parking expenses with receipts, policy-limit checks, route manager approval, and payroll with LOP plus approved reimbursements."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Field service visit",
            "description": "Task assigned in QkrVisit, check-in and check-out at the customer site with distance per journey, mileage claim at a per-km rate, service manager review, and approved reimbursements in payroll."
          }
        ]
      },
      {
          "@type": "FAQPage",
          "@id": `${pageUrl}#faq`,
          "isPartOf": { "@id": `${pageUrl}#webpage` },
          "mainEntity": LogisticsFaqData.map((faq) => ({
            "@type": "Question",
            "name": faq.Title,
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() 
            }
          }))
      },
    ]
  }
];
