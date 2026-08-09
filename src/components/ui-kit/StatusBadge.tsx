type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "primary";

const tones: Record<Tone, string> = {
  neutral: "border-border bg-secondary text-secondary-foreground",
  primary: "border-primary/25 bg-primary-soft text-primary",
  success: "border-success/25 bg-success-soft text-success",
  warning: "border-warning/25 bg-warning-soft text-warning",
  danger: "border-destructive/25 bg-destructive-soft text-destructive",
  info: "border-info/25 bg-info-soft text-info",
};

export function StatusBadge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${tones[tone]}`}
    >
      {label}
    </span>
  );
}
