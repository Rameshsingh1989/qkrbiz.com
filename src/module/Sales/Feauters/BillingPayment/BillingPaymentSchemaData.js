import {logos as ImagesUrl_logos} from "@/assets/images";
export const billingPaymentSchemaData = {
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
      "@id": "https://www.qkrbiz.com/qkrsales/billing-payment#software",
      "name": "QkrSales",
      "url": "https://www.qkrbiz.com/qkrsales/billing-payment",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Sales Management Software",
      "operatingSystem": "Web, Android, iOS",
      "description": "Gain complete control over billing, collection, and payment schedules with QkrSales Billing & Payment management."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.qkrbiz.com/qkrsales/billing-payment#webpage",
      "url": "https://www.qkrbiz.com/qkrsales/billing-payment",
      "name": "Milestone & Period Sales Billing Software | QkrSales",
      "description": "Gain complete control over billing, collection, and payment schedules with QkrSales Billing & Payment management.",
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
            "name": "Billing & Payment",
            "item": "https://www.qkrbiz.com/qkrsales/billing-payment"
          }
        ]
      }
    }
  ]
};

export default billingPaymentSchemaData;
