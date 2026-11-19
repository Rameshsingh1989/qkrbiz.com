import { logos as ImagesUrl_logos } from "../../../../assets/images";
import { FinancialFaqData, FinancialMeta, FinancialSetupData } from "./FinancialServicesData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/financial-services";

const stripTags = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export const FinancialServicesSchemaData = [
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
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://www.qkrbiz.com/hrms-software#brand",
        "name": "QkrHR",
        "url": "https://www.qkrbiz.com/hrms-software"
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": FinancialMeta.title,
        "description": FinancialMeta.description,
        "inLanguage": "en-IN",
        "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        "about": { "@id": "https://www.qkrbiz.com/hrms-software#softwareapplication" },
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "NBFCs, lenders, microfinance institutions, broking firms and insurance distributors in India"
        },
        "keywords": "payroll software for NBFC, payroll for financial services, microfinance payroll, branch-wise PT and LWF, incentive payroll, staff loan recovery, payroll lock, Form 16 and 24Q",
        "hasPart": [
          { "@id": `${pageUrl}#howto` },
          { "@id": `${pageUrl}#faq` }
        ],
        "dateModified": "2026-11-12T10:00:00+05:30"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },
          { "@type": "ListItem", "position": 2, "name": "QkrHR HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },
          { "@type": "ListItem", "position": 3, "name": "HRMS for Financial Services", "item": pageUrl }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        "name": "Go live on QkrPayroll in 15 days",
        "description": stripTags(FinancialSetupData[0].desc),
        "inLanguage": "en-IN",
        "step": FinancialSetupData[0].steps.map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": `${step.step}: ${step.head}`,
          "text": step.desc
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": FinancialFaqData.map((faq) => ({
          "@type": "Question",
          "name": faq.Title,
          "acceptedAnswer": { "@type": "Answer", "text": stripTags(faq.Content) }
        }))
      }
    ]
  }
];
