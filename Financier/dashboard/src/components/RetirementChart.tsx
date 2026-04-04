"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const retirementData = [
  { age: 35, current: 180000, projected: 180000 },
  { age: 40, current: 320000, projected: 320000 },
  { age: 45, current: 520000, projected: 520000 },
  { age: 50, current: 780000, projected: 780000 },
  { age: 55, current: 1050000, projected: 1050000 },
  { age: 60, current: 1350000, projected: 1450000 },
  { age: 65, current: 1700000, projected: 1900000 },
  { age: 67, current: 1950000, projected: 2200000 },
];

export function RetirementChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={retirementData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
          <XAxis dataKey="age" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000000}M`} />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Proyección']}
            labelFormatter={(label) => `Edad: ${label} años`}
          />
          <ReferenceLine y={2200000} stroke="#059669" strokeDasharray="5 5" label={{ value: 'Meta', fill: '#059669', fontSize: 12 }} />
          <Line type="monotone" dataKey="projected" stroke="#059669" strokeWidth={3} dot={{ fill: '#059669', strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
