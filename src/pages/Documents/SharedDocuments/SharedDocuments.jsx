import { Fragment } from "react"
import { Image } from "react-bootstrap"
import useSanitizeHtml from "../../../hooks/useSanitizeHtml";
import "./SharedDocuments.scss";

const SharedDocuments = ({SharedDocumentsData}) => {

        const sanitizeHtml = useSanitizeHtml();

  return (
    <>
           {SharedDocumentsData.map((docItem, docIndex) => (
            <Fragment key={docIndex}>
                <section className="wrapper-area box-design">
                    <div className="container">
                        <div className="row">
                                {docItem.BoxList.map((bList, boxId) => (
                                    <div className="col-lg-12 col-xl-4 d-flex" key={boxId}>
                                        <div className={`card w-100 ${bList.cls}`}>
                                            <div className="card-body">
                                                <Image loading="lazy" fluid src={bList.imgUrls} alt={bList.heads} />
                                                <h3 className="text-gradient" dangerouslySetInnerHTML={sanitizeHtml(bList.heads)} />
                                                <p className="fn-3" dangerouslySetInnerHTML={sanitizeHtml(bList.descs)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </Fragment>
        ))}
        
    </>
  )
}

export default SharedDocuments