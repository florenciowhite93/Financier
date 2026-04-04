import { MetricCard } from "@/components/MetricCard";
import { DollarSign, TrendingDown, Building2, Gift, PiggyBank, FileText } from "lucide-react";

export default function FiscalPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Optimización Fiscal</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategias de Deloitte Tax Optimization
        </p>
      </div>

      {/* Tax Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Ingreso Gravable"
          value="$185,000"
          subtitle="2024"
          icon={<DollarSign className="h-6 w-6" />}
          variant="default"
        />
        <MetricCard
          title="Impuesto Estimado"
          value="$38,500"
          subtitle="21% efectiva"
          icon={<Building2 className="h-6 w-6" />}
          variant="warning"
        />
        <MetricCard
          title="Deducciones Totales"
          value="$32,400"
          subtitle="Standard + itemized"
          icon={<TrendingDown className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Ahorro Fiscal YTD"
          value="$8,200"
          subtitle="De estrategias"
          icon={<PiggyBank className="h-6 w-6" />}
          variant="success"
        />
      </div>

      {/* Tax Brackets */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Brackets Federales 2024 (Soltero)
        </h2>
        <div className="space-y-3">
          {[
            { bracket: "10%", range: "$0 - $11,600", tax: "$1,160" },
            { bracket: "12%", range: "$11,601 - $47,150", tax: "$4,266" },
            { bracket: "22%", range: "$47,151 - $100,525", tax: "$11,743" },
            { bracket: "24%", range: "$100,526 - $191,950", tax: "$21,942" },
            { bracket: "32%", range: "$191,951+", tax: "N/A" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <span className="w-16 font-semibold text-slate-900 dark:text-white">{item.bracket}</span>
              <span className="flex-1 text-slate-600 dark:text-slate-400">{item.range}</span>
              <span className="font-medium text-emerald-600">{item.tax}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Tu posición:</span> Estás en el bracket 24%. Considera bunching de deducciones o Roth conversions para minimizar el impacto.
          </p>
        </div>
      </div>

      {/* Tax Strategies */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
              <PiggyBank className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contribuciones 2024</h3>
          </div>
          <div className="space-y-4">
            {[
              { type: "401(k)", limit: "$23,000", contributed: "$23,000", remaining: "$0", status: "maxed" },
              { type: "IRA Roth", limit: "$7,000", contributed: "$7,000", remaining: "$0", status: "maxed" },
              { type: "HSA", limit: "$4,150", contributed: "$4,150", remaining: "$0", status: "maxed" },
              { type: "Backdoor Roth", limit: "$7,000", contributed: "$7,000", remaining: "$0", status: "done" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-900 dark:text-white">{item.type}</span>
                  <span className="text-emerald-600">{item.contributed} / {item.limit}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Gift className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Donaciones Caritativas</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Donor-Advised Fund</span>
              <span className="badge badge-success">Activo</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Donaciones 2024</span>
              <span className="font-semibold text-emerald-600">$12,000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Ahorro fiscal estimado</span>
              <span className="font-semibold">$4,200</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Stock donado</span>
              <span className="font-medium">$8,000 (EVLY)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tax-Loss Harvesting */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tax-Loss Harvesting</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <p className="text-sm text-slate-500">Pérdidas Realizadas YTD</p>
            <p className="text-2xl font-bold text-emerald-600">$4,200</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <p className="text-sm text-slate-500">Capital Gains Offset</p>
            <p className="text-2xl font-bold">$4,200</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <p className="text-sm text-slate-500">Ahorro Fiscal Estimado</p>
            <p className="text-2xl font-bold text-emerald-600">$1,260</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Tip:</span>Tienes $1,800 en pérdidas no realizadas que podrían usarse para offsetear ganancias adicionales si las hay.
          </p>
        </div>
      </div>

      {/* Year-Round Calendar */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Calendario Fiscal 2026
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { month: "Ene-Abr", action: "Contribuciones IRA", deadline: "15 Abr" },
            { month: "Jun", action: "Revisar mid-year tax", deadline: "30 Jun" },
            { month: "Sep", action: "Backdoor Roth", deadline: "30 Sep" },
            { month: "Dic", action: "Tax-loss harvest, bunching", deadline: "31 Dic" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border">
              <p className="font-semibold text-slate-900 dark:text-white">{item.month}</p>
              <p className="text-sm text-slate-500 mt-1">{item.action}</p>
              <p className="text-sm text-emerald-600 mt-2">Deadline: {item.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
