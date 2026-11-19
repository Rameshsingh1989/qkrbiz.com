import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from "@/assets/images";
export const qkrdeskSchemaData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.qkrbiz.com/#organization",
        "name": "Qkrbiz",
        "legalName": "Intec Infonet Pvt. Ltd.",
        "url": "https://www.qkrbiz.com",
        "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrDeskLogo}`,
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
        "@id": "https://www.qkrbiz.com/qkrdesk#software",
        "name": "QkrDesk — Help Desk & Customer Support Software",
        "url": "https://www.qkrbiz.com/qkrdesk",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Help Desk Software",
        "operatingSystem": "Web, Android, iOS",
        "description": "QkrDesk streamlines customer support with intelligent ticket management, SLA tracking, and multi-channel support for Indian businesses.",
        "publisher": {
          "@id": "https://www.qkrbiz.com/#organization"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.qkrbiz.com/qkrdesk#primaryimage",
        "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.Desk}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.Desk}`,
        "width": 1200,
        "height": 630,
        "caption": "Help Desk & Customer Support Software | QkrDesk"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.qkrbiz.com/qkrdesk#webpage",
        "url": "https://www.qkrbiz.com/qkrdesk",
        "name": "Help Desk & Customer Support Software | QkrDesk",
        "description": "Resolve customer queries faster with QkrDesk's intelligent help desk, ticket management, and SLA-based support system.",
        "isPartOf": {
          "@id": "https://www.qkrbiz.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.qkrbiz.com/qkrdesk#primaryimage"
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
              "name": "QkrDesk",
              "item": "https://www.qkrbiz.com/qkrdesk"
            }
          ]
        }
      }
    ]
  }
];

export default qkrdeskSchemaData;
