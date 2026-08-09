import { createFileRoute } from "@tanstack/react-router";
import { Boxes, ScanSearch, PackageX, CalendarClock } from "lucide-react";

import {
  CompactListCard,
  KPICard,
  KPIGrid,
  PageHeader,
  SearchInput,
  SectionHeader,
} from "@/components/ui-kit";

export const Route = createFileRoute("/items")({
  head: () => ({
    meta: [
      { title: "الأصناف — Teryaq" },
      {
        name: "description",
        content: "أصناف Teryaq: المخزون، تتبع صنف، الأصناف النافدة وقرب انتهاء الصلاحية.",
      },
      { property: "og:title", content: "الأصناف — Teryaq" },
      { property: "og:description", content: "المخزون وتتبع الأصناف والتنبيهات." },
    ],
  }),
  component: ItemsPage,
});

function ItemsPage() {
  return (
    <div className="page-container pb-4">
      <PageHeader title="الأصناف" subtitle="المخزون والتتبع والتنبيهات" />

      <SearchInput placeholder="بحث عن صنف…" />

      <KPIGrid>
        <KPICard label="أصناف منخفضة" value="42" hint="صنف" icon={Boxes} tone="warning" />
        <KPICard label="أصناف نفدت" value="11" hint="صنف" icon={PackageX} tone="danger" />
      </KPIGrid>

      <SectionHeader title="الأقسام" />
      <div className="flex flex-col gap-2">
        <CompactListCard title="المخزون" description="أرصدة الأصناف الحالية" icon={Boxes} />
        <CompactListCard title="تتبع صنف" description="حركة صنف محدد" icon={ScanSearch} />
        <CompactListCard title="أصناف نفدت" description="أصناف برصيد صفر" icon={PackageX} />
        <CompactListCard
          title="قرب الانتهاء"
          description="أصناف قاربت تاريخ انتهاء الصلاحية"
          icon={CalendarClock}
        />
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-muted-foreground">
        هيكل تنقل فقط في هذه المرحلة.
      </p>
    </div>
  );
}
