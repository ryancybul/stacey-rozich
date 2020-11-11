import React, { useState, useEffect } from 'react';
import { commercialArtQuery } from '../../queries/commercialArtQuery';
import Artwork from './Artwork';

const CommercialGallery = () => {
  const data = commercialArtQuery().allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  return <Artwork artwork={allArt} />;
};

export default CommercialGallery;
