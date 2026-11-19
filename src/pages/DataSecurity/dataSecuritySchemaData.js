
import { logos as ImagesUrl_logos, Security as ImagesUrl_Security } from "../../assets/images";
import { DataSecurityFAQ, DataSecurityMeta } from "./SecurityData";

const dataSecuritySchemaData = [
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
			{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/data-security#primaryimage", "url": `https://www.qkrbiz.com${ImagesUrl_Security.SecurityHeader}`, "contentUrl": `https://www.qkrbiz.com${ImagesUrl_Security.SecurityHeader}`, "width": 1200, "height": 630, "caption": "Data Security — Enterprise-Grade Protection | Qkrbiz" },
			{
			"@type": "WebPage",
			"@id": "https://www.qkrbiz.com/data-security#webpage",
			"url": "https://www.qkrbiz.com/data-security",
			"name": DataSecurityMeta.title,
			"description": DataSecurityMeta.description,
			"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
			"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/data-security#primaryimage" },
			"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "Data Security", "item": "https://www.qkrbiz.com/data-security" }] }
			},
			{
			"@type": "FAQPage",
			"@id": "https://www.qkrbiz.com/data-security#faq",
			"isPartOf": { "@id": "https://www.qkrbiz.com/data-security#webpage" },
			"mainEntity": DataSecurityFAQ.map((faq) => ({
				"@type": "Question",
				"name": faq.Title,
				"acceptedAnswer": { "@type": "Answer", "text": faq.Content.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() }
			}))
			}
		]
	}
];
export default dataSecuritySchemaData;