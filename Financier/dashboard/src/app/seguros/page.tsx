"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Shield, Heart, Car, Home, User } from "lucide-react";

export default function SegurosPage() {
  const [datos, setDatos] = useState({
    deudas: "",
    ingresoAnual: "",
    aniosDependientes: "",
    hipoteca: "",
    educacion: "",
  });

  const calcular = () => {
    const deudas = parseFloat(datos.deudas) || 0;
    const ingreso = parseFloat(datos.ingresoAnual) || 0;
    const anios = parseInt(datos.aniosDependientes) || 20;
    const hipoteca = parseFloat(datos.hipoteca) || 0;
    const educacion = parseFloat(datos.educacion) || 0;

    return {
      deuda: deudas,
      ingresoReemplazado: ingreso * anios,
      hipotecaTotal: hipoteca,
      educacionTotal: educacion,
      total: deudas + (ingreso * anios) + hipoteca + educacion,
    };
  };

  const resultado = parseFloat(datos.deudas) || parseFloat(datos.ingresoAnual) ? calcular() : null;

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Auditoría de Seguros</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Análisis de necesidades estilo Northwestern Mutual
        </p>
      </div>

      <div className="card p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="opacity-90">Método DIME - Necesidad de Seguro de Vida</p>
            <p className="text-4xl font-bold">
              {resultado ? `$${resultado.total.toLocaleString()}` : "$--"}
            </p>
            <p className="text-sm opacity-80 mt-1">D + I + M + E</p>
          </div>
          <Shield className="h-16 w-16 opacity-20" />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Datos para el Análisis</h2>
          <div className="space-y-4">
            <Input
              name="deudas"
              label="Deudas Pendientes"
              type="number"
              placeholder="500000"
              value={datos.deudas}
              onChange={(e) => setDatos({...datos, deudas: e.target.value})}
            />
            <Input
              name="ingresoAnual"
              label="Ingreso Anual"
              type="number"
              placeholder="1200000"
              value={datos.ingresoAnual}
              onChange={(e) => setDatos({...datos, ingresoAnual: e.target.value})}
            />
            <Input
              name="aniosDependientes"
              label="Años hasta que dependents sean independientes"
              type="number"
              placeholder="20"
              value={datos.aniosDependientes}
              onChange={(e) => setDatos({...datos, aniosDependientes: e.target.value})}
            />
            <Input
              name="hipoteca"
              label="Hipoteca y Otros Gastos Mayores"
              type="number"
              placeholder="2000000"
              value={datos.hipoteca}
              onChange={(e) => setDatos({...datos, hipoteca: e.target.value})}
            />
            <Input
              name="educacion"
              label="Educación de Dependientes"
              type="number"
              placeholder="500000"
              value={datos.educacion}
              onChange={(e) => setDatos({...datos, educacion: e.target.value})}
            />
          </div>
        </div>

        {resultado && (
          <div className="space-y-4">
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">D - Deudas</p>
                  <p className="text-xl font-bold">${resultado.deuda.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">I - Ingreso Reemplazado ({datos.aniosDependientes} años)</p>
                  <p className="text-xl font-bold">${resultado.ingresoReemplazado.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Home className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">M - Hipoteca y Gastos</p>
                  <p className="text-xl font-bold">${resultado.hipotecaTotal.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">E - Educación</p>
                  <p className="text-xl font-bold">${resultado.educacionTotal.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Comparación Term vs Whole Life</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200">
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-400 mb-2">Term Life (95% de personas)</h3>
            <p className="text-2xl font-bold text-emerald-600">~$30/mes</p>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-2">20-year $500K</p>
            <ul className="text-sm text-emerald-600 dark:text-emerald-400 mt-2 space-y-1">
              <li>Necesidad temporal (20-30 años)</li>
              <li>Cobertura mientras dependents</li>
              <li>Convertible a permanent</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Whole Life</h3>
            <p className="text-2xl font-bold text-slate-600 dark:text-slate-300">~$350/mes</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">$500K</p>
            <ul className="text-sm text-slate-600 dark:text-slate-400 mt-2 space-y-1">
              <li>Permanent coverage</li>
              <li>Cash value accumulation</li>
              <li>Estate planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
