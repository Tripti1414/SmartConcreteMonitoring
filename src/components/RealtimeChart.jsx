// src/components/RealtimeChart.jsx
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function RealtimeChart({ type, value }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Add new value every 2 seconds
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [
          ...prevData,
          { name: new Date().toLocaleTimeString(), value },
        ];
        // Keep only last 10 points
        if (newData.length > 10) newData.shift();
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="realtime-chart">
      <h4 >{type} Chart</h4>
      <LineChart width={500} height={250} data={data}>
        <CartesianGrid stroke="#698ece" strokeDasharray="5 5" />
        <XAxis dataKey="name" stroke="#555" />
        <YAxis stroke="#555" />

        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#173261" // bright color
          strokeWidth={2} // thicker line
          dot={{ r: 3, fill: "#173261" }} // custom dots
          activeDot={{ r: 6 }}
          fill="url(#colorValue)"
        />
      </LineChart>
    </div>
  );
}

export default RealtimeChart;
