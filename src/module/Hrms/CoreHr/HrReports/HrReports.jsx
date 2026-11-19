import { Fragment} from 'react';
import { Image } from 'react-bootstrap';
import QkrHeroSectionRow from '../../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import { HrReportsHeadData, HrReportsData , HrReportsMeta, HrReportsCtaData } from './HrReportsData';
import CommonCtaSection from '../../../../components/CommonCtaSection/CommonCtaSection';
import VideoAutoPlay from '../../../../components/Video/VideoAutoPlay';
import VideoWindowPlay from '../../../../components/Video/VideoWindowPlay';
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { ReportEchemaData } from './ReportEchemaData';
import ClientLogoScroll from '../../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../../pages/Customers/CustomersAllData';
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
// import useSanitizeHtml from '../../../../hooks/useSanitizeHtml';
// import { ClientReviewData } from '../../../../components/ClientStories/ClientReviewData';
// import { hrmsMobileScrData } from '../../QkrhrHome/QkrhrHomeData';

const HrReports = () => {


  const socialImage = ImagesUrl_ogImages.QkrHr;
  // const sanitizeHtml = useSanitizeHtml();
  // const [windowWidth, setWindowWidth] = useState(0);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const handleResize = () => {
  //       setWindowWidth(window.innerWidth);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(()=>{
	// 	const hrReportsNewArr = [...HrReportsData];
	// 	hrReportsNewArr.splice(2, 0, 'clientData');
	// 	// console.log('dfddf', hrReportsNewArr)
	// },[]);

  return (
    <>

        <RouteSpecificMeta
        title={HrReportsMeta.title}
        description={HrReportsMeta.description}
        image={socialImage}
        SchemaData={ReportEchemaData}
        />

      <QkrHeroSectionRow HeroSectionData={HrReportsHeadData} col1={12} col2={12} xl1={12} xl2={12} />

      <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        {HrReportsData.map((docdata, docIndex)=>(
            <Fragment key={docIndex}>
                {docIndex % 2 !== 0 ? (
                    <>
                        <section className="wrapper-area">
                          <div className="container">
                            <div className="row justify-content-between align-items-center">
                               <div className="col-lg-5">
                                  <SectionHeading subTitle="" title={docdata.title} description={docdata.descs} subTitleCenter={false} headingUnderLine={false} />
                                </div>
                                <div className={`order-m-1 mt-1-xs ${docdata.id === 2 ? 'col-lg-6' : 'col-lg-6' }`}>
                                     {docdata.videoUrl ? (
                                          docdata.videoAuto === true ? (
                                            <VideoAutoPlay videoSource={docdata.videoUrl} videoPoster={docdata.imgUrl} alt={docdata.alt} videoShadow="" radius=""/>
                                          ):(
                                            <VideoWindowPlay videoSource={docdata.videoUrl} videoPoster={docdata.imgUrl} alt={docdata.alt} videoShadow="" radius=""/>
                                          )
                                        ) : (

                                          <Image loading="lazy" fluid src={docdata.imgUrl} alt={docdata.alt} />
                                      )}

                                </div>
                            </div>
                          </div>
                        </section>
                    </>
                  ):(
                    <>
                      <section className="wrapper-area">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="order-m-1 mt-1-xs col-lg-6">
                                      {docdata.videoUrl ? (
                                          docdata.videoAuto === true ? (
                                            <VideoAutoPlay videoSource={docdata.videoUrl} videoPoster={docdata.imgUrl} alt={docdata.alt} videoShadow="" radius=""/>
                                          ):(
                                            <VideoWindowPlay videoSource={docdata.videoUrl} videoPoster={docdata.imgUrl} alt={docdata.alt} videoShadow="" radius=""/>
                                          )
                                        ) : (
                                          <Image loading="lazy" fluid src={docdata.imgUrl} alt={docdata.alt} />
                                      )}
                                </div>
                                <div className="col-lg-5 order-m-0">
                                    <SectionHeading subTitle="" title={docdata.title} description={docdata.descs} subTitleCenter={false} headingUnderLine={false} />
                                </div>
                            </div>
                        </div>
                      </section>
                    </>
                )}
          </Fragment>
        ))}
        {/* <section className="mobile-design">
          <div className="container">
              {hrmsMobileScrData.map((mdata, mIndex) => (
                <div className="row justify-content-between align-items-center" key={mIndex}>
                    {mdata.id ===1 && (
                      <>
                          <div className="col-lg-5 col-xl-5">
                            <SectionHeading subTitle={mdata.descs} title={mdata.title} description="" subTitleCenter={false} headingUnderLine={false} />

                            <Link to="/signup" className="btn btn-gradient rounded-pill ml-3-xs">Free Demo</Link>
                          </div>
                          <div className="col-lg-7 col-xl-7">
                            {windowWidth > 991 ? (
                                <Image loading="lazy" fluid src={mdata.imgUrlD} alt={mdata.alt} />
                            ):(
                                <Image loading="lazy" fluid src={mdata.imgUrl} alt={mdata.alt} />
                              )
                           }
                          </div>
                      </>
                    )}
                </div>
              ))}
          </div>
        </section> */}

      <CommonCtaSection PayrollCtaData={HrReportsCtaData} />
    </>
  )
}

export default HrReports;