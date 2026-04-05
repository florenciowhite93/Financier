"use client";

import { Route, TrendingUp, Target, Clock, DollarSign } from "lucide-react";

const hitosPatrimonio = [
  { edad: 30, multiplo: "0.5x", desc: "Primer paso significativo" },
  { edad: 35, multiplo: "1x", desc: "Patrimonio = 1 año de ingreso" },
  { edad: 40, multiplo: "1.5x", desc: "Building momentum" },
  { edad: 45, multiplo: "2x", desc: "Seguridad financiera creciente" },
  { edad: 50, multiplo: "3x", desc: "Pre-jubilación temprana posible" },
  { edad: 55, multiplo: "4x", desc: "FIRE becomes realistic" },
  { edad: 60, multiplo: "5x", desc: "Jubilación partial" },
  { edad: 67, multiplo: "8-10x", desc: "Jubilación completa" },
];

const dashboard5Numeros = [
  { numero: 1, nombre: "Patrimonio Neto", target: "Tendencia positiva ↑", icono: DollarSign },
  { numero: 2, nombre: "Savings Rate", target: ">20%", icono: TrendingUp },
  { numero: 3, nombre: "Emergency Fund", target: "6 meses cubiertos", icono: Target },
  { numero: 4, nombre: "Debt-to-Income", target: "<36%", icono: Clock },
  { numero: 5, nombre: "Investment Drift", target: "<5% rebalanceo", icono: Route },
];

export default function HojaDeRutaPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hoja de Ruta Vitalicia</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Plan financiero integral estilo BlackRock
        </p>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Dashboard de 5 Números</h2>
        <p className="text-sm text-slate-500 mb-6">Métricas esenciales para tracking mensual</p>
        <div className="grid md:grid-cols-5 gap-4">
          {dashboard5Numeros.map((item) => (
            <div key={item.numero} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 flex items-center justify-center mx-auto mb-2 font-bold">
                {item.numero}
              </div>
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.nombre}</p>
              <p className="text-xs text-emerald-600 mt-1">{item.target}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Hitos de Patrimonio Neto (Múltiplos de Ingreso)</h2>
        <p className="text-sm text-slate-500 mb-6">Benchmarks por edad según BlackRock</p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-3 px-4 font-medium text-slate-500">Edad</th>
                <th className="text-left py-3 px-4 font-medium text-slate-500">Patrimonio</th>
                <th className="text-left py-3 px-4 font-medium text-slate-500">Descripción</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {hitosPatrimonio.map((hito, i) => (
                <tr key={i} className="border-b dark:border-slate-700">
                  <td className="py-3 px-4">
                    <span className="w-12 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                      {hito.edad}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-bold text-emerald-600">{hito.multiplo}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{hito.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Financial Independence Number (FIN)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
            <h3 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Fórmula</h3>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-200">
              FIN = Annual Expenses / Safe Withdrawal Rate
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Ejemplo</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              $50,000 / 4% = <span className="font-bold text-emerald-600">$1,250,000</span>
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Safe Withdrawal Rates</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { rate: "3%", desc: "Conservative", color: "blue" },
              { rate: "4%", desc: "Traditional (30yr)", color: "emerald" },
              { rate: "4.5%", desc: "Moderate", color: "amber" },
              { rate: "5%", desc: "Aggressive (short)", color: "red" },
            ].map((item) => (
              <div key={item.rate} className={`p-3 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-950/30 border border-${item.color}-200`}>
                <p className={`text-xl font-bold text-${item.color}-600`}>{item.rate}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Ritual Financiero Semanal</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center mx-auto mb-3 font-bold">
              L
            </div>
            <h3 className="font-medium text-slate-900 dark:text-white">Lunes</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Review last week spending</p>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 flex items-center justify-center mx-auto mb-3 font-bold">
              J
            </div>
            <h3 className="font-medium text-slate-900 dark:text-white">Jueves</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Plan upcoming week</p>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 flex items-center justify-center mx-auto mb-3 font-bold">
              1°
            </div>
            <h3 className="font-medium text-slate-900 dark:text-white">1er del Mes</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Zero-based budget session</p>
          </div>
        </div>
      </div>
    </div>
  );
}
