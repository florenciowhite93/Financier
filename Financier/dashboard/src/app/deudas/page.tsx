"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CreditCard, Plus, Trash2, TrendingDown, Zap } from "lucide-react";

interface Deuda {
  id: number;
  nombre: string;
  balance: number;
  tasa: number;
  pagoMinimo: number;
}

export default function DeudasPage() {
  const [deudas, setDeudas] = useState<Deuda[]>([
    { id: 1, nombre: "Tarjeta de Crédito A", balance: 15000, tasa: 24.99, pagoMinimo: 500 },
    { id: 2, nombre: "Préstamo Personal", balance: 50000, tasa: 12.5, pagoMinimo: 1500 },
  ]);
  const [nuevaDeuda, setNuevaDeuda] = useState({ nombre: "", balance: "", tasa: "", pagoMinimo: "" });
  const [pagoExtra, setPagoExtra] = useState(2000);

  const agregarDeuda = () => {
    if (nuevaDeuda.nombre && nuevaDeuda.balance) {
      setDeudas([...deudas, {
        id: Date.now(),
        nombre: nuevaDeuda.nombre,
        balance: parseFloat(nuevaDeuda.balance) || 0,
        tasa: parseFloat(nuevaDeuda.tasa) || 0,
        pagoMinimo: parseFloat(nuevaDeuda.pagoMinimo) || 0,
      }]);
      setNuevaDeuda({ nombre: "", balance: "", tasa: "", pagoMinimo: "" });
    }
  };

  const eliminarDeuda = (id: number) => {
    setDeudas(deudas.filter(d => d.id !== id));
  };

  const deudaTotal = deudas.reduce((sum, d) => sum + d.balance, 0);
  const deudaOrdenada = [...deudas].sort((a, b) => b.tasa - a.tasa);
  const deudaMayorTasa = deudaOrdenada[0];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Eliminación de Deuda</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estrategias estilo JPMorgan para eliminar deudas
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-4">
          <p className="text-sm text-slate-500">Deuda Total</p>
          <p className="text-2xl font-bold text-red-600">${deudaTotal.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Mayor Tasa de Interés</p>
          <p className="text-2xl font-bold text-amber-600">{deudaMayorTasa?.tasa || 0}%</p>
          <p className="text-xs text-slate-500">{deudaMayorTasa?.nombre}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Pago Extra Disponible</p>
          <Input type="number" value={pagoExtra} onChange={(e) => setPagoExtra(parseFloat(e.target.value) || 0)} className="mt-1" />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Tus Deudas
          </h2>
          <div className="space-y-3">
            {deudaOrdenada.map((deuda) => (
              <div key={deuda.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{deuda.nombre}</p>
                    <p className="text-sm text-slate-500">{deuda.tasa}% TAE</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900 dark:text-white">${deuda.balance.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">Mín: ${deuda.pagoMinimo}/mes</p>
                  </div>
                </div>
                <button onClick={() => eliminarDeuda(deuda.id)} className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1">
                  <Trash2 className="h-4 w-4" /> Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-lg border border-dashed">
            <h3 className="font-medium text-slate-900 dark:text-white mb-3">Agregar Nueva Deuda</h3>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Nombre" value={nuevaDeuda.nombre} onChange={(e) => setNuevaDeuda({...nuevaDeuda, nombre: e.target.value})} />
              <Input type="number" placeholder="Balance" value={nuevaDeuda.balance} onChange={(e) => setNuevaDeuda({...nuevaDeuda, balance: e.target.value})} />
              <Input type="number" placeholder="Tasa %" value={nuevaDeuda.tasa} onChange={(e) => setNuevaDeuda({...nuevaDeuda, tasa: e.target.value})} />
              <Input type="number" placeholder="Pago mínimo" value={nuevaDeuda.pagoMinimo} onChange={(e) => setNuevaDeuda({...nuevaDeuda, pagoMinimo: e.target.value})} />
            </div>
            <Button onClick={agregarDeuda} className="w-full mt-3" variant="outline">
              <Plus className="h-4 w-4 mr-1" /> Agregar Deuda
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              Método Avalancha (Recomendado)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Paga las deudas de mayor a menor tasa de interés. Matemáticamente es el más eficiente.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between p-2 rounded bg-emerald-50 dark:bg-emerald-950/30">
                <span className="text-sm">1. Ordena por tasa más alta</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-emerald-50 dark:bg-emerald-950/30">
                <span className="text-sm">2. Paga mínimo en todas</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-emerald-50 dark:bg-emerald-950/30">
                <span className="text-sm">3. Destina extra a mayor tasa</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-emerald-50 dark:bg-emerald-950/30">
                <span className="text-sm">4. Repite hasta eliminar</span>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-blue-500" />
              Método Bola de Nieve
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Paga las deudas de menor a mayor balance. Psicológicamente motiva más victorias rápidas.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between p-2 rounded bg-blue-50 dark:bg-blue-950/30">
                <span className="text-sm">1. Ordena por balance menor</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-blue-50 dark:bg-blue-950/30">
                <span className="text-sm">2. Paga mínimo en todas</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-blue-50 dark:bg-blue-950/30">
                <span className="text-sm">3. Destina extra a menor deuda</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-blue-50 dark:bg-blue-950/30">
                <span className="text-sm">4. Celebra cada victoria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
