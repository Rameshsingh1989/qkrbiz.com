import { HrmsPriceMeta } from "./HrmsPriceData";
// import HrmsCompareHead from "@/assets/images/hrms/hrmsPrice/qkrhr-pricing-banner.webp";

export const HrmsCompareSchemaData = [
 {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.qkrbiz.com/#website",
        "name": "Qkrbiz",
        "url": "https://www.qkrbiz.com"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Qkrbiz | Best Business Management Software | ERP Cloud Solutions",
            "item": "https://www.qkrbiz.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "QkrHR: Best HRMS Software in India | HR Management System",
            "item": "https://www.qkrbiz.com/hrms-software"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": HrmsPriceMeta.title.split(" | ")[0],
            "item": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing#webpage",
        "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
        "name": HrmsPriceMeta.title,
        "description": HrmsPriceMeta.description,
        "isPartOf": {"@id": "https://www.qkrbiz.com/#website"},
        "breadcrumb": {"@id": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing#breadcrumb"}
      },
      {
        "@type": "Product",
        "@id": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing#product",
        "name": HrmsPriceMeta.title,
        "description": HrmsPriceMeta.description,
        "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
        "brand": {
          "@type": "Brand",
          "name": "Qkrbiz"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "3000",
          "highPrice": "5000",
          "offerCount": 2,
          "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
          "offers": [
            {
              "@type": "Offer",
              "name": "Essential",
              "price": "3000",
              "priceCurrency": "INR",
              "description": "₹3,000 per month for up to 50 users; ₹40 per additional user per month.",
              "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
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
              "url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "5000",
                "priceCurrency": "INR",
                "unitText": "MONTH"
              }
            }
          ]
        }
      }
    ]
  }

]