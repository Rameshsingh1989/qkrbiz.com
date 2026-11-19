import { Fragment } from 'react';
import { Link } from 'react-router';
import VideoWindowPlay from '../../../../components/Video/VideoWindowPlay';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import { DocData, DocSectionData } from '../../../../pages/Documents/DocumentsData';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
import SharedDocuments from '../../../../pages/Documents/SharedDocuments/SharedDocuments';
import documentManagementSchemaData from "./DocumentManagementSchemaData";
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const DocumentManagementMeta = {
  title: "Paperless Sales Document & Letter Management | QkrSales",
  description: "Store, manage, and access sales-related documents like POs, contracts, and invoices centrally with QkrSales Document Management.",
};
import "./DocumentManagement.scss";

const DocumentManagement = () => {

  const socialImage = ImagesUrl_ogImages.Sales;

   const sanitizeHtml = useSanitizeHtml();

  return (
    <>

        <RouteSpecificMeta
        title={DocumentManagementMeta.title}
        description={DocumentManagementMeta.description}
        image={socialImage}
	    SchemaData={documentManagementSchemaData}
        />

        {DocData.map((docItem, docIndex) => (
            <Fragment>
              <section className="content-top top-bg" key={docIndex}>
                    <div className="container">
                       
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5">
                                    <h1 className="header-title" dangerouslySetInnerHTML={sanitizeHtml(docItem.title)}></h1>
                                    <p className="header-text" dangerouslySetInnerHTML={sanitizeHtml(docItem.description)}></p>
                                    <Link to="/signup" className="btn btn-outline-magenta rounded-pill my-3">Free Demo</Link>
                                </div>
                                <div className="col-lg-6">
                                <VideoWindowPlay videoSource={docItem.videoUrl} videoPoster={docItem.imgUrl} videoShadow="img-top" radius="" />
                                </div>
                            </div>
                      
                    </div>
                </section>

                <SharedDocuments SharedDocumentsData={DocData} />


            </Fragment>
        ))} 
        {DocSectionData.map((docList, docId) => (
           <Fragment  key={docId}>
                    {docList.id === 1 ? (
                        <section>
                            <div className="container">
                                <div className="row justify-content-between align-items-center">
                                    <div className={docList.cls1}>
                                        <SectionHeading subTitle={docList.span} title={docList.heads} description={docList.descs} subTitleCenter={false} headingUnderLine={false} />
                                    </div>
                                    <div className={docList.cls2}>
                                        <img loading="lazy" className="img-fluid" src={docList.imgUrls} alt={docList.span} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ):(
                        <section className="wrapper-area">
                            <div className="container">
                                <div className="row justify-content-between align-items-center">
                                            <div className={docList.cls2}>
                                                <img loading="lazy" className="img-fluid" src={docList.imgUrls} alt={docList.span} />
                                            </div>
                                            <div className={docList.cls1}>
                                                <SectionHeading subTitle={docList.span} title={docList.heads} description={docList.descs} subTitleCenter={false} headingUnderLine={false} />
                                            </div>
                                </div>        
                            </div>
                        </section>
                    )}

            </Fragment>
        ))}
    </>
  )
}

export default DocumentManagement