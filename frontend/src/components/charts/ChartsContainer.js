import React, { useState } from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";

const ChartsContainer = ({ data, barTitle, areaTitle, mobileBarChart }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChart
          data={data}
          barTitle={barTitle}
          mobileBarChart={mobileBarChart}
        />
      ) : (
        <AreaChart data={data} areaTitle={areaTitle} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--white-color);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
    color: var(--white-color);
  }
`;

export default ChartsContainer;
