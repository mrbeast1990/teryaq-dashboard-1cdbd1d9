import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  LineChart,
  PieChart,
  Printer,
  Table,
  Truck,
  Users,
} from "lucide-react";
import {
  PageHeader,
  SectionHeader,
  CompactListCard,
  ActionButton,
} from "@/components/ui-kit";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "مركز التقارير — Teryaq" },
      {
        name: "description",
        content: "مركز تقارير Teryaq: المالية، الحسابات، والمخزون.",
      },
    ],
  }),
  component: ReportsPage,
});

const reportGroups = [
  {
    title: "المالية",
    reports: [
      { id: "sales", label: "تقرير المبيعات", icon: FileText },
      { id: "purchases", label: "تقرير المشتريات", icon: Truck },
      { id: "trading", label: "تقرير المتاجرة والأرباح", icon: LineChart },
    ],
  },
  {
    title: "الحسابات",
    reports: [
      { id: "customer", label: "كشف حساب زبون", icon: Users },
      { id: "supplier", label: "كشف حساب مورد", icon: Users },
    ],
  },
  {
    title: "المخزون",
    reports: [
      { id: "inventory", label: "تقرير المخزون", icon: Table },
      { id: "out-of-stock", label: "تقرير الأصناف النافدة", icon: PieChart },
      { id: "expiry", label: "تقرير الصلاحية", icon: FileText },
    ],
  },
];

function ReportsPage() {
  return (
    <div className="page-container pb-4">
      <PageHeader title="مركز التقارير" subtitle="استعراض وطباعة تقارير الصيدلية" />

      {reportGroups.map((group) => (
        <div key={group.title} className="mb-6">
          <SectionHeader title={group.title} />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {group.reports.map((report) => (
              <CompactListCard
                key={report.id}
                title={report.label}
                icon={report.icon}
                to="#"
              />
            ))}
          </div>
        </div>
      ))}

      <p className="mt-8 text-center text-[11px] font-medium text-muted-foreground">
        تمت المحافظة على جميع العقود والمنطق الحالي للتقارير.
      </p>
    </div>
  );
}
