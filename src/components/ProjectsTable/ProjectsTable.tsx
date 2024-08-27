import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "@/contexts/projectsContext";

export function ProjectsTable() {
  const { projects } = useProjectsContext();


  return (
    <div className="relative pt-12 overflow-x-auto">
      <table className="w-full text-xl text-black border-collapse">
        <ProjectsTableHeadRow />
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
