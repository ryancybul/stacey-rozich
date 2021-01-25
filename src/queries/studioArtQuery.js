import { useStaticQuery, graphql } from 'gatsby';

export const studioArtQuery = () => {
  const artData = useStaticQuery(graphql`
    query {
      allWpMediaItem(
        filter: {
          categories: { nodes: { elemMatch: { name: { regex: "/Studio/" } } } }
        }
      ) {
        edges {
          node {
            dateCreated {
              dateCreated
            }
            categories {
              nodes {
                name
              }
            }
            altText
            caption
            date
            description
            title
            id
            localFile {
              childImageSharp {
                original {
                  height
                  width
                  src
                }
                fluid(
                  maxWidth: 900
                  webpQuality: 100
                  quality: 100
                  toFormat: WEBP # srcSetBreakpoints: [400, 500, 600, 700] # sizes: "(max-width: 650px) calc(98.5vw - 20px),(max-width: 1200px) calc(49.25vw - 40px), (max-width: 1920px) calc(32.83vw - 60px), 100vw"
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
