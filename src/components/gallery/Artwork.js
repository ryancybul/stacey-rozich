import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { useWindowWidth } from '@react-hook/window-size';

const Artwork = ({ artwork, lighbtoxSources }) => {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');
  const [columnNum, setColumnNum] = useState();
  const width = useWindowWidth();

  useEffect(() => {
    if (width >= 1200) {
      setColumnNum(3);
    } else if (width > 650) {
      setColumnNum(2);
    } else {
      setColumnNum(1);
    }
  }, [width]);

  // Shows the image lightbox
  const showImage = image => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  // Show next and previous image in lightbox
  const showNext = e => {
    e.stopPropagation();
    const currentIndex = lighbtoxSources.indexOf(imageToShow);
    if (currentIndex >= lighbtoxSources.length - 1) {
      setLightboxDisplay(false);
    } else {
      const nextImage = lighbtoxSources[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = e => {
    e.stopPropagation();
    const currentIndex = lighbtoxSources.indexOf(imageToShow);
    console.log({ currentIndex });
    if (currentIndex <= 0) {
      setLightboxDisplay(false);
    } else {
      const nextImage = lighbtoxSources[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const GatsbyImage = ({ index, onClick, photo, top, left, key }) => {
    if (photo.id === '6ab22f6d-d00b-5f6a-a5ed-42caa9b7d21d') {
      return (
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
          tabIndex={index}
        >
          <iframe
            title={photo.title}
            src="https://www.youtube.com/embed/tnu_O5P8P5I?wmode=opaque&enablejsapi=1&autoplay=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            controls="0"
            frameBorder="0"
          />
        </ImageWrapper>
      );
    }
    if (photo.id === '40b2ecab-d7b3-572c-a273-21a4fcf9c9d1') {
      return (
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
          tabIndex={index}
        >
          <iframe
            title={photo.title}
            src="https://www.youtube.com/embed/9yAxIdkF2Qo?wmode=opaque&enablejsapi=1&autoplay=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            controls="0"
            frameBorder="0"
          />
        </ImageWrapper>
      );
    }
    return (
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
  };

  return (
    <>
      <GalleryWrapper>
        <Gallery
          photos={artwork}
          direction="column"
          columns={columnNum}
          onClick={showImage}
          renderImage={GatsbyImage}
        />
      </GalleryWrapper>
      {lightboxDisplay ? (
        <Lightbox id="lightbox" onClick={hideLightbox}>
          <button onClick={showPrev}>←</button>
          <img id="lightbox-img" src={imageToShow} />
          <button onClick={showNext}>→</button>
        </Lightbox>
      ) : (
        ''
      )}
    </>
  );
};

export default Artwork;

const GalleryWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5vw;
  margin-top: 130px;
  @media only screen and (max-width: 400px) {
    /* pointer-events: none; */
  }
  @media only screen and (max-width: 650px) {
    margin-top: 100px;
  }
`;

const ImageWrapper = styled.div`
  display: block;
  position: relative;
  padding: 10px;
  :focus {
    outline: none;
  }
  iframe {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .gatsby-image-wrapper {
    color: transparent;
  }
`;

const Lightbox = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 155, 237, 0.52);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .gatsby-image-wrapper {
    width: 50vw;
    height: 50vw;
  }
`;
