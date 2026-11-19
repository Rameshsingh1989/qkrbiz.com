import { Link } from "react-router";
import { TickMagenta } from "../../../../../assets/images";
import SectionHeading from "../../../../../components/SectionHeading/SectionHeading";

// SVG icon tile (48×48 file with its light background baked in).
export const IconTile = ({ src, alt, size = 40 }) => (
  <img className="flex-shrink-0" src={src} alt={alt} width={size} height={size} loading="lazy" />
);

// Small inline SVG icon, such as a tick or a status dot.
const SmallIcon = ({ src, alt, size = 12 }) => (
  <img className="flex-shrink-0" src={src} alt={alt} width={size} height={size} loading="lazy" />
);

// Small label above a heading.
export const Eyebrow = ({ children, className = "" }) => (
  <div className="mb-1 d-flex"><span className={`text-magenta fn-2 ${className}`}>{children}</span></div>
);

// "What is …?" overview with a "Built for" list.
export const OverviewSection = ({ data }) => (
  <section className="py-5">
    <div className="container">
      <div className="row g-4 align-items-start">
        <div className="col-lg-7">
          <Eyebrow>{data.badge}</Eyebrow>
          <h2 className="fw-semibold mb-3">{data.title}</h2>
          {data.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="col-lg-5">
          {/* With builtForImg the "Built for" card is shown as that .webp on a shared background; otherwise it is drawn. */}
          {data.builtForImg ? (
            <div className="bg-art bg-art-rings rounded-4 p-3 p-md-4">
              <img loading="lazy" className="img-fluid w-100" src={data.builtForImg} width="1172" height="738"
                alt={`Built for: ${data.builtFor.map((item) => `${item.title}, ${item.desc}`).join(" ")}`} />
            </div>
          ) : (
          <div className="bg-white border rounded-4 shadow-sm p-4">
            <Eyebrow className="text-dark-gray">Built for</Eyebrow>
            {data.builtFor.map((item, i) => (
              <div className={i ? "border-top pt-2 mt-2" : ""} key={item.id}>
                <strong className="d-block small">{item.title}</strong>
                <small className="text-dark-gray">{item.desc}</small>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

// Feature cards; each links to the module page that covers it.
export const FeatureLinkCards = ({ data }) => (
  <section className="py-5">
    <div className="container">
      <div className="text-center">
        <SectionHeading subTitle={data.badge} title={data.title} description={data.desc} headingUnderLine={false} />
      </div>
      <div className="row g-3">
        {data.items.map((item) => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <Link to={item.link} className="d-block h-100 bg-white border rounded-4 shadow-sm p-4 text-reset text-decoration-none">
              <IconTile src={item.icon} alt={`${item.title} icon`} size={48} />
              <h3 className="fs-5 mt-3 mb-2">{item.title}</h3>
              <p className="mb-3">{item.desc}</p>
              <span className="small fw-semibold text-magenta">Learn more →</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Backgrounds for the "In detail" card images, repeated in this order.
const detailBgs = ['bg-art-road', 'bg-art-stairs', 'bg-art-hills'];

// "In detail": text + tick list + link beside a drawn key/value card, alternating sides.
export const DetailRows = ({ head, rows }) => (
  <section className="bg-pink-light py-5">
    <div className="container">
      <div className="text-center">
        <SectionHeading subTitle={head.badge} title={head.title} description="" headingUnderLine={false} />
      </div>
      {rows.map((row, index) => (
        <div className="row g-4 align-items-center justify-content-between py-5" id={row.id} key={row.id}>
          <div className={`col-lg-6 ${index % 2 ? "order-lg-2" : ""}`}>
            <Eyebrow>{row.badge}</Eyebrow>
            <h3 className="fs-3 mb-3">{row.title}</h3>
            <p>{row.desc}</p>
            <ul className="ul-icon mb-3">
              {row.points.map((point) => (
                <li className="tick-icon-magenta" key={point}>{point}</li>
              ))}
            </ul>
            <Link to={row.link.to} className="btn btn-gradient btn-sm rounded-pill">{row.link.text}</Link>
          </div>
          <div className={`col-lg-5 ${index % 2 ? "order-lg-1" : ""}`}>
            {/* A row with imgUrl shows that .webp card on a shared background; otherwise the card is drawn. */}
            {row.imgUrl ? (
              <div className={`bg-art ${detailBgs[index % detailBgs.length]} rounded-4 p-3 p-md-4`}>
                <img loading="lazy" className="img-fluid w-100" src={row.imgUrl} width="1072" height="552"
                  alt={`${row.card.title}: ${row.card.rows.map(([k, v]) => `${k} ${v}`).join(", ")}`} />
              </div>
            ) : (
            <div className="bg-white bg-opacity-50 border rounded-4 shadow-sm p-4">
              <div className="bg-white rounded-3 shadow-sm p-3" role="img" aria-label={`${row.card.title}: ${row.card.rows.map(([k, v]) => `${k} ${v}`).join(", ")}`}>
                <strong className="d-block mb-2">{row.card.title}</strong>
                {row.card.rows.map(([label, value, done]) => (
                  <div className="d-flex justify-content-between align-items-center border-top py-2 small" key={label}>
                    <span className="text-dark-gray">{label}</span>
                    <strong className="d-inline-flex align-items-center gap-1">{done && <SmallIcon src={TickMagenta} alt="Done" />}{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Three numbered step cards (employee lifecycle, payroll stages).
export const NumberedSteps = ({ data }) => (
  <section className="py-5">
    <div className="container">
      <SectionHeading subTitle={data.badge} title={data.title} description={data.desc} headingUnderLine={false} />
      <div className="row g-3">
        {data.steps.map((step) => (
          <div className="col-md-4" key={step.id}>
            <div className="h-100 border rounded-4 p-4 shadow-sm">
              <span className="fn-sb fn-4 text-pink">{step.id}</span>
              <h3 className="mt-2 mb-2">{step.title}</h3>
              <p className="small opacity-75 mb-0">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
