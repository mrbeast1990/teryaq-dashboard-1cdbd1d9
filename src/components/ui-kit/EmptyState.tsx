import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";

export function EmptyState({
  title = "لا توجد بيانات",
  description,
  icon: Icon = Inbox,
}: {
  title?: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="card-surface flex flex-col items-center gap-2 px-4 py-8 text-center">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-muted-foreground">
        <Icon size={18} />
      </span>
      <p className="text-[14px] font-bold text-foreground">{title}</p>
      {description ? (
        <p className="max-w-xs text-[12px] font-medium text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
