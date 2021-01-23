/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { useWindowWidth } from '@react-hook/window-size';
import moment from 'moment';
import Lightbox from './Lightbox';

const Artwork = ({ artwork }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setLightboxImage] = useState('');
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
  const showImage = async imageId => {
    const index = artwork.findIndex(i => i.id === imageId);
    const image = artwork[index];
    await setLightboxImage(image);
    await toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    console.log('Toggled');
  };

  const GatsbyImage = ({ index, photo, top, left, key }) => {
    if (photo.id === '6ab22f6d-d00b-5f6a-a5ed-42caa9b7d21d' && width <= 430) {
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
    if (photo.id === '40b2ecab-d7b3-572c-a273-21a4fcf9c9d1' && width <= 430) {
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
        onClick={() => showImage(photo.id)}
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
        <Img fluid={photo.fluid} alt={photo.alt} loading="auto" />
        <div className="imageInfo">
          <h2>{parse(photo.title)}</h2>
          <span>{moment(photo.dateCreated).format('MM / DD / YY')}</span>
        </div>
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
          renderImage={GatsbyImage}
        />
      </GalleryWrapper>
      <Lightbox
        image={image}
        toggleModal={toggleModal}
        modalOpen={modalOpen}
        lightboxSources={artwork}
        width={width}
      />
    </>
  );
};

export default Artwork;

const GalleryWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5vw;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  display: block;
  padding: 10px;
  :focus {
    outline: none;
  }
  .imageInfo {
    justify-content: center;
    color: var(--secondary);
    display: flex;
    flex-direction: column;
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.75);
      opacity: 1;
    }
    h2 {
      font-size: 1.25rem;
      margin: 5px;
    }
    span {
      font-size: 0.75rem;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    color: transparent;
  }
  @media only screen and (max-width: 430px) {
    pointer-events: none;
  }
`;