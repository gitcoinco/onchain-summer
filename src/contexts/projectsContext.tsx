import { createContext, useContext, useState, useMemo, ReactNode, useEffect } from "react";
import { ProjectWithRank } from "@/services/ezrfApi/types";
import { sortProjects } from "./utils";
import { useInfiniteApplications } from "@/hooks/useApplicationsMetrics";

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

  const { data, hasNextPage, fetchNextPage, isPending, isError } = useInfiniteApplications();
  const [projects, setProjects] = useState<ProjectWithRank[]>([]);


  useEffect(() => {
    if (projects.length > 1500) {
      console.log("projects hit over 1500 we're done: " + projects.length);
      return;
    }
    if (!data || data?.pages?.length === 0) return;

    setProjects(prevItems => [...prevItems, ...data.pages[data.pages.length - 1]]);

    if (hasNextPage) {
      console.log("fetching next page");
      fetchNextPage();
    }else{
      console.log("no more pages to fetch")
    }

  }
    , [data]);

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
        isError
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
