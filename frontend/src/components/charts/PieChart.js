import React from "react";
import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const colors = ["#DB4437", "#4267B2", "#c4302b", "#0e76a8", "#833AB4"];

const radian = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieTooltip({ payload, active }) {
  if (active) {
    return (
      <TooltipStyled>
        <p className="label">{`${payload[0].name}`}</p>
      </TooltipStyled>
    );
  }

  return null;
}

const PieChartComponent = ({ data }) => {
  return (
    <Wrapper>
      <h4>MOST EFFECTIVE SOCIAL MEDIA CHANNEL FOR SMALL BUSINESSES</h4>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Tooltip content={<PieTooltip />} />
          <Legend />
          <Pie
            data={data}
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            dataKey="areaValue"
            nameKey="areaKey"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .recharts-legend-item {
    margin: 10px;
  }

  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
    margin-top: 30px;
    color: var(--white-color);
  }
`;

const TooltipStyled = styled.header`
  font-size: 18px;
  color: white;
  padding: 10px;
  border-radius: 7px;
`;

export default PieChartComponent;
