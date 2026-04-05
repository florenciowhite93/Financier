"use client";

import { GraduationCap, Calculator, DollarSign, Building } from "lucide-react";

const costosUniversitarios = [
  { tipo: "Público in-state", costo: "$25,000 - $30,000/año", total4: "$100,000 - $120,000" },
  { tipo: "Público out-of-state", costo: "$45,000 - $55,000/año", total4: "$180,000 - $220,000" },
  { tipo: "Privado", costo: "$70,000 - $87,500/año", total4: "$280,000 - $350,000" },
  { tipo: "Elite (Harvard, etc)", costo: "$87,500+/año", total4: "$350,000+" },
];

export default function EducacionPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Ahorro para Educación</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Planificación estilo Fidelity para educación superior
        </p>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Proyección de Costos Universitarios 2024-2034
        </h2>
        <p className="text-sm text-slate-500 mb-4">Inflación universitaria: 5-6% anual</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-2 px-4 font-medium text-slate-500">Tipo</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Costo Anual</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Total 4 Años</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {costosUniversitarios.map((item, i) => (
                <tr key={i} className="border-b dark:border-slate-700">
                  <td className="py-3 px-4 font-medium">{item.tipo}</td>
                  <td className="py-3 px-4">{item.costo}</td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">{item.total4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Building className="h-5 w-5" />
          Estrategia 529 Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Ventajas del 529</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Crecimiento tax-free
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Withdrawal tax-free para educación
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Flexibilidad de state (cualquier state)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                High contribution limits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Use para ANY accredited institution
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Estrategia</h3>
            <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 text-xs flex items-center justify-center font-medium">1</span>
                Usa portfolio age-based (automático)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 text-xs flex items-center justify-center font-medium">2</span>
                Switch a static allocation 2-3 años antes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 text-xs flex items-center justify-center font-medium">3</span>
                Considera prepaid tuition programs
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Impacto en Ayudas Financieras (FAFSA)
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
            <p className="font-medium text-slate-800 dark:text-slate-200">Parent Assets</p>
            <p className="text-2xl font-bold text-emerald-600">5.64%</p>
            <p className="text-sm text-slate-500">Factor de contribución esperado</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
            <p className="font-medium text-slate-800 dark:text-slate-200">Student Assets</p>
            <p className="text-2xl font-bold text-amber-600">20%</p>
            <p className="text-sm text-slate-500">Factor de contribución esperado</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-4">
          <strong>Tip:</strong> Las cuentas 529 de padres tienen menor impacto que cuentas de estudiantes o custodial accounts.
        </p>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">529 vs Otras Opciones</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-2 px-4 font-medium text-slate-500">Cuenta</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Ventajas</th>
                <th className="text-left py-2 px-4 font-medium text-slate-500">Desventajas</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b dark:border-slate-700">
                <td className="py-3 px-4 font-medium">529 Plan</td>
                <td className="py-3 px-4">Tax-free growth, flexible</td>
                <td className="py-3 px-4">25% penalty si no es para educación</td>
              </tr>
              <tr className="border-b dark:border-slate-700">
                <td className="py-3 px-4 font-medium">UTMA/UGMA</td>
                <td className="py-3 px-4">Sin límites de contribución</td>
                <td className="py-3 px-4">Cuenta del niño, afecta FA</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Coverdell ESA</td>
                <td className="py-3 px-4">Tax-free, K-12 allowed</td>
                <td className="py-3 px-4">$2,000/año límite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
