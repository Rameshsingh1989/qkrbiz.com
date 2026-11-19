import { useEffect } from 'react';
import './YouTubePopup.scss';

const YouTubePopup = ({ videoId, onClose }) => {
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="youtube-overlay">
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="youtube-popup">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
          loading="lazy"
          style={styles.unsetBorder}
        />
      </div>
    </div>
  );
};

export default YouTubePopup;

const styles = {
  
  unsetBorder:{
    borderRadius: "0.5rem"
  }

}