import React, { useState, useEffect } from 'react';
import { commercialArtQuery } from '../../queries/commercialArtQuery';
import Artwork from './Artwork';

const CommercialGallery = () => {
  const data = commercialArtQuery().allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState([]);
  const [allSources, setSources] = useState([]);

  useEffect(() => {
    setArtwork(
      data.map(function(image) {
        return {
          alt: image.node.alt_text,
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
    setSources(
      data.map(function(image) {
        return image.node.localFile.childImageSharp.original.src;
      })
    );
  }, [data]);

  return <Artwork artwork={allArt} lightboxSources={allSources} />;
};

export default CommercialGallery;
