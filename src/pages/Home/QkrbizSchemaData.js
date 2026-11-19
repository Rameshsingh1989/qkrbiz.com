import { HomeMeta } from "./HomeData";
import {logos as ImagesUrl_logos} from "@/assets/images";
// 

export const QkrbizSchemaData = [
  // WebSite Schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.qkrbiz.com/#website",
    "name": "Qkrbiz",
    "url": "https://www.qkrbiz.com/",
    "description": "Leading provider of business management software solutions including HRMS, CRM, field force automation, and expense management",
    "publisher": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "inLanguage": "en-IN"
  },
  
  // Organization Schema
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.qkrbiz.com/#organization",
    "name": "Qkrbiz",
    "legalName": "Intec Infonet Pvt. Ltd.",
    "url": "https://www.qkrbiz.com/",
    "description": "Qkrbiz provides comprehensive business management software solutions including HRMS, customer support, field force automation, expense management, sales, and tender management software",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://www.qkrbiz.com/#logo",
      "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
      "width": 119,
      "height": 51,
      "contentUrl": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
      "caption": "Qkrbiz Logo"
    },
    "image": { "@id": "https://www.qkrbiz.com/#logo" },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7428174445",
      "contactType": "Customer Service",
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
    },
    "sameAs": [
      "https://www.linkedin.com/company/qkrhr-hrms/",
      "https://www.facebook.com/qkrhr.software/"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    }
    // "numberOfEmployees": {
    //   "@type": "QuantitativeValue",
    //   "value": "50-200"
    // }
  },
  
  // QkrHR - HRMS Software
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/hrms-software#software`,
    "name": "QkrHR",
    "description": "Comprehensive HRMS software for managing human resources, payroll, attendance, and employee management",
    "url": "https://www.qkrbiz.com/hrms-software",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Human Resource Management",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "3000",
      "highPrice": "5000",
      "offerCount": 2,
      "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing"
    }
  },

  // QkrPayroll - Payroll Software
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/payroll-software#software`,
    "name": "QkrPayroll",
    "description": "Simplify salary processing, PF, ESI, TDS, PT & compliance with QkrPayroll. Cloud-based payroll software for Indian businesses. Get a free demo.",
    "url": "https://www.qkrbiz.com/payroll-software",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Payroll Software",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },

  // Qkrvisit - Field Force Management
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/field-force-management-software#software`,
    "name": "Qkrvisit",
    "description": "Field force automation and management software for tracking field staff, visits, and activities",
    "url": "https://www.qkrbiz.com/field-force-management-software",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Field Force Automation",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },

  // QkrExpense - Expense Management
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/qkrexpense#software`,
    "name": "QkrExpense",
    "description": "Expense management software for tracking, approving, and managing business expenses and reimbursements",
    "url": "https://www.qkrbiz.com/qkrexpense",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Expense Management",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },

  // QkrDesk - Customer Support Software
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/qkrdesk#software`,
    "name": "QkrDesk",
    "description": "Customer support and helpdesk software for managing tickets, customer queries, and service requests",
    "url": "https://www.qkrbiz.com/qkrdesk",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Customer Support Software",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },

  // QkrSales - Sales Software
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/qkrsales#software`,
    "name": "QkrSales",
    "description": "Sales management and CRM software for managing leads, opportunities, and sales pipeline",
    "url": "https://www.qkrbiz.com/qkrsales",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Sales Management",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },
  
  // QkrTenders - Tender Management
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/qkrtenders#software`,
    "name": "QkrTenders",
    "description": "Tender management software for tracking, managing, and bidding on tenders and RFPs",
    "url": "https://www.qkrbiz.com/qkrtenders",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Tender Management",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },

    // QkrTasks - Tasks Management
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/qkrtasks#software`,
    "name": "QkrTasks",
    "description": "Assign, prioritize, and track business tasks with QkrTasks. Boost team productivity with smart task management and deadline alerts.",
    "url": "https://www.qkrbiz.com/qkrtasks",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Task Management",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },

  // QkrProjects - Project Management
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.qkrbiz.com/qkrprojects#software`,
    "name": "QkrProjects",
    "description": "Deliver projects on time and within budget with QkrProjects. Manage tasks, milestones, and teams in one integrated platform.",
    "url": "https://www.qkrbiz.com/qkrprojects",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Projects Management",
    "operatingSystem": "Web, iOS, Android",
    "author": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "provider": {
      "@id": "https://www.qkrbiz.com/#organization"
    },
    "softwareVersion": "2.0"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qkrbiz.com/#webpage",
    "url": "https://www.qkrbiz.com/",
    "name": HomeMeta.title,
    "description": HomeMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
    "about": { "@id": "https://www.qkrbiz.com/#organization" }
  }
];
