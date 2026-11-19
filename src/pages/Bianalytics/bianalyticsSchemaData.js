import { logos as ImagesUrl_logos, bIAnalytics as ImagesUrl_bIAnalytics } from "../../assets/images";

const bianalyticsSchemaData = [
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
        	{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/bi-analytics#primaryimage", "url": `https://www.qkrbiz.com${ImagesUrl_bIAnalytics.BiHead}`, "contentUrl": `https://www.qkrbiz.com${ImagesUrl_bIAnalytics.BiHead}`, "width": 1200, "height": 630, "caption": "BI & Analytics — Business Intelligence Dashboard | Qkrbiz" },
        	{
        	"@type": "WebPage",
        	"@id": "https://www.qkrbiz.com/bi-analytics#webpage",
        	"url": "https://www.qkrbiz.com/bi-analytics",
			"name": "Business Intelligence & Analytics Dashboard | Qkrbiz",   	     	
        	"description": "Leverage Qkrbiz BI & Analytics to get actionable insights from your HR, Payroll, and Sales data with interactive dashboards.",
        	"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        	"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/bi-analytics#primaryimage" },
        	"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "BI & Analytics", "item": "https://www.qkrbiz.com/bi-analytics" }] }
        	}
  ]
}

];
export default bianalyticsSchemaData;