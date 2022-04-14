import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const Spinners = () => {
  return (
    <SpinnerStyled>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "40px",
          height: "40px",
          margin: "auto",
          display: "block",
        }}
      ></Spinner>
      <span>One moment please...</span>
    </SpinnerStyled>
  );
};

const SpinnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-top: 1rem;
  }
`;

export default Spinners;
