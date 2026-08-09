/**
 * All endpoint paths of the existing Teryaq SQL Connector API in one place.
 * Nothing here is called in Phase 1 — this is the contract surface only.
 */
export const endpoints = {
  status: () => "/api/status",
  revenueDetails: () => "/api/revenue-details",
  tradingProfit: () => "/api/trading-profit",
  customers: () => "/api/customers",
  suppliers: () => "/api/suppliers",
  itemsStock: () => "/api/items/stock",
  itemsTrack: () => "/api/items/track",
  itemsOutOfStock: () => "/api/items/out-of-stock",
  itemsExpiry: () => "/api/items/expiry",
  salesInvoice: (movementNo: string | number) =>
    `/api/invoices/sales/${movementNo}`,
  purchaseInvoice: (movementNo: string | number) =>
    `/api/invoices/purchases/${movementNo}`,
} as const;

export type EndpointKey = keyof typeof endpoints;
