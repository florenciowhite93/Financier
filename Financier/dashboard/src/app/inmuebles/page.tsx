import { MetricCard } from "@/components/MetricCard";
import { Home, TrendingUp, DollarSign, Calculator, Building2, Calendar } from "lucide-react";

export default function InmueblesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Análisis Inmobiliario</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Análisis de Wealthfront Real Estate
        </p>
      </div>

      {/* Real Estate Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Propiedades"
          value="2"
          subtitle="$680K valor total"
          icon={<Home className="h-6 w-6" />}
          variant="default"
        />
        <MetricCard
          title="Equity Total"
          value="$485,000"
          subtitle="+35% desde compra"
          icon={<TrendingUp className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="LTV Promedio"
          value="38%"
          subtitle="Healthy ratio"
          icon={<Calculator className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Rental Income"
          value="$2,800"
          subtitle="/mes (si se renta)"
          icon={<DollarSign className="h-6 w-6" />}
          variant="default"
        />
      </div>

      {/* Properties */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Tu Cartera Inmobiliaria
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Primary Residence */}
          <div className="p-6 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                <Home className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Residencia Principal</h3>
                <p className="text-sm text-slate-500">Comprada 2019</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Valor mercado</span>
                <span className="font-semibold">$520,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Hipoteca pendiente</span>
                <span className="font-medium text-red-600">$65,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Equity</span>
                <span className="font-semibold text-emerald-600">$455,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">LTV</span>
                <span className="badge badge-success">12.5%</span>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Pago mensual</span>
                  <span className="font-medium">$1,200</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-slate-500">Tasa</span>
                  <span className="text-emerald-600">6.5% (fija)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rental Property */}
          <div className="p-6 rounded-xl border bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Propiedad de Inversión</h3>
                <p className="text-sm text-slate-500">Depart, Comprada 2021</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Valor mercado</span>
                <span className="font-semibold">$160,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Hipoteca pendiente</span>
                <span className="font-medium">$130,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Equity</span>
                <span className="font-semibold text-emerald-600">$30,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">LTV</span>
                <span className="badge badge-warning">81%</span>
              </div>
              <div className="pt-3 border-t border-blue-200 dark:border-blue-800">
                <div className="flex justify-between">
                  <span className="text-slate-500">Renta mensual</span>
                  <span className="font-medium text-emerald-600">$1,400</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-slate-500">NOI</span>
                  <span className="text-emerald-600">$8,400/año</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Metrics */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Métricas de Inversión
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: "Cap Rate", value: "6.5%", target: "6-10%", status: "OK" },
            { metric: "Cash-on-Cash", value: "8.2%", target: "8%+", status: "OK" },
            { metric: "Cash Flow", value: "$3,800/yr", target: "Positive", status: "OK" },
            { metric: "Appreciation", value: "+5%/yr", target: "4-6%", status: "OK" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border">
              <p className="text-sm text-slate-500">{item.metric}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{item.value}</p>
              <p className="text-sm text-slate-500 mt-2">Meta: {item.target}</p>
              {item.status === "OK" && (
                <span className="badge badge-success mt-2">On track</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Buy vs Rent Analysis */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Análisis Buy vs Rent (Residencia Principal)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-4">Costos de Comprar</h3>
            <div className="space-y-3">
              {[
                { item: "Pago mensual hipotecario", value: "$1,200" },
                { item: "Property taxes (1.2%)", value: "$520/mes" },
                { item: "Seguro", value: "$150/mes" },
                { item: "Maintenance (1%)", value: "$433/mes" },
                { item: "HOA", value: "$0" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">{item.item}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between py-3 font-semibold">
                <span>Total mensual</span>
                <span className="text-emerald-600">$2,303/mes</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-4">Costos de Rentar (comparables)</h3>
            <div className="space-y-3">
              {[
                { item: "Renta", value: "$2,200/mes" },
                { item: "Seguro de inquilino", value: "$25/mes" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">{item.item}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between py-3 font-semibold">
                <span>Total mensual</span>
                <span className="text-amber-600">$2,225/mes</span>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
              <p className="font-medium text-emerald-700 dark:text-emerald-400">Recomendación: COMPRAR</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Aunque marginalmente más caro, la construcción de equity y beneficios fiscales hacen que comprar sea la mejor opción a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Refinance Analysis */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
            <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Oportunidad de Refinanciamiento</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border">
            <p className="text-sm text-slate-500">Tasa actual</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">6.5%</p>
          </div>
          <div className="p-4 rounded-xl border bg-emerald-50 dark:bg-emerald-950/30">
            <p className="text-sm text-slate-500">Tasa actual de mercado</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">6.0%</p>
          </div>
          <div className="p-4 rounded-xl border">
            <p className="text-sm text-slate-500">Ahorro estimado</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">$85/mes</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Ahorro total en vida del préstamo: ~$18,000. Considera refinanciar si puedes cubrir costos de cierre.
        </p>
      </div>
    </div>
  );
}
