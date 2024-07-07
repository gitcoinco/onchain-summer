import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";

interface ProjectsTableProps {
  projects: ProjectWithMetrics[];
  handleSort: (key: string) => void;
}

export function ProjectsTable({ projects, handleSort }: ProjectsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed">
        <thead>
          <ProjectsTableHeadRow projects={projects} handleSort={handleSort} />
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
