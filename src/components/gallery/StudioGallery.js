import React, { useState, useEffect } from 'react';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';

const StudioGallery = () => {
  const artQuery = studioArtQuery();
  const data = artQuery.allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  /*
  Todo:
  Create customSources array
  Loop through the data
  If video create iFrame for player custom sources
  Bonus try to get Gatsby Image to work. 
  */

  const lightboxCustomSources = [];
  data.map(image => {
    if (image.node.title === 'attachment-54d54665e4b0cd782e8497cb') {
      lightboxCustomSources.push(
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/tnu_O5P8P5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      );
    } else {
      lightboxCustomSources.push(
        image.node.localFile.childImageSharp.fluid.originalImg
      );
    }
  });

  const lightboxSources = [];
  data.map(image => {
    lightboxSources.push(
      image.node.localFile.childImageSharp.fluid.originalImg
    );
  });

  return <Artwork artwork={allArt} lightboxSources={lightboxCustomSources} />;
};

export default StudioGallery;
