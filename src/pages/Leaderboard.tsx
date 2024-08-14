import loadingImg from "@/assets/loading.gif";
import { ProjectsTable } from "@/components/ProjectsTable";
import { ProjectsList } from "@/components/ProjectsList";
import { useProjectsContext } from "@/contexts/projectsContext";
import hero from "@/assets/hero.svg"

export function Leaderboard() {
  const { projects, isPending, isError } = useProjectsContext();

  const nApplications = projects?.length || 0;

  return (
    <div className={"w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24"}>

      <img
        src={hero}
        alt="Hero..."
        style={{ height: 450, margin: "0 auto" }}
      />
      
      <h2 className="pt-12 pb-8 text-3xl text-white">Projects {`(${nApplications})`}</h2>

      <div className="lg:px-4 lg:py-6 lg:rounded-3xl lg:bg-white-40">
        {isPending && (
          <div className="text-center">
            <img
              src={loadingImg}
              alt="Loading..."
              style={{ height: 20, margin: "0 auto" }}
            />
          </div>
        )}

        {!isPending && isError && (
          <div className="text-center">Something went wrong</div>
        )}

        {!isPending && !isError && (
          <>
            <div className="hidden lg:block">
              <ProjectsTable />
            </div>
            <div className="flex flex-col gap-2 lg:hidden">
              <ProjectsList />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
