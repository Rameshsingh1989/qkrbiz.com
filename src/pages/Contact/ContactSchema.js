import {logos as ImagesUrl_logos} from "@/assets/images";

export const ContactMeta = {
  title: "Contact Qkrbiz - Get in Touch with Our Team",
  description: "Get expert support and personalized technological solutions from Qkrbiz. Connect with our team for sales, technical assistance, and business optimization.",
};
export const ContactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization", // Changed from SoftwareCompany to Organization
    "name": "Qkrbiz",
    "alternateName": "Qkrbiz Business Management Software",
    "description": "We provide custom software solutions for businesses.",
    "url": "https://www.qkrbiz.com",
    "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
    "email": "sales@qkrbiz.com",
    "telephone": "+91-7428174445",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7428174445",
      "contactType": "sales",
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
    },
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "Qkrbiz Delhi",
        "image": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "706, Manjusha Building, 57, Nehru Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110019",
          "addressCountry": "IN"
        },
        "telephone": "+91-7428174445",
        // openingHoursSpecification is only valid on Place/LocalBusiness, not Organization
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:30",
            "closes": "18:00"
          }
        ]
        // Removed priceRange - not applicable for B2B software
      },
      {
        "@type": "LocalBusiness",
        "name": "Qkrbiz Kolkata",
        "image": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2E, Ved Bhumi, Koyla Vihar, VIP Road",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700052",
          "addressCountry": "IN"
        },
        "telephone": "+91-33-40619001"
      },
      {
        "@type": "LocalBusiness",
        "name": "Qkrbiz Bengaluru",
        "image": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 1254, B Wing, 14th Floor Mittal Towers, M.G. Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "telephone": "+91-80-40930003"
      }
    ],
    "knowsAbout": ["Software Development", "HRMS Software", "ERP Solutions", "Business Management Software"],
    "sameAs": [
      "https://www.facebook.com/Qkrbiz",
      "https://x.com/QkrBiz",
      "https://www.linkedin.com/company/qkrhr-hrms/",
      "https://www.instagram.com/qkrbiz/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qkrbiz.com/contact#webpage",
    "url": "https://www.qkrbiz.com/contact",
    "name": ContactMeta.title,
    "description": ContactMeta.description,
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.qkrbiz.com/#website" }
  }
];
