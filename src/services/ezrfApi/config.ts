export const EZRF_API_URL = "https://ezrf-impact.vercel.app/api/trpc/";

export const encodeInput = (json: unknown = {}) =>
  encodeURIComponent(JSON.stringify({ json }));
