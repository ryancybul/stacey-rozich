import { useStaticQuery, graphql } from 'gatsby';

export const signUpQuery = () => {
  const signUpData = useStaticQuery(graphql`
    query {
      TheGorgeousHussy: file(relativePath: { eq: "TheGorgeousHussy.png" }) {
        childImageSharp {
          fluid(quality: 75, maxWidth: 450) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return signUpData;
};
