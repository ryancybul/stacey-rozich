import { useStaticQuery, graphql } from 'gatsby';

export const aboutPageQuery = () => {
  const aboutData = useStaticQuery(graphql`
    query {
      portrait1: file(relativePath: { eq: "StaceyPortrait1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      portrait2: file(relativePath: { eq: "StaceyPortrait2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bird: file(relativePath: { eq: "BIRB_CawCaw.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      arrowPink: file(relativePath: { eq: "arrow_pink.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return aboutData;
};
