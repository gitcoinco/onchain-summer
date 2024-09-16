import Image from "next/image";
import { ProjectWithRank } from "../../services/ezrfApi/types";
import { getDisplayName, getMetrics } from "../../services/metrics";
import { TfiClose, TfiShare } from "react-icons/tfi";
import { SHARE_URL } from "@/services/ezrfApi/config";
import { toast } from "react-toastify";
import logo from "@/images/logopng.png"

type DetailCardProps = {
  project: ProjectWithRank | undefined;
  showClose: boolean;
  onClick: () => void;
};

type MetricProps = {
  project: ProjectWithRank | undefined;
  metric: string;
};


function Metric(props: MetricProps) {
  return (
    <div className="py-4 font-normal text-center">
      <div className="text-base text-white-50">
        {getDisplayName(props.metric)}
      </div>

      <div className="text-xl">
        {props.project?.metrics?.[props.metric]
          ? props.project?.metrics[props.metric].toLocaleString('en-US', {maximumFractionDigits: 2})
          : "0"}
      </div>

    </div>
  )
}

export default function DetailCard({ project, showClose, onClick }: DetailCardProps) {

  function share() {
    navigator.clipboard.writeText(SHARE_URL + project?.id)
    toast.success("Copied to clipboard")
  }


  return (

    // <div className="w-screen px-4 py-4 -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white rounded-md sm:w-auto md:py-12 md:px-12">
    <div>
      {showClose ? (
        <div className="absolute top-0 flex cursor-pointer right-2">

          <div className="p-4" onClick={share}>
            < TfiShare />
          </div>
          <div className="p-4 " onClick={onClick}>
            <TfiClose />
          </div>
        </div>
      ) : null

      }


      <div className="grid grid-cols-3 pt-8 pb-4 border-b-2 border-white">
        <div className="mx-auto ">
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
        </div>

        <div
          className="col-span-2 text-2xl font-bold text-left text-white ">

          {project?.name}



          <div className="grid grid-cols-2">

            <Metric project={project} metric={getMetrics()[0]} />
            <Metric project={project} metric={getMetrics()[1]} />

          </div>
        </div>
      </div>



      <div className="grid grid-cols-2 gap-4 pt-6 text-white">
        {getMetrics().map((metric, index) => (
          index > 2 ? <Metric project={project} metric={metric} key={index} /> : <></>

          // <Metric project={project} metric={metric} key={index} />

          // <div className="py-4 text-center" key={index}>
          //   <div className="text-white-50">
          //     {getDisplayName(metric)}
          //   </div>

          //   <div className="text-xl">
          //     {project?.metrics?.[metric]
          //       ? project?.metrics[metric].toFixed(getRound(metric)).toString()
          //       : "0"}
          //   </div>

          // </div>


        ))}

      </div>
      <Image src={logo} alt="Logo" width={100} className="absolute right-1 bottom-1" />


    </div>
    // </div>
  );
}
