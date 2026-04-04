"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const portfolioData = [
  { name: "US Stocks (VTI)", value: 40, color: "#059669", amount: "$500,000" },
  { name: "International (VXUS)", value: 20, color: "#10b981", amount: "$250,000" },
  { name: "Bonds (BND)", value: 25, color: "#34d399", amount: "$312,500" },
  { name: "REITs (VNQ)", value: 10, color: "#6ee7b7", amount: "$125,000" },
  { name: "Cash", value: 5, color: "#a7f3d0", amount: "$62,500" },
];

export function PortfolioChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={portfolioData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {portfolioData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            }}
            formatter={(value, name) => {
              const item = portfolioData.find(p => p.name === name);
              return [`${value}% (${item?.amount})`, name];
            }}
          />
          <Legend 
            layout="vertical" 
            align="right" 
            verticalAlign="middle"
            formatter={(value) => {
              const item = portfolioData.find(p => p.name === value);
              return (
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {value} - {item?.amount}
                </span>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
