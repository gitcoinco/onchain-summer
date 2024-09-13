import Image from "next/image";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import { getDisplayName, getMetrics, getRound } from "../../services/metrics";

type DetailCardProps = {
  project: ProjectWithRank | undefined;
  showClose: boolean;
  onClick: () => void;
};

export default function DetailCard({ project, showClose, onClick }: DetailCardProps) {
  return (

    <div className="w-screen px-4 py-4 -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white rounded-md sm:w-auto md:py-12 md:px-12">
      {showClose ? (
        <div className="absolute p-4 cursor-pointer top-5 right-5" onClick={onClick}>
          x
          </div>
      ) : null
            
          }
      <div className="items-center justify-center pt-4 ">
        {project && project?.metadata?.sunnyAwards?.avatarUrl ? (
          <Image
            src={project.metadata.sunnyAwards.avatarUrl}
            alt={project.name}
            width={64}
            height={64}
            className="mx-auto border border-black rounded-full "
          />
        ) : (
          <div className="mx-auto border border-black rounded-full size-16"></div>
        )}

        <div
          className="pt-6 text-xl font-bold text-center text-white ">
          {project?.name}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-6 text-white">
        {getMetrics().map((metric, index) => (

          <div className="py-4 text-center" key={index}>
            <div className="text-white-50">
              {getDisplayName(metric)}
            </div>

            <div className="text-xl">
              {project?.metrics?.[metric]
                ? project?.metrics[metric].toFixed(getRound(metric)).toString()
                : "0"}
            </div>

          </div>


        ))}

      </div>
    </div>
  );
}
