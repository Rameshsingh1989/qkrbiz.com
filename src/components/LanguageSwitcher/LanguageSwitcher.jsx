import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [ready, setReady] = useState(false);
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Hide Google's default widget
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame { display: none !important; }
      .skiptranslate { display: none !important; }
      #google_translate_element { display: none !important; }
      body { top: 0 !important; }
    `;
    document.head.appendChild(style);

    // Check current language from cookie
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="));
    if (cookie && cookie.includes("/hi")) {
      setIsHindi(true);
    }

    // Wait for Google Translate to load
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        setReady(true);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    if (typeof window === "undefined") return;

    const newLang = isHindi ? "en" : "hi";

    // Set cookie
    document.cookie = `googtrans=/en/${newLang}; path=/`;
    document.cookie = `googtrans=/en/${newLang}; domain=${window.location.hostname}; path=/`;

    // Trigger select as backup
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event("change"));
    }

    setIsHindi(!isHindi);
    window.location.reload();
  };

  if (!ready) return null;

  return (
    <button
      className="btn btn-outline-secondary"
      onClick={toggleLanguage}
      style={{ marginLeft: "0.75rem" }}
    >
      {isHindi ? "English" : "हिंदी"}
    </button>
  );
};

export default LanguageSwitcher;