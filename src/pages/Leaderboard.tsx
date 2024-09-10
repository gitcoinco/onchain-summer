import { ProjectsTable } from "@/components/ProjectsTable";
import hero from "@/assets/leaderboardHero.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export function Leaderboard() {
  return (
    <div className="w-full pt-24 mx-auto">
      <img
        src={hero}
        alt="Hero..."
        style={{ width: "100%", margin: "0 auto" }}
      />
      <div className="px-6 lg:px-8">
        <div className="pb-12 text-xl text-center text-white pt-36 font-sora ">
          Come back soon to see data and metrics about your favorite projects
        </div>

        <Tabs className="pt-12">
          <TabList>
            <Tab>App</Tab>
            <Tab>Creator</Tab>
            <Tab>Other</Tab>
          </TabList>
          <TabPanel>
            <ProjectsTable filter="app" />
          </TabPanel>
          <TabPanel>
            <ProjectsTable filter="creator" />
          </TabPanel>
          <TabPanel>
            <ProjectsTable filter="other" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
