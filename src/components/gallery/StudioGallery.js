import React, { useState, useEffect } from 'react';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';

const StudioGallery = () => {
  const data = studioArtQuery().allWpMediaItem.edges;
  const [allArt, setArtwork] = useState([]);

  useEffect(() => {
    setArtwork(
      data.map(function(image) {
        return {
          alt: image.node.altText,
          date: image.node.date,
          caption: image.node.caption,
          title: image.node.title,
          fluid: image.node.localFile.childImageSharp.fluid,
          id: image.node.id,
          src: image.node.localFile.childImageSharp.original.src,
          srcSet: image.node.localFile.childImageSharp.fluid.srcSet,
          sizes: image.node.localFile.childImageSharp.fluid.sizes,
          width: image.node.localFile.childImageSharp.original.width,
          height: image.node.localFile.childImageSharp.original.height,
          key: image.node.id,
        };
      })
    );
  }, [data]);

  return <Artwork artwork={allArt} />;
};

export default StudioGallery;
