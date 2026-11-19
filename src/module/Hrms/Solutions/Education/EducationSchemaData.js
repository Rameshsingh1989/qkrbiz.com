import { logos as ImagesUrl_logos, education as ImagesUrl_education } from "../../../../assets/images";
import { EducationFaqData , EducationMeta } from "./EducationData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/education";

export const EducationSchemaData = [
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
      "name": EducationMeta.title,
      "description": EducationMeta.description,
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
      "about": { "@id": "https://www.qkrbiz.com/hrms-software#softwareapplication" },
      "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
      "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
      "primaryImageOfPage": { "@id": `${pageUrl}#image-hero` },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Schools, colleges, education groups, trusts and societies with teaching and non-teaching staff"
      },
      "keywords": "HRMS for schools, HRMS for colleges, education payroll software, school HR software, teacher payroll, multi-campus HRMS, school leave management, trust payroll, PF ESI TDS compliance",
      "hasPart": [
        { "@id": "https://www.qkrbiz.com/hrms-software/education#howto" },
        { "@id": "https://www.qkrbiz.com/hrms-software/education#faq" }
      ],
      "dateModified": "2026-10-30T10:00:00+05:30"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },
        { "@type": "ListItem", "position": 2, "name": "QkrHR HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
        { "@type": "ListItem", "position": 3, "name": "HRMS for Schools and Colleges",  "item": pageUrl  }
      ]
    },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-hero`,
      "contentUrl": `https://www.qkrbiz.com${ImagesUrl_education.educationHeading}`,
      "url": `https://www.qkrbiz.com${ImagesUrl_education.educationHeading}`,
      "name": "HRMS for Schools and Education Groups – QkrHR",
      "caption": "QkrHR HRMS for schools, colleges and education groups",
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
      "name": "How a School Group's Month Runs on QkrHR",
      "description": "Campuses keep their calendars and approvers; the group runs one unified payroll.",
      "inLanguage": "en-IN",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Set Up Campuses & Entities",
          "text": "Each campus is created as a location under its trust or society, with its own specific term and holiday calendar."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Staff Punch & Apply Leave",
          "text": "Staff clock in via biometric device or web punch, and submit leave requests directly from their mobile app."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "HOD & Principal Approve",
          "text": "Leave requests route automatically through multi-level approval stages in each approver's Pending Actions inbox."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "One Payroll Across Trusts",
          "text": "Attendance auto-locks, then payroll runs per pay structure with automated PF, ESI, PT and TDS challans."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#needs`,
      "name": "What Schools & Education Groups Need, and Where It Is in QkrHR",
      "numberOfItems": 8,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Several Campuses",
          "description": "Each campus has its own principal, timings, exams and holiday calendar. QkrHR offers a holiday calendar per location and multi-entity payroll."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Trusts & Societies",
          "description": "Campuses may sit under different registered legal entities. QkrHR supports up to 3 legal entities on Essential and unlimited on Foundation."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Teaching & Non-Teaching Pay",
          "description": "Teachers, administration, transport and support staff are paid on different pay bands. Unlimited salary structures are included in every plan."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Leave Approvals",
          "description": "Leave goes to the head of department, then escalates to the principal. QkrHR has a Pending Actions inbox, with up to 3 approval stages on Essential and unlimited on Foundation."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Daily Attendance",
          "description": "Staff punch at the staff room, gate or administrative office using biometric device integration or web punch."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Statutory Deductions",
          "description": "Automated PF, ESI, PT in 18 states, TDS, challans and statutory returns."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Staff Self-Service (ESS)",
          "description": "Teachers check leave balance, apply for duty leave and download payslips through native Android and iOS mobile apps."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Circulars & Announcements",
          "description": "Management notices and circulars reach every campus through centralized digital announcements and staff polls."
        }
      ]
    },
    {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": EducationFaqData.map((faq) => ({
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
