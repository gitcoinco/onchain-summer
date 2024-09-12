import { ProjectWithRank } from "@/services/ezrfApi/types";
import { getDisplayName, getMetrics, getRound } from "@/services/metrics";

type DetailsProps = {
  onClick: () => void;
  project: ProjectWithRank;
};

export default function Details({ onClick, project }: DetailsProps) {
  return (
    <div className="fixed z-40 left-1/2 top-1/2">
      <div
        className="fixed inset-0 bg-black opacity-80 navbar-backdrop"
        onClick={onClick}
      ></div>
      <div className="w-screen px-4 py-4 -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white rounded-md sm:w-auto md:py-12 md:px-12">
        <div className="items-center justify-center pt-4 ">
          <img
            src={project.metadata?.sunnyAwards?.avatarUrl}
            alt={project.name}
            className="mx-auto border border-black rounded-full size-16"
          />
          <div
            className="pt-6 text-xl font-bold text-center text-white ">
            {project.name}
          </div>
        </div>

        <div className="grid grid-cols-2 pt-6 text-white">
          {getMetrics().map((metric, index) => (

            <div className="py-4 text-center" key={index}>
              <div className="text-white-50">
                {getDisplayName(metric)}
              </div>

              <div className="text-xl">
                {project.metrics?.[metric]
                  ? project.metrics[metric].toFixed(getRound(metric)).toString()
                  : "0"}
              </div>

            </div>


          ))}

        </div>
      </div>
    </div>
  );
}
