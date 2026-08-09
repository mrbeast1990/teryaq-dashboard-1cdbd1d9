import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backTo?: string;
  action?: ReactNode;
};

export function PageHeader({ title, subtitle, backTo, action }: PageHeaderProps) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 pb-2 pt-3">
      <div className="flex min-w-0 items-center gap-2">
        {backTo ? (
          <Link
            to={backTo}
            aria-label="رجوع"
            className="tap grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted-foreground"
          >
            <ChevronRight size={17} />
          </Link>
        ) : null}
        <div className="min-w-0">
          <h1 className="truncate text-[19px] font-extrabold leading-tight tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle ? (
            <p className="truncate text-[12px] font-medium text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
