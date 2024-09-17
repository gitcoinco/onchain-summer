const productionUrl = "https://ezrf-impact.vercel.app";

export const EZRF_API_URL = `${productionUrl}/api/trpc/`;
// export const EZRF_API_URL = `http://localhost:3000/api/trpc/`;

export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3001' : 'https://zizzamia.xyz';

export const SHARE_URL = NEXT_PUBLIC_URL + "/";

export const OG_TITLE = 'Metrics | The Sunny Awards';
export const OG_DESCRIPTION = 'Metrics for The Sunny Awards';
export const OG_IMAGES = [`${NEXT_PUBLIC_URL}/share.png`];

type Round = {
  id: string;
  key: string;
};

const sunnyRound: Round = {
  id: "the-sunnys",
  key: "bc2edd7987e6cba369add25aa7312875e06a8aa1c2dfe4b37fc05ab58db698e0",
};

export const ROUND = sunnyRound;
