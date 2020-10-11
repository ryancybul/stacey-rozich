import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useWindowWidth } from '@react-hook/window-size';
import FsLightbox from 'fslightbox-react';

const Artwork = ({ artwork, lightboxSources }) => {
  const width = useWindowWidth();

  const photos = artwork.data.map(function(image) {
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

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    isOpenOnMount: false,
    sourceIndex: 0,
  });

  function openLightbox(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex,
      isOpenOnMount: true,
    });
  }

  const GatsbyImage = ({ index, photo, top, left, key }) => (
    <ImageWrapper
      style={{
        height: photo.height,
        width: photo.width,
        position: 'absolute',
        top,
        left,
      }}
      index={index}
      key={key}
      onClick={() => openLightbox(index)}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          e.preventDefault();
          openLightbox(index);
        }
      }}
      tabIndex={index}
      aria-pressed="false"
      role="button"
    >
      <Image fluid={photo.fluid} />
    </ImageWrapper>
  );

  return (
    <>
      <GalleryWrapper>
        <Gallery
          photos={photos}
          direction="column"
          columns={width > 750 ? 3 : 1}
          renderImage={GatsbyImage}
        />
      </GalleryWrapper>
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        sources={lightboxSources}
        openOnMount={lightboxController.isOpenOnMount}
        key={lightboxController.sourceIndex}
      />
    </>
  );
};

export default Artwork;

const GalleryWrapper = styled.div`
  width: 100%;
`;

const Image = styled(Img)`
  margin: 20px 0px;
`;

const ImageWrapper = styled.div`
  :focus {
    outline: none;
  }
`;
