// import { useEffect, useRef, useState } from "react";
import { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link} from 'react-router';
import VideoAutoPlay from '../Video/VideoAutoPlay';
import { FaPlay } from 'react-icons/fa6';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import YouTubePopup from '../Video/YouTubePopup';

import './QkrHeroSection.scss';  

// import ModalForm from '../ModalForm/ModalForm';

// `visual` (optional): a React node shown in the right column instead of the image or video.
// Pages that don't pass it render exactly as before.
const QkrHeroSection = ({HeroSectionData, col1, col2, xl1, xl2}) => {
    // const [FormModal, setFormModal] = useState(false);
    // const handleClose = () => {
    //   setFormModal(false);
    //   setIsAutoOpened(false);
    // };

    // const handleShow = () => {
    //   setFormModal(true);
    // };

    const [showPopup, setShowPopup] = useState(false);
  
    const handleOpen = () => setShowPopup(true);
    const handleClose = () => setShowPopup(false);


const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    {HeroSectionData.map((thead, tIndex)=>(
        <section className="content-top top-bg" key={tIndex}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col lg={col1} xl={xl1}>
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
                        <p className="header-desc" dangerouslySetInnerHTML={sanitizeHtml(thead.subDesc)} />
                      }
                      {thead.HeadList && thead.HeadList.length > 0 && ( 
                            <ul className="ul-icon">
                                {thead.HeadList.map((IList, iIndex) => (
                                  <li className="tick-icon-magenta" key={iIndex} dangerouslySetInnerHTML={sanitizeHtml(IList)} />
                                ))}
                            </ul>
                        )} 
                        <div className="d-flex gap-3 content-btn">
                        <Link to={thead.link} className="btn btn-gradient rounded-pill">Free Demo</Link>
                        {/* <Button onClick={handleShow} variant="gradient" className="mr-2">Free Demo</Button> */}
                        
                        { thead.youTubeVideoUrl && 
                          <Button variant='default' className="btn btn-outline-danger youtube-btn rounded-pill" onClick={handleOpen}> 
                            <span>Play Video</span> <FaPlay className="play-icon" />
                          </Button>
                        }
                      </div>
                    </Col>
                    <Col lg={col2} xl={xl2}>
                      { thead.videoUrl ? (
                          <VideoAutoPlay videoSource={thead.videoUrl} videoPoster={thead.imgUrl} alt={thead.alt} videoShadow="" radius=""/>
                          ):(
                              <Image fluid src={thead.imgUrl} alt={thead.alt} loading="eager" fetchPriority="high" decoding="async" />
                          )
                      }
                    </Col>
                </Row>
            </Container>
            {showPopup && (
                  <YouTubePopup videoId={thead.youTubeVideoUrl} onClose={handleClose} />
            )}
        </section>
         ))}
        {/* <ModalForm headerText='<span className="text-pink">Smart HR </span> for Smarter Decisions' show={FormModal} handleClose={handleClose} btnText="Get a Free Demo" /> */}

    </>
  )
}

export default QkrHeroSection;
