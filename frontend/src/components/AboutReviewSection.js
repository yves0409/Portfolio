import React from "react";
import styled from "styled-components";
import ReviewItem from "./AboutReviewItem";
import { InnerLayout } from "../styles/Layout";
import Title from "./Title";

const AboutReviewSection = () => {
  return (
    <AboutReviewSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Yves is fantastic to work with. I highly recommended him and will be send him more work when needed."
            }
          />
          <ReviewItem
            text={
              "Great work!, will always be my go-to hire if available. His work is exceptional and communication is always open and clear, which makes him an all around pleasure to work with. Stop looking as you have found the right person!"
            }
          />
        </div>
      </InnerLayout>
    </AboutReviewSectionStyled>
  );
};

const AboutReviewSectionStyled = styled.section`
  padding-top: 3.5rem;
  transform: translateY(100px);
  animation: slideUp 0.8s ease forwards 1s;

  @keyframes slideUp {
    0% {
      transform: translateY(500px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default AboutReviewSection;
