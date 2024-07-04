import { Badge } from "../Table/Badge";
import clsx from "clsx";
import { ApplicationData } from "@/types";

interface ApplicationCardProps {
  application: ApplicationData;
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const { name, status, metric1, metric2, metric3 } = application;

  return (
    <div className="bg-white-40 shadow rounded-xl p-4">
      <div className="bg-white-50 rounded-xl p-4 flex items-center justify-between w-full">
        <span className="text-lg font-bold">{name}</span>
        <Badge value={status} className="w-20" />
      </div>
      <div className="mt-2 p-4 flex flex-col gap-2 items-center">
        <span className="font-bold">Metrics</span>
        <div className="flex flex-col w-full sm:flex-row gap-2 flex-wrap justify-center">
          <MetricCard name="MetricName1" value={metric1} />
          <MetricCard name="MetricName2" value={metric2} />
          <MetricCard name="MetricName3 very large" value={metric3} />
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
      )}
    >
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
}
