import { useStaticQuery, graphql } from 'gatsby';

export const navQuery = () => {
  const navData = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "Logo_StaceyRozich.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
    }
  `);
  return navData;
};
