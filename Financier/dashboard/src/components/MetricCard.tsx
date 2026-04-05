"use client";

import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
  };
  icon: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
}

export function MetricCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  variant = "default",
}: MetricCardProps) {
  const variantStyles = {
    default: "text-slate-600 dark:text-slate-400",
    success: "text-emerald-600 dark:text-emerald-400",
    warning: "text-amber-600 dark:text-amber-400",
    danger: "text-red-600 dark:text-red-400",
  };

  const iconBgStyles = {
    default: "bg-slate-100 dark:bg-slate-800",
    success: "bg-emerald-100 dark:bg-emerald-900/30",
    warning: "bg-amber-100 dark:bg-amber-900/30",
    danger: "bg-red-100 dark:bg-red-900/30",
  };

  return (
    <div className="metric-card">
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${iconBgStyles[variant]}`}>
          <div className={variantStyles[variant]}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${
            trend.value >= 0 ? "text-emerald-600" : "text-red-600"
          }`}>
            {trend.value >= 0 ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{value}</p>
        {subtitle && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
        )}
        {trend && (
          <p className="text-xs text-slate-400 mt-1">{trend.label}</p>
        )}
      </div>
    </div>
  );
}
