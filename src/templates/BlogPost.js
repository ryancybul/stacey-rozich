import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import parse from 'html-react-parser';
import SEO from '../components/seo';

const blogPost = ({ data }) => {
  const title = parse(data.wordpressPost.title);
  const slugs = data.allWordpressPost.edges.map(post => post.node.slug);
  const currentSlug = slugs.indexOf(data.wordpressPost.slug);
  const nextSlug = slugs[currentSlug + 1];
  const prevSlug = slugs[currentSlug - 1];
  const disabledNext = nextSlug ? '' : 'disabled-link';
  const disabledPrev = prevSlug ? '' : 'disabled-link';
  const author = data.wordpressPost.author.name;
  const { date } = data.wordpressPost;

  return (
    <Wrapper>
      <SEO title={title} description={data.wordpressPost.excerpt} />
      <div className="backdrop"></div>
      <PostWrapper>
        <div>
          <h1>{title}</h1>
          <span>
            by {author} - {date}
          </span>
        </div>
        <Img
          fluid={
            data.wordpressPost.acf.featured_image.localFile.childImageSharp
              .fluid
          }
          alt={title}
        />
        <div
          className="subhead"
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />
      </PostWrapper>
      <div className="paginationWrapper">
        <Link
          disabled={!prevSlug}
          className={`${disabledPrev}`}
          to={`/blog/${prevSlug}`}
        >
          Prev Post
        </Link>
        <span>/</span>
        <Link disabled={!nextSlug} to="/blog/">
          All Posts
        </Link>
        <span>/</span>
        <Link
          disabled={!nextSlug}
          className={`${disabledNext}`}
          to={`/blog/${nextSlug}`}
        >
          Next Post
        </Link>
      </div>
    </Wrapper>
  );
};
export default blogPost;

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      author {
        name
      }
      content
      date(formatString: "MMMM DD, YYYY")
      excerpt
      slug
      title
      acf {
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allWordpressPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  transform: translateY(-100px);
  width: 100%;
  .backdrop {
    background-color: var(--primary);
    height: 525px;
    width: 100vw;
    z-index: -1;
  }
  .paginationWrapper {
    span {
      display: inline;
      margin: 10px;
    }
  }
  .disabled-link {
    pointer-events: none;
    text-decoration-line: line-through;
    text-decoration-color: var(--secondary);
    text-decoration-style: wavy;
    text-decoration-thickness: 2px;
  }
  a {
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: var(--secondary);
  }
`;

const PostWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: -425px;
  max-width: 800px;
  img {
    width: 75vw;
    height: auto;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
  }
  h1 {
    font-size: 2.75rem;
    text-align: center;
    margin: 0px;
  }
  span {
    display: block;
    font-style: italic;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  a {
    font-size: 1rem;
  }
  .subhead p:first-of-type::first-letter {
    font-size: 1.5rem;
  }
`;
