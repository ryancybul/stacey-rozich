import Img from 'gatsby-image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import { studioArtQuery } from '../../queries/studioArtQuery';

const ArtworkCopy = () => {
  const data = studioArtQuery().allWordpressWpMedia.edges;
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    setArtwork(
      data.map(function(image) {
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
      })
    );
  }, [data]);

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
            <div key={photo.id}>
              <Img
                fluid={photo.fluid}
                alt={photo.title}
                fadeIn="false"
                critical
              />
            </div>
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
