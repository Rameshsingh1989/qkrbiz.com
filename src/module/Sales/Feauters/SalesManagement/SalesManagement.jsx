import { Container } from 'react-bootstrap';
import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from '../../../../assets/images';;
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
// import QkrbizProductMenus from '../../../../components/QkrbizProductMenus/QkrbizProductMenus';
// import { HeaderMenuData } from '../../../../navigation/data/HeaderMenuData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import salesManagementSchemaData from "./SalesManagementSchemaData";

const SalesManagementMeta = {
  title: "Sales Management Software | QkrSales",
  description: "Streamline your entire sales workflow from order intake to cash collection with QkrSales closed-loop Sales Management system.",
};
import "./SalesManagement.scss";

const SalesManagement = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={SalesManagementMeta.title}
    description={SalesManagementMeta.description}
    image={socialImage}
    SchemaData={salesManagementSchemaData}
    />

        <div className="content-top top-bg">
          <Container>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                  <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml("Sales Management")}></h1>
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("QkrSales is an innovative collaboration platform that allows your team to effortlessly organize every detail of customer orders in one place. Streamlining the entire work process from order intake to cash collection, QkrSales provides uninterrupted clarity and ease-of-use with its powerful \"closed loop\" management system.")}></p>
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("At the center of it all is QkrSales revolutionary sales order tracking feature which synchronizes each step from receiving customer PO until completion like a beating heart! With this automated workflow control, make even complex processes run smooth as silk for improved efficiency and timely realization of payment. Get ready to breeze through those tedious tasks today with QkrSales!")}></p>
                </div>
                <div className="col-lg-6">
                  <img loading="eager" fetchPriority="high"
                    className="img-fluid img-top"
                    src={ImagesUrl_sales.SalesManagementHeader}
                    alt="Speed up"
                  />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-12 mt-3">
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("At the heart of every successful sale lies an intricate web composed of numerous moving parts. From PO details to billing plans, payment terms, milestones, customer contacts and attachments, each step is carefully captured with assignees and due dates in order ensure smooth execution from start to finish - ultimately resulting in an easy-to-reference database of conditions that ensures optimal efficiency from the start!")}></p>
                </div>
              </div>
           
          </Container>
        </div>

      {/* <QkrbizProductMenus headerData={HeaderMenuData} appsClass="apps-sales" filterProduct={false} filterType="isSales" subFilterType="isSalesManagement" />  */}

        <div className="wrapper-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 d-flex flex-column mt-2-xs">
                     <div className="card border-0 shadow-sm rounded-3 h-100">
                      <div className="card-body p-4">
                        <h5 className="mb-1 text-magenta" dangerouslySetInnerHTML={sanitizeHtml("Encyclopedic Overview")}></h5>
                        <h3 dangerouslySetInnerHTML={sanitizeHtml("Sales Order Summary")}></h3>
                        <p className="mb-2-xs" dangerouslySetInnerHTML={sanitizeHtml("Keep track of your orders with the Sales Order Summary - it's like an encyclopedic overview for all things related to ordering! With color coded clarity, you can quickly and easily take a deep dive into any order details. Fold up or expand sections depending on what information matters most to you.")}></p>
                        <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml("Plus, access attached documents at any stage in the process; know when milestones are due and payments are due to be collected. Get detailed updates about invoicing, deductions, PBG requests – everything needed is included in this one-stop shop for staying updated with all your sales orders!")}></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column mt-2-xs">
                      <div className="card border-0 shadow-sm rounded-3 h-100">
                            <div className="card-body p-4">
                            <h5 className="mb-1 text-magenta" dangerouslySetInnerHTML={sanitizeHtml("Never miss a deadline again!")}></h5>
                            <h3 dangerouslySetInnerHTML={sanitizeHtml("Reminders and Escalations")}></h3>
                            <p className="mb-2-xs" dangerouslySetInnerHTML={sanitizeHtml("Keep important tasks on track with helpful reminders and escalations. Make sure projects, billing schedules, payments, invoicing, PBG requests and more are completed in time - no matter what the due date may be.")}></p>
                            <p className="mb-0" dangerouslySetInnerHTML={sanitizeHtml("Get automatic notifications for upcoming milestones or overdue bills; LD alerts when deadlines pass by; collections of documents like PBG’s and SD's taken care of easily; keep renewal agreements up to date even before their expiry.")}></p>
                        </div>
                    </div>
                  </div>
              </div>            
          </div>
        </div>     
    </>
  )
}

export default SalesManagement