import { Link } from "@tanstack/react-router";
import { Settings, Database } from "lucide-react";
import { DEMO_CONNECTION } from "@/lib/demo/demo-data";

const navLinks = [
  { to: "/", label: "الرئيسية", exact: true },
  { to: "/revenue", label: "الإيرادات", exact: false },
  { to: "/accounts", label: "الحسابات", exact: false },
  { to: "/items", label: "الأصناف", exact: false },
  { to: "/more", label: "المزيد", exact: false },
] as const;

export function AppHeader() {
  const connected = DEMO_CONNECTION.connected;

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="page-container grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:max-w-6xl">

        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-[15px] font-extrabold leading-none">T</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[17px] font-extrabold leading-none tracking-tight text-foreground">
              Teryaq
            </span>
            <span className="block truncate text-[10px] font-medium leading-4 text-muted-foreground">
              إدارة الصيدلية
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5">
          <span
            className={[
              "flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-semibold",
              connected
                ? "border-success/25 bg-success-soft text-success"
                : "border-destructive/25 bg-destructive-soft text-destructive",
            ].join(" ")}
          >
            <Database size={12} strokeWidth={2.4} />
            <span className="num">{DEMO_CONNECTION.database}</span>
            <span aria-hidden>{connected ? "✓" : "✕"}</span>
          </span>
          <Link
            to="/more"
            aria-label="الإعدادات"
            className="tap grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-secondary"
          >
            <Settings size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
