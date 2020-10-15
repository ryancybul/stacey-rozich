import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useWindowWidth } from '@react-hook/window-size';
import FsLightbox from 'fslightbox-react';

const Artwork = ({ artwork, lightboxSources }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    isOpenOnMount: false,
    sourceIndex: 0,
  });
  const [columnNum, setColumnNum] = useState();
  const width = useWindowWidth();

  useEffect(() => {
    if (width >= 1200) {
      setColumnNum(3);
    } else if (width >= 750) {
      setColumnNum(2);
    } else {
      setColumnNum(1);
    }
  }, [width]);

  const images = artwork.data.map(function(image) {
    return {
      alt: image.node.alt_text,
      title: image.node.title,
      fluid: image.node.localFile.childImageSharp.fluid,
      id: image.node.id,
      srcSet: image.node.localFile.childImageSharp.fluid.srcSet,
      sizes: image.node.localFile.childImageSharp.fluid.sizes,
      width: image.node.localFile.childImageSharp.original.width,
      height: image.node.localFile.childImageSharp.original.height,
      key: image.node.localFile.childImageSharp.fluid.src,
    };
  });

  const openLightbox = sourceIndex => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex,
      isOpenOnMount: true,
    });
  };

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
      <Image fluid={photo.fluid} alt={photo.title} />
    </ImageWrapper>
  );

  return (
    <>
      <GalleryWrapper>
        <Gallery
          photos={images}
          direction="column"
          columns={columnNum}
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
  margin-top: 115px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  :focus {
    outline: none;
  }
`;

const Image = styled(Img)`
  margin: 10px;
`;
