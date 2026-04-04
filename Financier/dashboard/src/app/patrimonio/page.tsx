import { MetricCard } from "@/components/MetricCard";
import { FileText, Users, CheckCircle, AlertCircle, Download, Shield } from "lucide-react";

export default function PatrimonioPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Planificación Patrimonial</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategia de Edward Jones
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Activos"
          value="$1,395,000"
          subtitle="En planificación"
          icon={<FileText className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Documentos"
          value="8/12"
          subtitle="Completados"
          icon={<CheckCircle className="h-6 w-6" />}
          variant="warning"
        />
        <MetricCard
          title="Beneficiarios"
          value="Actualizados"
          subtitle="Todos al día"
          icon={<Users className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Próximo Paso"
          value="Trust"
          subtitle="Pendiente"
          icon={<AlertCircle className="h-6 w-6" />}
          variant="warning"
        />
      </div>

      {/* Essential Documents */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Checklist de Documentos Esenciales
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">Documentos Completados</h3>
            {[
              { doc: "Last Will and Testament", updated: "2024" },
              { doc: "Healthcare Directive", updated: "2024" },
              { doc: "Financial Power of Attorney", updated: "2023" },
              { doc: "HIPAA Authorization", updated: "2024" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white">{item.doc}</p>
                  <p className="text-sm text-slate-500">Actualizado: {item.updated}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">Documentos Pendientes</h3>
            {[
              { doc: "Revocable Living Trust", priority: "Alta" },
              { doc: "Digital Asset Plan", priority: "Media" },
              { doc: "Letter of Intent", priority: "Baja" },
              { doc: "Guardianship Designation", priority: "Media" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white">{item.doc}</p>
                  <p className="text-sm text-amber-600">Prioridad: {item.priority}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beneficiary Audit */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Auditoría de Beneficiarios
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Cuenta</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Beneficiario</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">%</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-500">Estado</th>
              </tr>
            </thead>
            <tbody>
              {[
                { account: "401(k)", beneficiary: "Cónyuge 100%", pct: "100%", status: "OK" },
                { account: "IRA", beneficiary: "Cónyuge 100%", pct: "100%", status: "OK" },
                { account: "Life Insurance", beneficiary: "Cónyuge 100%", pct: "100%", status: "OK" },
                { account: "Bank Accounts", beneficiary: "TOD: Cónyuge", pct: "100%", status: "OK" },
                { account: "Brokerage", beneficiary: "Trust", pct: "100%", status: "Review" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{row.account}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{row.beneficiary}</td>
                  <td className="py-3 px-4 text-right">{row.pct}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`badge ${row.status === "OK" ? "badge-success" : "badge-warning"}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Analysis */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Análisis de Trusts</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Revocable Living Trust</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Estado</span>
                <span className="badge badge-warning">Necesario</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficio principal</span>
                <span className="text-emerald-600">Evita probate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Costo estimado</span>
                <span>$2,500-$5,000</span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Irrevocable Trust</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Estado</span>
                <span className="badge">Futuro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficio principal</span>
                <span className="text-emerald-600">Asset protection</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Timing sugerido</span>
                <span>65+ o antes de venta negocio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Plan de Acción
        </h2>
        <div className="space-y-4">
          {[
            { action: "Crear Revocable Living Trust", deadline: "Q2 2026", attorney: "Smith & Associates" },
            { action: "Actualizar títulos de propiedad", deadline: "Q2 2026", attorney: "Con Trust" },
            { action: "Crear Digital Asset Plan", deadline: "Q3 2026", attorney: "DIY" },
            { action: "Review Letter of Intent", deadline: "Q4 2026", attorney: "DIY" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-semibold text-sm">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-white">{item.action}</p>
                <p className="text-sm text-slate-500">{item.attorney}</p>
              </div>
              <span className="text-sm text-slate-500">{item.deadline}</span>
              <button className="btn-secondary text-sm">
                <Download className="h-4 w-4 mr-1" />
                Checklist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
