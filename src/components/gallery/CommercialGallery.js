import React, { useState, useEffect } from "react";
import { commercialArtQuery } from "../../queries/commercialArtQuery";
import Artwork from "./Artwork";
import _ from "lodash";
import compare from "compare-property";

const CommercialGallery = () => {
  const data = commercialArtQuery().allWpMediaItem.edges;
  const [allArt, setArtwork] = useState([]);
  const fn = compare.properties({ dateCreated: -1, order: 1 });
  const sortedArt = allArt.sort(fn);

  useEffect(() => {
    setArtwork(
      data.map(function (image) {
        return {
          alt: image.node.altText,
          date: image.node.date,
          dateCreated:
            image.node.dateCreated.dateCreated === null
              ? new Date(image.node.date)
              : new Date(image.node.dateCreated.dateCreated),
          caption: image.node.caption,
          title: image.node.title,
          gatsbyImageData: image.node.localFile.childImageSharp.gatsbyImageData,
          id: image.node.id,
          order: image.node.dateCreated.order,
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

export default CommercialGallery;
