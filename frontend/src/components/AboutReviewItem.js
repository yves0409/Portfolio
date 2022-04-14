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
      <div className="reviewText">
        <FormatQuoteIcon />
        <p>{reviewText}</p>
      </div>
    </AboutReviewItemStyled>
  );
};

const AboutReviewItemStyled = styled.div`
  padding: 1rem 1rem;
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
    display: flex;
    margin-top: 1rem;
    color: var(--font-light-color);
  }
`;
export default AboutReviewItem;
