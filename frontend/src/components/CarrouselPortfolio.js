import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarrouselPortfolio = ({ thumbs }) => {
  return (
    <CarrouselStyled>
      <Carousel showArrows={false} className="wrapper">
        {thumbs.map((item, i) => (
          <div className="sliders" key={i}>
            <img src={item.image} alt="" />
            <p className="legend">{item.legend}</p>
          </div>
        ))}
      </Carousel>
    </CarrouselStyled>
  );
};

const CarrouselStyled = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100vw;
      padding-right: 40%;
    }
  }

  @media (max-width: 792px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100vw;
      padding-right: 20%;
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100vw;
      padding-right: 0px;
    }
  }

  .control-dots {
    position: relative;
    top: 0;
  }

  .carousel .slide .legend {
    position: relative;
    top: 0px;
    color: black;
    padding: 10px;
    font-size: 1rem;
    background-color: transparent;
    opacity: 0.9;
  }
`;

export default CarrouselPortfolio;
