/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import { useWindowWidth } from '@react-hook/window-size';
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import closeButton from '../../images/closeButton.png';

const Lightbox = ({ selectedImage, lighbtoxSources }) => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const width = useWindowWidth();
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

  useEffect(() => {
    // Hides lightbox on mobile
    width <= 430 ? setLightboxDisplay(false) : null;
  }, [width]);

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
          <button onClick={hideLightbox} title="Close">
            <div className="closeButton">
              <img src={closeButton} alt="Close ligthbox" />
            </div>
          </button>
          <div>
            <button onClick={showPrev} title="Previous">
              <div>
                <img src={leftArrow} alt="Next" />
              </div>
            </button>
            <button onClick={showNext} title="Next">
              <div>
                <img src={rightArrow} alt="Previous" />
              </div>
            </button>
          </div>
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
  flex-direction: column;
  justify-content: center;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    outline: 0;
    z-index: 11;
    div {
      align-items: center;
      display: flex;
      justify-content: center;
      position: relative;
      width: 80px;
      height: 50px;
    }
    img {
      /* border: 1px solid red; */
      position: relative;
      height: 40px;
      width: 40px;
    }
  }
  .closeButton {
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    img {
      margin: 10px;
    }
  }
  // Media query for width of iPhone 12 Pro Max
  @media only screen and (max-width: 430px) {
  }
`;

const LightboxImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  .fadeIn {
    opacity: 1;
    transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;
  }
  .fadeOut {
    opacity: 0;
    transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
  }
`;
