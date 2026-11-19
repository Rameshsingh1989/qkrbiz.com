import { HrmsOnboardingHomeMeta } from "./HrmsOnboardingData";
import { logos as ImagesUrl_logos, employeesOnboarding as ImagesUrl_employeesOnboarding } from "../../../../assets/images";

export const HrmsOnboardingSchemaData = [

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
        	"@id": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software#software",
        	"name": "QkrHR Employee Onboarding Software",
        	"url": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software",
        	"applicationCategory": "BusinessApplication",
        	"applicationSubCategory": "HRMS Software",
        	"operatingSystem": "Web, Android, iOS",
        	"description": "QkrHR is the best employee onboarding software. Reduce admin time, boost new hire engagement, and go 100% paperless with automated onboarding workflows.",
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
        	{ "@type": "ImageObject", "@id": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software#primaryimage", "url": `https://www.qkrbiz.com${ImagesUrl_employeesOnboarding.onboardingHeader}`, "width": 1200, "height": 630, "caption": "Employee Onboarding Software — QkrHR | Qkrbiz" },
        	{
        	"@type": "FAQPage",
        	"@id": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software#faq",
        	"mainEntity": [
        	  {
        	    "@type": "Question",
        	    "name": "What is QkrHR Employee Onboarding?",
        	    "acceptedAnswer": {
        	      "@type": "Answer",
        	      "text": "QkrHR is a digital, comprehensive solution designed to deliver a personalized, paperless, and efficient onboarding experience for new hires, from pre-boarding all the way through their first day and initial months."
        	    }
        	  },
        	  {
        	    "@type": "Question",
        	    "name": "How does QkrHR handle documentation and compliance?",
        	    "acceptedAnswer": {
        	      "@type": "Answer",
        	      "text": "The system enables digital, paperless documentation, allowing offer letters to be created, sent, and tracked in minutes. It also facilitates the secure capture of e-signatures, consents, and mandatory compliance/statutory forms effortlessly."
        	    }
        	  },
        	  {
        	    "@type": "Question",
        	    "name": "How does QkrHR improve the manager's role in onboarding?",
        	    "acceptedAnswer": {
        	      "@type": "Answer",
        	      "text": "It transforms managers into productive coaches by allowing them to track the new hire's progress and assign personalized tasks. This ensures everything is ready for the first day, leading to a faster time to productivity."
        	    }
        	  },
        	  {
        	    "@type": "Question",
        	    "name": "Does the system only support new hires?",
        	    "acceptedAnswer": {
        	      "@type": "Answer",
        	      "text": "No. QkrHR supports the entire employee journey, including new hire onboarding, cross-boarding (internal transfers), and promotions, simplifying employee movements and processes within the organization."
        	    }
        	  },
        	  {
        	    "@type": "Question",
        	    "name": "What is the key benefit of the QkrHR mobile experience?",
        	    "acceptedAnswer": {
        	      "@type": "Answer",
        	      "text": "The platform offers a mobile experience that allows new employees to access and complete onboarding tasks and information \"the moment they say yes,\" boosting early engagement and convenience."
        	    }
        	  },
        	  {
        	    "@type": "Question",
        	    "name": "What makes QkrHR a superior HR solution?",
        	    "acceptedAnswer": {
        	      "@type": "Answer",
        	      "text": "It is highlighted for being fully configurable to your company's policies, offering a superior employee experience, ensuring reduced compliance risk, and providing seamless integration with existing systems for a truly paperless workflow."
        	    }
        	  }
        	]
        	},
        	{
        	"@type": "WebPage",
        	"@id": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software#webpage",
        	"url": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software",
        	"name": HrmsOnboardingHomeMeta.title,
        	"description": HrmsOnboardingHomeMeta.description,
        	"isPartOf": { "@id": "https://www.qkrbiz.com/#website" },
        	"primaryImageOfPage": { "@id": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software#primaryimage" },
        	"breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qkrbiz.com" },{ "@type": "ListItem", "position": 2, "name": "HRMS Software", "item": "https://www.qkrbiz.com/hrms-software" },{ "@type": "ListItem", "position": 3, "name": "Employee Onboarding Software", "item": "https://www.qkrbiz.com/hrms-software/employee-onboarding-software" }] }
        	}
  ]
}

];
