import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { useApplicationsMetrics } from "@/hooks";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { sortProjects } from "./utils";

export interface SortConfig {
  key: string;
  direction: "ascending" | "descending";
}

interface ProjectsContext {
  projects: ProjectWithMetrics[];
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
      }}
    >
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
