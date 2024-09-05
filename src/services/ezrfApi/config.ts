export const EZRF_API_URL = "https://ezrf-impact.vercel.app/api/trpc/";
// export const ROUND_ID = "the-sunnys"
// export const API_KEY = "08670c35100892eb840d37c36ed009999b3eb98befcbc42f5fc462b3b8b7b472"

type Round = {
  id: string;
  key: string;
};

const testRound: Round = {
  id: "round-huss-3",
  key: "b16ad95e191a16ecfb9a9ef6f9c3599fec7718ffd237d3fecef52a9390b1dd65",
};

const sunnyRound: Round = {
  id: "the-sunnys",
  key: "bc2edd7987e6cba369add25aa7312875e06a8aa1c2dfe4b37fc05ab58db698e0",
};

export const ROUND = sunnyRound;
