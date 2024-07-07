import clsx from "clsx";
import sortIcon from "@/assets/sortIcon.svg";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";

interface ProjectsTableHeadRowProps {
  projects: ProjectWithMetrics[];
  handleSort: (key: string) => void;
}

export function ProjectsTableHeadRow({
  projects,
  handleSort,
}: ProjectsTableHeadRowProps) {
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

          <img src={sortIcon} alt="Sort Icon" className="size-5" />
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
              <img src={sortIcon} alt="Sort Icon" className="size-5" />
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
          <img src={sortIcon} alt="Sort Icon" className="size-5" />
        </div>
      </th>
    </tr>
  );
}
