
import useSanitizeHtml from '../../hooks/useSanitizeHtml';

// `badge` (optional): a small tag shown next to the subTitle pill, e.g. "New".
const SectionHeading = ({ subTitle, subTitleCenter = true, title, description, headingUnderLine = true, badge }) => {

  const sanitizeHtml = useSanitizeHtml();

  const headingSpacing = !subTitle && !description ? 'mb-3' : 'mb-5';

  return (
    <div
      className={`heading-title ${headingSpacing} ${
        subTitleCenter
          ? 'justify-content-center text-center'
          : 'justify-content-start'
      }`}
    >
      {subTitle && (
        <div
          className={`mb-3 d-flex ${
            subTitleCenter
              ? 'align-items-center justify-content-center'
              : 'justify-content-start'
          }`}
        >
          <span className="border-magenta-rounded">
            {subTitle}
          </span>
          {badge && (
            <span className="badge rounded-pill bg-magenta text-white text-uppercase align-self-center ms-2">{badge}</span>
          )}
        </div>
      )}

      {title && (
        <h2
          className={`mb-2 ${
            headingUnderLine ? 'under-line' : 'under-line-unset'
          }`}
          dangerouslySetInnerHTML={sanitizeHtml(title)}
        />
      )}

      {description && (
        <p
          className={`mb-0 ${!subTitleCenter ? 'fn-2' : 'fn-3'}`}
          dangerouslySetInnerHTML={sanitizeHtml(description)}
        />
      )}
    </div>
  );
};

export default SectionHeading;
