import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Smiley from '../components/Smiley';

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <Smiley />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Wrapper>
);

export default NotFoundPage;

const Wrapper = styled.footer`
  text-align: center;
`;
