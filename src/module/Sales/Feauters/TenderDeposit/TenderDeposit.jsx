import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from "../../../../assets/images";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import tenderDepositSchemaData from "./TenderDepositSchemaData";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const TenderDepositMeta = {
  title: "Tender Deposit Management | QkrSales",
  description: "Manage tender deposits and bid tracking with ease using QkrSales — India's leading sales management software.",
};
import "./TenderDeposit.scss";

const TenderDeposit = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={TenderDepositMeta.title}
    description={TenderDepositMeta.description}
    image={socialImage}
	  SchemaData={tenderDepositSchemaData}
    />
    <div className="content-top top-bg">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div dangerouslySetInnerHTML={sanitizeHtml(`
                <h1 class="header-title">Tender Deposit Management</h1>
                <p class="header-desc">Tender deposit management in QkrSales streamlines the process of managing important terms and conditions, such as Letter of Intent (LD), Bank Guarantee (BG), and Security Deposit (SD), of a customer purchase order (PO). The integration with Qkrtender tracks the entire lifecycle of bidding and deposits, including the due date for submission, approval of requests, utilization of bank limit, submission to the client, and eventual recovery from the client. This helps ensure smooth and efficient management of deposit-related processes.</p>`)}/>
             </div>

          <div className="col-lg-6">
            <img loading="eager" fetchPriority="high" className="img-fluid img-top" src={ImagesUrl_sales.TenderDepositHeader} alt="Speed up" />
          </div>

        </div>
      </div>
    </div>
    <div className="wrapper-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <SectionHeading subTitle="" title="Other Terms and Conditions" description="Any special terms specific to a purchase order can be managed using this section. Some examples for such terms:" subTitleCenter={false} headingUnderLine={false} />
              <div dangerouslySetInnerHTML={sanitizeHtml(`
                  <ul class="ul-icon mt-3">
                    <li class="tick-icon-magenta">Contract has to be signed within specified days from PO Date.</li>
                    <li class="tick-icon-magenta">Insurance Policy had to be submitted by a specified date.</li>
                    <li class="tick-icon-magenta">Rental charges to be billed for a specific period.</li>
                  </ul>
                  <p class="mt-3">Each term may have deadline</p>
                  <ul class="ul-icon mt-3">
                    <li class="tick-icon-magenta">Linked to a Milestone</li>
                    <li class="tick-icon-magenta">Linked to a date such as PO Date</li>
                    <li class="tick-icon-magenta">Date specified by user</li>
                  </ul>
                  <p class="mt-3">Each term can be assigned to a person responsible. For other teams, if a deadline is fixed and responsibility has been assigned, the completion can be tracked with alerts & status updates.</p>
                `)}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default TenderDeposit;
