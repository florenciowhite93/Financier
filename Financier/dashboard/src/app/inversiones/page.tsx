import { MetricCard } from "@/components/MetricCard";
import { PortfolioChart } from "@/components/PortfolioChart";
import { TrendingUp, PieChart, RefreshCw, Shield, Target, DollarSign } from "lucide-react";
import Link from "next/link";

export default function InversionesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Arquitectura de Portafolio</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategia de Morgan Stanley Wealth Management
        </p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Portafolio Total"
          value="$1,250,000"
          trend={{ value: 12.5, label: "vs año anterior" }}
          icon={<PieChart className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Retorno YTD"
          value="+8.2%"
          subtitle="Benchmark: +7.8%"
          icon={<TrendingUp className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Expense Ratio Avg"
          value="0.05%"
          subtitle="Muy bajo"
          icon={<Shield className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Dividend Yield"
          value="2.1%"
          subtitle="$26,250/año"
          icon={<DollarSign className="h-6 w-6" />}
          variant="default"
        />
      </div>

      {/* Portfolio Allocation */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Asignación de Activos
          </h2>
          <div className="flex gap-2">
            <button className="btn-secondary text-sm">Perfil: Moderado</button>
          </div>
        </div>
        <PortfolioChart />
      </div>

      {/* Core Holdings */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Posiciones Core
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Ticker</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Nombre</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Acciones</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Precio</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Valor</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">%</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">YTD</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ticker: "VTI", name: "Vanguard Total Stock Market", shares: 250, price: 280, value: 70000, pct: 5.6, ytd: "+9.2%" },
                { ticker: "VXUS", name: "Vanguard Total International", shares: 400, price: 62, value: 24800, pct: 2.0, ytd: "+5.8%" },
                { ticker: "BND", name: "Vanguard Total Bond Market", shares: 500, price: 72, value: 36000, pct: 2.9, ytd: "+2.1%" },
                { ticker: "VNQ", name: "Vanguard Real Estate", shares: 200, price: 85, value: 17000, pct: 1.4, ytd: "+4.5%" },
                { ticker: "AAPL", name: "Apple Inc", shares: 150, price: 178, value: 26700, pct: 2.1, ytd: "+12.3%" },
                { ticker: "MSFT", name: "Microsoft Corp", shares: 80, price: 415, value: 33200, pct: 2.7, ytd: "+15.8%" },
              ].map((holding, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 px-4 font-medium text-emerald-600">{holding.ticker}</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{holding.name}</td>
                  <td className="py-3 px-4 text-right text-slate-600 dark:text-slate-400">{holding.shares}</td>
                  <td className="py-3 px-4 text-right text-slate-600 dark:text-slate-400">${holding.price}</td>
                  <td className="py-3 px-4 text-right font-medium">${holding.value.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right text-slate-500">{holding.pct}%</td>
                  <td className="py-3 px-4 text-right text-emerald-600 font-medium">{holding.ytd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rebalancing & Tax Location */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Rebalanceo</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Último rebalanceo</span>
              <span className="font-medium">15 Ene, 2026</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Próximo rebalanceo</span>
              <span className="badge badge-warning">Abr 2026</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Trigger</span>
              <span className="font-medium">±5% desviación</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Desviación actual</span>
              <span className="text-emerald-600 font-medium">2.3%</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tax Location</h3>
          </div>
          <div className="space-y-4">
            {[
              { account: "401(k) / IRA", assets: "Bonds, REITs", reason: "Growth sheltered" },
              { account: "Roth IRA", assets: "High-growth stocks", reason: "Tax-free growth" },
              { account: "Taxable", assets: "ETF index funds", reason: "Tax-loss harvest" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <p className="font-medium text-slate-900 dark:text-white">{item.account}</p>
                <p className="text-sm text-slate-500 mt-1">{item.assets}</p>
                <p className="text-sm text-emerald-600 mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benchmark Comparison */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Comparación con Benchmark
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { period: "1 mes", portfolio: "+1.2%", benchmark: "+0.9%", diff: "+0.3%" },
            { period: "3 meses", portfolio: "+3.8%", benchmark: "+3.2%", diff: "+0.6%" },
            { period: "YTD", portfolio: "+8.2%", benchmark: "+7.8%", diff: "+0.4%" },
            { period: "1 año", portfolio: "+18.5%", benchmark: "+16.2%", diff: "+2.3%" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border">
              <p className="text-sm text-slate-500 mb-2">{item.period}</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{item.portfolio}</p>
              <p className="text-sm text-slate-500 mt-1">Benchmark: {item.benchmark}</p>
              <p className="text-sm font-medium text-emerald-600 mt-2">{item.diff} vs benchmark</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
