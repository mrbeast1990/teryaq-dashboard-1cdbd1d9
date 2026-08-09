import type { ReactNode } from "react";

export function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-2 mt-4 flex items-center justify-between gap-3">
      <h2 className="text-[13px] font-bold tracking-tight text-foreground">{title}</h2>
      {action ? <div className="shrink-0 text-[12px] font-semibold text-primary">{action}</div> : null}
    </div>
  );
}
