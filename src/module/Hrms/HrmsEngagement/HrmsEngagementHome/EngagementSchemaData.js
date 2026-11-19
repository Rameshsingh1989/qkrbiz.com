import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { EngagementFaqData , HrmsEngagementHomeMeta } from "./EngagementData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/employee-engagement";

export const EngagementSchemaData = [
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
		"@type": "SoftwareApplication",
		"@id": `${pageUrl}#software`,
		"name": "QkrHR",        	     	
		"url": pageUrl,
		"applicationCategory": "BusinessApplication",
		"applicationSubCategory": "HRMS Software",
		"operatingSystem": "Web, Android, iOS",
		"description": HrmsEngagementHomeMeta.description,
		"offers": {
			"@type": "AggregateOffer",
			"priceCurrency": "INR",
			"lowPrice": "3000",
			"highPrice": "5000",
			"offerCount": 2,
			"url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
			"offers": [
			{
				"@type": "Offer",
				"name": "Essential",
				"price": "3000",
				"priceCurrency": "INR",
				"description": "₹3,000 per month for up to 50 users; ₹40 per additional user per month.",
				"url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
				"priceSpecification": {
				"@type": "UnitPriceSpecification",
				"price": "3000",
				"priceCurrency": "INR",
				"unitText": "MONTH"
				}
			},
			{
				"@type": "Offer",
				"name": "Foundation",
				"price": "5000",
				"priceCurrency": "INR",
				"description": "₹5,000 per month for up to 50 users; ₹80 per additional user per month.",
				"url": "https://www.qkrbiz.com/hrms-software/qkrhr-pricing",
				"priceSpecification": {
				"@type": "UnitPriceSpecification",
				"price": "5000",
				"priceCurrency": "INR",
				"unitText": "MONTH"
				}
			}
			]
		},
		"publisher": { "@id": "https://www.qkrbiz.com/#organization" }
		},
		{ "@type": "ImageObject", "@id": `${pageUrl}#primaryimage`, "url": `https://www.qkrbiz.com${ImagesUrl_ogImages.QkrHr}`, "contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.QkrHr}`, "width": 1200, "height": 630, "caption": "Employee Engagement Software — QkrHR | Qkrbiz" },
		{
		"@type": "WebPage",
		"@id": `${pageUrl}#webpage`,
		"url": pageUrl,
		"name": HrmsEngagementHomeMeta.title,        	     	
		"description": HrmsEngagementHomeMeta.description,
		"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
		"primaryImageOfPage": { "@id": `${pageUrl}#primaryimage` },
		"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },{ "@type": "ListItem", "position": 3, "name": "Employee Engagement", "item": pageUrl }] }
		},
		{
		"@type": "FAQPage",
		"@id": `${pageUrl}#faq`,
		"isPartOf": { "@id": `${pageUrl}#webpage` },
		"mainEntity": EngagementFaqData.map((faq) => ({
			"@type": "Question",
			"name": faq.Title,
			"acceptedAnswer": {
			"@type": "Answer",
			"text": faq.Content.replace(/<\/?a[^>]*>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
			}
		}))
		}	
  ]
}

];
