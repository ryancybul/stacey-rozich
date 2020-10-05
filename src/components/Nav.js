import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Nav = ({ children }) => (
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
  a {
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 900;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid var(--black);
    }
    &[aria-current='page'] {
      color: var(--secondary);
      border-bottom: 2px solid var(--secondary);
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

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "Logo_StaceyRozich.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
