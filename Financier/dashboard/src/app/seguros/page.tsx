import { MetricCard } from "@/components/MetricCard";
import { Shield, Heart, Car, Home, AlertCircle, CheckCircle } from "lucide-react";

export default function SegurosPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Auditoría de Seguros</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Análisis de Northwestern Mutual
        </p>
      </div>

      {/* Premium Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Prima Total Anual"
          value="$8,400"
          subtitle="$700/mes"
          icon={<Shield className="h-6 w-6" />}
          variant="default"
        />
        <MetricCard
          title="Life Insurance"
          value="$500,000"
          subtitle="Term 20 años"
          icon={<Heart className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Disability"
          value="60%"
          subtitle="Del ingreso"
          icon={<Shield className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Ahorro Potencial"
          value="$1,200"
          subtitle="/año identificado"
          icon={<CheckCircle className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Life Insurance Analysis */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Análisis de Seguro de Vida
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-4">Método DIME</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Deudas (D)</span>
                <span className="font-medium">$88,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Ingreso (I) - 10 años</span>
                <span className="font-medium">$1,200,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Hipoteca (M)</span>
                <span className="font-medium">$0 (pagada)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Educación (E)</span>
                <span className="font-medium">$200,000</span>
              </div>
              <div className="flex justify-between py-3 font-semibold text-lg">
                <span>Total Necesario</span>
                <span className="text-emerald-600">$1,488,000</span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-4">Recomendación</h3>
            <p className="text-2xl font-bold text-emerald-600">$500K Term 20</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Cobertura actual: $500,000</p>
            <p className="text-sm text-slate-500 mt-2">Tu cobertura es adecuada. Considera $1M si planeas más hijos o-expansión de patrimonio.</p>
            <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-800">
              <p className="text-sm text-slate-500">Prima actual</p>
              <p className="text-lg font-semibold">$360/año ($30/mes)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Coverage */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Seguro de Discapacidad</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Cobertura</span>
              <span className="font-semibold text-emerald-600">60% del ingreso bruto</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Beneficio mensual</span>
              <span className="font-semibold">$7,500/mes</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Waiting period</span>
              <span className="font-medium">90 días</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Proveedor</span>
              <span className="badge badge-success">Employer + Personal</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
              <Heart className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Seguro de Salud</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Tipo</span>
              <span className="font-medium">HDHP + HSA</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Deducible</span>
              <span className="font-medium">$3,000 individual</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">HSA Balance</span>
              <span className="font-semibold text-emerald-600">$28,000</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Prima mensual</span>
              <span className="badge badge-success">Optimizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto & Home */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Car className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Auto</h3>
          </div>
          <div className="space-y-4">
            {[
              { car: "2022 Honda CR-V", coverage: "Full", premium: "$1,200/año", status: "Adecuado" },
              { car: "2020 Toyota Camry", coverage: "Full", premium: "$900/año", status: "Adecuado" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="flex justify-between">
                  <p className="font-medium">{item.car}</p>
                  <span className="badge badge-success">{item.status}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-slate-500">{item.coverage}</span>
                  <span className="text-emerald-600">{item.premium}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Home className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Hogar</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Cobertura</span>
              <span className="font-medium">$520,000 (replacement)</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Deducible</span>
              <span className="font-medium">$1,000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Prima anual</span>
              <span className="font-semibold text-emerald-600">$2,400</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Umbrella</span>
              <span className="badge badge-success">$1M incluido</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Gaps */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Brechas Identificadas</h3>
        </div>
        <div className="space-y-4">
          {[
            { gap: "Long-term care insurance", impact: "Alto", action: "Considerar a los 55 años" },
            { gap: "Exceso de auto coverage", impact: "Medio", action: "Reviewar deductibles" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-white">{item.gap}</p>
                <p className="text-sm text-slate-500">Impacto: {item.impact}</p>
              </div>
              <span className="text-sm text-emerald-600">{item.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
