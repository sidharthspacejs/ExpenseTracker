import React from "react";
import ExpenseToolTip from "./ExpenseToolTip";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ExpenseOverview = ({ expenseTrend }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-7 h-[360px]">
      <h2 className="text-xl font-semibold mb-6">Expense Overview</h2>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart
          data={expenseTrend}
          margin={{
            top: 5,
            right: 20,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="#E5E7EB"
            strokeDasharray="4 4"
            vertical={false}
          />
          <XAxis dataKey="label" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Area
            type="monotone"
            dataKey="total"
            stroke="false"
            fillOpacity={1}
            isAnimationActive={true}
            fill="url(#expenseGradient)"
          />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#EF4444"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 8,
              fill: "#EF4444",
              stroke: "#ffffff",
              strokeWidth: 4,
            }}
          />
          <Tooltip cursor={false} content={<ExpenseToolTip />} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseOverview;
