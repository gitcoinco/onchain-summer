import { createContext, useContext, useState, useMemo, ReactNode } from "react";
// import { useApplicationsMetrics } from "@/hooks";
import { ProjectWithRank } from "@/services/ezrfApi/types";
import { sortProjects } from "./utils";
import { useApplicationsMetrics } from "@/hooks";

export interface SortConfig {
  key: string;
  direction: "ascending" | "descending";
}

interface ProjectsContext {
  projects: ProjectWithRank[];
  sortConfig: SortConfig;
  handleSort: (key: string) => void;
  isPending: boolean;
  isError: boolean;
}

const ProjectsContext = createContext<ProjectsContext | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "name",
    direction: "ascending",
  });

  const { isError, isPending, data: projects } = useApplicationsMetrics();

  // const isPending = false;
  // const isError = false;

  // const projects  = [

  //   {
  //     rank: 1,
  //     id: "1",
  //     name: "Project 1",
  //     status: "Active",
  //     metrics: {
  //       totalApplications: 10,
  //       totalRewards: 20,
  //       totalEligibility: 30,
  //     },
  //     profile: {
  //       name: "Project 1",
  //       profileImageUrl: "https://via.placeholder.com/150",
  //       bannerImageUrl: "https://via.placeholder.com/150",
  //     },
  //     metadata: {
  //       name: "Project 1",
  //       bio: "Project 1",
  //       websiteUrl: "https://www.google.com",
  //     },
  //   },
  //   {
  //     rank: 2,
  //     id: "2",
  //     name: "Project 2",
  //     status: "Inactive",
  //     metrics: {
  //       totalApplications: 20,
  //       totalRewards: 30,
  //       totalEligibility: 40,
  //     },
  //     profile: {
  //       name: "Project 2",
  //       profileImageUrl: "https://via.placeholder.com/150",
  //       bannerImageUrl: "https://via.placeholder.com/150",
  //     },
  //     metadata: {
  //       name: "Project 2",
  //       bio: "Project 2",
  //       websiteUrl: "https://www.google.com",
  //     },
  //   },
  //   {
  //     rank: 3,
  //     id: "3",
  //     name: "Project 3",
  //     status: "Active",
  //     metrics: {
  //       totalApplications: 30,
  //       totalRewards: 40,
  //       totalEligibility: 50,
  //     },
  //     profile: {
  //       name: "Project 3",
  //       profileImageUrl: "https://via.placeholder.com/150",
  //       bannerImageUrl: "https://via.placeholder.com/150",
  //     },
  //     metadata: {
  //       name: "Project 3",
  //       bio: "Project 3",
  //       websiteUrl: "https://www.google.com",
  //     },
  //   },
  //   {
  //     rank: 4,
  //     id: "4",
  //     name: "Project 4",
  //     status: "Inactive",
  //     metrics: {
  //       totalApplications: 40,
  //       totalRewards: 50,
  //       totalEligibility: 60,
  //     },
  //     profile: {
  //       name: "Project 4",
  //       profileImageUrl: "https://via.placeholder.com/150",
  //       bannerImageUrl: "https://via.placeholder.com/150",
  //     },
  //     metadata: {
  //       name: "Project 4",
  //       bio: "Project 4",
  //       websiteUrl: "https://www.google.com",
  //     },
  //   }

  // ]

  const sortedProjects = useMemo(
    () => sortProjects(projects, sortConfig),
    [projects, sortConfig]
  );

  const handleSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects: sortedProjects,
        sortConfig,
        handleSort,
        isPending,
        isError,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
