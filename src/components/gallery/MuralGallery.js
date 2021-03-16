import React, { useState, useEffect } from 'react';
import { muralArtQuery } from '../../queries/muralArtQuery';
import Artwork from './Artwork';

const MuralGallery = () => {
  const data = muralArtQuery().allWpMediaItem.edges;
  const [allArt, setArtwork] = useState([]);
  const sortedArt = allArt
    .sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated))
    .reverse();

  useEffect(() => {
    setArtwork(
      data.map(function(image) {
        return {
          alt: image.node.altText,
          date: image.node.date,
          dateCreated:
            image.node.dateCreated.dateCreated === null
              ? image.node.date
              : image.node.dateCreated.dateCreated,
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

export default MuralGallery;
