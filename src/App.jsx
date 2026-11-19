import { Suspense, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import PageLoader from "./components/PageLoader/PageLoader";
import { StorageUtils } from "./utility/storageUtils";
import Chatbot from "./components/Chatbot/Chatbot";
// import CookieConsent from "./components/CookieConsent/CookieConsent";

import './App.css'

function App({ origin, initialBlogs = [], initialBlog = null, initialGlossaryData = [], initialGlossary = null, initialRssXml = "" }) {

  // Capture the first page the visitor lands on (runs once on initial load,
  useEffect(() => {
    if (!StorageUtils.getStoredLandingPage()) {
      StorageUtils.setLandingPage(window.location.href);
    }
  }, []);

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <AppRoutes
          origin={origin}
          initialBlogs={initialBlogs}
          initialBlog={initialBlog}
          initialGlossaryData={initialGlossaryData}
          initialGlossary={initialGlossary}
          initialRssXml={initialRssXml}
        />
      </Suspense>
      <Chatbot />
      {/* <CookieConsent /> */}
    </>
  );
}

export default App;
