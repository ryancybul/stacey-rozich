import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import parse from "html-react-parser";
import SEO from "../components/seo";
import moment from "moment";

const blog = ({ data }) => (
  <PageWrapper>
    <SEO title="Blog" />
    <GatsbyImage
      image={data.theDevil.childImageSharp.gatsbyImageData}
      alt="Devil stacking tomato cans"
      className="devil"
    />

    {/* {data.allWpPost.edges.map((post) => (
      <Link to={`/blog/${post.node.slug}`} key={post.node.slug}>
        <PostStyles key={post.node.slug} className="grow">
          <div className="blogText">
            <h3>{parse(post.node.title)}</h3>
            <time>
              {moment(new Date(post.node.date)).format("MMMM DD, YYYY")}
            </time>
            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></div>
            <hr />
          </div>
        </PostStyles>
      </Link>
    ))} */}
  </PageWrapper>
);

export default blog;

export const query = graphql`
  {
    allWpPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          date
          excerpt
          slug
          title
        }
      }
    }
    theDevil: file(relativePath: { eq: "Blog_Placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
          formats: [AUTO]
        )
      }
    }
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .devil {
    max-width: 475px;
    margin: 0px 20px;
  }
  .grow {
    transition: all 0.2s ease-in-out;
  }
  .grow:hover {
    transform: scale(1.015);
  }
`;

const PostStyles = styled.div`
  display: flex;
  overflow-wrap: break-word;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  }
  .blogText {
    margin: 0px;
  }
  p {
    font-size: var(--mediumSmallText);
    font-weight: var(--fontWeightThin);
    margin: 0px;
  }
  h3 {
    margin: 0px;
    font-size: var(--h3);
    font-style: italic;
    text-decoration: underline var(--secondary);
  }
  hr {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
  }
  time {
    font-size: var(--smallText);
    font-weight: var(--fontWeightThin);
  }
`;
