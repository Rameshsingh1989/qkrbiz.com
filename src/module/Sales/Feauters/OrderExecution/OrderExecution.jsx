import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from '../../../../assets/images';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import orderExecutionSchemaData from "./OrderExecutionSchemaData";

const OrderExecutionMeta = {
  title: "Order Execution Software | QkrSales",
  description: "Manage and execute sales orders from customer PO receipt to delivery with automated milestones using QkrSales.",
};

const OrderExecution = () => {

  const socialImage = ImagesUrl_ogImages.Sales;
  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={OrderExecutionMeta.title}
    description={OrderExecutionMeta.description}
    image={socialImage}
    SchemaData={orderExecutionSchemaData}
    />
      <div className="content-top top-bg">
          <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                  <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml("Order Execution Software")}></h1>
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("Milestones are used to track important deliverables to be completed for execution of order and realization of payment. Additionally, it provides a clear overview of the progress made, reducing the chances of missed deadlines and unmet targets. The integration of milestone tracking with the rest of your order management system helps you to stay on top of your order execution and take corrective action where necessary.")}></p>
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("Set the due date and assignee for each milestone so that the concerned persons are fully aware of their tasks and deadline. Complex dependencies between different milestones or other order dates can be configured and auto update based on completion of milestones.")}></p>
                </div>
                <div className="col-lg-6">
                  <img loading="eager" fetchPriority="high"
                    className="img-fluid img-top"
                    src={ImagesUrl_sales.OrderExecutionHeader}
                    alt="Speed up"
                  />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-12 mt-3">
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("The visual representation of milestones and their status makes it easy to identify any potential roadblocks and take corrective action, leading to better order execution and customer satisfaction.")}></p>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default OrderExecution