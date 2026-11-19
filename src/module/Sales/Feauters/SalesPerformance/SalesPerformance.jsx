import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from '../../../../assets/images';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import salesPerformanceSchemaData from "./SalesPerformanceSchemaData";

const SalesPerformanceMeta = {
  title: "Sales Performance Tracking | QkrSales",
  description: "Track team-wise sales performance with real-time MIS dashboards and achievement reports using QkrSales Performance module.",
};
import "./SalesPerformance.scss";

const SalesPerformance = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

  const sanitizeHtml = useSanitizeHtml();

  return (
    <>

    <RouteSpecificMeta
      title={SalesPerformanceMeta.title}
      description={SalesPerformanceMeta.description}
      image={socialImage}
      SchemaData={salesPerformanceSchemaData}
      />

     <div className="content-top top-bg">
        <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml("Sales Performance Tracking")}></h1>
                <p className="header-text" dangerouslySetInnerHTML={sanitizeHtml("QkrSales helps in monitoring sales performance by providing several dashboards, summary snapshots, and MIS reports. These tools allow you to set period-based targets for each salesperson and track their performance, which helps in increasing sales. Additionally, the software helps in avoiding the issue of managing recovery of payments handled by former employees who have left the company.")}></p>
              </div>
              <div className="col-lg-6">
                <img loading="eager" fetchPriority="high"
                  className="img-fluid img-top"
                  src={ImagesUrl_sales.SalesPerformanceHeader}
                  alt="Speed up"
                />
              </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default SalesPerformance