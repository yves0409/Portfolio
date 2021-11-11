import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const AboutReviewItem = ({ name, reviewText, initial }) => {
  return (
    <AboutReviewItemStyled>
      <div className="avatarContainer">
        <Avatar>{initial}</Avatar>
        <h6>{name}</h6>
      </div>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <FormatQuoteIcon />
        <p>{reviewText}</p>
      </div>
    </AboutReviewItemStyled>
  );
};

const AboutReviewItemStyled = styled.div`
  padding: 1rem 1rem;
  /* border-left: 6px solid var(--white-color-2);
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
  }*/
  .avatarContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h6 {
    color: var(--white-color);
    margin-right: 1.4rem;
    margin-top: 0.3rem;
  }
  p {
    padding: 1rem 0.2rem;
    font-size: 0.8rem;
  }
  .reviewText {
    margin-top: 20px;
  }
`;
export default AboutReviewItem;
