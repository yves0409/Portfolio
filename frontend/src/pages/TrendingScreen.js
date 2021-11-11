import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import MediaPlayer from "../components/MediaPlayer";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { getTrendingTopics } from "../redux/actions/trendingActions";
import { useSelector, useDispatch } from "react-redux";
import Spinners from "../components/Spinners";

const TrendingScreen = () => {
  const dispatch = useDispatch();

  const trendingList = useSelector((state) => state.trendingList);
  const { loading, trendings } = trendingList;

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
        <InnerLayout>
          {loading ? <Spinners /> : <MediaPlayer trendings={trendings} />}
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
