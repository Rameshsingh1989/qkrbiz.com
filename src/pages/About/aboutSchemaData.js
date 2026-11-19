import { logos as ImagesUrl_logos, ogImages as ImagesUrl_ogImages } from '../../assets/images';

const aboutSchemaData = [
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
			"availableLanguage": [
			"English",
			"Hindi"
			]
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
		},
		{
		"@type": "ImageObject",
		"@id": "https://www.qkrbiz.com/about#primaryimage",
		"url": `https://www.qkrbiz.com${ImagesUrl_ogImages.About}`,
		"contentUrl": `https://www.qkrbiz.com${ImagesUrl_ogImages.About}`,
		"width": 1200,
		"height": 630,
		"caption": "About Qkrbiz — India's Business Management Software Company"
		},
		{
		"@type": "AboutPage",
		"@id": "https://www.qkrbiz.com/about#webpage",
		"url": "https://www.qkrbiz.com/about",
		"name": "About Qkrbiz — India's Business Management Software Company",
		"description": "Learn about Qkrbiz and our mission to empower Indian businesses with smart HRMS, payroll, field tracking, and business management software. Request a demo.",
		"isPartOf": {
			"@id": "https://www.qkrbiz.com/#website"
		},
		"about": {
			"@id": "https://www.qkrbiz.com/#organization"
		},
		"primaryImageOfPage": {
			"@id": "https://www.qkrbiz.com/about#primaryimage"
		},
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://www.qkrbiz.com"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "About",
				"item": "https://www.qkrbiz.com/about"
			}
			]
		}
		}
	]
	}
];

export default aboutSchemaData;