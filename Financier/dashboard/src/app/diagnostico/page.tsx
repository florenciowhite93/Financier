import { MetricCard } from "@/components/MetricCard";
import { Wallet, TrendingUp, CreditCard, Shield, PiggyBank, FileText, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DiagnosticoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Diagnóstico Financiero Integral</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Análisis completo de Goldman Sachs Private Wealth Management
        </p>
      </div>

      {/* Net Worth Breakdown */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Cálculo de Patrimonio Neto</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-4">ACTIVOS</h3>
            <div className="space-y-3">
              {[
                { name: "Cuentas bancarias", value: 85000 },
                { name: "Inversiones (401k, IRA)", value: 450000 },
                { name: "Cuenta de corretaje", value: 280000 },
                { name: "Bienes raíces", value: 520000 },
                { name: "Vehículos", value: 45000 },
                { name: "Otros activos", value: 15000 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                  <span className="font-medium text-slate-900 dark:text-white">${item.value.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 font-semibold text-lg">
                <span className="text-slate-900 dark:text-white">Total Activos</span>
                <span className="text-emerald-600">$1,395,000</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-4">PASIVOS</h3>
            <div className="space-y-3">
              {[
                { name: "Hipoteca", value: 65000 },
                { name: "Préstamo de auto", value: 15000 },
                { name: "Tarjetas de crédito", value: 5000 },
                { name: "Préstamo personal", value: 3000 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                  <span className="font-medium text-red-600">${item.value.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 font-semibold text-lg">
                <span className="text-slate-900 dark:text-white">Total Pasivos</span>
                <span className="text-red-600">$88,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">PATRIMONIO NETO</span>
            <span className="text-2xl font-bold text-emerald-600">$1,307,000</span>
          </div>
        </div>
      </div>

      {/* Financial Health Score */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Cash Flow Analysis"
          value="$4,500"
          subtitle="Ahorro mensual"
          icon={<TrendingUp className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Tasa de Ahorro"
          value="24%"
          subtitle="Meta: 25%"
          icon={<PiggyBank className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Fondo de Emergencia"
          value="6 meses"
          subtitle="Completado"
          icon={<Shield className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Ratio Deuda/Ingreso"
          value="18%"
          subtitle="Saludable (<36%)"
          icon={<CreditCard className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Analysis Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Emergency Fund */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
              <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Fondo de Emergencia</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Estado actual</span>
              <span className="font-medium text-emerald-600">Completado</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
              <div className="bg-emerald-500 h-3 rounded-full" style={{ width: "100%" }} />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">$45,000 / $45,000</span>
              <span className="text-emerald-600">100%</span>
            </div>
          </div>
        </div>

        {/* Debt Analysis */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
              <CreditCard className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Análisis de Deuda</h3>
          </div>
          <div className="space-y-4">
            {[
              { debt: "Hipoteca", rate: "6.5%", status: "Normal" },
              { debt: "Préstamo auto", rate: "4.9%", status: "Normal" },
              { debt: "Tarjetas", rate: "19.99%", status: "Prioridad" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{item.debt}</p>
                  <p className="text-sm text-slate-500">{item.rate}</p>
                </div>
                <span className={`badge ${item.status === "Prioridad" ? "badge-danger" : "badge-success"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Coverage */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Cobertura de Seguros</h3>
          </div>
          <div className="space-y-4">
            {[
              { type: "Vida", coverage: "$500K Term 20", status: "Adecuado" },
              { type: "Discapacidad", coverage: "60% ingreso", status: "Adecuado" },
              { type: "Salud", coverage: "HDHP + HSA", status: "Optimizado" },
              { type: "Auto", coverage: "Full coverage", status: "Adecuado" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{item.type}</p>
                  <p className="text-sm text-slate-500">{item.coverage}</p>
                </div>
                <span className="badge badge-success">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Estate Planning */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Wallet className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Planificación Patrimonial</h3>
          </div>
          <div className="space-y-4">
            {[
              { doc: "Testamento", status: true },
              { doc: "Poder notarial médico", status: true },
              { doc: "Poder financiero", status: true },
              { doc: "Beneficiarios actualizados", status: false },
              { doc: "Fideicomiso revocable", status: false },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                <span className="text-slate-700 dark:text-slate-300">{item.doc}</span>
                {item.status ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                ) : (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span className="text-sm text-amber-600">Pendiente</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Plan de Acción Prioritario</h2>
        <div className="space-y-4">
          {[
            { priority: "Alta", action: "Actualizar beneficiarios en todas las cuentas", module: "Patrimonio" },
            { priority: "Alta", action: "Crear fideicomiso revocable para protección de activos", module: "Patrimonio" },
            { priority: "Media", action: "Refinanciar hipoteca para bajar tasa", module: "Deudas" },
            { priority: "Media", action: "Aumentar contribución 401(k) al máximo", module: "Jubilación" },
            { priority: "Baja", action: "Revisar seguro de vida - considerar conversión a permanente", module: "Seguros" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <span className={`badge ${
                item.priority === "Alta" ? "badge-danger" :
                item.priority === "Media" ? "badge-warning" : "badge-success"
              }`}>
                {item.priority}
              </span>
              <span className="flex-1 text-slate-900 dark:text-white">{item.action}</span>
              <Link href={`/${item.module.toLowerCase()}`} className="text-sm text-emerald-600 hover:underline">
                {item.module} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
