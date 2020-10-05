import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';

const StudioGallery = () => {
  const artQuery = studioArtQuery();
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

export default StudioGallery;

const Container = styled.div``;

/* 
To do:
Hover description effect
Ask Stacey what kind of layoud she would like.
She likes collage style layouts
*/
