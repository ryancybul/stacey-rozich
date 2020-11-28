import React from 'react';
import '../styles/normalize.css';
import '../styles/style.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import Nav from './nav/Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <ContentWrapper>
      <Headroom>
        <Nav />
      </Headroom>
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
  display: block;
  position: relative;
  padding-bottom: 100px;
`;
