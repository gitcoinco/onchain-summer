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
import Link from "next/link";
import IconWithTooltip from "./IconWithTooltip";
import { APP_METRICS_TYPE, CREATOR_METRICS_TYPE, info } from "@/services/metrics";
import clsx from "clsx";
import { SearchInput } from "./SearchInput";

export function Leaderboard() {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectWithRank>();
  const [searchQuery, setSearchQuery] = useState("");

  const { projects, isPending, isError } = useProjectsContext();

  const handleViewerClick = (project: ProjectWithRank | undefined) => {
    setIsDetailsOpen(!isDetailsOpen);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const projectsToDisplay =
    searchQuery === ""
      ? projects
      : projects.filter(project =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

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

      <div className="sticky z-10 bg-black/90 rounded-md">
        <div className="px-6 lg:px-8 ">
          <Tabs className="pt-12">
            <TabList className="flex md:items-center md:justify-between md:flex-row items-between justify-center flex-col gap-4">
              <div className="flex items-center">
                <Tab
                  className={clsx(["react-tabs__tab", "rounded"])}
                  selectedClassName="bg-white/10">
                  App
                </Tab>
                <Tab
                  className={clsx(["react-tabs__tab", "rounded"])}
                  selectedClassName="bg-white/10">
                  Creator
                </Tab>
                <Tab
                  className={clsx(["react-tabs__tab", "rounded"])}
                  selectedClassName="bg-white/10">
                  Other
                </Tab>
                <IconWithTooltip text={info} />
              </div>
              <SearchInput onSearch={handleSearch} />
            </TabList>
            <TabPanel>
              <ProjectsTable
                filter="app"
                metricType={APP_METRICS_TYPE}
                onRowClick={handleViewerClick}
                projects={projectsToDisplay}
                isPending={isPending}
                isError={isError} />
            </TabPanel>
            <TabPanel>
              {/* <div className="text-2xl text-center py-44 text-white">
                Coming Soon!
              </div> */}
              <ProjectsTable
                filter="creator"
                metricType={CREATOR_METRICS_TYPE}
                onRowClick={handleViewerClick}
                projects={projectsToDisplay}
                isPending={isPending}
                isError={isError} />
            </TabPanel>
            <TabPanel>
              <ProjectsTable
                filter="other"
                metricType={APP_METRICS_TYPE}
                onRowClick={handleViewerClick}
                projects={projectsToDisplay}
                isPending={isPending}
                isError={isError} />
            </TabPanel>
          </Tabs>
        </div>

        <div className="flex gap-2 p-12 text-sm text-white">
          <InfoIcon className="w-4 h-4 mr-2 min-w-4" />
          <div>Don't see your project or think the numbers are off? Please <span className="underline"><Link href="https://register.thesunnyawards.fun/">click here</Link></span> to edit your application. The address you provide will be queried against transactions, traces, and logs datasets for relevant metrics.</div>


        </div>

      </div>
      {isDetailsOpen ? (
        <>
          <Details
            onClick={() => {
              handleViewerClick(undefined);
            }}
            project={selectedProject}
          />
        </>
      ) : (
        <></>
      )}
      <ToastContainer />

    </div>
  );
}
