import React, { useState, useRef } from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu.js';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  // Disable scroll if mobile nav is open
  open ? disableScroll.on() : disableScroll.off();

  return (
    <StaticQuery
      query={query}
      render={data => (
        <NavWrapper className="nav">
          <div ref={node} className="Burger">
            <BurgerMenu open={open} setOpen={setOpen} />
            <Burger open={open} setOpen={setOpen} />
          </div>
          <NavMain>
            <div className="divLeft">
              <Link to="/commercial/">Commercial</Link>
              <Link to="/">Studio</Link>
              <Link to="/murals">Murals</Link>
            </div>
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              className="logo"
              loading="eager"
            />
            <div className="divRight">
              <a href="https://staceyrozich.bigcartel.com/" target="_blank">
                Shop
              </a>
              <Link to="/blog/">Blog</Link>
              <Link to="/info/">Info</Link>
            </div>
          </NavMain>
        </NavWrapper>
      )}
    />
  );
};

export default Nav;

const NavWrapper = styled.nav`
  padding: 1rem 0;
  width: 100vw;
  max-width: 1920px;
  z-index: 0;
  @media only screen and (min-width: 650px) {
    .Burger {
      display: none;
    }
  }
`;

const NavMain = styled.div`
  align-items: center;
  display: flex;
  height: var(--headerHeight);
  justify-content: space-between;
  a {
    font-size: var(--mediumText);
    transition: all 0.4s ease-in-out;
    &[aria-current='page'] {
      color: var(--secondary);
      border-bottom: 2px solid var(--secondary);
    }
  }
  a:hover {
    color: var(--secondary);
  }
  .divLeft {
    margin-left: 1.5rem;
    a {
      margin-right: 1.35rem;
    }
  }
  .divRight {
    margin-right: 1.35rem;
    a {
      margin-left: 3rem;
    }
  }
  .logo {
    width: 9rem;
  }
  @media only screen and (max-width: 825px) {
    a {
      font-size: var(--mediumSmallText);
    }
    .divLeft {
      margin-left: 1rem;
      a {
        margin-right: 0.5rem;
      }
      a:nth-child(3) {
        margin-right: 0;
      }
    }
    .divRight {
      margin-right: 1rem;
      a {
        margin-left: 1.5rem;
      }
      a:nth-child(1) {
        margin-left: 3rem;
      }
    }
    .logo {
      width: 9rem;
    }
  }
  @media only screen and (max-width: 650px) {
    justify-content: center;
    .divLeft {
      display: none;
    }
    .divRight {
      display: none;
    }
    .Burger {
      margin-top: 1rem;
    }
  }
`;

export const query = graphql`
  {
    logo: file(relativePath: { eq: "Logo_StaceyRozich.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
          formats: [AUTO]
        )
      }
    }
  }
`;
