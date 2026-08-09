import { createFileRoute } from "@tanstack/react-router";
import { Wallet, LineChart, Receipt, FileText } from "lucide-react";

import {
  CompactListCard,
  DateRangeControl,
  KPICard,
  KPIGrid,
  PageHeader,
  SectionHeader,
} from "@/components/ui-kit";

export const Route = createFileRoute("/revenue")({
  head: () => ({
    meta: [
      { title: "الإيرادات — Teryaq" },
      {
        name: "description",
        content: "شاشات إيرادات Teryaq: تفاصيل الإيراد اليومي، المتاجرة والأرباح، وفواتير المبيعات.",
      },
      { property: "og:title", content: "الإيرادات — Teryaq" },
      { property: "og:description", content: "تفاصيل الإيراد والمتاجرة والأرباح." },
    ],
  }),
  component: RevenuePage,
});

function RevenuePage() {
  return (
    <div className="page-container pb-4">
      <PageHeader
        title="الإيرادات"
        subtitle="الإيراد اليومي والمتاجرة والأرباح"
        action={<DateRangeControl label="اليوم" />}
      />

      <KPIGrid>
        <KPICard label="إيراد اليوم" value="4,850,000" hint="ل.س" icon={Wallet} tone="primary" />
        <KPICard label="أرباح اليوم" value="962,400" hint="ل.س" icon={LineChart} tone="success" />
      </KPIGrid>

      <SectionHeader title="الأقسام" />
      <div className="flex flex-col gap-2">
        <CompactListCard
          title="تفاصيل الإيراد"
          description="تفصيل الإيراد حسب الحركات وطرق الدفع"
          icon={Receipt}
        />
        <CompactListCard
          title="المتاجرة والأرباح"
          description="تكلفة المبيعات وهامش الربح"
          icon={LineChart}
        />
        <CompactListCard
          title="فواتير المبيعات"
          description="استعراض فاتورة برقم الحركة"
          icon={FileText}
        />
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-muted-foreground">
        واجهة تصميم فقط — لم يتم ربط أي بيانات فعلية بعد.
      </p>
    </div>
  );
}
