import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
  };
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon, 
  className,
  variant = "default"
}: MetricCardProps) {
  const variantStyles = {
    default: "border-slate-200 dark:border-slate-800",
    success: "border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20",
    warning: "border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20",
    danger: "border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20",
  };

  const iconStyles = {
    default: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
    success: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400",
    warning: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400",
    danger: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  };

  return (
    <div className={cn("rounded-xl border p-6 shadow-sm transition-all hover:shadow-md", variantStyles[variant], className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center gap-2">
              <span className={cn(
                "text-sm font-medium",
                trend.value > 0 ? "text-emerald-600" : "text-red-600"
              )}>
                {trend.value > 0 ? "+" : ""}{trend.value}%
              </span>
              <span className="text-xs text-slate-500">{trend.label}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={cn("p-3 rounded-xl", iconStyles[variant])}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
