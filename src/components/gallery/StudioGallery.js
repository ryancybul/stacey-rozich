import React, { useState, useEffect } from 'react';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';

const StudioGallery = () => {
  const data = studioArtQuery().allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  return <Artwork artwork={allArt} />;
};

export default StudioGallery;
