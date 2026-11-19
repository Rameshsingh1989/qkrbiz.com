import { logos as ImagesUrl_logos, Alertnotification as ImagesUrl_Alertnotification } from "../../assets/images";
import { AlertFAQ, AlertnotificationMeta } from "./AlertnotificationData";

const alertnotificationSchemaData = [
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
        	{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/alert-notification#primaryimage", "url": `https://www.qkrbiz.com${ImagesUrl_Alertnotification.AlertsNotificationHeader}`, "contentUrl": `https://www.qkrbiz.com${ImagesUrl_Alertnotification.AlertsNotificationHeader}`, "width": 1200, "height": 630, "caption": "Alerts & Notifications — Smart Business Alerts | Qkrbiz" },
        	{
        	"@type": "WebPage",
        	"@id": "https://www.qkrbiz.com/alert-notification#webpage",
        	"url": "https://www.qkrbiz.com/alert-notification",
        	"name": AlertnotificationMeta.title,
        	"description": AlertnotificationMeta.description,
        	"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        	"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/alert-notification#primaryimage" },
        	"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "Alerts & Notifications", "item": "https://www.qkrbiz.com/alert-notification" }] }
        	},
        	{
        	"@type": "FAQPage",
        	"@id": "https://www.qkrbiz.com/alert-notification#faq",
        	"isPartOf": { "@id": "https://www.qkrbiz.com/alert-notification#webpage" },
        	"mainEntity": AlertFAQ.map((faq) => ({
        		"@type": "Question",
        		"name": faq.Title,
        		"acceptedAnswer": { "@type": "Answer", "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() }
        	}))
        	}
  ]
}

];
export default alertnotificationSchemaData;