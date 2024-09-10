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
    // console.log("ProjectsTable rendered");

    // console.log("projects: " + JSON.stringify(projects));
    // console.log("projects length: " + projects.length);

    // console.log("project zero: " + JSON.stringify(projects[0]));

    projects.map((project) => {
      // console.log("project status: " + project.status);
      console.log("project type: " + project.metadata.sunnyAwards.projectType);
    }
    );

    const approved = projects.filter((project) => project.status === "approved");
    // console.log("approved length: " + approved.length);

    const typed = approved.filter((project) => project.metadata.sunnyAwards.projectType === props.filter);
    // console.log("typed length: " + typed.length);

    setFiltered(typed);



    // if (props.filter === "") {
    //   setFiltered(projects);
    // } else {
    //   const filteredProjects = projects.filter((project) =>
    //     project.name.toLowerCase().includes(props.filter.toLowerCase())
    //   );
    //   setFiltered(filteredProjects);
    // }

  }
    , [projects]);

  // console.log(JSON.stringify(projects[0]))


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
