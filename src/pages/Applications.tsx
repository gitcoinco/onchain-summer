import "@/styles/applications.css";
import "@/styles/index.css";
import loadingImg from "@/assets/loading.gif";
import { useEffect, useState } from "react";

type Application = {
  metadata: {
    name: string;
  };
  status: string;
};

const API_URL = "https://ezrf-impact.vercel.app/api/trpc/";

const encodeInput = (json: unknown = {}) =>
  encodeURIComponent(JSON.stringify({ json }));

const callApi = async (path: string) =>
  fetch(API_URL + path, {
    headers: {
      "content-type": "application/json",
      "round-id": "on-chain-summer-test",
    },
  });

function useApplications() {
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

export function Applications() {
  const { error, loading, applications } = useApplications();

  return (
    <div>
      <h2 className="text-2xl mb-4">
        All applications {!error && !loading && `(${applications.length})`}
      </h2>

      <div className="applications-container">
        {loading && (
          <div className="text-center">
            <img
              src={loadingImg}
              alt="Loading..."
              style={{ height: 20, margin: "0 auto" }}
            />
          </div>
        )}

        {!loading && error !== undefined && (
          <div className="text-center">Something went wrong</div>
        )}

        {!loading && error === undefined && (
          <table className="table-auto">
            <thead>
              <tr>
                <th colSpan={2}>
                  <span className="hidden md:inline">Project </span>
                  Name
                </th>
                <th>Metric</th>
                <th>Metric</th>
                <th>Metric</th>
                <th>
                  <span className="hidden md:inline">Application </span>Status
                </th>
              </tr>
            </thead>

            <tbody>
              {applications.map((a, index) => (
                <tr className={index % 2 === 0 ? "even" : "odd"} key={index}>
                  <td colSpan={2}>{a.metadata?.name}</td>
                  <td>Metric</td>
                  <td>Metric</td>
                  <td>Metric</td>
                  <td>
                    <span className={`badge ${a.status}`}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
