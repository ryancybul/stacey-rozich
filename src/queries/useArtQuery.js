import { useStaticQuery, graphql } from 'gatsby';

export const useArtQuery = () => {
  const artData = useStaticQuery(graphql`
    query {
      allWordpressWpMedia(
        filter: {
          categories: {
            elemMatch: {
              name: { regex: "/Commercial|Studio|Mural|Personal/g" }
            }
          }
        }
      ) {
        edges {
          node {
            categories {
              name
            }
            alt_text
            title
            media_details {
              image_meta {
                created_timestamp
              }
            }
            localFile {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                resolutions {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `);
  return artData;
};
