// import clsx from "clsx";
import { ProjectWithRank } from "@/services/ezrfApi/types";
// import { Badge } from "./Badge";
import { getMetrics, getRound } from "@/services/metrics";

interface ProjectsTableRowProps {
  index: number;
  project: ProjectWithRank;
  onRowClick: (project: ProjectWithRank) => void;
}

export function ProjectsTableRow({ project, onRowClick }: ProjectsTableRowProps) {
  // const oddRow = index % 2 !== 0;

  return (
    <tr className="text-header-title" key={project.id} onClick={() => {onRowClick(project)}} >
      <td
        scope="row"
        className={"px-6 py-2 md:sticky md:left-0 bg-black font-bold text-lg truncate "}
        >
        <div className="flex items-center">
          <img
            src={project.metadata?.sunnyAwards?.avatarUrl}
            alt={project.name}
            className="mr-2 border border-black rounded-full size-6 shrink-0"
          />
          <span
            className="text-xs font-normal truncate max-w-32"
            title={project.name}>
            {project.name}
          </span>
        </div>
      </td>

      {getMetrics().map((metric, index) => (
        <td key={index} className={"px-12 text-sm"}>
          <div className="">
            <span className="">
              {project.metrics?.[metric]
                ? project.metrics[metric].toFixed(getRound(metric)).toString()
                : "0"}
            </span>
          </div>
        </td>
      ))}
    </tr>
  );
}
