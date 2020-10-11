import '../styles/normalize.css';
import '../styles/style.css';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './nav/Nav';
import Footer from './Footer';
import Burger from './nav/Burger';
import BurgerMenu from './nav/BurgerMenu.js';
import { useOnClickOutside } from '../hooks/hooks';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ContentWrapper>
      <div ref={node} className="Burger">
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
