import React from "react";
import styled from "styled-components";

const TitleComponent = ({ title, img, margin, attribute }) => {
  return (
    <>
      <TitleComponentStyled style={{ marginTop: `${margin}` }}>
        <img src={img} alt="descriptive icon" />
        <h1>{title}</h1>
      </TitleComponentStyled>
    </>
  );
};

const TitleComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 70px;
  }
  h1 {
    margin-top: 1rem;
  }
`;

export default TitleComponent;
