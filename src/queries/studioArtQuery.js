import { useStaticQuery, graphql } from 'gatsby';

export const studioArtQuery = () => {
  const artData = useStaticQuery(graphql`
    query {
      allWordpressWpMedia(
        filter: { categories: { elemMatch: { name: { regex: "/Studio/" } } } }
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
                  quality: 75
                  srcSetBreakpoints: [400, 600, 700, 800]
                  sizes: "(max-width: 415px) 400px,(max-width: 1200px) 600px, (max-width: 1800px) 700px, 100vw"
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
