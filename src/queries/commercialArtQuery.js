import { useStaticQuery, graphql } from 'gatsby';

export const commercialArtQuery = () => {
  const artData = useStaticQuery(graphql`
    query {
      allWordpressWpMedia(
        filter: {
          categories: { elemMatch: { name: { regex: "/Commercial/" } } }
        }
        sort: {
          order: DESC
          fields: media_details___image_meta___created_timestamp
        }
      ) {
        edges {
          node {
            categories {
              name
            }
            alt_text
            title
            id
            media_details {
              image_meta {
                created_timestamp
              }
            }
            localFile {
              childImageSharp {
                original {
                  height
                  width
                }
                fluid(
                  sizes: "(max-width: 200px), (max-width: 400px), (max-width: 800px)"
                  srcSetBreakpoints: [200, 400, 800]
                ) {
                  ...GatsbyImageSharpFluid_withWebp
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
