import { TendersHomeMeta } from "./TendersData";
import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from "@/assets/images";

export const tendersSchemaData = [
{
  "@context": "https://schema.org",
  "@graph": [
        	{ "@type": "Organization", "@id": "https://www.qkrbiz.com/#organization", "name": "Qkrbiz", "legalName": "Intec Infonet Pvt. Ltd.", "url": "https://www.qkrbiz.com", "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrTendersLogo}`, "sameAs": ["https://www.facebook.com/qkrhr.software/","https://x.com/QkrBiz","https://www.linkedin.com/company/qkrhr-hrms/","https://www.instagram.com/qkrbiz/","https://www.youtube.com/@QkrHR","https://in.pinterest.com/qkrbiz/"], "contactPoint": { "@type": "ContactPoint", "telephone": "+91-7428174445", "contactType": "customer service", "email": "sales@qkrbiz.com", "areaServed": "IN", "availableLanguage": ["English","Hindi"] }, "address": { "@type": "PostalAddress", "streetAddress": "706, Manjusha Building, 57, Nehru Place", "addressLocality": "New Delhi", "addressRegion": "Delhi", "postalCode": "110019", "addressCountry": "IN" } },
        	{ "@type": "WebSite", "@id": "https://www.qkrbiz.com/#website", "name": "Qkrbiz", "alternateName": "Qkrbiz Business Management Software", "url": "https://www.qkrbiz.com", "publisher": { "@id": "https://www.qkrbiz.com/#organization" } },
        	{ "@type": "SoftwareApplication", "@id": "https://www.qkrbiz.com/qkrtenders#software", "name": "QkrTenders — Tender Management Software", "url": "https://www.qkrbiz.com/qkrtenders", "applicationCategory": "BusinessApplication", "applicationSubCategory": "Tender Management Software", "operatingSystem": "Web, Android, iOS", "description": "Manage government and private tenders end-to-end with QkrTenders — track bids, deposits, and tender statuses in one platform.", "publisher": { "@id": "https://www.qkrbiz.com/#organization" } },
        	{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/qkrtenders#primaryimage", "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.Tender}`, "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.Tender}`, "width": 1200, "height": 630, "caption": TendersHomeMeta.title },
        	{ "@type": "WebPage", "@id": "https://www.qkrbiz.com/qkrtenders#webpage", "url": "https://www.qkrbiz.com/qkrtenders", "name": TendersHomeMeta.title, "description": TendersHomeMeta.description, "isPartOf": { "@id": "https://www.qkrbiz.com/#website" }, "primaryImageOfPage": { "@id": "https://www.qkrbiz.com/qkrtenders#primaryimage" }, "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "QkrTenders", "item": "https://www.qkrbiz.com/qkrtenders" }] } }
  ]
}
];
