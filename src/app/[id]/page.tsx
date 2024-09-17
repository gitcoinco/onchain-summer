"use client"

import ShareCard from "@/components/Details/ShareCard";
import { useProjectsContext } from "@/contexts/projectsContext";

export default function Project({ params }: { params: { id: string } }) {

    const { projects } = useProjectsContext();

    return (
        <section className="pt-24 mx-auto w-96 ">
            <div className="px-4 py-4 mx-auto bg-black sm:w-auto">
                <ShareCard
                    project={projects.find(project => project.id === params.id)}
                    onClick={() => console.log("clicked")}
                    showClose={false}
                />
            </div>

        </section>
    );
}
