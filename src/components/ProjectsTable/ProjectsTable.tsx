import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "@/contexts/projectsContext";
import { useEffect, useState } from "react";

type TableProps = {
  filter: string;
};

export function ProjectsTable(props: TableProps) {
  const { projects } = useProjectsContext();
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
     
    const approved = projects.filter((project) => project.status === "approved");

    const typed = approved.filter((project) => project.metadata.sunnyAwards.projectType === props.filter);
    
    setFiltered(typed);

  }
    , [projects]);



  return (
    <div className="relative pt-12 overflow-x-auto">
      <table className="w-full text-xl text-black border-collapse">
        <ProjectsTableHeadRow />
        <tbody>
          {filtered.map((project, index) => (
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
