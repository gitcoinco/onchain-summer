import { ProjectsTableRow } from "./ProjectsTableRow";
import { ProjectsTableHeadRow } from "./ProjectsTableHeadRow";
import { useProjectsContext } from "@/contexts/projectsContext";

export function ProjectsTable() {
  const { projects } = useProjectsContext();

  return (
<div className="relative overflow-x-auto">
    <table className="w-full text-xl text-black border-collapse">


    {/* <div className="overflow-x-auto">
      <div className="relative shadow-md sm:rounded-lg"> 
        <table className="text-left text-gray-500 "> */}
       {/* <div className=" bg-transparent-sunset rounded-3xl"> */}

          <ProjectsTableHeadRow />
{/* </div> */}
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




    // </div>
  );
}
