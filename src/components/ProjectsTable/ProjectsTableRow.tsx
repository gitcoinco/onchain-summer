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
    <>
      <tr className="text-lg"
        key={project.id}
      >
      {/* rounded-l-3xl bg-transparent-sunset */}
        <td scope="row" className={clsx("px-6 py-4", {"rounded-l-3xl bg-transparent-sunset": oddRow})}>
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
          <td key={index} className={clsx("px-12", {"bg-transparent-sunset": oddRow})}>
            <div className="">
              <span className="">
                {project.metrics[metric] ? project.metrics[metric].toFixed(2).toString() : '0'}
              </span>
            </div>
          </td>
        ))}

        <td className={clsx("", {"rounded-r-3xl bg-transparent-sunset": oddRow})} colSpan={2}>
          <div className="flex items-center ">
            <Badge value={project.status} />
          </div>
        </td>

        

      </tr>

   </>
  );
}
