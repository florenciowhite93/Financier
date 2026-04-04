import { MetricCard } from "@/components/MetricCard";
import { Building2, PiggyBank, Target, Calendar, TrendingUp, Shield } from "lucide-react";

export default function EfectivoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gestión de Efectivo</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Sistema de Charles Schwab
        </p>
      </div>

      {/* Cash Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Efectivo Total"
          value="$85,000"
          subtitle="+2.5% APY promedio"
          icon={<PiggyBank className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Fondo Emergencia"
          value="$45,000"
          subtitle="6 meses cubiertos"
          icon={<Shield className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Sinking Funds"
          value="$15,000"
          subtitle="6 categorías"
          icon={<Calendar className="h-6 w-6" />}
          variant="default"
        />
        <MetricCard
          title="Oportunidad"
          value="$25,000"
          subtitle="Para invertir"
          icon={<TrendingUp className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Cash Tiers */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Sistema de Capas de Efectivo
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              tier: "Capa 1 - Inmediata", 
              amount: "$15,000", 
              apy: "5.0%",
              purpose: "Gastos diarios y emergencias inmediatas",
              account: "High-Yield Savings",
              access: "Instantáneo"
            },
            { 
              tier: "Capa 2 - 30 días", 
              amount: "$15,000", 
              apy: "5.2%",
              purpose: "Emergencias mayores, deductibles",
              account: "CD 3-6 meses",
              access: "30 días penalty"
            },
            { 
              tier: "Capa 3 - 90 días", 
              amount: "$15,000", 
              apy: "5.4%",
              purpose: "Transiciones laborales, gastos planeados",
              account: "CD 6-12 meses",
              access: "90 días penalty"
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{item.tier}</h3>
              <p className="text-2xl font-bold text-emerald-600">{item.amount}</p>
              <p className="text-sm text-emerald-600">{item.apy} APY</p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2 text-sm">
                <p className="text-slate-600 dark:text-slate-400">{item.purpose}</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cuenta</span>
                  <span>{item.account}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Acceso</span>
                  <span className="text-amber-600">{item.access}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sinking Funds */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Sinking Funds (Fondos Reservados)
        </h2>
        <div className="space-y-4">
          {[
            { name: "Auto (reparaciones)", target: 3000, current: 1800, monthly: 150 },
            { name: "Médico/Dental", target: 2000, current: 1200, monthly: 100 },
            { name: "Vacaciones", target: 5000, current: 2800, monthly: 300 },
            { name: "Regalos", target: 1500, current: 600, monthly: 100 },
            { name: "Hogar (reparaciones)", target: 4000, current: 2200, monthly: 200 },
            { name: "Suscripciones", target: 1000, current: 900, monthly: 50 },
          ].map((fund, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-900 dark:text-white">{fund.name}</span>
                <span className="text-sm text-slate-500">${fund.current.toLocaleString()} / ${fund.target.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all" 
                  style={{ width: `${(fund.current / fund.target) * 100}%` }} 
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{Math.round((fund.current / fund.target) * 100)}% completado</span>
                <span className="text-emerald-600">${fund.monthly}/mes</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Yield Savings Comparison */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Comparativa HYSA</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Marcus by Goldman", apy: "5.15%", min: "$0", access: "1-2 días" },
            { name: "Ally Bank", apy: "5.00%", min: "$0", access: "Instantáneo" },
            { name: "Discover", apy: "4.90%", min: "$0", access: "1-3 días" },
          ].map((bank, i) => (
            <div key={i} className={`p-4 rounded-xl border ${
              i === 0 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : ""
            }`}>
              <h4 className="font-medium text-slate-900 dark:text-white">{bank.name}</h4>
              <p className="text-2xl font-bold text-emerald-600 mt-2">{bank.apy}</p>
              <div className="mt-3 space-y-1 text-sm text-slate-500">
                <p>Mínimo: {bank.min}</p>
                <p>Acceso: {bank.access}</p>
              </div>
              {i === 0 && <span className="badge badge-success mt-3">Recomendado</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Automation Setup */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Sistema de Automatización
        </h2>
        <div className="space-y-4">
          {[
            { day: "1ro de mes", action: "Transferir $500 → Fondo emergencia", status: "active" },
            { day: "1ro de mes", action: "Transferir $150 → Auto repairs", status: "active" },
            { day: "1ro de mes", action: "Transferir $300 → Vacaciones", status: "active" },
            { day: "15 de mes", action: "Transferir $250 → Oportunidad", status: "active" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <Calendar className="h-5 w-5 text-slate-400" />
              <span className="font-medium text-slate-900 dark:text-white w-24">{item.day}</span>
              <span className="flex-1 text-slate-600 dark:text-slate-400">{item.action}</span>
              <span className="badge badge-success">{item.status}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Total automatizado: $1,200/mes entrando a fondos de efectivo.
        </p>
      </div>
    </div>
  );
}
