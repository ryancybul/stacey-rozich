import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Nav = () => (
  <StaticQuery
    query={query}
    render={data => (
      <NavWrapper>
        <div className="divLeft">
          <Link to="/commercial">Commercial</Link>
          <Link to="/">Studio</Link>
        </div>
        <Img className="logo" fluid={data.logo.childImageSharp.fluid} />
        <div className="divRight">
          <a href="https://staceyrozich.bigcartel.com/" target="_blank">
            Shop
          </a>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </NavWrapper>
    )}
  />
);

export default Nav;

const NavWrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: .5rem;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  a{
    &[aria-current='page'] {
    color: var(--secondary);
    border-bottom: 2px solid var(--secondary);
  }
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
    width: 11rem;
    min-width: 9rem;
  }
  @media only screen and (max-width: 800px) {
    a {
      font-size: 1rem;
    }
    .divLeft {
      a {
        margin-right: 2rem;
      }
    }
    .divRight {
      a {
        margin-left: 2rem;
      }
    }
    .logo {
      width: 10rem;
      min-width: 9rem;
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
`;

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "Logo_StaceyRozich.png" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
