import React, { useState, useEffect } from 'react';
import { muralArtQuery } from '../../queries/muralArtQuery';
import Artwork from './Artwork';

const MuralGallery = () => {
  const data = muralArtQuery().allWpMediaItem.edges;
  const [allArt, setArtwork] = useState([]);
  allArt
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

export default MuralGallery;
