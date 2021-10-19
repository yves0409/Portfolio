import React from "react";
import { MainLayout } from "../styles/Layout";
import AboutImageSection from "../components/AboutImageSection";
import AboutReviewSection from "../components/AboutReviewSection";
import styled from "styled-components";
import Title from "../components/Title";

const AboutScreen = () => {
  return (
    <MainLayout>
      <Title title={"About me"} span={"About me"} />
      <AboutPageStyled>
        <AboutImageSection />
        <AboutReviewSection />
      </AboutPageStyled>
    </MainLayout>
  );
};

const AboutPageStyled = styled.div`
  /* @media screen and (min-width: 1000px) {
    animation: slideRight 1s ease-in-out forwards;

    @keyframes slideRight {
      0% {
        transform: translateX(600px) scale(0.1);
      }
      100% {
        transform: translateX(0px) scale(1);
      }
    }
  } */
`;

export default AboutScreen;
