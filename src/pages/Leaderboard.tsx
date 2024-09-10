import loadingImg from "@/assets/loading.gif";
import { ProjectsTable } from "@/components/ProjectsTable";
import { useProjectsContext } from "@/contexts/projectsContext";
import hero from "@/assets/leaderboardHero.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

      <div className="pb-12 text-xl text-center text-white pt-36 font-sora ">Come back soon to see data and metrics about your favorite projects</div>

        <Tabs className="pt-12">
          <TabList>
            <Tab>App</Tab>
            <Tab>Creator</Tab>
            <Tab>Other</Tab>
          </TabList>

          <TabPanel>
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
              <ProjectsTable filter="app" />
            </div>
          )}
        </div>
          </TabPanel>
          <TabPanel>
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
              <ProjectsTable filter="creator" />
            </div>
          )}
        </div>
          </TabPanel>
          <TabPanel>
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
              <ProjectsTable filter="other" />
            </div>
          )}
        </div>
          </TabPanel>
        </Tabs>

        {/* <h2 className="pt-12 pb-8 text-3xl text-white">Projects {`(${nApplications})`}</h2> */}


        {/* <div className="px-4 py-6 rounded-3xl">
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
              <ProjectsTable filter="creator" />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
