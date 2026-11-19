import {logos as ImagesUrl_logos} from "@/assets/images";
import { KolkataHrmsFAQ , KolkataHrmsMeta } from "./KolkataHrmsData";

const pageUrl = "https://www.qkrbiz.com/hrms-software/hr-payroll-software-kolkata";

export const KolkataSchemaData = [
   {
 	"@context": "https://schema.org",
 	"@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
 	"name": KolkataHrmsMeta.title,
 	"description": KolkataHrmsMeta.description,
 	"inLanguage": "en-IN",
 	"keywords": [
   	"HRMS software in Kolkata",
   	"Payroll software in Kolkata",
   	"best payroll software in Kolkata",
   	"payroll software companies in Kolkata",
   	"hr management payroll attendance software in Kolkata",
   	"hr payroll software in Kolkata"
 	]
   },
   {
 	"@context": "https://schema.org",
 	"@type": "BreadcrumbList",
 	"itemListElement": [
   	{
     	"@type": "ListItem",
     	"position": 1,
     	"name": "Home",
     	"item": "https://www.qkrbiz.com/"
   	},
   	{
     	"@type": "ListItem",
     	"position": 2,
     	"name": "HRMS Software",
     	"item": "https://www.qkrbiz.com/hrms-software"
   	},
   	{
     	"@type": "ListItem",
     	"position": 3,
   	    "name": KolkataHrmsMeta.title.split(" | ")[0],
     	"item": pageUrl
   	}
 	]
   },
   {
 	"@context": "https://schema.org",
 	"@type": "Organization",
 	"name": "Qkrbiz",
 	"legalName": "Intec Infonet Pvt. Ltd.",
 	"url": "https://www.qkrbiz.com/",
 	"logo": `https://www.qkrbiz.com${ImagesUrl_logos.QkrbizLogo}`,
 	"sameAs": [
    "https://www.linkedin.com/products/qkrbiz-qkrhr/",
   	"https://www.facebook.com/QkrHR/",
       "https://x.com/QkrBiz",
       "https://www.getapp.com/hr-employee-management-software/a/qkrhr/",
       "https://www.capterra.in/software/1070742/QkrHR",
       "https://www.softwareadvice.com/product/522919-QkrHR/",
       "https://www.softwareworld.co/software/qkrhr-reviews",
       "https://www.techjockey.com/detail/qkrhr"
 	],
 	"address": {
   	"@type": "PostalAddress",
   	"streetAddress": "706, Manjusha Building, 57, Nehru Place",
   	"addressLocality": "New Delhi",
   	"postalCode": "110019",
   	"addressCountry": "IN"
 	},
 	"contactPoint": {
   	"@type": "ContactPoint",
   	"contactType": "sales",
   	"email": "sales@qkrbiz.com",
   	"telephone": "+91 7428174445",
   	"areaServed": "IN"
 	}
   },
   {
 	"@context": "https://schema.org",
 	"@type": "SoftwareApplication",
 	"name": "QkrHR",
 	"operatingSystem": "Web, Android, iOS",
 	"applicationCategory": "BusinessApplication",
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
 	}
   },
   {
   	"@context": "https://schema.org",
   	"@type": "FAQPage",
   	"@id": `${pageUrl}#faq`,
   	"isPartOf": {
   		"@id": `${pageUrl}#webpage`
   	},
   	"mainEntity": KolkataHrmsFAQ.map((faq) => ({
   		"@type": "Question",
   		"name": faq.Title,
   		"acceptedAnswer": {
   			"@type": "Answer",
   			"text": faq.Content.replace(/\s+/g, " ").trim()
   		}
   	}))
   }
]
