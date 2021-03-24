import React from "react";
import SEO from "../components/seo";
import StudioGallery from "../components/gallery/StudioGallery";
import _ from "lodash";

const IndexPage = () => (
  <>
    <SEO title="Studio Gallery" />
    <StudioGallery />
  </>
);

export default IndexPage;
