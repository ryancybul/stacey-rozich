import React, { useState, useRef } from 'react';
import { useStaticQuery, StaticQuery, Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu.js';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { navQuery } from '../../queries/navQuery';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const data = navQuery();
  useOnClickOutside(node, () => setOpen(false));

  open ? disableScroll.on() : disableScroll.off();

  return (
    <NavWrapper className="nav">
      <div ref={node} className="Burger">
        <BurgerMenu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
      <NavMain>
        <div className="divLeft">
          <Link to="/commercial/" activeClassName="active">
            Commercial
          </Link>
          <Link to="/" activeClassName="active">
            Studio
          </Link>
          <Link to="/murals/" activeClassName="active">
            Murals
          </Link>
        </div>
        <Link to="/">
          <GatsbyImage
            alt="Logo"
            image={data.logo.childImageSharp.gatsbyImageData}
            className="logo"
            loading="eager"
          />
        </Link>
        <div className="divRight">
          <a
            href="https://staceyrozich.bigcartel.com/"
            target="_blank"
            rel="noreferrer"
          >
            Shop
          </a>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
          <Link to="/info/" activeClassName="active">
            Info
          </Link>
        </div>
      </NavMain>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  padding: 1rem 0;
  padding-bottom: 0;
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
  }
  .active {
    color: var(--secondary);
    border-bottom: 2px solid var(--secondary);
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
