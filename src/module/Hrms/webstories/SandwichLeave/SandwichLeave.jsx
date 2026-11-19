import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { useKeenSlider } from "keen-slider/react";
import { logos as ImagesUrl_logos } from "../../../../assets/images";
import { storyGroupsData } from "../storyGroupsData";
import { autoplayPlugin } from "../../../../utility/keenAutoplay";

import "keen-slider/keen-slider.min.css";
import "./SandwichLeave.scss";

const ImagesStories = () => {
  const audioRef = useRef(null);

  // ✅ DATA AVAILABLE DURING SSR
  const [stories] = useState(() => storyGroupsData?.[0]?.stories || []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: { perView: 1 },
      loop: false,
      slideChanged: (s) => setActiveIndex(s.track.details.rel),
    },
    [autoplayPlugin(6000)]
  );

  useEffect(() => {
    audioRef.current = new Audio();
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !isMuted;
    setIsMuted(next);
    audio.muted = next;
    !next && audio.play().catch(() => {});
  };

  const handleShare = async () => {
    if (!navigator.share) return;
    await navigator.share({
      title: "Check out this story!",
      text: "Interesting web story you might like.",
      url: window.location.href,
    });
  };

  const goTo = (i) => instanceRef.current?.moveToIdx(i);
  const goNext = () => instanceRef.current?.next();
  const goPrev = () => instanceRef.current?.prev();

  // 🔥 CRITICAL: do not render slider until data exists
  if (!stories.length) return null;

  return (
    <div className="stories">
      <div className="stories-container">

        {/* Progress */}
        <div className="story-topbar">
          <div className="story-progress">
            {stories.map((_, i) => (
              <span
                key={i}
                className={`progress-bar ${
                  i === activeIndex ? "active" : i < activeIndex ? "done" : ""
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="story-logo">
          <img loading="lazy" src={ImagesUrl_logos.Qkrbiz} alt="Qkrbiz" />
          <div className="logo-name">krbiz</div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {stories.map((story, index) => (
            <div className="keen-slider__slide" key={index}>
              <StorySlide
                data={story}
                isMuted={isMuted}
                toggleMute={toggleMute}
                handleShare={handleShare}
              />

              <div className="story-click-left" onClick={goPrev} />
              <div className="story-click-right" onClick={goNext} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StorySlide = ({ data, isMuted, toggleMute, handleShare }) => (
  <div className="story-slide zoom-animation">
    <div className="story-bg" style={{ backgroundImage: `url(${data.image})` }} />

    <button className="mute-btn" onClick={toggleMute}>
      {isMuted ? "🔇" : "🔊"}
    </button>

    <button className="share-btn" onClick={handleShare}>
      <FaPaperPlane />
    </button>

    <div className="story-overlay">
      <h5>{data.title}</h5>
      <p>{data.desc}</p>
    </div>
  </div>
);

export default ImagesStories;
