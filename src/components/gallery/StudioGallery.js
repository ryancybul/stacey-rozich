import React, { useState, useEffect } from 'react';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';
import ArtworkCopy from './Artwork-copy';

const StudioGallery = () => {
  const data = studioArtQuery().allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState([]);

  useEffect(() => {
    setArtwork(
      data.map(function(image) {
        return {
          alt: image.node.alt_text,
          title: image.node.title,
          fluid: image.node.localFile.childImageSharp.fluid,
          id: image.node.id,
          srcSet: image.node.localFile.childImageSharp.fluid.srcSet,
          sizes: image.node.localFile.childImageSharp.fluid.sizes,
          width: image.node.localFile.childImageSharp.original.width,
          height: image.node.localFile.childImageSharp.original.height,
          key: image.node.localFile.childImageSharp.fluid.src,
        };
      })
    );
  }, [data]);

  return <ArtworkCopy artwork={allArt} />;
};

export default StudioGallery;
