"use client"

// import { ProjectsTable } from "@/components/ProjectsTable";
import hero from "../images/herotitle.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import Details from "./Details";
import { ProjectsTable } from "./ProjectsTable/ProjectsTable";
import Image from "next/image";
import { ProjectWithRank } from "@/services/ezrfApi/types";



export function Leaderboard() {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectWithRank>();

  const handleViewerClick = (project: ProjectWithRank | undefined) => {
    setIsDetailsOpen(!isDetailsOpen);
    if (project) {
      setSelectedProject(project);
    }
  };

  return (
    <div className="w-full pt-24 mx-auto ">

      <img
        src="/heroclouds.png"
        alt="clouds"
        className="fixed inset-0 object-cover w-full h-full pt-14 "

        style={{ width: "100%", margin: "0 auto" }}
      />

      <div className="py-32 lg:py-52 ">
        <div className="absolute left-0 w-4/5 top-36 md:top-56 md:w-2/5">
          <Image
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
              handleViewerClick(undefined);
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
