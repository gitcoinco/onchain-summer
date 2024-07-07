import { useMemo, useState } from "react";
import loadingImg from "@/assets/loading.gif";
import { useApplicationsMetrics } from "@/hooks";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { ProjectsTable } from "@/components/ProjectsTable";
import { ProjectsList } from "@/components/ProjectsList";

const sortProjects = (
  projects: ProjectWithMetrics[] | undefined,
  sortConfig: {
    key: string;
    direction: "ascending" | "descending";
  }
) => {
  if (!projects) return [];

  return [...projects].sort((a, b) => {
    if (sortConfig.key) {
      let aValue: any;
      let bValue: any;

      if (sortConfig.key.startsWith("metrics.")) {
        const metricKey = sortConfig.key.replace("metrics.", "");
        aValue = a.metrics[metricKey];
        bValue = b.metrics[metricKey];
      } else {
        aValue = a[sortConfig.key as keyof ProjectWithMetrics];
        bValue = b[sortConfig.key as keyof ProjectWithMetrics];
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "ascending"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "ascending"
          ? aValue - bValue
          : bValue - aValue;
      }
    }
    return 0;
  });
};

export function Applications() {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  }>({ key: "name", direction: "ascending" });

  const { isError, isPending, data: projects } = useApplicationsMetrics();

  const sortedProjects = useMemo(
    () => sortProjects(projects, sortConfig),
    [projects, sortConfig]
  );

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const nApplications = projects?.length || 0;

  return (
    <div className={"w-full mx-auto px-4 sm:px-6 lg:px-8"}>
      <h2 className="text-2xl mb-4">All applications {`(${nApplications})`}</h2>

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
              <ProjectsTable
                projects={sortedProjects}
                handleSort={requestSort}
              />
            </div>
            <div className="lg:hidden flex flex-col gap-2">
              <ProjectsList
                projects={sortedProjects}
                handleSort={requestSort}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
