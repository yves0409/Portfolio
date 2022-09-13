import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function getIntroOfPage(label) {
  if (label === 2016) {
    return "At this point there are 4 billion users";
  }
  if (label === 2017) {
    return "increase by 10% from 2016";
  }
  if (label === 2018) {
    return "increase by 13.64% from 2017";
  }
  if (label === 2019) {
    return "increase by 12% from 2018";
  }
  if (label === 2020) {
    return "increase by 7.14% from 2019";
  }
  if (label === 2021) {
    return "increase by 5% from 2020";
  }
  if (label === 2022) {
    return "2022 has 6.6 billion smartphone users, 4.76% more than the previous year";
  }
}

function MobileBarTooltip({ payload, label, active }) {
  if (active) {
    return (
      <TooltipStyled>
        <p className="label">{`${label} : ${payload[0].value} billion users`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </TooltipStyled>
    );
  }

  return null;
}

function WebBarTooltip({ payload, label, active }) {
  if (active) {
    return (
      <TooltipStyled>
        <p className="label">{`${label} : ${payload[0].value} %`}</p>
      </TooltipStyled>
    );
  }

  return null;
}

const BarChartComponent = ({ data, barTitle, mobileBarChart }) => {
  console.log("data==>", data);
  return (
    <>
      <h4 style={{ marginTop: "30px" }}>{barTitle}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <XAxis dataKey="key" color="red" />
          <YAxis allowDecimals={true} />
          {mobileBarChart ? (
            <Tooltip content={<MobileBarTooltip />} />
          ) : (
            <Tooltip content={<WebBarTooltip />} />
          )}

          <Legend />
          <Bar dataKey="value" fill="#2cb1bc" nameKey="key"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

const TooltipStyled = styled.header`
  .label {
    font-size: 14px;
  }
  color: #000000;
  background-color: #8ff4ec;
  padding: 10px;
  border-radius: 7px;
`;

export default BarChartComponent;
