import { useStaticQuery, graphql } from 'gatsby';

export const studioArtQuery = () => {
  const artData = useStaticQuery(graphql`
    query {
      allWordpressWpMedia(
        filter: { categories: { elemMatch: { name: { regex: "/Studio/" } } } }
        sort: { order: DESC, fields: date }
      ) {
        edges {
          node {
            acf {
              date_created
            }
            categories {
              name
            }
            alt_text
            caption
            date(formatString: "M/YY")
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
                  quality: 100
                  srcSetBreakpoints: [400, 500, 600, 700]
                  sizes: "(max-width: 650px) calc(98.5vw - 20px),(max-width: 1200px) calc(49.25vw - 40px), (max-width: 1920px) calc(32.83vw - 60px), 100vw"
                ) {
                  ...GatsbyImageSharpFluid
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
