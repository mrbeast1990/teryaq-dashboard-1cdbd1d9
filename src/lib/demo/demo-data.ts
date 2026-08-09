/**
 * ⚠️ DEMO / MOCK DATA — UI PREVIEW ONLY (Phase 1).
 * Isolated on purpose: delete this file once the real API layer
 * (src/lib/api) is wired up. No business logic lives here.
 */
import type { ConnectionStatus, KpiValue } from "@/lib/api/types";

export const DEMO_CONNECTION: ConnectionStatus = {
  connected: true,
  database: "AlmohasebSQL",
};

export const DEMO_KPIS_PRIMARY: KpiValue[] = [
  { id: "revenue-today", label: "إيراد اليوم", value: "4,850,000", hint: "ل.س", tone: "primary" },
  { id: "profit-today", label: "أرباح اليوم", value: "962,400", hint: "ل.س", tone: "success" },
  { id: "movements", label: "عدد الحركات", value: "137", hint: "فاتورة", tone: "info" },
  { id: "customer-balances", label: "أرصدة الزبائن", value: "18,240,000", hint: "مدين", tone: "neutral" },
];

export const DEMO_KPIS_SECONDARY: KpiValue[] = [
  { id: "supplier-dues", label: "مستحقات الموردين", value: "9,715,000", hint: "دائن", tone: "warning" },
  { id: "low-stock", label: "أصناف منخفضة المخزون", value: "42", hint: "صنف", tone: "warning" },
  { id: "out-of-stock", label: "أصناف نفدت", value: "11", hint: "صنف", tone: "danger" },
  { id: "expiry", label: "قرب انتهاء الصلاحية", value: "27", hint: "خلال 60 يوم", tone: "danger" },
];
