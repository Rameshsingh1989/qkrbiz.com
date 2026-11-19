import { useEffect, useState } from 'react';
import { Link} from 'react-router';
import VideoWindowPlay from '../Video/VideoWindowPlay';
import { FaPlay } from 'react-icons/fa6';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import YouTubePopup from '../Video/YouTubePopup';
import ModalForm from '../ModalForm/ModalForm';

import './QkrHeroSectionRow.scss';  

const QkrHeroSectionRow = ({HeroSectionData = [], col1, col2, xl1, xl2, headerModal = false,}) => {

  // opened youtube
  const [showPopup, setShowPopup] = useState(false);
  const [imgScale, setImgScale] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  // opened Modal
  const [isAutoOpened, setIsAutoOpened] = useState(false);

  const handleCloseModal = () => {
    setIsAutoOpened(false); 
  };
  const handleShowModal = () => {
    setIsAutoOpened(true);
  };

  const sanitizeHtml = useSanitizeHtml();

  useEffect(() => {
    // Only auto-open the modal when the header modal is enabled.
    if (!headerModal) return;
    const timer = setTimeout(() => setIsAutoOpened(true), 12000);
    return () => clearTimeout(timer);
  }, [headerModal]);

  
  useEffect(() => {
    const handleScroll = () => {
      setImgScale(window.scrollY > 2);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {HeroSectionData.map((thead, hIndex)=> {
        return(
          <section className="content-top top-bg header-row" key={hIndex}>
              <div className="container">        
                  <div className="row justify-content-top align-items-center text-center">
                      <div className={`col-lg-${col1} col-xl-${xl1} col-xxl-10 mx-auto`}>
                          <div className="header-box">
                              {thead.title ? (
                                <>
                                  <h1 className="title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.title)}></span></h1>
                                  <h2 className="header-title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.subTitle)}></span></h2>
                                </>
                              ):(
                                <>
                                  <h1 className="header-title"><span dangerouslySetInnerHTML={sanitizeHtml(thead.subTitle)}></span></h1>
                                </>
                              )}
                              {thead.desc &&
                                <p className="header-text"><span dangerouslySetInnerHTML={sanitizeHtml(thead.desc)}></span></p> 
                              }
                              {thead.subDesc &&
                              <p className="header-desc mb-5" dangerouslySetInnerHTML={sanitizeHtml(thead.subDesc)} />
                              }
                              <div className="d-flex gap-3 content-btn-row mt-4 justify-content-center">
                                {headerModal ?  (
                                    <button className="btn btn-gradient rounded-pill" onClick={handleShowModal}>Free Demo</button>
                                ):(
                                  <Link to={thead.link} className="btn btn-gradient rounded-pill">Free Demo</Link>
                                  
                                )
                                }
                                { thead.youTubeVideoUrl && 
                                  <button className="btn btn-outline-danger rounded-pill youtube-btn" onClick={handleOpen}> 
                                    <span>Watch 2-Min Video</span> <FaPlay className="play-icon" />
                                  </button>
                                }
                              </div>
                              {thead.HeadList && thead.HeadList.length > 0 && ( 
                                  <ul className="list-icon">
                                      {thead.HeadList.map((IList, iIndex) => (
                                        <li key={iIndex} dangerouslySetInnerHTML={sanitizeHtml(IList)} />
                                      ))}
                                  </ul>
                              )} 
                          </div>
                      </div>
                      <div className={`col-lg-${col2} col-xl-${xl1} col-xxl-${xl2}`}>
                        { thead.videoUrl ? (
                            <VideoWindowPlay videoSource={thead.videoUrl} alt={thead.alt} videoShadow="" radius="" />
                            ):(
                              <picture>
                                {thead.imgUrlMobile && <source media="(max-width: 767px)" srcSet={thead.imgUrlMobile} />}
                                <img className={`img-fluid head-img ${imgScale ? "img-scale" : ""}`} src={thead.imgUrl} alt={thead.alt} width={thead.imgWidth} height={thead.imgHeight} loading="eager" fetchPriority="high" decoding="async" />
                              </picture>
                            )
                        }
                      </div>
                  </div>
              </div>
              {showPopup && (
                    <YouTubePopup videoId={thead.youTubeVideoUrl} onClose={handleClose} />
              )}
            
          </section>
      )})}
       <ModalForm headerText='The future of <span class="text-gradient">HRMS </span>is here' show={isAutoOpened} handleClose={handleCloseModal} btnText="Submit Now"></ModalForm>
    </>
  )
}

export default QkrHeroSectionRow;
