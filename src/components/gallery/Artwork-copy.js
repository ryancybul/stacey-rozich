import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';

const ArtworkCopy = ({ artwork }) => {
  const options = {
    settings: { disablePanzoom: true },
    caption: { showCaption: false },
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.0)',
      iconColor: '#E97B7C',
      iconPadding: '5px',
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      size: '35px',
    },
    thumbnails: { showThumbnails: false },
    progressBar: {},
  };

  return (
    <>
      <SRLWrapper options={options}>
        <GalleryWrapper>
          {artwork.map(photo => (
            <Img fluid={photo.fluid} alt={photo.title} />
          ))}
        </GalleryWrapper>
      </SRLWrapper>
    </>
  );
};

export default ArtworkCopy;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  padding: 0 1.5rem;
  margin-top: 130px;
  @media only screen and (max-width: 750px) {
    /* pointer-events: none; */
  }
  @media only screen and (max-width: 650px) {
    padding: 0 0.25rem;
    margin-top: 100px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding: 10px;
  text-align: center;
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
`;
