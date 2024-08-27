// import clsx from "clsx";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";
// import { Badge } from "./Badge";
import { getMetrics } from "@/services/metrics";

interface ProjectsTableRowProps {
  index: number;
  project: ProjectWithMetrics;
}

export function ProjectsTableRow({ project }: ProjectsTableRowProps) {
  // const oddRow = index % 2 !== 0;

  return (

    <tr className="text-header-title"
      key={project.id}
    >
      <td scope="row">
        <div className="px-12 text-sm">
        {project.rank}
        </div>
      </td>

      <td scope="row" className={"px-6 py-2 md:sticky md:left-0 bg-black font-bold text-lg"}>
        <div className="flex items-center">

          <img
            src={project.profile.profileImageUrl}
            alt={project.name}
            className="mr-2 border border-black rounded-full size-6 shrink-0"
          />
          <span
            className="font-normal truncate text-lg/10"
            title={project.name}
          >
            {project.name}
          </span>
        </div>
      </td>

      {getMetrics().map((metric, index) => (
        <td key={index} className={"px-12 text-sm"}>
          <div className="">
            <span className="">
              {project.metrics[metric] ? project.metrics[metric].toFixed(2).toString() : '0'}
            </span>
          </div>
        </td>
      ))}

 

    </tr>

  );
}
