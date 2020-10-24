import React from 'react';
import styled from 'styled-components';

const Smiley = () => (
  <Shiny>
    <span>¯\_(ツ)_/¯</span>
  </Shiny>
);

export default Smiley;

const Shiny = styled.h2`
  background-color: black;
  background-position: right center;
  background-size: 400% auto;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  transition: color 200ms linear;

  &:hover {
    background-image: linear-gradient(
      90deg,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red
    );
    background-position: left center;
    color: #ef9671;
    transition: background-position 2000ms ease-out;
    background-image: linear-gradient(
      90deg,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red
    );
    background-position: left center;
    color: #ef9671;
    transition: background-position 2000ms ease-out;
  }

  @media only screen and (max-width: 480px) {
    .shiny {
      font-size: 75px;
    }
  }
`;
