
import { ogImages as ImagesUrl_ogImages, fieldForceAuto as ImagesUrl_fieldForceAuto } from '../../../../assets/images';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import businessManagementsSchemaData from "./BusinessManagementsSchemaData";

const BusinessManagementsMeta = {
  title: "Business Management Software | QkrSales",
  description: "Manage your complete business sales operations with QkrSales — orders, billing, payments, and performance in one platform.",
};

const BusinessManagements = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

   const sanitizeHtml = useSanitizeHtml();

  return (
    <>
        <RouteSpecificMeta
        title={BusinessManagementsMeta.title}
        description={BusinessManagementsMeta.description}
        image={socialImage}
        SchemaData={businessManagementsSchemaData}
        />

        <div className="content-top top-bg">
          <div className="container">
           
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
      
                  <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml("Business Management Software")}></h1>
                  <p className="header-desc">Run your entire business sales operation in one place with QkrSales Business Management — from orders to collections.</p>

                  <ul className="list-unstyled">
                    <li dangerouslySetInnerHTML={sanitizeHtml("Qkrproject for effective project management and budgeting.")}></li>
                    <li dangerouslySetInnerHTML={sanitizeHtml("QkrExpense for complete expense management, including advances, travel bookings, and the comparison of actual expenses with budgeted expenses")}></li>
                    <li dangerouslySetInnerHTML={sanitizeHtml("QkrHR for sales, service, and project visits tracking for each customer, order, project, or ticket, as well as full HRMS functions.")}></li>
                    <li dangerouslySetInnerHTML={sanitizeHtml("Qkrtender for managing the bidding process from submission, approval, bank application, client submission, to eventual recovery of EMD and PBG")}></li>
                    <li dangerouslySetInnerHTML={sanitizeHtml("Qkrinventory for managing the bill of materials, customer locations, delivery dates, vendor orders, material receipt, vendor payment, and customer invoicing throughout the entire inventory cycle.")}></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <img loading="eager" fetchPriority="high" className="img-fluid img-top" src={ImagesUrl_fieldForceAuto.fieldForceHeader} alt="Business management" />
                </div>
              </div>
            
          </div>
        </div>
    </>
  )
}

export default BusinessManagements