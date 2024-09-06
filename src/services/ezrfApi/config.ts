// const localUrl = "http://localhost:3000";
const productionUrl = "https://ezrf-impact.vercel.app";

export const EZRF_API_URL =
  import.meta.env.VITE_API_URL || `${productionUrl}/api/trpc/`;

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

const envRound = {
  id: import.meta.env.VITE_ROUND_ID,
  key: import.meta.env.VITE_API_KEY,
};

console.log({ EZRF_API_URL });

export const ROUND = envRound.id && envRound.key ? envRound : sunnyRound;
