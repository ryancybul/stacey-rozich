/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';

const Lightbox = ({ selectedImage, lighbtoxSources }) => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  let lightboxImage;

  // Sets the image to display and opens the ligthbox
  useEffect(() => {
    setImageToShow(selectedImage);
    selectedImage != '' ? setLightboxDisplay(true) : null;
  }, [selectedImage]);

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  // Show next image in lightbox
  const showNext = e => {
    e.stopPropagation();
    const currentIndex = lighbtoxSources.indexOf(imageToShow);
    if (currentIndex >= lighbtoxSources.length - 1) {
      const nextImage = lighbtoxSources[0];
      setImageToShow(nextImage);
    } else {
      const nextImage = lighbtoxSources[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  // Shows previous image in lightbox
  const showPrev = e => {
    e.stopPropagation();
    const currentIndex = lighbtoxSources.indexOf(imageToShow);
    if (currentIndex <= 0) {
      const nextImage = lighbtoxSources[lighbtoxSources.length - 1];
      setImageToShow(nextImage);
    } else {
      const nextImage = lighbtoxSources[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  // Keyboard nav
  const keyHandler = e => {
    if (e.keyCode === 37) {
      showPrev(e);
    } else if (e.keyCode === 39) {
      showNext(e);
    } else if (e.keyCode === 27) {
      hideLightbox(e);
    }
  };

  // Prevent scrolling when lightbox is active
  lightboxDisplay ? disableScroll.on() : disableScroll.off();

  // If lightbox image is music video display iFrame
  if (imageToShow === '/static/img-1-2a8132b25a74466576f4bc44d9653885.jpg') {
    lightboxImage = (
      <iframe
        title="Goat Hide From The Sun"
        src="https://www.youtube.com/embed/tnu_O5P8P5I?wmode=opaque&enablejsapi=1&autoplay=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
        allowFullScreen
        controls="0"
        frameBorder="0"
        width="840"
        height="472.5"
      />
    );
  } else if (
    imageToShow === '/static/img-c0f5b640adc30e0dfb2df2643f83f260.jpg'
  ) {
    lightboxImage = (
      <iframe
        title="Fleet Foxes - The Shrine / An Argument"
        src="https://www.youtube.com/embed/9yAxIdkF2Qo?wmode=opaque&enablejsapi=1&autoplay=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
        allowFullScreen
        controls="0"
        frameBorder="0"
        width="840"
        height="472.5"
      />
    );
  } else {
    lightboxImage = <img id="lightbox-img" src={imageToShow} />;
  }

  return (
    <>
      {lightboxDisplay ? (
        <LightboxWrapper id="lightbox" onClick={hideLightbox}>
          <LightboxImageWrapper>{lightboxImage}</LightboxImageWrapper>
          <button onClick={hideLightbox} title="Close" className="closeButton">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                version="1.1"
              >
                <path d="M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"></path>
              </svg>
            </div>
          </button>
          <button onClick={showPrev} title="Previous">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M25.47 38.64l.44-.44c.29-.29.29-.76 0-1.05L14.82 26.06h23.35c.41 0 .75-.33.75-.75v-.62c0-.41-.33-.75-.75-.75H14.82l11.09-11.09c.29-.29.29-.76 0-1.05l-.44-.44a.742.742 0 0 0-1.05 0L11.31 24.47c-.29.29-.29.76 0 1.05l13.11 13.11c.29.3.76.3 1.05.01z"></path>
              </svg>
            </div>
          </button>
          <button onClick={showNext} title="Next">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M24.53 11.36l-.44.44c-.29.29-.29.76 0 1.05l11.09 11.09H11.83c-.41 0-.75.33-.75.75v.62c0 .41.33.75.75.75h23.35L24.09 37.14c-.29.29-.29.76 0 1.05l.44.44c.29.29.76.29 1.05 0l13.11-13.11c.29-.29.29-.76 0-1.05l-13.1-13.11a.754.754 0 0 0-1.06 0z"></path>
              </svg>
            </div>
          </button>
        </LightboxWrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default Lightbox;

const LightboxWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    width: 80px;
    height: 80px;
    outline: 0;
    padding: 20px;
    z-index: 11;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      position: relative;
      fill: #e97b7c;
    }
  }
  .closeButton {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
  }
`;

const LightboxImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
  iframe {
    max-width: 100%;
    max-height: 100%;
  }
`;
