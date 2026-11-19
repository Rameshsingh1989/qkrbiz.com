
import CloudBased from "@/assets/images/hrms/HrmsCity/HrmsDelhi/Cloud-based.svg";
import Compliant from "@/assets/images/hrms/HrmsCity/HrmsDelhi/Compliant.svg";
import Connected from "@/assets/images/hrms/HrmsCity/HrmsDelhi/Connected.svg";
import TransparentPricing from "@/assets/images/hrms/hrmsPrice/TransparentPricing.svg";
// import HrmsCompareHead from "@/assets/images/hrms/hrmsPrice/qkrhr-pricing-banner.webp";
import HrmsCompareHeadMobile from "@/assets/images/hrms/hrmsPrice/qkrhr-pricing-banner-mobile.webp";

export const HrmsPriceMeta = {
  title: "QkrHR Pricing: HRMS Plans and Pricing Details",
  description: "Explore affordable QkrHR pricing starting at ₹40/user/month. Get automated HRMS, payroll, attendance, and leave management without hidden setup costs.",
};

// 

export const HrmsPriceHeadData = [
  {   
      id:1,
      videoUrl:"",
      // imgUrl:HrmsCompareHead,
      imgUrl:HrmsCompareHeadMobile,
      // mobileImage: HrmsCompareHeadMobile,
      alt:"HRMS That Enhances Your Experience.",
      title:"",
      subTitle:"<span class='text-gradient'>HRMS That Enhances Your Experience.</span><br/>Pricing That Delivers Real Value.",
      desc:'No feature paywalls disguised as "tiers." No compliance modules held hostage for a higher plan. Pick the plan that fits your team size — everything you need to run HR and payroll is already inside.',
      subDesc:"",
      link:"/contact",
      HeadList:[]
  }
];
export const HosingData = [
  {
    "title": "Cloud-based",
    "description": "Access anywhere, anytime",
    "iconUrl": CloudBased,
  },
  {
    "title": "Transparent Pricing",
    "description": "No surprise bills. No hidden cost",
    "iconUrl": TransparentPricing,
  },
  {
    "title": "100% Compliant",
    "description": "Designed for Indian businesses.",
    "iconUrl": Compliant
  },
  {
    "title": "24/7 Assistance",
    "description": "Support & quick onboarding.",
    "iconUrl": Connected
  }
];

export const HrmsCompareFAQ = [
      {
         "id": 1,
         "Title": "What's included in each plan?",
         "Content": "Essential covers Core HR, Attendance, Payroll and full statutory compliance. Foundation adds advanced automation, geofencing, expense management and employee engagement. Growth adds performance management, recruitment (ATS) and custom analytics — each plan includes everything from the one below it."
      },
      {
         "id": 2,
         "Title": "Is field force tracking (QkrVisit) included in my plan, or is it extra?",
         "Content": "Core HR, payroll and compliance features in your plan are never split into paid add-ons — everything shown in your plan's feature list is included. QkrVisit is a separate field-force tracking product that connects with any plan; talk to sales for pricing based on your field team size."
      },
      {
         "id": 3,
         "Title": "What happens if I outgrow Essential's 3 legal entities?",
         "Content": "You can move to Foundation, which supports unlimited legal entities, at any time without losing your data."
      },
      {
         "id": 4,
         "Title": "How is Growth priced?",
         "Content": "Growth is quoted per organisation, based on your number of legal entities, contract labour volume, and integration scope. Talk to sales for a quote specific to your setup."
      },
      {
         "id": 5,
         "Title": "Does statutory compliance (PF, ESI, PT, TDS) apply to every plan?",
         "Content": "Yes. Compliance is included from Essential onward — Foundation and Growth build on top of it, they don't remove it."
      },
      {
         "id": 6,
         "Title": 'Why is Growth "Talk to Sales" while Essential and Foundation are self-serve?',
         "Content": "Essential and Foundation are fixed-price plans you can start instantly with a free demo. Growth's price depends on your specific entity count and scope, so it needs a quick conversation to quote accurately."
      },
      {
         "id": 7,
         "Title": "How secure is my company's data on QkrHR?",
         "Content": "We use enterprise-grade security — data encryption, role-based access, audit logs, and automated backups. Your data stays safe and compliant."
      },
      {
         "id": 8,
         "Title": "Can I try QkrHR before subscribing?",
         "Content": "Yes — you can book a free personalised demo to explore features and see how QkrHR fits your business."
      },
      {
         "id": 9,
         "Title": "Can I upgrade or downgrade my plan anytime?",
         "Content": "Yes. QkrHR is flexible — you can switch plans as your team grows or your requirements change, without losing any data."
      },
      {
         "id": 10,
         "Title": "Do all plans include support?",
         "Content": "Yes. Every plan comes with dedicated support, free onboarding assistance, and regular product updates."
      },
      {
         "id": 11,
         "Title": "How often do you release new features?",
         "Content": "We constantly improve QkrHR. New features and enhancements are rolled out regularly, and all updates are included in your subscription."
      }
]
