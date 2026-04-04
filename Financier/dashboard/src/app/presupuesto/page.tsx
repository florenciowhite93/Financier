import { MetricCard } from "@/components/MetricCard";
import { Calculator, TrendingUp, TrendingDown, Target, DollarSign, PiggyBank } from "lucide-react";

export default function PresupuestoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Presupuesto Mensual</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Sistema de Ramsey Solutions - Zero-Based Budget
        </p>
      </div>

      {/* Budget Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Ingresos"
          value="$18,500"
          subtitle="Neto mensual"
          icon={<DollarSign className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Gastos"
          value="$14,000"
          subtitle="75.7% del ingreso"
          icon={<TrendingDown className="h-6 w-6" />}
          variant="default"
        />
        <MetricCard
          title="Ahorro"
          value="$4,500"
          subtitle="24.3% - Meta: 25%"
          icon={<PiggyBank className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Meta Cumplida"
          value="92%"
          subtitle="14/15 categorías"
          icon={<Target className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Income vs Expenses */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Flujo de Caja Mensual
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-emerald-600 mb-4">INGRESOS</h3>
            <div className="space-y-3">
              {[
                { item: "Salario neto (Cónyuge 1)", value: 12000 },
                { item: "Salario neto (Cónyuge 2)", value: 6500 },
                { item: "Ingreso rental", value: 0 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">{item.item}</span>
                  <span className="font-medium text-emerald-600">${item.value.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between py-3 font-semibold text-lg">
                <span>TOTAL</span>
                <span className="text-emerald-600">$18,500</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-red-600 mb-4">EGRESOS</h3>
            <div className="space-y-3">
              {[
                { item: "Hipoteca", value: 1200 },
                { item: "Propiedades (tax, insurance)", value: 850 },
                { item: "Servicios", value: 450 },
                { item: "Gastos personales", value: 800 },
                { item: "Alimentación", value: 900 },
                { item: "Transporte", value: 600 },
                { item: "Entretenimiento", value: 400 },
                { item: "Deudas", value: 2850 },
                { item: "Ahorros/Inversiones", value: 4500 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">{item.item}</span>
                  <span className="font-medium">${item.value.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between py-3 font-semibold text-lg">
                <span>TOTAL</span>
                <span className="text-slate-900 dark:text-white">$14,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Breakdown */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Desglose por Categoría
        </h2>
        <div className="space-y-4">
          {[
            { name: "Vivienda", budget: 2050, actual: 2050, color: "bg-blue-500" },
            { name: "Ahorro e Inversiones", budget: 4500, actual: 4500, color: "bg-emerald-500" },
            { name: "Deudas", budget: 2850, actual: 2850, color: "bg-red-500" },
            { name: "Alimentación", budget: 900, actual: 820, color: "bg-amber-500" },
            { name: "Transporte", budget: 600, actual: 580, color: "bg-purple-500" },
            { name: "Servicios", budget: 450, actual: 420, color: "bg-cyan-500" },
            { name: "Personales", budget: 800, actual: 750, color: "bg-pink-500" },
            { name: "Entretenimiento", budget: 400, actual: 380, color: "bg-indigo-500" },
          ].map((cat, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-slate-900 dark:text-white">{cat.name}</span>
                <span className={`${cat.actual <= cat.budget ? "text-emerald-600" : "text-red-600"} font-medium`}>
                  ${cat.actual.toLocaleString()} / ${cat.budget.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div 
                  className={`${cat.color} h-3 rounded-full transition-all`}
                  style={{ width: `${Math.min((cat.actual / cat.budget) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{Math.round((cat.actual / cat.budget) * 100)}% usado</span>
                {cat.actual < cat.budget && (
                  <span className="text-emerald-600">${(cat.budget - cat.actual).toLocaleString()} disponible</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Baby Steps Progress */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Baby Steps - Progreso
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: 1, name: "Fondo $1K", status: "completed" },
            { step: 2, name: "Fondo 3-6 meses", status: "completed" },
            { step: 3, name: "Deudas excepto casa", status: "in_progress" },
            { step: 4, name: "3-6 meses inversión", status: "pending" },
            { step: 5, name: "College 529s", status: "in_progress" },
            { step: 6, name: "Payoff casa", status: "pending" },
            { step: 7, name: "Wealth building", status: "pending" },
          ].map((bs, i) => (
            <div key={i} className={`p-4 rounded-xl border ${
              bs.status === "completed" ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800" :
              bs.status === "in_progress" ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" :
              "bg-slate-50 dark:bg-slate-800/50"
            }`}>
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  bs.status === "completed" ? "bg-emerald-500 text-white" :
                  bs.status === "in_progress" ? "bg-amber-500 text-white" :
                  "bg-slate-300 dark:bg-slate-600"
                }`}>
                  {bs.step}
                </span>
                <div>
                  <p className={`font-medium ${bs.status === "pending" ? "text-slate-400" : ""}`}>
                    {bs.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {bs.status === "completed" ? "Completado" :
                     bs.status === "in_progress" ? "En progreso" : "Pendiente"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bill Calendar */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Calendario de Pagos - Abril 2026
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { date: "1", bill: "Hipoteca", amount: 1200, status: "paid" },
            { date: "1", bill: "401(k)", amount: 1917, status: "paid" },
            { date: "5", bill: "Servicios", amount: 420, status: "paid" },
            { date: "10", bill: "Auto", amount: 450, status: "pending" },
            { date: "15", bill: "Insurance", amount: 280, status: "pending" },
            { date: "20", bill: "TV/Internet", amount: 150, status: "pending" },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border ${
              item.status === "paid" ? "bg-emerald-50 dark:bg-emerald-950/30" : ""
            }`}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold">
                  {item.date}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white">{item.bill}</p>
                  <p className="text-lg font-bold">${item.amount}</p>
                </div>
                {item.status === "paid" && (
                  <span className="badge badge-success">Pagado</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
