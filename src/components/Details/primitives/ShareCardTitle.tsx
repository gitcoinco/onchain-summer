import { ProjectWithRank } from "@/services/ezrfApi/types";
import { APP_METRICS_TYPE } from "@/services/metrics";
import Link from "next/link";


interface Props {
    project: ProjectWithRank;
}

export default function ShareCardTitle({ project }: Props) {

    return (
        <>
        {project.metrics?.metrics_type === APP_METRICS_TYPE ? (

            <AppTitle project={project} />
        ):(
            <CreatorTitle project={project} />
        )}
        
        </>
    )
}



function AppTitle({ project }: Props) {
    return (
        <div className="w-full">
            {project?.metadata?.websiteUrl ? (
                <Link href={project.metadata.websiteUrl}>
                    <h3 className="flex text-2xl font-bold leading-none">{project?.name}</h3>
                </Link>
            ) : (
                <h3 className="flex text-2xl font-bold leading-none">{project?.name}</h3>
            )}
        </div>


    )
}

function CreatorTitle({ project }: Props) {
    return (
        <div className="w-full">

            <h3 className="flex text-2xl font-bold leading-none">{project?.name}</h3>

        </div>


    )
}
