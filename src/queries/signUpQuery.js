import { useStaticQuery, graphql } from 'gatsby';

export const signUpQuery = () => {
  const signUpData = useStaticQuery(graphql`
    {
      TheGorgeousHussy: file(relativePath: { eq: "TheGorgeousHussy.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 75
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
    }
  `);
  return signUpData;
};
