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
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
