import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "@/contexts/projectsContext";
import loadingImg from "@/assets/loading.gif";

type TableProps = {
  filter: string;
};

export function ProjectsTable(props: TableProps) {
  const { projects, isPending, isError } = useProjectsContext();

  if (isPending) {
    return (
      <div className="text-center">
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
