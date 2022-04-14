import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, paragraph, url }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <Link className="cardLink" to={`${url}`}>
          <img src={image} alt="Smashicons,surang,good ware,icongeek26" />
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </Link>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-color-2);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-top: 7px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;

  &:hover {
    border-top: 7px solid var(--icon-green-color);
    transform: translateY(-3px);

    .cardLink {
      color: inherit;
      text-decoration: inherit;
    }

    img {
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: center;
      background-color: transparent;
      display: flex;
      transition: all 0.2s ease, background-color;
    }
  }

  .container {
    padding: 1.2rem;

    h4 {
      color: var(--white-color);
      font-size: 1.4rem;
      padding: 1rem 0;
      position: relative;

      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.8rem 0;
      font-size: 0.8rem;
      text-decoration: none;
    }

    img {
      width: 100px;
      height: 100px;
    }
  }
`;
export default ServiceCard;
