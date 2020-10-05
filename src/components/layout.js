import '../styles/normalize.css';
import '../styles/style.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu.js';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ContentWrapper>
      <div className="Burger">
        <Burger open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </div>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </ContentWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const ContentWrapper = styled.div`
  margin: 0 2vw;

  @media only screen and (min-width: 650px) {
    .Burger {
      display: none;
    }
`;
