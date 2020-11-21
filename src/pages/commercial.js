import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import SEO from '../components/seo';
import CommercialGallery from '../components/gallery/CommercialGallery';

const IndexPage = () => (
  <>
    <SimpleReactLightbox>
      <SEO title="Commercial Gallery" />
      <CommercialGallery />
    </SimpleReactLightbox>
  </>
);

export default IndexPage;
