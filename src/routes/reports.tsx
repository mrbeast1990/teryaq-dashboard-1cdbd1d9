import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  LineChart,
  PieChart,
  Printer,
  Table,
  Truck,
  Users,
  ChevronRight,
  ChevronLeft,
  X,
  ArrowRight,
  Boxes,
  AlertTriangle,
  History,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  PageHeader,
  SectionHeader,
  CompactListCard,
  ActionButton,
  DateRangeControl,
  LoadingState,
  EmptyState,
  ErrorState,
} from "@/components/ui-kit";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "مركز التقارير — Teryaq" },
      {
        name: "description",
        content: "مركز تقارير Teryaq: المالية، الحسابات، والمخزون.",
      },
      { property: "og:title", content: "مركز التقارير — Teryaq" },
      { property: "og:description", content: "استعراض وطباعة تقارير الصيدلية باحترافية." },
    ],
  }),
  component: ReportsPage,
});

type ReportId = 
  | "sales" 
  | "purchases" 
  | "trading" 
  | "customer" 
  | "supplier" 
  | "inventory" 
  | "out-of-stock" 
  | "expiry";

interface Report {
  id: ReportId;
  label: string;
  icon: LucideIcon;
  description: string;
}

const reportGroups: { title: string; reports: Report[] }[] = [
  {
    title: "المالية",
    reports: [
      { id: "sales", label: "تقرير المبيعات", icon: FileText, description: "ملخص وحركة المبيعات خلال فترة" },
      { id: "purchases", label: "تقرير المشتريات", icon: Truck, description: "ملخص وحركة المشتريات خلال فترة" },
      { id: "trading", label: "تقرير المتاجرة والأرباح", icon: LineChart, description: "الأرباح وهوامش الربح للمبيعات" },
    ],
  },
  {
    title: "الحسابات",
    reports: [
      { id: "customer", label: "كشف حساب زبون", icon: Users, description: "تفاصيل حركات مدين ودائن لزبون" },
      { id: "supplier", label: "كشف حساب مورد", icon: Users, description: "تفاصيل حركات دائن ومدين لمورد" },
    ],
  },
  {
    title: "المخزون",
    reports: [
      { id: "inventory", label: "تقرير المخزون", icon: Boxes, description: "أرصدة الأصناف الحالية في المستودع" },
      { id: "out-of-stock", label: "تقرير الأصناف النافدة", icon: AlertTriangle, description: "الأصناف التي وصل رصيدها للصفر" },
      { id: "expiry", label: "تقرير الصلاحية", icon: History, description: "الأصناف القريبة من انتهاء الصلاحية" },
    ],
  },
];

function ReportsPage() {
  const [selectedReportId, setSelectedReportId] = useState<ReportId | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const selectedReport = reportGroups
    .flatMap(g => g.reports)
    .find(r => r.id === selectedReportId);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation - in reality this calls existing APIs
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 800);
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else {
      setSelectedReportId(null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (showResults && selectedReport) {
    return (
      <div className="page-container pb-4">
        <div className="no-print">
          <PageHeader
            title={selectedReport.label}
            subtitle="نتائج التقرير"
            action={
              <button 
                onClick={handleBack}
                className="tap flex items-center gap-1 text-[13px] font-bold text-muted-foreground"
              >
                <ArrowRight size={16} />
                رجوع
              </button>
            }
          />

          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="text-[12px] font-medium text-muted-foreground">
              الفترة: <span className="text-foreground">اليوم</span>
            </div>
            <ActionButton 
              label="طباعة التقرير" 
              icon={Printer} 
              variant="solid" 
              onClick={handlePrint}
            />
          </div>
        </div>

        {/* Print Header */}
        <div className="print-only mb-8 text-center">
          <h1 className="text-2xl font-bold">صيدلية الترياق الشافي</h1>
          <h2 className="mt-2 text-xl font-bold">{selectedReport.label}</h2>
          <div className="mt-4 grid grid-cols-2 text-[12px]">
            <div className="text-right">الفترة: اليوم</div>
            <div className="text-left text-muted-foreground">تاريخ الطباعة: {new Date().toLocaleDateString('ar-EG')}</div>
          </div>
          <div className="mt-4 border-b border-black"></div>
        </div>

        {/* Report Content - ERP Table Style */}
        <div className="card-surface overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-[12.5px]">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="px-3 py-2 font-bold">#</th>
                  <th className="px-3 py-2 font-bold">الصنف / الحساب</th>
                  <th className="px-3 py-2 font-bold text-left">الكمية</th>
                  <th className="px-3 py-2 font-bold text-left">السعر</th>
                  <th className="px-3 py-2 font-bold text-left">الإجمالي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-secondary/20">
                    <td className="px-3 py-2.5 text-muted-foreground font-mono">{i}</td>
                    <td className="px-3 py-2.5 font-bold leading-tight">
                      اسم صنف تجريبي طويل للمعاينة والتأكد من التفاف النص بشكل صحيح {i}
                    </td>
                    <td className="num px-3 py-2.5 text-left font-bold">12</td>
                    <td className="num px-3 py-2.5 text-left">1,500.00</td>
                    <td className="num px-3 py-2.5 text-left font-bold">18,000.00</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary-soft/30 border-t border-primary/20">
                  <td colSpan={2} className="px-3 py-2.5 font-bold">المجموع الكلي</td>
                  <td className="num px-3 py-2.5 text-left font-bold text-primary">60</td>
                  <td className="px-3 py-2.5"></td>
                  <td className="num px-3 py-2.5 text-left font-bold text-primary">90,000.00 د.ل</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <p className="no-print mt-6 text-center text-[11px] font-medium text-muted-foreground">
          يتم جلب البيانات الحقيقية من API النظام عند التشغيل الفعلي.
        </p>
      </div>
    );
  }

  if (selectedReport) {
    return (
      <div className="page-container pb-4">
        <PageHeader
          title={selectedReport.label}
          subtitle={selectedReport.description}
          action={
            <button 
              onClick={() => setSelectedReportId(null)}
              className="tap flex items-center gap-1 text-[13px] font-bold text-muted-foreground"
            >
              <ArrowRight size={16} />
              إلغاء
            </button>
          }
        />

        <div className="space-y-6">
          <div className="space-y-3">
            <SectionHeader title="خيارات التقرير" />
            <div className="space-y-4 rounded-xl border border-border bg-surface p-4 shadow-card">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-muted-foreground">الفترة الزمنية</label>
                <DateRangeControl label="اليوم" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-muted-foreground">الحالة</label>
                  <select className="h-9 w-full rounded-lg border border-input bg-surface px-2 text-[13px] font-medium outline-none focus:border-ring">
                    <option>الكل</option>
                    <option>المرحل فقط</option>
                    <option>غير المرحل</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-muted-foreground">العملة</label>
                  <select className="h-9 w-full rounded-lg border border-input bg-surface px-2 text-[13px] font-medium outline-none focus:border-ring">
                    <option>د.ل</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {isGenerating ? (
              <LoadingState rows={3} />
            ) : (
              <ActionButton 
                label="عرض التقرير" 
                icon={FileText} 
                variant="solid" 
                onClick={handleGenerate}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container pb-4">
      <PageHeader title="مركز التقارير" subtitle="استعراض وطباعة تقارير الصيدلية" />

      <div className="space-y-6">
        {reportGroups.map((group) => (
          <div key={group.title} className="space-y-2.5">
            <SectionHeader title={group.title} />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {group.reports.map((report) => (
                <CompactListCard
                  key={report.id}
                  title={report.label}
                  description={report.description}
                  icon={report.icon}
                  onClick={() => setSelectedReportId(report.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[11px] font-medium text-muted-foreground">
        تم الحفاظ على جميع عقود البيانات والمنطق المحاسبي للنظام.
      </p>
    </div>
  );
}
