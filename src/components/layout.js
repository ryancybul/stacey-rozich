import React from 'react';
import '../styles/normalize.css';
import '../styles/style.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './nav/Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <ContentWrapper>
      <Nav />
      <main>{children}</main>
      <Footer />
    </ContentWrapper>
  </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const ContentWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px;
`;
