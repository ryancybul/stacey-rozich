import React, { useState, useRef } from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu.js';
import { useOnClickOutside } from '../../hooks/hooks';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

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
            </div>
            <Img
              className="logo"
              fluid={data.logo.childImageSharp.fluid}
              loading="eager"
            />
            <div className="divRight">
              <a href="https://staceyrozich.bigcartel.com/" target="_blank">
                Shop
              </a>
              <Link to="/blog/">Blog</Link>
              <Link to="/about/">About</Link>
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
  z-index: 2;
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
    &[aria-current='page'] {
      color: var(--secondary);
      border-bottom: 2px solid var(--secondary);
    }
  }
  a:hover {
    border-bottom: 2px solid var(--secondary);
  }
  .divLeft {
    margin-left: 1.5rem;
    a {
      margin-right: 3rem;
    }
  }
  .divRight {
    margin-right: 1.5rem;
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
        margin-right: 1.5rem;
      }
    }
    .divRight {
      margin-right: 1rem;
      a {
        margin-left: 1.5rem;
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
  query {
    logo: file(relativePath: { eq: "Logo_StaceyRozich.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
