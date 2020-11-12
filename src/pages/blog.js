import React from 'react';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import SEO from '../components/seo';
import Smiley from '../components/Smiley';
import ArtworkCopy from '../components/gallery/Artwork-copy';

const blog = () => (
  <Wrapper>
    <SEO title="Blog" />
    <SRLWrapper>
      <ArtworkCopy />
    </SRLWrapper>
  </Wrapper>
);
export default blog;

const Wrapper = styled.div`
  /* align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center; */
`;
