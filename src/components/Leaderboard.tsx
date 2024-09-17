"use client"

import hero from "../images/herotitle.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import Details from "./Details/Details";
import { ProjectsTable } from "./ProjectsTable/ProjectsTable";
import Image from "next/image";
import { ProjectWithRank } from "@/services/ezrfApi/types";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProjectsContext } from "@/contexts/projectsContext";
import { InfoIcon } from "lucide-react";


export function Leaderboard() {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectWithRank>();

  const { projects, isPending, isError } = useProjectsContext();

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

      <div className="py-32 ">
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
                onRowClick={handleViewerClick}
                projects={projects}
                isPending={isPending}
                isError={isError} />
            </TabPanel>
            <TabPanel>
              <div className="text-2xl text-center pt-44">
                Coming Soon!
              </div>
              {/* <ProjectsTable
                filter="creator"
                onRowClick={handleViewerClick} 
                projects={projects}
                isPending={isPending}
                isError={isError} /> */}
            </TabPanel>
            <TabPanel>
              <ProjectsTable
                filter="other"
                onRowClick={handleViewerClick}
                projects={projects}
                isPending={isPending}
                isError={isError} />
            </TabPanel>
          </Tabs>
        </div>



    
        <div className="flex flex-col items-start gap-2 p-12 text-sm text-white">
            <div className="flex items-center gap-2">
              <InfoIcon className="w-4 h-4" />
              <p>Metrics compiled based on open datasets sourced from Dune, Flipside, Goldsky, and Open Source Observer.</p>
            </div>
            <div className="flex items-center gap-2">
              <InfoIcon className="w-4 h-4" />
              <p>Metrics are refreshed weekly, come back and check for updates.</p>
            </div>

            <div className="flex items-center gap-2">
              <InfoIcon className="w-4 h-4" />
              <p>Don't see your project or think the numbers are off? Please click here to edit your application. The address you provide will be queried against transactions, traces, and logs datasets for relevant metrics.
              </p>
            </div>




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
      <ToastContainer />

    </div>
  );
}
