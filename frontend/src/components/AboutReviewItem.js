import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import tia from "../images/tia.JPG";

const AboutReviewItem = ({ text }) => {
  return (
    <AboutReviewItemStyled>
      <Avatar alt="Tia Muridi" src={tia} />
      <p>{text}</p>
    </AboutReviewItemStyled>
  );
};

const AboutReviewItemStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 6px solid var(--white-color-2);
  background-color: var(--background-dark-color-3);
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    border-width: 0.8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-color-3) transparent transparent
      var(--background-dark-color-3);
  }
  p {
    padding: 1rem 0.2rem;
    font-size: 0.8rem;
  }
`;
export default AboutReviewItem;
