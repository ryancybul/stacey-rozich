import { useStaticQuery, graphql } from 'gatsby';

export const aboutPageQuery = () => {
  const aboutData = useStaticQuery(graphql`
    {
      portrait1: file(relativePath: { eq: "StaceyPortrait1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 75
            placeholder: NONE
            layout: FULL_WIDTH
            formats: [AUTO]
          )
        }
      }
      portrait2: file(relativePath: { eq: "StaceyPortrait2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 75
            placeholder: NONE
            layout: FULL_WIDTH
            formats: [AUTO]
          )
        }
      }
      bird: file(relativePath: { eq: "BIRB_CawCaw.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
            formats: [AUTO]
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
            formats: [AUTO]
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
            formats: [AUTO]
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
