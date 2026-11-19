import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { FaCommentDots, FaXmark } from "react-icons/fa6";
import { TEASER } from "./chatbotContent";
import "./Chatbot.scss";

// The panel (FAQ search, lead form, copy) is only downloaded when the visitor
// first opens the chat, so the bubble costs almost nothing on page load.
const loadPanel = () => import("./ChatbotPanel");
const ChatbotPanel = lazy(loadPanel);

const TEASER_DELAY = 12000;
const TEASER_KEY = "qkrChat:teaserSeen";

const storage = {
  get: (key) => {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    try {
      sessionStorage.setItem(key, value);
    } catch {
      /* ignore */
    }
  },
};

const Chatbot = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false); // panel has been mounted at least once
  const [teaser, setTeaser] = useState(false);

  const dismissTeaser = useCallback(() => {
    setTeaser(false);
    storage.set(TEASER_KEY, "1");
  }, []);

  // One gentle prompt per session, after the visitor has had time to read.
  useEffect(() => {
    if (storage.get(TEASER_KEY)) return undefined;
    const timer = setTimeout(() => setTeaser(true), TEASER_DELAY);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = () => {
    dismissTeaser();
    setOpened(true);
    setOpen((was) => {
      if (!was) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "chatbot_open" });
      }
      return !was;
    });
  };

  return (
    <div className="qkr-chat">
      {opened && (
        <div className="qkr-chat-window" hidden={!open}>
          <Suspense fallback={<div className="qkr-chat-loading">Loading…</div>}>
            <ChatbotPanel onClose={() => setOpen(false)} pathname={pathname} />
          </Suspense>
        </div>
      )}

      {teaser && !open && (
        <div className="qkr-chat-teaser" role="status">
          <button type="button" className="qkr-chat-teaser-text" onClick={toggle}>
            {TEASER}
          </button>
          <button type="button" className="qkr-chat-teaser-close" onClick={dismissTeaser} aria-label="Dismiss">
            <FaXmark aria-hidden="true" />
          </button>
        </div>
      )}

      <button
        type="button"
        className={`qkr-chat-launcher ${open ? "is-open" : ""}`}
        onClick={toggle}
        onMouseEnter={loadPanel}
        onFocus={loadPanel}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
      >
        {open ? <FaXmark aria-hidden="true" /> : <FaCommentDots aria-hidden="true" />}
      </button>
    </div>
  );
};

export default Chatbot;
