import Image from "next/image";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import { getMetrics } from "../../services/metrics";
import award from "@/images/award.png";

interface ProjectsTableRowProps {
  index: number;
  project: ProjectWithRank;
  onRowClick: (project: ProjectWithRank) => void;
  metricType: number;
}

export function ProjectsTableRow({ project, onRowClick, metricType }: ProjectsTableRowProps) {

  return (
    <tr
      className="cursor-pointer text-header-title hover:bg-black/50"
      key={project.recipient}
      onClick={() => {
        onRowClick(project);
      }}>
      <td
        scope="row"
        className={
          "px-6 py-2 md:sticky md:left-0 md:mr-44 font-bold text-lg truncate bg-black "
        }>
        <div className="flex items-center w-full">
          {project.metadata.sunnyAwards?.avatarUrl ? 
          <Image
            src={project.metadata?.sunnyAwards?.avatarUrl}
            alt={project.name}
            width={24}
            height={24}
            className="mr-2 border border-black rounded-full w-6 h-6"
          />
           : 
           <Image
            src={award}
            alt="missing logo :)"
            width={24}
            height={40}
            className="mr-2 border border-black rounded-full shrink-0 w-6 h-6"
          />
           }
          <span
            className="text-base font-normal truncate max-w-32 md:max-w-44"
            title={project.name ? project.name : project.metadata.name}>
            {project.name ? project.name : project.metadata.name}
          </span>
        </div>
      </td>

      {getMetrics(metricType).map((metric, index) => (
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
