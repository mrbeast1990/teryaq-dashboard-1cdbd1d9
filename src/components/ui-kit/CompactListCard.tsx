import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

type Props = {
  title: string;
  description?: string;
  value?: string;
  icon: LucideIcon;
  to?: string;
  onClick?: () => void;
};

export function CompactListCard({ title, description, value, icon: Icon, to, onClick }: Props) {
  const content = (
    <div 
      className="card-surface tap grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 cursor-pointer"
      onClick={!to ? onClick : undefined}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        <Icon size={17} strokeWidth={2.2} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[14px] font-bold leading-tight text-foreground">
          {title}
        </span>
        {description ? (
          <span className="block truncate text-[11.5px] font-medium text-muted-foreground">
            {description}
          </span>
        ) : null}
      </span>
      <span className="flex shrink-0 items-center gap-1.5">
        {value ? (
          <span className="num text-[13px] font-bold text-foreground">{value}</span>
        ) : null}
        {to ? <ChevronLeft size={16} className="text-muted-foreground" /> : null}
      </span>
    </div>
  );

  if (!to) return content;
  return (
    <Link to={to} className="block">
      {content}
    </Link>
  );
}
