import type { LucideIcon } from "lucide-react";

export type KpiTone = "neutral" | "primary" | "success" | "warning" | "danger" | "info";

const toneClasses: Record<KpiTone, string> = {
  neutral: "bg-secondary text-secondary-foreground",
  primary: "bg-primary-soft text-primary",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-destructive-soft text-destructive",
  info: "bg-info-soft text-info",
};

export function KPICard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "neutral",
}: {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  tone?: KpiTone;
}) {
  return (
    <div className="card-surface tap flex flex-col gap-1.5 px-3 py-2.5">
      <div className="flex items-center gap-2">
        <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${toneClasses[tone]}`}>
          <Icon size={13} strokeWidth={2.4} />
        </span>
        <span className="label-muted truncate">{label}</span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="num value-strong text-[19px] leading-none text-foreground">{value}</span>
        {hint ? (
          <span className="text-[10.5px] font-medium text-muted-foreground">{hint}</span>
        ) : null}
      </div>
    </div>
  );
}
