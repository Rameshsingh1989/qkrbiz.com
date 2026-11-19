import { useRef, useEffect, useState } from "react";
import "./VideoAutoPlay.scss";
import { Image } from "react-bootstrap";

const VideoAutoPlay = ({ videoSource, videoPoster, alt, videoShadow, radius }) => {
  const videoRef = useRef(null);
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent.toLowerCase();
      setIsApple(/iphone|ipad|ipod|macintosh|mac os x/.test(ua));
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  if (isApple) {
    return <Image loading="lazy" src={videoPoster} className="img-fluid" alt={alt} />;
  }

  return (
    <video
      className={`video-auto-play ${videoShadow} ${radius}`}
      ref={videoRef}
      muted
      loop
      playsInline
    >
      <source src={videoSource} type="video/mp4" />
    </video>
  );
};

export default VideoAutoPlay;

// import { useRef, useEffect } from 'react';
// import "./VideoAutoPlay.scss";
// import { Image } from 'react-bootstrap';

// const VideoAutoPlay = ({ videoSource, videoPoster, alt, videoShadow, radius }) => {

//   const videoRef = useRef(null);

//   const isAppleDevice = () => {
//     const userAgent = navigator.userAgent.toLowerCase();
//     return /iphone|ipad|ipod|macintosh|mac os x/.test(userAgent);
//   };

//   const isVisible = isAppleDevice();

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5,
//     };
  
//     const observer = new IntersectionObserver(handleIntersection, options);
//     const currentVideoRef = videoRef.current;
  
//     if (currentVideoRef) {
//       observer.observe(currentVideoRef);
//     }
//     return () => {
//       if (currentVideoRef) {
//         observer.unobserve(currentVideoRef);
//       }
//     };
//   }, [videoRef]);


//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && videoRef.current) {
//         videoRef.current.play().catch(error => {
//           console.error("Autoplay failed:", error);
//         });
//       } else if (videoRef.current) {
//         videoRef.current.pause();
//       }
//     });
//   };

//   return (
//     <>
//         { isVisible ? (
//           <Image src={videoPoster} className="img-fluid" alt={alt} />         
//           ):(
//           <video className={`video-auto-play ${videoShadow} ${radius}`} ref={videoRef} controls loop muted >
//             <source src={videoSource} type="video/mp4" />  
//             <track 
//               kind="captions" 
//               src={videoSource} 
//               srcLang="en" 
//               label="English captions" 
//               default 
//             />       
//             Your browser does not support the video tag.
            
//           </video>
//         )
//       }
//     </>
//   );
// };

// export default VideoAutoPlay;


