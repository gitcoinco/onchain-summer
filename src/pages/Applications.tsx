import { useMemo } from "react";
import { Column, Table } from "@/components/Table";
import loadingImg from "@/assets/loading.gif";
import { useApplications } from "@/hooks/useApplications";
import { ApplicationCard } from "@/components/ApplicationList/ApplicationCard";
import { ApplicationData } from "@/types";

const columns: Array<Column<ApplicationData>> = [
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
  const { isError, isPending, data: applications } = useApplications();

  const nApplications =
    applications?.length !== undefined ? `(${applications.length})` : "";

  const applicationsData: Array<ApplicationData> = useMemo(
    () =>
      applications?.map((application, index) => ({
        name: application.metadata?.name || "",
        metric1: `${index + 1}`,
        metric2: `${index + 2}`,
        metric3: `${index + 3}`,
        status: application.status,
      })) || [],
    [applications]
  );

  return (
    <div className={"w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
      <h2 className="text-2xl mb-4">All applications {nApplications}</h2>

      <div className="lg:px-4 lg:py-6 lg:rounded-3xl lg:bg-white-40">
        {isPending && (
          <div className="text-center">
            <img
              src={loadingImg}
              alt="Loading..."
              style={{ height: 20, margin: "0 auto" }}
            />
          </div>
        )}

        {!isPending && isError && (
          <div className="text-center">Something went wrong</div>
        )}

        {!isPending && !isError && (
          <>
            <div className="hidden lg:block">
              <Table columns={columns} data={applicationsData} />
            </div>
            <div className="lg:hidden flex flex-col gap-2">
              {applicationsData.map((application) => (
                <ApplicationCard application={application} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
