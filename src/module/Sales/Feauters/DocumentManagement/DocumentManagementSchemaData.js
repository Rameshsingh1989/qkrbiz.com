import {logos as ImagesUrl_logos} from "@/assets/images";
export const documentManagementSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.qkrbiz.com/#organization",
      "name": "Qkrbiz",
      "url": "https://www.qkrbiz.com",
      "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrSalesLogo}`
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.qkrbiz.com/qkrsales/document-management#software",
      "name": "QkrSales",
      "url": "https://www.qkrbiz.com/qkrsales/document-management",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Sales Management Software",
      "operatingSystem": "Web, Android, iOS",
      "description": "Store, manage, and access sales-related documents like POs, contracts, and invoices centrally with QkrSales Document Management."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.qkrbiz.com/qkrsales/document-management#webpage",
      "url": "https://www.qkrbiz.com/qkrsales/document-management",
      "name": "Paperless Sales Document & Letter Management | QkrSales",
      "description": "Store, manage, and access sales-related documents like POs, contracts, and invoices centrally with QkrSales Document Management.",
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
            "name": "Document Management",
            "item": "https://www.qkrbiz.com/qkrsales/document-management"
          }
        ]
      }
    }
  ]
};

export default documentManagementSchemaData;
