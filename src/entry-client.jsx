import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styles.scss";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { createHead, UnheadProvider } from "@unhead/react/client";
import App from "./App";

const head = createHead();

const initialBlogs        = window.__SSR_BLOGS__        || [];
const initialBlog         = window.__SSR_BLOG__         || null;
const initialGlossaryData = window.__SSR_GLOSSARY__     || [];
const initialGlossary     = window.__SSR_GLOSSARY_ITEM__|| null;
const initialRssXml       = window.__SSR_RSS_XML__      || "";

/* IMPORTANT: CLEAN SSR GLOBALS */
delete window.__SSR_BLOGS__;
delete window.__SSR_BLOG__;
delete window.__SSR_GLOSSARY__;
delete window.__SSR_GLOSSARY_ITEM__;
delete window.__SSR_RSS_XML__;

hydrateRoot(
  document.getElementById("root"),
  <UnheadProvider value={head}>
    <BrowserRouter>
      <App
        initialBlogs={initialBlogs}
        initialBlog={initialBlog}
        initialGlossaryData={initialGlossaryData}
        initialGlossary={initialGlossary}
        initialRssXml={initialRssXml}
      />
    </BrowserRouter>
  </UnheadProvider>
);
