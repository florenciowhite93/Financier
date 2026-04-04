import { MetricCard } from "@/components/MetricCard";
import { RetirementChart } from "@/components/RetirementChart";
import { TrendingUp, Target, Calendar, PiggyBank, DollarSign, Clock } from "lucide-react";

export default function JubilacionPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Planificación de Jubilación</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Análisis basado en metodologías de Vanguard
        </p>
      </div>

      {/* Key Retirement Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Número de Jubilación"
          value="$2,200,000"
          subtitle="Basado en gastos actuales"
          icon={<Target className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Patrimonio Actual"
          value="$1,250,000"
          subtitle="57% del objetivo"
          icon={<TrendingUp className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Ahorro Mensual"
          value="$3,500"
          subtitle="Hacia jubilación"
          icon={<PiggyBank className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Edad Objetivo"
          value="67 años"
          subtitle="Retiro planeado"
          icon={<Calendar className="h-6 w-6" />}
          variant="default"
        />
      </div>

      {/* Retirement Projection Chart */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Proyección Patrimonial
          </h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-emerald-500 rounded" />
              <span className="text-slate-500">Proyección</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 border-t-2 border-dashed border-emerald-500" />
              <span className="text-slate-500">Meta</span>
            </div>
          </div>
        </div>
        <RetirementChart />
        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl">
          <p className="text-center text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-emerald-600">En camino.</span> Con el ritmo actual de ahorro, alcanzarás tu meta de jubilación 3 años antes de lo planeado.
          </p>
        </div>
      </div>

      {/* Account Strategy */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Estrategia de Cuentas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "401(k)", balance: "$485,000", contribution: "$23,000/año", match: "100% del employer", limit: "$23,000" },
            { name: "IRA Roth", balance: "$85,000", contribution: "$7,000/año", match: "N/A", limit: "$7,000" },
            { name: "HSA", balance: "$28,000", contribution: "$4,150/año", match: "Triple tax adv.", limit: "$4,150" },
            { name: "Taxable", balance: "$280,000", contribution: "Variable", match: "N/A", limit: "Ilimitado" },
          ].map((account, i) => (
            <div key={i} className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{account.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Balance</span>
                  <span className="font-medium text-emerald-600">{account.balance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contribución</span>
                  <span>{account.contribution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Beneficio</span>
                  <span className="text-emerald-600">{account.match}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Límite 2024</span>
                  <span>{account.limit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Security & Withdrawal */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Social Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Edad de reclamación</span>
              <span className="font-semibold">70 años</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Beneficio mensual</span>
              <span className="font-semibold text-emerald-600">$3,200/mes</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Beneficio anual</span>
              <span className="font-semibold text-emerald-600">$38,400/año</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Lifetime value (hasta 90)</span>
              <span className="font-semibold">$768,000</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Esperar hasta los 70 años maximiza tu beneficio de Social Security (+24% sobre FRA).
          </p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Estrategia de Retiro</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
              <h4 className="font-medium text-emerald-700 dark:text-emerald-400 mb-2">Safe Withdrawal Rate</h4>
              <p className="text-2xl font-bold text-emerald-600">4%</p>
              <p className="text-sm text-slate-500 mt-1">$88,000/año de $2.2M</p>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Inflación ajustada</span>
              <span className="badge badge-success">Activo</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Bucket strategy</span>
              <span className="badge badge-success">Implementado</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Proyección 30 años</span>
              <span className="text-emerald-600 font-medium">Positivo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Hitos de Ahorro por Edad
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { age: 30, target: "$50,000", status: "achieved" },
            { age: 35, target: "$150,000", status: "achieved" },
            { age: 40, target: "$320,000", status: "achieved" },
            { age: 45, target: "$520,000", status: "current" },
            { age: 50, target: "$780,000", status: "pending" },
            { age: 55, target: "$1,100,000", status: "pending" },
            { age: 60, target: "$1,500,000", status: "pending" },
            { age: 65, target: "$2,000,000", status: "pending" },
          ].map((milestone, i) => (
            <div key={i} className={`p-4 rounded-xl text-center ${
              milestone.status === "achieved" ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800" :
              milestone.status === "current" ? "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800" :
              "bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            }`}>
              <p className="text-sm text-slate-500 mb-1">Edad {milestone.age}</p>
              <p className={`font-semibold ${
                milestone.status === "achieved" ? "text-emerald-600" :
                milestone.status === "current" ? "text-amber-600" :
                "text-slate-400"
              }`}>
                {milestone.target}
              </p>
              {milestone.status === "achieved" && (
                <p className="text-xs text-emerald-600 mt-1">✓ Logrado</p>
              )}
              {milestone.status === "current" && (
                <p className="text-xs text-amber-600 mt-1">● Actual</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
