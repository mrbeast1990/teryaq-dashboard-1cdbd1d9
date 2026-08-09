import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Props = {
  label: string;
  icon: LucideIcon;
  to?: string;
  onClick?: () => void;
  variant?: "tile" | "solid" | "outline";
};

export function ActionButton({ label, icon: Icon, to, onClick, variant = "tile" }: Props) {
  if (variant === "tile") {
    const inner = (
      <span className="card-surface tap flex h-full flex-col items-center justify-center gap-1.5 px-2 py-3 text-center">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary">
          <Icon size={16} strokeWidth={2.2} />
        </span>
        <span className="text-[11.5px] font-bold leading-tight text-foreground">{label}</span>
      </span>
    );
    return to ? (
      <Link to={to} className="block h-full">
        {inner}
      </Link>
    ) : (
      <button type="button" onClick={onClick} className="block h-full w-full">
        {inner}
      </button>
    );
  }

  const className =
    variant === "solid"
      ? "tap inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-[12.5px] font-bold text-primary-foreground"
      : "tap inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-[12.5px] font-bold text-foreground";

  const body = (
    <>
      <Icon size={15} strokeWidth={2.2} />
      {label}
    </>
  );

  return to ? (
    <Link to={to} className={className}>
      {body}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {body}
    </button>
  );
}
