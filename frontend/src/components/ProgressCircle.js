import React from "react";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const ProgressCircle = ({ title, percentage, img }) => {
  return (
    <ProgressCircleStyled>
      <h6>{title}</h6>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={7}
        styles={buildStyles({
          //textColor: "#82AB92",
          pathColor: "var(--icon-green-color)",
          //trailColor: "#fcfafa",
          strokeLinecap: "round",
        })}
      >
        <img
          style={{ width: 40, marginTop: -5 }}
          src={img}
          alt="Freepik,Pixel Perfect"
        />
        <div>
          <strong>{percentage}%</strong>
        </div>
      </CircularProgressbarWithChildren>
    </ProgressCircleStyled>
  );
};

const ProgressCircleStyled = styled.section`
  margin: 1rem auto;
  text-align: center;
  width: 150px;
  height: 150px;
  :hover {
    transform: scale(1, 1);
  }
  strong {
    color: var(--icon-green-color);
    font-size: 16px;
  }
  h6 {
    padding: 0.2rem;
    color: var(--icon-green-color);
  }
`;

export default ProgressCircle;
