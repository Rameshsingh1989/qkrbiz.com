import {logos as ImagesUrl_logos} from "@/assets/images";

export const salesHomeSchemaData = [
{
  "@context": "https://schema.org",
  "@graph": [
        	{
        	"@type": "Organization",
        	"@id": "https://www.qkrbiz.com/#organization",
        	"name": "Qkrbiz", "legalName": "Intec Infonet Pvt. Ltd.", "url": "https://www.qkrbiz.com", "logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrSalesLogo}`,
        	"sameAs": ["https://www.facebook.com/qkrhr.software/","https://x.com/QkrBiz","https://www.linkedin.com/company/qkrhr-hrms/","https://www.instagram.com/qkrbiz/","https://www.youtube.com/@QkrHR","https://in.pinterest.com/qkrbiz/"],
        	"contactPoint": { "@type": "ContactPoint", "telephone": "+91-7428174445", "contactType": "customer service", "email": "sales@qkrbiz.com", "areaServed": "IN", "availableLanguage": ["English","Hindi"] },
        	"address": { "@type": "PostalAddress", "streetAddress": "706, Manjusha Building, 57, Nehru Place", "addressLocality": "New Delhi", "addressRegion": "Delhi", "postalCode": "110019", "addressCountry": "IN" }
        	},
        	{ "@type": "WebSite", "@id": "https://www.qkrbiz.com/#website", "name": "Qkrbiz", "alternateName": "Qkrbiz Business Management Software", "url": "https://www.qkrbiz.com", "publisher": { "@id": "https://www.qkrbiz.com/#organization" } },
        	{
        	"@type": "SoftwareApplication",
        	"@id": "https://www.qkrbiz.com/qkrsales#software",
            "name": "QkrSales",	     	
        	"url": "https://www.qkrbiz.com/qkrsales",
        	"applicationCategory": "BusinessApplication",
        	"applicationSubCategory": "Sales Management Software",
        	"operatingSystem": "Web, Android, iOS",
        	"description": "QkrSales helps you speed up order-to-cash conversion. Manage invoicing, billing, accounts receivable, and sales performance in one powerful platform.",
        	"publisher": { "@id": "https://www.qkrbiz.com/#organization" }
        	},
        	{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/qkrsales#primaryimage", "url": "https://www.qkrbiz.com/assets/sales-CPzn73Z3.webp", "contentUrl": "https://www.qkrbiz.com/assets/sales-CPzn73Z3.webp", "width": 1200, "height": 630, "caption": "QkrSales — Best Sales Management Software India | Qkrbiz" },
        	{
        	"@type": "WebPage",
        	"@id": "https://www.qkrbiz.com/qkrsales#webpage",
        	"url": "https://www.qkrbiz.com/qkrsales",
            "name": "Order to Cash Sales Management Software | QkrSales",		     
        	"description": "Speed up order-to-cash with QkrSales. Manage billing, invoicing, sales performance, and accounts receivable in one powerful platform.",
        	"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        	"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/qkrsales#primaryimage" },
        	"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "QkrSales", "item": "https://www.qkrbiz.com/qkrsales" }] }
        	}
  ]
}
]
export default salesHomeSchemaData;
