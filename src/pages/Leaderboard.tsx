import loadingImg from "@/assets/loading.gif";
import { ProjectsTable } from "@/components/ProjectsTable";
import { useProjectsContext } from "@/contexts/projectsContext";
import hero from "@/assets/awardhero.png"
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function Leaderboard() {
  const { isPending, isError } = useProjectsContext();

  // const nApplications = projects?.length || 0;

  return (
    <div className="w-full pt-24 mx-auto">

      <img
        src={hero}
        alt="Hero..."
        style={{ width: "100%", margin: "0 auto" }}
        // style={{ height: 450, margin: "0 auto" }}
      />
      <div className="px-6 lg:px-8">

      {/* <Tabs className="pt-12">
        <TabList>
          <Tab>Award 1</Tab>
          <Tab>Award 2</Tab>
        </TabList>

        <TabPanel>
          <h2></h2>
        </TabPanel>
        <TabPanel>
          <h2></h2>
        </TabPanel>
      </Tabs> */}

      {/* <h2 className="pt-12 pb-8 text-3xl text-white">Projects {`(${nApplications})`}</h2> */}

      <div className="pt-24 pb-12 text-xl text-center text-white ">Come back soon to see data and metrics about your favorite projects</div>

      <div className="px-4 py-6 rounded-3xl">
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
    </div>
  );
}
