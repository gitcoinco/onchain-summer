import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "../../contexts/projectsContext";
import loadingImg from "../../images/loading.gif";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import Image from "next/image";

type TableProps = {
  filter: string;
  onRowClick: (project: ProjectWithRank) => void;
};

export function ProjectsTable(props: TableProps) {
  const { projects, isPending, isError } = useProjectsContext();

  if (isPending) {
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

  if (isError) {
    return <div className="text-center">Something went wrong</div>;
  }

  return (
    <div className="relative pt-12 overflow-x-auto">
      <table className="w-full text-xl text-black border-collapse">
        <ProjectsTableHeadRow />
        <tbody>
          {projects
            .filter(
              project =>
                project.metadata.sunnyAwards.projectType === props.filter
            )
            .map((project, index) => (
              <ProjectsTableRow
                onRowClick={props.onRowClick}
                key={project.id}
                index={index}
                project={project}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
