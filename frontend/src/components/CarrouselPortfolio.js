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
  width: 100%;

  .sliders {
    width: 100%;
    height: auto;
  }

  .sliders img {
    width: 100%;
    height: auto;
  }

  .control-dots {
    position: relative;
    top: 92%;
  }

  .carousel .slide .legend {
    position: relative;
    top: 0px;
    color: black;
    padding: 2px;
    font-size: 1rem;
    background-color: transparent;
    opacity: 0.9;
  }
`;

export default CarrouselPortfolio;
