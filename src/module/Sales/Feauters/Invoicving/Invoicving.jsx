import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from '../../../../assets/images';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import invoicingSchemaData from "./InvoicingSchemaData";

const InvoicvingMeta = {
  title: "Invoicing Software | QkrSales",
  description: "Generate accurate GST-compliant invoices with complex billing schedules and multi-year payment plans using QkrSales Invoicing software.",
};
import "./Invoicving.scss";

const Invoicving = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>

      <RouteSpecificMeta
      title={InvoicvingMeta.title}
      description={InvoicvingMeta.description}
      image={socialImage}
	    SchemaData={invoicingSchemaData}
      />

      <div className="content-top top-bg">
          <div className="container">
           
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                  <h1 className="header-title">Invoicing Software </h1>
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("With QkrSales, you can ensure timely invoicing by tracking the due dates and status of billing against each date. The software provides proactive alerts for upcoming billing and maps every invoice to the billing plan and payment terms. The payment follow-up module helps improve collections and reduce debtor days, providing a clear picture of receivables against each invoice, bill plan, and payment term. This simplifies the process of managing Accounts Receivable and streamlines the payment collection process.")}></p>
                  <div className="col-lg-12 mt-3">
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("With its unique payment follow-up process, do an informed and persistent payment follow-up with customers.")}></p>
                </div>
                <div className="col-lg-12 mt-3">
                  <p className="header-desc fn-m" dangerouslySetInnerHTML={sanitizeHtml("Qkrbiz offers interactive options for managing Accounts Receivable at various levels, including the client level, salesperson level, and sales order level.")}></p>
                </div>
                </div>
                <div className="col-lg-6">
                  <img loading="eager" fetchPriority="high" className="img-fluid img-top" src={ImagesUrl_sales.Invoicing} alt="Speed up" />
                </div>
              </div>
         
          </div>
      </div>

    </>
  )
}

export default Invoicving