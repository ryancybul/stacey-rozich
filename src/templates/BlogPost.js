import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import parse from "html-react-parser";
import SEO from "../components/seo";
import moment from "moment";

const blogPost = ({ data }) => {
  const title = parse(data.wpPost.title);
  const slugs = data.allWpPost.edges.map((post) => post.node.slug);
  const currentSlug = slugs.indexOf(data.wpPost.slug);
  const nextSlug = slugs[currentSlug + 1];
  const prevSlug = slugs[currentSlug - 1];
  const disabledNext = nextSlug ? "" : "disabled-link";
  const disabledPrev = prevSlug ? "" : "disabled-link";
  const author = data.wpPost.author.node.name;
  const { date } = data.wpPost;

  return (
    <Wrapper>
      <SEO title={title} description={data.wpPost.excerpt} />
      <div
        className={
          data.wpPost.title_image.titleImage !== null ? "backdrop" : "backdrop2"
        }
      ></div>
      <PostWrapper>
        <div
          className={
            data.wpPost.title_image.titleImage !== null ? null : "noTitleImage"
          }
        >
          <h1>{title}</h1>
          <span>
            by {author} -{moment(new Date(date)).format("MMMM DD, YYYY")}
          </span>
        </div>
        {data.wpPost.title_image.titleImage !== null ? (
          <GatsbyImage
            alt={title != null ? title : ""}
            image={
              data.wpPost.title_image.titleImage.localFile.childImageSharp
                .gatsbyImageData
            }
            className="titleImage"
          />
        ) : null}
        <div
          className="subhead break-long-words"
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
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
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      author {
        node {
          name
        }
      }
      content
      date
      excerpt
      slug
      title
      title_image {
        titleImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
    allWpPost(sort: { order: DESC, fields: date }) {
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
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  transform: translateY(-125px);
  .backdrop {
    background-color: var(--primary);
    height: 525px;
    width: 100vw;
    z-index: -1;
  }
  .backdrop2 {
    background-color: var(--primary);
    height: 250px;
    width: 100vw;
    z-index: -1;
    margin-bottom: 125px;
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
  align-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: -415px;
  width: 100%;
  max-width: 800px;
  .inline-gatsby-image-wrapper {
    max-width: 100%;
    max-width: 800px;
    width: auto !important;
  }
  .noTitleImage {
    margin-top: 150px;
  }
  .titleImage {
    align-self: center;
    width: 100%;
    max-width: 800px;
  }
  h1 {
    font-size: 2.75rem;
    text-align: center;
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
  .subhead {
    width: 95%;
    align-self: center;
    p:first-of-type::first-letter {
      font-size: 1.5rem;
    }
  }
`;
