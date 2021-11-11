import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewItem from "./AboutReviewItem";
import Title from "./Title";
import { InnerLayout } from "../styles/Layout";
import ReviewForm from "./ReviewForm";
import { getreview } from "../redux/actions/reviewActions";
import { useSelector, useDispatch } from "react-redux";
import Spinners from "./Spinners";

const AboutReviewSection = () => {
  const dispatch = useDispatch();

  const reviewList = useSelector((state) => state.reviewList);
  const { loading, reviews } = reviewList;

  useEffect(() => {
    dispatch(getreview());
  }, [getreview]);

  return (
    <AboutReviewSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        {loading && <Spinners />}
        <div className="reviews">
          {reviews && reviews.length > 0 ? (
            reviews
              .slice(0, 4)
              .map((item) => (
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
        <ReviewForm />
      </InnerLayout>
    </AboutReviewSectionStyled>
  );
};

const AboutReviewSectionStyled = styled.section`
  padding-top: 3.5rem;
  transform: translateY(100px);
  animation: slideUp 0.8s ease forwards 1s;

  .noReviewText {
    color: var(--white-color);
  }

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
