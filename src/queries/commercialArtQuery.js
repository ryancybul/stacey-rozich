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
                  srcSetBreakpoints: [200, 400, 600, 800]
                  sizes: "(max-width: 200px) calc(100vw - 14px),(max-width: 400px) calc(100vw - 14px), (max-width: 750px) calc(100vw - 28px),"
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
