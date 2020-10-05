import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { commercialArtQuery } from '../../queries/commercialArtQuery';
import Artwork from './Artwork';

const CommercialGallery = () => {
  const artQuery = commercialArtQuery();
  const data = artQuery.allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  return (
    <Container>
      <Artwork artwork={allArt} />
    </Container>
  );
};

export default CommercialGallery;

const Container = styled.div``;

/* 
To do:
Hover description effect
Ask Stacey what kind of layoud she would like.
She likes collage style layouts
*/
