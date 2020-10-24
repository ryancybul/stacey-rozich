import React, { useState, useEffect } from 'react';
import { commercialArtQuery } from '../../queries/commercialArtQuery';
import Artwork from './Artwork';

const CommercialGallery = () => {
  const data = commercialArtQuery().allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  const customLightboxSources = data.map(image => {
    if (image.node.id === '6ab22f6d-d00b-5f6a-a5ed-42caa9b7d21d') {
      return (
        <iframe
          title={image.node.title}
          src="https://www.youtube.com/embed/tnu_O5P8P5I?autoplay=0&showinfo=0&controls=0"
          width="1280"
          height="720"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          controls="0"
          frameBorder="0"
        />
      );
    }
    if (image.node.id === '40b2ecab-d7b3-572c-a273-21a4fcf9c9d1') {
      return (
        <iframe
          title={image.node.title}
          src="https://www.youtube.com/embed/9yAxIdkF2Qo?autoplay=0&showinfo=0&controls=0"
          width="1280"
          height="720"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowFullScreen
          controls="0"
          frameBorder="0"
        />
      );
    }
    return image.node.localFile.childImageSharp.fluid.originalImg;
    /* Todo
    Gatsby Image Suppoort
    */
    // return (
    //   <Img
    //     data-type="image"
    //     fluid={image.node.localFile.childImageSharp.fluid}
    //   />
    // );
  });

  return <Artwork artwork={allArt} lightboxSources={customLightboxSources} />;
};

export default CommercialGallery;
