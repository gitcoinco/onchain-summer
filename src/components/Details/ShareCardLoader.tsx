"use client"

import ShareCard from "./ShareCard";
import { useProjectsContext } from "@/contexts/projectsContext";

interface ShareCardProps {
  id: string;
}

export default function ShareCardLoader({
  id
}: ShareCardProps) {

  const { projects } = useProjectsContext();

  return (
    <div className="flex">
      {/* <div>{projects.find(project => {project.recipient === id || project.applicationIds.includes(id)})?.name}</div> */}
      <div className="flex pt-24 mx-auto">
        <ShareCard
          project={
            projects.find(project => project.recipient === id || project?.applicationIds?.includes(id))
          }
          showClose={false}
          onClick={() => console.log("clicked")} />
      </div>
    </div>
  )
}
