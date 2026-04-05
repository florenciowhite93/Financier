"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Home, Calculator } from "lucide-react";

export default function InmueblesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Análisis Inmobiliario</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Métricas estilo Wealthfront para inversiones inmobiliarias</p>
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Coming Soon</h2>
        <p className="text-slate-500">Esta sección estará disponible pronto.</p>
      </div>
    </div>
  );
}
