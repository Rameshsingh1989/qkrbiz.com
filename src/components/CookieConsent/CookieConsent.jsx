import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { loadGTM } from './loadGTM';
import './CookieConsent.scss';

const CONSENT_COOKIE = 'cookie_consent';
const CONSENT_DAYS = 365;

const readConsent = () => {
  const match = document.cookie.match(/(?:^|;\s*)cookie_consent=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (consent === 'accepted') {
      loadGTM();          // returning visitor already opted in → load GTM
    } else if (!consent) {
      setIsVisible(true); // no decision yet → ask for consent
    }
    // consent === 'declined' → do nothing, GTM stays off
  }, []);

  const persistConsent = (value) => {
    const maxAge = CONSENT_DAYS * 24 * 60 * 60;
    document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    persistConsent('accepted');
    loadGTM();
  };

  const handleRejectAll = () => {
    persistConsent('declined');
  };

  if (!isVisible) return null;

  return (
    <div
      className="cookie-consent-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="cookie-consent-banner__content">
        <h2 className="cookie-consent-banner__title">Your privacy matters</h2>
        <p className="cookie-consent-banner__text">
          We use cookies to enhance your experience, analyse traffic, and serve
          personalised content. &apos;Accept all&apos; to consent per our{' '}
          <Link to="/privacy">Cookie</Link> and <Link to="/privacy">Privacy</Link> policies.
        </p>
        <p>
          <Link to="/privacy" className="mt-3 d-block">
            Manage preferences
          </Link>
        </p>
      </div>

      <div className="cookie-consent-banner__actions">
        <button
          type="button"
          className="cookie-btn cookie-btn--primary"
          onClick={handleAcceptAll}
        >
          Accept all
        </button>
        <Link to="/privacy" className="cookie-btn cookie-btn--outline">
          Manage preferences
        </Link>
        <button
          type="button"
          className="cookie-btn cookie-btn--outline"
          onClick={handleRejectAll}
        >
          Reject all
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
