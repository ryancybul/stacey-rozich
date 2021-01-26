import { useStaticQuery, graphql } from 'gatsby';

export const aboutPageQuery = () => {
  const aboutData = useStaticQuery(graphql`
    {
      portrait1: file(relativePath: { eq: "StaceyPortrait1.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 75, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
      portrait2: file(relativePath: { eq: "StaceyPortrait2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 75, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
      bird: file(relativePath: { eq: "BIRB_CawCaw.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 50
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      arrowPink: file(relativePath: { eq: "arrow_pink.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 50
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      interviews: allWpInterview(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            Interviews {
              hyperlink
            }
          }
        }
      }
    }
  `);
  return aboutData;
};
