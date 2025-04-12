"use client";
import { User } from "@prisma/client";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type FormattedData = {
  date: string;
  newUsers: number;
};

const Graph = ({data}:{data:User[]}) => {
  const formattedUserData: FormattedData[] = (() => {
    const grouped: Record<string, number> = {};
  
    data.forEach((item) => {
      const formattedDate = new Date(item.dateOfConnection).toISOString().split("T")[0];
      grouped[formattedDate] = (grouped[formattedDate] || 0) + 1;
    });
  
    return Object.entries(grouped).map(([date, count]) => ({
      date,
      newUsers: count,
    }));
  })();
  return (
    <div className="w-full bg-[#efecec] p-4 text-black shadow-lg h-[460px]">
      <h1 className="font-semibold text-xl mb-4">User increase</h1>
      <div className="w-full h-[88%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedUserData}>
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
