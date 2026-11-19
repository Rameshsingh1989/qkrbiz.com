import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { MultipleViewsMeta } from "./multipleViewsData";
import TabsScrollSwiper from "../../components/TabsScrollSwiper/TabsScrollSwiper";
import { TabScrollData } from "../../components/TabsScrollSwiper/TabsScrollData";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import multipleViewsSchemaData from "./multipleViewsSchemaData.js";

import "./MultipleViews.scss";

const MultipleViews = () => {

  const socialImage = ImagesUrl_ogImages.View;

  return (
    <>
      <RouteSpecificMeta
        title={MultipleViewsMeta.title}
        description={MultipleViewsMeta.description}
        image={socialImage}
        SchemaData={multipleViewsSchemaData}
      />
      <div className="window-top-banner">

        <TabsScrollSwiper TabScrollData={TabScrollData} titleTag="h1" sm={1} md={2} lg={3} xl={3} xxl={4} colCls="col-lg-12 col-xl-12 col-xxl-11" addCls="tabscroll-view" />

      </div>
    </>
  );
};

export default MultipleViews;
