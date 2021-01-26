import React, { useState, useEffect } from 'react';
import { studioArtQuery } from '../../queries/studioArtQuery';
import Artwork from './Artwork';

const StudioGallery = () => {
  const data = studioArtQuery().allWpMediaItem.edges;
  const [allArt, setArtwork] = useState([]);
  const sortedArt = allArt
    .sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated))
    .reverse();

  useEffect(() => {
    setArtwork(
      data.map(function(image) {
        let DateCreated;
        if (image.node.dateCreated.dateCreated === null) {
          DateCreated = image.node.date;
        } else {
          DateCreated = image.node.dateCreated.dateCreated;
        }
        return {
          alt: image.node.altText,
          date: image.node.date,
          dateCreated: DateCreated,
          caption: image.node.caption,
          title: image.node.title,
          gatsbyImageData: image.node.localFile.childImageSharp.gatsbyImageData,
          id: image.node.id,
          src: image.node.localFile.childImageSharp.original.src,
          srcSet: image.node.localFile.childImageSharp.gatsbyImageData.srcSet,
          sizes: image.node.localFile.childImageSharp.gatsbyImageData.sizes,
          width: image.node.localFile.childImageSharp.original.width,
          height: image.node.localFile.childImageSharp.original.height,
          key: image.node.id,
        };
      })
    );
  }, [data]);

  return sortedArt.length > 0 ? <Artwork artwork={sortedArt} /> : null;
};

export default StudioGallery;
