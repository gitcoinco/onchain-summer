import { ProjectsTable } from "@/components/ProjectsTable";
import hero from "@/assets/herotitle.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import Details from "@/components/Details";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";

export function Leaderboard() {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectWithMetrics>();

  const handleViewerClick = (project: ProjectWithMetrics) => {
    setIsDetailsOpen(!isDetailsOpen);
    setSelectedProject(project);
  };



  return (
    <div className="w-full pt-24 mx-auto ">

      <img
        src="/heroclouds.png"
        className="fixed inset-0 z-0 pt-14"
        alt="night sky"
        style={{ width: "100%", margin: "0 auto" }}
      />

      <div className="py-32 lg:py-52 ">
        <div className="absolute left-0 top-72 md:top-56">
          <img
            src={hero}
            alt="Hero..."
            style={{ width: "80%", margin: "0 auto" }}
          />
        </div>
      </div>



      <div className="sticky z-10 bg-black rounded-md">
        <div className="px-6 lg:px-8 ">
          <Tabs className="pt-12">
            <TabList>
              <Tab>App</Tab>
              <Tab>Creator</Tab>
              <Tab>Other</Tab>
            </TabList>
            <TabPanel>
              <ProjectsTable
                filter="app"
                onRowClick={handleViewerClick} />
            </TabPanel>
            <TabPanel>
              <ProjectsTable
                filter="creator"
                onRowClick={handleViewerClick} />
            </TabPanel>
            <TabPanel>
              <ProjectsTable
                filter="other"
                onRowClick={handleViewerClick} />
            </TabPanel>
          </Tabs>
        </div>
        <div className="pb-12 text-xl text-center text-white pt-36 font-sora ">
          We'll be refreshing data weekly, come back and check!
        </div>
      </div>
      {isDetailsOpen ? (
        <>
          <Details
            onClick={() => {
              handleViewerClick();
            }}
            project={selectedProject}
          // image={viewed}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
