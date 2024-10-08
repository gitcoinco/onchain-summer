import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import loadingImg from "../../images/loading.gif";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import Image from "next/image";

type TableProps = {
  filter: string;
  metricType: number;
  onRowClick: (project: ProjectWithRank) => void;
  projects: ProjectWithRank[];
  isPending: boolean;
  isError: boolean;
};

export function ProjectsTable(props: TableProps) {
  if (props.isPending) {
    return (
      <div className="py-12 text-center">
        <Image src={loadingImg} alt="Loading..." className="w-1/6 mx-auto" />
      </div>
    );
  }

  if (props.isError) {
    return <div className="text-center">Something went wrong</div>;
  }

  return (
    <div className="relative pt-12 overflow-x-auto custom-scrollbar">
      <table className="w-full text-xl text-black border-collapse">
        <ProjectsTableHeadRow
          metricType={props.metricType}
        />
        <tbody>
          {props.projects
            .filter(
              project =>
                project.metadata?.sunnyAwards.projectType === props.filter
              && project.metrics?.metrics_type === props.metricType
            )
            .map((project, index) => 
              (
              <ProjectsTableRow
                onRowClick={props.onRowClick}
                key={`${project.recipient}_${project.name}`}
                index={index}
                project={project}
                metricType={props.metricType}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
