import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useArtQuery } from '../queries/useArtQuery';

const Gallery = props => {
  const artQuery = useArtQuery();
  const [artwork, setArtwork] = useState({ data: [] });
  const [filteredArt, setFilteredArt] = useState({ data: [] });

  const filteredArtwork = filteredCat => {
    const newData = [];
    setFilteredArt({ newData });
  };

  useEffect(() => {
    const data = artQuery.allWordpressWpMedia.edges;
    setArtwork({ data });
    setFilteredArt({ data });
  }, [artQuery.allWordpressWpMedia.edges]);

  return (
    <div>
      <Artwork>
        {filteredArt.data.map(({ node }, i) => (
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
      </Artwork>
    </div>
  );
};

export default Gallery;

const Artwork = styled.div`
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

/* 
To do:
Figure out how to sort by date.
Figure out how to get the rows an average height
Hover description effect
Delete all duplicates images on Wordpress
Ask Stacey what kind of layoud she would like.
*/
