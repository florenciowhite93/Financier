"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Ene", patrimonio: 980000 },
  { month: "Feb", patrimonio: 1020000 },
  { month: "Mar", patrimonio: 1050000 },
  { month: "Abr", patrimonio: 1080000 },
  { month: "May", patrimonio: 1120000 },
  { month: "Jun", patrimonio: 1150000 },
  { month: "Jul", patrimonio: 1180000 },
  { month: "Ago", patrimonio: 1160000 },
  { month: "Sep", patrimonio: 1200000 },
  { month: "Oct", patrimonio: 1220000 },
  { month: "Nov", patrimonio: 1240000 },
  { month: "Dic", patrimonio: 1250000 },
];

export function DashboardChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPatrimonio" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#059669" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            className="text-slate-500"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000000}M`}
            className="text-slate-500"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: 'var(--foreground)' }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Patrimonio']}
          />
          <Area 
            type="monotone" 
            dataKey="patrimonio" 
            stroke="#059669" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorPatrimonio)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
