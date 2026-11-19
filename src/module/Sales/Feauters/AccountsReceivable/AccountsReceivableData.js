import { sales as ImagesUrl_sales } from "../../../../assets/images";

export const AccountsReceivableMeta = {
  title: "Accounts Receivable Management | QkrSales",
  description: "Automate and streamline accounts receivable tracking to minimize delays and maximize cash flow with QkrSales.",
};

  export const AccountsReceivableData = [
    {
      id:1,
      videoUrl:"",
      imgUrl:ImagesUrl_sales.AccountsReceivableHead,
      title:"Accounts Receivable Management",
      desc: `
        <p class='header-desc'> QkrSales provides a robust system for managing Accounts Receivable. The software supports payment tracking and management based on invoicing, milestone completion, and period based payment plans. QkrSales simplifies the payment matching process, ensuring accuracy and reducing errors. The Sales Order Summary page provides a clear overview of order execution <span class='fn-sb'> enabling informed follow ups with customers.</span> </p>
        <p class='header-desc'> Additionally, the software's payment follow-up process provides an informed and persistent method for following up with customers on outstanding payments. The Dashboard provides a clear overview of all payment-related information, streamlining the payment collection process.</p>
      `,
      desc2:"<p class='header-desc mt-5'> With its unique payment follow-up process, do an informed and persistent payment follow-up with customers.</p>"
                 + "<p><span class='fn-sb'>Qkrbiz offers interactive options for managing Accounts Receivable at various levels, including the client level, salesperson level, and sales order level.</span></p>",       
      urls:"/signup",
      SecList: [
          {
            id:1,
            imgUrl:ImagesUrl_sales.MinimizeForecast,
            alt:'Minimize Forecast Risk',
            head:"Minimize <span class='text-magenta'>Forecast Risk</span>",
            desc:"Minimize forecast risk by leveraging real-time data, historical trends, and performance analytics to improve prediction accuracy, reduce uncertainty, and enable smarter, more confident business decisions.",
            Listbox:[]
          },
          {
            id:2,
            imgUrl:ImagesUrl_sales.TrackPayments,
            alt:'Track Payments Follow-up',
            head:"Track Payments <span class='text-magenta'>Follow-up</span>",
            desc:"Minimize forecast risk by using accurate, real-time data and historical insights to create reliable sales projections, reduce uncertainty, and support confident, informed business decisions.",
            Listbox:[]
          },
          {
            id:3,
            imgUrl:ImagesUrl_sales.AllinOnePlatform,
            alt:'All in One Platform',
            head:"All in One <span class='text-magenta'>Platform</span>",
            desc:"With its unique payment follow-up process, do an informed and persistent payment follow-up with customers. Qkrbiz offers interactive options for managing Accounts Receivable at various levels, including the client level, salesperson level, and sales order level.",
            Listbox: [
              {
                id:1,
                title:"Client",
                List: [
                  {
                    li:'Client Outstanding balances'
                  },
                  {
                    li:'Client Ledger'
                  },
                  {
                    li:'Financial Summary'
                  }
                
                ]
              },
              {
                id:4,
                title:"Invoice",
                List: [
                  {
                    li:'Invoice Summary'
                  },
                  {
                    li:'Invoice Collection'
                  },
                  {
                    li:'Financial Summary'
                  }
                ]
              },
              {
                id:2,
                title:"Salesperson",
                List: [
                  {
                    li:'AM Outstanding balances'
                  },
                  {
                    li:'SO Follow-ups'
                  },
                  {
                    li:'Payment Follow-up'
                  }
                
                ]
              },
              {
                id:5,
                title:"Payment",
                List: [
                  {
                    li:'Collection Matching Details'
                  }
                ]
              },
              {
                id:3,
                title:"Sales Order",
                List: [
                  {
                    li:'SO Summary'
                  },
                  {
                    li:'Billing & Collection'
                  }
                ]
              },
            ]
          },
        ]
    },
  ];
