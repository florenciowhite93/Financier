"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Calculator, DollarSign, Receipt, Percent } from "lucide-react";

export default function FiscalPage() {
  const [ingresoAnual, setIngresoAnual] = useState("");
  const [brackets, setBrackets] = useState<{min: number; max: number; rate: number}[]>([
    { min: 0, max: 11600, rate: 10 },
    { min: 11600, max: 47150, rate: 12 },
    { min: 47150, max: 100525, rate: 22 },
    { min: 100525, max: 191950, rate: 24 },
    { min: 191950, max: 243725, rate: 32 },
    { min: 243725, max: 609350, rate: 35 },
    { min: 609350, max: Infinity, rate: 37 },
  ]);

  const calcularImpuesto = () => {
    const ingreso = parseFloat(ingresoAnual) || 0;
    let impuestoTotal = 0;
    let ingresoRestante = ingreso;

    return brackets.map((bracket, i) => {
      if (ingresoRestante <= 0) return { ...bracket, tax: 0, effectiveRate: 0 };
      const ingresoEnBracket = Math.min(ingresoRestante, bracket.max - bracket.min);
      const tax = ingresoEnBracket * (bracket.rate / 100);
      impuestoTotal += tax;
      ingresoRestante -= ingresoEnBracket;
      return { ...bracket, tax, effectiveRate: ingreso > 0 ? (impuestoTotal / ingreso) * 100 : 0 };
    });
  };

  const resultados = parseFloat(ingresoAnual) > 0 ? calcularImpuesto() : [];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Optimización Fiscal</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategias fiscales estilo Deloitte
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculadora de Impuestos 2024
          </h2>
          <div className="space-y-4">
            <Input
              label="Ingreso Anual Gravable"
              type="number"
              placeholder="150000"
              value={ingresoAnual}
              onChange={(e) => setIngresoAnual(e.target.value)}
            />
          </div>

          {resultados.length > 0 && (
            <div className="mt-6 space-y-2">
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Impuesto Total Estimado</p>
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  ${resultados.reduce((sum, b) => sum + b.tax, 0).toLocaleString()}
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Tasa efectiva: {resultados[resultados.length - 1].effectiveRate.toFixed(2)}%
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Percent className="h-5 w-5" />
            Brackets Federales 2024
          </h2>
          <div className="space-y-2">
            {brackets.map((bracket, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  ${bracket.min.toLocaleString()} - ${bracket.max === Infinity ? "∞" : bracket.max.toLocaleString()}
                </span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">{bracket.rate}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Estrategias de Optimización</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { titulo: "Tax-Loss Harvesting", desc: "Vende posiciones perdedoras para generar pérdidas fiscales", icono: DollarSign },
            { titulo: "Backdoor Roth IRA", desc: "Contribuye a Traditional IRA y convierte a Roth", icono: Receipt },
            { titulo: "Bunching Deducciones", desc: "Concentra gastos deducibles en años alternos", icono: Percent },
            { titulo: "HSA como Stealth IRA", desc: "Guarda receipts, invierte crecimiento, reembolsa después", icono: Calculator },
            { titulo: "Donor-Advised Fund", desc: "Dona activos apreciados para deducción inmediata", icono: DollarSign },
            { titulo: "Contribución 401(k)", desc: "Maximiza contribuciones antes de impuestos", icono: Receipt },
          ].map((strategy, i) => (
            <div key={i} className="p-4 rounded-lg border bg-white dark:bg-slate-900 hover:border-emerald-300 transition-colors">
              <strategy.icono className="h-5 w-5 text-emerald-600 mb-2" />
              <h3 className="font-medium text-slate-900 dark:text-white">{strategy.titulo}</h3>
              <p className="text-sm text-slate-500 mt-1">{strategy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
