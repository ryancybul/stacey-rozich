import { useStaticQuery, graphql } from "gatsby";

export const signUpQuery = () => {
  const signUpData = useStaticQuery(graphql`
    {
      TheGorgeousHussy: file(relativePath: { eq: "TheGorgeousHussy.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            width: 300
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
      ClaudioPizza: file(relativePath: { eq: "claudio_pizza.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            width: 300
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }

      WavyBackground: file(relativePath: { eq: "WavyBackground.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            width: 400
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
    }
  `);
  return signUpData;
};
