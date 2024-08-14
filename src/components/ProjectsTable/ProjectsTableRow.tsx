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
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        key={project.id}
      >
        

        <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
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
          <td key={index}>
            <div className="">
              <span className="">
                {project.metrics[metric] ? project.metrics[metric].toFixed(2).toString() : '0'}
              </span>
            </div>
          </td>
        ))}

        <td className="rounded-r-2xl" colSpan={2}>
          <div className="flex items-center ">
            <Badge value={project.status} />
          </div>
        </td>

        

      </tr>

   </>
  );
}
