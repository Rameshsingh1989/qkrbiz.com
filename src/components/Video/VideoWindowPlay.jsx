import { useRef, useEffect } from "react";
import "./VideoWindowPlay.scss";
// import { Image } from "react-bootstrap";

const VideoWindowPlay = ({ videoSource, alt, videoShadow, radius }) => {
  const videoRef = useRef(null);
  // const [isApple, setIsApple] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const ua = navigator.userAgent.toLowerCase();
  //     setIsApple(/iphone|ipad|ipod|macintosh|mac os x/.test(ua));
  //   }
  // }, []);

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

  // if (isApple) {
  //   return <Image loading="lazy" fluid src={videoPoster} alt={alt} />;
  // }

  // No `controls`: iOS Safari ignores the CSS that hides them and draws its dark
  // overlay on top of the video. The video loads and starts straight away (no poster).
  const videoType = /\.webm(\?|#|$)/i.test(videoSource || "") ? "video/webm" : "video/mp4";

  return (
    <video
      className={`video-player ${videoShadow} ${radius}`}
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-label={alt}
    >
      <source src={videoSource} type={videoType} />
    </video>
  );
};

export default VideoWindowPlay;

