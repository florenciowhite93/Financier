"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp, Shield, Building2 } from "lucide-react";

const asignacionData = [
  { name: "US Stocks", value: 40, color: "#10b981" },
  { name: "International", value: 20, color: "#3b82f6" },
  { name: "Bonds", value: 30, color: "#8b5cf6" },
  { name: "REITs", value: 5, color: "#f59e0b" },
  { name: "Cash", value: 5, color: "#6b7280" },
];

const etfsCore = [
  { nombre: "VTI", descripcion: "US Total Market", costo: "0.03%" },
  { nombre: "VOO", descripcion: "US S&P 500", costo: "0.03%" },
  { nombre: "VEA", descripcion: "International Developed", costo: "0.05%" },
  { nombre: "VWO", descripcion: "Emerging Markets", costo: "0.10%" },
  { nombre: "BND", descripcion: "US Bonds", costo: "0.03%" },
  { nombre: "VXUS", descripcion: "Total International", costo: "0.07%" },
];

export default function InversionesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Portafolio de Inversiones</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Arquitectura de portafolio estilo Morgan Stanley
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Asignación de Activos</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={asignacionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {asignacionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {asignacionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-slate-600 dark:text-slate-400">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">ETFs Core Recomendados</h2>
          <div className="space-y-3">
            {etfsCore.map((etf) => (
              <div key={etf.nombre} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{etf.nombre}</p>
                  <p className="text-sm text-slate-500">{etf.descripcion}</p>
                </div>
                <span className="text-emerald-600 font-medium text-sm">{etf.costo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Estructura Core-Satellite</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-400">Core (70-80%)</h3>
            </div>
            <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-1">
              <li>Index funds de bajo costo</li>
              <li>Diversificación máxima</li>
              <li>Rebalanceo anual</li>
              <li>VTI, BND, VXUS</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800 dark:text-blue-400">Satellite (20-30%)</h3>
            </div>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>Growth stocks</li>
              <li>Sector exposure</li>
              <li>Alternative investments</li>
              <li>REITs, small caps</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Perfiles de Riesgo</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-2 px-4 font-medium text-slate-500">Perfil</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Horizonte</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">US Stocks</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Intl</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Bonds</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b dark:border-slate-700"><td className="py-2 px-4">Conservador</td><td className="py-2 px-4">1-3 años</td><td className="py-2 px-4">20%</td><td className="py-2 px-4">10%</td><td className="py-2 px-4">50%</td></tr>
              <tr className="border-b dark:border-slate-700"><td className="py-2 px-4">Moderado</td><td className="py-2 px-4">5-10 años</td><td className="py-2 px-4">40%</td><td className="py-2 px-4">20%</td><td className="py-2 px-4">30%</td></tr>
              <tr><td className="py-2 px-4">Agresivo</td><td className="py-2 px-4">10+ años</td><td className="py-2 px-4">50%</td><td className="py-2 px-4">25%</td><td className="py-2 px-4">15%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
