import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { commercialArtQuery } from '../../queries/commercialArtQuery';
import Artwork from './Artwork';

const CommercialGallery = () => {
  const artQuery = commercialArtQuery();
  const data = artQuery.allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });
  const [lightboxSources, setLightboxSources] = useState([]);

  useEffect(() => {
    setArtwork({ data });
  }, [data]);

  const customLightboxSources = data.map(image => {
    if (image.node.id === '6ab22f6d-d00b-5f6a-a5ed-42caa9b7d21d') {
      return (
        <iframe
          title={image.node.title}
          width="854"
          height="480"
          src="https://www.youtube.com/embed/tnu_O5P8P5I"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (image.node.id === '40b2ecab-d7b3-572c-a273-21a4fcf9c9d1') {
      return (
        <iframe
          title={image.node.title}
          allowFullScreen=""
          src="https://www.youtube.com/embed/9yAxIdkF2Qo?wmode=opaque&amp;enablejsapi=1"
          width="854"
          height="480"
          frameBorder="0"
        />
      );
    }
    // <div>
    //   <Img
    //     fluid={image.node.localFile.childImageSharp.fluid}
    //     alt={image.node.alt}
    //   />
    // </div>;
    return image.node.localFile.childImageSharp.fluid.originalImg;
  });

  return <Artwork artwork={allArt} lightboxSources={customLightboxSources} />;
};

export default CommercialGallery;
