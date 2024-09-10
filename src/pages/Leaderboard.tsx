import loadingImg from "@/assets/loading.gif";
import { ProjectsTable } from "@/components/ProjectsTable";
import { useProjectsContext } from "@/contexts/projectsContext";
import hero from "@/assets/leaderboardHero.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function Leaderboard() {
  const { isPending, isError } = useProjectsContext();

  return (
    <div className="w-full pt-24 mx-auto">

      <img
        src={hero}
        alt="Hero..."
        style={{ width: "100%", margin: "0 auto" }}
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

            <LeaderboardTabView filter="app" isPending={isPending} isError={isError} />

          </TabPanel>
          <TabPanel>
            <LeaderboardTabView filter="creator" isPending={isPending} isError={isError} />

          </TabPanel>
          <TabPanel>

            <LeaderboardTabView filter="other" isPending={isPending} isError={isError} />
          </TabPanel>
        </Tabs>


      </div>
    </div>
  );
}

type LeaderboardTabViewProps = {
  filter: string;
  isPending: boolean;
  isError: boolean;
};

export function LeaderboardTabView(props: LeaderboardTabViewProps) {
  return (
    <div className="px-4 py-6 rounded-3xl">
      {props.isPending && (
        <div className="text-center">
          <img
            src={loadingImg}
            alt="Loading..."
            style={{ height: 20, margin: "0 auto" }}
          />
        </div>
      )}

      {!props.isPending && props.isError && (
        <div className="text-center">Something went wrong</div>
      )}

      {!props.isPending && !props.isError && (
        <div className="">
          <ProjectsTable filter={props.filter} />
        </div>
      )}
    </div>
  );
}
