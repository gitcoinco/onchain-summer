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
    // <section className="pt-24 mx-auto w-96 ">
    //   <div className="py-4 mx-auto bg-black px-42 sm:w-auto">
    //     <ShareCard
    //       project={projects.find(project => project.id === id)}
    //       onClick={() => console.log("clicked")}
    //       showClose={false}
    //     />
    //   </div>
    // </section>
    <div className="fixed z-40 left-1/2 top-1/2">
    <div
      className="fixed inset-0 bg-black opacity-80 navbar-backdrop"
    ></div>
    <div className="w-screen px-4 px-12 -translate-x-1/2 -translate-y-1/2 bg-black sm:w-auto">
      <ShareCard
        project={projects.find(project => project.id === id)}
        showClose={false}
        onClick={() => console.log("clicked")}/>
    </div>

  </div>
  )
}
