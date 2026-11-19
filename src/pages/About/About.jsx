import { useState } from "react";
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { AboutMeta } from "./aboutPageData";
import { ClientStories } from "../../components/ClientStories/ClientStories.jsx";
import useSanitizeHtml from "../../hooks/useSanitizeHtml.js";
import { aboutPageData } from "./aboutPageData.js";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import aboutSchemaData from "./aboutSchemaData.js";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";

import "./About.scss";

function About() {

  const socialImage = ImagesUrl_ogImages.About;
  const sanitizeHtml = useSanitizeHtml();

  // 🔹 Active tab state
  const [activeTab, setActiveTab] = useState("mission");

  // 🔹 SSR-safe fallback
  const pageData = aboutPageData[activeTab] || {
    title: "",
    content: []
  };

  return (
    <>
      {/* SEO */}
      <RouteSpecificMeta
        title={AboutMeta.title}
        description={AboutMeta.description}
        image={socialImage}
        SchemaData={aboutSchemaData}
      />
      <div className="wrapper-bg-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-white">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT TABS */}
      <section className="multitab_content nav-tabs abouts">
        <div className="container">
          <div className="row justify-content-between align-items-center">

            {/* LEFT TABS */}
            <div className="col-lg-4">
              <div className="tabs-left mt-4">
                <div className={`card ${activeTab === "mission" ? "cardActive" : ""}`} onClick={() => setActiveTab("mission")}>
                  <div className="card-header">Our Mission</div>
                </div>
                <div className={`card mt-5 ${activeTab === "vision" ? "cardActive" : ""}`} onClick={() => setActiveTab("vision")}>
                  <div className="card-header">Our Vision</div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-7">
              <div className="tab-content mt-3"> 
                {/* TITLE */}
                 <SectionHeading subTitle="" title={pageData.title} description="" subTitleCenter={false} headingUnderLine={false} /> 
                {/* CONTENT */}
                {pageData.content.map((li, index) => (
                  <div key={index}>
                    <h5 className="mt-3 mb-2">{li.heading}</h5>
                    <div dangerouslySetInnerHTML={sanitizeHtml(li.li)} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLIENT STORIES */}
      <ClientStories cls="" count1={3} count2={2} count3={1} />
    </>
  );
}

export default About;
