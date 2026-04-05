"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Calculator, TrendingUp, TrendingDown, Wallet } from "lucide-react";

export default function DiagnosticoPage() {
  const [formData, setFormData] = useState({
    edad: "",
    ingresos: "",
    gastos: "",
    activos: "",
    pasivos: "",
  });

  const [resultado, setResultado] = useState<{
    patrimonioNeto: number;
    tasaAhorro: number;
    score: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calcular = () => {
    const ingresos = parseFloat(formData.ingresos) || 0;
    const gastos = parseFloat(formData.gastos) || 0;
    const activos = parseFloat(formData.activos) || 0;
    const pasivos = parseFloat(formData.pasivos) || 0;

    const patrimonioNeto = activos - pasivos;
    const tasaAhorro = ingresos > 0 ? ((ingresos - gastos) / ingresos) * 100 : 0;
    
    let score = 50;
    if (patrimonioNeto > 0) score += 10;
    if (tasaAhorro >= 20) score += 20;
    if (tasaAhorro >= 30) score += 10;
    if (patrimonioNeto > 100000) score += 10;
    score = Math.min(100, score);

    setResultado({ patrimonioNeto, tasaAhorro, score });
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Diagnóstico Financiero</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Análisis integral de tu situación financiera
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Datos Financieros
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="edad"
                label="Edad"
                type="number"
                placeholder="35"
                value={formData.edad}
                onChange={handleChange}
              />
              <Input
                name="ingresos"
                label="Ingresos Mensuales"
                type="number"
                placeholder="50000"
                value={formData.ingresos}
                onChange={handleChange}
              />
            </div>
            <Input
              name="gastos"
              label="Gastos Mensuales"
              type="number"
              placeholder="35000"
              value={formData.gastos}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="activos"
                label="Activos Totales"
                type="number"
                placeholder="1500000"
                value={formData.activos}
                onChange={handleChange}
              />
              <Input
                name="pasivos"
                label="Pasivos Totales"
                type="number"
                placeholder="500000"
                value={formData.pasivos}
                onChange={handleChange}
              />
            </div>
            <Button onClick={calcular} className="w-full">
              Calcular Diagnóstico
            </Button>
          </div>
        </div>

        {resultado && (
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Score de Salud Financiera</h3>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" className="text-slate-200 dark:text-slate-700" />
                    <circle
                      cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${resultado.score * 2.64} 264`}
                      className="text-emerald-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{resultado.score}</span>
                  </div>
                </div>
                <div>
                  <p className={`text-2xl font-bold ${resultado.score >= 70 ? "text-emerald-600" : resultado.score >= 40 ? "text-amber-600" : "text-red-600"}`}>
                    {resultado.score >= 70 ? "Excelente" : resultado.score >= 40 ? "Regular" : "Necesita Mejorar"}
                  </p>
                  <p className="text-sm text-slate-500">Basado en Goldman Sachs methodology</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4">
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  {resultado.patrimonioNeto >= 0 ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : <TrendingDown className="h-4 w-4 text-red-500" />}
                  <span className="text-sm">Patrimonio Neto</span>
                </div>
                <p className={`text-xl font-bold ${resultado.patrimonioNeto >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                  ${Math.abs(resultado.patrimonioNeto).toLocaleString()}
                </p>
              </div>
              <div className="card p-4">
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <Wallet className="h-4 w-4" />
                  <span className="text-sm">Tasa de Ahorro</span>
                </div>
                <p className={`text-xl font-bold ${resultado.tasaAhorro >= 20 ? "text-emerald-600" : "text-amber-600"}`}>
                  {resultado.tasaAhorro.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Benchmarks por Edad</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-2 px-4 font-medium text-slate-500">Edad</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Tasa de Ahorro Recomendada</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Múltiplo de Ingreso</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b dark:border-slate-700"><td className="py-2 px-4">20-30</td><td className="py-2 px-4">10-20%</td><td className="py-2 px-4">0.5x a 1x</td></tr>
              <tr className="border-b dark:border-slate-700"><td className="py-2 px-4">30-40</td><td className="py-2 px-4">20-30%</td><td className="py-2 px-4">1x a 2x</td></tr>
              <tr className="border-b dark:border-slate-700"><td className="py-2 px-4">40-50</td><td className="py-2 px-4">30-40%</td><td className="py-2 px-4">2x a 4x</td></tr>
              <tr><td className="py-2 px-4">50+</td><td className="py-2 px-4">40-50%</td><td className="py-2 px-4">4x a 8x+</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
