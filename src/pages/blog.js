import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Smiley from '../components/Smiley';

const blog = () => (
  <Wrapper>
    <SEO title="About" />
    <Smiley />
  </Wrapper>
);
export default blog;

const Wrapper = styled.div`
  text-align: center;
`;
