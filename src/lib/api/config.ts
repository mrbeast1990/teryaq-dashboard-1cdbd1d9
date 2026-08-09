/**
 * Central API configuration.
 * The base URL is ALWAYS read from the environment (VITE_API_BASE_URL).
 * Never hard-code hosts, IPs or ports inside components.
 */
export const API_BASE_URL: string = (
  import.meta.env["VITE_API_BASE_URL"] ?? ""
).replace(/\/$/, "");

/** Phase 1: no real requests are made yet, mock data is used for UI preview. */
export const USE_MOCK_DATA: boolean =
  import.meta.env["VITE_USE_MOCK_DATA"] !== "false";

export const API_TIMEOUT_MS = 20000;

export const isApiConfigured = () => API_BASE_URL.length > 0;
