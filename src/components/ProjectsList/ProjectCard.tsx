import { Badge } from "../ProjectsTable/Badge";
import clsx from "clsx";
import { ProjectWithMetrics } from "@/services/ezrfApi/types";
import { getDisplayName, getMetrics } from "@/services/metrics";

interface ApplicationCardProps {
  project: ProjectWithMetrics;
}

export function ApplicationCard({ project }: ApplicationCardProps) {
  const { name, status, metrics } = project;

  return (
    <div className="p-4 shadow bg-white-40 rounded-xl">
      <div className="flex items-center justify-between w-full p-4 bg-white-50 rounded-xl">
        <span className="text-lg font-bold">{name}</span>
        <Badge value={status} className="w-20" />
      </div>
      <div className="flex flex-col items-center gap-2 p-4 mt-2">
        <span className="font-bold">Metrics</span>
        <div className="flex flex-col flex-wrap justify-center w-full gap-2 sm:flex-row">
          {getMetrics().map((metric, index) => (
            <MetricCard
              key={index}
              name={getDisplayName(metric)}
              value={
                metrics?.[metric] ? metrics[metric].toFixed(2).toString() : "0"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  name: string;
  value: number | string;
}

function MetricCard({ name, value }: MetricCardProps) {
  return (
    <div
      className={clsx(
        "bg-white-50 rounded-xl w-full sm:w-40 py-2 px-6 sm:p-4",
        "text-center",
        "flex sm:flex-col gap-2 justify-between"
      )}>
      <span className="truncate" title={name}>
        {name}
      </span>
      <span className="truncate" title={value.toString()}>
        {value}
      </span>
    </div>
  );
}
