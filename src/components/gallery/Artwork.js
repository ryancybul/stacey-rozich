/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { useWindowWidth } from '@react-hook/window-size';
import Lightbox from './Lightbox';

const Artwork = ({ artwork, lighbtoxSources }) => {
  const [selectedImage, setLightboxImage] = useState('');
  const [columnNum, setColumnNum] = useState();
  const width = useWindowWidth();

  // sets the number of columns
  useEffect(() => {
    if (width >= 1200) {
      setColumnNum(3);
    } else if (width > 650) {
      setColumnNum(2);
    } else {
      setColumnNum(1);
    }
  }, [width]);

  // Set the image for the lightbox the image lightbox
  const showImage = async image => {
    await setLightboxImage(null);
    await setLightboxImage(image);
  };

  const GatsbyImage = ({ index, photo, top, left, key }) => (
    <ImageWrapper
      index={index}
      key={key}
      tabIndex={index}
      onClick={() => showImage(photo.src)}
      style={{
        height: photo.height,
        width: photo.width,
        position: 'absolute',
        top,
        left,
      }}
    >
      <Img fluid={photo.fluid} alt={photo.title} loading="auto" />
    </ImageWrapper>
  );

  return (
    <>
      <GalleryWrapper>
        <Gallery
          photos={artwork}
          direction="column"
          columns={columnNum}
          renderImage={GatsbyImage}
        />
      </GalleryWrapper>
      <Lightbox
        selectedImage={selectedImage}
        lighbtoxSources={lighbtoxSources}
      />
    </>
  );
};

export default Artwork;

const GalleryWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5vw;
  @media only screen and (max-width: 400px) {
    /* pointer-events: none; */
  }
`;

const ImageWrapper = styled.div`
  display: block;
  position: relative;
  padding: 10px;
  :focus {
    outline: none;
  }
  .gatsby-image-wrapper {
    color: transparent;
  }
`;
