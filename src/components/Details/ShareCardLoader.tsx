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
    <section className="pt-24 mx-auto w-96 ">
      <div className="px-4 py-4 mx-auto bg-black sm:w-auto">
        <ShareCard
          project={projects.find(project => project.id === id)}
          onClick={() => console.log("clicked")}
          showClose={false}
        />
      </div>
    </section>
  )
}
