"use client"

import DetailCard from "@/components/Details/DetailCard";
import Details from "@/components/Details/Details";
import { useProjectsContext } from "@/contexts/projectsContext";



export default function Project({ params }: { params: { id: string } }) {


    const { projects, isPending, isError } = useProjectsContext();

    // 0x66076854e0f9ce49078c76ee39e2e9fae61a8526f406961eb85a8bba931d7dab

    return (
        <section className="pt-24 mx-auto w-96 ">
            <div className="px-4 py-4 mx-auto bg-black border-2 border-white rounded-md sm:w-auto">


                <DetailCard
                    project={projects.find(project => project.id === params.id)}
                    onClick={() => console.log("clicked")}
                    showClose={false}
                />
            </div>

        </section>
    );
}
