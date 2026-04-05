"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Wallet, 
  TrendingUp, 
  PiggyBank,
  CreditCard,
  Building2,
  Shield,
  GraduationCap,
  FileText,
  Home,
  Calculator,
  Route,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Menu,
  User
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Diagnóstico", href: "/diagnostico", icon: Wallet },
  { name: "Jubilación", href: "/jubilacion", icon: TrendingUp },
  { name: "Inversiones", href: "/inversiones", icon: PiggyBank },
  { name: "Fiscal", href: "/fiscal", icon: DollarSign },
  { name: "Deudas", href: "/deudas", icon: CreditCard },
  { name: "Efectivo", href: "/efectivo", icon: Building2 },
  { name: "Seguros", href: "/seguros", icon: Shield },
  { name: "Educación", href: "/educacion", icon: GraduationCap },
  { name: "Patrimonio", href: "/patrimonio", icon: FileText },
  { name: "Inmuebles", href: "/inmuebles", icon: Home },
  { name: "Presupuesto", href: "/presupuesto", icon: Calculator },
  { name: "Hoja de Ruta", href: "/hoja-de-ruta", icon: Route },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-white dark:bg-slate-800 shadow-lg border"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`
        fixed left-0 top-0 z-50 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center h-16 px-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg text-slate-900 dark:text-white">Financier</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">Asistente Financiero</p>
              </div>
            )}
          </div>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                  ${isActive 
                    ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400" 
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                  ${collapsed ? "justify-center" : ""}
                `}
                title={collapsed ? item.name : undefined}
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-emerald-600 dark:text-emerald-500" : ""}`} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex absolute bottom-4 right-0 translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-slate-500" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-slate-500" />
          )}
        </button>
      </aside>
    </>
  );
}
