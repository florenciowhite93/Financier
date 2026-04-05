"use client";

import { Input } from "@/components/ui/Input";
import { Calculator } from "lucide-react";

export default function PresupuestoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Presupuesto</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Sistema Zero-Based Budget estilo Ramsey</p>
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Coming Soon</h2>
        <p className="text-slate-500">Esta sección estará disponible pronto.</p>
      </div>
    </div>
  );
}
