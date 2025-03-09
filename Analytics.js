/* Analytics.js*/
import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

const userData = [
  { month: "Jan", users: 400, flagged: 50 },
  { month: "Feb", users: 800, flagged: 120 },
  { month: "Mar", users: 1500, flagged: 200 },
  { month: "Apr", users: 1800, flagged: 250 },
  { month: "May", users: 2200, flagged: 320 },
  { month: "Jun", users: 3000, flagged: 400 },
];

export default function Analytics() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold dark:text-white mb-4">📊 Analytics Overview</h2>

      {/* ✅ User Growth Line Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold dark:text-gray-300">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ Flagged Content Bar Chart */}
      <div>
        <h3 className="text-lg font-semibold dark:text-gray-300">Flagged Content</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="flagged" fill="#ff4d4d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
