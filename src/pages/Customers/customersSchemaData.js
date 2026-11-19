import { logos as ImagesUrl_logos, customers as ImagesUrl_customers } from "../../assets/images";
const customersSchemaData = [
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
			{
			"@type": "ImageObject",
			"@id": "https://www.qkrbiz.com/customers#primaryimage",
			"url": `https://www.qkrbiz.com${ImagesUrl_customers.Customers}`,
			"contentUrl": `https://www.qkrbiz.com${ImagesUrl_customers.Customers}`,
			"width": 1200, "height": 630,
			"caption": "Qkrbiz Customers — Trusted by businesses across India"
			},
			{
			"@type": "ItemList",
			"@id": "https://www.qkrbiz.com/customers#customerlist",
			"name": "Businesses Powered by Qkrbiz",
			"description": "Companies across India that trust Qkrbiz for HRMS, Payroll, and Sales Management",
			"url": "https://www.qkrbiz.com/customers"
			},
			{
			"@type": "WebPage",
			"@id": "https://www.qkrbiz.com/customers#webpage",
			"url": "https://www.qkrbiz.com/customers",
			"name": "Our Customers — Qkrbiz Trusted by Businesses Across India",
			"description": "Explore how Qkrbiz empowers businesses with innovative technology solutions, driving efficiency, growth, and performance across diverse industry sectors.",
			"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
			"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/customers#primaryimage" },
			"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },
			{ "@type": "ListItem", "position": 2, "name": "Customers", "item": "https://www.qkrbiz.com/customers" }
			]
			}
			}
		]
	}
];
export default customersSchemaData;