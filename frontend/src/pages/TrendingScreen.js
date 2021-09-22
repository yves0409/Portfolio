import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import MediaPlayer from "../components/MediaPlayer";

const TrendingScreen = () => {
  return (
    <MainLayout>
      <TrendingScreenStyled>
        <Title title={"What's New"} span={"What's New"} />
        <p className="trending-paragraph">
          Here you will find some of the latest best practices in modern
          Javascript and examples of how to use them.{" "}
        </p>
        <InnerLayout>
          <MediaPlayer />
        </InnerLayout>
      </TrendingScreenStyled>
    </MainLayout>
  );
};

const TrendingScreenStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 1300px) {
      grid-template-columns: repeat(1, 1fr);
      width: 70%;
      margin: 0 auto;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
  }
  .trending-paragraph {
    padding-top: 4rem;
    font-size: 1.4rem;
  }
`;
export default TrendingScreen;
