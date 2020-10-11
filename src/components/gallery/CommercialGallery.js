import React, { useState, useEffect } from 'react';
import { commercialArtQuery } from '../../queries/commercialArtQuery';
import Artwork from './Artwork';

const CommercialGallery = () => {
  const artQuery = commercialArtQuery();
  const data = artQuery.allWordpressWpMedia.edges;
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

export default CommercialGallery;
