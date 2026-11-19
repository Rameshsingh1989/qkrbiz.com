import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarCheck,
  FaCircleQuestion,
  FaEnvelope,
  FaIndianRupeeSign,
  FaLayerGroup,
  FaPaperPlane,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";
import { loadKnowledge } from "./chatbotKnowledge";
import { searchFaqs, MIN_ANSWER_SCORE } from "./faqSearch";
import { BOT_NAME, CHIPS, CONTACT, GREETING, INTENTS, MAIN_MENU, NO_MATCH, PRICING, PRODUCTS } from "./chatbotContent";
import "./ChatbotPanel.scss";

// The demo form pulls in the mail API client (axios, ~18 KB gzip) — only
// download it when a visitor actually asks for a demo.
const loadLeadForm = () => import("./ChatLeadForm");
const ChatLeadForm = lazy(loadLeadForm);

// v2: chips carry an icon key instead of an emoji in the label.
const STORAGE_KEY = "qkrChat:v2";

const CHIP_ICONS = {
  demo: FaCalendarCheck,
  pricing: FaIndianRupeeSign,
  products: FaLayerGroup,
  ask: FaCircleQuestion,
  sales: FaPhone,
  menu: FaArrowLeft,
};
const REPLY_DELAY = 450;

let nextId = 0;
const msg = (from, kind, data = {}) => ({ id: `${Date.now()}-${nextId++}`, from, kind, ...data });

// Per-tab memory of the conversation; storage can be blocked, so never rely on it.
const loadSaved = () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    return saved && Array.isArray(saved.messages) ? saved : null;
  } catch {
    return null;
  }
};
const save = (state) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — conversation just won't survive a reload */
  }
};

const initialState = () =>
  loadSaved() || {
    messages: GREETING.map((text) => msg("bot", "text", { text })),
    chips: MAIN_MENU,
    leadDone: false,
  };

const ChatbotPanel = ({ onClose, pathname }) => {
  const [state, setState] = useState(initialState);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const knowledgeRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const timers = useRef([]);
  const sanitize = useSanitizeHtml();
  const navigate = useNavigate();

  const { messages, chips, leadDone } = state;

  useEffect(() => {
    save(state);
  }, [state]);

  // The FAQ data (~190 KB gzip across 43 pages) is only fetched once the visitor
  // starts asking questions — menu-only visitors never download it.
  const warmKnowledge = useCallback(() => {
    if (knowledgeRef.current) return;
    loadKnowledge().then((entries) => {
      knowledgeRef.current = entries;
    });
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, typing]);

  const push = useCallback((newMessages, newChips) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...newMessages],
      chips: newChips === undefined ? prev.chips : newChips,
    }));
  }, []);

  // Show a short "typing…" pause before the bot's reply.
  const reply = useCallback(
    (build) => {
      setTyping(true);
      timers.current.push(
        setTimeout(async () => {
          const [botMessages, botChips] = await build();
          setTyping(false);
          push(botMessages, botChips);
        }, REPLY_DELAY)
      );
    },
    [push]
  );

  const userQuestions = () => messages.filter((m) => m.from === "user" && !m.isAction).map((m) => m.text);

  const flows = {
    menu: () => [[msg("bot", "text", { text: "Sure — what would you like to do next?" })], MAIN_MENU],
    greet: () => [[msg("bot", "text", { text: "Hello! 😊 How can I help you today?" })], MAIN_MENU],
    thanks: () => [[msg("bot", "text", { text: "You're welcome! Anything else I can help with?" })], MAIN_MENU],
    ask: () => [[msg("bot", "text", { text: "Go ahead and type your question below — for example “Does QkrHR support biometric attendance?”" })], []],
    pricing: () => [
      [msg("bot", "pricing")],
      [CHIPS.demo, CHIPS.ask, CHIPS.menu],
    ],
    products: () => [
      [msg("bot", "text", { text: "Here's what the Qkrbiz suite covers:" }), msg("bot", "products")],
      [CHIPS.pricing, CHIPS.demo, CHIPS.menu],
    ],
    sales: () => [
      [msg("bot", "contact")],
      [CHIPS.demo, CHIPS.menu],
    ],
    demo: () =>
      leadDone
        ? [[msg("bot", "text", { text: "You've already requested a demo — our team will contact you shortly. Anything else?" })], MAIN_MENU]
        : [
            [
              msg("bot", "text", { text: "Great choice! Share a few details and our team will set up a free, personalised demo." }),
              msg("bot", "leadForm"),
            ],
            [CHIPS.menu],
          ],
  };

  const answerQuestion = async (text) => {
    const entries = knowledgeRef.current || (await loadKnowledge());
    knowledgeRef.current = entries;
    const [best, ...rest] = searchFaqs(entries, text, pathname);

    if (!best || best.score < MIN_ANSWER_SCORE) {
      return [
        [msg("bot", "text", { text: NO_MATCH })],
        [CHIPS.demo, CHIPS.sales, CHIPS.menu],
      ];
    }
    const related = rest.filter((r) => r.score >= MIN_ANSWER_SCORE).map((r) => ({ label: r.entry.title, question: r.entry.title }));
    return [
      [msg("bot", "faq", { title: best.entry.title, html: best.entry.html, url: best.entry.url, label: best.entry.label })],
      [...related, CHIPS.demo, CHIPS.menu],
    ];
  };

  const runAction = (action, label) => {
    push([msg("user", "text", { text: label, isAction: true })], []);
    if (action === "ask") warmKnowledge();
    if (action === "demo") loadLeadForm(); // start fetching during the typing pause
    if (action === "demo" || action === "pricing") {
      window.dataLayer?.push({ event: "chatbot_action", chatbot_action: action });
    }
    reply(async () => flows[action]());
  };

  // A message that is exactly one of our FAQ questions should get that answer,
  // even if it contains shortcut words ("…Talk to Sales…"). Only checked when the
  // FAQs are already loaded, so shortcuts like "I want a demo" never wait on them.
  const isFaqQuestion = (text) => {
    const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    const target = norm(text);
    return Boolean(knowledgeRef.current?.some((e) => norm(e.title) === target));
  };

  // fromChip: related-question buttons are always FAQ titles — skip the shortcuts.
  const ask = (text, { fromChip = false } = {}) => {
    const question = text.trim();
    if (!question) return;
    push([msg("user", "text", { text: question })], []);
    const intent = !fromChip && !isFaqQuestion(question) && INTENTS.find((i) => i.test.test(question));
    reply(async () => (intent ? flows[intent.action]() : answerQuestion(question)));
  };

  const handleChip = (chip) => (chip.question ? ask(chip.question, { fromChip: true }) : runAction(chip.action, chip.label));

  const handleSubmit = (e) => {
    e.preventDefault();
    ask(input);
    setInput("");
  };

  const handleLeadSubmitted = (name) => {
    setState((prev) => ({
      ...prev,
      leadDone: true,
      // Swap the form for a confirmation so it can't be submitted twice.
      messages: prev.messages.map((m) =>
        m.kind === "leadForm" ? msg("bot", "text", { text: `Thanks, ${name}! 🎉 Your demo request is in — our team will call you shortly. A confirmation is on its way to your inbox.` }) : m
      ),
      chips: [CHIPS.products, CHIPS.ask],
    }));
  };

  // Links inside FAQ answers are plain <a href>; route internal ones client-side.
  const handleAnswerClick = (e) => {
    const link = e.target.closest("a[href]");
    const href = link?.getAttribute("href");
    if (href && href.startsWith("/") && !link.target) {
      e.preventDefault();
      navigate(href);
    }
  };

  const leadInterest = () => {
    const lastFaq = [...messages].reverse().find((m) => m.kind === "faq");
    return lastFaq?.label || "";
  };

  const renderMessage = (m) => {
    switch (m.kind) {
      case "faq":
        return (
          <>
            <strong className="qkr-chat-faq-title">{m.title}</strong>
            <div className="qkr-chat-faq-body" onClick={handleAnswerClick} dangerouslySetInnerHTML={sanitize(m.html)} />
            {m.url !== pathname && (
              <Link to={m.url} className="qkr-chat-more">
                Read more: {m.label} <FaArrowRight aria-hidden="true" />
              </Link>
            )}
          </>
        );
      case "pricing":
        return (
          <>
            <p>{PRICING.intro}</p>
            <ul className="qkr-chat-plans">
              {PRICING.plans.map((plan) => (
                <li key={plan.name}>
                  <div><strong>{plan.name}</strong><span>{plan.price}</span></div>
                  <small>{plan.detail}</small>
                </li>
              ))}
            </ul>
            <Link to={PRICING.url} className="qkr-chat-more">
              Compare all plans <FaArrowRight aria-hidden="true" />
            </Link>
          </>
        );
      case "products":
        return (
          <ul className="qkr-chat-products">
            {PRODUCTS.map((p) => (
              <li key={p.url}>
                <Link to={p.url}>
                  <strong>{p.name}</strong>
                  <small>{p.text}</small>
                </Link>
              </li>
            ))}
          </ul>
        );
      case "contact":
        return (
          <>
            <p>Our sales team is happy to help (Mon–Fri, 9:30 AM – 6:30 PM IST):</p>
            <p className="qkr-chat-contact">
              <FaPhone aria-hidden="true" /> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              <br />
              <FaEnvelope aria-hidden="true" /> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
            <p>Or book a demo and we'll call you back.</p>
          </>
        );
      case "leadForm":
        return (
          <Suspense fallback={<p className="qkr-chat-form-loading">Loading form…</p>}>
            <ChatLeadForm interest={leadInterest()} questions={userQuestions()} onSubmitted={handleLeadSubmitted} />
          </Suspense>
        );
      default:
        return <p>{m.text}</p>;
    }
  };

  return (
    <div className="qkr-chat-panel" role="dialog" aria-label={`${BOT_NAME} chat`}>
      <header className="qkr-chat-header">
        <div className="qkr-chat-avatar" aria-hidden="true">Q</div>
        <div className="qkr-chat-heading">
          <strong>{BOT_NAME}</strong>
          <span><i className="qkr-chat-online" aria-hidden="true" /> Typically replies instantly</span>
        </div>
        <button type="button" className="qkr-chat-close" onClick={onClose} aria-label="Close chat">
          <FaXmark aria-hidden="true" />
        </button>
      </header>

      <div className="qkr-chat-messages" ref={listRef} aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={`qkr-chat-msg qkr-chat-msg--${m.from} ${m.kind !== "text" ? "qkr-chat-msg--wide" : ""}`}>
            {renderMessage(m)}
          </div>
        ))}
        {typing && (
          <div className="qkr-chat-msg qkr-chat-msg--bot qkr-chat-typing" aria-label="Assistant is typing">
            <span /><span /><span />
          </div>
        )}
        {!typing && chips.length > 0 && (
          <div className="qkr-chat-chips">
            {chips.map((chip) => {
              const Icon = CHIP_ICONS[chip.icon];
              return (
                <button type="button" key={chip.label} onClick={() => handleChip(chip)}>
                  {Icon && <Icon aria-hidden="true" />}
                  {chip.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <form className="qkr-chat-input" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            warmKnowledge(); // fetch FAQs while the visitor is still typing
          }}
          placeholder="Type your question…"
          aria-label="Type your question"
          maxLength={300}
        />
        <button type="submit" aria-label="Send" disabled={!input.trim()}>
          <FaPaperPlane aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ChatbotPanel;
