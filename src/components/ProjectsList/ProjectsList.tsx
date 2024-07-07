import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { ApplicationCard } from "./ProjectCard";

interface ProjectsListProps {
  projects: ProjectWithMetrics[];
  handleSort: (key: string) => void;
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return projects.map((project) => (
    <ApplicationCard key={project.id} project={project} />
  ));
}
