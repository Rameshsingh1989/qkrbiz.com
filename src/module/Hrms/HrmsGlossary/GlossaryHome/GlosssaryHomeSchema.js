import {logos as ImagesUrl_logos} from "@/assets/images";
export const GlosssaryHomeSchema = [
 {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.qkrbiz.com/hrms-software/hr-glossary#webpage",
        "name": "HR Glossary: A-Z of HR Terms & Definitions | QkrHR",
        "url": "https://www.qkrbiz.com/hrms-software/hr-glossary",
        "description": "Explore the comprehensive QkrHR HR glossary. Find clear definitions, terms, and explanations for essential HR, payroll, labor law, and compliance concepts.",
        "publisher": {
          "@type": "Organization",
          "name": "QkrHR",
          "logo": {
            "@type": "ImageObject",
            "url": `https://www.qkrbiz.com${ImagesUrl_logos.QkrHRLogo}`
          }
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.qkrbiz.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "HRMS Software",
            "item": "https://www.qkrbiz.com/hrms-software"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "HR Glossary",
            "item": "https://www.qkrbiz.com/hrms-software/hr-glossary"
          }
        ]
      }
    ]
  }

];
