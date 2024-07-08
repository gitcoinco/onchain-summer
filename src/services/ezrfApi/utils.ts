export const encodeInput = (json: unknown = {}) =>
  encodeURIComponent(JSON.stringify({ json }));
