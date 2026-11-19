
import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from "@/assets/images";

export const qkrexpenseSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qkrbiz.com/#organization",
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrExpenseLogo}`,
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
          "availableLanguage": [
            "English",
            "Hindi"
          ]
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
      {
        "@type": "WebSite",
        "@id": "https://www.qkrbiz.com/#website",
        "name": "Qkrbiz",
        "alternateName": "Qkrbiz Business Management Software",
        "url": "https://www.qkrbiz.com",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.qkrbiz.com/qkrexpense#software",
        "name": "QkrExpense",
        "url": "https://www.qkrbiz.com/qkrexpense",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Expense Management Software",
        "operatingSystem": "Web, Android, iOS",
        "description": "QkrExpense simplifies travel advances, reimbursements, and expense tracking for field and office employees across India.",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.qkrbiz.com/qkrexpense#primaryimage",
        "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.Expense}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.Expense}`,
        "width": 1200,
        "height": 630,
        "caption": "QkrExpense — Employee Expense Management Software | Qkrbiz"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.qkrbiz.com/qkrexpense#webpage",
        "url": "https://www.qkrbiz.com/qkrexpense",
        "name": "Employee Expense Management Software | QkrExpense",
        "description": "Track, manage, and reimburse employee expenses effortlessly with QkrExpense by Qkrbiz. Built for Indian businesses.",
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.qkrbiz.com/qkrexpense#primaryimage"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Employee Expense Management Software | QkrExpense",
              "item": "https://www.qkrbiz.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Employee Expense Management Software | QkrExpense",
              "item": "https://www.qkrbiz.com/qkrexpense"
            }
          ]
        }
      }
    ]
  }
];

export default qkrexpenseSchemaData;
