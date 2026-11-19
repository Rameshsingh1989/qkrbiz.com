import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';

const DepthSection = ({ headData, items = [] }) => {
  const sanitizeHtml = useSanitizeHtml();

  return (
    <section className="la-depth">
      {headData && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 mx-auto text-center">
              <SectionHeading subTitle={headData.subTitle} title={headData.title} description={headData.description} headingUnderLine={false} />
            </div>
          </div>
        </div>
      )}

      {items.map((data, index) => (
        <div className="container py-5" key={index}>
               <div className={`row align-items-center justify-content-between g-4 g-xl-5 ${index % 2 ? 'flex-lg-row-reverse' : ''}`}>
                <div className="col-lg-6 col-xl-6">
                  <div class="mb-3 d-flex justify-content-start">
                    <span className="border-magenta-rounded">{data.subTitle}</span>
                  </div>
                  <h3 className="depth-title" dangerouslySetInnerHTML={sanitizeHtml(data.title)} />
                  <p dangerouslySetInnerHTML={sanitizeHtml(data.description)} />
                  <ul>
                    {data.features.map((feature, fIndex) => (
                      <li key={fIndex} dangerouslySetInnerHTML={sanitizeHtml(feature)} />
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-xl-5">
                  <img loading="lazy" className="img img-fluid" src={data.imgUrl} alt={data.alt} />
                </div>
              </div>
        </div>
      ))}
    </section>
  );
};

export default DepthSection;
