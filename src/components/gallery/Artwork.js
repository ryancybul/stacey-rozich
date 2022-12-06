/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PhotoAlbum from 'react-photo-album';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { useWindowWidth } from '@react-hook/window-size';
import Lightbox from './Lightbox';

const Artwork = ({ artwork }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(artwork[0]);
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Set the image for the lightbox the image lightbox
  const showImage = async (imageId) => {
    const index = artwork.findIndex((i) => i.id === imageId);
    const image = artwork[index];
    await setLightboxImage(image);
    await toggleModal();
  };

  const renderPhoto = ({
    imageProps: { style },
    photo: { alt, src, id, key, title, gatsbyImageData },
    photo,
  }) => {
    console.log(photo);
    if (id === 'cG9zdDoyNzA=' && width <= 430) {
      return (
        <ImageWrapper
          style={{
            height: style.height,
            width: style.width,
            pointerEvents: 'auto',
          }}
        >
          <iframe
            title={title}
            src="https://www.youtube.com/embed/tnu_O5P8P5I?wmode=opaque&enablejsapi=1&autoplay=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            frameBorder="0"
          />
        </ImageWrapper>
      );
    }
    if (id === 'cG9zdDoyNjk=' && width <= 430) {
      return (
        <ImageWrapper
          alt={alt}
          style={{
            height: style.height,
            width: style.width,
            pointerEvents: 'auto',
          }}
          key={key}
        >
          <iframe
            title={title}
            src="https://www.youtube.com/embed/9yAxIdkF2Qo?wmode=opaque&enablejsapi=1&autoplay=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            frameBorder="0"
          />
        </ImageWrapper>
      );
    }
    return (
      <ImageWrapper
        alt={alt}
        href={src}
        data-attribute="SRL"
        onClick={() => showImage(id)}
        key={key}
        style={{
          width: style.width,
        }}
      >
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt != null ? alt : ''}
          loading="auto"
        />
        <div className="imageInfo">
          <h2>{parse(title)}</h2>
        </div>
      </ImageWrapper>
    );
  };

  return (
    <>
      <GalleryWrapper>
        <PhotoAlbum
          photos={artwork}
          layout="masonry"
          spacing="0"
          columns={columnNum}
          renderPhoto={renderPhoto}
        />
      </GalleryWrapper>
      <Lightbox
        image={lightboxImage}
        toggleModal={toggleModal}
        modalOpen={modalOpen}
        artwork={artwork}
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
  position: relative;
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
    margin: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.75);
    h2 {
      font-size: 1.25rem;
      margin: 5px;
    }
    time {
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

  @media (hover: hover) and (pointer: fine) {
    .imageInfo:hover {
      background-color: rgba(0, 0, 0, 0.75);
      opacity: 1;
    }
  }
`;
