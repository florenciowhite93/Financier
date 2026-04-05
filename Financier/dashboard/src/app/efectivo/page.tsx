"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Building2, PiggyBank, Wallet, TrendingUp } from "lucide-react";

export default function EfectivoPage() {
  const [gastosMensuales, setGastosMensuales] = useState(50000);
  const [mesesObjetivo, setMesesObjetivo] = useState(6);

  const fondoEmergencia = gastosMensuales * mesesObjetivo;

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Fondo de Emergencia y Efectivo</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Sistema de capas de efectivo estilo Charles Schwab
        </p>
      </div>

      <div className="card p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="opacity-90">Tu Fondo de Emergencia Objetivo</p>
            <p className="text-4xl font-bold">${fondoEmergencia.toLocaleString()}</p>
            <p className="text-sm opacity-80 mt-1">{mesesObjetivo} meses de gastos</p>
          </div>
          <PiggyBank className="h-16 w-16 opacity-20" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Configuración</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Gastos Mensuales
              </label>
              <Input
                type="number"
                value={gastosMensuales}
                onChange={(e) => setGastosMensuales(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Meses Objetivo
              </label>
              <select
                value={mesesObjetivo}
                onChange={(e) => setMesesObjetivo(parseInt(e.target.value))}
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              >
                <option value={3}>3 meses (Empleado estable)</option>
                <option value={6}>6 meses (Recomendado)</option>
                <option value={9}>9 meses</option>
                <option value={12}>12 meses (Freelancer/Variable)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Factores de Ajuste</h2>
          <div className="space-y-3">
            {[
              { factor: "Estabilidad laboral", ajuste: "+3 meses si variable" },
              { factor: "Dependientes", ajuste: "+3 meses" },
              { factor: "Single income", ajuste: "+6 meses" },
              { factor: "Alto costo de vida", ajuste: "+3 meses" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                <span className="text-slate-700 dark:text-slate-300">{item.factor}</span>
                <span className="text-amber-600 font-medium text-sm">{item.ajuste}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Sistema de Capas de Efectivo</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-3">
              <Wallet className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800 dark:text-blue-400">Capa 1 - Inmediata</h3>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">1 mes de gastos</p>
            <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
              <li>High-yield savings (~5% APY)</li>
              <li>Liquidez total</li>
              <li>Acceso inmediato</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-emerald-600" />
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-400">Capa 2 - 30 días</h3>
            </div>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">1-3 meses de gastos</p>
            <ul className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
              <li>CD de 3 meses</li>
              <li>Penalty bajo por early withdrawal</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-purple-800 dark:text-purple-400">Capa 3 - 90 días</h3>
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">3-6 meses de gastos</p>
            <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
              <li>CD de 6-12 meses</li>
              <li>Treasury Bills</li>
              <li>Mejor yield por liquidity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Sinking Funds (Fondos para Gastos Predecibles)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { nombre: "Auto repair", cantidad: 150 },
            { nombre: "Medical/dental", cantidad: 75 },
            { nombre: "Holidays/gifts", cantidad: 125 },
            { nombre: "Vacation", cantidad: 250 },
            { nombre: "Home repair", cantidad: 150 },
            { nombre: "Subscriptions", cantidad: 75 },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.nombre}</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">${item.cantidad}/mes</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
