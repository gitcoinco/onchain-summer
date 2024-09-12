import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "@/contexts/projectsContext";
import loadingImg from "@/assets/loading.gif";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";

type TableProps = {
  filter: string;
  onRowClick: (project: ProjectWithMetrics) => void;
};

export function ProjectsTable(props: TableProps) {
  const { projects, isPending, isError } = useProjectsContext();

  if (isPending) {
    return (
      <div className="py-12 text-center">
        <img
          src={loadingImg}
          alt="Loading..."
          style={{ height: 20, margin: "0 auto" }}
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
