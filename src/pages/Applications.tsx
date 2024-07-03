import { useEffect, useMemo, useState } from "react";
import { Column, Table } from "@/components/Table";
import loadingImg from "@/assets/loading.gif";

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

interface ApplicationRow {
  name: string;
  metric1: string;
  metric2: string;
  metric3: string;
  status: React.ReactNode;
}

const columns: Array<Column<ApplicationRow>> = [
  {
    key: "name",
    label: "Project name",
  },
  {
    key: "metric1",
    label: "Metric",
    sort: true,
  },
  {
    key: "metric2",
    label: "Metric",
    sort: true,
  },
  {
    key: "metric3",
    label: "Metric",
    sort: true,
  },
  {
    key: "status",
    label: "Application status",
    sort: true,
    type: "badge",
  },
];

export function Applications() {
  const { error, loading, applications } = useApplications();

  const rows: Array<ApplicationRow> = useMemo(
    () =>
      applications.map((application, index) => ({
        name: application.metadata?.name || "",
        metric1: `${index + 1}`,
        metric2: `${index + 2}`,
        metric3: `${index + 3}`,
        status: application.status,
      })),
    [applications]
  );

  return (
    <div className={"xl:w-[1280px] min-w-[956px] m-auto"}>
      <h2 className="text-2xl mb-4">
        All applications {!error && !loading && `(${applications.length})`}
      </h2>

      <div className="px-4 py-6 rounded-3xl bg-white-40 applications-container">
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
          <Table columns={columns} data={rows} />
        )}
      </div>
    </div>
  );
}
