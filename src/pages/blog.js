import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import parse from 'html-react-parser';
import SEO from '../components/seo';

const blog = ({ data }) => (
  <PageWrapper>
    <SEO title="Blog" />
    <Wrapper>
      {data.allWpPost.edges.map(post => (
        <Link to={`/blog/${post.node.slug}`}>
          <PostStyles key={post.node.slug} className="grow">
            <GatsbyImage
              image={
                post.node.title_image.titleImage.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
            <div className="blogText">
              <h2>{parse(post.node.title)}</h2>
              <p>{post.node.date}</p>
            </div>
          </PostStyles>
        </Link>
      ))}
    </Wrapper>
  </PageWrapper>
);

export default blog;

export const query = graphql`
  {
    allWpPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          date(formatString: "MM/DD/YY")
          slug
          title
          title_image {
            titleImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    formats: [AUTO]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  .grow {
    transition: all 0.2s ease-in-out;
  }
  .grow:hover {
    transform: scale(1.015);
  }
`;

const PostStyles = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  border-radius: 25px;
  margin: 30px;
  padding: 15px;
  min-height: 400px;
  width: 350px;
  -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, -50px 0px 15px 9px rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, -50px 0px 15px 9px rgba(0, 0, 0, 0);
  }
  .blogText {
    text-align: center;
    margin: 0px;
  }
  p {
    font-size: .7rem;
    margin: 0px;
  }
  h2 {
    margin: 0px;
    margin-top: 10px;
    font-size: 1.5rem;
    z-index: 2;
  }
  @media only screen and (max-width: 430px) {
    width: 325px;
  }
`;
