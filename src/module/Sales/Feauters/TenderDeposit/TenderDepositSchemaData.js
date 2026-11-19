import {logos as ImagesUrl_logos} from "@/assets/images";
export const tenderDepositSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qkrbiz.com/#organization",
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrSalesLogo}`,
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
        "@id": "https://www.qkrbiz.com/qkrsales/tender-deposit#software",
        "name": "QkrSales Tender Deposit Management",
        "url": "https://www.qkrbiz.com/qkrsales/tender-deposit",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Sales Management Software",
        "operatingSystem": "Web, Android, iOS",
        "description": "Track and manage tender deposits, bid statuses, and security amounts efficiently with QkrSales Tender Deposit management.",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.qkrbiz.com/qkrsales/tender-deposit#primaryimage",
        "url": "https://www.qkrbiz.com/assets/sales-CPzn73Z3.webp",
        "contentUrl": "https://www.qkrbiz.com/assets/sales-CPzn73Z3.webp",
        "width": 1200,
        "height": 630,
        "caption": "Tender Deposit Management | QkrSales"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.qkrbiz.com/qkrsales/tender-deposit#webpage",
        "url": "https://www.qkrbiz.com/qkrsales/tender-deposit",
        "name": "Tender Deposit Management | QkrSales",
        "description": "Manage tender deposits and bid tracking with ease using QkrSales — India's leading sales management software.",
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.qkrbiz.com/qkrsales/tender-deposit#primaryimage"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "QkrSales",
              "item": "https://www.qkrbiz.com/qkrsales"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Tender Deposit",
              "item": "https://www.qkrbiz.com/qkrsales/tender-deposit"
            }
          ]
        }
      }
    ]
  }
];

export default tenderDepositSchemaData;
