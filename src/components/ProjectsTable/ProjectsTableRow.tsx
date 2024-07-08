import clsx from "clsx";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { Badge } from "./Badge";

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
      <td className="rounded-l-2xl pl-4" colSpan={2}>
        <div className="flex items-center justify-start w-full">
          <img
            src={project.profile.profileImageUrl}
            alt={project.name}
            className="size-6 shrink-0 rounded-full mr-2 border border-black"
          />
          <span
            className="font-normal text-lg/10 truncate"
            title={project.name}
          >
            {project.name}
          </span>
        </div>
      </td>
      {Object.values(project.metrics).map((value, index) => (
        <td key={index}>
          <div className="flex items-center justify-center w-full">
            <span
              className="font-normal text-lg/10 truncate"
              title={value.toString()}
            >
              {value}
            </span>
          </div>
        </td>
      ))}
      <td className="rounded-r-2xl pr-4" colSpan={2}>
        <div className="flex items-center justify-end w-full">
          <Badge value={project.status} />
        </div>
      </td>
    </tr>
  );
}
