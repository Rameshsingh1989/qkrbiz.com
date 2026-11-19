import {logos as ImagesUrl_logos} from "@/assets/images";

export const QkrbizCommonSchema = [
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
        }
    ]
    }
]