import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Smiley from '../components/Smiley';
import ArtworkCopy from '../components/gallery/Artwork-copy';

const blog = () => (
  <Wrapper>
    <SEO title="Blog" />
    <ArtworkCopy />
  </Wrapper>
);
export default blog;

const Wrapper = styled.div`
  /* align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center; */
`;
