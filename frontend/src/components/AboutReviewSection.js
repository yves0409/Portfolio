import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewItem from "./AboutReviewItem";
import Title from "./titles/Title";
import { InnerLayout } from "../styles/Layout";
import ReviewForm from "../components/forms/ReviewForm";
import { getreview } from "../redux/actions/reviewActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./loaders/Loader";

const AboutReviewSection = () => {
  const dispatch = useDispatch();

  //STATE ACCESS
  const reviewList = useSelector((state) => state.reviewList);
  const { loading, reviews, success, error } = reviewList;

  useEffect(() => {
    dispatch(getreview());
  }, []);

  return (
    <AboutReviewSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        {loading ? (
          <Loader />
        ) : success ? (
          <div className="reviews">
            {reviews ? (
              reviews.map((item) => (
                <ReviewItem
                  key={item._id}
                  name={item.name}
                  reviewText={item.reviewText}
                  initial={`${item.name.split(" ")[0][0]}${
                    item.name.split(" ")[1][0]
                  }`}
                />
              ))
            ) : (
              <h3 className="noReviewText">No reviews yet</h3>
            )}
          </div>
        ) : (
          <div className="errorstatus">
            {" "}
            <h3>Could not get reviews : {error}</h3>
            <p>Please try again later</p>
          </div>
        )}

        <ReviewForm />
      </InnerLayout>
    </AboutReviewSectionStyled>
  );
};

const AboutReviewSectionStyled = styled.section`
  padding-top: 3.5rem;

  .noReviewText {
    color: var(--white-color);
  }

  .reviews {
    background-color: var(--background-dark-color-2);
    height: 400px;
    overflow-y: scroll;
    scrollbar-color: red yellow;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default AboutReviewSection;
