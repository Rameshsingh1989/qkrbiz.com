import { logos as ImagesUrl_logos, Document as ImagesUrl_Document } from "../../assets/images";
import { DocumentsFAQ, DocumentsMeta } from "./DocumentsData";

const documentSchemaData = [
{
  "@context": "https://schema.org",
  "@graph": [
        	{
        	"@type": "Organization",
        	"@id": "https://www.qkrbiz.com/#organization",
        	"name": "Qkrbiz", "legalName": "Intec Infonet Pvt. Ltd.", "url": "https://www.qkrbiz.com", "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
        	"sameAs": ["https://www.facebook.com/qkrhr.software/","https://x.com/QkrBiz","https://www.linkedin.com/company/qkrhr-hrms/","https://www.instagram.com/qkrbiz/","https://www.youtube.com/@QkrHR","https://in.pinterest.com/qkrbiz/"],
        	"contactPoint": { "@type": "ContactPoint", "telephone": "+91-7428174445", "contactType": "customer service", "email": "sales@qkrbiz.com", "areaServed": "IN", "availableLanguage": ["English","Hindi"] },
        	"address": { "@type": "PostalAddress", "streetAddress": "706, Manjusha Building, 57, Nehru Place", "addressLocality": "New Delhi", "addressRegion": "Delhi", "postalCode": "110019", "addressCountry": "IN" }
        	},
        	{ "@type": "WebSite", "@id": "https://www.qkrbiz.com/#website", "name": "Qkrbiz", "alternateName": "Qkrbiz Business Management Software", "url": "https://www.qkrbiz.com", "publisher": { "@id": "https://www.qkrbiz.com/#organization" } },
        	{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/documents#primaryimage", "url": `https://www.qkrbiz.com${ImagesUrl_Document.HocumentManagmentHeader}`, "contentUrl": `https://www.qkrbiz.com${ImagesUrl_Document.HocumentManagmentHeader}`, "width": 1200, "height": 630, "caption": "Document Management — Store & Access Business Files | Qkrbiz" },
        	{
        	"@type": "WebPage",
        	"@id": "https://www.qkrbiz.com/documents#webpage",
        	"url": "https://www.qkrbiz.com/documents",
			"name": DocumentsMeta.title,
        	"description": DocumentsMeta.description,
        	"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        	"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/documents#primaryimage" },
        	"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "Documents", "item": "https://www.qkrbiz.com/documents" }] }
        	},
        	{
        	"@type": "FAQPage",
        	"@id": "https://www.qkrbiz.com/documents#faq",
        	"isPartOf": { "@id": "https://www.qkrbiz.com/documents#webpage" },
        	"mainEntity": DocumentsFAQ.map((faq) => ({
        		"@type": "Question",
        		"name": faq.Title,
        		"acceptedAnswer": { "@type": "Answer", "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() }
        	}))
        	}
  ]
}
];
export default documentSchemaData;