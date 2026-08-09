import { API_BASE_URL, API_TIMEOUT_MS, isApiConfigured } from "./config";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
  signal?: AbortSignal;
};

function buildUrl(
  path: string,
  params?: RequestOptions["params"],
): string {
  const base = API_BASE_URL || "";
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;
  if (!params) return url;
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      search.append(key, String(value));
    }
  }
  const qs = search.toString();
  return qs ? `${url}?${qs}` : url;
}

/**
 * Single entry point for every call to the existing Teryaq SQL Connector API.
 * Not used in Phase 1 (UI only) but ready for the real wiring.
 */
export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  if (!isApiConfigured()) {
    throw new ApiError("VITE_API_BASE_URL is not configured", 0);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await fetch(buildUrl(path, options.params), {
      method: options.method ?? "GET",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: options.signal ?? controller.signal,
    });

    if (!response.ok) {
      throw new ApiError(
        `Request failed: ${response.status} ${response.statusText}`,
        response.status,
      );
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

export const api = {
  get: <T>(path: string, params?: RequestOptions["params"]) =>
    apiRequest<T>(path, { method: "GET", params }),
  post: <T>(path: string, body?: unknown) =>
    apiRequest<T>(path, { method: "POST", body }),
};
