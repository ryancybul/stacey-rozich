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
                  src
                }
                fluid(
                  quality: 75
                  srcSetBreakpoints: [400, 500, 600, 700]
                  sizes: "(max-width: 650px) calc(98.5vw - 20px),(max-width: 1200px) calc(49.25vw - 40px), (max-width: 1920px) calc(32.83vw - 60px), 100vw"
                ) {
                  ...GatsbyImageSharpFluid_noBase64
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
