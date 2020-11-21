import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { useWindowWidth } from '@react-hook/window-size';
// import { SRLWrapper } from 'simple-react-lightbox';

const Artwork = ({ artwork }) => {
  const [columnNum, setColumnNum] = useState();
  const width = useWindowWidth();

  const options = {
    settings: { disablePanzoom: true },
    caption: { showCaption: false },
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.0)',
      iconColor: '#E97B7C',
      iconPadding: '10px',
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      size: '55px',
    },
    thumbnails: { showThumbnails: false },
    progressBar: {},
  };

  useEffect(() => {
    if (width >= 1200) {
      setColumnNum(3);
    } else if (width > 650) {
      setColumnNum(2);
    } else {
      setColumnNum(1);
    }
  }, [width]);

  const GatsbyImage = ({ index, photo, top, left, key }) => {
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
        href={photo.src}
        data-attribute="SRL"
        index={index}
        key={key}
        tabIndex={index}
        style={{
          height: photo.height,
          width: photo.width,
          position: 'absolute',
          top,
          left,
        }}
      >
        <Img
          index={index}
          key={key}
          fluid={photo.fluid}
          alt={photo.title}
          loading="auto"
        />
      </ImageWrapper>
    );
  };

  return (
    <>
      <GalleryWrapper>
        <SRLWrapper options={options}>
          <Gallery
            photos={artwork}
            direction="column"
            columns={columnNum}
            renderImage={GatsbyImage}
          />
        </SRLWrapper>
      </GalleryWrapper>
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

const ImageWrapper = styled.a`
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
