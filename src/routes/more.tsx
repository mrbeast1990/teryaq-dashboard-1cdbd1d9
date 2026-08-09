import { createFileRoute } from "@tanstack/react-router";
import { Database, Settings, Info, FileText } from "lucide-react";

import { CompactListCard, PageHeader, SectionHeader, StatusBadge } from "@/components/ui-kit";
import { DEMO_CONNECTION } from "@/lib/demo/demo-data";
import { API_BASE_URL } from "@/lib/api/config";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "المزيد — Teryaq" },
      {
        name: "description",
        content: "إعدادات Teryaq وحالة الاتصال بقاعدة البيانات ومعلومات التطبيق.",
      },
      { property: "og:title", content: "المزيد — Teryaq" },
      { property: "og:description", content: "الإعدادات وحالة الاتصال." },
    ],
  }),
  component: MorePage,
});

function MorePage() {
  return (
    <div className="page-container pb-4">
      <PageHeader title="المزيد" subtitle="الإعدادات وحالة النظام" />

      <div className="card-surface grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">
          <Database size={17} />
        </span>
        <span className="min-w-0">
          <span className="block text-[14px] font-bold text-foreground">
            {DEMO_CONNECTION.database}
          </span>
          <span className="block truncate text-[11.5px] font-medium text-muted-foreground">
            {API_BASE_URL || "لم يتم ضبط عنوان الـ API بعد"}
          </span>
        </span>
        <StatusBadge
          label={DEMO_CONNECTION.connected ? "متصل" : "غير متصل"}
          tone={DEMO_CONNECTION.connected ? "success" : "danger"}
        />
      </div>

      <SectionHeader title="عام" />
      <div className="flex flex-col gap-2">
        <CompactListCard title="الإعدادات" description="التفضيلات وإعدادات العرض" icon={Settings} />
        <CompactListCard title="التقارير" description="تقارير الإيراد والمخزون" icon={FileText} />
        <CompactListCard title="حول التطبيق" description="Teryaq — المرحلة الأولى" icon={Info} />
      </div>
    </div>
  );
}
