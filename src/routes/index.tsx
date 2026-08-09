import { createFileRoute } from "@tanstack/react-router";
import {
  Wallet,
  TrendingUp,
  Receipt,
  Users,
  Truck,
  PackageMinus,
  PackageX,
  CalendarClock,
  Boxes,
  ScanSearch,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  ActionButton,
  DateRangeControl,
  KPICard,
  KPIGrid,
  PageHeader,
  SectionHeader,
} from "@/components/ui-kit";
import { DEMO_KPIS_PRIMARY, DEMO_KPIS_SECONDARY } from "@/lib/demo/demo-data";
import type { KpiTone } from "@/components/ui-kit/KPICard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نظرة عامة — Teryaq" },
      {
        name: "description",
        content: "لوحة Teryaq: إيراد اليوم، الأرباح، الحركات، أرصدة الزبائن والموردين وحالة المخزون.",
      },
      { property: "og:title", content: "نظرة عامة — Teryaq" },
      {
        property: "og:description",
        content: "لوحة مؤشرات مالية مدمجة لإدارة الصيدلية.",
      },
    ],
  }),
  component: HomeDashboard,
});

const icons: Record<string, LucideIcon> = {
  "revenue-today": Wallet,
  "profit-today": TrendingUp,
  movements: Receipt,
  "customer-balances": Users,
  "supplier-dues": Truck,
  "low-stock": PackageMinus,
  "out-of-stock": PackageX,
  expiry: CalendarClock,
};

const quickActions: { label: string; icon: LucideIcon; to: string }[] = [
  { label: "إيراد اليوم", icon: Wallet, to: "/revenue" },
  { label: "حسابات الزبائن", icon: Users, to: "/accounts" },
  { label: "حسابات الموردين", icon: Truck, to: "/accounts" },
  { label: "المخزون", icon: Boxes, to: "/items" },
  { label: "تتبع صنف", icon: ScanSearch, to: "/items" },
  { label: "المتاجرة والأرباح", icon: LineChart, to: "/revenue" },
];

function HomeDashboard() {
  return (
    <div className="page-container pb-4">
      <PageHeader
        title="نظرة عامة"
        subtitle="ملخص أداء الصيدلية اليوم"
        action={<DateRangeControl label="اليوم" />}
      />

      <KPIGrid>
        {DEMO_KPIS_PRIMARY.map((kpi) => (
          <KPICard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            hint={kpi.hint}
            tone={(kpi.tone ?? "neutral") as KpiTone}
            icon={icons[kpi.id] ?? Wallet}
          />
        ))}
      </KPIGrid>

      <SectionHeader title="التزامات وتنبيهات" />
      <KPIGrid>
        {DEMO_KPIS_SECONDARY.map((kpi) => (
          <KPICard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            hint={kpi.hint}
            tone={(kpi.tone ?? "neutral") as KpiTone}
            icon={icons[kpi.id] ?? Wallet}
          />
        ))}
      </KPIGrid>

      <SectionHeader title="إجراءات سريعة" />
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {quickActions.map((action) => (
          <ActionButton
            key={action.label}
            label={action.label}
            icon={action.icon}
            to={action.to}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-muted-foreground">
        القيم المعروضة تجريبية لأغراض التصميم فقط — سيتم ربطها لاحقاً بواجهة Teryaq API.
      </p>
    </div>
  );
}
