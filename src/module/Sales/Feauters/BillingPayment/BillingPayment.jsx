import { ogImages as ImagesUrl_ogImages, sales as ImagesUrl_sales } from '../../../../assets/images';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleDoubleRight } from 'react-icons/fa';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import billingPaymentSchemaData from "./BillingPaymentSchemaData";
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const BillingPaymentMeta = {
  title: "Milestone & Period Sales Billing Software | QkrSales",
  description: "Gain complete control over billing, collection, and payment schedules with QkrSales Billing & Payment management.",
};

const BillingPayment = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

   const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={BillingPaymentMeta.title}
    description={BillingPaymentMeta.description}
    image={socialImage}
	  SchemaData={billingPaymentSchemaData}
    />

     <div className="content-top top-bg">
          <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                  <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml("Billing & Payment Terms")}></h1 >
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("QkrSales provides a comprehensive billing and payment management system that allows businesses to create and manage billing plans for each customer order. Billing plans can be based on milestones, periods, or have no billing schedule at all. The software tracks each bill due date and payment due date for each bill plan, milestone, and payment term, ensuring timely billing and payment collection.")}></p>  
                  <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml("In addition to billing plans, QkrSales also tracks payment terms for each customer order. Payment terms specify the payment schedule for each bill plan and can be based on milestones and periods. The software tracks each bill due date and payment due date for each bill plan, milestone, and payment term.")}></p>
                </div>
                <div className="col-lg-6">
                  <img loading="eager" fetchPriority="high" className="img-fluid img-top" src={ImagesUrl_sales.BillingPaymentHeader} alt="Speed up" />
                </div>
              </div>
              
          </div>
      </div>
      <div className="container">
             <div className="row justify-content-between">
                <div className="col-lg-12 mt-3">
                  <p className="fn-2" dangerouslySetInnerHTML={sanitizeHtml("QkrSales provides a comprehensive view of all billing and payment information, enabling businesses to keep track of their billing and payment schedules, and ensuring no delays in billing.")}></p>
                </div>
              </div>
      </div>
      <div className="wrapper-area">
          <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <SectionHeading subTitle="" title="Types of Billing Plan" description="" subTitleCenter={false} headingUnderLine={false} /> 
                    <h4 dangerouslySetInnerHTML={sanitizeHtml("Period Based Billing Plan")}></h4>
                   
                    <p dangerouslySetInnerHTML={sanitizeHtml("Period based billing plans are used where recurring billing has to be done periodically such")}></p>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Manpower support charges to be billed monthly")}>
                      </div>
                    </div>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("AMC charges to be billed quarterly")}>
                      </div>
                    </div>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Rental charges to be billed for a specific period")}>
                      </div>
                    </div>
                    <h4 className="mt-4" dangerouslySetInnerHTML={sanitizeHtml("Milestone Based Billing Plan")}></h4>
                    <p dangerouslySetInnerHTML={sanitizeHtml("Milestone Based Billing Plans are used when billing is to be done on completion of a Milestone such as")}></p>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Billing for services 100% against complete installation")}>
                      </div>
                    </div>
                    <p className="mt-3" dangerouslySetInnerHTML={sanitizeHtml("There could even be periodic billing after completion of a milestone")}></p>

                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Quarterly billing for AMC services 100% after complete installation")}>
                      </div>
                    </div>

                    <h4 className="mt-4" dangerouslySetInnerHTML={sanitizeHtml("No Billing Schedule")}></h4>
                    <p className="mt-3" dangerouslySetInnerHTML={sanitizeHtml("No Billing Schedule is used when there is no dependency of billing on any Milestone or Period.")}></p>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Billing for deliveries")}>
                      </div>
                    </div>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Billing for installation services")}>
                      </div>
                    </div>
                    <p className="mt-3" dangerouslySetInnerHTML={sanitizeHtml("It does not mean there is no time limit for completion, for example delivery can be governed by the due date of delivery milestone and LD calculated as per LD terms.")}></p>
                    <p className="mt-3" dangerouslySetInnerHTML={sanitizeHtml("A single order can have multiple billing plans of any 3 types.")}></p>

                </div>
                <div className="col-lg-6 p-left-lg-3">
                    
                    <SectionHeading subTitle="" title="Payment Terms" description="" subTitleCenter={false} headingUnderLine={false} />
                    <p dangerouslySetInnerHTML={sanitizeHtml("The Billing Plans are used to specifty only the “billing” terms i.e. how bills are to be raised; whereas payment terms tell how payment is going to be released against each bill.")}></p>
                    <p dangerouslySetInnerHTML={sanitizeHtml("Payment against a bill plan may be based on milestones & periods such as")}></p>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2">  
                        <div dangerouslySetInnerHTML={sanitizeHtml("Payment against delivery will be due")} />                     
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("@80% against delivery and")} />
                        </div>
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("@20% against installation")} />
                        </div>

                      </div>
                    </div>

                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2">
                        <div dangerouslySetInnerHTML={sanitizeHtml("Payment against installation will be due")} />                     
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("@100% against installation")}>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2">
                        <div dangerouslySetInnerHTML={sanitizeHtml("Payment against CAPEX* will be due")} />  
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("@70% against delivery,")}>
                          </div>
                        </div>
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("@20% against installation")}>
                          </div>
                        </div>
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("@10% QGR* payment in 20 equal quarterly installments at end of each quarter from installation")}>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="d-flex py-2">
                      <div className="flex-shrink-0 text-magenta"><FaAngleDoubleRight/></div>
                      <div className="flex-grow-1 ms-2">
                        <div dangerouslySetInnerHTML={sanitizeHtml("Payment against OPEX* will be due")} /> 
                        <div className="d-flex py-2">
                          <div className="flex-shrink-0 text-magenta"><FaAngleRight/></div>
                          <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Payment against each quarterly bill within 30 days of invoicing for 20 quarters starting from installation")}>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p dangerouslySetInnerHTML={sanitizeHtml("QkrSales tracks each bill due date and payment due date for each bill plan, milestone and payment term.")}></p>

                    <div className="d-flex py-2">
                      <div className="flex-shrink-0" dangerouslySetInnerHTML={sanitizeHtml("*QGR:")}></div>
                      <div className="flex-grow-1 ms-2">   
                       <div dangerouslySetInnerHTML={sanitizeHtml("Quarterly Guaranteed Revenue")} />
                      <div className="d-flex py-2">
                        <div className="flex-shrink-0" dangerouslySetInnerHTML={sanitizeHtml("CAPEX:")}></div>
                        <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Capital expenditures")}>
                        </div>
                      </div>
                      <div className="d-flex py-2">
                        <div className="flex-shrink-0" dangerouslySetInnerHTML={sanitizeHtml("OPEX:")}></div>
                        <div className="flex-grow-1 ms-2" dangerouslySetInnerHTML={sanitizeHtml("Operational Expenditure")}>
                        </div>
                      </div>

                      </div>
                    </div>

                </div>
            </div>
          </div>
      </div> 

    </>
  )
}

export default BillingPayment