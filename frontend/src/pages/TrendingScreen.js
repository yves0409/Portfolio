import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/titles/Title";
import MediaPlayer from "../components/mediaplayer/MediaPlayer";
import { MainLayout } from "../styles/Layout";
import { getTrendingTopics } from "../redux/actions/trendingActions";
import { useSelector, useDispatch } from "react-redux";

const TrendingScreen = () => {
  const dispatch = useDispatch();

  //STATE ACCESS
  const trendingList = useSelector((state) => state.trendingList);
  const { trendings, error, success } = trendingList;

  useEffect(() => {
    dispatch(getTrendingTopics());
  }, [getTrendingTopics]);

  return (
    <MainLayout>
      <TrendingScreenStyled>
        <Title title={"What's New"} span={"What's New"} />
        <p className="trending-paragraph">
          Here you will find some of the latest best practices in modern
          Javascript and examples of how to use them.{" "}
        </p>
        <div>
          <MediaPlayer trendings={trendings} error={error} success={success} />
        </div>
      </TrendingScreenStyled>
    </MainLayout>
  );
};

const TrendingScreenStyled = styled.div`
  .mdplayer {
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
