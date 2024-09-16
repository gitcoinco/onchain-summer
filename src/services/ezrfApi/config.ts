const productionUrl = "https://ezrf-impact.vercel.app";

export const EZRF_API_URL = `${productionUrl}/api/trpc/`;
// export const EZRF_API_URL = `http://localhost:3000/api/trpc/`;

export const SHARE_URL = "https://metrics.thesunnyawards.fun/";
// export const SHARE_URL = "localhost:3000/";

type Round = {
  id: string;
  key: string;
};

const sunnyRound: Round = {
  id: "the-sunnys",
  key: "bc2edd7987e6cba369add25aa7312875e06a8aa1c2dfe4b37fc05ab58db698e0",
};

export const ROUND = sunnyRound;
