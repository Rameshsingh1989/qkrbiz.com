import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from "@/assets/images";
import { TaskHomeMeta } from "./TaskData";

const pageUrl = "https://www.qkrbiz.com/qkrtasks";

export const taskSchemaData = [
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
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        "name": "QkrTasks",
        "url": pageUrl,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Task Management Software",
        "operatingSystem": "Web, Android, iOS",
        "description": TaskHomeMeta.description,
        "image": `https://www.qkrbiz.com${ImagesUrl_logos.QkrTasksLogo}`,
        "publisher": { "@id": "https://www.qkrbiz.com/#organization" }
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#primaryimage`,
        "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.Task}`,
        "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.Task}`,
        "width": 1200,
        "height": 630,
        "caption": "QkrTasks — Task Management Software India | Qkrbiz"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },
          { "@type": "ListItem", "position": 2, "name": "QkrTasks", "item": pageUrl }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": TaskHomeMeta.title,
        "description": TaskHomeMeta.description,
        "inLanguage": "en-IN",
        "isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        "about": { "@id": `${pageUrl}#software` },
        "primaryImageOfPage": { "@id": `${pageUrl}#primaryimage` },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` }
      }
    ]
  }
];
