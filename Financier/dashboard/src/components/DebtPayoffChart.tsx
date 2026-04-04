"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const debts = [
  { name: "Hipoteca", balance: 65000, paid: 35000, total: 100000 },
  { name: "Auto", balance: 15000, paid: 8000, total: 23000 },
  { name: "Personal", balance: 5000, paid: 3000, total: 8000 },
];

const COLORS = ["#059669", "#10b981", "#34d399"];

export function DebtPayoffChart() {
  return (
    <div className="space-y-4">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={debts} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
            <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v/1000}k`} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={60} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
              }}
              formatter={(value, name) => [
                `$${Number(value).toLocaleString()}`,
                name === "balance" ? "Pendiente" : "Pagado"
              ]}
            />
            <Bar dataKey="balance" stackId="a" fill="#e2e8f0" radius={[0, 4, 4, 0]} />
            <Bar dataKey="paid" stackId="a" radius={[0, 4, 4, 0]}>
              {debts.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-emerald-500" />
          <span className="text-slate-600 dark:text-slate-400">Pagado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700" />
          <span className="text-slate-600 dark:text-slate-400">Pendiente</span>
        </div>
      </div>
    </div>
  );
}
