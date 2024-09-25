import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import loadingImg from "../../images/loading.gif";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import Image from "next/image";

type TableProps = {
  filter: string;
  onRowClick: (project: ProjectWithRank) => void;
  projects: ProjectWithRank[];
  isPending: boolean;
  isError: boolean;
};

export function ProjectsTable(props: TableProps) {

  if (props.isPending) {
    return (
      <div className="py-12 text-center">
        <Image
          src={loadingImg}
          alt="Loading..."
          className="w-1/6 mx-auto"
        />
      </div>
    );
  }

  if (props.isError) {
    return <div className="text-center">Something went wrong</div>;
  }

  return (
    <div className="relative pt-12 overflow-x-auto">
      <table className="w-full text-xl text-black border-collapse">
        <ProjectsTableHeadRow />
        <tbody>
          {props.projects
            .filter(
              project =>
                project.metadata.sunnyAwards.projectType === props.filter
            )
            .map((project, index) => (
              <ProjectsTableRow
                onRowClick={props.onRowClick}
                key={project.recipient}
                index={index}
                project={project}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
