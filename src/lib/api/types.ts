/**
 * Shape placeholders for the existing API.
 * Kept intentionally loose — real response shapes are confirmed in Phase 2.
 */
export type ConnectionStatus = {
  connected: boolean;
  database: string;
  checkedAt?: string;
};

export type KpiValue = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  tone?: "neutral" | "primary" | "success" | "warning" | "danger" | "info";
};
