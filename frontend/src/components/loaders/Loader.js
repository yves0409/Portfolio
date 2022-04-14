import React from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const color = "grey";

const Loader = () => {
  return (
    <TrendingScreenStyled>
      <RingLoader css={override} color={color} size={60} />
      <p>One moment please...</p>
    </TrendingScreenStyled>
  );
};

const TrendingScreenStyled = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  p {
    margin-top: 1rem;
  }
`;

export default Loader;
