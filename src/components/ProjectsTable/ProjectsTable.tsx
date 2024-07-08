import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "@/contexts/projectsContext";

export function ProjectsTable() {
  const { projects } = useProjectsContext();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed">
        <thead>
          <ProjectsTableHeadRow />
        </thead>
        <div className="h-4" />
        <tbody>
          {projects.map((project, index) => (
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
