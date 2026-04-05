"use client";

import { Input } from "@/components/ui/Input";
import { FileText } from "lucide-react";

export default function PatrimonioPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Planificación Patrimonial</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Documentos esenciales estilo Edward Jones</p>
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Coming Soon</h2>
        <p className="text-slate-500">Esta sección estará disponible pronto.</p>
      </div>
    </div>
  );
}
