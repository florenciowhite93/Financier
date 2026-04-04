"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { User, Mail, Phone, Calendar, DollarSign, Home, TrendingUp } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    email: user?.email || "",
    telefono: "",
    ingresos: "",
    patrimonio: "",
    propiedad: "",
    objetivo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth/login");
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Mi Perfil Financiero</h1>
            <p className="text-slate-500 mt-1">Actualiza tu información personal y objetivos</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            Cerrar Sesión
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <User className="h-5 w-5" />
              Información Personal
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                id="nombre"
                name="nombre"
                label="Nombre completo"
                placeholder="Juan García"
                value={formData.nombre}
                onChange={handleChange}
              />
              <Input
                id="edad"
                name="edad"
                type="number"
                label="Edad"
                placeholder="35"
                value={formData.edad}
                onChange={handleChange}
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Correo electrónico"
                placeholder="juan@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                label="Teléfono"
                placeholder="+52 55 1234 5678"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Situación Financiera
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                id="ingresos"
                name="ingresos"
                type="number"
                label="Ingresos mensuales (MXN)"
                placeholder="50000"
                value={formData.ingresos}
                onChange={handleChange}
              />
              <Input
                id="patrimonio"
                name="patrimonio"
                type="number"
                label="Patrimonio neto estimado (MXN)"
                placeholder="1500000"
                value={formData.patrimonio}
                onChange={handleChange}
              />
              <Input
                id="propiedad"
                name="propiedad"
                label="¿Tienes propiedad?"
                placeholder="Casa, auto, etc."
                value={formData.propiedad}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Objetivos Financieros
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  ¿Cuál es tu objetivo principal?
                </label>
                <select
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-900 dark:border-slate-700"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="jubilacion">Planear mi jubilación</option>
                  <option value="inversiones">Hacer crecer mi patrimonio</option>
                  <option value="deudas">Eliminar deudas</option>
                  <option value="emergencia">Crear fondo de emergencia</option>
                  <option value="compra">Ahorrar para una compra grande</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={saving}>
              {saving ? "Guardando..." : "Guardar Cambios"}
            </Button>
            {saved && (
              <span className="text-emerald-600 font-medium">¡Cambios guardados!</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
