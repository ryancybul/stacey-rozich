/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import parse from 'html-react-parser';
import { useWindowWidth } from '@react-hook/window-size';
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import closeButton from '../../images/closeButton.png';

const Lightbox = ({ image, lightboxSources, toggleModal, modalOpen }) => {
  const [imageToShow, setImageToShow] = useState({});
  const width = useWindowWidth();
  let lightboxImage;

  // Sets the image to display and opens the ligthbox
  useEffect(() => {
    setImageToShow(image);
  }, [image]);

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });

  useEffect(() => {
    // Hides lightbox on mobile
    modalOpen && width <= 430 ? toggleModal() : null;
  }, [modalOpen, toggleModal, width]);

  // Show next image in lightbox
  const showNext = e => {
    e.stopPropagation();
    const currentIndex = lightboxSources.indexOf(imageToShow);
    if (currentIndex >= lightboxSources.length - 1) {
      const nextImage = lightboxSources[0];
      setImageToShow(nextImage);
    } else {
      const nextImage = lightboxSources[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  // Shows previous image in lightbox
  const showPrev = e => {
    e.stopPropagation();
    const currentIndex = lightboxSources.indexOf(imageToShow);
    if (currentIndex <= 0) {
      const nextImage = lightboxSources[lightboxSources.length - 1];
      setImageToShow(nextImage);
    } else {
      const nextImage = lightboxSources[currentIndex - 1];
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
      toggleModal();
    }
  };

  // Prevent scrolling when lightbox is active
  modalOpen ? disableScroll.on() : disableScroll.off();

  // If lightbox image is music video display iFrame
  if (
    imageToShow.src === '/static/img-1-2a8132b25a74466576f4bc44d9653885.jpg'
  ) {
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
    imageToShow.src === '/static/img-c0f5b640adc30e0dfb2df2643f83f260.jpg'
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
    lightboxImage = (
      <img id="lightbox-img" src={imageToShow.src} alt={imageToShow.alt} />
    );
  }

  return (
    <>
      {modalOpen ? (
        <LightboxWrapper id="lightbox" onClick={toggleModal}>
          <LightboxImageWrapper>{lightboxImage}</LightboxImageWrapper>
          <div className="imageInfo">
            <p>
              "{parse(imageToShow.title)}" - {parse(imageToShow.caption)}
            </p>
          </div>

          <button onClick={toggleModal} title="Close">
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

  .imageInfo {
    color: var(--secondary);
    text-align: center;
    p {
      display: inline;
    }
  }
`;

const LightboxImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px;
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
  // Media query for width of iPhone 12 Pro Max
  @media only screen and (max-width: 430px) {
    margin: 0px;
  }
`;
