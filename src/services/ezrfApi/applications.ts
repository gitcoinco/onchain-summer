import { EZRF_API_URL, encodeInput } from "./config";
import { Application } from "./types";

export const fetchApplications = async () => {
  const res = await fetch(
    EZRF_API_URL +
      "projects.list?input=" +
      encodeInput({
        orderBy: "time",
        sortOrder: "asc",
        limit: 10,
        skip: 0,
      }),
    {
      headers: {
        "content-type": "application/json",
        "round-id": "on-chain-summer-test",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data = await res.json();
  return data.result.data.json as Application[];
};
