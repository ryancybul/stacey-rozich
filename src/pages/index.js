import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import SEO from '../components/seo';
import StudioGallery from '../components/gallery/StudioGallery';

const IndexPage = () => (
  <>
    <SEO title="Studio Gallery" />
    <SRLWrapper>
      <StudioGallery />
    </SRLWrapper>
  </>
);

export default IndexPage;
