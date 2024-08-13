import clsx from "clsx";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { Badge } from "./Badge";
import { getMetrics } from "@/services/metrics";

interface ProjectsTableRowProps {
  index: number;
  project: ProjectWithMetrics;
}

export function ProjectsTableRow({ index, project }: ProjectsTableRowProps) {
  const oddRow = index % 2 !== 0;

  return (
    <tr
      key={project.id}
      className={clsx("h-[55px]", { "bg-white-40": oddRow })}
    >
      <td className="pl-4 rounded-l-2xl" colSpan={2}>
        <div className="flex items-center justify-start w-full">
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

        <td key={index}>
          <div className="flex items-center justify-center w-full">
            <span
              className="font-normal truncate text-lg/10"
              
            >
              {project.metrics[metric] ? project.metrics[metric].toString() : '0'}
              
            </span>
          </div>
        </td>
      ))}
      <td className="pr-4 rounded-r-2xl" colSpan={2}>
        <div className="flex items-center justify-end w-full">
          <Badge value={project.status} />
        </div>
      </td>
    </tr>
  );
}
