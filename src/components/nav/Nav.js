import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Nav = () => (
  <StaticQuery
    query={query}
    render={data => (
      <NavStyles>
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
      </NavStyles>
    )}
  />
);

export default Nav;

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    &[aria-current='page'] {
    color: var(--secondary);
    border-bottom: 2px solid var(--secondary);
  }
  }
  .divLeft {
    a {
      margin-right: 3rem;
    }
  }
  .divRight {
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
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
