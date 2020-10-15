import React from 'react';
import { Link } from 'gatsby';
import { bool } from 'prop-types';
import styled from 'styled-components';

const BurgerMenu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <Link to="/commercial" onClick={() => setOpen(!open)}>
      Commercial
    </Link>
    <Link to="/" onClick={() => setOpen(!open)}>
      Studio
    </Link>
    <a
      href="https://staceyrozich.bigcartel.com/"
      target="_blank"
      onClick={() => setOpen(!open)}
    >
      Shop
    </a>
    <Link to="/blog" onClick={() => setOpen(!open)}>
      Blog
    </Link>
    <Link to="/about" onClick={() => setOpen(!open)}>
      About
    </Link>
  </StyledMenu>
);

BurgerMenu.propTypes = {
  open: bool.isRequired,
};

export default BurgerMenu;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(154, 155, 159, 0.8);
  text-align: center;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 2;
  width: 100%;
  a:first-child {
    margin-top: 2.5rem;
  }

  a {
    font-size: 1.25rem;
    padding: 1rem 0;
    font-weight: bold;
  }
`;
