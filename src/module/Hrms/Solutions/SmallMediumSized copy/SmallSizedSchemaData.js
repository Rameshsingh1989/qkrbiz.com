import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { SmeFaqData , SmallMediumSizedMeta } from './SmallMediumSizedData';

const pageUrl = "https://www.qkrbiz.com/hrms-software/hr-software-small-business";
export const SmallSizedSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qkrbiz.com/#organization",
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
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
          "availableLanguage": ["English", "Hindi"]
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
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": SmallMediumSizedMeta.title,
        "description": SmallMediumSizedMeta.description,
        "inLanguage": "en-IN",
        "datePublished": "2026-10-27",
        "dateModified": "2026-10-27",
        "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" },
        "primaryImageOfPage": { "@id": `${pageUrl}#primaryimage` },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.qkrbiz.com/hrms-software/hr-software-small-business#primaryimage",
        "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.QkrHr}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.QkrHr}`,
        "width": 1200,
        "height": 630,
        "caption": "Best HR Software for Small Business India — QkrHR | Qkrbiz"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.qkrbiz.com/hrms-software/hr-software-small-business#breadcrumb",
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
            "name": "HRMS Software",
            "item": "https://www.qkrbiz.com/hrms-software"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Small Business",
            "item": "https://www.qkrbiz.com/hrms-software/hr-software-small-business"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "isPartOf": { "@id": `${pageUrl}#webpage` },
        "mainEntity": SmeFaqData.map((faq) => ({
          "@type": "Question",
          "name": faq.Title,
          "acceptedAnswer": { "@type": "Answer", "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() }
        }))
      }
    ]
  }
];