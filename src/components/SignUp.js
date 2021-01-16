import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import closeButton from '../images/closeButton.png';
import { signUpQuery } from '../queries/signUpQuery';

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [mapleSyrup, setMapleSyrup] = useState('');
  const data = signUpQuery();

  modalOpen ? disableScroll.on() : disableScroll.off();

  useEffect(() => {
    setTimeout(() => setModalOpen(true), 15000);
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
      await setModalOpen(false);
      await setEmail('');
      await setMapleSyrup('');
    } else {
      await setModalOpen(false);
      await setEmail('');
      await setMapleSyrup('');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Keyboard nav
  const keyHandler = e => {
    if (e.keyCode === 13) {
      handleSubmit(e, email, mapleSyrup);
    } else if (e.keyCode === 27) {
      closeModal();
    }
  };

  return modalOpen ? (
    <Wrapper>
      <div className="closeButton">
        <button type="button" onClick={closeModal} title="Close">
          <img src={closeButton} alt="Close ligthbox" />
        </button>
      </div>
      <div className="contentWrapper">
        <Img
          fluid={data.TheGorgeousHussy.childImageSharp.fluid}
          alt="The Gorgeous Hussy"
        />
        <div className="formWrapper">
          <form onSubmit={e => handleSubmit(e, email, mapleSyrup)}>
            <label htmlFor="email">
              Subscribe to my email list for updates on print releases and
              upcoming shows.
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={event => setEmail(event.target.value)}
              required
            />
            <input
              type="mapleSyrup"
              id="mapleSyrup"
              name="mapleSyrup"
              onChange={event => setMapleSyrup(event.target.value)}
              className="mapleSyrup"
            />
            <input type="submit" value="Subscribe" className="submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  ) : (
    ''
  );
};
export default SignUp;

const Wrapper = styled.div`
  z-index: 15;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  .contentWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .closeButton {
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    img {
      margin: 10px;
    }
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: 0;
    }
  }
  .formWrapper {
    max-width: 650px;
    margin: 5px;
  }
  form {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
  .gatsby-image-wrapper {
    width: clamp(200px, 50%, 325px);
    align-self: center;
    height: auto;
  }
  input {
    display: block;
  }
  label {
    font-family: 'Petit Formal Script';
    font-size: var(--mediumText);
    font-weight: var(--fontWeigthBold);
  }
  p {
    font-family: 'petit-formal-script';
    color: var(--black);
    padding: none;
  }
  .mapleSyrup {
    display: none;
  }
  .submit {
    align-items: center;
    border-radius: 50px;
    background-color: var(--primary);
    color: var(--black);
    cursor: pointer;
    font-size: 1em;
    font-weight: var(--fontWeigthThin);
    margin: 15px;
    padding: 10px 20px;
    :hover {
      background-color: var(--black);
      color: var(--primary);
    }
  }
`;
