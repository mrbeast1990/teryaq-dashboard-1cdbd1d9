import { Link } from "@tanstack/react-router";
import { Home, TrendingUp, Users, Package, LayoutGrid, FileText } from "lucide-react";

const items = [
  { to: "/", label: "الرئيسية", icon: Home, exact: true },
  { to: "/revenue", label: "الإيرادات", icon: TrendingUp, exact: false },
  { to: "/accounts", label: "الحسابات", icon: Users, exact: false },
  { to: "/items", label: "الأصناف", icon: Package, exact: false },
  { to: "/reports", label: "التقارير", icon: FileText, exact: false },
  { to: "/more", label: "المزيد", icon: LayoutGrid, exact: false },
] as const;

export function BottomNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md shadow-[var(--shadow-nav)] md:hidden">
      <div className="page-container grid grid-cols-5 gap-1 pb-[env(safe-area-inset-bottom)]">
        {items.map(({ to, label, icon: Icon, exact }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact }}
            className="tap group flex flex-col items-center gap-1 rounded-lg py-2 text-muted-foreground data-[status=active]:text-primary"
          >
            <Icon size={20} strokeWidth={2} />
            <span className="text-[10.5px] font-semibold leading-none">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
