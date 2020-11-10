import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { useWindowWidth } from '@react-hook/window-size';
import FsLightbox from 'fslightbox-react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

const Artwork = ({ artwork, lightboxSources }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    isOpenOnMount: false,
    sourceIndex: 0,
  });
  const [columnNum, setColumnNum] = useState();
  const width = useWindowWidth();
  const options = {
    settings: {},
    caption: { showCaption: false },
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.0)',
      iconColor: '#E97B7C',
      iconPadding: '5px',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
      size: '40px',
    },
    thumbnails: { showThumbnails: false },
    progressBar: {},
  };

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
            src="https://www.youtube.com/embed/tnu_O5P8P5I?autoplay=0&showinfo=0&controls=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            src="https://www.youtube.com/embed/9yAxIdkF2Qo?autoplay=0&showinfo=0&controls=0"
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
        style={{
          height: photo.height,
          width: photo.width,
          position: 'absolute',
          top,
          left,
        }}
        index={index}
        key={key}
        // onClick={() => openLightbox(index)}
        // onKeyDown={e => {
        //   if (e.keyCode === 13) {
        //     e.preventDefault();
        //     openLightbox(index);
        //   }
        // }}
        tabIndex={index}
        // aria-pressed="false"
        // role="button"
      >
        <Image fluid={photo.fluid} alt={photo.title} />
      </ImageWrapper>
    );
  };

  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <GalleryWrapper>
            <Gallery
              photos={images}
              direction="column"
              columns={columnNum}
              renderImage={GatsbyImage}
            />
          </GalleryWrapper>
        </SRLWrapper>
      </SimpleReactLightbox>
      {/* <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        sources={lightboxSources}
        openOnMount={lightboxController.isOpenOnMount}
        key={lightboxController.sourceIndex}
      /> */}
    </>
  );
};

export default Artwork;

const GalleryWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin-top: 130px;
  @media only screen and (max-width: 650px) {
    padding: 0 0.25rem;
    margin-top: 100px;
  }
`;

const ImageWrapper = styled.div`
  padding: 10px;
  :focus {
    outline: none;
  }
  iframe {
    display: block;
    top: 0px;
    left: 0px;
    object-fit: cover;
    object-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;

const Image = styled(Img)`
  color: transparent;
`;
