import {logos as ImagesUrl_logos} from "@/assets/images";

export const accountsReceivableSchemaData = [
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
        "@id": "https://www.qkrbiz.com/qkrsales/accounts-receivable#software",
        "name": "QkrSales Accounts Receivable Management",
        "url": "https://www.qkrbiz.com/qkrsales/accounts-receivable",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Sales Management Software",
        "operatingSystem": "Web, Android, iOS",
        "description": "Automate accounts receivable collection and minimize billing delays with QkrSales. Boost profits by up to 20% with timely realization.",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.qkrbiz.com/qkrsales/accounts-receivable#primaryimage",
        "url": "https://www.qkrbiz.com/assets/sales-CPzn73Z3.webp",
        "contentUrl": "https://www.qkrbiz.com/assets/sales-CPzn73Z3.webp",
        "width": 1200,
        "height": 630,
        "caption": "Accounts Receivable Management | QkrSales"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.qkrbiz.com/qkrsales/accounts-receivable#webpage",
        "url": "https://www.qkrbiz.com/qkrsales/accounts-receivable",
        "name": "Accounts Receivable Management | QkrSales",
        "description": "Automate and streamline accounts receivable tracking to minimize delays and maximize cash flow with QkrSales.",
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.qkrbiz.com/qkrsales/accounts-receivable#primaryimage"
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
              "name": "Accounts Receivable",
              "item": "https://www.qkrbiz.com/qkrsales/accounts-receivable"
            }
          ]
        }
      }
    ]
  }
];

export default accountsReceivableSchemaData;
