import Image from "next/image";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import { getMetrics } from "../../services/metrics";

interface ProjectsTableRowProps {
  index: number;
  project: ProjectWithRank;
  onRowClick: (project: ProjectWithRank) => void;
}

export function ProjectsTableRow({ project, onRowClick }: ProjectsTableRowProps) {

  return (
    <tr className="cursor-pointer text-header-title" key={project.id} onClick={() => { onRowClick(project) }} >
      <td
        scope="row"
        className={"px-6 py-2 md:sticky md:left-0 bg-black font-bold text-lg truncate "}
      >
        <div className="flex items-center">
          <Image
            src={project.metadata?.sunnyAwards?.avatarUrl}
            alt={project.name}
            width={24}
            height={24}
            className="mr-2 border border-black rounded-full shrink-0"
          />
          <span
            className="text-base font-normal truncate max-w-32"
            title={project.name}>
            {project.name}
          </span>
        </div>
      </td>

      {getMetrics().map((metric, index) => (
        <td key={index} className={"px-12 text-base"}>
          <div className="">
            <span className="">
              {project.metrics?.[metric]
                ? project.metrics[metric].toLocaleString('en-US', {maximumFractionDigits: 2})
                : "0"}
            </span>
          </div>
        </td>
      ))}
    </tr>
  );
}
