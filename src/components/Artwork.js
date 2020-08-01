import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Artwork = props => {
  const artwork = props.data.data;
  return (
    <div>
      <Container>
        {artwork.map(({ node }, i) => (
          <StyledImg
            key={i}
            fluid={node.localFile.childImageSharp.fluid}
            className={node.categories
              .map(category => category.name)
              .toString()
              .toLowerCase()
              .replace(/,/g, ' ')}
          />
        ))}
      </Container>
    </div>
  );
};

export default Artwork;

const Container = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;

  .gatsby-image-wrapper {
    margin: 5px;
  }
`;

const StyledImg = styled(Img)`
    min-width: 400px;
    max-width: 100%;
  }
`;
