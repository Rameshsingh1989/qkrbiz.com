import { useEffect, useState } from 'react'
import YouTubePopup from '../../../../../components/Video/YouTubePopup';
import { FaPlay } from 'react-icons/fa6';
import { Link } from 'react-router';
import ModalForm from '../../../../../components/ModalForm/ModalForm';
import "./ComparisonHero.scss";
import { Button } from 'react-bootstrap';
import useSanitizeHtml from "../../../../../hooks/useSanitizeHtml";

const ComparisonHero = ({ comparisonHero, headerModal = false, }) => {
  const sanitizeHtml = useSanitizeHtml();

  const [showPopup, setShowPopup] = useState(false);

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

  useEffect(() => {
    // Only auto-open the modal when the header modal is enabled.
    if (!headerModal) return;
    const timer = setTimeout(() => setIsAutoOpened(true), 20000);
    return () => clearTimeout(timer);
  }, [headerModal]);

  return (
    <>
     {comparisonHero.map((item, idx) => (
        <section className="comparison-hero" key={idx}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-xxl-12">
                
                  <div className="hero-content">
                      <span className="hero-badge">{item.badge} </span>
                      <h1 dangerouslySetInnerHTML={sanitizeHtml(item.title)} />
                      <p>{item.description}</p>
                      {item.image && (
                      <div className="hero-image">
                        <img loading="eager" fetchPriority="high" src={item.image} alt={item.title.replace(/<br\s*\/?>/gi, " ")} className="img-fluid" />
                      </div>
                      )}
                      <div className="hero-buttons">
                        {headerModal ?  (
                              <Button variant='white' className="rounded-pill btn-demo" onClick={handleShowModal}>Free Demo</Button>
                            ):(
                               <Link to={item.primaryBtnLink} className="btn btn-white rounded-pill btn-demo">{item.primaryBtnText}</Link>
                            )
                          }
                        <button className="btn btn-white rounded-pill btn-video youtube-btn" onClick={handleOpen}>
                          <FaPlay className="play-icon" /> {item.secondaryBtnText}
                        </button>
                      </div>
                    
                  </div>
            
              </div>
            </div>
        </div>
          {showPopup && (
                <YouTubePopup videoId={item.videoIdCode} onClose={handleClose} />
          )}
        </section>
      ))} 
     <ModalForm headerText='The future of <span class="text-gradient">HRMS </span>is here' show={isAutoOpened} handleClose={handleCloseModal} btnText="Submit Now"></ModalForm>

    </>
  );
};

export default ComparisonHero;

// const styles = {
//   youtube: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: '0.435rem',
//     paddingBottom: '0.435rem',
//     gap: '0.5rem'
//   },
//   playIcon: {
//     backgroundColor:'#96006B',
//     fontSize: '1.75rem',
//     color:'#fff',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     width: '0.85rem',
//     height: '0.85rem'
//   }
// };

