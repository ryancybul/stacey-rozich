import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

const blog = () => (
  <Wrapper>
    <SEO title="Blog" />
    <h1>¯\_(ツ)_/¯</h1>
  </Wrapper>
);
export default blog;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
