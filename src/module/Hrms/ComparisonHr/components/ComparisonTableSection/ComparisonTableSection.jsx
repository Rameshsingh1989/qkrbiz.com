import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";
import "./ComparisonTableSection.scss";

const INITIAL_VISIBLE = 6;

const ComparisonTableSection = ({ comparisonRows }) => {

  const sanitizeHtml = useSanitizeHtml();
  
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="comparison-table-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {comparisonRows.map((item, index) => {
            const rows = item.comparisonRows;
            const visibleRows = expanded ? rows : rows.slice(0, INITIAL_VISIBLE);
            const hasMore = rows.length > INITIAL_VISIBLE;

            return (
              <div key={index} className="col-lg-12 col-xxl-12">
                <SectionHeading subTitle="" title={item.title} description={item.description} headingUnderLine={false} />

                {/* <h2 className="section-title text-center" dangerouslySetInnerHTML={sanitizeHtml(item.title)} />
                <p className="fs-5 mb-5 text-center" dangerouslySetInnerHTML={sanitizeHtml(item.description)} /> */}

                <div className="table-responsive">
                  <table className="table comparison-table table-borderless align-middle">
                    <thead>
                      <tr>
                        <th style={{ width: "33%" }}>CATEGORY</th>
                        <th style={{ width: "33%" }}><img loading="lazy" src={item.QkrhrLogo} alt={item.Alt1} className="img-fluid" /></th>
                        <th style={{ width: "33%" }}><img loading="lazy" src={item.KekaLogo} alt={item.Alt2} className="img-fluid" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleRows.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.feature}</td>
                          <td>{row.qkr}</td>
                          <td>{row.comare}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {hasMore && (
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      className="show-more-btn"
                      onClick={() => setExpanded((prev) => !prev)}
                      aria-expanded={expanded}
                    >
                      {expanded ? "Show less features" : "Show more features"}
                      {expanded ? <FaChevronUp className="ms-2" /> : <FaChevronDown className="ms-2" />}
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default ComparisonTableSection;
