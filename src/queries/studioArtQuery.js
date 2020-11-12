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
                  quality: 100
                  sizes: "(max-width: 200px), (max-width: 400px), 800px"
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
