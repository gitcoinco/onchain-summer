// const localUrl = "http://localhost:3000";
const productionUrl = "https://ezrf-impact.vercel.app";


// export const EZRF_API_URL = `${productionUrl}/api/trpc/`;

export const EZRF_API_URL = `http://localhost:3000/api/trpc/`;

// export const SHARE_URL = "https://metrics.thesunnyawards.fun/";
export const SHARE_URL = "http://localhost:3000/";

type Round = {
  id: string;
  key: string;
};

// const testRound: Round = {
//   id: "round-huss-3",
//   key: "b16ad95e191a16ecfb9a9ef6f9c3599fec7718ffd237d3fecef52a9390b1dd65",
// };

const sunnyRound: Round = {
  id: "the-sunnys",
  key: "bc2edd7987e6cba369add25aa7312875e06a8aa1c2dfe4b37fc05ab58db698e0",
};

export const ROUND = sunnyRound;
