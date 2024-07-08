import { useProjectsContext } from "@/contexts/projectsContext";
import { ApplicationCard } from "./ProjectCard";

export function ProjectsList() {
  const { projects } = useProjectsContext();

  return projects.map((project) => (
    <ApplicationCard key={project.id} project={project} />
  ));
}
