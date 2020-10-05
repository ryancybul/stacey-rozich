import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useWindowWidth } from '@react-hook/window-size';

const Artwork = ({ artwork }) => {
  const images = artwork.data;
  const width = useWindowWidth();

  const photos = images.map(function(image) {
    return {
      alt: image.node.alt_text,
      fluid: image.node.localFile.childImageSharp.fluid,
      src: image.node.localFile.childImageSharp.fluid.originalImg,
      srcSet: image.node.localFile.childImageSharp.fluid.srcSet,
      sizes: image.node.localFile.childImageSharp.fluid.sizes,
      width: image.node.localFile.childImageSharp.original.width,
      height: image.node.localFile.childImageSharp.original.height,
      key: image.node.localFile.childImageSharp.fluid.src,
    };
  });

  const GatsbyImage = ({ index, photo, top, left, key, onClick }) => (
    <div
      style={{
        height: photo.height,
        width: photo.width,
        position: 'absolute',
        top,
        left,
      }}
      index={index}
      key={key}
      onClick={e => onClick(e, { photo, index })}
    >
      <Image fluid={photo.fluid} />
    </div>
  );

  return (
    <GalleryWrapper>
      <Gallery
        photos={photos}
        direction="column"
        columns={width > 750 ? 2 : 1}
        renderImage={GatsbyImage}
        // onClick={openLightbox}
      />
    </GalleryWrapper>
  );
};

export default Artwork;

const GalleryWrapper = styled.div`
  width: 100%;
`;

const Image = styled(Img)`
  margin: 20px 0px;
`;
