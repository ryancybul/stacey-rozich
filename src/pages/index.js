import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import SEO from '../components/seo';
import StudioGallery from '../components/gallery/StudioGallery';

const IndexPage = () => (
  <>
    <SRLWrapper>
      <SEO title="Studio Gallery" />
      <StudioGallery />
    </SRLWrapper>
  </>
);

export default IndexPage;
