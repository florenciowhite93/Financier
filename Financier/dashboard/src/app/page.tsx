import { MetricCard } from "@/components/MetricCard";
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  PiggyBank, 
  CreditCard,
  Shield,
  Target,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { DashboardChart } from "@/components/DashboardChart";
import { AllocationChart } from "@/components/AllocationChart";
import { DebtPayoffChart } from "@/components/DebtPayoffChart";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard Financiero</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Resumen de tu salud financiera - 4 de abril, 2026
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge badge-success">Al día</span>
          <span className="text-sm text-slate-500">Última actualización: hoy</span>
        </div>
      </div>

      {/* Financial Health Score */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-slate-200 dark:text-slate-800"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${75 * 2.64} 264`}
                  className="text-emerald-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">75</span>
                <span className="text-xs text-slate-500">/100</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Score de Salud Financiera</h2>
              <p className="text-slate-500 dark:text-slate-400">Buen progreso general. Continúa optimizando.</p>
              <div className="flex gap-2 mt-3">
                <span className="badge badge-success">Patrimonio +12%</span>
                <span className="badge badge-success">Ahorro +8%</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/diagnostico" className="btn-primary">
              Ver Diagnóstico Completo
            </Link>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Patrimonio Neto"
          value="$1,250,000"
          subtitle="+12.5% vs año anterior"
          trend={{ value: 12.5, label: "vs 2025" }}
          icon={<Wallet className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Tasa de Ahorro"
          value="24%"
          subtitle="Meta: 25%"
          trend={{ value: 4, label: "vs mes anterior" }}
          icon={<PiggyBank className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Deuda Total"
          value="$85,000"
          subtitle="Hipoteca + auto"
          trend={{ value: -8, label: "vs mes anterior" }}
          icon={<CreditCard className="h-6 w-6" />}
          variant="warning"
        />
        <MetricCard
          title="Fondo de Emergencia"
          value="$45,000"
          subtitle="6 meses cubiertos"
          icon={<Shield className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Evolución Patrimonial
            </h3>
            <select className="text-sm border rounded-lg px-3 py-1.5 bg-white dark:bg-slate-800">
              <option>Últimos 12 meses</option>
              <option>Últimos 5 años</option>
              <option>Todo el tiempo</option>
            </select>
          </div>
          <DashboardChart />
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Asignación de Activos
            </h3>
            <Link href="/inversiones" className="text-sm text-emerald-600 hover:text-emerald-700">
              Ver detalles →
            </Link>
          </div>
          <AllocationChart />
        </div>
      </div>

      {/* Action Items & Debts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Actions */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Acciones Prioritarias
          </h3>
          <div className="space-y-4">
            {[
              { title: "Aumentar fondo de emergencia", subtitle: "Falta $5,000 para meta de 6 meses", priority: "high", icon: Shield },
              { title: "Maximizar contribución 401(k)", subtitle: "$3,200 disponibles hasta diciembre", priority: "medium", icon: TrendingUp },
              { title: "Revisar Beneficiarios", subtitle: "Actualizar tras nacimiento de hijo", priority: "medium", icon: Target },
              { title: "Refinanciar hipoteca", subtitle: "Tasas actuales 0.5% más bajas", priority: "low", icon: CreditCard },
            ].map((action, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <div className={`p-2 rounded-lg ${
                  action.priority === "high" ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400" :
                  action.priority === "medium" ? "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400" :
                  "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                }`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white">{action.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{action.subtitle}</p>
                </div>
                {action.priority === "high" && (
                  <span className="badge badge-danger">Urgente</span>
                )}
                <ArrowUpRight className="h-5 w-5 text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Debt Payoff Progress */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Progreso de Deuda
            </h3>
            <Link href="/deudas" className="text-sm text-emerald-600 hover:text-emerald-700">
              Plan detallado →
            </Link>
          </div>
          <DebtPayoffChart />
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Total pagado este año:</span>
              <span className="font-semibold text-emerald-600">$18,500</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[
          { name: "Jubilación", href: "/jubilacion", icon: TrendingUp },
          { name: "Fiscal", href: "/fiscal", icon: PiggyBank },
          { name: "Seguros", href: "/seguros", icon: Shield },
          { name: "Educación", href: "/educacion", icon: Target },
          { name: "Presupuesto", href: "/presupuesto", icon: CreditCard },
          { name: "Hoja de Ruta", href: "/hoja-de-ruta", icon: Wallet },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-white dark:bg-slate-900 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:shadow-md"
          >
            <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
