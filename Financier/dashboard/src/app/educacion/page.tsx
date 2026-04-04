import { MetricCard } from "@/components/MetricCard";
import { GraduationCap, Target, Calendar, TrendingUp, DollarSign, Users } from "lucide-react";

export default function EducacionPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Planificación de Educación</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategia de Fidelity Investments
        </p>
      </div>

      {/* Education Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Fondo Total"
          value="$85,000"
          trend={{ value: 8, label: "vs año anterior" }}
          icon={<GraduationCap className="h-6 w-6" />}
          variant="success"
        />
        <MetricCard
          title="Costo Proyectado"
          value="$180,000"
          subtitle="2 hijos, 4 años"
          icon={<Target className="h-6 w-6" />}
          variant="warning"
        />
        <MetricCard
          title="Brecha"
          value="$95,000"
          subtitle="Necesita cubrirse"
          icon={<DollarSign className="h-6 w-6" />}
          variant="danger"
        />
        <MetricCard
          title="Ahorro Mensual"
          value="$800"
          subtitle="$400/hijo"
          icon={<Calendar className="h-6 w-6" />}
          variant="default"
        />
      </div>

      {/* Cost Projections */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Proyección de Costos Universitarios
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Tipo</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Costo 4 años</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Inflation 5%/yr</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Fondo actual</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Necesario</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Público in-state", cost: 100000, inflation: 128000, funded: 45000, needed: 83000 },
                { type: "Público out-of-state", cost: 180000, inflation: 230000, funded: 45000, needed: 185000 },
                { type: "Privado", cost: 280000, inflation: 358000, funded: 45000, needed: 313000 },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{row.type}</td>
                  <td className="py-3 px-4 text-right">${row.cost.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right text-amber-600">${row.inflation.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right text-emerald-600">${row.funded.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right font-medium">${row.needed.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Children */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Planes por Hijo
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              name: "Sofía", 
              age: 8, 
              yearsToCollege: 10, 
              current: 52000, 
              target: 90000, 
              monthly: 400,
              allocation: "Age-based 2034"
            },
            { 
              name: "Diego", 
              age: 5, 
              yearsToCollege: 13, 
              current: 33000, 
              target: 90000, 
              monthly: 400,
              allocation: "Age-based 2037"
            },
          ].map((child, i) => (
            <div key={i} className="p-6 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-xl">
                  <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{child.name}</h3>
                  <p className="text-sm text-slate-500">Edad: {child.age} años</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Años para universidad</span>
                  <span className="font-medium">{child.yearsToCollege}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Fondo actual</span>
                  <span className="font-semibold text-emerald-600">${child.current.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Meta</span>
                  <span className="font-medium">${child.target.toLocaleString()}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-emerald-500 h-3 rounded-full" 
                    style={{ width: `${(child.current / child.target) * 100}%` }} 
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Progreso</span>
                  <span className="text-emerald-600 font-medium">
                    {Math.round((child.current / child.target) * 100)}%
                  </span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Ahorro mensual</span>
                    <span className="font-semibold">${child.monthly}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-slate-500">Portfolio</span>
                    <span className="text-sm">{child.allocation}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 529 Plan */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
          Detalles del 529 Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Plan</span>
              <span className="font-medium">NY 529 (Brightstart)</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">State tax benefit</span>
              <span className="text-emerald-600">Deduction up to $10K/yr</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Total balance</span>
              <span className="font-semibold">$85,000</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-500">Returns YTD</span>
              <span className="text-emerald-600 font-medium">+8.2%</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
            <h4 className="font-medium text-emerald-700 dark:text-emerald-400 mb-2">Ventajas del 529</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• Crecimiento 100% tax-free para educación</li>
              <li>• withdrawals libres de impuestos federal y estatal</li>
              <li>• Alta contribución ($18,000/año por hijo)</li>
              <li>• Flexibility para cambiar beneficiarios</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial Aid Strategy */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Estrategia de Ayudas</h3>
        </div>
        <div className="space-y-4">
          {[
            { strategy: "529 parental", impact: "5.64%", note: "Considerado asset del padre" },
            { strategy: "Custodial accounts", impact: "20%", note: "Menor impacto que 529" },
            { strategy: "Income", impact: "22-47%", note: "Factor principal en EFC" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-white">{item.strategy}</p>
                <p className="text-sm text-slate-500">{item.note}</p>
              </div>
              <span className="badge badge-warning">{item.impact} impacto en EFC</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
