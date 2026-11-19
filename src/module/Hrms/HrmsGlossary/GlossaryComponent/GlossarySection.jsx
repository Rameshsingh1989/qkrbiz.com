import { Link } from "react-router";
import useSanitizeHtmlSafe from "../../../../hooks/useSanitizeHtmlSafe";

const GlossarySection = ({
  letter,
  items,
  searchTerm = "",
  index = 0
}) => {

  /* ======== SSR SAFE ARRAY FIX ========= */

  const safeItems = Array.isArray(items) ? items : Object.values(items || {});

  /* ========= FILTER ======== */

  const filteredItems =
    safeItems.filter((item) => {

      if (!item?.GlossaryTitle)
        return false;

      if (!searchTerm)
        return true;

      return item.GlossaryTitle
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    });

  if (filteredItems.length === 0)
    return null;

  /* ======= BACKGROUND COLORS ======== */

  const bgClasses = [
    "bg-warning-extralight",
    "bg-success-light",
    "bg-magenta-extralight",
    "bg-info-extralight"
  ];

  const sanitizeHtml = useSanitizeHtmlSafe();
  const bgClass = bgClasses [ index % bgClasses.length ];

  return (
    <section id={`section-${letter}`} className={`glossary-section ${bgClass}`}>

      <h2>{letter}</h2>
      <ul className="glossary-items list-unstyled mb-0">
        {filteredItems.map((item) => {
          /* SAFE SLUG */
          const slug = item?.GlossaryUrl ? item.GlossaryUrl.toLowerCase().trim().replace(/\s+/g, "-") : null;

          return (
             <li key={ item.GlossaryUrl || item.GlossaryTitle }>
              {/* HasContent: trimmed SSR payload; GlossaryContent: full client fetch */}
              {(item.HasContent ?? item.GlossaryContent?.length > 0) ? (
                <Link to={`/hrms-software/hr-glossary/${slug}`} dangerouslySetInnerHTML={sanitizeHtml(item.GlossaryTitle)}></Link>
              ) : (
                <span dangerouslySetInnerHTML={sanitizeHtml(item.GlossaryTitle)}></span>
              )}
            </li>
           
          );
        })}
      </ul>
    </section>

  );

};

export default GlossarySection;
