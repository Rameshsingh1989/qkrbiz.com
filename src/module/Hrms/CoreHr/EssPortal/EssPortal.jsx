import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import { EssPortalHeadData, EssPortalData, ESSFAQ, EssPortalMeta, EssPortalCtaData } from './EssPortalData';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import VideoAutoPlay from '../../../../components/Video/VideoAutoPlay';
import VideoWindowPlay from '../../../../components/Video/VideoWindowPlay';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { EsschemaData } from './EsschemaData';
import FaqComponent from '../../../../components/FaqComponent/FaqComponent';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

// The section visual: a video when the data has one, otherwise an image.
const EssVisual = ({ item }) => {
  if (!item.videoUrl) return <Image loading="lazy" fluid src={item.imgUrl} alt={item.alt} />;
  const Video = item.videoAuto ? VideoAutoPlay : VideoWindowPlay;
  return <Video videoSource={item.videoUrl} videoPoster={item.imgUrl} alt={item.alt} videoShadow="" radius="" />;
};

const EssPortal = () => {

  const socialImage = ImagesUrl_ogImages.QkrHr;

  return (
    <>
      <RouteSpecificMeta
      title={EssPortalMeta.title}
      description={EssPortalMeta.description}
      image={socialImage}
      SchemaData={EsschemaData}
      />

      <QkrHeroSectionRow HeroSectionData={EssPortalHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

      {/* Sections alternate: the visual sits on the left of even ones on desktop. On mobile the text always comes first. */}
      {EssPortalData.map((essData, essIndex) => {
        const visualFirst = essIndex % 2 === 0;
        return (
          <section className="wrapper-area" key={essData.id}>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className={`col-lg-5 ${visualFirst ? 'order-lg-2' : ''}`}>
                  <SectionHeading subTitle="" title={essData.title} description={essData.descs} subTitleCenter={false} headingUnderLine={false} />
                  {essData.link && (
                    <Link to={essData.link.to} className="btn btn-outline-magenta mb-4">{essData.link.text}</Link>
                  )}
                </div>
                <div className={`mt-1-xs ${essData.narrow ? 'col-lg-5' : 'col-lg-6'} ${visualFirst ? 'order-lg-1' : ''}`}>
                  <EssVisual item={essData} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData={ESSFAQ} />

      <CommonCtaSection PayrollCtaData={EssPortalCtaData} />
    </>
  )
}

export default EssPortal;
