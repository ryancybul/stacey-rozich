import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";
import { signUpQuery } from "../queries/signUpQuery";

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState();
  const [email, setEmail] = useState("");
  const [mapleSyrup, setMapleSyrup] = useState("");
  const data = signUpQuery();

  useEffect(() => {
    setTimeout(() => setModalOpen(true), 120000);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener("keydown", keyHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", keyHandler);
      };
    }
  });

  const handleSubmit = async (e, email, mapleSyrup) => {
    e.preventDefault();
    if (mapleSyrup === "") {
      await addToMailchimp(email);
      await setModalOpen(false);
      await setEmail("");
      await setMapleSyrup("");
    } else {
      await setModalOpen(false);
      await setEmail("");
      await setMapleSyrup("");
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
      <div className="contentWrapper">
        <GatsbyImage
          image={data.TheGorgeousHussy.childImageSharp.gatsbyImageData}
          alt="The Gorgeous Hussy"
        />
        <div className="formWrapper">
          <form onSubmit={(e) => handleSubmit(e, email, mapleSyrup)}>
            <label htmlFor="email">
              Subscribe to my email list for updates on print releases and
              upcoming shows.
            </label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="mapleSyrup"
              id="mapleSyrup"
              name="mapleSyrup"
              onChange={(event) => setMapleSyrup(event.target.value)}
              className="mapleSyrup"
            />
            <div className="buttonWrapper">
              <input type="submit" value="Subscribe" className="submit" />
              <input
                type="button"
                onClick={closeModal}
                value="No thank you."
                className="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  ) : (
    ""
  );
};
export default SignUp;

const Wrapper = styled.div`
  z-index: 9;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  .contentWrapper {
    display: flex;
    flex-direction: row;
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
      width: 40px;
      height: auto;
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
  .buttonWrapper {
    display: flex;
  }
  .gatsby-image-wrapper {
    align-self: center;
    width: 100px;
    height: auto;
  }
  .hidden {
    display: none;
  }
  input {
    display: block;
    margin: 5px;
  }
  label {
    font-size: var(--mediumSmallText);
    font-weight: var(--fontWeigthBold);
  }
  p {
    font-family: "petit-formal-script";
    color: var(--black);
    padding: none;
  }
  .mapleSyrup {
    display: none;
  }
  #email {
    text-align: center;
  }
  .submit {
    align-items: center;
    border-radius: 50px;
    background-color: var(--primary);
    color: var(--black);
    cursor: pointer;
    font-size: 1em;
    font-weight: var(--fontWeightThin);
    margin: 5px;
    padding: 10px 20px;
    :hover {
      background-color: var(--black);
      color: var(--primary);
    }
  }
  /* @media screen and (max-height: 550px) {
    .contentWrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin: 20px;
    }
    form {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
    }
  } */
  @media screen and (max-width: 725px) {
    .gatsby-image-wrapper {
      display: none !important;
    }
  }
`;
