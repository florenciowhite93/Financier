import { MetricCard } from "@/components/MetricCard";
import { CreditCard, TrendingDown, Calendar, Target, DollarSign, CheckCircle } from "lucide-react";

export default function DeudasPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Eliminación de Deuda</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategia de JPMorgan Private Bank
        </p>
      </div>

      {/* Debt Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Deuda Total"
          value="$88,000"
          trend={{ value: -8, label: "vs mes anterior" }}
          icon={<CreditCard className="h-6 w-6" />}
          variant="warning"
        />
        <MetricCard
          title="Pago Mensual"
          value="$2,850"
          subtitle="Total obligaciones"
          icon={<DollarSign className="h-6 w-6" />}
          variant="default"
        />
        <MetricCard
          title="Interés Total/Mes"
          value="$480"
          subtitle="Costo de financiamiento"
          icon={<TrendingDown className="h-6 w-6" />}
          variant="danger"
        />
        <MetricCard
          title="Fecha Libre Deuda"
          value="2031"
          subtitle="27 meses restantes"
          icon={<Calendar className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Debt Inventory */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Inventario Completo de Deudas
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Deuda</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Balance</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Tasa</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Pago Mín.</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Fecha Payoff</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Método</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Hipoteca", balance: 65000, rate: 6.5, rateDisplay: "6.5%", min: 1200, payoff: "2033", method: "Avalancha" },
                { name: "Préstamo Auto", balance: 15000, rate: 4.9, rateDisplay: "4.9%", min: 450, payoff: "2027", method: "Avalancha" },
                { name: "Tarjeta Costco", balance: 3500, rate: 19.99, rateDisplay: "19.99%", min: 100, payoff: "2026", method: "Prioridad" },
                { name: "Tarjeta Chase", balance: 1500, rate: 24.99, rateDisplay: "24.99%", min: 50, payoff: "2026", method: "Prioridad" },
                { name: "Préstamo Personal", balance: 3000, rate: 8.5, rateDisplay: "8.5%", min: 150, payoff: "2027", method: "Avalancha" },
              ].map((debt, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{debt.name}</td>
                  <td className="py-3 px-4 text-right font-medium">${debt.balance.toLocaleString()}</td>
                  <td className={`py-3 px-4 text-right ${debt.rate > 15 ? "text-red-600" : "text-slate-600"}`}>{debt.rateDisplay}</td>
                  <td className="py-3 px-4 text-right text-slate-600 dark:text-slate-400">${debt.min}</td>
                  <td className="py-3 px-4 text-right text-emerald-600 font-medium">{debt.payoff}</td>
                  <td className="py-3 px-4 text-right">
                    <span className={`badge ${debt.rate > 15 ? "badge-danger" : "badge-success"}`}>
                      {debt.method}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategy Comparison */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
              <TrendingDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Método Avalancha</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">Recomendado para ti</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Pagar deudas de mayor tasa primero minimiza el interés total.</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Interés total a pagar</span>
                <span className="font-semibold text-emerald-600">$18,420</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fecha libre de deuda</span>
                <span className="font-semibold">Dic 2031</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pago extra mensual</span>
                <span className="font-semibold">$500</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Método Bola de Nieve</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <p className="text-sm text-slate-600 dark:text-slate-400">Mejor para motivación psicológica. Rápidas victorias.</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Interés total a pagar</span>
                <span className="font-semibold">$19,850</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fecha libre de deuda</span>
                <span className="font-semibold">Mar 2032</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Diferencia vs Avalancha</span>
                <span className="text-red-600">+$1,430</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Payment Impact */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Impacto de Pagos Extra
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { extra: "$0", interest: "$24,500", months: 96, savings: "$0" },
            { extra: "$100", interest: "$21,200", months: 84, savings: "$3,300" },
            { extra: "$250", interest: "$18,420", months: 72, savings: "$6,080" },
            { extra: "$500", interest: "$15,100", months: 60, savings: "$9,400" },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border ${
              i === 2 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : ""
            }`}>
              <p className="text-sm text-slate-500">Pago extra mensual</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{item.extra}</p>
              <div className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Interés total</span>
                  <span>{item.interest}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Meses</span>
                  <span>{item.months}</span>
                </div>
                {item.savings !== "$0" && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Ahorro</span>
                    <span>{item.savings}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Celebración de Hitos
        </h2>
        <div className="space-y-4">
          {[
            { milestone: "Tarjeta Chase $1,500", status: "completed", date: "Mar 2025" },
            { milestone: "Tarjeta Costco $3,500", status: "current", date: "Jun 2026" },
            { milestone: "Préstamo Personal $3,000", status: "pending", date: "Oct 2026" },
            { milestone: "Préstamo Auto $15,000", status: "pending", date: "Feb 2027" },
            { milestone: "Hipoteca $65,000", status: "pending", date: "Dic 2031" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              {item.status === "completed" ? (
                <CheckCircle className="h-6 w-6 text-emerald-500" />
              ) : item.status === "current" ? (
                <div className="w-6 h-6 rounded-full border-2 border-amber-500 bg-amber-100 dark:bg-amber-900/30" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600" />
              )}
              <div className="flex-1">
                <p className={`font-medium ${item.status === "completed" ? "text-slate-500 line-through" : "text-slate-900 dark:text-white"}`}>
                  {item.milestone}
                </p>
              </div>
              <span className="text-sm text-slate-500">{item.date}</span>
              {item.status === "current" && (
                <span className="badge badge-warning">En progreso</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
