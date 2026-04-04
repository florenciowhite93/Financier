import { MetricCard } from "@/components/MetricCard";
import { Route, TrendingUp, Target, Calendar, DollarSign, Users } from "lucide-react";

export default function HojaDeRutaPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hoja de Ruta Financiera</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Plan integral de BlackRock - Década por Década
        </p>
      </div>

      {/* Life Timeline */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Línea de Tiempo de tu Vida Financiera
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
          <div className="space-y-8">
            {[
              { 
                decade: "20s", 
                age: "28-30 años",
                focus: "Establecimiento", 
                priorities: ["Fondo de emergencia", "401(k) iniciado", "Seguros básicos"],
                milestone: "1x salario ahorrado",
                status: "completed"
              },
              { 
                decade: "30s", 
                age: "35-40 años",
                focus: "Acumulación", 
                priorities: ["Maximizar retirement", "Buy first home", "Start family"],
                milestone: "2x salario ahorrado",
                status: "completed"
              },
              { 
                decade: "40s", 
                age: "45-50 años",
                focus: "Aceleración", 
                priorities: ["Peak earnings", "College savings", "Debt-free"],
                milestone: "4x salario ahorrado",
                status: "current"
              },
              { 
                decade: "50s", 
                age: "55-60 años",
                focus: "Transición", 
                priorities: ["Retirement prep", "Healthcare planning", "Legacy planning"],
                milestone: "6x salario ahorrado",
                status: "pending"
              },
              { 
                decade: "60s", 
                age: "60-67 años",
                focus: "Jubilación", 
                priorities: ["Social Security timing", "Medicare", "Distribution phase"],
                milestone: "8-10x salario ahorrado",
                status: "pending"
              },
            ].map((decade, i) => (
              <div key={i} className="relative pl-12">
                <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  decade.status === "completed" ? "bg-emerald-500 text-white" :
                  decade.status === "current" ? "bg-amber-500 text-white" :
                  "bg-slate-300 dark:bg-slate-600"
                }`}>
                  {i + 1}
                </div>
                <div className={`p-4 rounded-xl border ${
                  decade.status === "current" ? "border-amber-500 bg-amber-50 dark:bg-amber-950/30" :
                  decade.status === "completed" ? "border-emerald-200 dark:border-emerald-800" :
                  ""
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Década {decade.decade}
                    </h3>
                    <span className="text-sm text-slate-500">{decade.age}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-4 w-4 text-emerald-600" />
                    <span className="font-medium text-emerald-700 dark:text-emerald-400">{decade.focus}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {decade.priorities.map((p, j) => (
                      <span key={j} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-sm text-slate-500">Hito: </span>
                    <span className="text-sm font-medium text-emerald-600">{decade.milestone}</span>
                    {decade.status === "completed" && (
                      <span className="ml-2 badge badge-success">Completado</span>
                    )}
                    {decade.status === "current" && (
                      <span className="ml-2 badge badge-warning">Actual</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Net Worth Milestones */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Hitos de Patrimonio Neto
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { age: 30, target: "$50K", actual: "$85K", status: "ahead" },
            { age: 40, target: "$200K", actual: "$320K", status: "ahead" },
            { age: 50, target: "$400K", actual: "$780K", status: "ahead" },
            { age: 60, target: "$800K", actual: "$1.35M", status: "ahead" },
            { age: 67, target: "$1.6M", actual: "$1.95M", status: "on_track" },
          ].map((milestone, i) => (
            <div key={i} className="p-4 rounded-xl border text-center">
              <p className="text-sm text-slate-500 mb-1">Edad {milestone.age}</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{milestone.target}</p>
              <p className="text-sm text-emerald-600 mt-1">Actual: {milestone.actual}</p>
              {milestone.status === "ahead" && (
                <span className="badge badge-success mt-2">Adelantado</span>
              )}
              {milestone.status === "on_track" && (
                <span className="badge badge-warning mt-2">En camino</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard de 5 Números */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Tu Dashboard - 5 Números Clave
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { number: "$1.25M", label: "Patrimonio", trend: "+12%", trendUp: true },
            { number: "24%", label: "Tasa de Ahorro", trend: "+2%", trendUp: true },
            { number: "6", label: "Meses Emergency", trend: "Completado", trendUp: true },
            { number: "18%", label: "DTI Ratio", trend: "Saludable", trendUp: true },
            { number: "2.3%", label: "Allocation Drift", trend: "< 5%", trendUp: true },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{item.number}</p>
              <p className="text-sm text-slate-500 mt-1">{item.label}</p>
              <p className={`text-sm font-medium mt-2 ${item.trendUp ? "text-emerald-600" : "text-red-600"}`}>
                {item.trend}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Income Growth Strategy */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Estrategia de Crecimiento de Ingreso</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Carrera Principal", 
              actions: ["Certificaciones", "Negociación salarial", "Networking"],
              impact: "+$15K/año"
            },
            { 
              title: "Side Income", 
              actions: ["Freelancing", "Consulting", "Investment income"],
              impact: "+$8K/año"
            },
            { 
              title: "Skill Development", 
              actions: ["Technical skills", "Leadership", "Industry trends"],
              impact: "+$20K/año (5yr)"
            },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border">
              <h4 className="font-medium text-slate-900 dark:text-white mb-3">{item.title}</h4>
              <div className="space-y-2">
                {item.actions.map((action, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {action}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-500">Impacto potencial</p>
                <p className="font-semibold text-emerald-600">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Major Purchases Timeline */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Planeación de Compras Mayores
        </h2>
        <div className="space-y-4">
          {[
            { item: "Reemplazo auto (2027)", amount: "$35,000", timeline: "18 meses", savings: "$1,950/mes" },
            { item: "Remodelación cocina (2028)", amount: "$50,000", timeline: "24 meses", savings: "$2,100/mes" },
            { item: "Vacaciones mayores", amount: "$15,000", timeline: "12 meses", savings: "$1,250/mes" },
          ].map((purchase, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <Calendar className="h-5 w-5 text-slate-400" />
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-white">{purchase.item}</p>
                <p className="text-sm text-slate-500">{purchase.timeline}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-900 dark:text-white">${purchase.amount}</p>
                <p className="text-sm text-emerald-600">{purchase.savings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Independence */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Número de Independencia Financiera
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-sm font-medium text-emerald-600 mb-2">Tu Número FI</h3>
            <p className="text-4xl font-bold text-emerald-600">$1,875,000</p>
            <p className="text-sm text-slate-500 mt-2">
              Basado en gastos de $75,000/año ÷ 4% SWR
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Patrimonio actual</span>
              <span className="font-semibold text-emerald-600">$1,250,000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Progreso</span>
              <span className="font-semibold">67%</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">FI Target Date</span>
              <span className="font-semibold">2032</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">FI Age</span>
              <span className="font-semibold">55 años</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
