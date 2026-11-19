import { logos as ImagesUrl_logos, qkrhr as ImagesUrl_qkrhr } from "../../../assets/images";
import { HrmsFAQ , QkrhrHomeMeta } from "./QkrhrHomeData";

const pageUrl = "https://www.qkrbiz.com/hrms-software";

export const QkrhrHomeSchemaData = [
    {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qkrbiz.com/#organization",
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "image": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.qkrbiz.com/#logo",
          "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
          "contentUrl": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
          "caption": "QkrHR Logo"
        },
        "description": "Qkrbiz offers all-in-one business management software for SMBs — HRMS, Payroll, CRM, and Field Force Automation. Trusted by 4000+ companies across India.",
        "email": "support@qkrbiz.com",
        "telephone": "+91-7428174445",
        "founder": {
          "@id": "https://www.qkrbiz.com/#person-rajeev-goel"
        },
        "foundingDate": "2010-10-07",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": 100
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "706, Manjusha Building, 57, Nehru Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110019",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": [
          "HRMS Software",
          "HR Management System",
          "Payroll Software",
          "Field Force Automation",
          "Employee Management",
          "Leave Management",
          "Attendance Tracking",
          "Employee Engagement"
        ],
        "sameAs": [
          "https://www.instagram.com/qkrbiz/",
          "http://facebook.com/Qkrbiz",
          "https://www.linkedin.com/company/qkrbiz",
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
            "availableLanguage": [
              "English",
              "Hindi"
            ],
            "url": "https://www.qkrbiz.com/signup"
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "+91-9217708850",
            "email": "support@qkrbiz.com",
            "areaServed": "IN",
            "availableLanguage": [
              "English",
              "Hindi"
            ]
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.qkrbiz.com/#person-rajeev-goel",
        "name": "Rajeev Goel",
        "jobTitle": "Managing Director",
        "sameAs": "https://www.linkedin.com/in/rajeev-goel-a3748110/",
        "worksFor": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.qkrbiz.com/#website",
        "url": "https://www.qkrbiz.com",
        "name": "Qkrbiz",
        "description": "All-in-one business management software for small and mid-sized businesses in India.",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": QkrhrHomeMeta.title,
        "description": QkrhrHomeMeta.description,
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        },
        "about": {
          "@id": `${pageUrl}#softwareapplication`
        },
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "breadcrumb": {
          "@id": `${pageUrl}#breadcrumb`
        },
        "primaryImageOfPage": {
          "@id": `${pageUrl}#image-hero`
        },
        "dateModified": "2026-07-16T10:00:00+05:30"
      },
      {
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
            "name": "QkrHR HRMS Software",
            "item": pageUrl
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#softwareapplication`,
        "name": "QkrHR",
        "alternateName": [
          "QkrHR",
          "QkrHR HR Management System",
          "Qkrbiz HRMS"
        ],
        "url": pageUrl,
        "description": QkrhrHomeMeta.description,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Human Resource Management System",
        "operatingSystem": "Web, Android, iOS",
        "inLanguage": "en-IN",
        "featureList": [
          "Core HR Management",
          "Employee Onboarding Automation",
          "Time and Attendance Tracking",
          "Leave Management",
          "Payroll Processing with Tax Compliance",
          "Field Force Automation with GPS",
          "Geo-Fencing",
          "Expense and Travel Management",
          "Employee Self-Service Portal",
          "Workflow Automation",
          "BI and Analytics Dashboard",
          "Data Security",
          "Mobile App for Android and iOS",
          "Employee Engagement Tools",
          "Task Management",
          "Document Management",
          "Kanban Boards",
          "Alerts and Notifications",
          "Customizable Dashboards"
        ],
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "creator": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "3000",
          "highPrice": "5000",
          "offerCount": 2,
          "url": `${pageUrl}/qkrhr-pricing`,
          "offers": [
            {
              "@type": "Offer",
              "name": "Essential",
              "price": "3000",
              "priceCurrency": "INR",
              "description": "₹3,000 per month for up to 50 users; ₹40 per additional user per month.",
              "url": `${pageUrl}/qkrhr-pricing`,
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
              "url": `${pageUrl}/qkrhr-pricing`,
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "5000",
                "priceCurrency": "INR",
                "unitText": "MONTH"
              }
            }
          ]
        },
        "potentialAction": [
          {
            "@type": "Action",
            "name": "Request Free Demo",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.qkrbiz.com/signup"
            }
          },
          {
            "@type": "Action",
            "name": "View Pricing",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${pageUrl}/qkrhr-pricing`
            }
          }
        ]
      },
      {
        "@type": "VideoObject",
        "@id": `${pageUrl}#video-hrms-demo`,
        "name": "QkrHR HRMS Software - India's Best Cloud-Driven HR and Payroll Software in India 2026",
        "description": "Looking for the Best HRMS Software in India? QkrHR is an advanced HRMS Software designed for businesses to manage HR, Payroll, Attendance, Leave, Employee Database, and Field Force Management in one platform.",
        "thumbnailUrl": [
          "https://i.ytimg.com/vi/bf3U8zW1dxc/maxresdefault.jpg",
          "https://i.ytimg.com/vi/bf3U8zW1dxc/hqdefault.jpg"
        ],
        "contentUrl": "https://www.youtube.com/watch?v=bf3U8zW1dxc",
        "embedUrl": "https://www.youtube.com/embed/bf3U8zW1dxc",
        "uploadDate": "2024-11-15T00:00:00+05:30",
        "duration": "PT2M5S",
        "inLanguage": "en-IN",
        "sameAs": "https://www.youtube.com/watch?v=bf3U8zW1dxc",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        },
        "isPartOf": {
          "@id": `${pageUrl}#webpage`
        }
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#features-list`,
        "name": "QkrHR HRMS Software Modules",
        "url": pageUrl,
        "numberOfItems": 8,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Core HR",
            "url": `${pageUrl}/core-hr`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Employee Onboarding Software",
            "url": `${pageUrl}/employee-onboarding-software`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Field Force Automation",
            "url": `${pageUrl}/field-force-automation`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Leave and Attendance Management",
            "url": `${pageUrl}/leave-and-attendance-management`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Payroll Software",
            "url": `${pageUrl}/hr-payroll-software`
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Employee Expense Management",
            "url": `${pageUrl}/employee-expense-management`
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Employee Engagement",
            "url": `${pageUrl}/employee-engagement`
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Employee Task Management",
            "url": `${pageUrl}/employee-task-management`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": HrmsFAQ.map((faq) => ({
          "@type": "Question",
          "name": faq.Title,
          "acceptedAnswer": { 
            "@type": "Answer", 
            "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() 
          }
        }))
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-hero`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrhr.qkrhrHeader}`,
        "url": `https://www.qkrbiz.com${ImagesUrl_qkrhr.qkrhrHeader}`,
        "name": "QkrHR HRMS Software Dashboard – India's First Self-Driving HRMS",
        "description": "Hero banner of QkrHR – India's first self-driving cloud-based HRMS software for Indian businesses, showing the unified HR management dashboard.",
        "caption": "QkrHR: India's First Self-Driving HRMS Software",
        "representativeOfPage": true,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-core-hr`,
        "contentUrl": "https://www.qkrbiz.com/assets/core-hr-DsFrByHi.webp",
        "url": "https://www.qkrbiz.com/assets/core-hr-DsFrByHi.webp",
        "name": "Core HR Module – QkrHR HRMS Software",
        "description": "Core HR module of QkrHR showing centralized employee database, document management, organizational hierarchy, and employee lifecycle management for Indian businesses.",
        "caption": "QkrHR Core HR Module – Centralized Employee Management",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-employee-onboarding`,
        "contentUrl": "https://www.qkrbiz.com/assets/employee-onboarding-BlRXTOao.webp",
        "url": "https://www.qkrbiz.com/assets/employee-onboarding-BlRXTOao.webp",
        "name": "Employee Onboarding Module – QkrHR HRMS Software",
        "description": "Digital employee onboarding screen in QkrHR HRMS showing automated onboarding workflows, document collection, and task assignment for new joiners in Indian companies.",
        "caption": "QkrHR Employee Onboarding – Paperless Digital Onboarding",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-field-force`,
        "contentUrl": "https://www.qkrbiz.com/assets/field-force-automation-DMFYO2hQ.webp",
        "url": "https://www.qkrbiz.com/assets/field-force-automation-DMFYO2hQ.webp",
        "name": "Field Force Automation – QkrHR GPS Tracking and Geo-Fencing",
        "description": "Field Force Automation module of QkrHR HRMS displaying real-time GPS employee tracking, geo-fencing, live location monitoring, and field visit reports for field staff management in India.",
        "caption": "QkrHR Field Force Automation – GPS Tracking for Field Employees",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-time-attendance`,
        "contentUrl": "https://www.qkrbiz.com/assets/time-attendance-Den4Zhjw.webp",
        "url": "https://www.qkrbiz.com/assets/time-attendance-Den4Zhjw.webp",
        "name": "Time and Attendance Management – QkrHR HRMS",
        "description": "Time and Attendance module of QkrHR showing biometric integration, shift management, real-time attendance tracking, regularization, and automated attendance reports for Indian companies.",
        "caption": "QkrHR Time and Attendance – Biometric Integration and Shift Management",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-payroll`,
        "contentUrl": "https://www.qkrbiz.com/assets/payroll-software-BUdo9eBC.webp",
        "url": "https://www.qkrbiz.com/assets/payroll-software-BUdo9eBC.webp",
        "name": "Payroll Software India – QkrHR Automated Payroll Processing",
        "description": "Payroll Software module of QkrHR HRMS showing automated salary processing, PF/ESI/TDS/PT compliance, payslip generation, and statutory deduction management for Indian businesses.",
        "caption": "QkrHR Payroll Software – Automated Salary and Statutory Compliance for India",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-expense`,
        "contentUrl": "https://www.qkrbiz.com/assets/expense-management-h8PdBUbV.webp",
        "url": "https://www.qkrbiz.com/assets/expense-management-h8PdBUbV.webp",
        "name": "Expense Management Module – QkrHR HRMS",
        "description": "Employee Expense Management module of QkrHR HRMS displaying digital expense submission, multi-level approval workflows, reimbursement tracking, and expense policy enforcement for Indian businesses.",
        "caption": "QkrHR Expense Management – Digital Expense Submission and Reimbursement",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-engagement`,
        "contentUrl": "https://www.qkrbiz.com/assets/employee-mngagement-DrSNoDMu.webp",
        "url": "https://www.qkrbiz.com/assets/employee-mngagement-DrSNoDMu.webp",
        "name": "Employee Engagement Module – QkrHR HRMS",
        "description": "Employee Engagement module of QkrHR HRMS showing pulse surveys, recognition features, feedback tools, and employee satisfaction tracking to boost workplace morale in Indian companies.",
        "caption": "QkrHR Employee Engagement – Surveys, Recognition and Feedback",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-task`,
        "contentUrl": "https://www.qkrbiz.com/assets/task-management-DRX8IetI.webp",
        "url": "https://www.qkrbiz.com/assets/task-management-DRX8IetI.webp",
        "name": "Task Management Module – QkrHR HRMS",
        "description": "Task Management module of QkrHR HRMS showing task assignment, priority setting, progress tracking, deadline management, and team collaboration features for Indian businesses.",
        "caption": "QkrHR Task Management – Assign, Track and Complete Tasks Efficiently",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-slider-attendance`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrhr.attendanceSlider}`,
        "url": `https://www.qkrbiz.com${ImagesUrl_qkrhr.attendanceSlider}`,
        "name": "Attendance Management Dashboard – QkrHR Software Screenshot",
        "description": "Product screenshot of QkrHR showing the attendance management dashboard with daily attendance overview, leave balance, late arrivals, and shift details for HR teams in India.",
        "caption": "QkrHR Attendance Dashboard Screenshot",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-slider-profile`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrhr.profileSlider}`,
        "url": `https://www.qkrbiz.com${ImagesUrl_qkrhr.profileSlider}`,
        "name": "Employee Profile and Self Service Portal – QkrHR Screenshot",
        "description": "Product screenshot of QkrHR showing the employee self-service portal with personal profile, documents, payslips, leave requests, and reimbursement history in one place.",
        "caption": "QkrHR Employee Self-Service Portal Screenshot",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-slider-payroll`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrhr.payrollSlider}`,
        "url": `https://www.qkrbiz.com${ImagesUrl_qkrhr.payrollSlider}`,
        "name": "Payroll Processing Dashboard – QkrHR Software Screenshot",
        "description": "Product screenshot of QkrHR showing the payroll processing dashboard with salary components, statutory deductions (PF, ESI, TDS), net pay calculation, and payslip generation for Indian employees.",
        "caption": "QkrHR Payroll Processing Dashboard Screenshot",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-slider-expense`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_qkrhr.expenseSlider}`,
        "url": `https://www.qkrbiz.com${ImagesUrl_qkrhr.expenseSlider}`,
        "name": "Expense Claim and Reimbursement Dashboard – QkrHR Screenshot",
        "description": "Product screenshot of QkrHR showing the expense claim submission interface with receipt upload, expense category selection, approval status, and reimbursement tracking.",
        "caption": "QkrHR Expense Management Dashboard Screenshot",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-verify-shield`,
        "contentUrl": "https://www.qkrbiz.com/assets/verify-shield-CbsotxlC.webp",
        "url": "https://www.qkrbiz.com/assets/verify-shield-CbsotxlC.webp",
        "name": "QkrHR Verified and Trusted HRMS – Security and Trust Badge",
        "description": "Trust and verification badge for QkrHR HRMS software indicating data security compliance, trusted by 4000+ companies across India for HR and payroll management.",
        "caption": "QkrHR – Verified and Trusted HRMS Software",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-pranav-goel`,
        "contentUrl": "https://www.qkrbiz.com/assets/pranav-goel-CKpW6SOE.webp",
        "url": "https://www.qkrbiz.com/assets/pranav-goel-CKpW6SOE.webp",
        "name": "Pranav Goel – CEO DebtSet, QkrHR Customer Review Photo",
        "description": "Photo of Pranav Goel, CEO of DebtSet and customer of QkrHR HRMS software, featured in the testimonial section of the HRMS software page.",
        "caption": "Pranav Goel, CEO DebtSet – QkrHR Customer Review",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-ashok-jade`,
        "contentUrl": "https://www.qkrbiz.com/assets/ashok_jade-DLBPrjbT.webp",
        "url": "https://www.qkrbiz.com/assets/ashok_jade-DLBPrjbT.webp",
        "name": "Ashok Jade – QkrHR Customer Review Photo",
        "description": "Photo of Ashok Jade, customer of QkrHR HRMS software, featured in the user testimonial section reviewing QkrHR cloud-based HR software for Indian businesses.",
        "caption": "Ashok Jade – QkrHR Customer Review",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-dinesh-gupta`,
        "contentUrl": "https://www.qkrbiz.com/assets/dinesh_gupta-DFZw61ys.webp",
        "url": "https://www.qkrbiz.com/assets/dinesh_gupta-DFZw61ys.webp",
        "name": "Dinesh C. Gupta – QkrHR Customer Review Photo",
        "description": "Photo of Dinesh C. Gupta, customer of QkrHR HRMS software, featured in the user testimonial section of the HRMS software page.",
        "caption": "Dinesh C. Gupta – QkrHR Customer Review",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-ranjit-singh`,
        "contentUrl": "https://www.qkrbiz.com/assets/ranjit_singh-COYa3mqN.webp",
        "url": "https://www.qkrbiz.com/assets/ranjit_singh-COYa3mqN.webp",
        "name": "Ranjith Singh – QkrHR Customer Review Photo",
        "description": "Photo of Ranjith Singh, customer of QkrHR HRMS software, featured in the user testimonial section reviewing cloud-based HR software for Indian businesses.",
        "caption": "Ranjith Singh – QkrHR Customer Review",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image-atal-bihari`,
        "contentUrl": "https://www.qkrbiz.com/assets/atal_vihari-CIKDv-7U.webp",
        "url": "https://www.qkrbiz.com/assets/atal_vihari-CIKDv-7U.webp",
        "name": "Atal Bihari – QkrHR Customer Review Photo",
        "description": "Photo of Atal Bihari, customer of QkrHR HRMS software, featured in the user testimonial and review section of the HRMS software landing page.",
        "caption": "Atal Bihari – QkrHR Customer Review",
        "representativeOfPage": false,
        "encodingFormat": "image/webp",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "acquireLicensePage": "https://www.qkrbiz.com/contact",
        "creditText": "Qkrbiz – QkrHR",
        "creator": {
          "@type": "Organization",
          "name": "Qkrbiz"
        },
        "copyrightNotice": "© 2026 Qkrbiz. All rights reserved.",
        "inLanguage": "en-IN"
      }
    ]
  }
]
