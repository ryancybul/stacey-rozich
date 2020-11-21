import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import SEO from '../components/seo';
import StudioGallery from '../components/gallery/StudioGallery';

const IndexPage = () => (
  <>
    <SimpleReactLightbox>
      <SEO title="Studio Gallery" />
      <StudioGallery />
    </SimpleReactLightbox>
  </>
);

export default IndexPage;
