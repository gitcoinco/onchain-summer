import { useEffect, useState } from "react";

const API_URL = "https://ezrf-impact.vercel.app/api/trpc/";

type Application = {
  metadata: {
    name: string;
  };
  status: string;
};

const encodeInput = (json: unknown = {}) =>
  encodeURIComponent(JSON.stringify({ json }));

const callApi = async (path: string) =>
  fetch(API_URL + path, {
    headers: {
      "content-type": "application/json",
      "round-id": "on-chain-summer-test",
    },
  });

export function useApplications() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    callApi(
      "projects.list?input=" +
        encodeInput({
          orderBy: "time",
          sortOrder: "asc",
          limit: 10,
          skip: 0,
        })
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setApplications(data.result.data.json as Application[]);
        });
      } else {
        setError(new Error("Failed to fetch applications"));
      }

      setLoading(false);
    });
  }, []);

  return { error, loading, applications };
}
