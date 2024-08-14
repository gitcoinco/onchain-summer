import loadingImg from "@/assets/loading.gif";
import { ProjectsTable } from "@/components/ProjectsTable";
import { ProjectsList } from "@/components/ProjectsList";
import { useProjectsContext } from "@/contexts/projectsContext";
import hero from "@/assets/hero.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

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

<Tabs className="pt-24">
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>


      

      <h2 className="pt-12 pb-8 text-3xl text-white">Projects {`(${nApplications})`}</h2>

      <div className="px-4 py-6 rounded-3xl bg-white-40">
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
          <div className="">
            <ProjectsTable />
          </div>
        )}
      </div>
    </div>
  );
}
