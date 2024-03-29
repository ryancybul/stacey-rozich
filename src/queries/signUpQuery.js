import { useStaticQuery, graphql } from 'gatsby';

export const signUpQuery = () => {
  const signUpData = useStaticQuery(graphql`
    {
      TheGorgeousHussy: file(relativePath: { eq: "TheGorgeousHussy.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            width: 300
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO]
          )
        }
      }
    }
  `);
  return signUpData;
};
