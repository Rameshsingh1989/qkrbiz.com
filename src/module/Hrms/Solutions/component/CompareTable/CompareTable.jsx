import { Col, Container, Row } from 'react-bootstrap';
import { FaCircleCheck } from 'react-icons/fa6';
import SectionHeading from '../../../../../components/SectionHeading/SectionHeading';
import useSanitizeHtml from '../../../../../hooks/useSanitizeHtml';
import "./CompareTable.scss";

// Comparison table: `columns` lists the row keys in order; the `qkrhr` column is highlighted.
// cls="fit-table" gives the light-header variant (Education, Logistics).
const CompareTable = ({ CompareData = [], id, cls = "", checkMark = false }) => {
  const sanitizeHtml = useSanitizeHtml();

  return (
    <section id={id} className={`st-compare py-4 ${cls}`}>
      {CompareData.map((head, hIndex) => (
        <Container key={hIndex}>
          <Row className="justify-content-center">
            <Col lg={12} className="text-center">
              <SectionHeading subTitle={head.badge} title={head.title} description={head.desc} headingUnderLine={false} />
            </Col>
          </Row>
          <div className="table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  {head.columns.map((key, i) => (
                    <th key={key} className={key === "qkrhr" ? "col-qkrhr" : i > 0 ? "col-other" : ""}>{head.headers[i]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {head.rows.map((row) => (
                  <tr key={row.id}>
                    {head.columns.map((key, i) => (
                      <td key={key} className={key === "qkrhr" ? "col-qkrhr" : i > 0 ? "col-other" : ""}>
                        <span className="cell">
                          {checkMark && key === "qkrhr" && <FaCircleCheck className="cmark" aria-hidden="true" />}
                          <span dangerouslySetInnerHTML={sanitizeHtml(row[key])} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {head.note && <p className="table-note mt-3 mb-0" dangerouslySetInnerHTML={sanitizeHtml(head.note)} />}
        </Container>
      ))}
    </section>
  );
};

export default CompareTable;
