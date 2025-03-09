import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

export default function Analytics() {
  const data = [
    { name: "Jan", flagged: 50, banned: 10 },
    { name: "Feb", flagged: 40, banned: 8 },
    { name: "Mar", flagged: 60, banned: 15 },
    { name: "Apr", flagged: 80, banned: 20 },
    { name: "May", flagged: 90, banned: 25 },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Analytics Dashboard</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-5 bg-white dark:bg-gray-700 shadow rounded-lg">
          <h3 className="text-lg font-medium mb-3">Flagged Content Over Time</h3>
          <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey="flagged" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="p-5 bg-white dark:bg-gray-700 shadow rounded-lg">
          <h3 className="text-lg font-medium mb-3">Banned Users Over Time</h3>
          <BarChart width={500} height={300} data={data}>
            <Bar dataKey="banned" fill="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
