import { createFileRoute } from "@tanstack/react-router";
import { Users, Truck, FileText } from "lucide-react";

import {
  CompactListCard,
  KPICard,
  KPIGrid,
  PageHeader,
  SearchInput,
  SectionHeader,
} from "@/components/ui-kit";

export const Route = createFileRoute("/accounts")({
  head: () => ({
    meta: [
      { title: "الحسابات — Teryaq" },
      {
        name: "description",
        content: "حسابات Teryaq: أرصدة الزبائن ومستحقات الموردين وفواتير المشتريات.",
      },
      { property: "og:title", content: "الحسابات — Teryaq" },
      { property: "og:description", content: "أرصدة الزبائن ومستحقات الموردين." },
    ],
  }),
  component: AccountsPage,
});

function AccountsPage() {
  return (
    <div className="page-container pb-4">
      <PageHeader title="الحسابات" subtitle="الزبائن والموردين" />

      <SearchInput placeholder="بحث في الحسابات…" />

      <KPIGrid>
        <KPICard label="أرصدة الزبائن" value="18,240,000" hint="مدين" icon={Users} />
        <KPICard label="مستحقات الموردين" value="9,715,000" hint="دائن" icon={Truck} tone="warning" />
      </KPIGrid>

      <SectionHeader title="اختر القسم" />
      <div className="flex flex-col gap-2">
        <CompactListCard title="الزبائن" description="أرصدة وكشوف حساب الزبائن" icon={Users} />
        <CompactListCard title="الموردين" description="أرصدة ومستحقات الموردين" icon={Truck} />
        <CompactListCard
          title="فواتير المشتريات"
          description="استعراض فاتورة برقم الحركة"
          icon={FileText}
        />
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-muted-foreground">
        هيكل واجهة فقط — القوائم الفعلية تُضاف في المرحلة التالية.
      </p>
    </div>
  );
}
