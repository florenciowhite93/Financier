"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "US Stocks", value: 40, color: "#059669" },
  { name: "International", value: 20, color: "#10b981" },
  { name: "Bonds", value: 25, color: "#34d399" },
  { name: "Real Estate", value: 10, color: "#6ee7b7" },
  { name: "Cash", value: 5, color: "#a7f3d0" },
];

export function AllocationChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            }}
            formatter={(value) => [`${value}%`, 'Allocation']}
          />
          <Legend 
            layout="vertical" 
            align="right" 
            verticalAlign="middle"
            formatter={(value) => <span className="text-sm text-slate-600 dark:text-slate-400">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
