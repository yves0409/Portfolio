import React from "react";
import styled from "styled-components";

const ServiceBackgroundItem = ({ year, title, subtitle, text }) => {
  return (
    <ServiceBackgroundItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </ServiceBackgroundItemStyled>
  );
};

const ServiceBackgroundItemStyled = styled.div`
  display: flex;
  margin-right: 2.5rem;
  @media screen and (max-width: 500px) {
    p,
    h4,
    h5 {
      font-size: 70%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    min-width: 40%;
    padding-left: 40px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -11px;
      top: 0;
      height: 17px;
      width: 17px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
      background-color: #92ebb4;
      box-shadow: 2px 0px 15px 2px #92ebb4;
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--white-color);
    }
    h4 {
      color: var(--primary-color);
      font-size: 1.4rem;
      padding-bottom: 0.4rem;
    }
    h5 {
      padding-bottom: 0.5rem;
      font-size: 0.9rem;
      color: var(--white-color);
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
export default ServiceBackgroundItem;
