import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data, areaTitle }) => {
  return (
    <>
      <h4 style={{ marginTop: "30px" }}>{areaTitle}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 50 }}>
          <XAxis dataKey="areaKey" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          {/* <Area
          type="monotone"
          dataKey="billion_users"
          stroke="#cb26e9"
          fill="#64185d"
          stackId="1"
        /> */}
          <Area
            type="monotone"
            dataKey="areaValue"
            stroke="#7187e9"
            fill="#2b89f4"
            stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartComponent;
