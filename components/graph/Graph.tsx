"use client";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { newUsers: 10, date: "2023-03-01" },
  { newUsers: 20, date: "2023-03-02" },
  { newUsers: 30, date: "2023-03-03" },
  { newUsers: 40, date: "2023-03-04" },
  { newUsers: 50, date: "2023-03-05" },
];

const Graph = () => {
  return (
    <div className="w-full bg-[#efecec] p-4 text-black shadow-lg h-[400px]">
      <h1 className="font-semibold text-xl mb-4">User increase</h1>
      <div className="w-full h-[88%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00c6ff" stopOpacity={1} />
                <stop offset="100%" stopColor="#0072ff" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="1" stroke="#232323" />
            <XAxis dataKey="date" stroke="#232323" />
            <YAxis stroke="#232323" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="newUsers"
              stroke="url(#lineGradient)" // Apply the gradient
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
