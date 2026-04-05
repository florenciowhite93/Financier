"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TrendingUp, Calculator, DollarSign } from "lucide-react";

export default function JubilacionPage() {
  const [formData, setFormData] = useState({
    edadActual: "",
    edadJubilacion: "67",
    gastosMensuales: "",
    ingresosMensuales: "",
  });

  const [resultado, setResultado] = useState<{
    numeroJubilacion: number;
    ahorroMensual: number;
    objetivoSocial: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calcular = () => {
    const edadActual = parseInt(formData.edadActual) || 30;
    const edadJubilacion = parseInt(formData.edadJubilacion) || 67;
    const gastosMensuales = parseFloat(formData.gastosMensuales) || 50000;
    const ingresosMensuales = parseFloat(formData.ingresosMensuales) || 80000;

    const reemplazo = gastosMensuales / ingresosMensuales;
    const tasaReemplazo = Math.min(0.9, Math.max(0.65, reemplazo));
    
    const gastosJubilacion = gastosMensuales * tasaReemplazo;
    const numeroJubilacion = gastosJubilacion * 12 * 25;
    
    const anios = edadJubilacion - edadActual;
    const tasaAnual = 0.07;
    const tasaMensual = tasaAnual / 12;
    const meses = anios * 12;
    
    const ahorroMensual = numeroJubilacion * tasaMensual / (Math.pow(1 + tasaMensual, meses) - 1);
    const objetivoSocial = 15000 * 12;

    setResultado({ numeroJubilacion, ahorroMensual, objetivoSocial });
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Planificación de Jubilación</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Calcula tu número de jubilación con metodología Vanguard
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Datos para Jubilación
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="edadActual"
                label="Edad Actual"
                type="number"
                placeholder="35"
                value={formData.edadActual}
                onChange={handleChange}
              />
              <Input
                name="edadJubilacion"
                label="Edad de Jubilación"
                type="number"
                placeholder="67"
                value={formData.edadJubilacion}
                onChange={handleChange}
              />
            </div>
            <Input
              name="gastosMensuales"
              label="Gastos Mensuales Esperados"
              type="number"
              placeholder="50000"
              value={formData.gastosMensuales}
              onChange={handleChange}
            />
            <Input
              name="ingresosMensuales"
              label="Ingresos Mensuales Actuales"
              type="number"
              placeholder="80000"
              value={formData.ingresosMensuales}
              onChange={handleChange}
            />
            <Button onClick={calcular} className="w-full">
              Calcular Número de Jubilación
            </Button>
          </div>
        </div>

        {resultado && (
          <div className="space-y-6">
            <div className="card p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
              <h3 className="text-lg font-medium opacity-90 mb-2">Tu Número de Jubilación</h3>
              <p className="text-4xl font-bold">${resultado.numeroJubilacion.toLocaleString()}</p>
              <p className="text-sm opacity-80 mt-2">Patrimonio necesario para jubilarte</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4">
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">Ahorro Mensual Necesario</span>
                </div>
                <p className="text-xl font-bold text-emerald-600">
                  ${Math.round(resultado.ahorroMensual).toLocaleString()}
                </p>
              </div>
              <div className="card p-4">
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Meta Social Security</span>
                </div>
                <p className="text-xl font-bold text-slate-600 dark:text-slate-300">
                  ${Math.round(resultado.objetivoSocial).toLocaleString()}
                </p>
                <p className="text-xs text-slate-500">anuales estimados</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Estrategia de Cuentas</h2>
        <div className="space-y-3">
          {[
            { orden: 1, cuenta: "401(k) hasta match del empleador", desc: "Free money - maximiza primero" },
            { orden: 2, cuenta: "HSA (si tienes seguro HDHP)", desc: "Triple tax advantage" },
            { orden: 3, cuenta: "401(k) máximo personal", desc: "$23,000 en 2024" },
            { orden: 4, cuenta: "IRA Roth o Traditional", desc: "Según tu bracket fiscal" },
            { orden: 5, cuenta: "Cuenta imponible", desc: "Después de maximizar contribuciones" },
          ].map((item) => (
            <div key={item.orden} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                {item.orden}
              </span>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{item.cuenta}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
