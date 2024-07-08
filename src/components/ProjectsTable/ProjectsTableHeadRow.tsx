import clsx from "clsx";
import sortIcon from "@/assets/sortIcon.svg";
import sortIconAsc from "@/assets/sortIconAsc.svg";
import sortIconDesc from "@/assets/sortIconDesc.svg";
import { SortConfig, useProjectsContext } from "@/contexts/projectsContext";

const SortIcon = ({
  field,
  sortConfig,
}: {
  field: string;
  sortConfig: SortConfig;
}) => {
  if (field !== sortConfig.key) {
    return <img src={sortIcon} alt="Sort Icon" className="size-5" />;
  } else {
    return (
      <img
        src={sortConfig.direction === "ascending" ? sortIconAsc : sortIconDesc}
        alt="Sort Icon"
        className="size-5"
      />
    );
  }
};

export function ProjectsTableHeadRow() {
  const { projects, handleSort, sortConfig } = useProjectsContext();

  return (
    <tr className="h-[55px] bg-white-50">
      <th
        className="rounded-l-xl pl-4"
        colSpan={2}
        onClick={() => handleSort("name")}
      >
        <div
          className={clsx(
            "flex items-center justify-start gap",
            "w-full",
            "cursor-pointer"
          )}
        >
          <span
            className="font-medium text-2xl/10 truncate"
            title={"Project Name"}
          >
            {"Project Name"}
          </span>

          <SortIcon field="name" sortConfig={sortConfig} />
        </div>
      </th>
      {projects.length > 0 &&
        Object.keys(projects[0].metrics).map((metric) => (
          <th
            key={metric}
            className="pl-2"
            onClick={() => handleSort(`metrics.${metric}`)}
          >
            <div
              className={clsx(
                "flex items-center w-full gap",
                "justify-center",
                "cursor-pointer"
              )}
            >
              <span className="font-medium text-2xl/10 truncate" title={metric}>
                {metric}
              </span>
              <SortIcon field={`metrics.${metric}`} sortConfig={sortConfig} />
            </div>
          </th>
        ))}
      <th
        className="rounded-r-xl pl-2 pr-4"
        colSpan={2}
        onClick={() => handleSort("status")}
      >
        <div
          className={clsx(
            "flex items-center justify-end gap",
            "w-full",
            "cursor-pointer"
          )}
        >
          <span className="font-medium text-2xl/10 truncate" title={"Status"}>
            {"Status"}
          </span>
          <SortIcon field="status" sortConfig={sortConfig} />
        </div>
      </th>
    </tr>
  );
}
