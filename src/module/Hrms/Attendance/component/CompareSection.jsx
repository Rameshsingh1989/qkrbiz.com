import { FaCheck, FaXmark } from 'react-icons/fa6';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const renderCompareCell = (value, isQkr = false) => {
  const isGap = !value || value === '—' || value === '-';
  if (isQkr) {
    return (
      <span className="cell-value cell-yes">
        <span className="cell-icon cell-icon-check"><FaCheck /></span>
        {value}
      </span>
    );
  }
  if (isGap) {
    return (
      <span className="cell-value cell-no">
        <span className="cell-icon cell-icon-cross"><FaXmark /></span>
      </span>
    );
  }
  return <span className="cell-value cell-partial">{value}</span>;
};

const CompareSection = ({ data = [] }) => (
  <section className="la-compare">
    {data.map((section) => (
      <div className="container" key={section.id}>
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <SectionHeading subTitle={section.subTitle} title={section.title} description={section.description} headingUnderLine={false} />
              </div>
            </div>

            <div className="table-responsive">
              <table className="table compare-table table-border align-middle mb-0">
                <thead>
                  <tr>
                    {section.columns.map((col, cIndex) => (
                      <th
                        key={cIndex}
                        className={cIndex === section.columns.length - 1 ? 'col-qkrhr' : ''}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {section.rows.map((row, rIndex) => (
                    <tr key={rIndex}>
                      <td className="feature-cell">{row.feature}</td>
                      <td>{renderCompareCell(row.manual)}</td>
                      <td>{renderCompareCell(row.biometric)}</td>
                      <td className="col-qkrhr">{renderCompareCell(row.qkrhr, true)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      </div>
    ))}
  </section>
);

export default CompareSection;
