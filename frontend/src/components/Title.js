import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyled>
  );
};

const TitleStyled = styled.header`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.8rem;
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background-color: grey;
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: var(--icon-green-color);
      border-radius: 15px;
      left: 0;
    }
    span {
      font-weight: 500;
      color: var(--span-color);
      text-shadow: 5px 5px 5px var(--icon-green-color);
      opacity: 0.1;
      font-size: 4rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
      @media screen and (max-width: 850px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }
`;

export default Title;
