import React, { useState, useEffect } from 'react';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';

const StudioGallery = () => {
  const data = studioArtQuery().allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  const lightboxSources = [];
  data.map(image => {
    lightboxSources.push(
      image.node.localFile.childImageSharp.fluid.originalImg
    );
  });

  return <Artwork artwork={allArt} lightboxSources={lightboxSources} />;
};

export default StudioGallery;
