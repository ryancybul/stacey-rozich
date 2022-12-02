import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import closeButton from '../images/closeButton.png';
import { signUpQuery } from '../queries/signUpQuery';

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState();
  const [email, setEmail] = useState('');
  const [mapleSyrup, setMapleSyrup] = useState('');
  const data = signUpQuery();

  modalOpen ? disableScroll.on() : disableScroll.off();

  useEffect(() => {
    const timer = setTimeout(() => setModalOpen(true), 30000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener('keydown', keyHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', keyHandler);
      };
    }
  });

  const handleSubmit = async (e, email, mapleSyrup) => {
    e.preventDefault();
    if (mapleSyrup === '') {
      await addToMailchimp(email);
      setModalOpen(false);
      setEmail('');
      setMapleSyrup('');
    } else {
      setModalOpen(false);
      setEmail('');
      setMapleSyrup('');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Keyboard nav
  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e, email, mapleSyrup);
    } else if (e.keyCode === 27) {
      closeModal();
    }
  };

  return modalOpen ? (
    <Wrapper>
      <ContentWrapper>
        <div className="closeButton">
          <button type="button" onClick={closeModal} title="Close">
            <img src={closeButton} alt="Close ligthbox" />
          </button>
        </div>
        <div className="contentWrapper">
          <GatsbyImage
            alt="The Gorgeous Hussy"
            className="gorgeousHussy"
            image={data.TheGorgeousHussy.childImageSharp.gatsbyImageData}
          />
          <div className="formWrapper">
            <form onSubmit={(e) => handleSubmit(e, email, mapleSyrup)}>
              <h2>Join my newsletter</h2>
              <label htmlFor="email">
                Be the first to know about my limited edition print sales and
                upcoming gallery shows.
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail address"
                required
              />
              <input
                type="mapleSyrup"
                id="mapleSyrup"
                name="mapleSyrup"
                onChange={(event) => setMapleSyrup(event.target.value)}
                className="mapleSyrup"
              />
              <input type="submit" value="Subscribe" className="submit" />
            </form>
          </div>
        </div>
      </ContentWrapper>
    </Wrapper>
  ) : (
    ''
  );
};
export default SignUp;

const Wrapper = styled.div`
  align-items: center;
  background-color: var(--transparentGrey);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
`;

const ContentWrapper = styled.div`
  align-items: center;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  margin: 15px;
  position: relative;
  width: 625px;
  height: 475px;
  .contentWrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 25px;
  }
  .closeButton {
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    img {
      width: 40px;
      height: auto;
      margin: 20px;
    }
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: 0;
    }
  }
  #email {
    align-self: flex-start;
    width: 100%;
    margin: 10px 0 10px 0;
  }
  .formWrapper {
    padding: 20px;
    margin: 5px;
    width: 300px;
  }
  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
  .gorgeousHussy {
    width: clamp(200px, 50%, 300px);
    min-width: 200px;
    align-self: center;
    height: auto;
  }
  .hidden {
    display: none;
  }
  h2 {
    font-size: var(--h1);
    font-weight: 1000;
    line-height: 1;
    margin: 0px;
  }
  input {
    border-radius: 0px;
    display: block;
    height: 40px;
    margin: 100px;
  }
  label {
    font-size: var(--mediumText);
    font-weight: var(--fontWeigthBold);
    line-height: 1.25;
  }
  p {
    color: var(--black);
    padding: none;
  }
  .mapleSyrup {
    display: none;
  }
  .submit {
    align-items: center;
    border-radius: 5px;
    background-color: var(--black);
    color: var(--primary);
    cursor: pointer;
    font-size: 1em;
    font-weight: var(--fontWeightThin);
    margin: 5px;
    padding: 10px 20px;
    width: 100%;
    :hover {
      background-color: var(--secondary);
      color: var(--black);
    }
  }
  @media screen and (max-width: 550px) {
    max-width: 350px;
    height: 350px;
    .contentWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      height: 100%;
    }
    .claudio {
      display: none !important;
    }
    .gorgeousHussy {
      display: none !important;
    }
    h2 {
      font-size: var(--h2);
    }
    label {
      font-size: var(--mediumSmallText);
    }
    form {
    }
  }
  @media screen and (max-height: 475px) {
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    margin: 0px;
    padding: 0px;
    max-width: 750px;
    .contentWrapper {
      height: 100%;
      width: 100%;
      padding: 50px;
      margin: 0px;
    }
    .gorgeousHussy {
      width: 200px;
    }
    h2 {
      font-size: var(--h3);
    }
    label {
      font-size: var(--smallText);
    }
  }
`;
