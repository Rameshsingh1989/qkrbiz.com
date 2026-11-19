import { Container, Image } from "react-bootstrap";
import KeenSlider from "../KeenSlider/KeenSlider";

import { TestimonialData } from "./ClientStoriesData";
import { ClientRating } from "../ClientRating/ClientRating";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./ClientStories.scss";

export const ClientStories = ({
  count1 = 3,
  count2 = 2,
  count3 = 1,
  cls = "",
}) => {
  const data = TestimonialData[0];
  const sanitizeHtml = useSanitizeHtml();

  const renderCard = (item) => (
    <div className="card border-0 h-100 d-flex flex-column">
      <div className="card-header px-5">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0 me-3">
            {item.avatar ? (
              <Image className="avatar" src={item.avatar} alt={item.name} loading="lazy" decoding="async" />
            ) : (
              <span className="avatar-image">
                {item.name
                  ?.trim()
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((w) => w[0]?.toUpperCase())
                  .join("")}
              </span>
            )}
          </div>
          <div className="flex-grow-1">
            <h3 className="profile-name mb-0 fn-3"
              dangerouslySetInnerHTML={sanitizeHtml(item.name)}
            />
            <p className="profile-title mb-1 opacity-75"
              dangerouslySetInnerHTML={sanitizeHtml(item.title)}
            />
            <ClientRating rating={item.rating} size="1.25rem" />
          </div>
        </div>
      </div>

      <div className="card-body px-5 h-md-100">
        
        <p className="mb-0"
          dangerouslySetInnerHTML={sanitizeHtml(item.text)}
        />
      </div>

      <div className="card-footer px-5">
        <Image src={item.companyLogo} alt={item.title} loading="lazy" decoding="async" />
      </div>
    </div>
  );

  return (
    <section className={`stories-switch pb-5 ${cls}`}>
      <Container>

        <SectionHeading subTitle="" title={data.title} description={data.subtitle} headingUnderLine={false} />

        <KeenSlider
          slides={data.testimonials}
          renderSlide={renderCard}
          spacing={40}
          loop
          autoplayDelay={6000}
          dots
          // className="p-2"
          ariaLabel="Client stories"
          breakpoints={{
            0: { slidesPerView: count3 },
            992: { slidesPerView: count2 },
            1900: { slidesPerView: count1 },
          }}
        />
      </Container>
    </section>
  );
};

